import { walk } from "@std/fs/walk";
import * as api from '@glassway/kubernetes-models';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import * as crdGenerate from '@glassway/kubernetes-models/generate/crd-generate'
import { ManifestLoader } from './yaml.ts';

export class CRDModelGenerator {
  public static readonly BLOB_KEY = '__architectCrdBlob';
  public generator = crdGenerate.generate;
  private readonly loader: ManifestLoader;

  constructor(loader: ManifestLoader) {
    this.loader = loader;
  }

  public async generate(yamlDir: string, outDir: string) {
    await fs.rm(outDir, { recursive: true, force: true });
    await fs.mkdir(yamlDir, { recursive: true });
    await fs.mkdir(outDir, { recursive: true });

    // read all files in src yaml dir
    const crds = [] as api.apiextensionsK8sIo.v1.CustomResourceDefinition[];
    for await (const file of walk(yamlDir)) {
      if (!file.name.endsWith('.yaml')) continue;
      const text = await fs.readFile(file.path, 'utf-8');
      const resources = this.loader.loadString(text);

      for (const resource of resources) {
        if (
          resource instanceof api.apiextensionsK8sIo.v1.CustomResourceDefinition
        ) {
          crds.push(resource);
        }
      }
    }

    await this.generator({
      input: crds,
      outputPath: outDir
    });

    // write the json blob used for cluster resource generation
    await this.writeJsonBlob(outDir, crds);
  }

  private async writeJsonBlob(
    outDir: string,
    crds: api.apiextensionsK8sIo.v1.CustomResourceDefinition[],
  ): Promise<void> {
    await fs.writeFile(
      path.join(outDir, 'blob.min.json'),
      JSON.stringify(crds),
    );
    await fs.appendFile(
      path.join(outDir, 'index.ts'),
      `
import ${CRDModelGenerator.BLOB_KEY} from './blob.min.json' with { type: 'json' };
export { ${CRDModelGenerator.BLOB_KEY} };
`,
    );
  }
}
