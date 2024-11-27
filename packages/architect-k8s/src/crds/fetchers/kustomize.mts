import * as api from 'kubernetes-models';
import { CrdsConfig } from "../config.mts";
import { CRDFetcher } from "./index.mts";
import { CRDManager } from '../index.mts';
import { Kustomize } from '../../index.mts';

export class CRDFetcherKustomize extends CRDFetcher {
  private readonly instance: Kustomize;

  constructor(parent: CRDManager) {
    super(parent);

    this.instance = new Kustomize(parent.plugin);
  }

  public async fetch(crd: CrdsConfig): Promise<api.apiextensionsK8sIo.v1.CustomResourceDefinition[]> {
    if (!crd.kustomize || !crd.kustomize.kustomizations) return [];

    const result = [] as api.apiextensionsK8sIo.v1.CustomResourceDefinition[];
    for (const kustomization of crd.kustomize.kustomizations) {
      try {
        const resources = await this.instance.build(kustomization.path, kustomization.config);

        for (const resource of resources) {
          if (resource instanceof api.apiextensionsK8sIo.v1.CustomResourceDefinition)
            result.push(resource);
        };
      } catch (exception) {
        this.logger.warn(`kustomize build failed for CRD domain ${crd.name} path ${kustomization.path}: ${exception}`, { domain: crd.name, path: kustomization.path });
      };
    };

    return result;
  }
}
