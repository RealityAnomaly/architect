import { Constructor } from './types.mts';

export class ModuleUtilities {
  // deno-lint-ignore no-explicit-any
  public static collectClasses<T>(
    module: any,
    matcher: (clazz: Constructor<T>) => boolean,
  ): Constructor<T>[] {
    const result: Constructor<T>[] = [];

    if (matcher(module)) {
      result.push(module);
    } else if (
      typeof module === "object" && module[Symbol.toStringTag] === "Module"
    ) {
      for (const value of Object.values(module)) {
        result.push(...this.collectClasses(value, matcher));
      }
    }

    return result;
  }
}
