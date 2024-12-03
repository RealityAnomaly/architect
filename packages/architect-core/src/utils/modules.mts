import _ from 'lodash';

import Module from "node:module";
import { createRequire } from 'module';
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

  public static async collectClasses<T>(module: unknown, matcher: (clazz: constructor<T>) => boolean): Promise<T[]> {
    const result: T[] = [];

    if (_.isObject(module)) {
      for (const value of Object.values(module)) {
        result.push(...await this.collectClasses(value, matcher));
  
        if (!matcher(value)) continue;
        result.push(value);
      };
    };

    return result;
  };
}
