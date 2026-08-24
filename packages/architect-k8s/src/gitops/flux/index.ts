// SPDX-FileCopyrightText: 2026 Vertex X7-53
//
// SPDX-License-Identifier: GPL-3.0-or-later

import * as yaml from '@std/yaml';
import * as path from '@std/path';
import * as logtape from '@logtape/logtape';
import * as api from '@glassway/kubernetes-models';

import {
  CollectionUtilities,
  Constructor,
  DiffResult,
  GVK,
  ICompileListener,
  IComponent,
  KubeContext,
  KubeResource,
  KubeResourceUtilities,
  ResolvedComponent,
  Result,
  SOPSShim,
  TargetApplyParams,
  TargetDiffParams
} from '@glassway/architect';
import {
  fluxcdControlplaneIo,
  helmToolkitFluxcdIo,
  kustomizeToolkitFluxcdIo,
  sourceToolkitFluxcdIo
} from '../../generated/crds/index.ts';
import { GitOpsController, K8sPluginGitOpsProps } from '../base.ts';
import { KubeWriter, KubeWriterOutputFormat } from '../../writer.ts';
import { IKubeTarget, KubeBuildContext } from '../../target/index.ts';
import { FluxCDDiffKustomizationOptions, FluxCDOptions, FluxCDShim } from './shim.ts';
import { OCIHelper } from '../../helpers/oci.ts';
import { HelmChartOpts } from '../../builders/index.ts';
import { KubeComponent } from '../../component.ts';
import { CosignShim } from '../../utils/shims/cosign.ts';

export type FluxCDControllerParams = NonNullable<K8sPluginGitOpsProps['flux']>;

export class FluxCDController extends GitOpsController {
  protected readonly params: FluxCDControllerParams;
  protected readonly shim: FluxCDShim;
  protected readonly sops: SOPSShim;
  protected readonly cosign: CosignShim;
  protected readonly logger: logtape.Logger;
  private readonly oci: OCIHelper;
  private readonly helmRepos: Set<string> = new Set<string>();

  private _cosignKey: Record<string, string> | undefined;

  public constructor(target: IKubeTarget, params: FluxCDControllerParams) {
    super(target);
    this.logger = logtape.getLogger(['architect', 'kubernetes', 'gitops', 'flux']);
    this.params = params;
    this.shim = new FluxCDShim();
    this.sops = new SOPSShim();
    this.cosign = new CosignShim();
    this.oci = new OCIHelper(this.logger);
  }

  private buildFluxOptions(): FluxCDOptions {
    return {
      context: this.target.cluster.client?.context
    }
  }

  // TODO: we write twice, once during diff, and then again during apply. We should figure out a way to deduplicate this call
  public async diff(result: Result, _params?: TargetDiffParams, _logger?: logtape.Logger, listener?: ICompileListener): Promise<DiffResult> {
    const tmpdir = await Deno.makeTempDir();

    try {
      await this.write(result, tmpdir);

      const components = _params?.components;
      const entries = Object.keys(result.components).filter(name =>
        !components || components.includes(name)
      );

      const commonOptions: Partial<FluxCDDiffKustomizationOptions> = {
        ignoreNotFound: true,
        progressBar: false // don't attempt to write progress bar to captured stdout
      }

      listener?.setTotal(entries.length + 1);
      const results = Object.fromEntries(await Promise.all(entries.map(async name => {
        const resolved = result.graph.components[name];
        const ctx = resolved.component.context as KubeContext;
        listener?.setStatus(`Diffing Component ${resolved.component.toString()}`);

        const kustomization = this.componentKustomization(resolved);
        const tempKsFile = await Deno.makeTempFile({
          suffix: '.yaml'
        });

        try {
          await Deno.writeTextFile(tempKsFile, KubeWriter.stringify(kustomization));
          const output = await this.shim.diffKustomization(this.componentName(resolved.component), {
            ...commonOptions,
            kustomizationFile: tempKsFile,
            namespace: ctx.namespace!,
            path: path.join(tmpdir, 'components', ctx.namespace!, ctx.name)
          });

          listener?.onResourceEnd();
          return [name, output]
        } finally {
          await Deno.remove(tempKsFile);
        }
      })));

      // also diff the cluster kustomization for changes in top level resource sets
      listener?.setStatus('Diffing Cluster Component');
      const kustomization = this.clusterKustomization();
      const tempKsFile = await Deno.makeTempFile({
        suffix: '.yaml'
      });

      try {
        await Deno.writeTextFile(tempKsFile, KubeWriter.stringify(kustomization));
        results['cluster'] = await this.shim.diffKustomization('cluster', {
          ...commonOptions,
          kustomizationFile: tempKsFile,
          namespace: 'flux-system',
          path: path.join(tmpdir, 'cluster')
        });
      } finally {
        await Deno.remove(tempKsFile);
      }

      listener?.onResourceEnd();
      return results;
    } finally {
      await Deno.remove(tmpdir, {
        recursive: true
      });
    }
  }

