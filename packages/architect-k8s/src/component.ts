import {
  CapabilityMatcher,
  type IComponent,
  Component,
  ComponentArgs,
  ComponentClass,
  ComponentMatcher,
  ComponentMetadata,
  ComponentModel,
  ComponentModelUtilities,
  ComponentUpgradeState,
  IComponentMatcher,
  KubeResource,
  KubeResourceUtilities,
  Plugin,
} from '@glassway/architect';

import { JSONSchemaType } from 'ajv';
import * as api from '@glassway/kubernetes-models';
import * as toolkit from '@es-toolkit/es-toolkit';
import { CNICapability, DNSCapability } from './capabilities/index.ts';

import type { IKubeTarget } from './target/target.ts';
import type { KubeContext } from './context.ts';
import { GitFetchOptions, HelmChartOpts, HttpFetchOptions, K8sPluginProps, KustomizeOpts, } from './index.ts';
import { KubeTargetIntrospection } from './target/intro.ts';

export interface KubeComponentArgs
  extends ComponentArgs<KubeComponentModelInput> {
}

export interface KubeComponentGenericResources {
  result?: KubeResource[];
}

export interface IKubeComponent<
  TResult extends object = KubeComponentGenericResources,
  TArgs extends KubeComponentArgs = KubeComponentArgs,
  TParent extends IComponent = IComponent,
> extends IComponent<TResult, TArgs, TParent> {
  get namespace(): string;
}

export abstract class KubeComponent<
  TResult extends object = KubeComponentGenericResources,
  TArgs extends KubeComponentArgs = KubeComponentArgs,
  TParent extends IComponent = IComponent,
> extends Component<TResult, TArgs, TParent> implements IKubeComponent<TResult, TArgs, TParent> {
  declare protected readonly _target: IKubeTarget;
  declare protected readonly _context: KubeContext;

  /**
   * Whether to enable adding standard requirements such as CNI and DNS
   */
  protected standardRequirements = true;

  constructor(
    target: IKubeTarget,
    context: KubeContext,
    props?: TArgs,
    parent?: TParent,
  ) {
    super(target, context, props, parent);
    this._context = context;

    this._validator = ComponentModelUtilities.createValidator(
      this.target.app.ajv,
      KubeComponentContextSchema,
      KubeComponentModelInputSchema,
    );
  }

  public override get target(): IKubeTarget {
    return this._target;
  }

  public override get context(): KubeContext {
    return this._context;
  }

  public get namespace(): string {
    return this.context.namespace ?? 'default';
  }

  protected get cluster(): K8sPluginProps {
    return this.target.cluster;
  }

  protected get introspection(): KubeTargetIntrospection {
    return this.target.getIntrospection();
  }

  public static override decorate<T extends object>(
    model: KubeComponentModel,
  ): (target: T) => void {
    function decorator(target: T) {
      new ComponentMetadata<KubeComponentModel>(
        model,
        Plugin.TARGET_IDENTIFIERS.kubernetes,
      ).assign(target);
    }

    return decorator;
  }

  /**
   * Returns the default set of requirements.
   */
  public override async getRequirements(): Promise<IComponentMatcher[]> {
    const def: IComponentMatcher[] = this.standardRequirements
      ? [
        new CapabilityMatcher(CNICapability),
        new CapabilityMatcher(DNSCapability),
      ]
      : [];

    return (await super.getRequirements()).concat(def, [
      new ComponentMatcher(KubePreludeComponent),
    ]);
  }

  public override toString(): string {
    return `${this.context.namespace + '/' + this.context.name}`;
  }

  public override async build(result?: TResult): Promise<TResult> {
    result = await super.build(result);

    // properly namespace resources, because postBuild doesn't run for children individually
    const resources = KubeResourceUtilities.normaliseResources(result);
    resources.forEach((r) => {
      if (r.apiVersion === undefined || r.kind == undefined) {
        throw new Error(
          `in component ${this.rid}: apiVersion or kind unset on a resource passed to the build function`,
        );
      }

      KubeResourceUtilities.defaultNamespace(r, this.context.namespace);
    });

    return result;
  }

  public override async postBuild(data: TResult): Promise<TResult> {
    // run post-build resource fixup at the top level
    let resources = KubeResourceUtilities.normaliseResources(data);

    // adds the metadata ConfigMap
    const resolved = await this.props.$resolve();
    const metadata = new api.v1.ConfigMap({
      metadata: {
        name: `${this.context.name}-metadata`,
        namespace: this.context.namespace
      },
      data: {
        name: this.context.name,
        class: this.clazz,
        context: JSON.stringify(this.context),
        config: JSON.stringify(resolved, null, 2),
      },
    });

    resources.push(metadata);

    resources = resources.map((obj) => {
      obj = KubeResourceUtilities.fixupResource(obj);
      return obj;
    });

    return super.postBuild(resources as TResult);
  }

  public override async upgrade(
    state: ComponentUpgradeState<KubeComponentModel>,
  ): Promise<boolean> {
    await super.upgrade(state);

    let changed = false;
    for (const [k, input] of Object.entries(state.model?.inputs || {})) {
      if (input.helm) {
        const latest = await this.target.plugin.helm.getLatestVersion(
          input.helm.name,
          input.helm.repo,
          input.helm.constraint,
        );
        if (!latest) continue;

        if (input.helm.version !== latest) {
          changed = true;
          state.logger?.info(
            `${this.constructor.name}: input '${k}': ${input.helm.repo}/${input.helm.name} changed from ${input.helm.version} -> ${latest}`,
          );
          input.helm.version = latest;
        }
      } else if (input.oci) {
        const latest = await this.target.plugin.oci.getLatestVersion(input.oci.name, input.oci.constraint)
        if (!latest) continue;

        if (input.oci.version !== latest) {
          changed = true;
          state.logger?.info(
            `${this.constructor.name}: input '${k}': ${input.oci.name} changed from ${input.oci.version} -> ${latest}`,
          );
          input.oci.version = latest;
        }
      }
    }

    if (changed) state.file.dirty = true;
    return changed;
  }

  protected async gitFetch(
    url: string,
    ref?: string,
    options?: GitFetchOptions,
  ): Promise<KubeResource[]> {
    return this.target.plugin.gitBuilder.fetch(url, ref, options);
  }

  protected async httpFetch(
    url: string,
    cache?: boolean,
    options?: HttpFetchOptions,
  ): Promise<KubeResource[]> {
    return this.target.plugin.httpBuilder.fetch(url, cache, options);
  }

  /**
   * Wrapper for Helm.template that inserts our default namespace and configuration
   */
  protected async helmTemplate(
    chart: string,
    values: object,
    config: HelmChartOpts,
    filter?: (v: KubeResource) => boolean,
  ): Promise<KubeResource[]> {
    const state = await this.introspection.getState();

    config = toolkit.merge({
      namespace: this.context.namespace,
      kubeVersion: state.version,
      includeCRDs: true,
      noHooks: true,
      skipTests: true,
    } as Partial<HelmChartOpts>, config);

    let result = await this.target.plugin.helm.template(chart, values, config);
    if (filter !== undefined) result = result.filter(filter);

    return result;
  }

  /**
   * Wrapper for Kustomize.build
   */
  protected async kustomizeBuild(
    dir: string,
    config: KustomizeOpts = {},
  ): Promise<KubeResource[]> {
    return this.target.plugin.kustomize.build(dir, config);
  }
}

