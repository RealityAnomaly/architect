import objectHash from 'object-hash';
import { Reflect } from "@dx/reflect";

import { Context } from './context.mts';
import { constructor, ReflectionUtilities } from './utils/index.mts';
import { Architect } from "./index.mts";

/**
 * Registry that does a simple instance comparison based on the constructor of a class.
 */
export class TypeRegistry<T> {
  public readonly data: {
    ctor: constructor<T>,
    instance: T
  }[] = [];

  /**
   * Requests an entry from the registry
   * @param token The constructor token to request
   */
  public resolve<TValue extends T>(token: constructor<TValue>): TValue {
    const value = this.data.find(v => v.ctor === token);
    if (value) return value.instance as TValue;

    const instance = new token();
    this.data.push({ ctor: token, instance: instance });
    return instance;
  };

  public resolveAll<TValue extends T>(tokens: constructor<TValue>[]): TValue[] {
    return tokens.map(this.resolve.bind(this));
  };
}

/**
 * Similar to {TypeRegistry}, but uses the `architect.glassway.net/class` metadata key.
 */
export class TokenRegistry<T> {
  public readonly data: Record<string, T> = {};

  /**
   * Registers an instance of T with the options provided.
   */
  public register(token: constructor<unknown>, instance: T, _context?: Partial<Context>) {
    const context = TokenRegistry.defaultContext(token, _context);
    const ident = TokenRegistry.ident(context);

    if (ident in this.data) {
      throw Error(`${ident} already exists in this Registry`);
    };

    this.data[ident] = instance;
  };

  /**
   * Requests an entry from the registry
   * @param token The constructor token to request
   * @param name Optional name of the object
   */
  public request(token: constructor<unknown>, _context?: Partial<Context>): T | undefined {
    const context = TokenRegistry.defaultContext(token, _context);
    const ident = TokenRegistry.ident(context);

    if (!(ident in this.data)) return undefined;
    return this.data[ident] as (T | undefined);
  };

  private static ident(context: Context): string {
    return `${context.name}-${objectHash(context)}`;
  };

  private static defaultContext(token: constructor<unknown>, context?: Partial<Context>): Context {
    if (!context) context = {};
    if (!context.name) {
      context.name = ReflectionUtilities.classToName(Reflect.getMetadata(Architect.CLASS_META_KEY, token));
    };

    return context as Context;
  };
};

