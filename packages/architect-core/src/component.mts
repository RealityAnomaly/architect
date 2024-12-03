import 'reflect-metadata';
import _ from 'lodash';
import objectHash from 'object-hash';

import { Capability } from './capability.mts';
import { ConfigurationContext } from './config.mts';
import { Target } from './target.mts';
import { constructor, DeepPartial, Lazy, LazyAuto, recursiveMerge, ReflectionUtilities } from './utils/index.mts';
import { Architect, ComponentInputModel, ComponentModel, Context, MODEL_META_KEY, TYPE_META_KEY } from './index.mts';
import Module from 'node:module';
import { ModuleUtilities } from './utils/modules.mts';

export interface ComponentArgs {
  /**
   * Whether the component is enabled.
   */
  enable?: boolean;

  /**
   * The inputs for the component.
   */
  inputs?: Record<string, ComponentInputModel>;
};

/**
 * Base unit of resource management that produces objects
 * to be merged into the resultant configuration tree
 */
export abstract class Component<
  TResult extends object = object,
  TArgs extends ComponentArgs = ComponentArgs,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  TParent extends Component = any,
> {
  public context: Context;
  protected readonly target: Target;
  
  public parent?: TParent;
  public readonly children: Component[] = [];
  public readonly independent: boolean;

  /**
   * The configuration model of the component as a {LazyAuto}
   */
  public props: LazyAuto<TArgs>;

  // TODO: allow dependent classes to call constructor in isolation. reduce coupling to Target
  constructor(target: Target, props: TArgs | undefined = {} as TArgs, context: Context, parent?: TParent) {
    this.target = target;
    this.context = context;
    this.independent = parent === undefined;
    this.setParent(parent);

    const model = Component.resolveModel(this.constructor as constructor<Component>);
    if (model && model.inputs) {
      props.inputs = recursiveMerge(model.inputs, props.inputs || {});
    };

    // if (!Reflect.hasMetadata('class', this.constructor) && this.parent === undefined) {
    //   throw Error(`${this.constructor.name}: the class metadata attribute must be set`);
    // };
    
    // const clazzSplit = this.clazz.split('/');
    // if (clazzSplit.length != 2 || !clazzSplit[0] || !clazzSplit[1]) {
    //   throw Error(`${this.constructor.name}: the class metadata attribute must contain at least one slash, and both parts must not be empty`);
    // };

    // hacky way to leave this defaultable
    if (props === undefined) {
      props = {} as TArgs;
    };

    this.props = Lazy.from(props);

    // Configure
    this.configure(new ConfigurationContext(target, this.props));

    // Run initialiser
    this.init();
  };

  public get name(): string {
    return this.context.name;
  };

  /**
   * Returns the capabilities that this component declares
   */
  public get capabilities(): Capability<unknown>[] {
    return [];
  };

  /**
   * Sets the parent in "independent" mode
   */
  public setParent(parent?: TParent) {
    this.parent = parent;
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
    const context = this.target.defaultContext(child, structuredClone(this.context), true);
    const instance = new child(this.target, undefined, context, independent ? undefined : this);
    instance.props.$set({ enable: this.props.enable });

    if (independent) {
      instance.setParent(this);
      this.target.components.register(child, instance, instance.context);
    };

    this.children.push(instance);
  };

  /**
   * Creates a reference to a component with the same context
   */
  protected localRef<T extends Component>(type: constructor<T>, name?: string): Context {
    if (name === undefined) {
      const model = Component.resolveModel(type);
      if (model && model.class) name = ReflectionUtilities.classToName(model.class);
    };

    if (name === undefined) {
      throw Error(`localRef(${type.name}): unable to resolve component name`);
    };

    return {
      ...this.context,
      name: name,
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
  public async build(result: TResult = {} as TResult): Promise<TResult> {
    for (const c of this.children) {
      if (c.independent) continue;
      result = await c.build(result) as TResult;
    };

    return result;
  };

  /**
   * Invoked by the target during the build phase. Sets lazy properties on other components.
   * Do not resolve configuration in this function, use references instead.
   */
  public configure(context: ConfigurationContext) {
    this.children.forEach(c => {
      if (c.independent) return;
      c.configure(context)
    });
  };

  /**
   * Implementation of custom initialisation behaviour.
   * Override this instead of overriding the constructor to avoid boilerplate code.
   */
  public init() {};

  /**
   * Passthrough function that performs postprocessing on this component's build outputs
   */
  public async postBuild(data: TResult): Promise<TResult> {
    return data;
  };

  /**
   * Returns this component's logical classpath
   */
  public get clazz(): string {
    if (!this.model || !this.model.class) {
      throw new Error(`Unable to resolve the class for component ${this}: Undefined model`);
    };

    return this.model.class;
  };

  public get model(): ComponentModel | undefined {
    if (this.parent !== undefined && !this.independent) {
      return this.parent.model;
    };

    return Component.resolveModel(this.constructor as constructor<Component>);
  };

  /**
   * Returns this component's short result ID (RID)
   */
  public get rid(): string {
    return Component.rid(this.context.name, this.context);
  };

  /**
   * Returns a prettified identifier of this component
   */
  public toString(): string {
    return `Component ${this.context.name}`;
  };

  public static resolveModel<TModel extends ComponentModel>(type: constructor<Component>): TModel | undefined {
    if (!(Reflect.hasMetadata(MODEL_META_KEY, type))) return undefined;
    return Reflect.getMetadata(MODEL_META_KEY, type);
  };

  public static async collect(_parent: Architect, module: Module): Promise<ComponentClass[]> {
    return ModuleUtilities.collectClasses(module, clazz => {
      return _.isObject(clazz) && Reflect.hasMetadata(TYPE_META_KEY, clazz) && Reflect.getMetadata(TYPE_META_KEY, clazz) === 'component';
    });
  };

  // public static async collectPaths(parent: Architect, paths: string[]): Promise<ComponentClass[]> {
  //   const results = [];

  //   for (const path of paths) {
  //     try {
  //       const statr = await fs.stat(path);
  //       if (!statr.isDirectory()) return [];
  //     } catch {
  //       continue;
  //     };
  
  //     const paths = [];
  //     for await (const p of walk(path)) {
  //       paths.push(p);
  //     };
  
  //     results.push(...await Promise.all(paths.map(async (k: string): Promise<ComponentClass[]> => {
  //       if (!k.endsWith('.mts')) return [];
  
  //       let module: object;
  //       try {
  //         module = await import(k);
  //       } catch (exception) {
  //         parent.logger.warn(`Failed to load path ${k}: ${exception}`);
  //         return [];
  //       };
  
  //       return Object.values(module).filter(m => {
  //         return Reflect.hasMetadata('class', m as object);
  //       }) as ComponentClass[];
  //     })));
  //   }

  //   return results.flat();
  // };

  public static rid(name: string, context?: object): string {
    return `${name}-${objectHash(context as object).slice(0, 7)}`;
  };
};

export interface ComponentClass {
  new (target: Target, props?: ComponentArgs, name?: string, parent?: Component): Component;
};

/**
 * Defines an object that matches one or more components according to a defined ruleset
 */
export interface IComponentMatcher {
  match(input: Component): boolean;
  constraint(): string;
  toString(): string;
};

export class ComponentMatcher implements IComponentMatcher {
  private readonly token: constructor<Component>;
  private readonly clazz: string;

  constructor(token: constructor<Component>) {
    this.token = token;
    this.clazz = Component.resolveModel(this.token)!.class!;
  };

  match(input: Component): boolean {
    return input.clazz === this.clazz;
  };

  constraint(): string {
    return `Component("${this.clazz}")`;
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

  constraint(): string {
    return `ComponentInstance("${this.instance.rid}")`;
  };

  toString(): string {
    return `${this.constructor.name}(${this.instance.rid})`;
  }
};

export type ComponentReference<_T> = Context;

export class ComponentReferenceMatcher<T> implements IComponentMatcher {
  private readonly ref: ComponentReference<T>;
  constructor(ref: ComponentReference<T>) {
    this.ref = ref;
  };

  match(input: Component): boolean {
    return _.isEqual(input.context, this.ref);
  };

  constraint(): string {
    return `ComponentReference(${JSON.stringify(this.ref)})`;
  };

  toString(): string {
    return `${this.constructor.name}(${this.ref})`;
  };
};
