import {
  architectGlasswayNet,
  CollectionUtilities,
  Component,
  ComponentMetadata,
  Constructor,
  GVK,
  ICompileListener,
  isValidator,
  KubeResource,
  Project,
  Result,
  Target,
  TargetParams,
  TargetResolveParams,
  ValidationError,
  ValidationErrorLevel,
} from '@glassway/architect';

import * as api from '@glassway/kubernetes-models';
import * as logtape from '@logtape/logtape';
import * as _client from '@kubernetes/client-node';

import { FluxCDController, FluxCDMode } from '../apply/flux/index.ts';
import { KubeComponentModel, KubePreludeComponent } from '../component.ts';
import { CrdsComponent } from '../components/index.ts';
import { KubeWriter } from '../writer.ts';
import { K8S_PLUGIN_CLASS, K8sPlugin } from '../plugin.ts';
import { KubeContext } from '../context.ts';
import { KubeCRDDependencyGraph } from '../crds/graph.ts';
import { NamespaceDefaults, NamespaceRef } from '../types/scn.ts';
import { ApplyStatus, TargetApplyParams } from '../../../architect/src/index.ts';
import { getFakeTarget } from './fake.ts';

export enum KubeTargetOutputFormat {
  SingleFile,
  PerResource,
  PerComponent,
}

export interface KubeTargetParams extends TargetParams {
  modes: {
    flux?: FluxCDMode;
  };
  output?: {
    format?: KubeTargetOutputFormat;
  };
}

/**
 * Version of {Target} that provides build constructs for a specific Kubernetes cluster.
 */
export class KubeTarget extends Target {
  declare public readonly params: KubeTargetParams;
  public readonly flux: FluxCDController;
  public client: _client.KubernetesObjectApi | undefined;

  private readonly markedCRDGVKs: GVK[] = [];
  private readonly markedCRDGroups: string[] = [];

  constructor(
    model: architectGlasswayNet.v1alpha1.Target,
    params: KubeTargetParams = {
      modes: {},
      output: {
        format: KubeTargetOutputFormat.PerComponent,
      },
    },
    project: Project,
  ) {
    const defaults = {
      plugins: {
        kubernetes: {
          ns: {
            features: NamespaceDefaults.features,
            operators: NamespaceDefaults.operators,
            services: NamespaceDefaults.services,
          },
        },
      },
    } as Partial<architectGlasswayNet.v1alpha1.Target['spec']>;

    model.spec = CollectionUtilities.recursiveMerge(defaults, model.spec);
    super(model, params, project);

    this.flux = new FluxCDController(this);

    this.enable(KubePreludeComponent);
    this.enable(CrdsComponent);

    this.createDefaultResources();
  }

  public get cluster(): NonNullable<
    NonNullable<
      architectGlasswayNet.v1alpha1.Target['spec']['plugins']
    >['kubernetes']
  > {
    return this.model.spec.plugins!.kubernetes!;
  }

  public get plugin(): K8sPlugin {
    return this.app.pluginRegistry.get(K8S_PLUGIN_CLASS) as K8sPlugin;
  }

  private get prelude(): KubePreludeComponent {
    return this.component(KubePreludeComponent);
  }

  public static fake(): architectGlasswayNet.v1alpha1.Target {
    return getFakeTarget();
  }

  public override defaultContext<T extends Component>(
    token: Constructor<T>,
    context?: Partial<KubeContext>,
    force?: boolean,
  ): Partial<KubeContext> {
    context = super.defaultContext(token, context, force);
    if (context.namespace && !force) return context;

    const replacements: Record<string, string> = {};
    for (const [k, v] of Object.entries(NamespaceRef)) {
      // @ts-ignore: dynamic lookup of namespace ref
      replacements[v] = this.cluster.ns![k]!;
    }

    if (!context.namespace || force) {
      const meta = ComponentMetadata.from<KubeComponentModel>(token);

      if (meta.model?.context?.namespace) {
        context.namespace = meta.model.context.namespace;
        for (const [k, v] of Object.entries(replacements)) {
          context.namespace = context.namespace!.replace(k, v);
        }
      } else if (!context.namespace) {
        context.namespace = 'default';
      }
    }

    return context;
  }

