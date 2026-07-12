import { generateApimachinery } from "../src/kubernetes/scripts/generate-apimachinery.ts"
import { generateModels } from "../src/kubernetes/scripts/generate-models.ts"
import { generateCoreCrds } from '../src/kubernetes/scripts/generate-core-crds.ts';

await generateModels();
await generateApimachinery();
await generateCoreCrds();
