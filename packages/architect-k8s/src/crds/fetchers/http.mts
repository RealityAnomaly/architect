import * as api from 'kubernetes-models';
import { CrdsConfig } from "../config.mts";
import { CRDFetcher } from "./index.mts";

export class CRDFetcherHttp extends CRDFetcher {
  public async fetch(crd: CrdsConfig): Promise<api.apiextensionsK8sIo.v1.CustomResourceDefinition[]> {
    if (!crd.http || !crd.http.paths) return [];

    const result = [] as api.apiextensionsK8sIo.v1.CustomResourceDefinition[];
    for (const path of crd.http.paths) {
      const response = await fetch(path);
      if (response.status !== 200) {
        this.logger.warn(`fetch failed for CRD domain ${crd.name} path ${path}: HTTP code ${response.status}`, { domain: crd.name, path: path, code: response.status });
        continue;
      };

      const text = await response.text();
      const resources = await this.parent.plugin.loader.loadString(text);
      for (const resource of resources) {
        if (resource instanceof api.apiextensionsK8sIo.v1.CustomResourceDefinition)
          result.push(resource);
      };
    };

    return result;
  }
}