  /**
   * Installs the CRD specified by the GVK, or just marks it as installed.
   * @param gvk The GVK to install the CRD by
   * @param mark Just mark the CRD as present in the cluster, and don't install it
   */
  public enableCRD(gvk: GVK, mark: boolean = false) {
    if (mark === true) {
      this.markedCRDGVKs.push(gvk);
    } else {
      this.component(CrdsComponent).enableGVK(gvk);
    }
  }

  /**
   * Installs the CRDs specified by the group, or just marks them as installed.
   * @param group The group(s) of CRDs to install from the shared repository
   * @param subgroups Whether to add a wildcard rule to match subgroups
   * @param mark Just mark the CRDs as present in the cluster, and don't install them
   */
  public enableCRDGroup(
    group: string,
    subgroups: boolean = true,
    mark: boolean = false,
  ) {
    if (mark === true) {
      this.markedCRDGroups.push(group);
    } else {
      this.component(CrdsComponent).enableGroup(group);
    }

    if (subgroups) this.enableCRDGroup(`*.${group}`, false, mark);
  }

  /**
   * Creates a new namespace and returns it
   */
  public createNamespace(name: string): api.v1.Namespace {
    const namespace = new api.v1.Namespace({
      metadata: {
        name: name,
      },
    });

    this.prelude.push(namespace);
    return namespace;
  }

  public override async compile(
    params?: TargetResolveParams,
    logger?: logtape.Logger,
    listener?: ICompileListener,
  ): Promise<Result | undefined> {
    const result = await super.compile(params, logger, listener);
    if (!result) return result;

    result.writer = new KubeWriter(this);

    // TODO: handle objects, too
    if (params?.validate !== false && Array.isArray(result.all)) {
      for (const item of result.all) {
        const resource = item as KubeResource;
        if (!isValidator(item)) continue;

        try {
          await item.validate();
        } catch (e) {
          if (e instanceof Error) {
            result.graph.errors.push(
              new ValidationError(
                e.message,
                ValidationErrorLevel.ERROR,
                `${resource.kind} ${resource.metadata?.namespace}/${resource.metadata?.name}`,
              ),
            );
          }
        }
      }
    }

    const crdGraph = KubeCRDDependencyGraph.create(result, {
      ignoredGVKs: this.markedCRDGVKs,
      ignoredCRDGroups: this.markedCRDGroups,
    });

    if (params?.requirements !== false) crdGraph.validate();
    crdGraph.applyDependencies();

    return result;
  }

  protected async applyResources(
    resources: KubeResource[],
    client: _client.KubernetesObjectApi,
    params?: TargetApplyParams,
    logger?: logtape.Logger,
    listener?: ICompileListener,
  ): Promise<void> {
    await Promise.all(resources.map(async (r) => {
      listener?.onResourceStart(r);

      try {
        await client.patch(
          r as _client.KubernetesObject,
          undefined,
          params?.dryRun ? "All" : undefined,
          "architect.glassway.net", // field manager
          params?.force,
          "application/apply-patch+yaml" // SSA
        );
      } catch (e) {
        if (e instanceof Error) {
          logger?.error(e.message);
        }
      }

      listener?.onResourceEnd(r);
    }));
  }

  public override async apply(
    params?: TargetApplyParams,
    logger?: logtape.Logger,
    listener?: ICompileListener,
  ): Promise<Result> {
    const result = await super.apply(params, logger, listener);
    const resources = result.all as KubeResource[];
    listener?.setTotal(resources.length);

    // namespaces must be applied first
    const client = this.getClient();
    const isNs = (r: KubeResource) => r.kind === "Namespace";
    const namespaces = resources.filter(isNs);
    await this.applyResources(namespaces, client, params, logger, listener);

    const everything = resources.filter((r) => !isNs(r));
    await this.applyResources(everything, client, params, logger, listener);

    return result;
  }

  private createDefaultResources() {
    this.createNamespace(this.cluster.ns!.features!);
    this.createNamespace(this.cluster.ns!.operators!);
    this.createNamespace(this.cluster.ns!.services!);
  }

  public getClient(): _client.KubernetesObjectApi {
    if (this.client) return this.client;

    const config = new _client.KubeConfig();
    config.mergeConfig(this.plugin.getKubeConfig());

    const context = this.cluster.client?.context;
    if (!context) throw Error("Cluster context must be defined to use client");

    config.setCurrentContext(context);
    // client.patch, etc, server side apply
    this.client = _client.KubernetesObjectApi.makeApiClient(config);
    return this.client;
  }
}