  public async apply(result: Result, _params?: TargetApplyParams, _logger?: logtape.Logger, listener?: ICompileListener): Promise<void> {
    const tmpdir = await Deno.makeTempDir();

    try {
      await this.write(result, tmpdir);

      // TODO: how should dry run really behave in GitOps mode?
      if (!_params?.dryRun) {
        await this.upload(result, tmpdir, listener, _params?.components);
        await this.reconcile();
      }
    } finally {
      await Deno.remove(tmpdir, {
        recursive: true
      });
    }
  }

  private async upload(result: Result, dir: string, listener?: ICompileListener, components?: string[]): Promise<void> {
    // if we have a component filter, filter components on that; the top-level kustomization is still uploaded
    const entries = Object.keys(result.components).filter(name =>
      !components || components.includes(name)
    );

    if (this.params.sources.oci) {
      // HACK: precache cosign key to prevent decryption prompt from being spammed
      if (this.params.sources.oci.signing?.cosign)
        await this.getCosignKey();

      listener?.setTotal(entries.length + 1);
      const push = async (k: string) => {
        const resolved = result.graph.components[k];
        const ctx = resolved.component.context as KubeContext;
        listener?.setStatus(`Pushing OCI Image for ${resolved.component.toString()}`);
        await this.uploadOCI(path.join(dir, 'components', ctx.namespace!, ctx.name), this.componentName(resolved.component));
        listener?.onResourceEnd();
      }

      await Promise.all(entries.map(async e => await push(e)));
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

  private async getCosignKey(): Promise<Record<string, string>> {
    if (this._cosignKey) return this._cosignKey;
    const root = this.target.project.getRoot();
    const suffix = this.params.sources.oci?.signing?.cosign?.key!
    const content = await Deno.readTextFile(path.join(root, suffix));

    this._cosignKey = await this.sops.decryptYaml(content) as Record<string, string>;
    return this._cosignKey;
  }

  private async uploadOCI(dir: string, name: string): Promise<void> {
    const oci = this.params.sources.oci!;
    const git = await this.target.project.getGitInfo();

    const path = `${await this.getOCIPrefix()}:${name}`;
    const creds = await this.oci.getCredentials(oci.registry);

    // wants repository + @ + digest
    const result = await this.shim.pushArtifact(path, {
      ...this.buildFluxOptions(),
      creds: creds ? `${creds.username}:${creds.password}` : undefined,
      path: dir,
      source: git.origin!,
      reproducible: true,
      revision: `${git.branch!}@sha1:${git.revision!}`
    });

    if (this.params.sources.oci?.signing?.cosign) {
      const key = await this.getCosignKey();
      await this.cosign.sign(`${result.repository}@${result.digest}`, {
        key: 'env://COSIGN_KEY',
        registryUsername: creds?.username,
        registryPassword: creds?.password,
      }, {
        env: {
          COSIGN_KEY: key['private'],
          COSIGN_PASSWORD: key['password']
        },
        retries: 3
      })
    }

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
    const matchPosition = function(r: KubeResource, position: string) {
      return (r.metadata?.labels ?? {})['architect.glassway.net/position'] === position;
    }

    const component = resolved.component as KubeComponent;
    const cid = this.componentName(resolved.component);

    const resourceCopy = Array.from(resources);
    const namespaces = CollectionUtilities.takeFrom(resourceCopy, r => {
      return this.resourceSatisfiesAny(r, [api.v1.Namespace]);
    });

    // Protect all namespaces if requested
    if (component.protected) {
      namespaces.forEach(n => {
        KubeResourceUtilities.protect(n);
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

    const prelude = CollectionUtilities.takeFrom(resourceCopy, r => matchPosition(r, 'prelude'));
    const primary: kustomizeToolkitFluxcdIo.v1.Kustomization[] = [];
    const epilogue = CollectionUtilities.takeFrom(resourceCopy, r => matchPosition(r, 'epilogue'));
    const commonLabels = this.componentLabels(resolved);
    const kustomization = this.componentKustomization(resolved);

    primary.push(kustomization);

    if (this.params.sources.oci) {
      const oci = this.params.sources.oci;

      sources.push(new sourceToolkitFluxcdIo.v1.OCIRepository({
        metadata: {
          name: cid,
          namespace: 'flux-system',
          labels: commonLabels
        },
        spec: {
          interval: '1m0s',
          url: await this.getOCIPrefix(),
          ref: {
            tag: cid
          },
          verify: oci.signing?.cosign ? {
            provider: 'cosign',
            secretRef: oci.signing.cosign.secretRef
          } : undefined,
          secretRef: oci.secretRef
        }
      }));
    }

    return new fluxcdControlplaneIo.v1.ResourceSet({
      metadata: {
        name: cid,
        namespace: 'flux-system',
        labels: commonLabels,
        annotations: {
          ...(component.protected ? {
            'fluxcd.controlplane.io/prune': 'disabled',
            'kustomize.toolkit.fluxcd.io/prune': 'disabled'
          } : {})
        }
      },
      spec: {
        commonMetadata: {
          labels: commonLabels
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
          { name: 'epilogue', timeout: '1m', resources: epilogue }
        ].filter(s => s.resources.length > 0)
      }
    });
  }

  public override async clusterObjects(context: KubeBuildContext): Promise<KubeResource[]> {
    const resources: KubeResource[] = [];

    if (this.params.sources.oci) {
      const oci = this.params.sources.oci;
      const repository = new sourceToolkitFluxcdIo.v1.OCIRepository({
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
          verify: oci.signing?.cosign ? {
            provider: 'cosign',
            secretRef: oci.signing.cosign.secretRef
          } : undefined,
          secretRef: oci.secretRef
        }
      });

      KubeResourceUtilities.protect(repository);
      resources.push(repository);

      const kustomization = this.clusterKustomization();
      resources.push(kustomization);
    }

    // add in helm repos (deduplicated clusterwide)
    resources.push(...this.helmRepoResources());

    // if provision option is set for sops keys, and bootstrap is on, perform decryption bootstrapping
    if (context.bootstrap && this.params.decryption && this.params.decryption.provider === 'sops' && this.params.decryption.provision) {
      const secrets = await this.target.encryption.getClusterSecrets(true);

      resources.push(new api.v1.Secret({
        metadata: {
          name: this.params.decryption.secretRef.name,
          annotations: {
            'architect.glassway.net/gitops-exclude': 'true',
            'replicator.v1.mittwald.de/replicate-to': 'flux-system',
            'replicator.v1.mittwald.de/replicate-to-matching': 'architect.glassway.net/replicate-secrets'
          }
        },
        stringData: {
          public: secrets!['sops-public']!,
          private: secrets!['sops-private']!,
        }
      }));
    }

    const cosign = this.params.sources.oci?.signing?.cosign;
    if (cosign?.provision) {
      const key = await this.getCosignKey();
      // key.public
      resources.push(new api.v1.Secret({
        metadata: {
          name: cosign.secretRef.name,
          annotations: {
            'replicator.v1.mittwald.de/replicate-to': 'flux-system',
            'replicator.v1.mittwald.de/replicate-to-matching': 'architect.glassway.net/replicate-secrets'
          }
        },
        stringData: {
          'cosign.pub': key['public']
        }
      }));
    }

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
        values: values,
        valuesFrom: config.gitops?.flux?.valuesFrom
      }
    });

    if (config.gitops?.protect) {
      KubeResourceUtilities.protect(resource);
    }

    return [resource];
  }

  private helmRepoResources(): KubeResource[] {
    return Array.from(this.helmRepos).map(r => {
      const ident = this.urlToChartIdent(new URL(r));
      // OCI repositories are provisioned per-chart
      // if (ident.startsWith('oci')) return;

      return new sourceToolkitFluxcdIo.v1.HelmRepository({
        metadata: {
          namespace: 'flux-system',
          name: ident
        },
        spec: {
          type: ident.startsWith('oci') ? 'oci' : 'default',
          interval: '15m',
          url: r
        }
      });
    });
  }

  public override managesResource(resource: KubeResource): boolean {
    if (super.managesResource(resource)) return true;
    const managed = [
      helmToolkitFluxcdIo.v2.HelmRelease,
      kustomizeToolkitFluxcdIo.v1.Kustomization
    ];

    return this.resourceSatisfiesAny(resource, managed);
  }

  public override get handlesSOPSSecrets(): boolean {
    return !!this.params.decryption;
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

  private componentLabels(resolved: ResolvedComponent) {
    return {
      'architect.glassway.net/component': resolved.component.context.name,
    };
  }

  private clusterKustomization() {
    const kustomization = new kustomizeToolkitFluxcdIo.v1.Kustomization({
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
        decryption: this.params.decryption ? {
          provider: this.params.decryption.provider,
          secretRef: this.params.decryption.secretRef
        } : undefined,
        sourceRef: {
          kind: 'OCIRepository',
          name: 'cluster',
        }
      }
    });

    KubeResourceUtilities.protect(kustomization);
    return kustomization;
  }

  private componentKustomization(resolved: ResolvedComponent) {
    const component = resolved.component as KubeComponent;
    const ctx = component.context;
    const cid = this.componentName(resolved.component);
    const labels = this.componentLabels(resolved);

    const kustomization = new kustomizeToolkitFluxcdIo.v1.Kustomization({
      metadata: {
        name: cid,
        namespace: ctx.namespace,
        labels: labels
      },
      spec: {
        commonMetadata: {
          labels: labels
        },
        dependsOn: resolved.dependencies.map((d) => {
          return {
            name: this.componentName(d),
            namespace: (d.context as KubeContext).namespace
          };
        }),
        decryption: this.params.decryption ? {
          provider: this.params.decryption.provider,
          secretRef: this.params.decryption.secretRef
        } : undefined,
        interval: "10m0s",
        prune: !component.protected,
        sourceRef: {
          // TODO: should not be static
          kind: 'OCIRepository',
          name: cid,
          namespace: 'flux-system'
        },
        wait: true
      },
    });

    KubeResourceUtilities.protect(kustomization);
    return kustomization;
  }
}
