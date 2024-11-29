import objectHash from 'object-hash';
import { Context } from './context.mts';
import { constructor, ReflectionUtilities } from './utils/index.mts';

export class Registry<T> {
  public readonly data: Record<string, T> = {};

  /**
    * Arguments to be passed to the constructor of registered classes
    */
  private readonly args: unknown[];

  constructor(args?: unknown[]) {
    if (args != null) {
      this.args = args;
    } else {
      this.args = [];
    };
  };

  /**
   * Registers an instance of T with the options provided.
   * If no object is passed, a new instance of T will be instantiated and used.
   */
  public register<V extends T>(token: constructor<V>, instance?: V, _context?: Partial<Context>) {
    if (instance == null) {
      instance = new token(...this.args);
    };

    const context = Registry.defaultContext(token, _context);
    const ident = Registry.ident(context);

    if (ident in this.data) {
      throw Error(`${ident} already exists in this Registry`);
    };

    this.data[ident] = instance;
  };

  /**
   * Requests an entry from the registry
   * @param token The constructor token to request
   * @param name Optional name of the object
   * @param auto Create the object if it doesn't exist
   */
  public request<V extends T>(token: constructor<V>, _context?: Partial<Context>): T | undefined {
    const context = Registry.defaultContext(token, _context);
    const ident = Registry.ident(context);

    if (!(ident in this.data)) return undefined;
    return this.data[ident] as (T | undefined);
  };

  private static ident(context: Context): string {
    return `${context.name}-${objectHash(context)}`;
  };

  private static defaultContext(token: constructor<unknown>, context?: Partial<Context>): Context {
    if (!context) context = {};
    if (!context.name) {
      context.name = ReflectionUtilities.classToName(Reflect.getMetadata('class', token));
    };

    return context as Context;
  };
};