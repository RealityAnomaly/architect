import {
  type Generator,
  transformSchema,
  compileSchemas,
  type OutputFile,
} from "../../generate/index.ts";
import { getSchemaPath } from "../utils.ts";
import { trimSuffix } from "../../string-util/index.ts";
import { getClassName } from '../../openapi-generate/string.ts';

const generateSchemas: Generator = async (definitions) => {
  const files: OutputFile[] = [];
  const tasks = definitions.map((def) => ({
    schema: { ...transformSchema(def.schema), $id: def.schemaId },
    refs: {
      "io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta":
        "@glassway/kubernetes-models/apimachinery/_schemas/ObjectMeta",
    },
  }));
  const schemas = await compileSchemas(tasks);

  for (let i = 0; i < definitions.length; i++) {
    const def = definitions[i];
    const path = getSchemaPath(def.schemaId);

    files.push(
      {
        path,
        content: `/* @ts-self-types="./${getClassName(def.schemaId)}.d.ts" */\n` + schemas[i],
      },
      // TODO: Move this to @kubernetes-models/generate
      {
        path: trimSuffix(path, ".js") + ".d.ts",
        content: `export function validate(data: unknown): boolean;`,
      },
    );
  }

  files.push({
    path: "_schemas/index.ts",
    content: definitions.map((def) => `export * as ${getClassName(def.schemaId)} from "./${getClassName(def.schemaId)}.js"`).join("\n")
  });

  return files;
};

export default generateSchemas;
