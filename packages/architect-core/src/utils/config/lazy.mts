import * as toolkit from "@es-toolkit/es-toolkit";
import { arrayStartsWith, isEmptyObject, recursiveMerge } from "../objects.mts";
import {
  isObjectDeepKeys,
  PathResultBuilder,
  ValuePath,
  ValuePathKey,
} from "./paths.mts";
import { DeepPartial, Resolver, Value } from "./value.mts";
import { RecursiveRecord } from "../types.mts";

const LAZY_PROXY_SYMBOL = Symbol.for("architect.LazyProxy");
const MAX_EVALUATION_DEPTH = 100;

export interface _LazyProxy<T> {
  /**
   * The root of the Lazy tree
   */
  $__root__: Lazy<T>;

  /**
   * The path to the current value in the tree
   */
  $__path__: ValuePath;

  /**
   * The result of the last evaluation attempt
   */
  $__cachedResult__: T;

  /**
   * The fallback value to use if the value is undefined
   */
  $__fallback__?: DeepPartial<T>;

  /**
   * Resolves the entire configuration tree and returns the result
   * @param fallback Default value to be merged if the value does not exist
   * @param depth The current evaluation depth
   * @returns The result of the evaluation
   */
  $resolve(fallback?: Partial<T>, depth?: number): Promise<T>;

  /**
   * Transforms this proxy using the specified function and wraps it in a Resolver<T>
   */
  $transform<TResult>(func: (value: T) => TResult): Resolver<TResult>;

  /**
   * Sets the value of this object recursively, from a value or another Lazy<U>
   * @param value The value to set the object to, or a Lazy container with a value
   * @param weight The weight to assign to child objects
   * @param force Override the entire value instead of merging it in the case of objects or arrays.
   * @param condition Sets the value based on a condition. If the condition evaluates to false, the value will be skipped.
   * Note that conditions that reference the value of this object will cause infinite recursion.
   */
  $set(
    value: DeepLazySpec<DeepPartial<T>>,
    weight?: number,
    force?: boolean,
    condition?: Condition,
  ): void;

  /**
   * Sets the fallback value for this object
   */
  $setFallback(value: DeepPartial<T>): void;
}

class LazyProxy {
  public static from<T>(
    root: Lazy<unknown>,
    path: ValuePath = [],
  ): LazyAuto<T> {
    const internal = {
      $__root__: root,
      $__path__: path,
      $__cachedResult__: undefined,

      $resolve: async (fallback?: Partial<T>, depth: number = 0) => {
        depth += 1;
        if (depth > MAX_EVALUATION_DEPTH) {
          throw new Error(
            `Maximum evaluation depth of ${MAX_EVALUATION_DEPTH} exceeded`,
          );
        }

        // use the persistent fallback value, if present
        if (fallback === undefined && internal.$__fallback__ !== undefined) {
          fallback = internal.$__fallback__;
        }

        let result: unknown;
        try {
          result = await root.get(path, depth);
          if (fallback !== undefined) {
            if (result !== undefined && isObjectDeepKeys(result)) {
              // we can only do this safely if we have an object
              result = recursiveMerge(fallback, result);
            } else {
              result = fallback;
            }
          }
        } catch (error) {
          if (error instanceof TypeError && fallback !== undefined) {
            result = fallback;
          } else {
            throw error;
          }
        }

        internal.$__cachedResult__ = result as T;
        return result;
      },

      $transform<TResult>(func: (value: T) => TResult): Resolver<TResult> {
        return (async () => {
          const result = await internal.$resolve();
          return func(result);
        });
      },

      $set(value, weight?, force?, condition?) {
        root.set(path, value, weight, force, condition);
      },

      $setFallback(value) {
        internal.$__fallback__ = value;
      },
    } as _LazyProxy<T>;

    Object.defineProperty(internal, LAZY_PROXY_SYMBOL, {
      value: true,
      enumerable: true,
    });

    function accessor(key: ValuePathKey) {
      const _path = internal.$__path__.concat(key.toString());
      return LazyProxy.from(internal.$__root__, _path);
    }

    return new Proxy(internal, {
      defineProperty(_target, _property, _attributes) {
        throw new Error(
          "cannot mutate properties of lazy object with dot notation, use the .$set() function instead",
        );
      },

      deleteProperty(_target, _p) {
        throw new Error(
          "cannot mutate properties of lazy object with dot notation, use the .$set() function instead",
        );
      },

      get(target, p, receiver) {
        if (Reflect.has(target, p)) {
          return Reflect.get(target, p, receiver);
        }

        return accessor(p);
      },
    }) as LazyAuto<T>;
  }

  public static is<T>(value: unknown): value is _LazyProxy<T> {
    return (value !== null && typeof value === "object" &&
      Object.hasOwn(value, LAZY_PROXY_SYMBOL));
  }
}

interface LazyValue<T> {
  cache?: T;
  condition?: Condition;
  force: boolean;
  path: ValuePath;
  value: Value<T>;
  weight: number;
}

