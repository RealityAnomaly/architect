import path from "node:path";
import process from "node:process";
import {
  CRDModelGenerator,
  KubeTypeRegistry,
  ManifestLoader,
} from "../kubernetes/index.mts";

const types = new KubeTypeRegistry();
const loader = new ManifestLoader(types);
const generator = new CRDModelGenerator(loader);

const yamlDir = path.join(process.cwd(), "internal/crds");
const modelDir = path.join(process.cwd(), "src/generated/crds");

await generator.generate(yamlDir, modelDir);
