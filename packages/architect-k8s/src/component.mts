import { CapabilityMatcher, Component, ComponentArgs, ComponentMatcher, IComponentMatcher, Target } from '@perdition/architect-core';
import * as api from 'kubernetes-models';
import _ from 'lodash';
import { CNICapability, DNSCapability } from './capabilities/index.mts';

import { ClusterFact, ClusterSpec } from './fact.mts';
import { Helm, HelmChartOpts } from './helm/index.mts';
import { Kustomize, KustomizeOpts } from './kustomize/index.mts';
import { Resource } from './resource.mts';
import { KubeTarget } from './target.mts';
import { defaultNamespace, fixupResource, normaliseResources } from './utils/index.mts';

export interface KubeComponentArgs extends ComponentArgs {};
export interface KubeComponentGenericResources {
  result?: Resource[];
};

export interface KubeComponentContext {
  namespace: string;
};

export abstract class KubeComponent<
  TResult extends object = KubeComponentGenericResources,
  TArgs extends KubeComponentArgs = KubeComponentArgs,
  TParent extends Component = any
> extends Component<TResult, TArgs, TParent> {
  declare protected readonly target: KubeTarget;

  /**
   * Whether to enable adding standard requirements such as CNI and DNS
   */
  protected standardRequirements = true;

  constructor(target: Target, props: TArgs = {} as TArgs, name?: string, parent?: TParent) {
    super(target, props, name, parent);
  };

  public get context(): KubeComponentContext {
    if (this.parent !== undefined) {
      return this.parent.context as KubeComponentContext;
    };

    return {
      namespace: this.namespace,
    };
  };

  /**
   * Returns the default set of requirements.
   */
  public async getRequirements(): Promise<IComponentMatcher[]> {
    const def: IComponentMatcher[] = this.standardRequirements ? [
      new CapabilityMatcher(CNICapability),
      new CapabilityMatcher(DNSCapability),
    ] : [];

    return (await super.getRequirements()).concat(def, [
      new ComponentMatcher(KubePreludeComponent),
    ]);
  };

  /**
   * Returns the default namespace for all resources within this Component.
   * If not set, this will default to the "default" namespace.
   */
  public get namespace(): string {
    return 'default';
  };

  public async build(result?: TResult): Promise<TResult> {
    result = await super.build(result);

    // properly namespace resources, because postBuild doesn't run for children individually
    const resources = normaliseResources(result);
    resources.forEach(r => {
      if (r.apiVersion === undefined || r.kind == undefined) {
        throw new Error(`in component ${this.rid}: apiVersion or kind unset on a resource passed to the build function`)
      }

      defaultNamespace(r, this.namespace)
    });

    return result;
  };

  public async postBuild(data: any) {
    // run post-build resource fixup at the top level
    let resources = normaliseResources(data);

    // TODO: a bit of a hack... might want to improve $resolve logic to add caching
    // we need to not just resolve here, because we might have default values that were added in the build phase
    let resolved = this.props.$__cachedResult__;
    if (resolved === undefined) {
      resolved = await this.props.$resolve();
    };

    // adds the metadata ConfigMap
    const metadata = new api.v1.ConfigMap({
      metadata: {
        name: `${this.name}-metadata`,
      },
      data: {
        name: this.name,
        class: this.clazz,
        context: JSON.stringify(this.context),
        config: JSON.stringify(resolved, null, 2),
      },
    });
    resources.push(metadata);

    resources = resources.map(obj => {
      obj = fixupResource(obj);
      return obj;
    });

    return super.postBuild(resources);
  };

  protected get cluster(): ClusterSpec {
    return this.target.fact(ClusterFact).instance;
  };

  // helper accessors for extension fields
  protected get helm(): Helm {
    return this.target.helm;
  };

  protected get kustomize(): Kustomize {
    return this.target.kustomize;
  };

  /**
   * Wrapper for Helm.template that inserts our default namespace and configuration
   */
  protected async helmTemplate(chart: string, values: any, config: HelmChartOpts, filter?: (v: Resource) => boolean): Promise<Resource[]> {
    config = _.merge({
      namespace: this.namespace,
      kubeVersion: `v${this.cluster.version}`,
      includeCRDs: true,
      noHooks: true,
      skipTests: true,
    } as Partial<HelmChartOpts>, config);

    let result = await this.helm.template(chart, values, config);
    if (filter !== undefined) result = result.filter(filter);

    return result;
  };

  /**
   * Wrapper for Kustomize.build
   */
  protected async kustomizeBuild(dir: string, config: KustomizeOpts = {}): Promise<Resource[]> {
    return this.kustomize.build(dir, config);
  };
};

export class KubeResourceComponentOptions {
  resources: Resource[] = [];
};

@Reflect.metadata('class', 'k8s.architect.glassway.net/prelude')
export class KubePreludeComponent extends KubeComponent {
  private readonly resources: Resource[] = [];

  public async build(resources: KubeComponentGenericResources = {}) {
    resources.result = this.resources;
    return super.build(resources);
  };

  public push(...items: Resource[]) {
    this.resources.push(...items);
  };

  public async getRequirements(): Promise<IComponentMatcher[]> {
    return [];
  };
};
