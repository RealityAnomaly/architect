import * as api from 'kubernetes-models';
import { CrdsConfig } from "../config.mts";
import { CRDFetcher } from "./index.mts";
import { CRDManager } from '../index.mts';
import { Helm } from '../../index.mts';

export class CRDFetcherHelm extends CRDFetcher {
  private readonly instance: Helm;

  constructor(parent: CRDManager) {
    super(parent);

    this.instance = new Helm(parent.plugin);
  }

  public async fetch(crd: CrdsConfig): Promise<api.apiextensionsK8sIo.v1.CustomResourceDefinition[]> {
    if (!crd.helm || !crd.helm.charts) return [];

    const result = [] as api.apiextensionsK8sIo.v1.CustomResourceDefinition[];
    for (const chart of crd.helm.charts) {
      try {
        const resources = await this.instance.template(chart.name, chart.values, chart.options);

        for (const resource of resources) {
          if (resource instanceof api.apiextensionsK8sIo.v1.CustomResourceDefinition)
            result.push(resource);
        };
      } catch {
        this.logger.warn(`helm build failed for CRD domain ${crd.name} chart ${chart.name}`, { domain: crd.name, chart: chart.name });
      };
    };
    
    return result;
  }
}
