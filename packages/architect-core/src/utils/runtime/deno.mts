import * as path from "jsr:@std/path";
import { Logger } from "winston";

// Barebones represenation of deno.json, just the properties we need to use
export interface DenoConfigFile {
  exports?: Record<string, string>;
  workspace?: string[];
  patch?: string[];
  name?: string;
  version?: string;
};

export class DenoUtilities {
  /**
   * Resolves an import map from an abstract tree of Deno packages (taking into account patch)
   */
  public static async resolveImportMap(root: string, logger?: Logger): Promise<Record<string, string>> {
    let result: Record<string, string> = {};
    let config: DenoConfigFile;

    try {
      const text = await Deno.readTextFile(path.join(root, 'deno.json'));
      config = JSON.parse(text);
    } catch (exception) {
      logger?.warn(`failed to load deno.json for import map resolution for module at ${root}: ${exception}`);
      return result;
    };

    if (!config.name) {
      logger?.warn(`failed to load deno.json for import map resolution for module at ${root}: no module name defined`);
      return result;
    };

    for (const [k, v] of Object.entries(config.exports || {})) {
      const joined = path.join(config.name, k);
      result[joined] = path.resolve(path.join(root, v));
    };

    for (const patch of config.patch || []) {
      const joined = path.resolve(path.join(root, patch));
      result = { ...result, ...await this.resolveImportMap(joined, logger) };
    };

    return result;
  };
};