export class Lazy<T> {
  private readonly values: LazyValue<T>[] = [];

  private constructor(value: Value<T>) {
    this.set([], value);
  }

  public static from<T>(value: Value<T>): LazyAuto<T> {
    const instance = new Lazy(value);
    return LazyProxy.from(instance);
  }

  /**
   * Resolves a condition to a boolean value
   */
  public static async resolveCondition(
    condition: Condition,
    depth: number = 0,
  ): Promise<boolean> {
    if (LazyProxy.is(condition)) {
      return condition.$resolve(undefined, depth);
    }

    const resolved = await condition();
    if (LazyProxy.is(resolved)) {
      return resolved.$resolve(undefined, depth);
    } else {
      return resolved;
    }
  }

  /**
   * Combines multiple conditions together into a single condition
   */
  public static combineConditions(...conditions: Condition[]): Condition {
    return async () => {
      return (await Promise.all(
        conditions.map((c) => Lazy.resolveCondition(c)),
      )).every((c) => c);
    };
  }

  /**
   * Gets the value at the specified ValuePath.
   */
  public async get<TValue>(path: ValuePath, depth: number): Promise<TValue> {
    const values = this.matchValues(path);
    if (values.length <= 0) {
      throw new TypeError(
        `no value found at path \`${path.join(".")}\` at depth ${depth}`,
      );
    }

    const builder = new PathResultBuilder();

    for (const value of values) {
      if (value.condition) {
        if (!(await Lazy.resolveCondition(value.condition, depth))) continue;
      }

      let temp: T;
      if (typeof value.value === "function") {
        temp = await (value.value as Resolver<T>)();
      } else {
        temp = value.value;
      }

      const resolved = toolkit.cloneDeep(
        LazyProxy.is(temp) ? await temp.$resolve(undefined, depth) : temp,
      );
      builder.set(value.path, resolved, value.force, value.weight);
    }

    // traverse into the result to get the final value
    const result = builder.resolve() as TValue;
    if (result === undefined) return result;

    let curr = result as RecursiveRecord<TValue>;
    for (const key of path) {
      if (curr === undefined) {
        throw new TypeError(
          `attempted to read value of undefined at ${path.join(".")}`,
        );
      }

      curr = curr[key] as RecursiveRecord<TValue>;
    }

    return curr as TValue;
  }

  /**
   * Sets the value at the specified ValuePath.
   */
  public set(
    path: ValuePath,
    _value: Value<T>,
    weight: number = 0,
    force: boolean = false,
    condition?: Condition,
  ) {
    // if the value is a proxy, we need to create a resolver for it
    const property = LazyProxy.is(_value) ? async () => _value : _value;

    // do not collapse object values if we're forcing the value, treat it as atomic
    if (!isObjectDeepKeys(property) || isEmptyObject(property) || force) {
      this.values.push({
        condition: condition,
        force: force,
        path: path,
        value: property,
        weight: weight,
      });
    } else if (Array.isArray(property)) {
      for (let i = 0; i < property.length; i++) {
        this.set(path.concat(-1), property[i], weight, force, condition);
      }
    } else {
      for (const [k, v] of Object.entries(property)) {
        this.set(path.concat(k), v, weight, force, condition);
      }
    }
  }

  private matchValues(path: ValuePath): LazyValue<T>[] {
    let values: LazyValue<T>[] = [];
    {
      const curr = toolkit.clone(path);
      while (true) {
        values.push(...this.values.filter(
          (v) => toolkit.isEqual(v.path, curr),
        ));

        if (curr.length <= 0) break;
        curr.pop();
      }
    }

    // match children and push them to the list
    values.push(...this.values.filter(
      (v) =>
        v.path.length > 0 && arrayStartsWith(v.path, path) &&
        !toolkit.isEqual(v.path, path),
    ));

    // sort the values by weight
    values = toolkit.sortBy(values, ["weight"]);
    return values;
  }
}

export type Condition =
  | _LazyProxy<boolean>
  | (() => Promise<boolean | LazyAuto<boolean>>);

type LazyRecord<T> = {
  [P in keyof T]: LazyAuto<T[P]>;
};

export type LazyObject<T> = T extends (infer U)[] ? LazyAuto<Required<U>>[]
  : LazyRecord<Required<T>>;
export type LazyAuto<T> = T extends object ? (LazyObject<T> & _LazyProxy<T>)
  : _LazyProxy<T>;

export type LazySpec<T> = T | Resolver<T> | _LazyProxy<T>;
type DeepLazySpecArray<T> = DeepLazySpec<T>[];
type DeepLazySpecObject<T> = {
  [P in keyof T]: DeepLazySpec<T[P]>;
};
export type DeepLazySpec<T> = T extends undefined ? T
  : T extends (infer U)[] ? DeepLazySpecArray<U> | LazySpec<T>
  : T extends object ? DeepLazySpecObject<T> | LazySpec<T>
  : LazySpec<T>;
