// SPDX-FileCopyrightText: 2026 Vertex X7-53
//
// SPDX-License-Identifier: GPL-3.0-or-later

import * as yaml from '@std/yaml';
import * as path from '@std/path';
import * as logtape from '@logtape/logtape';
import * as api from '@glassway/kubernetes-models';

import { CollectionUtilities, Constructor, IComponent, GVK, ResolvedComponent, KubeContext, KubeResourceUtilities, KubeResource, TargetApplyParams, ICompileListener, Result } from '@glassway/architect';
import { kustomizeToolkitFluxcdIo, sourceToolkitFluxcdIo, helmToolkitFluxcdIo, fluxcdControlplaneIo } from '../../generated/crds/index.ts';
import { GitOpsController, K8sPluginGitOpsProps } from '../base.ts';
import { KubeWriter, KubeWriterOutputFormat } from '../../writer.ts';
import { IKubeTarget } from '../../target/index.ts';
import { FluxCDOptions, FluxCDShim } from './shim.ts';
import { OCIHelper } from '../../helpers/oci.ts';
import { HelmChartOpts } from '../../builders/index.ts';
import { KubeComponent } from '../../component.ts';

export type FluxCDControllerParams = NonNullable<K8sPluginGitOpsProps['flux']>;

export class FluxCDController extends GitOpsController {
  protected readonly params: FluxCDControllerParams;
  protected readonly shim: FluxCDShim;
  protected readonly logger: logtape.Logger;
  private readonly oci: OCIHelper;
  private readonly helmRepos: Set<string> = new Set<string>();

  public constructor(target: IKubeTarget, params: FluxCDControllerParams) {
    super(target);
    this.logger = logtape.getLogger(['architect', 'kubernetes', 'gitops', 'flux']);
    this.params = params;
    this.shim = new FluxCDShim();
    this.oci = new OCIHelper(this.logger);
  }

  private buildFluxOptions(): FluxCDOptions {
    return {
      context: this.target.cluster.client?.context
    }
  }

  public async apply(result: Result, _params?: TargetApplyParams, _logger?: logtape.Logger, listener?: ICompileListener): Promise<void> {
    const tmpdir = await Deno.makeTempDir();

    try {
      await this.write(result, tmpdir);
      await this.upload(result, tmpdir, listener);
      await this.reconcile();
    } finally {
      await Deno.remove(tmpdir, {
        recursive: true
      });
    }
  }

  private async upload(result: Result, dir: string, listener?: ICompileListener): Promise<void> {
    if (this.params.sources.oci) {
      const entries = Object.entries(result.components);
      listener?.setTotal(entries.length + 1);

      await Promise.all(Object.entries(result.components).map(async ([k, _]) => {
        const resolved = result.graph.components[k];
        const ctx = resolved.component.context as KubeContext;
        listener?.setStatus(`Pushing OCI Image for ${resolved.component.toString()}`);
        await this.uploadOCI(path.join(dir, 'components', ctx.namespace!, ctx.name), this.componentName(resolved.component));
        listener?.onResourceEnd();
      }));

      listener?.setStatus('Pushing Cluster OCI Image');
      await this.uploadOCI(path.join(dir, 'cluster'), 'cluster');
      listener?.onResourceEnd();
    } else {
      throw new Error('unsupported flux source type');
    }
  }

  private async getOCIPrefix(): Promise<string> {
    const oci = this.params.sources.oci!;
    return `oci://${oci.registry}/${oci.prefix ?? ''}${this.target.model.metadata.name!}`;
  }

  private async uploadOCI(dir: string, name: string): Promise<void> {
    const oci = this.params.sources.oci!;
    const git = await this.target.project.getGitInfo();

    const path = `${await this.getOCIPrefix()}:${name}`;
    const creds = await this.oci.getCredentials(oci.registry);

    await this.shim.pushArtifact(path, {
      ...this.buildFluxOptions(),
      creds: creds ? `${creds.username}:${creds.password}` : undefined,
      path: dir,
      source: git.origin!,
      reproducible: true,
      revision: `${git.branch!}@sha1:${git.revision!}`
    });

    this.logger.debug(`successfully pushed OCI artifact to ${path}`);
  }

  private async reconcile() {
    // TODO: onResourceStart / onResourceEnd for every reconciled resource
  }

