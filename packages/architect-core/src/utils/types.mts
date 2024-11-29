export const NAMED_SYMBOL = Symbol.for('vertex.architect.Named');

/**
 * Constructor type, ported from tsyringe
 */
export type constructor<T> = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  new (...args: any[]): T;
};

export type Named = {
  readonly name?: string;
};

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
