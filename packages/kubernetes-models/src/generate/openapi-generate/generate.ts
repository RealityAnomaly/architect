import {
  composeGenerators,
  type Definition,
  getAPIVersion,
  type GroupVersionKind,
  type Schema,
  writeOutputFiles,
} from "../generate/index.ts";
import generateDefinitions from "./generators/definition.ts";
import generateSchemas from "./generators/schema.ts";
import generateAliases from "./generators/alias.ts";
import { uniq } from "@es-toolkit/es-toolkit";
import { buildContext, type ContextOptions } from "./context.ts";

function load(input: string): Definition[] {
  const { definitions } = JSON.parse(input);

  return Object.keys(definitions)
    .filter((id) => !id.startsWith("io.k8s.kubernetes."))
    .map((id) => {
      let schema: Schema = definitions[id];

      switch (id) {
        case "io.k8s.apimachinery.pkg.api.resource.Quantity":
          schema = {
            oneOf: [{ type: "number" }, { type: "string", format: "quantity" }],
          };
      }

      const gvks: GroupVersionKind[] =
        schema["x-kubernetes-group-version-kind"] || [];

      if (!schema.type && !schema.$ref && !schema.oneOf) {
        schema.type = "object";
      }

      if (schema.type === "object" && gvks.length) {
        const { properties = {}, required = [] } = schema;

        schema.properties = {
          ...properties,
          apiVersion: {
            ...properties.apiVersion,
            type: "string",
            enum: uniq(gvks.map((x) => getAPIVersion(x))),
          },
          kind: {
            ...properties.kind,
            type: "string",
            enum: uniq(gvks.map((x) => x.kind)),
          },
        };

        schema.required = [...new Set([...required, "apiVersion", "kind"])];
      }

      return {
        gvk: gvks,
        schema,
        schemaId: id,
      };
    });
}

export interface GenerateOptions extends ContextOptions {
  input: string;
  outputPath: string;
}

export async function generate({
                                 input,
                                 outputPath,
                                 ...contextOptions
                               }: GenerateOptions): Promise<void> {
  const definitions = load(input);
  const ctx = buildContext(definitions, contextOptions);
  const generator = composeGenerators([
    generateDefinitions(ctx),
    generateSchemas(ctx),
    generateAliases(ctx),
  ]);
  const files = await generator(definitions, outputPath);

  await writeOutputFiles(outputPath, files);
}
