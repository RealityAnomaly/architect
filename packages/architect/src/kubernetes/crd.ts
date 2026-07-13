import * as api from '@glassway/kubernetes-models';
import * as fs from 'node:fs/promises';
import * as os from 'node:os';
import * as path from 'node:path';
import * as yaml from '@std/yaml';
import * as crdGenerate from '../../../kubernetes-models/src/generate/crd-generate/index.ts'
import { ManifestLoader } from './yaml.ts';
import { walk } from '../utils/files.ts';

export class CRDModelGenerator {
  public static readonly BLOB_KEY = '__architectCrdBlob';
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
      if (!file.endsWith('.yaml')) continue;
      const text = await fs.readFile(file, 'utf-8');
      const resources = this.loader.loadString(text);

      for (const resource of resources) {
        if (
          resource instanceof api.apiextensionsK8sIo.v1.CustomResourceDefinition
        ) {
          crds.push(resource);
        }
      }
    }

    try {
      await crdGenerate.generate({
        input: crds,
        outputPath: outDir
      });
    } catch (exception) {
      console.log(exception);
    }

    await this.fixupModels(outDir);

    // write the json blob used for cluster resource generation
    await this.writeJsonBlob(outDir, crds);
  }

  private async fixupModels(outDir: string) {
    for await (const file of walk(outDir)) {
      let content = await fs.readFile(file, 'utf-8');
      const schema = content.includes('_schemas');
      // if (schema && !file.endsWith('.js')) {
      //   content = content.replaceAll(
      //     new RegExp('^(.*)(_schemas/.[^"]*)', 'gm'),
      //     '$1$2.js',
      //   );
      // }

      // content = content.replaceAll(
      //   new RegExp('^(export *.*from )"(.*?)"', 'gm'),
      //   '$1"$2.ts"',
      // );

      await fs.writeFile(file, content);
    }
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
