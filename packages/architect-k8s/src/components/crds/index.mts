import { CRDModelGenerator, GVK, TypeUtilities } from '@perdition/architect-core';
import * as api from 'kubernetes-models';
import { KubeComponent, KubeComponentGenericResources, } from '../../component.mts';

import model from './architect.json' with { type: 'json' };

@KubeComponent.decorate(model)
export class CrdsComponent extends KubeComponent {
  private readonly enabledGroups: string[] = [];
  private readonly enabledGVKs: GVK[] = [];

  public override init(): void {
    this.standardRequirements = false;
  }

  public override async build(resources: KubeComponentGenericResources = {}) {
    const crds: api.apiextensionsK8sIo.v1.CustomResourceDefinition[] = [];
    const projects = this.target.project.app.getProjects();
    const modules = projects.reduce((v, p) => v.concat(p.getModules()), [] as object[]);

    for (const module of modules) {
      const obj = module as any;
      if (!Object.hasOwn(obj, CRDModelGenerator.BLOB_KEY)) continue;

      const blob = obj[CRDModelGenerator.BLOB_KEY] as unknown[];
      if (!Array.isArray(blob)) continue;

      const resources = this.target.app.kubeLoader.loadArray(
        blob,
      ) as api.apiextensionsK8sIo.v1.CustomResourceDefinition[];

      const result:
        (api.apiextensionsK8sIo.v1.CustomResourceDefinition | null)[] =
        await Promise.all(resources.map(
          async (
            resource,
          ): Promise<
            api.apiextensionsK8sIo.v1.CustomResourceDefinition | null
          > => {
            const gvk = GVK.fromCRD(resource);
            if (
              gvk.some((g) =>
                this.enabledGVKs.findIndex((g2) => g2.compare(g)) > -1
              )
            ) return resource;

            // no matches found, this CRD is not enabled
            return null;
          },
        ));

      crds.push(...result.filter(TypeUtilities.notEmpty));
    }

    resources.result = crds;
    return super.build(resources);
  }

  public enableGroup(group: string) {
    if (this.enabledGroups.includes(group)) return;
    this.enabledGroups.push(group);
  }

  public enableGVK(gvk: GVK) {
    if (this.enabledGVKs.findIndex((g) => g.compare(gvk)) > -1) return;
    this.enabledGVKs.push(gvk);
  }
}