export interface KubeComponentClass extends ComponentClass {
  namespace(target: IKubeTarget): string;
}

export interface KubeComponentContext {
  namespace?: string;
}

export interface KubeComponentInputOCIModel {
  name: string;
  version: string;
  constraint?: string;
}

export interface KubeComponentInputHelmModel {
  name: string;
  repo: string;
  version: string;
  constraint?: string;
}

export interface KubeComponentModelInput {
  oci?: KubeComponentInputOCIModel;
  helm?: KubeComponentInputHelmModel;
}

export type KubeComponentModel = ComponentModel<
  KubeComponentContext,
  KubeComponentModelInput
>;

const KubeComponentContextSchema: JSONSchemaType<KubeComponentContext> = {
  type: 'object',
  required: [],
  properties: {
    namespace: {
      type: 'string',
      nullable: true,
    },
  },
};

const KubeComponentModelInputSchema: JSONSchemaType<KubeComponentModelInput> = {
  type: 'object',
  properties: {
    oci: {
      type: 'object',
      nullable: true,
      required: ['name', 'version'],
      properties: {
        name: {
          type: 'string',
        },
        version: {
          type: 'string',
        },
        constraint: {
          type: 'string',
          nullable: true,
        },
      },
    },
    helm: {
      type: 'object',
      nullable: true,
      required: ['name', 'repo'],
      properties: {
        name: {
          type: 'string',
        },
        repo: {
          type: 'string',
        },
        version: {
          type: 'string',
        },
        constraint: {
          type: 'string',
          nullable: true,
        },
      },
    },
  },
};

@KubeComponent.decorate({ class: 'architect.glassway.net/prelude' })
export class KubePreludeComponent extends KubeComponent {
  private readonly resources: KubeResource[];

  constructor(target: IKubeTarget, context: KubeContext, props?: KubeComponentArgs, parent?: IComponent) {
    super(target, context, props, parent);
    this.resources = [];
  }

  public override async build(resources: KubeComponentGenericResources = {}): Promise<KubeComponentGenericResources> {
    resources.result = this.resources;
    return super.build(resources);
  }

  public push(...items: KubeResource[]) {
    this.resources.push(...items);
  }

  public override async getRequirements(): Promise<IComponentMatcher[]> {
    return [];
  }
}
