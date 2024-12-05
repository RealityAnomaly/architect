import Module from "node:module";
import { createRequire } from 'node:module';
import { constructor } from "./types.mts";

export interface ModulePackageEntry {
  root: string;
  import: string;
}

export class ModuleUtilities {
  public static async resolveModulePath(name: string, map: Record<string, ModulePackageEntry>, current: string | URL): Promise<string> {
    if (Object.hasOwn(map, name)) {
      return map[name].root;
    } else {
      const require = createRequire(current);
      return require.resolve(name);
    };
  };

  public static async importWithMap(name: string, map: Record<string, ModulePackageEntry>): Promise<Module> {
    if (Object.hasOwn(map, name)) {
      return await import(map[name].import);
    } else {
      return await import(name);
    };
  };

  public static async collectClasses<T>(module: any, matcher: (clazz: constructor<T>) => boolean): Promise<constructor<T>[]> {
    const result: constructor<T>[] = [];

    if (matcher(module)) {
      result.push(module)
    } else if (typeof module === 'object' && module[Symbol.toStringTag] === 'Module') {
      for (const value of Object.values(module)) {
        result.push(...await this.collectClasses(value, matcher));
      };
    };

    return result;
  };
}
