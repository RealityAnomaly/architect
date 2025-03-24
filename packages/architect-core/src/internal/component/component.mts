import objectHash from 'object-hash';

import { Capability } from './capability.mts';
import { ConfigurationContext } from './configuration.mts';
import { ComponentArgs, ComponentModel, ComponentUpgradeState } from './index.mts';
import { ValidateFunction } from 'ajv';
import { Target } from '../index.mts';
import {
  CollectionUtilities,
  Constructor,
  Context,
  DeepPartial,
  Lazy,
  LazyAuto,
  ReflectionUtilities,
} from '../../index.mts';
import { ComponentInstanceMatcher } from './matchers/instance.mts';
import { IComponentMatcher } from './matchers/index.mts';
import { ComponentMetadata } from './metadata.mts';

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

  private _metadata?: ComponentMetadata;
  protected _validator?: ValidateFunction<unknown>;

  // TODO: allow dependent classes to call constructor in isolation. reduce coupling to Target
  protected constructor(
    target: Target,
    context: Context,
    props?: TArgs,
    parent?: TParent,
  ) {
    this.context = context as Context;
    this.target = target;
    this.independent = parent === undefined;
    this.setParent(parent);

    if (!props) props = {} as TArgs;
    if (this.meta.model && this.meta.model.inputs) {
      props.inputs = CollectionUtilities.recursiveMerge(
        this.meta.model.inputs,
        props.inputs || {},
      );
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
    return this.model.class!;
  }

  public get meta(): ComponentMetadata {
    if (!this._metadata) {
      this._metadata = ComponentMetadata.from(this.constructor as Constructor<Component>);
      this._metadata.validate(this.constructor.name, this.target.app.ajv, this._validator);
    }

    return this._metadata;
  }

  public get model(): ComponentModel {
    if (this.parent && !this.independent) {
      return this.parent.model;
    }

    return this.meta.model!;
  }

  /**
   * Returns this component's short result ID (RID)
   */
  public get rid(): string {
    return Component.rid(this.context.name, this.context);
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
  protected addChild(child: Constructor<Component>, independent = false) {
    const context = this.target.defaultContext(
      child,
      structuredClone(this.context),
      true,
    );

    const instance = new child(
      this.target,
      context,
      undefined,
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
    type: Constructor<T>,
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
    context: Context,
    // deno-lint-ignore no-explicit-any
    props?: any,
    parent?: Component,
  ): T;
}
