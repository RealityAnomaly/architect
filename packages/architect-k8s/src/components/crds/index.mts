import * as fs from 'node:fs/promises';
import path from 'node:path';
import { GVK, notEmpty } from '@perdition/architect-core';
import * as fg from 'fast-glob';
import * as api from 'kubernetes-models';
import { KubeComponent, KubeComponentGenericResources } from '../../component.mts';

import model from './architect.json' with { type: 'json' };

@KubeComponent.decorate(model)
export class CrdsComponent extends KubeComponent {
  private readonly enabledGroups: string[] = [];
  private readonly enabledGVKs: GVK[] = [];

  public override init(): void {
    this.standardRequirements = false;
  };

  public override async build(resources: KubeComponentGenericResources = {}) {
    const crds: api.apiextensionsK8sIo.v1.CustomResourceDefinition[] = [];
    for (const module of this.target.plugin.parent.projectPaths) {
      const dir = path.resolve(path.join(module, 'data/crds'));

      try {
        const statr = await fs.stat(dir);
        if (!statr.isDirectory()) continue;
      } catch {
        continue;
      };

      const groups = await fs.readdir(dir);
      for (const group of groups) {
        const files = await fg.default([`${dir}/${group}/*.yaml`], {});
        const result: (api.apiextensionsK8sIo.v1.CustomResourceDefinition | null)[] = await Promise.all(files.map(
          async (file): Promise<api.apiextensionsK8sIo.v1.CustomResourceDefinition | null> => {
            const fileResources = await this.target.parent.kubeLoader.loadFile(file);
            if (fileResources.length <= 0) return null;

            // this will always be a CRD as our loadFile method loads the model
            const fileResource = fileResources[0] as api.apiextensionsK8sIo.v1.CustomResourceDefinition;

            // check to see if this is enabled, do wildcard matching
            //if (this.enabledGroups.some(g => wcmatch(g)(fileResource.spec.group))) return fileResource;

            const gvk = GVK.fromCRD(fileResource);
            if (gvk.some(g => this.enabledGVKs.findIndex(g2 => g2.compare(g)) > -1)) return fileResource;

            // no matches found, this CRD is not enabled
            return null;
          },
        ));

        crds.push(...result.filter(notEmpty));
      };
    };

    resources.result = crds;
    return super.build(resources);
  };

  public enableGroup(group: string) {
    if (this.enabledGroups.includes(group)) return;
    this.enabledGroups.push(group);
  };

  public enableGVK(gvk: GVK) {
    if (this.enabledGVKs.findIndex(g => g.compare(gvk)) > -1) return;
    this.enabledGVKs.push(gvk);
  };
};
