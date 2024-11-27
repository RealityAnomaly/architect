import Module from "node:module";
import { createRequire } from 'module';

export interface ModulePackageEntry {
  root: string;
  import: string;
}

export class ModuleUtilities {
  public static async importWithMap(name: string, map: Record<string, ModulePackageEntry>, current: string | URL): Promise<[string, Module]> {
    if (Object.hasOwn(map, name)) {
      const entry = map[name];
      return [entry.root, await import(entry.import)];
    } else {
      const require = createRequire(current);
      return [require.resolve(name), await import(name)];
    };
  };
}
