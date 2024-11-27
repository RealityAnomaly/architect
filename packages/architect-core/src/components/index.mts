import 'reflect-metadata';
import _ from 'lodash';
import * as fs from 'node:fs/promises';
import objectHash from 'object-hash';

import { Capability } from '../capability.mts';
import { ConfigurationContext } from '../config.mts';
import { Target } from '../target.mts';
import { constructor, DeepPartial, Lazy, LazyAuto, Named, setNamed, walk } from '../utils/index.mts';

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
   * The overridden name of the component
   */
  private readonly _name?: string;

  /**
   * The configuration model of the component as a {LazyAuto}
   */
  public props: LazyAuto<TArgs>;

  constructor(target: Target, props: TArgs = {} as TArgs, name?: string, parent?: TParent) {
    this.target = target;
    this._name = name;
    this.parent = parent;

    if (!Reflect.hasMetadata('class', this.constructor) && this.parent === undefined) {
      throw Error(`${this.constructor.name}: the class metadata attribute must be set`);
    };
    
    const clazzSplit = this.clazz.split('/');
    if (clazzSplit.length != 2 || !clazzSplit[0] || !clazzSplit[1]) {
      throw Error(`${this.constructor.name}: the class metadata attribute must contain at least one slash, and both parts must not be empty`);
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
      name = Component.resolveName(type);
    };

    if (name === undefined) {
      throw Error(`localRef(${type.name}): unable to resolve component name`);
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
   * Returns this component's logical classpath
   */
  public get clazz(): string {
    if (this.parent !== undefined) {
      return this.parent.clazz;
    };

    return Reflect.getMetadata('class', this.constructor);
  };

  public get name(): string {
    if (this._name !== undefined) {
      return this._name;
    } else {
      // if the name is not present and we have a parent, use the parent's name, otherwise use the name part of the class
      if (this.parent !== undefined) {
        return this.parent.name;
      } else {
        return this.clazz.split('/')[1];
      };
    };
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

  public static resolveName(type: constructor<Component>): string | undefined {
    if (Reflect.hasMetadata('class', type)) {
      const split = Reflect.getMetadata('class', type).split('/');
      if (split.length != 2) return undefined;

      return split[1];
    } else {
      return undefined;
    };
  };

  public static async collectPath(path: string): Promise<ComponentClass[]> {
    try {
      const statr = await fs.stat(path);
      if (!statr.isDirectory()) return [];
    } catch {
      return [];
    };

    const paths = [];
    for await (const p of walk(path)) {
      paths.push(p);
    };

    const results = await Promise.all(paths.map(async (k: string): Promise<ComponentClass[]> => {
      if (!k.endsWith('.mts')) return [];

      let module: any;
      try {
        module = await import(k);
      } catch (exception) {
        return [];
      };

      return Object.values(module).filter(m => {
        return Reflect.hasMetadata('class', m as any);
      }) as ComponentClass[];
    }));

    return results.flat();
  };
};

export type ComponentClass = {
  new (target: Target, props: ComponentArgs, name?: string, parent?: Component): Component;
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
    const clazz = Reflect.getMetadata('class', this.token);
    return input.clazz === clazz;
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
