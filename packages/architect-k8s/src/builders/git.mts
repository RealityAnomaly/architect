import * as fs from 'node:fs/promises';
import * as os from 'node:os';
import * as path from 'node:path';
import { KubeResource, walk } from '@perdition/architect-core';

import * as simpleGit from 'simple-git';
import { Builder, BuilderParams } from './builder.mts';

export interface GitFetchOptions {
  paths?: string[];
  extraArgs?: string[];
}

/**
 * Fetches a list of resources from a remote Git repository
 */
export class GitBuilder extends Builder {
  private readonly instance: simpleGit.SimpleGit;

  constructor(params: BuilderParams) {
    super(params, "git");
    this.instance = simpleGit.simpleGit();
  }

  public async fetch(
    url: string,
    ref?: string,
    options?: GitFetchOptions,
  ): Promise<KubeResource[]> {
    const result = [] as KubeResource[];
    const tempDir = await fs.mkdtemp(path.join(os.tmpdir(), "architect-"));

    const params = ["--depth", "1", "--single-branch"];
    if (ref) params.push(...["-b", ref]);
    if (options?.extraArgs) params.push(...options.extraArgs);

    try {
      await this.instance.clone(url, tempDir, params);

      const paths = options?.paths && options.paths.length > 0
        ? options.paths.map((p) => path.join(tempDir, p))
        : [tempDir];
      for (const p of paths) {
        await fs.stat(p);

        for await (const file of walk(p)) {
          if (!(file.endsWith(".yaml") || file.endsWith(".yml"))) continue;
          const text = await fs.readFile(file, "utf-8");
          result.push(...await this.loader.loadString(text));
        }
      }
    } finally {
      await fs.rm(tempDir, { force: true, recursive: true });
    }

    return result;
  }
}
