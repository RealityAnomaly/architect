import objectHash from 'object-hash';
import { Reflect } from '@dx/reflect';

import { Context } from '../../internal/index.mts';
import { constructor, ReflectionUtilities } from '../index.mts';
import { Architect } from '../../index.mts';

/**
 * Similar to {TypeRegistry}, but uses the `architect.glassway.net/class` metadata key.
 */
export class TokenRegistry<T> {
  public readonly data: Record<string, T> = {};

  private static ident(context: Context): string {
    return `${context.name}-${objectHash(context)}`;
  }

  private static defaultContext(
    token: constructor<unknown>,
    context?: Partial<Context>,
  ): Context {
    if (!context) context = {};
    if (!context.name) {
      context.name = ReflectionUtilities.classToName(
        Reflect.getMetadata(Architect.CLASS_META_KEY, token),
      );
    }

    return context as Context;
  }

  /**
   * Registers an instance of T with the options provided.
   */
  public register(
    token: constructor<unknown>,
    instance: T,
    _context?: Partial<Context>,
  ) {
    const context = TokenRegistry.defaultContext(token, _context);
    const ident = TokenRegistry.ident(context);

    if (ident in this.data) {
      throw Error(`${ident} already exists in this Registry`);
    }

    this.data[ident] = instance;
  }

  /**
   * Requests an entry from the registry
   * @param token The constructor token to request
   * @param _context Optional context of the object
   */
  public request(
    token: constructor<unknown>,
    _context?: Partial<Context>,
  ): T | undefined {
    const context = TokenRegistry.defaultContext(token, _context);
    const ident = TokenRegistry.ident(context);

    if (!(ident in this.data)) return undefined;
    return this.data[ident] as (T | undefined);
  }

  public length(): number {
    return Object.keys(this.data).length;
  }
}
