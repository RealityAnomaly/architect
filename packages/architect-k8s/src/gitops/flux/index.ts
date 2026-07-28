import * as path from '@std/path';
import * as logtape from '@logtape/logtape';

import { IComponent, ResolvedComponent, KubeResourceUtilities, KubeResource, Result } from '@glassway/architect';
import { kustomizeToolkitFluxcdIo, sourceToolkitFluxcdIo } from '../../generated/crds/index.ts';
import { KubeContext } from '../../context.ts';
import { GitOpsController, K8sPluginGitOpsProps } from '../base.ts';
import { KubeWriter, KubeWriterOutputFormat } from '../../writer.ts';
import { IKubeTarget } from '../../target/index.ts';
import { ICompileListener, TargetApplyParams } from '../../../../architect/src/index.ts';
import { FluxCDOptions, FluxCDShim } from './shim.ts';
import { OCIHelper } from '../../helpers/oci.ts';

export type FluxCDControllerParams = NonNullable<K8sPluginGitOpsProps['flux']>;

export class FluxCDController extends GitOpsController {
  protected readonly params: FluxCDControllerParams;
  protected readonly shim: FluxCDShim;
  protected readonly logger: logtape.Logger;
  private readonly oci: OCIHelper;

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

  public async apply(result: Result, params?: TargetApplyParams, logger?: logtape.Logger, listener?: ICompileListener): Promise<void> {
    const tmpdir = await Deno.makeTempDir();

    try {
      await this.write(result, tmpdir);
      await this.upload(result, tmpdir);
      await this.reconcile();
    } finally {
      await Deno.remove(tmpdir, {
        recursive: true
      })
    }
  }

  private async upload(result: Result, dir: string): Promise<void> {
    if (this.params.sources.oci) {
      Object.entries(result.components).map(async ([k, _]) => {
        const resolved = result.graph.components[k];
        const ctx = resolved.component.context as KubeContext;
        await this.uploadOCI(path.join(dir, 'components', ctx.namespace!, name), this.componentName(resolved.component));
      });

      await this.uploadOCI(path.join(dir, 'cluster'), 'cluster');
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
      creds: creds ? `${creds['Username']}:${creds['Secret']}` : undefined,
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
        writer.stringify(resource),
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
        wait: true
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
          },
          wait: true,
          timeout: '15m0s'
        }
      }));
    }

    return resources;
  }

  private componentName(component: IComponent): string {
    return `cid-${component.context.name}`;
  }
}
