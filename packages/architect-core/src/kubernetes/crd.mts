import { execFile } from 'node:child_process';
import * as util from 'node:util';

import * as api from 'kubernetes-models';
import * as fs from 'node:fs/promises';
import * as os from 'node:os';
import * as path from 'node:path';
import * as yaml from 'js-yaml';
//import crdGenerate from '@kubernetes-models/crd-generate'
import { ManifestLoader } from './yaml.mts';
import { walk } from '../utils/files.mts';

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
      const resources = await this.loader.loadString(text);

      for (const resource of resources) {
        if (
          resource instanceof api.apiextensionsK8sIo.v1.CustomResourceDefinition
        ) {
          crds.push(resource);
        }
      }
    }

    const tempDir = await fs.mkdtemp(path.join(os.tmpdir(), 'architect-'));
    const tempFile = path.join(tempDir, 'crds.yaml');

    try {
      await fs.writeFile(
        tempFile,
        crds.map((r) => yaml.dump(r)).join('\n---\n'),
      );

      // broken because of ESM bullshit...
      // await crdGenerate.generate({
      //   input: tempFile,
      //   outputPath: outDir
      // });

      const execFileAsync = util.promisify(execFile);
      await execFileAsync('deno', [
        'run',
        '--allow-env',
        '--allow-sys',
        '--allow-read',
        '--allow-write',
        'npm:@kubernetes-models/crd-generate',
        '--input',
        tempFile,
        '--output',
        outDir,
      ], { maxBuffer: undefined });
    } catch (exception) {
      console.log(exception);
    } finally {
      await fs.rm(tempDir, { force: true, recursive: true });
    }

    await this.fixupModels(outDir);

    // write the json blob used for cluster resource generation
    await this.writeJsonBlob(outDir, crds);
  }

  private async fixupModels(outDir: string) {
    for await (const file of walk(outDir)) {
      let content = await fs.readFile(file, 'utf-8');
      if (content.includes('_schemas') && !file.endsWith('.js')) {
        content = content.replaceAll(
          new RegExp('^(.*)(_schemas/.[^"]*)', 'gm'),
          '$1$2.js',
        );
      }

      content = content.replaceAll(
        new RegExp('^(export *.*from )"(.*?)"', 'gm'),
        '$1"$2.ts"',
      );
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
