import {
  type Definition,
  generateImports,
  generateInterface,
  type Generator,
  getAPIVersion,
  type GroupVersionKind,
  type Import,
  type OutputFile,
} from "../../generate/index.ts";
import { formatComment, trimSuffix } from "../../string-util/index.ts";
import { getRelativePath, getSchemaPath } from "../utils.ts";

function getFieldType(key: string[]): string | undefined {
  if (key.length === 1 && key[0] === "metadata") {
    return "IObjectMeta";
  }

  return undefined;
}

function generateDefinition(
  gvk: GroupVersionKind,
  def: Definition,
): OutputFile {
  const apiVersion = getAPIVersion(gvk);
  const className = gvk.kind;
  const interfaceName = `I${className}`;
  const imports: Import[] = [];
  const interfaceContent = generateInterface(def.schema, {
    includeDescription: true,
    getFieldType,
  });
  const path = `${apiVersion}/${className}.ts`;
  let classContent = generateInterface(def.schema, {
    getFieldType(key) {
      if (key.length === 1) {
        return `${interfaceName}${JSON.stringify(key)}`;
      }

      return undefined;
    },
  });
  let comment = "";

  classContent =
    trimSuffix(classContent, "}") +
    `
static apiVersion: ${interfaceName}["apiVersion"] = ${JSON.stringify(
      apiVersion,
    )};
static kind: ${interfaceName}["kind"] = ${JSON.stringify(gvk.kind)};
static is = createTypeMetaGuard<${interfaceName}>(${className});

constructor(data?: ModelData<${interfaceName}>) {
  super();

  this.setDefinedProps({
    apiVersion: ${className}.apiVersion,
    kind: ${className}.kind,
    ...data
  } as ${interfaceName});
}
}
`;

  imports.push({
    name: "IObjectMeta",
    path: "@glassway/architect/kubernetes/apimachinery/apis/meta/v1/ObjectMeta",
  });

  imports.push({
    name: "Model",
    path: "@glassway/architect/kubernetes/types/model",
  });

  imports.push({
    name: "ModelData",
    path: "@glassway/architect/kubernetes/types/model",
  });

  imports.push({
    name: "setValidateFunc",
    path: "@glassway/architect/kubernetes/types/model",
  });

  imports.push({
    name: "TypeMetaGuard",
    path: "@glassway/architect/kubernetes/types/meta",
  });

  imports.push({
    name: "createTypeMetaGuard",
    path: "@glassway/architect/kubernetes/types/meta",
  });

  imports.push({
    name: "ValidateFunc",
    path: "@glassway/architect/kubernetes/validate",
  });

  imports.push({
    name: "validate",
    path: getRelativePath(path, getSchemaPath(def.schemaId)),
  });

  if (def.schema.description) {
    comment = formatComment(def.schema.description, {
      deprecated: /^deprecated/i.test(def.schema.description),
    });
  }

  return {
    path,
    content: `${generateImports(imports)}

${comment}export interface ${interfaceName} ${interfaceContent}

${comment}export class ${className} extends Model<${interfaceName}> implements ${interfaceName} ${classContent}

setValidateFunc(${className}, validate as ValidateFunc<${interfaceName}>);
`,
  };
}

const generateDefinitions: Generator = async (definitions) => {
  const output: OutputFile[] = [];

  for (const def of definitions) {
    const gvks = def.gvk;

    if (gvks && gvks.length) {
      output.push(generateDefinition(gvks[0], def));
    }
  }

  return output;
};

export default generateDefinitions;
