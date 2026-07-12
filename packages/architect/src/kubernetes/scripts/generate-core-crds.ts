import path from "node:path";
import process from "node:process";

import { CRDModelGenerator } from "../crd.ts";
import { KubeTypeRegistry } from "../types/registry.ts";
import { ManifestLoader } from "../yaml.ts";

const types = new KubeTypeRegistry();
const loader = new ManifestLoader(types);
const generator = new CRDModelGenerator(loader);

const yamlDir = path.join(process.cwd(), "internal/crds");
const modelDir = path.join(process.cwd(), "src/kubernetes/crds");

export async function generateCoreCrds() {
  await generator.generate(yamlDir, modelDir);
}
