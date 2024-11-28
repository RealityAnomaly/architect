import * as api from 'kubernetes-models';
import * as fs from 'node:fs/promises';
import * as os from 'os';
import * as path from 'path';

import { CrdsConfig } from "../config.mts";
import { CRDFetcher } from "./index.mts";

import * as simpleGit from 'simple-git';
import { walk } from '@perdition/architect-core';
import { CRDManager } from '../index.mts';

export class CRDFetcherGit extends CRDFetcher {
  private readonly instance: simpleGit.SimpleGit;

  constructor(parent: CRDManager) {
    super(parent);
    this.instance = simpleGit.simpleGit();
  }

  public async fetch(crd: CrdsConfig): Promise<api.apiextensionsK8sIo.v1.CustomResourceDefinition[]> {
    if (!crd.git) return [];

    const result = [] as api.apiextensionsK8sIo.v1.CustomResourceDefinition[];

    for (const repo of crd.git.repos) {
      const refStr = repo.ref ? `+${repo.ref}` : '';
      const tempDir = await fs.mkdtemp(path.join(os.tmpdir(), 'architect-'))

      try {
        const params = ['--depth', '1', '--single-branch'];
        if (repo.ref) {
          params.push(...['-b', repo.ref]);
        };

        try {
          await this.instance.clone(repo.url, tempDir, params);
        } catch (exception) {
          this.logger.warn(`git fetch failed for CRD domain ${crd.name} repository ${repo.url}${refStr}: ${exception}`, { url: repo.url, ref: repo.ref });
          await fs.rm(tempDir, { force: true, recursive: true });
          return result;
        }
        
        for (const p of repo.paths) {
          const src = path.join(tempDir, p);

          try {
            await fs.stat(src);
          } catch {
            this.logger.warn(`for git CRD domain ${crd.name} repository ${repo.url}${refStr}: subpath ${p} does not exist`, { url: repo.url, ref: repo.ref, path: src });
            continue;
          };

          for await (const file of walk(src)) {
            if (!(file.endsWith('.yaml') || file.endsWith('.yml'))) continue;
            const text = await fs.readFile(file, 'utf-8');
            const resources = await this.parent.plugin.loader.loadString(text);

            for (const resource of resources) {
              if (resource instanceof api.apiextensionsK8sIo.v1.CustomResourceDefinition)
                result.push(resource);
            };
          };
        };
      } catch (exception) {
        this.logger.warn(`for git CRD domain ${crd.name} repository ${repo.url}${refStr}: general exception: ${exception}`, { url: repo.url, ref: repo.ref });
      } finally {
        await fs.rm(tempDir, { force: true, recursive: true });
      };
    };

    return result;
  }
}
