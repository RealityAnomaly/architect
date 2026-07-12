import {
  generate,
  mergeOpenAPISpecs,
  isAPIMachineryID,
} from "../generate/openapi-generate/index.ts";
import { readInput } from "../generate/read-input/index.ts";
import { OpenAPIV2 } from "openapi-types";
import { fileURLToPath } from "node:url";

type Document = OpenAPIV2.Document<any>;

/**
 * Older versions first. Add only versions with removed APIs and latest version.
 *
 * Removed APIs: https://kubernetes.io/docs/reference/using-api/deprecation-guide/
 * Available versions: https://github.com/tommy351/kubernetes-openapi-spec/tree/main/openapi
 */
const VERSIONS = [
  // Old versions with removed APIs
  "1.15.5",
  "1.21.2",
  "1.24.2",
  "1.25.0",
  "1.26.1",
  "1.27.1",
  "1.29.5",
  "1.32.0",
  // Latest version
  "1.36.0",
];

async function fetchSpec(): Promise<Document> {
  const specs = await Promise.all(
    VERSIONS.map(async (ver) => {
      const url = `https://raw.githubusercontent.com/kubernetes/kubernetes/refs/tags/v${ver}/api/openapi-spec/swagger.json`

      console.log("Reading:", url);
      return JSON.parse(await readInput(url)) as OpenAPIV2.Document;
    }),
  );

  return mergeOpenAPISpecs<Document>(specs);
}

function omitAPIMachineryDefinitions(doc: Document): void {
  if (!doc.definitions) return;

  doc.definitions = Object.fromEntries(
    Object.entries(doc.definitions).filter(([key]) => !isAPIMachineryID(key)),
  );
}

function patchStatefulSetSpec(spec: Document): void {
  const pvcSpec =
    spec.definitions?.["io.k8s.api.core.v1.PersistentVolumeClaim"];
  if (!pvcSpec) return;

  const volumeClaimTemplates =
    spec.definitions?.["io.k8s.api.apps.v1.StatefulSetSpec"]?.properties
      ?.volumeClaimTemplates;
  if (!volumeClaimTemplates || !volumeClaimTemplates.items) return;

  volumeClaimTemplates.items = pvcSpec as any;
}

export async function generateModels() {
  const spec = await fetchSpec();

  omitAPIMachineryDefinitions(spec);
  patchStatefulSetSpec(spec);

  await generate({
    input: JSON.stringify(spec),
    outputPath: fileURLToPath(new URL("../models", import.meta.url)),
    externalAPIMachinery: false,
  });
}
