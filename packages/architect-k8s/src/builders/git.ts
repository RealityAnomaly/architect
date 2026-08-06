// SPDX-FileCopyrightText: 2026 Vertex X7-53
//
// SPDX-License-Identifier: GPL-3.0-or-later

import * as fs from 'node:fs/promises';
import * as os from 'node:os';
import * as path from 'node:path';
import * as util from 'node:util';
import { execFile } from 'node:child_process';
import { KubeResource } from '@glassway/architect';
import { walk } from "@std/fs/walk";

import { Builder, BuilderParams } from './builder.ts';

export interface GitFetchOptions {
  paths?: string[];
  extraArgs?: string[];
}

/**
 * Fetches a list of resources from a remote Git repository
 */
export class GitBuilder extends Builder {
  constructor(params: BuilderParams) {
    super(params, "git");
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
      const execFileAsync = util.promisify(execFile);
      await execFileAsync("git", ["clone", ...params, url, tempDir]);

      const paths = options?.paths && options.paths.length > 0
        ? options.paths.map((p) => path.join(tempDir, p))
        : [tempDir];
      for (const p of paths) {
        await fs.stat(p);

        for await (const file of walk(p)) {
          if (!(file.name.endsWith(".yaml") || file.name.endsWith(".yml"))) continue;
          const text = await fs.readFile(file.path, "utf-8");
          result.push(...this.loader.loadString(text));
        }
      }
    } finally {
      await fs.rm(tempDir, { force: true, recursive: true });
    }

    return result;
  }
}
