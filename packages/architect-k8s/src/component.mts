import { architectGlasswayNet, CapabilityMatcher, Component, ComponentArgs, ComponentClass, ComponentMatcher, ComponentMetadata, ComponentModel, ComponentModelUtilities, ComponentUpgradeState, IComponentMatcher, KubeResource, KubeResourceUtilities, PLUGIN_TARGET_IDENTIFIERS, Target } from '@perdition/architect-core';

import { JSONSchemaType, ValidateFunction } from "ajv";
import * as api from 'kubernetes-models';
import * as toolkit from '@es-toolkit/es-toolkit';
import { CNICapability, DNSCapability } from './capabilities/index.mts';

import { KubeTarget } from './target.mts';
import { KubeContext } from './context.mts';
import { GitFetchOptions, HelmChartOpts, HttpFetchOptions, KustomizeOpts } from './index.mts';

export interface KubeComponentArgs extends ComponentArgs<KubeComponentModelInput> {};

export interface KubeComponentGenericResources {
  result?: KubeResource[];
};

export abstract class KubeComponent<
  TResult extends object = KubeComponentGenericResources,
  TArgs extends KubeComponentArgs = KubeComponentArgs,
  TParent extends Component = Component
> extends Component<TResult, TArgs, TParent> {
  declare protected readonly target: KubeTarget;

  public override context: KubeContext;

  /**
   * Whether to enable adding standard requirements such as CNI and DNS
   */
  protected standardRequirements = true;

  constructor(target: Target, props: TArgs = {} as TArgs, context?: Partial<KubeContext>, parent?: TParent) {
    super(target, props, context, parent);
    this.context = context as KubeContext;
  };

  public get namespace(): string {
    return this.context.namespace;
  };

  /**
   * Returns the default set of requirements.
   */
  public override async getRequirements(): Promise<IComponentMatcher[]> {
    const def: IComponentMatcher[] = this.standardRequirements ? [
      new CapabilityMatcher(CNICapability),
      new CapabilityMatcher(DNSCapability),
    ] : [];

    return (await super.getRequirements()).concat(def, [
      new ComponentMatcher(KubePreludeComponent),
    ]);
  };

  public override toString(): string {
    return `component ${this.context.namespace + '/' + this.context.name}`;
  };

  public override async build(result?: TResult): Promise<TResult> {
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

  public override async postBuild(data: TResult) {
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

  public override async upgrade(state: ComponentUpgradeState<KubeComponentModel>): Promise<boolean> {
    await super.upgrade(state);

    let changed = false;
    for (const [k, input] of Object.entries(state.model?.inputs || {})) {
      if (input.helm) {
        const latest = await this.target.plugin.helm.getLatestVersion(input.helm.name, input.helm.repo, input.helm.constraint);
        if (!latest) continue;

        if (input.helm.version !== latest) {
          changed = true;
          state.logger.info(`${this.constructor.name}: input '${k}' changed from ${input.helm.version} -> ${latest}`);
          input.helm.version = latest;
        };
      } else if (input.oci) {
        state.logger.warn(`${this.constructor.name}: input '${k}' OCI currently not supported`);
      };
    };

    if (changed) state.file.dirty = true;
    return changed;
  };

  public override get modelValidator(): ValidateFunction<KubeComponentModel> {
    return ComponentModelUtilities.createValidator(this.target.parent.ajv, KubeComponentContextSchema, KubeComponentModelInputSchema);
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
    config = toolkit.merge({
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

  /**
   * Marks a class as a component. This MUST be defined for all Architect components that are not dependent children.
   * @param model The component model to use. Per the documentation, this should be imported from an `architect.json` file in the same folder as your component's code.
   * @returns A decorator which sets the required properties.
   */
  public static decorate<T extends object>(model: KubeComponentModel): (target: T) => void {
    function decorator(target: T) {
      new ComponentMetadata<KubeComponentModel>(model, PLUGIN_TARGET_IDENTIFIERS.kubernetes, model.class).assign(target);
    };

    return decorator;
  };
};

export interface KubeComponentClass extends ComponentClass {
  namespace (target: Target): string;
};

export interface KubeComponentContext {
  namespace?: string,
};

export interface KubeComponentInputOCIModel {
  name: string,
  version: string,
};

export interface KubeComponentInputHelmModel {
  name: string,
  repo: string,
  version: string,
  constraint?: string,
};

export interface KubeComponentModelInput {
  oci?: KubeComponentInputOCIModel,
  helm?: KubeComponentInputHelmModel,
};

export type KubeComponentModel = ComponentModel<KubeComponentContext, KubeComponentModelInput>;

const KubeComponentContextSchema: JSONSchemaType<KubeComponentContext> = {
  type: "object",
  required: [],
  properties: {
    namespace: {
      type: "string",
      nullable: true
    },
  },
};

const KubeComponentModelInputSchema: JSONSchemaType<KubeComponentModelInput> = {
  type: "object",
  properties: {
    oci: {
      type: "object",
      nullable: true,
      required: ["name", "version"],
      properties: {
        name: {
          type: "string",
        },
        version: {
          type: "string",
        },
      },
    },
    helm: {
      type: "object",
      nullable: true,
      required: ["name", "repo"],
      properties: {
        name: {
          type: "string",
        },
        repo: {
          type: "string",
        },
        version: {
          type: "string",
        },
        constraint: {
          type: "string",
          nullable: true,
        },
      },
    },
  }
};

export class KubeResourceComponentOptions {
  resources: KubeResource[] = [];
};

@KubeComponent.decorate({ class: 'architect.glassway.net/prelude' })
export class KubePreludeComponent extends KubeComponent {
  private readonly resources: KubeResource[] = [];

  public override async build(resources: KubeComponentGenericResources = {}) {
    resources.result = this.resources;
    return super.build(resources);
  };

  public push(...items: KubeResource[]) {
    this.resources.push(...items);
  };

  public override async getRequirements(): Promise<IComponentMatcher[]> {
    return [];
  };
};
