import { Architect, architectGlasswayNet, Component, ComponentMetadata, constructor, DependencyGraph, GVK, isValidator, KubeResource, recursiveMerge, Result, Target, TargetParams, TargetResolveParams, ValidationError, ValidationErrorLevel } from '@perdition/architect-core';

import * as api from 'npm:kubernetes-models';

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

export interface KubeTargetResolveParams extends TargetResolveParams {};

export interface ClusterState {
  nodes: number;
  version: string;
};

/**
 * Version of {Target} that provides build constructs for a specific Kubernetes cluster.
 */
export class KubeTarget extends Target {
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

  public override defaultContext<T extends Component>(token: constructor<T>, context?: Partial<KubeContext>, force?: boolean): Partial<KubeContext> {
    context = super.defaultContext(token, context, force);
    if (context.namespace && !force) return context;

    const replacements = {
      "$features$": this.cluster.ns!.features!,
      "$services$": this.cluster.ns!.services!,
      "$operators$": this.cluster.ns!.operators!,
    };

    if (!context.namespace || force) {
      const meta = ComponentMetadata.from<KubeComponentModel>(token);

      if (meta.model?.context?.namespace) {
        context.namespace = meta.model.context.namespace;
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
    return this.parent.plugins.get(K8sPlugin.id) as K8sPlugin;
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

  public override async compile(graph: DependencyGraph, params?: TargetResolveParams): Promise<Result> {
    const result = await super.compile(graph, params);
    result.writer = new KubeWriter(this);

    // TODO: handle objects, too
    if (params?.validate !== false && Array.isArray(result.all)) {
      for (const item of result.all) {
        const resource = item as KubeResource;
        if (!isValidator(item)) continue;

        try {
          await item.validate();
        } catch (e) {
          if (e instanceof Error)
            graph.errors.push(new ValidationError(e.message, ValidationErrorLevel.ERROR, `${resource.kind} ${resource.metadata?.namespace}/${resource.metadata?.name}`));
        };
      };
    };

    const crdGraph = KubeCRDDependencyGraph.create(result, {
      ignoredGVKs: this.markedCRDGVKs,
      ignoredCRDGroups: this.markedCRDGroups,
    });

    if (params?.requirements !== false) crdGraph.validate();
    crdGraph.applyDependencies();

    return result;
  };

  private get prelude(): KubePreludeComponent {
    return this.component(KubePreludeComponent);
  };

  public static fake(): architectGlasswayNet.v1alpha1.Target {
    return new architectGlasswayNet.v1alpha1.Target({
      metadata: {
        name: 'fake-cluster',
      },
      spec: {
        plugins: {
          kubernetes: {
            client: {
              context: 'admin@fake-cluster'
            },
            dns: 'fake.example.com',
            podNetwork: {
              ipFamilies: ['IPv4', 'IPv6']
            },
            flavor: 'docker-desktop',
            version: 'v1.31.3',
            metal: {
              nodes: 3
            },
          },
        },
      },
    });
  };
};
