import * as path from '@std/path';
import * as logtape from '@logtape/logtape';

import { IComponent, ResolvedComponent, KubeResourceUtilities, KubeResource, Result } from '@glassway/architect';
import { kustomizeToolkitFluxcdIo } from '../../generated/crds/index.ts';
import { KubeContext } from '../../context.ts';
import { GitOpsController, K8sPluginGitOpsProps } from '../base.ts';
import { KubeWriter, KubeWriterOutputFormat } from '../../writer.ts';
import { IKubeTarget } from '../../target/index.ts';
import { ICompileListener, TargetApplyParams } from '../../../../architect/src/index.ts';
import { FluxCDOptions, FluxCDShim } from './shim.ts';
import { OCIHelper } from '../../helpers/oci.ts';

export type FluxCDControllerParams = NonNullable<K8sPluginGitOpsProps['flux']>;
export type FluxCDSourceRef = FluxCDControllerParams['sourceRef'];

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
      await this.upload(tmpdir);
      await this.reconcile();
    } finally {
      await Deno.remove(tmpdir, {
        recursive: true
      })
    }
  }

  private async upload(dir: string): Promise<void> {
    if (this.params.sources.oci) {
      await this.uploadOCI(dir);
    } else {
      throw new Error('unsupported flux source type');
    }
  }

  private async uploadOCI(dir: string): Promise<void> {
    const oci = this.params.sources.oci!;
    const git = await this.target.project.getGitInfo();
    const path = `oci://${oci.registry}/${oci.prefix ?? ''}${this.target.model.metadata.name!}:${git.revisionShort!}`;
    const creds = await this.oci.getCredentials(oci.registry);
    this.logger.debug(`uploading OCI artifact to ${path}`);

    await this.shim.pushArtifact(path, {
      ...this.buildFluxOptions(),
      creds: creds ? `${creds['Username']}:${creds['Secret']}` : undefined,
      path: dir,
      source: git.origin!,
      revision: `${git.branch!}@sha1:${git.revision!}`
    });

    this.logger.info(`successfully pushed OCI artifact to ${path}`);
  }

  private async reconcile() {
    // TODO: onResourceStart / onResourceEnd for every reconciled resource
  }

  private async write(result: Result, dir: string) {
    // write all the components
    const writer = result.writer as KubeWriter;
    await writer.write(result, path.join(dir, "components"), {
      format: KubeWriterOutputFormat.PerComponent,
      filterNamespaces: true
    });

    // write the cluster dir
    const clusterDir = path.join(dir, "cluster");
    await Deno.mkdir(clusterDir);

    // write kustomization objects
    await Promise.all(
      Object.entries(result.components).map(async ([k, v]) => {
        const component = result.graph.components[k];
        const resource = this.componentObject(component);
        await Deno.writeTextFile(
          path.join(
            clusterDir,
            `${KubeResourceUtilities.resourceId(resource)}.yaml`,
          ),
          writer.stringify(resource),
        );

        // extract and write any namespaces the component declares to the cluster dir
        const namespaces = (v as KubeResource[] ?? []).filter((r) =>
          r.kind === "Namespace"
        );
        await Promise.all(namespaces.map((r) =>
          Deno.writeTextFile(
            path.join(
              clusterDir,
              `${KubeResourceUtilities.resourceId(r)}.yaml`,
            ),
            writer.stringify(r),
          )
        ));
      }),
    );
  }

  public componentObject(
    resolved: ResolvedComponent,
  ): kustomizeToolkitFluxcdIo.v1.Kustomization {
    const ctx = resolved.component.context as KubeContext;
    const name = ctx.name;

    return new kustomizeToolkitFluxcdIo.v1.Kustomization({
      metadata: {
        name: this.componentName(resolved.component),
        namespace: ctx.namespace,
      },
      spec: {
        dependsOn: resolved.dependencies.map((d) => {
          return {
            name: this.componentName(d),
            namespace: (d.context as KubeContext).namespace,
          };
        }),
        interval: "10m0s",
        path: `./components/${ctx.namespace}/${name}`,
        prune: true,
        sourceRef: this.params.sourceRef,
        wait: true,
      },
    });
  }

  private componentName(component: IComponent): string {
    return `cid-${component.context.name}`;
  }
}
