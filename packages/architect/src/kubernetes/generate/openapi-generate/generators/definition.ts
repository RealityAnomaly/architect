import {
  collectRefs,
  generateImports,
  generateInterface,
  Generator,
  getAPIVersion,
  Import,
  Schema,
} from "../../generate/index.ts";
import {
  formatComment,
  trimPrefix,
  trimSuffix,
} from "../../string-util/index.ts";
import { mapValues, omit } from "@es-toolkit/es-toolkit";
import { Context } from "../context.ts";
import {
  getClassName,
  getInterfaceName,
  getShortClassName,
  getShortInterfaceName,
  trimRefPrefix,
} from "../string.ts";
import {
  getRelativePath,
  getSchemaPath,
  isAPIMachineryID,
  trimExtname,
} from "../utils.ts";
import * as nodePath from "node:path";

function omitTypeMetaDescription(schema: Schema): Schema {
  const { properties, ...rest } = schema;
  if (!properties) return schema;

  return {
    ...rest,
    properties: mapValues(properties, (prop, key) => {
      if (key === "apiVersion" || key === "kind") {
        return omit(prop, ["description"]);
      }

      return prop;
    }),
  };
}

export default function ({
                           getDefinitionPath,
                           externalAPIMachinery,
                         }: Context): Generator {
  return async (definitions, root) => {
    return definitions.map((def) => {
      const interfaceName = getInterfaceName(def.schemaId);
      const className = getClassName(def.schemaId);
      const shortInterfaceName = getShortInterfaceName(def.schemaId);
      const shortClassName = getShortClassName(def.schemaId);
      const refs = collectRefs(def.schema)
        .map(trimRefPrefix)
        .filter((ref) => ref !== def.schemaId);
      const imports: Import[] = [];
      const gvk = def.gvk?.[0];
      const typing = generateInterface(
        gvk ? omitTypeMetaDescription(def.schema) : def.schema,
        {
          getRefType,
          includeDescription: true,
        },
      );
      const path = getDefinitionPath(def.schemaId);
      const schemaPath = getRelativePath(path, getSchemaPath(def.schemaId));
      let content = "";
      let comment = "";

      function getRefType(ref: string): string {
        const id = trimRefPrefix(ref);

        // Return the shortInterfaceName if it is a self reference.
        if (id === def.schemaId) {
          return shortInterfaceName;
        }

        return getInterfaceName(id);
      }

      if (def.schema.description) {
        comment = formatComment(def.schema.description, {
          deprecated: /deprecated/i.test(def.schema.description),
        });
      }

      for (const ref of refs) {
        const name = getInterfaceName(ref);

        if (isAPIMachineryID(ref) && !isAPIMachineryID(def.schemaId)) {
          if (externalAPIMachinery) {
            imports.push({
              name,
              path: `@glassway/architect/kubernetes/apimachinery/${trimPrefix(
                ref,
                "io.k8s.apimachinery.pkg.",
              )
                .split(".")
                .join("/")}`,
            });
          } else {
            imports.push({
              name,
              path:
                getRelativePath(path, nodePath.join("../apimachinery", trimExtname(getDefinitionPath(trimPrefix(ref, "io.k8s.apimachinery.pkg."))))) +
                ".ts",
            });
          }
        } else {
          imports.push({
            name,
            path:
              getRelativePath(path, trimExtname(getDefinitionPath(ref))) +
              ".ts",
          });
        }
      }

      if (def.schema.type === "object") {
        let classContent = generateInterface(def.schema, {
          getRefType,
          getFieldType(key) {
            // Rewrite types of apiVersion/kind to the interface type.
            switch (key[0]) {
              case "apiVersion":
              case "kind":
                return `${shortInterfaceName}["${key[0]}"]`;
            }

            return undefined;
          },
        });

        imports.push({
          name: "ModelData",
          path: "@glassway/architect/kubernetes/types",
        });

        if (gvk) {
          imports.push({
            name: "TypeMeta",
            path: "@glassway/architect/kubernetes/types",
          });

          imports.push({
            name: "createTypeMetaGuard",
            path: "@glassway/architect/kubernetes/types",
          });

          classContent = `${trimSuffix(classContent, "}")}
static apiVersion: ${shortInterfaceName}["apiVersion"] = "${getAPIVersion(
            gvk,
          )}";
static kind: ${shortInterfaceName}["kind"] = "${gvk.kind}";
static is = createTypeMetaGuard<${shortInterfaceName}>(${shortClassName});

constructor(data?: ModelData<${shortInterfaceName}>) {
  super();

  this.setDefinedProps({
    apiVersion: ${shortClassName}.apiVersion,
    kind: ${shortClassName}.kind,
    ...data
  } as ${shortInterfaceName});
}
}`;
        } else {
          classContent = `${trimSuffix(classContent, "}")}
constructor(data?: ModelData<${shortInterfaceName}>) {
  super();

  this.setDefinedProps(data);
}
}`;
        }

        imports.push({ name: "Model", path: "@glassway/architect/kubernetes/types" });
        imports.push({
          name: "setValidateFunc",
          path: "@glassway/architect/kubernetes/types",
        });
        imports.push({
          name: "ValidateFunc",
          path: "@glassway/architect/kubernetes/validate",
        });
        imports.push({ name: "validate", path: schemaPath });

        content += `
${comment}export interface ${shortInterfaceName}${
          gvk ? " extends TypeMeta " : " "
        }${typing}

${comment}export class ${shortClassName} extends Model<${shortInterfaceName}> implements ${shortInterfaceName} ${classContent}

setValidateFunc(${shortClassName}, validate as ValidateFunc<${shortInterfaceName}>);
`;
      } else {
        content += `
${comment}export type ${shortInterfaceName} = ${typing};

export type ${shortClassName} = ${shortInterfaceName};
`;
      }

      content += `
export type {
  ${shortInterfaceName} as ${interfaceName},
  ${shortClassName} as ${className}
};
`;

      if (imports.length) {
        content = generateImports(imports) + "\n" + content;
      }

      return {
        path,
        content,
      };
    });
  };
}
