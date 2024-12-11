import { constructor } from "./types.mts";

export interface ModulePackageEntry {
  root: string;
  import: string;
}

export class ModuleUtilities {
  public static collectClasses<T>(module: any, matcher: (clazz: constructor<T>) => boolean): constructor<T>[] {
    const result: constructor<T>[] = [];

    if (matcher(module)) {
      result.push(module)
    } else if (typeof module === 'object' && module[Symbol.toStringTag] === 'Module') {
      for (const value of Object.values(module)) {
        result.push(...this.collectClasses(value, matcher));
      };
    };

    return result;
  };
}
