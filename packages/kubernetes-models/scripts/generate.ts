import { generateApimachinery } from "./generate-apimachinery.ts"
import { generateModels } from "./generate-models.ts"

await generateModels();
await generateApimachinery();
