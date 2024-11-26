import { Architect, Component, Result, Target, TargetModel, TargetModelSpec, TargetParams, TargetResolveParams } from '@perdition/architect-core';
import * as api from 'kubernetes-models';
import _ from 'lodash';
import wcmatch from 'wildcard-match';
import { FluxCDController, FluxCDMode } from './apply/flux/index.mts';
import { KubePreludeComponent } from './component.mts';
import { CrdsComponent } from './components/index.mts';
import { Helm } from './helm/index.mts';
import { Kustomize } from './kustomize/index.mts';
import { Resource } from './resource.mts';
import { GVK } from './types/index.mts';
import { isValidator } from './utils/index.mts';
import { KubeWriter } from './writer.mts';
import { K8sPlugin } from './plugin.mts';

export interface KubeCRDRequirement {
  exports: GVK[];
  requirements: GVK[];
};

export type KubeCRDRequirements = Record<string, KubeCRDRequirement>;

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

interface ClusterClientSpec {
  context: string;
};

interface ClusterNamespaceSpec {
  /**
   * The default namespace defined for cluster infrastructure
   */
  features?: string;

  /**
   * The default namespace defined for cluster operators
   */
  operators?: string;

  /**
   * The default namespace defined for cluster services
   */
  services?: string;
};

// "The physical cluster configuration has changed."
// "Do you want to update the metal spec before deploying? (--auto-update-metal to bypass check)"
interface ClusterMetalSpec {
  /**
   * Number of nodes in the physical cluster
   */
  nodes?: number;
};

export enum ClusterFlavor {
  DockerDesktop = 'docker-desktop',
  Kind = 'kind',
  K3s = 'k3s',
  Talos = 'talos',
};

// TODO: potentially move the Client and Metal specs to their own Fact, for separation purposes
export interface ClusterSpec extends TargetModelSpec {
  client: ClusterClientSpec;
  dns: string;
  platform?: string;
  version: string;
  metal: ClusterMetalSpec;
  ns?: ClusterNamespaceSpec;

  /**
   * The pod network configuration
   */
  podNetwork: {
    ipFamilies: string[];
  };

  flavor: ClusterFlavor;
};

export type KubeTargetModel = TargetModel<ClusterSpec>;

/**
 * Version of {Target} that provides build constructs for a specific Kubernetes cluster.
 */
export class KubeTarget extends Target<KubeTargetModel> {
  public static key = 'KubeTarget';
  declare public readonly params: KubeTargetParams;

  public helm: Helm;
  public kustomize: Kustomize;

  public flux: FluxCDController;

  private readonly markedCRDGVKs: GVK[] = [];
  private readonly markedCRDGroups: string[] = [];

  constructor(model: KubeTargetModel, params: KubeTargetParams = {
    modes: {},
    output: {
      format: KubeTargetOutputFormat.PerComponent,
    },
  }, parent: Architect) {
    const defaults: Partial<ClusterSpec> = {
      ns: {
        features: 'infra-system',
        operators: 'operator-system',
        services: 'services',
      },

      podNetwork: {
        ipFamilies: ['IPv4'],
      },
    };

    model.spec = _.merge(defaults, model.spec);
    super(model, params, parent);

    this.helm = new Helm(this.plugin);
    this.kustomize = new Kustomize(this.plugin);

    this.flux = new FluxCDController(this);

    this.enable(KubePreludeComponent);
    this.createDefaultResources();
    this.createCRDComponent();
  };

  public get plugin(): K8sPlugin {
    return this.parent.plugins.get(K8sPlugin.MODULE) as K8sPlugin;
  }

  private createDefaultResources() {
    this.createNamespace(this.model.spec.ns!.features!);
    this.createNamespace(this.model.spec.ns!.operators!);
    this.createNamespace(this.model.spec.ns!.services!);
  };

