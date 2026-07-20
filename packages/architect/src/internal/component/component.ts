import objectHash from 'object-hash';

import { Capability } from './capability.ts';
import { ConfigurationContext } from './configuration.ts';
import { ComponentArgs, ComponentModel, ComponentUpgradeState } from './index.ts';
import { ValidateFunction } from 'ajv';
import { ITarget } from '../index.ts';
import {
  CollectionUtilities,
  Constructor,
  Context,
  DeepPartial,
  Lazy,
  LazyAuto,
  ReflectionUtilities,
} from '../../index.ts';
import { ComponentInstanceMatcher } from './matchers/instance.ts';
import { IComponentMatcher } from './matchers/index.ts';
import { ComponentMetadata } from './metadata.ts';

export interface IComponent<
  TResult extends object = object,
  TArgs extends ComponentArgs = ComponentArgs,
  // deno-lint-ignore no-explicit-any
  TParent extends IComponent = any,
> {
  get name(): string;

  /**
   * Returns the capabilities that this component declares
   */
  get capabilities(): Capability<unknown>[];

  /**
   * Returns this component's logical classpath
   */
  get clazz(): string;

  get meta(): ComponentMetadata;

  get model(): ComponentModel;

  /**
   * Returns this component's short result ID (RID)
   */
  get rid(): string;

  /**
   * Sets the parent in "independent" mode
   */
  setParent(parent?: TParent): void;

  /**
   * Returns the component types required by this component
   */
  getRequirements(): Promise<IComponentMatcher[]>;

  /**
   * Constructs this component, setting properties on the Result object.
   */
  // noinspection JSUnusedGlobalSymbols
  build(result?: TResult): Promise<TResult>;

  /**
   * Invoked by the target during the build phase. Sets lazy properties on other components.
   * Do not resolve configuration in this function, use references instead.
   */
  configure(context: ConfigurationContext): void;

  /**
   * Implementation of custom initialisation behaviour.
   * Override this instead of overriding the constructor to avoid boilerplate code.
   */
  init(): void;

  /**
   * Pass-through function that performs postprocessing on this component's build outputs
   */
  postBuild(data: TResult): Promise<TResult>;

  /**
   * This function is implemented in plugin components to upgrade the component's inputs. It is not normally used in the standard lifecycle.
   */
  upgrade(_state: ComponentUpgradeState): Promise<boolean>;

  /**
   * Returns a prettified identifier of this component
   */
  toString(): string;
}

/**
 * Base unit of resource management that produces objects
 * to be merged into the resultant configuration tree
 */
export class Component<
  TResult extends object = object,
  TArgs extends ComponentArgs = ComponentArgs,
  // deno-lint-ignore no-explicit-any
  TParent extends Component = any,
> implements IComponent<TResult, TArgs, TParent> {
  public context: Context;
  public parent?: TParent;
  public readonly children: Component[] = [];
  public readonly independent: boolean;

  /**
   * The configuration model of the component as a {LazyAuto}
   */
  public props: LazyAuto<TArgs>;
  protected readonly target: ITarget;

  private _metadata?: ComponentMetadata;
  protected _validator?: ValidateFunction<unknown>;

  constructor(
    target: ITarget,
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

  public get capabilities(): Capability<unknown>[] {
    return [];
  }

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

  public get rid(): string {
    return Component.rid(this.context.name, this.context);
  }

  public static rid(name: string, context?: object): string {
    return `${name}-${objectHash(context as object).slice(0, 7)}`;
  }
  /**
   * Marks a class as a component. This MUST be defined for all Architect components that are not dependent children.
   * @param model The component model to use. Per the documentation, this should be imported from an `architect.json` file in the same folder as your component's code.
   * @returns A decorator which sets the required properties.
   */
  public static decorate<T extends object>(
    model: ComponentModel,
  ): (target: T) => void {
    function decorator(target: T) {
      new ComponentMetadata<ComponentModel>(
        model,
        undefined,
      ).assign(target);
    }

    return decorator;
  }

  public setParent(parent?: TParent) {
    this.parent = parent;
  }

  public async getRequirements(): Promise<IComponentMatcher[]> {
    // if we have a parent, add an automatic requirement on it
    if (this.parent !== undefined) {
      return [new ComponentInstanceMatcher(this.parent)];
    }

    return [];
  }

  // noinspection JSUnusedGlobalSymbols
  public async build(result: TResult = {} as TResult): Promise<TResult> {
    for (const c of this.children) {
      if (c.independent) continue;
      result = await c.build(result) as TResult;
    }

    return result;
  }

  public configure(context: ConfigurationContext) {
    this.children.forEach((c) => {
      if (c.independent) return;
      c.configure(context);
    });
  }

  public init() {}

  public async postBuild(data: TResult): Promise<TResult> {
    return data;
  }

  public async upgrade(_state: ComponentUpgradeState): Promise<boolean> {
    return false;
  }

  public toString(): string {
    return `Component ${this.context.name}`;
  }

  /**
   * Adds a child by constructing it and adding it to this component
   */
  // noinspection JSUnusedGlobalSymbols
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
      this.target.enable(child)
      this.target.register(child, instance, instance.context);
    }

    this.children.push(instance);
  }

  /**
   * Creates a reference to a component with the same context
   */
  // noinspection JSUnusedGlobalSymbols
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
      ...this.context,
      name: name,
    };
  }

  /**
   * Sets the default values for this component's properties. Should be called in the {@link Component.configure} function, or alternatively {@link Component.init}
   */
  // noinspection JSUnusedGlobalSymbols
  protected setDefaults(defaults: DeepPartial<TArgs>) {
    this.props.$setFallback(defaults);
  }
}

export interface ComponentClass<T extends Component = Component> {
  new (
    // unavoidable because of recursive type
    // deno-lint-ignore no-explicit-any
    target: any,
    context: Context,
    // deno-lint-ignore no-explicit-any
    props?: any,
    parent?: Component,
  ): T;
}
