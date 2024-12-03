import { Architect, architectGlasswayNet, Component, constructor, DependencyGraph, GVK, PLUGIN_TARGET_IDENTIFIERS, recursiveMerge, Result, Target, TargetParams, TargetResolveParams } from '@perdition/architect-core';

import * as api from 'kubernetes-models';
import _ from 'lodash';

import { FluxCDController, FluxCDMode } from './apply/flux/index.mts';
import { KubeComponentModel, KubePreludeComponent } from './component.mts';
import { CrdsComponent } from './components/crds/index.mts';
import { KubeWriter } from './writer.mts';
import { K8sPlugin } from './plugin.mts';
import { KubeContext } from './context.mts';
import { KubeCRDDependencyGraph } from './crds/graph.mts';

export enum KubeTargetOutputFormat {
  SingleFile,
  PerResource,
  PerComponent
};

export interface KubeTargetParams extends TargetParams {
  modes: {
    flux?: FluxCDMode;
  };
  output?: {
    format?: KubeTargetOutputFormat;
  };
};

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface KubeTargetResolveParams extends TargetResolveParams {};

export interface ClusterState {
  nodes: number;
  version: string;
};

/**
 * Version of {Target} that provides build constructs for a specific Kubernetes cluster.
 */
export class KubeTarget extends Target {
  public static key = PLUGIN_TARGET_IDENTIFIERS.kubernetes;
  declare public readonly params: KubeTargetParams;

  public flux: FluxCDController;

  private readonly markedCRDGVKs: GVK[] = [];
  private readonly markedCRDGroups: string[] = [];

  constructor(model: architectGlasswayNet.v1alpha1.Target, params: KubeTargetParams = {
    modes: {},
    output: {
      format: KubeTargetOutputFormat.PerComponent,
    },
  }, parent: Architect) {
    const defaults = {
      plugins: {
        kubernetes: {
          ns: {
            features: 'infra-system',
            operators: 'operator-system',
            services: 'services',
          },
        },
      },
    } as Partial<architectGlasswayNet.v1alpha1.Target["spec"]>;

    model.spec = recursiveMerge(defaults, model.spec);
    super(model, params, parent);

    this.flux = new FluxCDController(this);

    this.enable(KubePreludeComponent);
    this.enable(CrdsComponent);

    this.createDefaultResources();
  };

  public defaultContext<T extends Component>(token: constructor<T>, context?: Partial<KubeContext>, force?: boolean): Partial<KubeContext> {
    context = super.defaultContext(token, context, force);
    if (context.namespace && !force) return context;

    const replacements = {
      "$features$": this.cluster.ns!.features!,
      "$services$": this.cluster.ns!.services!,
      "$operators$": this.cluster.ns!.operators!,
    };

    if (!context.namespace || force) {
      const model = Component.resolveModel<KubeComponentModel>(token);
      if (model?.context?.namespace) {
        context.namespace = model.context.namespace;
        for (const [k, v] of Object.entries(replacements))
          context.namespace = context.namespace!.replace(k, v);
      } else if (!context.namespace) {
        context.namespace = 'default';
      };
    };

    return context;
  };

  public get cluster(): NonNullable<NonNullable<architectGlasswayNet.v1alpha1.Target["spec"]["plugins"]>["kubernetes"]> {
    return this.model.spec.plugins!.kubernetes!;
  };

  public get plugin(): K8sPlugin {
    return this.parent.plugins.get(K8sPlugin.MODULE) as K8sPlugin;
  }

  private createDefaultResources() {
    this.createNamespace(this.cluster.ns!.features!);
    this.createNamespace(this.cluster.ns!.operators!);
    this.createNamespace(this.cluster.ns!.services!);
  };

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
    };
  };

  /**
   * Installs the CRDs specified by the group, or just marks them as installed.
   * @param group The group(s) of CRDs to install from the shared repository
   * @param subgroups Whether to add a wildcard rule to match subgroups
   * @param mark Just mark the CRDs as present in the cluster, and don't install them
   */
  public enableCRDGroup(group: string, subgroups: boolean = true, mark: boolean = false) {
    if (mark === true) {
      this.markedCRDGroups.push(group);
    } else {
      this.component(CrdsComponent).enableGroup(group);
    };

    if (subgroups) this.enableCRDGroup(`*.${group}`, false, mark);
  };

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
  };

  public async compile(graph: DependencyGraph): Promise<Result> {
    const result = await super.compile(graph);
    result.writer = new KubeWriter(this);

    const crdGraph = KubeCRDDependencyGraph.create(result, {
      ignoredGVKs: this.markedCRDGVKs,
      ignoredCRDGroups: this.markedCRDGroups,
    });

    crdGraph.validate();
    crdGraph.applyDependencies();

    return result;
  };

  private get prelude(): KubePreludeComponent {
    return this.component(KubePreludeComponent);
  };
};