  private createCRDComponent() {
    const component = new CrdsComponent(this, this.plugin.parent.projectPaths);
    this.components.register(CrdsComponent, component);
    this.components.request(CrdsComponent)!.props.$set({ enable: true });
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

  private validateCRDRequirements(requirements: KubeCRDRequirements) {
    // build a list of all unique GVKs in the cluster
    const allGVKs: GVK[] = [];
    Object.values(requirements).forEach(v => {
      v.exports.forEach(gvk => {
        if (allGVKs.findIndex(g => g.compare(gvk)) > -1) return;
        allGVKs.push(gvk);
      });
    });

    // validate all exports and requirements
    Object.entries(requirements).forEach(([k, v]) => {
      // validate export uniqueness
      Object.entries(requirements).forEach(([k2, v2]) => {
        if (k === k2) return;
        const both = v.exports.filter(r => v2.exports.findIndex(g => r.compare(g)) > -1);
        if (both.length <= 0) return;

        throw Error(`both components ${k} and ${k2} export CRDs for resources ${both.join(', ')}`);
      });

      // validate requirement validity
      const missing = v.requirements.filter(r => {
        if (r.isAPIModel()) return false;
        if (this.markedCRDGroups.some(g => wcmatch(g)(r.group!))) return false;
        if (this.markedCRDGVKs.some(g => g.compare(r))) return false;

        return allGVKs.findIndex(g => g.compare(r)) <= -1;
      });

      if (missing.length > 0) {
        throw Error(`component ${k} is attempting to use resources missing from cluster ${this.model.metadata.name}: ${missing.join(', ')}`);
      };
    });
  };

  /**
   * Extracts and returns the GVKs each component exports (by virtue of declaring CRDs)
   * plus the GVKs declared as resources by each component, in order to establish dependencies
   */
  private buildCRDRequirements(result: Result): KubeCRDRequirements {
    function transformCRDs(resources: Resource[]): GVK[] {
      const gvks: GVK[] = [];
      resources.forEach(r => {
        if (r.kind !== 'CustomResourceDefinition') return;
        const crd = r as api.apiextensionsK8sIo.v1.CustomResourceDefinition;
        gvks.push(...GVK.fromCRD(crd));
      });

      return gvks;
    };

    const obj = Object.fromEntries(Object.entries(result.components).map(([k, v]): [string, KubeCRDRequirement] => {
      const resources = v.result as Resource[] ?? [];
      const requirement: KubeCRDRequirement = {
        exports: transformCRDs(resources),
        requirements: GVK.uniqueGVKs(resources),
      };

      return [k, requirement];
    }));

    return obj;
  };

  private processDependencies(result: Result, validate: boolean) {
    // check to see what CRDs each component exports
    // validate objects - no two components can export the same GVK
    const crds = this.buildCRDRequirements(result);
    if (validate) this.validateCRDRequirements(crds);

    // append interdependencies
    Object.entries(crds).forEach(([k, v]) => {
      // find the components that export the CRDs that this one needs
      const dependencies: Component[] = v.requirements.reduce((prev, cur) => {
        let name: string | undefined = undefined;
        for (const [k2, v2] of Object.entries(crds)) {
          const found = v2.exports.filter(e => cur.compare(e));
          if (found.length <= 0) {
            continue;
          } else {
            name = k2;
            break;
          };
        };

        if (name === undefined) return prev;
        const component = result.components[name].component;
        if (prev.indexOf(component) !== -1) return prev;

        return prev.concat(component);
      }, [] as Component[]);

      const component = result.components[k];
      dependencies.forEach(d => {
        // no self-dependencies
        if (d.clazz === component.component.clazz) return;
        if (component.dependencies.indexOf(d) !== -1) return;
        component.dependencies.push(d);
      });
    });
  };

  public async resolve(params: KubeTargetResolveParams = {}): Promise<Result> {
    const result = await super.resolve(params) as Result;

    // process dependencies - introspect for hidden component-component dependencies involving CRDs
    this.processDependencies(result, params.requirements !== false);

    if (params.validate !== false) {
      for (const item of result.all as Resource[]) {
        if (!isValidator(item)) continue;

        try {
          await item.validate();
        } catch (e) {
          console.log(e);
        };
      };
    };

    // set the writer so we can output YAML
    result.writer = new KubeWriter(this);

    return result;
  };

  private get prelude(): KubePreludeComponent {
    return this.component(KubePreludeComponent);
  };
};
