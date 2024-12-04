import { execFile } from 'node:child_process';
import * as util from 'node:util';

import * as api from 'kubernetes-models';
import * as fs from 'node:fs/promises';
import * as os from 'node:os';
import * as path from 'node:path';
import * as yaml from 'js-yaml';
//import crdGenerate from '@kubernetes-models/crd-generate'
import { ManifestLoader } from './yaml.mts';
import { walk } from '../index.mts';

export class CRDModelGenerator {
  private readonly loader: ManifestLoader;

  constructor(loader: ManifestLoader) {
    this.loader = loader;
  }

  public async generate(yamlDir: string, outDir: string) {
    fs.rm(outDir, { recursive: true, force: true });
    fs.mkdir(yamlDir, { recursive: true });
    fs.mkdir(outDir, { recursive: true });

    console.log(yamlDir);

    // broken because of ESM bullshit...
    // await crdGenerate.generate({
    //   input: yamlDir,
    //   outputPath: outDir
    // });

    // read all files in src yaml dir
    const crds = [] as api.apiextensionsK8sIo.v1.CustomResourceDefinition[];
    for await (const file of walk(yamlDir)) {
      if (!file.endsWith('.yaml')) continue;
      const text = await fs.readFile(file, 'utf-8');
      const resources = await this.loader.loadString(text);

      for (const resource of resources) {
        if (resource instanceof api.apiextensionsK8sIo.v1.CustomResourceDefinition)
          crds.push(resource);
      };
    };

    const tempDir = await fs.mkdtemp(path.join(os.tmpdir(), 'architect-'))
    const tempFile = path.join(tempDir, 'crds.yaml');

    try {
      await fs.writeFile(tempFile, crds.map(r => yaml.dump(r)).join('\n---\n'));

      const execFileAsync = util.promisify(execFile);
      await execFileAsync('npx', ['@kubernetes-models/crd-generate', '--input', tempFile, '--output', outDir], { maxBuffer: undefined });
    } catch (exception) {
      console.log(exception);
    } finally {
      await fs.rm(tempDir, { force: true, recursive: true });
    };

    await this.fixupModels(outDir);
  };

  private async fixupModels(outDir: string) {
    for await (const file of walk(outDir)) {
      let content = await fs.readFile(file, 'utf-8');
      if (content.includes('_schemas') && !file.endsWith('.js'))
        content = content.replaceAll(new RegExp('^(.*)(_schemas/.[^"]*)', 'gm'), '$1$2.ts');

      content = content.replaceAll(new RegExp('^(export *.*from )"(.*?)"', 'gm'), '$1"$2.ts"');
      await fs.writeFile(file, content);
    };
  };
}
