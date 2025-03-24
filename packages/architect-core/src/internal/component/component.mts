import objectHash from 'object-hash';

import { Reflect } from '@dx/reflect';

import { Capability } from './capability.mts';
import { ConfigurationContext } from './configuration.mts';
import { ComponentModel, ComponentModelUtilities, ComponentUpgradeState, Context, } from './index.mts';
import Module from 'node:module';
import { ValidateFunction } from 'ajv';
import { Target } from '../index.mts';
import {
  Architect,
  constructor,
  DeepPartial,
  Lazy,
  LazyAuto,
  recursiveMerge,
  ReflectionUtilities,
  TypeUtilities,
} from '../../index.mts';
import { ModuleUtilities } from '../../utils/modules.mts';
import { ComponentInstanceMatcher } from './matchers/instance.mts';
import { IComponentMatcher } from './matchers/index.mts';
import { ComponentMetadata } from './metadata.mts';

export type ExtractComponentArgs<T extends Component> = T extends
  Component<object, infer A> ? A : never;

export interface ComponentArgs<TInput = unknown> {
  /**
   * Whether the component is enabled.
   */
  enable?: boolean;

  /**
   * The inputs for the component.
   */
  inputs?: Record<string, TInput>;
}

/**
 * Base unit of resource management that produces objects
 * to be merged into the resultant configuration tree
 */
export abstract class Component<
  TResult extends object = object,
  TArgs extends ComponentArgs = ComponentArgs,
  // deno-lint-ignore no-explicit-any
  TParent extends Component = any,
> {
  public context: Context;
  public parent?: TParent;
  public readonly children: Component[] = [];
  public readonly independent: boolean;
  /**
   * The configuration model of the component as a {LazyAuto}
   */
  public props: LazyAuto<TArgs>;
  protected readonly target: Target;
  private modelValidated: boolean = false;

  // TODO: allow dependent classes to call constructor in isolation. reduce coupling to Target
  protected constructor(
    target: Target,
    props: TArgs | undefined = {} as TArgs,
    context?: Partial<Context>,
    parent?: TParent,
  ) {
    if (!context || !context.name) {
      throw new Error(`the name property must be set on the component context`);
    }

    this.context = context as Context;
    this.target = target;
    this.independent = parent === undefined;
    this.setParent(parent);

    if (this.meta.model && this.meta.model.inputs) {
      props.inputs = recursiveMerge(this.meta.model.inputs, props.inputs || {});
    }

    if (props === undefined) {
      props = {} as TArgs;
    }

    this.props = Lazy.from(props);
    this.configure(new ConfigurationContext(target, this.props));
  }

  public get name(): string {
    return this.context.name;
  }

  /**
   * Returns the capabilities that this component declares
   */
  public get capabilities(): Capability<unknown>[] {
    return [];
  }

  /**
   * Returns this component's logical classpath
   */
  public get clazz(): string {
    if (!this.model || !this.model.class) {
      throw new Error(
        `Unable to resolve the class for component ${this}: Undefined model`,
      );
    }

    return this.model.class;
  }

  public get meta(): ComponentMetadata {
    return ComponentMetadata.from(this.constructor as constructor<Component>);
  }

  public get model(): ComponentModel | undefined {
    if (this.parent !== undefined && !this.independent) {
      return this.parent.model;
    }

    if (!this.modelValidated && this.meta.model) {
      const validator = this.modelValidator;
      if (!validator(this.meta.model)) {
        throw new Error(
          `failed to validate model for ${this.constructor.name}: ${
            this.target.app.ajv.errorsText(validator.errors)
          }`,
        );
      }

      this.modelValidated = true;
    }

    return this.meta.model;
  }

  public get modelValidator(): ValidateFunction<ComponentModel> {
    return ComponentModelUtilities.createValidator(this.target.app.ajv);
  }

  /**
   * Returns this component's short result ID (RID)
   */
  public get rid(): string {
    return Component.rid(this.context.name, this.context);
  }

  public static async collect(module: Module): Promise<ComponentClass[]> {
    return ModuleUtilities.collectClasses(module, (clazz) => {
      return TypeUtilities.isObject(clazz) &&
        Reflect.hasMetadata(Architect.TYPE_META_KEY, clazz) &&
        Reflect.getMetadata(Architect.TYPE_META_KEY, clazz) === 'component';
    });
  }

  public static rid(name: string, context?: object): string {
    return `${name}-${objectHash(context as object).slice(0, 7)}`;
  }

  /**
   * Sets the parent in "independent" mode
   */
  public setParent(parent?: TParent) {
    this.parent = parent;
  }

  /**
   * Returns the component types required by this component
   */
  public async getRequirements(): Promise<IComponentMatcher[]> {
    // if we have a parent, add an automatic requirement on it
    if (this.parent !== undefined) {
      return [new ComponentInstanceMatcher(this.parent)];
    }

    return [];
  }

  /**
   * Constructs this component, setting properties on the Result object.
   */
  public async build(result: TResult = {} as TResult): Promise<TResult> {
    for (const c of this.children) {
      if (c.independent) continue;
      result = await c.build(result) as TResult;
    }

    return result;
  }

  /**
   * Invoked by the target during the build phase. Sets lazy properties on other components.
   * Do not resolve configuration in this function, use references instead.
   */
  public configure(context: ConfigurationContext) {
    this.children.forEach((c) => {
      if (c.independent) return;
      c.configure(context);
    });
  }

  /**
   * Implementation of custom initialisation behaviour.
   * Override this instead of overriding the constructor to avoid boilerplate code.
   */
  public init() {}

  /**
   * Pass-through function that performs postprocessing on this component's build outputs
   */
  public async postBuild(data: TResult): Promise<TResult> {
    return data;
  }

  /**
   * This function is implemented in plugin components to upgrade the component's inputs. It is not normally used in the standard lifecycle.
   */
  public async upgrade(_state: ComponentUpgradeState): Promise<boolean> {
    return false;
  }

  /**
   * Returns a prettified identifier of this component
   */
  public toString(): string {
    return `Component ${this.context.name}`;
  }

  /**
   * Adds a child by constructing it and adding it to this component
   */
  protected addChild(child: constructor<Component>, independent = false) {
    const context = this.target.defaultContext(
      child,
      structuredClone(this.context),
      true,
    );
    const instance = new child(
      this.target,
      undefined,
      context,
      independent ? undefined : this,
    );
    instance.props.$set({ enable: this.props.enable });

    if (independent) {
      instance.setParent(this);
      this.target.components.register(child, instance, instance.context);
    }

    this.children.push(instance);
  }

  /**
   * Creates a reference to a component with the same context
   */
  protected localRef<T extends Component>(
    type: constructor<T>,
    name?: string,
  ): Context {
    if (name === undefined) {
      const meta = ComponentMetadata.from(type);
      if (meta.model && meta.model.class) {
        name = ReflectionUtilities.classToName(meta.model.class);
      }
    }

    if (name === undefined) {
      throw Error(`localRef(${type.name}): unable to resolve component name`);
    }

    return {
      ...this.context || {},
      name: name,
    };
  }

  /**
   * Sets the default values for this component's properties. Should be called in the configure() function, or alternatively init()
   */
  protected setDefaults(defaults: DeepPartial<TArgs>) {
    this.props.$setFallback(defaults);
  }
}

export interface ComponentClass<T extends Component = Component> {
  new (
    target: Target,
    // deno-lint-ignore no-explicit-any
    props?: any,
    context?: Partial<Context>,
    parent?: Component,
  ): T;
}

export type ComponentReference<_T> = Context;
