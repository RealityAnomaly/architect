import { Architect } from '../../app.mts';
import fs from 'node:fs/promises';
import path from 'node:path';
import { Plugin } from '../../plugin.mts';
import { Target } from './target.mts';

import { architectGlasswayNet } from '../../generated/crds/index.ts';

export class TargetLoader {
  public static async collectFolder(
    parent: Architect,
    input: string,
  ): Promise<Target[]> {
    try {
      const stat = await fs.stat(input);
      if (!stat.isDirectory()) return [];
    } catch {
      return [];
    }

    const result = await fs.readdir(input);
    const targetMap = parent.pluginRegistry.targetMap;

    const results =
      (await Promise.all(result.map(async (k): Promise<Target[]> => {
        if (!k.endsWith('.yaml')) return [];

        const resources = await parent.kubeLoader.loadFile(path.join(input, k));
        return resources.filter((r) =>
          r instanceof architectGlasswayNet.v1alpha1.Target
        ).map((r) => {
          try {
            r.validate();
          } catch (exception: unknown) {
            parent.logger.error(
              `failed to validate target ${r?.metadata?.name}: ${exception}`,
            );
            return undefined;
          }

          // pick target type from plugin property
          if (r.spec.plugins?.kubernetes) {
            return new targetMap[Plugin.TARGET_IDENTIFIERS.kubernetes](
              r,
              {},
              parent.project!,
            );
          } else {
            parent.logger.error(
              `attempted to load target ${r.metadata.name} with un-configured plugins`,
            );
            return undefined;
          }
        }).filter((r) => r !== undefined);
      }))).flat();

    await Promise.all(results.map(async (t) => {
      await t.init();
      parent.logger.debug(
        `loaded target ${t.model.metadata.name} of kind ${t.constructor.name}`,
      );
    }));

    return results;
  }
}
