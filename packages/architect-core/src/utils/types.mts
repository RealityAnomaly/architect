export const NAMED_SYMBOL = Symbol.for('architect.Named');

/**
 * Constructor type, ported from tsyringe
 */
export type constructor<T> = {
  new (...args: any[]): T;
};

export type Named = {
  readonly name?: string;
};

export type RecursiveRecord<T> = { [k: string | symbol | number]: T | RecursiveRecord<T> }

export function setNamed<T>(value: T) {
  Object.defineProperty(value, NAMED_SYMBOL, { value: true, enumerable: true });
};

export function isNamed(value: object): value is Named {
  return (typeof(value) === 'object' && NAMED_SYMBOL in value);
};

export class ReflectionUtilities {
  public static classToName(clazz: string): string {
    const split = clazz.split('/');
    return split.length === 2 ? split[1] : split[0];
  };  
};
