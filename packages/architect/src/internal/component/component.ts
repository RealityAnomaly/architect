import objectHash from 'object-hash';
import * as logtape from '@logtape/logtape';

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
  /**
   * The context of the component, defining its name.
   * Each property of the context is a separate "dimension" for the build.
   * For example, a Kubernetes context might include a namespace property.
   */
  get context(): Context;

  /**
   * The target this component is attached to.
   */
  get target(): ITarget;

  /**
   * The short name (slug) of the component.
   */
  get name(): string;

  /**
   * The parent of the component, if it exists.
   */
  get parent(): TParent | undefined;

  /**
   * The children of this component.
   */
  get children(): Component[];

  /**
   * Whether this component is using "independent mode". Only of relevance for child components.
   */
  get independent(): boolean;

  /**
   * Returns the capabilities that this component declares.
   */
  get capabilities(): Capability<unknown>[];

  /**
   * Returns this component's fully qualified namespaced classname, i.e. 'architect.glassway.net/foobar'.
   */
  get clazz(): string;

  /**
   * The immutable component model, including the fully qualified classname and package dependencies.
   */
  get model(): ComponentModel;

  /**
   * The runtime configuration tree.
   */
  get props(): LazyAuto<TArgs>;

  /**
   * Returns this component's short result ID (RID), i.e. 'foobar-b475d49'.
   */
  get rid(): string;

  /**
   * Returns the logger for this component.
   */
  get logger(): logtape.Logger;

  /**
   * Sets the parent. Note that setting the parent using this method rather than the parent
   * parameter on the constructor will cause the {@link independent} flag to be set. Set {@link addChild} for more details.
   * @param parent The parent, or undefined to clear.
   */
  setParent(parent?: TParent): void;

  /**
   * Returns a list of {@link IComponentMatcher} defining the runtime dependencies of this component.
   */
  getRequirements(): Promise<IComponentMatcher[]>;

  /**
   * Constructs the component's resources. The TResult passed in is used to stack resources from parent classes.
   * @param result The provided resources plus the constructed resources.
   */
  // noinspection JSUnusedGlobalSymbols
  build(result?: TResult): Promise<TResult>;

  /**
   * Invoked by the target during the build phase; performs any configuration required by this component.
   * Warning: Do not resolve configuration in this function, use references instead. Attempting to resolve will cause an infinite loop.
   * @param context The configuration context.
   */
  configure(context: ConfigurationContext): void;

  /**
   * Implementation of custom initialisation behaviour.
   * Override this instead of overriding the constructor to avoid boilerplate code.
   */
  init(): void;

  /**
   * Pass-through function that performs postprocessing on this component's build outputs
   * @param data
   */
  postBuild(data: TResult): Promise<TResult>;

  /**
   * Upgrades the component's package dependencies. Used only by the updater and not the standard build process.
   * @param _state The upgrade state.
   */
  upgrade(_state: ComponentUpgradeState): Promise<boolean>;

  /**
   * Returns a prettified identifier of this component.
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
  TParent extends IComponent = any,
> implements IComponent<TResult, TArgs, TParent> {
  protected readonly _context: Context;
  protected readonly _target: ITarget;

  private _parent?: TParent;
  protected readonly _children: Component[] = [];
  protected readonly _independent: boolean;

  protected readonly _props: LazyAuto<TArgs>;
  private _metadata?: ComponentMetadata;
  private _logger: logtape.Logger;
  protected _validator?: ValidateFunction<unknown>;

  /**
   * Constructs the component instance.
   * @param target The target to attach the component to.
   * @param context The context, including the component's name.
   * @param props Optional initialisation value for the component's configuration tree.
   * @param parent The parent, for full parenting (non-independent) mode.
   */
  constructor(
    target: ITarget,
    context: Context,
    props?: TArgs,
    parent?: TParent,
  ) {
    this._context = context as Context;
    this._target = target;
    this._independent = parent === undefined;
    this._logger = logtape.getLogger(['architect', 'component', this.name]);
    this.setParent(parent);

    if (!props) props = {} as TArgs;
    if (this.meta.model && this.meta.model.inputs) {
      props.inputs = CollectionUtilities.recursiveMerge(
        this.meta.model.inputs,
        props.inputs || {},
      );
    }

    this._props = Lazy.from(props);
    this.configure(new ConfigurationContext(target, this._props));
  }

  public get context() { return this._context; }
  public get target() { return this._target; }
  public get name(): string { return this._context.name; }

  public get parent() { return this._parent; }
  public get children() { return this._children; }
  public get independent() { return this._independent; }

  public get capabilities(): Capability<unknown>[] {
    return [];
  }

  public get clazz(): string {
    return this.model.class!;
  }

  public get meta(): ComponentMetadata {
    if (!this._metadata) {
      this._metadata = ComponentMetadata.from(this.constructor as Constructor<Component>);
      this._metadata.validate(this.constructor.name, this._target.app.ajv, this._validator);
    }

    return this._metadata;
  }

  public get model(): ComponentModel {
    if (this.parent && !this.independent) {
      return this.parent.model;
    }

    return this.meta.model!;
  }

  public get props(): LazyAuto<TArgs> {
    return this._props;
  }

  public get rid(): string {
    return Component.rid(this._context.name, this._context);
  }

  public static rid(name: string, context?: object): string {
    return `${name}-${objectHash(context as object).slice(0, 7)}`;
  }

  public get logger(): logtape.Logger {
    return this._logger;
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
    this._parent = parent;
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
    return this._context.name;
  }

  /**
   * Adds a child by constructing it and adding it to this component
   */
  // noinspection JSUnusedGlobalSymbols
  protected addChild(child: Constructor<Component>, independent = false) {
    const context = this._target.defaultContext(
      child,
      structuredClone(this._context),
      true,
    );

    const instance = new child(
      this._target,
      context,
      undefined,
      independent ? undefined : this,
    );

    instance.props.$set({ enable: this.props.enable });

    if (independent) {
      instance.setParent(this);
      this._target.register(child, instance, instance._context);
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
      ...this._context,
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

export interface ComponentClass<T extends IComponent = Component> {
  new (
    // unavoidable because of recursive type
    // deno-lint-ignore no-explicit-any
    target: any,
    context: Context,
    // deno-lint-ignore no-explicit-any
    props?: any,
    parent?: IComponent,
  ): T;
}
