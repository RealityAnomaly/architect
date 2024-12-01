import path from 'node:path';
import * as yaml from 'js-yaml';
import * as fs from 'node:fs/promises';

import { Result, Writer, KubeResource, KubeResourceUtilities } from '@perdition/architect-core';
import { KubeTarget, KubeTargetOutputFormat } from './target.mts';
import { KubeContext } from './context.mts';
import { KubeComponent } from './index.mts';

export class KubeWriter implements Writer {
  private readonly target: KubeTarget;

  constructor(target: KubeTarget) {
    this.target = target;
  };

  private async writeSingleFile(result: Result, dir: string) {
    const resources = result.all as KubeResource[] ?? [];
    const resource = resources.map(r => yaml.dump(r)).join('\n---\n');

    await fs.writeFile(path.join(dir, 'resources.yaml'), resource);
  };

  private async writePerResource(result: Result, dir: string) {
    const resources = result.all as KubeResource[] ?? [];
    await Promise.all(resources.map(async r => {
      const name = `${KubeResourceUtilities.resourceId(r)}.yaml`;
      const resource = yaml.dump(r);

      await fs.writeFile(path.join(dir, name), resource);
    }));
  };

  private async writePerComponent(result: Result, dir: string, flux: boolean = false) {
    await Promise.all(Object.entries(result.components).map(async ([k, v]) => {
      const component = result.graph.components[k].component as KubeComponent;
      const ctx = component.context as KubeContext;
      const rd = path.join(dir, ctx.namespace, component.context.name);
      await fs.rm(rd, { recursive: true, force: true });
      await fs.mkdir(rd, { recursive: true });

      // namespaces are handled separately in flux mode
      let resources = v as KubeResource[] ?? [];
      if (flux) resources = resources.filter(r => r.kind !== 'Namespace');
      if (resources.length <= 0) return;

      await Promise.all(resources.map(async r => {
        const name = `${KubeResourceUtilities.resourceId(r)}.yaml`;
        const resource = yaml.dump(r);

        await fs.writeFile(path.join(rd, name), resource);
      }));
    }));
  };

  private async writeFluxCD(result: Result, dir: string) {
    // write all the components
    await this.writePerComponent(result, path.join(dir, 'components'), true);

    // write the cluster dir
    const clusterDir = path.join(dir, 'cluster');
    await fs.mkdir(clusterDir);

    // write kustomization objects
    await Promise.all(Object.entries(result.components).map(async ([k, v]) => {
      const component = result.graph.components[k];
      const resource = this.target.flux.componentObject(component, this.target.params.modes.flux!);
      await fs.writeFile(path.join(clusterDir, `${KubeResourceUtilities.resourceId(resource)}.yaml`), yaml.dump(resource));

      // extract and write any namespaces the component declares to the cluster dir
      const namespaces = (v as KubeResource[] ?? []).filter(r => r.kind === 'Namespace');
      await Promise.all(namespaces.map(r => fs.writeFile(path.join(clusterDir, `${KubeResourceUtilities.resourceId(r)}.yaml`), yaml.dump(r))));
    }));
  };

  public async write(result: Result, dir: string) {
    if (this.target.params.modes?.flux) {
      await this.writeFluxCD(result, dir);
      return;
    };

    const format = this.target.params.output?.format ?? KubeTargetOutputFormat.PerComponent;
    if (format === KubeTargetOutputFormat.SingleFile) {
      await this.writeSingleFile(result, dir);
    } else if (format === KubeTargetOutputFormat.PerResource) {
      await this.writePerResource(result, dir);
    } else if (format === KubeTargetOutputFormat.PerComponent) {
      await this.writePerComponent(result, dir);
    } else {
      throw new Error('invalid KubeTargetOutputFormat specified');
    };
  };
};