  private async write(result: Result, dir: string) {
    // write all the components
    const writer = result.writer as KubeWriter;
    await writer.write(result, path.join(dir, "components"), {
      format: KubeWriterOutputFormat.PerComponent,
      gitops: this
    });

    // write the cluster dir
    const clusterDir = path.join(dir, "cluster");
    await Deno.mkdir(clusterDir);
    const resources: KubeResource[] = [];

    // write resource sets
    await Promise.all(
      Object.entries(result.components).map(async ([k, v]) => {
        const component = result.graph.components[k];
        resources.push(await this.componentResourceSet(component, v as KubeResource[]));
      }),
    );

    for (const resource of resources) {
      await Deno.writeTextFile(
        path.join(
          clusterDir,
          `${KubeResourceUtilities.resourceId(resource)}.yaml`,
        ),
        KubeWriter.stringify(resource),
      );
    }
  }

  private async componentResourceSet(
    resolved: ResolvedComponent,
    resources: KubeResource[]
  ): Promise<fluxcdControlplaneIo.v1.ResourceSet> {
    const component = resolved.component as KubeComponent;
    const ctx = component.context;
    const cid = this.componentName(resolved.component);

    const resourceCopy = Array.from(resources);
    const namespaces = CollectionUtilities.takeFrom(resourceCopy, r => {
      return this.resourceSatisfiesAny(r, [api.v1.Namespace]);
    });

    const prelude = CollectionUtilities.takeFrom(resourceCopy, r => {
      return (r.metadata?.labels ?? {})['architect.glassway.net/position'] === 'prelude';
    });

    // Disable pruning for all namespaces if requested
    if (!component.prune) {
      namespaces.forEach(n => {
        if (!n.metadata) n.metadata = {};
        if (!n.metadata.annotations) n.metadata.annotations = {};

        n.metadata.annotations['fluxcd.controlplane.io/prune'] = 'disabled';
      });
    }

    // const sources = CollectionUtilities.takeFrom(resourceCopy, r => {
    //   return this.resourceSatisfiesAny(r, [
    //     sourceToolkitFluxcdIo.v1.HelmRepository,
    //     sourceToolkitFluxcdIo.v1.GitRepository,
    //     sourceToolkitFluxcdIo.v1.OCIRepository,
    //     sourceToolkitFluxcdIo.v1.Bucket,
    //     sourceToolkitFluxcdIo.v1.ExternalArtifact
    //   ]);
    // });

    const sources: KubeResource[] = [];
    const kustomizations = CollectionUtilities.takeFrom(resourceCopy, r => {
      return this.resourceSatisfiesAny(r, [kustomizeToolkitFluxcdIo.v1.Kustomization]);
    });

    const charts = CollectionUtilities.takeFrom(resourceCopy, r => {
      return this.resourceSatisfiesAny(r, [helmToolkitFluxcdIo.v2.HelmRelease]);
    });

    const primary: kustomizeToolkitFluxcdIo.v1.Kustomization[] = [];
    const prologue = CollectionUtilities.takeFrom(resourceCopy, r => {
      return (r.metadata?.labels ?? {})['architect.glassway.net/position'] === 'prologue';
    });

    primary.push(new kustomizeToolkitFluxcdIo.v1.Kustomization({
      metadata: {
        name: cid,
        namespace: ctx.namespace
      },
      spec: {
        dependsOn: resolved.dependencies.map((d) => {
          return {
            name: this.componentName(d),
            namespace: (d.context as KubeContext).namespace
          };
        }),
        interval: "10m0s",
        prune: component.prune,
        sourceRef: {
          // TODO: should not be static
          kind: 'OCIRepository',
          name: cid,
          namespace: 'flux-system'
        },
        wait: true
      },
    }));

    if (this.params.sources.oci) {
      sources.push(new sourceToolkitFluxcdIo.v1.OCIRepository({
        metadata: {
          name: cid,
          namespace: 'flux-system'
        },
        spec: {
          interval: '1m0s',
          url: await this.getOCIPrefix(),
          ref: {
            tag: cid
          },
          secretRef: this.params.sources.oci.secretRef
        }
      }));
    }

    const labels = {
      'architect.glassway.net/component': resolved.component.context.name
    };

    return new fluxcdControlplaneIo.v1.ResourceSet({
      metadata: {
        name: cid,
        namespace: 'flux-system',
        labels: labels
      },
      spec: {
        commonMetadata: {
          labels: labels
        },
        dependsOn: resolved.dependencies.map((d) => {
          return {
            apiVersion: 'fluxcd.controlplane.io/v1',
            kind: 'ResourceSet',
            name: this.componentName(d),
            namespace: 'flux-system',
            ready: true
          };
        }),
        wait: true,
        steps: [
          { name: 'namespaces', timeout: '1m', resources: namespaces },
          { name: 'prelude', timeout: '1m', resources: prelude },
          { name: 'sources', timeout: '2m', resources: sources },
          { name: 'kustomizations', timeout: '15m', resources: kustomizations },
          { name: 'charts', timeout: '15m', resources: charts },
          { name: 'resources', timeout: '15m', resources: primary },
          { name: 'prologue', timeout: '1m', resources: prologue }
        ].filter(s => s.resources.length > 0)
      }
    });
  }

