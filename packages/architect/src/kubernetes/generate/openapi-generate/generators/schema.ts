import {
  collectRefs,
  type Definition,
  type Generator,
  type OutputFile,
  type Schema,
  transformSchema as baseTransformSchema,
  compileSchemas,
} from "../../generate/index.ts";
import { trimSuffix } from "../../string-util/index.ts";
import { type Context } from "../context.ts";
import { getClassName, trimRefPrefix } from "../string.ts";
import { getRelativePath, getSchemaPath, isAPIMachineryID } from "../utils.ts";
import path from 'node:path';
import def from 'npm:ajv-i18n@4.2.0';

function replaceRef(schema: Schema): Schema {
  if (typeof schema.$ref === "string") {
    const ref = trimRefPrefix(schema.$ref);
    return { ...schema, $ref: `${ref}#` };
  }

  return schema;
}

function transformSchema(def: Definition): Schema {
  let schema: Schema;

  // Rewrite schemas for some special types
  switch (def.schemaId) {
    case "io.k8s.apimachinery.pkg.util.intstr.IntOrString":
      schema = {
        oneOf: [{ type: "string" }, { type: "integer", format: "int32" }],
      };
      break;

    case "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.JSON":
    case "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.JSON":
      schema = {};
      break;

    default:
      schema = baseTransformSchema(def.schema, [replaceRef]);
  }

  return { ...schema, $id: def.schemaId };
}

export default function ({ externalAPIMachinery }: Context): Generator {
  function getSchemaImportPath(definition: Definition, ref: string, root: string): string {
    if (isAPIMachineryID(ref) && !isAPIMachineryID(definition.schemaId)) {
      if (externalAPIMachinery) {
        return `@glassway/architect/kubernetes/apimachinery/${trimSuffix(
          getSchemaPath(ref),
          ".js",
        )}`;
      } else {
        return `./../../apimachinery/_schemas/${getClassName(ref)}.js`;
      }
    } else {
      return `./${getClassName(ref)}.js`;
    }
  }

  return async (definitions, root) => {
    const files: OutputFile[] = [];
    const tasks = definitions.map((def) => {
      const schema = transformSchema(def);
      const refIds = collectRefs(def.schema)
        .map(trimRefPrefix)
        .filter((ref) => ref !== def.schemaId);
      const refPaths = Object.fromEntries(
        refIds.map((ref) => [ref, getSchemaImportPath(def, ref, root)]),
      );

      return { schema, refs: refPaths };
    });
    const schemas = await compileSchemas(tasks);

    for (let i = 0; i < definitions.length; i++) {
      const def = definitions[i];
      const path = getSchemaPath(def.schemaId);

      files.push(
        {
          path,
          content: schemas[i],
        },
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
}
