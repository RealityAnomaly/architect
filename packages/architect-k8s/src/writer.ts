import path from 'node:path';
import * as yaml from '@std/yaml';
import * as fs from 'node:fs/promises';

import { KubeContext, KubeResource, KubeResourceUtilities, Result, IWriter, WriterParams } from '@glassway/architect';
import { KubeComponent } from './index.ts';

export enum KubeWriterOutputFormat {
  SingleFile,
  PerResource,
  PerComponent,
}

export interface KubeWriterParams extends WriterParams {
  format?: KubeWriterOutputFormat;
  gitops?: boolean;
}

export class KubeWriter implements IWriter<KubeWriterParams> {
  public static stringify(resource: KubeResource): string {
    return yaml.stringify(resource, {
      skipInvalid: true,
      // Prevent line wrapping
      // Very important so we don't fuck up config maps
      lineWidth: -1
    });
  }

  public async write(result: Result, dir: string, params?: KubeWriterParams) {
    const format = params?.format ??
      KubeWriterOutputFormat.PerComponent;
    if (format === KubeWriterOutputFormat.SingleFile) {
      await this.writeSingleFile(result, dir);
    } else if (format === KubeWriterOutputFormat.PerResource) {
      await this.writePerResource(result, dir);
    } else if (format === KubeWriterOutputFormat.PerComponent) {
      await this.writePerComponent(result, dir, params);
    } else {
      throw new Error("invalid KubeTargetOutputFormat specified");
    }
  }

  private async writeSingleFile(result: Result, dir: string) {
    const resources = result.all as KubeResource[] ?? [];
    const resource = resources.map((r) => KubeWriter.stringify(r)).join("\n---\n");

    await fs.writeFile(path.join(dir, "resources.yaml"), resource);
  }

  private async writePerResource(result: Result, dir: string) {
    const resources = result.all as KubeResource[] ?? [];
    await Promise.all(resources.map(async (r) => {
      const name = `${KubeResourceUtilities.resourceId(r)}.yaml`;
      const resource = KubeWriter.stringify(r);

      await fs.writeFile(path.join(dir, name), resource);
    }));
  }

  private async writePerComponent(
    result: Result,
    dir: string,
    params?: KubeWriterParams,
  ) {
    await Promise.all(
      Object.entries(result.components).map(async ([k, v]) => {
        const component = result.graph.components[k].component as KubeComponent;
        const ctx = component.context as KubeContext;
        const rd = path.join(dir, ctx.namespace ?? 'default', component.context.name);
        await fs.rm(rd, { recursive: true, force: true });
        await fs.mkdir(rd, { recursive: true });

        // namespaces are handled separately in flux mode
        let resources = v as KubeResource[] ?? [];
        if (params?.gitops) resources = resources.filter(
          (r) => {
            if (r.kind === "Namespace") return false;
            if ('architect.glassway.net/gitops-exclude' in (r.metadata?.annotations ?? {})) return false;

            return true;
          }
        );

        if (resources.length <= 0) return;

        await Promise.all(resources.map(async (r) => {
          const name = `${KubeResourceUtilities.resourceId(r)}.yaml`;
          const resource = KubeWriter.stringify(r);

          await fs.writeFile(path.join(rd, name), resource);
        }));

        //const hash = HashUtilities.compositeHash(resources);
        //await fs.writeFile(path.join(rd, '.hash'), hash);
      }),
    );
  }
}