  public override async clusterObjects(): Promise<KubeResource[]> {
    const resources: KubeResource[] = [];

    if (this.params.sources.oci) {
      resources.push(new sourceToolkitFluxcdIo.v1.OCIRepository({
        metadata: {
          name: 'cluster',
          namespace: 'flux-system',
          annotations: {
            'architect.glassway.net/gitops-exclude': 'true',
          }
        },
        spec: {
          interval: '1m0s',
          url: await this.getOCIPrefix(),
          ref: {
            tag: 'cluster'
          },
          secretRef: this.params.sources.oci.secretRef
        }
      }));

      resources.push(new kustomizeToolkitFluxcdIo.v1.Kustomization({
        metadata: {
          name: 'cluster',
          namespace: 'flux-system',
          annotations: {
            'architect.glassway.net/gitops-exclude': 'true',
          }
        },
        spec: {
          interval: '1m0s',
          prune: true,
          sourceRef: {
            kind: 'OCIRepository',
            name: 'cluster',
          }
        }
      }));
    }

    // add in helm repos (deduplicated clusterwide)
    resources.push(...this.helmRepoResources());

    return resources;
  }

  public override async helmResources(chart: string, values: object, config: HelmChartOpts): Promise<KubeResource[]> {
    const url = new URL(config.repo);
    const ident = this.urlToChartIdent(url);
    this.helmRepos.add(config.repo);

    //each resource adds to repo set, then all repos are created in flux-system
    const resource = new helmToolkitFluxcdIo.v2.HelmRelease({
      metadata: {
        name: chart
      },
      spec: {
        chart: {
          spec: {
            chart: chart,
            version: config.version,
            sourceRef: {
              kind: 'HelmRepository',
              namespace: 'flux-system',
              name: ident
            },
            interval: '5m'
          }
        },
        postRenderers: [{
          kustomize: {
            patches: (config.patches ?? []).map(p => {
              return {
                target: p.target,
                patch: yaml.stringify(p.patch, {
                  skipInvalid: true,
                  lineWidth: -1
                })
              }
            })
          }
        }].filter(k => k.kustomize.patches.length > 0),
        // TODO: make configurable somehow?
        interval: '15m',
        timeout: '5m',
        releaseName: config.releaseName,
        install: {
          remediation: {
            retries: 3
          }
        },
        upgrade: {
          remediation: {
            retries: 3
          }
        },
        test: {
          enable: !(config.skipTests === false)
        },
        values: values
      }
    });

    return [resource];
  }

  private helmRepoResources(): KubeResource[] {
    return Array.from(this.helmRepos).map(r => new sourceToolkitFluxcdIo.v1.HelmRepository({
      metadata: {
        namespace: 'flux-system',
        name: this.urlToChartIdent(new URL(r))
      },
      spec: {
        interval: '15m',
        url: r
      }
    }));
  }

  public override managesResource(resource: KubeResource): boolean {
    if (super.managesResource(resource)) return true;
    const managed = [
      helmToolkitFluxcdIo.v2.HelmRelease,
      kustomizeToolkitFluxcdIo.v1.Kustomization
    ];

    return this.resourceSatisfiesAny(resource, managed);
  }

  // deno-lint-ignore no-explicit-any
  private resourceSatisfiesAny(resource: KubeResource, ctors: Constructor<any>[]) {
    const gvk = GVK.fromResource(resource);
    return ctors.some(r => gvk.compare(GVK.fromCtor(r)));
  }

  private urlToChartIdent(url: URL): string {
    const protocol = url.protocol.replaceAll(':', '-');
    const hostname = url.hostname.replaceAll('.', '-');
    const pathname = url.pathname.replace(/\/$/, '').replaceAll('/', '-');
    return protocol + hostname + pathname;
  }

  private componentName(component: IComponent): string {
    return `cid-${component.context.name}`;
  }
}
