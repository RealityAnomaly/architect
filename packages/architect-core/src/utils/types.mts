import * as toolkit from '@es-toolkit/es-toolkit';

/**
 * Constructor type, ported from tsyringe
 */
export type Constructor<T> = {
  // deno-lint-ignore no-explicit-any
  new (...args: any[]): T;
};

export type RecursiveRecord<T> = {
  [k: string | symbol | number]: T | RecursiveRecord<T>;
};

export class TypeUtilities {
  public static isObject<T>(
    x: T | undefined | null | boolean | string | symbol | number,
  ): x is T {
    return typeof x === 'object' ? x !== null : typeof x === 'function';
  }

  /**
   * Returns true when type of `value` is `object` and is not `null`, `undefined` or
   * an array.
   *
   * @public
   */
  public static isRecord(
    value: unknown,
  ): value is Record<string | symbol, unknown> {
    return value != null && typeof value === 'object' && !Array.isArray(value);
  }

  /**
   * Tests whether a value is not null or undefined
   */
  public static notEmpty<TValue>(
    value: TValue | null | undefined,
  ): value is TValue {
    return !(value === null || value === undefined);
  }

  /**
   * Returns whether the specified object is either an empty object or an empty array
   */
  public static isEmptyObject(obj: object): boolean {
    if (!this.notEmpty(obj)) return true;
    if (Array.isArray(obj)) return obj.length === 0;
    return Object.keys(obj).length === 0;
  }

  public static isObjectDeepKeys(value: unknown): value is object {
    // TODO: this should NOT Include classes!!!
    if (typeof value !== "object") return false;
    return !toolkit.isFunction(value);
  }
}

export class ReflectionUtilities {
  public static classToName(clazz: string): string {
    const split = clazz.split('/');
    return split.length === 2 ? split[1] : split[0];
  }
}
