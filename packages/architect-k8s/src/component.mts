import { Architect, architectGlasswayNet, CapabilityMatcher, Component, ComponentArgs, ComponentClass, ComponentMatcher, ComponentModel, IComponentMatcher, KubeResource, KubeResourceUtilities, Target } from '@perdition/architect-core';

import * as api from 'kubernetes-models';
import _ from 'lodash';
import { CNICapability, DNSCapability } from './capabilities/index.mts';

import { KubeTarget } from './target.mts';
import { KubeContext } from './context.mts';
import { GitFetchOptions, HelmChartOpts, HttpFetchOptions, KustomizeOpts } from './index.mts';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface KubeComponentArgs extends ComponentArgs {};
export interface KubeComponentGenericResources {
  result?: KubeResource[];
};

export interface KubeComponentModel extends ComponentModel {
  context?: {
    namespace?: string,
  };
};

export abstract class KubeComponent<
  TResult extends object = KubeComponentGenericResources,
  TArgs extends KubeComponentArgs = KubeComponentArgs,
  TParent extends Component = never
> extends Component<TResult, TArgs, TParent> {
  declare protected readonly target: KubeTarget;

  public context: KubeContext;

  /**
   * Whether to enable adding standard requirements such as CNI and DNS
   */
  protected standardRequirements = true;

  constructor(target: Target, props: TArgs = {} as TArgs, context: KubeContext, parent?: TParent) {
    super(target, props, context, parent);
    this.context = context;
  };

  public get namespace(): string {
    return this.context.namespace;
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

  public toString(): string {
    return `component ${this.context.namespace + '/' + this.context.name}`;
  };

  public async build(result?: TResult): Promise<TResult> {
    result = await super.build(result);

    // properly namespace resources, because postBuild doesn't run for children individually
    const resources = KubeResourceUtilities.normaliseResources(result);
    resources.forEach(r => {
      if (r.apiVersion === undefined || r.kind == undefined) {
        throw new Error(`in component ${this.rid}: apiVersion or kind unset on a resource passed to the build function`)
      }

      KubeResourceUtilities.defaultNamespace(r, this.context.namespace)
    });

    return result;
  };

  public async postBuild(data: TResult) {
    // run post-build resource fixup at the top level
    let resources = KubeResourceUtilities.normaliseResources(data);

    // TODO: a bit of a hack... might want to improve $resolve logic to add caching
    // we need to not just resolve here, because we might have default values that were added in the build phase
    let resolved = this.props.$__cachedResult__;
    if (resolved === undefined) {
      resolved = await this.props.$resolve();
    };

    // adds the metadata ConfigMap
    const metadata = new api.v1.ConfigMap({
      metadata: {
        name: `${this.context.name}-metadata`,
      },
      data: {
        name: this.context.name,
        class: this.clazz,
        context: JSON.stringify(this.context),
        config: JSON.stringify(resolved, null, 2),
      },
    });
    resources.push(metadata);

    resources = resources.map(obj => {
      obj = KubeResourceUtilities.fixupResource(obj);
      return obj;
    });

    return super.postBuild(resources as TResult);
  };

  protected get cluster(): NonNullable<NonNullable<architectGlasswayNet.v1alpha1.Target["spec"]["plugins"]>["kubernetes"]> {
    return this.target.cluster;
  };

  protected async gitFetch(url: string, ref?: string, options?: GitFetchOptions): Promise<KubeResource[]> {
    return this.target.plugin.gitBuilder.fetch(url, ref, options);
  };

  protected async httpFetch(url: string, cache?: boolean, options?: HttpFetchOptions): Promise<KubeResource[]> {
    return this.target.plugin.httpBuilder.fetch(url, cache, options);
  };

  /**
   * Wrapper for Helm.template that inserts our default namespace and configuration
   */
  protected async helmTemplate(chart: string, values: object, config: HelmChartOpts, filter?: (v: KubeResource) => boolean): Promise<KubeResource[]> {
    config = _.merge({
      namespace: this.context.namespace,
      kubeVersion: this.cluster.version,
      includeCRDs: true,
      noHooks: true,
      skipTests: true,
    } as Partial<HelmChartOpts>, config);

    let result = await this.target.plugin.helm.template(chart, values, config);
    if (filter !== undefined) result = result.filter(filter);

    return result;
  };

  /**
   * Wrapper for Kustomize.build
   */
  protected async kustomizeBuild(dir: string, config: KustomizeOpts = {}): Promise<KubeResource[]> {
    return this.target.plugin.kustomize.build(dir, config);
  };
};

export interface KubeComponentClass extends ComponentClass {
  namespace (target: Target): string;
};

export class KubeResourceComponentOptions {
  resources: KubeResource[] = [];
};

@Architect.component({ class: 'architect.glassway.net/prelude' })
export class KubePreludeComponent extends KubeComponent {
  private readonly resources: KubeResource[] = [];

  public async build(resources: KubeComponentGenericResources = {}) {
    resources.result = this.resources;
    return super.build(resources);
  };

  public push(...items: KubeResource[]) {
    this.resources.push(...items);
  };

  public async getRequirements(): Promise<IComponentMatcher[]> {
    return [];
  };
};
