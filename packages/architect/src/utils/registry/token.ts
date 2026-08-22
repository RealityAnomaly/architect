// SPDX-FileCopyrightText: 2026 Vertex X7-53
//
// SPDX-License-Identifier: GPL-3.0-or-later

import { Constructor, Context, ContextUtils } from '../index.ts';

/**
 * Similar to {TypeRegistry}, but uses the `architect.glassway.net/class` metadata key.
 */
export class TokenRegistry<T> {
  public readonly data: Record<string, T> = {};

  private static ident(context: Context): string {
    //return `${context.name}-${objectHash(context)}`;
    // Vertex: Component names now must be unique due to changes in the Kubernetes backend
    return context.name;
  }

  /**
   * Registers an instance of T with the options provided.
   */
  public register(
    token: Constructor<T>,
    instance: T,
    _context?: Partial<Context>,
  ) {
    const context = ContextUtils.defaultContext(token, _context);
    const ident = TokenRegistry.ident(context);

    if (ident in this.data) {
      throw Error(`${ident} already exists in this ${this.constructor.name}`);
    }

    this.data[ident] = instance;
  }

  /**
   * Requests an entry from the registry
   * @param token The constructor token to request
   * @param _context Optional context of the object
   */
  public request(
    token: Constructor<unknown>,
    _context?: Partial<Context>,
  ): T | undefined {
    const context = ContextUtils.defaultContext(token, _context);
    const ident = TokenRegistry.ident(context);

    if (!(ident in this.data)) return undefined;
    return this.data[ident] as (T | undefined);
  }

  public length(): number {
    return Object.keys(this.data).length;
  }
}
