import { camelCase } from "../../string-util/index.ts";
import { getShortClassName } from "../string.ts";
import { posix } from "node:path";
import {
  type Generator,
  getAPIVersion,
  type OutputFile,
} from "../../generate/index.ts";
import { Context } from "../context.ts";
import { getRelativePath } from "../utils.ts";

function getIndexPath(key: string): string {
  return [key, "index.ts"].filter(Boolean).join("/");
}

export default function ({ getDefinitionPath }: Context): Generator {
  return async (definitions, root) => {
    const kindPathMap = new Map<string, readonly string[]>();
    const indexPathMap = new Map<string, readonly string[]>();
    const output: OutputFile[] = [];

    // Build the map of (definition folder, array of kinds)
    for (const def of definitions) {
      const defPath = getDefinitionPath(def.schemaId);
      const dir = posix.dirname(defPath);
      const kind = getShortClassName(def.schemaId);
      const values = kindPathMap.get(dir) ?? [];
      const gvks = def.gvk;

      if (!values.includes(kind)) {
        kindPathMap.set(dir, [...values, kind]);
      }

      // Some definitions have multiple GVKs. Here we map the extra GVKs to the
      // path of the first GVK.
      if (gvks && gvks.length > 1) {
        for (let i = 1; i < gvks.length; i++) {
          const gvk = gvks[i];
          const aliasPath = `${getAPIVersion(gvk)}/${gvk.kind}.ts`;

          output.push({
            path: aliasPath,
            content: `export * from "${getRelativePath(aliasPath, defPath)}/index.ts";`,
          });
        }
      }
    }

    // Build the map of (folder, alias folders)
    for (const [key] of kindPathMap) {
      const keys = key.split("/");

      for (let i = 0; i < keys.length; i++) {
        const path = keys.slice(0, i).join("/");
        const values = indexPathMap.get(path) ?? [];

        if (!values.includes(keys[i])) {
          indexPathMap.set(path, [...values, keys[i]]);
        }
      }
    }

    for (const [key, values] of kindPathMap) {
      output.push({
        path: getIndexPath(key),
        content: values.map((v) => `export * from "./${v}.ts";`).join("\n"),
      });
    }

    for (const [key, values] of indexPathMap) {
      output.push({
        path: getIndexPath(key),
        content: values
          .map((v) => {
            const exportedName = camelCase(v, ".-");

            return `export * as ${exportedName} from "./${v}/index.ts";`;
          })
          .join("\n"),
      });
    }

    return output;
  };
}
