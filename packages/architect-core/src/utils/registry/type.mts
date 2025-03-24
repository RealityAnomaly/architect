import { Constructor } from '../types.mts';

/**
 * Registry that does a simple instance comparison based on the constructor of a class.
 */
export class TypeRegistry<T> {
  public readonly data: {
    ctor: Constructor<T>;
    instance: T;
  }[] = [];

  protected readonly args: unknown[];

  constructor(...args: unknown[]) {
    this.args = args;
  }

  /**
   * Requests an entry from the registry
   * @param token The constructor token to request
   */
  public resolve<TValue extends T>(token: Constructor<TValue>): TValue {
    const value = this.data.find((v) => v.ctor === token);
    if (value) return value.instance as TValue;

    const instance = new token(...this.args);
    this.data.push({ ctor: token, instance: instance });
    return instance;
  }

  public resolveAll<TValue extends T>(tokens: Constructor<TValue>[]): TValue[] {
    return tokens.map(this.resolve.bind(this));
  }
}
