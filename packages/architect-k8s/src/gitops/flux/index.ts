import * as path from '@std/path';
import * as logtape from '@logtape/logtape';

import { IComponent, ResolvedComponent, KubeContext, KubeResourceUtilities, KubeResource, Result } from '@glassway/architect';
import { kustomizeToolkitFluxcdIo, sourceToolkitFluxcdIo, helmToolkitFluxcdIo } from '../../generated/crds/index.ts';
import { GitOpsController, K8sPluginGitOpsProps } from '../base.ts';
import { KubeWriter, KubeWriterOutputFormat } from '../../writer.ts';
import { IKubeTarget } from '../../target/index.ts';
import { ICompileListener, TargetApplyParams } from '../../../../architect/src/index.ts';
import { FluxCDOptions, FluxCDShim } from './shim.ts';
import { OCIHelper } from '../../helpers/oci.ts';
import { HelmChartOpts } from '../../builders/index.ts';

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
      gitops: true
    });

    // write the cluster dir
    const clusterDir = path.join(dir, "cluster");
    await Deno.mkdir(clusterDir);
    const resources: KubeResource[] = [];

    // write kustomization objects
    await Promise.all(
      Object.entries(result.components).map(async ([k, v]) => {
        const component = result.graph.components[k];
        resources.push(...await this.componentObjects(component));

        // extract and write any namespaces the component declares to the cluster dir
        const namespaces = (v as KubeResource[] ?? []).filter((r) =>
          r.kind === "Namespace"
        );
        resources.push(...namespaces);
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

  private async componentObjects(
    resolved: ResolvedComponent,
  ): Promise<KubeResource[]> {
    const ctx = resolved.component.context as KubeContext;
    const resources: KubeResource[] = [];
    const cid = this.componentName(resolved.component);

    resources.push(new kustomizeToolkitFluxcdIo.v1.Kustomization({
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
        prune: true,
        sourceRef: {
          // TODO: should not be static
          kind: 'OCIRepository',
          name: cid,
          namespace: 'flux-system'
        },
        wait: false
      },
    }));

    if (this.params.sources.oci) {
      resources.push(new sourceToolkitFluxcdIo.v1.OCIRepository({
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

    return resources;
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
        // TODO: make configurable somehow?
        interval: '15m',
        timeout: '5m',
        releaseName: config.releaseName,
        test: {
          enable: !config.skipTests
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
