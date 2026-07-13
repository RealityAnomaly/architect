import {
  generate,
  isAPIMachineryID,
} from "../src/generate/openapi-generate/index.ts";
import { readInput } from "../src/generate/read-input/index.ts";
import { type OpenAPIV2 } from "openapi-types";
import { mapValues, omit } from "@es-toolkit/es-toolkit";
import { trimPrefix } from "../src/generate/string-util/index.ts";
import { fileURLToPath } from "node:url";

type Document = OpenAPIV2.Document<any>;

// The following version should match the latest version in `first-part/kubernetes-models/scripts/build.ts`.
const VERSION = "1.36.0";

async function fetchSpec(): Promise<Document> {
  return JSON.parse(
    await readInput(
      `https://raw.githubusercontent.com/kubernetes/kubernetes/refs/tags/v${VERSION}/api/openapi-spec/swagger.json`
    ),
  );
}

function pickAPIMachinerySpec(doc: Document): void {
  if (!doc.definitions) return;

  doc.definitions = Object.fromEntries(
    Object.entries(doc.definitions).filter(([key]) => isAPIMachineryID(key)),
  );
}

/**
 * Remove GVK info to prevent openapi-generate moving definition files based on
 * their GVKs.
 */
function omitGVK(doc: Document): void {
  if (!doc.definitions) return;

  doc.definitions = mapValues(doc.definitions, (def) =>
    omit(def, ["x-kubernetes-group-version-kind"]),
  );
}

export async function generateApimachinery() {
  const spec = await fetchSpec();

  pickAPIMachinerySpec(spec);
  omitGVK(spec);

  await generate({
    input: JSON.stringify(spec),
    outputPath: fileURLToPath(new URL("../src/apimachinery", import.meta.url)),
    rewriteDefinitionPath(path) {
      return trimPrefix(path, "apimachinery/pkg/");
    },
  });
}
