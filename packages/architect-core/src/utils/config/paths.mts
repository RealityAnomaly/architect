import * as toolkit from 'jsr:@es-toolkit/es-toolkit';

export type ValuePathKey = string | symbol | number;
export type ValuePath = ValuePathKey[];

export function isObjectDeepKeys(value: unknown): value is object {
  // TODO: this should NOT Include classes!!!
  if (typeof value !== 'object') return false;
  if (toolkit.isFunction(value)) return false;

  return true;
};

export function prettifyPath(path: ValuePath): string {
  let builder = '';
  path.forEach((p, i) => {
    if (typeof (p) === 'number') {
      builder += `[${p}]`;
    } else {
      if (i !== 0) builder += '.';
      builder += p.toString();
    };
  });

  return builder;
};

export class PathResultBuilder<T> {
  private value?: PathResultValue<T> = undefined;

  public set(path: ValuePath, value: T, force: boolean, weight: number) {
    this.value = this.merge(this.value, path, path, value, force, weight);
  };

  public resolve(): unknown {
    // strips weight/force metadata off our values
    function stripMeta(value: PathResultValue<T>): unknown {
      if (Array.isArray(value.value)) {
        return value.value.map(v => stripMeta(v));
      } else if (typeof value.value === 'object') {
        const result = {} as Record<string, unknown>;
        const obj = value.value as Record<string | symbol, PathResultValue<T>>;

        for (const [k, v] of Object.entries(obj)) {
          result[k] = stripMeta(v as PathResultValue<T>);
        };

        return result;
      } else {
        return value.value;
      };
    };

    if (this.value === undefined) return undefined;
    return stripMeta(this.value);
  };

  private mergeValues<T>(
    target: PathResultValue<T> | undefined,
    path: ValuePath, // not used, but useful for debugging
    value: T,
    force: boolean,
    weight: number,
  ): PathResultValue<T> {
    if (target === undefined || force) {
      target = { force: force, weight: weight };
    } else if (typeof value !== 'object' && weight <= target.weight) {
      throw new Error(`conflict: two atomic values with weight ${weight} at path ${prettifyPath(path)}`);
    };

    let result = target.value;

    if (Array.isArray(value)) {
      if (!Array.isArray(result)) {
        result = [];
      };

      const array = result as PathResultValue<T>[];
      value.forEach(v => array.push(this.mergeValues(undefined, path.concat(-1), v, force, weight)));
    } else if (typeof value === 'object') {
      if (typeof result !== 'object' || Array.isArray(result)) {
        result = {};
      };

      const obj = result as Record<string | symbol, PathResultValue<T>>;
      for (const [k, v] of Object.entries(value as object)) {
        obj[k] = this.mergeValues(obj[k], path.concat(k), v, force, weight);
      };
    } else {
      result = value;
    };

    return { force: force, value: result, weight: weight };
  };

  /**
   * set the value at target identified by path to the specified value
   */
  private merge<T>(target: PathResultValue<T> | undefined, path: ValuePath, fullPath: ValuePath, value: T, force: boolean, weight: number): PathResultValue<T> {
    if (path.length === 0) {
      return this.mergeValues(target, fullPath, value, force, weight);
    };

    // generate the value to be merged
    const curr = path[0];
    const next = path.slice(1);

    if (target === undefined) {
      target = { force: force, weight: weight };
    };

    // do we have an array key or a normal key?
    if (typeof(curr) === 'number') {
      if (!Array.isArray(target.value)) target.value = [];
      const array = target.value as PathResultValue<T>[];
      array.push(this.merge(undefined, next, fullPath, value, force, weight));
    } else {
      if (typeof target.value !== 'object') target.value = {};
      const obj = target.value as Record<string | symbol, PathResultValue<T>>;
      obj[curr] = this.merge(obj[curr], next, fullPath, value, force, weight);
    };

    return target;
  };
};

export interface PathResultValue<T> {
  force: boolean;
  value?: T | PathResultValue<T>[] | Record<string | symbol, PathResultValue<T>>;
  weight: number;
};
