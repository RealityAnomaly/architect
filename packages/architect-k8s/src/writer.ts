// SPDX-FileCopyrightText: 2026 Vertex X7-53
//
// SPDX-License-Identifier: GPL-3.0-or-later

import path from 'node:path';
import * as yaml from '@std/yaml';
import * as fs from 'node:fs/promises';

import * as api from '@glassway/kubernetes-models';
import { GVK, KubeContext, KubeResource, KubeResourceUtilities, Result, IWriter, WriterParams } from '@glassway/architect';
import { ClusterSecrets, KubeComponent } from './index.ts';
import { GitOpsController } from './gitops/base.ts';
import { SOPSShim } from '../../architect/src/index.ts';

export enum KubeWriterOutputFormat {
  SingleFile,
  PerResource,
  PerComponent,
}

export interface KubeWriterParams extends WriterParams {
  format?: KubeWriterOutputFormat;
  gitops?: GitOpsController;
}

export class KubeWriter implements IWriter<KubeWriterParams> {
  private readonly sops: SOPSShim;
  private readonly secrets?: ClusterSecrets;

  constructor(secrets?: ClusterSecrets) {
    this.sops = new SOPSShim();
    this.secrets = secrets;
  }

  public static stringify(resource: KubeResource): string {
    return yaml.stringify(resource, {
      skipInvalid: true,
      // Prevent line wrapping
      // Very important so we don't fuck up config maps
      lineWidth: -1
    });
  }

  public async writeFile(location: string, resource: KubeResource, params?: KubeWriterParams): Promise<void> {
    let str = KubeWriter.stringify(resource);

    // encrypt SOPS secrets
    if (GVK.fromResource(resource).compare(GVK.fromCtor(api.v1.Secret))
      && this.secrets?.['sops-public'] && (
        params?.gitops && params.gitops.handlesSOPSSecrets
      ) && !('architect.glassway.net/sops-exclude' in (resource.metadata?.annotations ?? {}))) {
      str = await this.sops.encryptString(str, {
        age: [this.secrets?.['sops-public']],
        inputType: 'yaml',
        outputType: 'yaml',
        encryptedRegex: '^(data|stringData)$',
        filenameOverride: path.basename(location)
      });
    }

    await Deno.writeTextFile(location, str);
  }

  public async write(result: Result, dir: string, params?: KubeWriterParams) {
    const format = params?.format ??
      KubeWriterOutputFormat.PerComponent;
    if (format === KubeWriterOutputFormat.SingleFile) {
      //await this.writeSingleFile(result, dir, params);
      throw new Error('SingleFile format is no longer supported');
    } else if (format === KubeWriterOutputFormat.PerResource) {
      await this.writePerResource(result, dir, params);
    } else if (format === KubeWriterOutputFormat.PerComponent) {
      await this.writePerComponent(result, dir, params);
    } else {
      throw new Error('Invalid KubeTargetOutputFormat specified');
    }
  }

  // private async writeSingleFile(result: Result, dir: string, params?: KubeWriterParams) {
  //   const resources = result.all as KubeResource[] ?? [];
  //   const resource = await Promise.all(resources.map(async (r) => KubeWriter.stringify(r)).join("\n---\n"));
  //
  //   await fs.writeFile(path.join(dir, "resources.yaml"), resource);
  // }

  private async writePerResource(result: Result, dir: string, params?: KubeWriterParams): Promise<void> {
    const resources = result.all as KubeResource[] ?? [];
    await Promise.all(resources.map(async (r) => {
      const name = `${KubeResourceUtilities.resourceId(r)}.yaml`;
      await this.writeFile(path.join(dir, name), r, params);
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
            if (params.gitops!.managesResource(r)) return false;
            if ('architect.glassway.net/gitops-exclude' in (r.metadata?.annotations ?? {})) return false;

            return true;
          }
        );

        if (resources.length <= 0) return;

        await Promise.all(resources.map(async (r) => {
          const name = `${KubeResourceUtilities.resourceId(r)}.yaml`;
          await this.writeFile(path.join(rd, name), r, params);
        }));

        //const hash = HashUtilities.compositeHash(resources);
        //await fs.writeFile(path.join(rd, '.hash'), hash);
      }),
    );
  }
}
