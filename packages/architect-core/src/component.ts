import 'reflect-metadata';
import _ from 'lodash';
import objectHash from 'object-hash';

import { Capability } from './capability';
import { ConfigurationContext } from './config';
import { Target } from './target';
import { constructor, DeepPartial, Lazy, LazyAuto, Named, setNamed } from './utils';

export interface ComponentArgs {
  /**
   * Whether the component is enabled.
   */
  enable?: boolean;
};

/**
 * Base unit of resource management that produces objects
 * to be merged into the resultant configuration tree
 */
export abstract class Component<
  TResult extends object = any,
  TArgs extends ComponentArgs = ComponentArgs,
  TParent extends Component = any
> implements Named {
  public static ref<T extends Component>(input: T): ComponentReference<T> {
    return {
      name: input.name,
      context: input.context,
    };
  };

  protected readonly target: Target;

  protected readonly children: Component[] = [];
  protected readonly parent?: TParent;

  /**
   * The name of the component, unique within a context
   */
  public readonly name: string;

  /**
   * The configuration model of the component as a {LazyAuto}
   */
  public props: LazyAuto<TArgs>;

  constructor(target: Target, props: TArgs = {} as TArgs, name?: string, parent?: TParent) {
    this.target = target;
    this.parent = parent;

    if (!Reflect.hasMetadata('uuid', this.constructor) && this.parent === undefined) {
      throw Error(`${this.constructor.name}: the uuid metadata attribute must be set`);
    };

    if (name !== undefined) {
      this.name = name;
    } else if (Reflect.hasMetadata('name', this.constructor)) {
      this.name = Reflect.getMetadata('name', this.constructor);
    } else {
      // if the name is not present and we have a parent, use the parent's name, otherwise throw
      if (this.parent !== undefined) {
        this.name = this.parent.name;
      } else {
        throw Error(`${this.constructor.name}: the name metadata attribute must be set`);
      };
    };

    // hacky way to leave this defaultable
    if (props === undefined) {
      props = {} as TArgs;
    };

    this.props = Lazy.from(props);

    // Component is a Named
    setNamed(this);

    // Configure
    this.configure(new ConfigurationContext(target, this.props));

    // Run initialiser
    this.init();
  };

  /**
   * Returns the context of this component
   */
  public get context(): Record<string, any> {
    if (this.parent !== undefined) {
      return this.parent.context;
    };

    return {};
  };

  /**
   * Returns the capabilities that this component declares
   */
  public get capabilities(): Capability<any>[] {
    return [];
  };

  /**
   * Returns the component types required by this component
   */
  public async getRequirements(): Promise<IComponentMatcher[]> {
    // if we have a parent, add an automatic requirement on it
    if (this.parent !== undefined) {
      return [new ComponentInstanceMatcher(this.parent)];
    };

    return [];
  };

  /**
   * Adds a child by constructing it and adding it to this component
   */
  protected addChild(child: constructor<Component>, independent = false) {
    const instance = new child(this.target, undefined, undefined, this);
    instance.props.$set({ enable: this.props.enable });

    if (independent) {
      this.target.components.register(child, instance);
    } else {
      this.children.push(instance);
    };
  };

  /**
   * Creates a reference to a component with the same context
   */
  protected localRef<T extends Component>(type: constructor<T>, name?: string): ComponentReference<T> {
    if (name === undefined) {
      name = Reflect.getMetadata('name', type);
    };

    if (name === undefined) {
      throw Error(`localRef(${type.name}): neither the name metadata attribute nor the name parameter were set`);
    };

    return {
      name: name,
      context: this.context,
    };
  };

  /**
   * Sets the default values for this component's properties. Should be called in the configure() function, or alternatively init()
   */
  protected setDefaults(defaults: DeepPartial<TArgs>) {
    this.props.$setFallback(defaults);
  };

  /**
   * Constructs this component, setting properties on the Result object.
   */
  public async build(result: TResult = {} as any): Promise<TResult> {
    for (const c of this.children) {
      result = await c.build(result);
    };

    return result;
  };

  /**
   * Invoked by the target during the build phase. Sets lazy properties on other components.
   * Do not resolve configuration in this function, use references instead.
   */
  public configure(_context: ConfigurationContext) {
    this.children.forEach(c => c.configure);
  };

  /**
   * Implementation of custom initialisation behaviour.
   * Override this instead of overriding the constructor to avoid boilerplate code.
   */
  public init() {};

  /**
   * Passthrough function that performs postprocessing on this component's build outputs
   */
  public async postBuild(data: any): Promise<any> {
    return data;
  };

  /**
   * Returns this component's UUID
   */
  public get uuid(): string {
    if (this.parent !== undefined) {
      return this.parent.uuid;
    };

    return Reflect.getMetadata('uuid', this.constructor);
  };

  /**
   * Returns this component's short result ID (RID)
   */
  public get rid(): string {
    return `${this.name}-${objectHash(this.context).slice(0, 7)}`;
  };

  /**
   * Returns a prettified identifier of this component
   */
  public toString(): string {
    return this.rid;
  };
};

export interface ComponentReference<_T extends Component> {
  name: string;
  context: Record<string, any>;
};

/**
 * Defines an object that matches one or more components according to a defined ruleset
 */
export interface IComponentMatcher {
  match(input: Component): boolean;
  toString(): string;
};

export class ComponentMatcher implements IComponentMatcher {
  private readonly token: constructor<Component>;
  constructor(token: constructor<Component>) {
    this.token = token;
  };

  match(input: Component): boolean {
    const uuid = Reflect.getMetadata('uuid', this.token);
    return input.uuid === uuid;
  };

  toString(): string {
    return `${this.constructor.name}(${this.token.name})`;
  }
};

export class ComponentInstanceMatcher implements IComponentMatcher {
  private readonly instance: Component;
  constructor(instance: Component) {
    this.instance = instance;
  };

  match(input: Component): boolean {
    return input === this.instance;
  };

  toString(): string {
    return `${this.constructor.name}(${this.instance.rid})`;
  }
};

export class ComponentReferenceMatcher<T extends Component> implements IComponentMatcher {
  private readonly ref: ComponentReference<T>;
  constructor(ref: ComponentReference<T>) {
    this.ref = ref;
  };

  match(input: Component): boolean {
    return input.name === this.ref.name && _.isEqual(input.context, this.ref.context);
  };

  toString(): string {
    return `${this.constructor.name}(${this.ref.name}(${this.ref.context}))`;
  }
};
