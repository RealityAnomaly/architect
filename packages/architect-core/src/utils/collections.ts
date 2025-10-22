import * as toolkit from '@es-toolkit/es-toolkit';

export class CollectionUtilities {
  /**
   * Transforms `input` into an array, or leave it as-is if `input` is already an array.
   *
   * @public
   */
  public static toArray<T>(input: T | T[]): T[] {
    return Array.isArray(input) ? input : [input];
  }

  public static arrayStartsWith<T>(array: T[], prefix: T[]): boolean {
    return toolkit.isEqual(array.slice(0, prefix.length), prefix);
  }

  /**
   * Recursively merges the following objects, properly handling array values
   */
  public static recursiveMerge<T extends object>(object: T, source: T): T {
    // if the types don't match, just return the source
    if (object === undefined || object === null) return source;
    if (source === undefined || source === null) return object;
    if (object.constructor !== source.constructor) return source;

    if (Array.isArray(object)) {
      return object.concat(source) as T;
    }

    function customizer(objValue: object, srcValue: object) {
      if (Array.isArray(objValue)) {
        return objValue.concat(srcValue);
      }

      return undefined;
    }

    return toolkit.mergeWith(object, source, customizer);
  }

  /**
   * Recursively merges an array of values
   */
  public static recursiveMergeThese<T extends object>(source: T[]): T {
    return source.reduce<T>((prev: T, cur: T) => {
      if (prev === undefined) return cur;
      return this.recursiveMerge(prev, cur);
    }, undefined as unknown as T);
  }

  public static async asyncFilter<T>(
    arr: T[],
    predicate: (value: T) => Promise<boolean>,
  ): Promise<T[]> {
    const results = await Promise.all(arr.map(predicate));
    return arr.filter((_v, index) => results[index]);
  }
}
