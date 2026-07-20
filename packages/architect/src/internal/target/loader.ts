import fs from 'node:fs/promises';
import * as logtape from '@logtape/logtape';
import { walk } from '@std/fs/walk';
import { Plugin } from '../plugin/plugin.ts';
import { ITarget } from './target.ts';
import { Project } from '../project/index.ts';

import { architectGlasswayNet } from '../../kubernetes/crds/index.ts';
import { ManifestLoader } from '../../kubernetes/index.ts';
import { PluginRegistry } from '../plugin/registry.ts';

export class TargetLoader {
  public static async collectFolder(
    project: Project,
    plugins: PluginRegistry,
    loader: ManifestLoader,
    input: string,
    logger?: logtape.Logger,
  ): Promise<ITarget[]> {
    try {
      const stat = await fs.stat(input);
      if (!stat.isDirectory()) return [];
    } catch {
      return [];
    }

    // should instead find files recursively of type target.yaml
    const results = [];
    for await (const entry of walk(input, { exts: ["yaml"] })) {
      if (!entry.isFile || entry.name !== "target.yaml") continue;

      const resources = await loader.loadFile(entry.path);
      results.push(...resources.filter((r) =>
        r instanceof architectGlasswayNet.v1alpha1.Target
      ).map((r) => {
        try {
          r.validate();
        } catch (exception: unknown) {
          logger?.error(
            `failed to validate target ${r?.metadata?.name}: ${exception}`,
          );
          return undefined;
        }

        // pick target type from plugin property
        if (r.spec.plugins?.kubernetes) {
          return new plugins.targetMap[Plugin.TARGET_IDENTIFIERS.kubernetes](
            r,
            {},
            project,
          );
        } else {
          logger?.error(
            `attempted to load target ${r.metadata.name} with un-configured plugins`,
          );
          return undefined;
        }
      }).filter((r) => r !== undefined));
    }

    await Promise.all(results.map(async (t) => {
      await t.init();
      logger?.debug(
        `loaded target ${t.model.metadata.name} of kind ${t.constructor.name}`,
      );
    }));

    return results;
  }
}
