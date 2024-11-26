import fs from 'node:fs/promises';
import { isRecord } from '@perdition/architect-core';
import { loadAll } from 'js-yaml';

import { isResource, Resource } from '../resource.mts';
import { KubeTarget } from '../target.mts';
import { GVK } from '../types/index.mts';

//export interface ManifestLoadOptions {};

export class ManifestLoader {
  private readonly target: KubeTarget;

  constructor(target: KubeTarget) {
    this.target = target;
  };

  public async loadString(
    content: string,
    // options: ManifestLoadOptions = {}
  ): Promise<Resource[]> {
    const input = loadAll(content).filter(x => x != null);
    const resources: Resource[] = [];

    for (const object of input) {
      if (!isRecord(object)) {
        throw new Error(`The value is not an object: ${JSON.stringify(object)}`);
      };

      if (!isResource(object)) {
        throw new Error(`The value is not a Kubernetes API resource (apiVersion and kind required): ${JSON.stringify(object)}`);
      };

      const gvk = GVK.fromAK(object.apiVersion, object.kind);
      const Constructor = await this.target.types.getConstructor(gvk);
      const resource = Constructor ? new Constructor(object) : object;
      if (!resource) continue;

      resources.push(resource);
    };

    return resources;
  };

  /**
     * Loads a YAML manifest from the specified path.
     *
     * @param path Path to the manifest file to load.
     * @public
     */
  public async loadFile(path: string) {
    const content = await fs.readFile(path, 'utf-8');
    //logger.log(LogLevel.Debug, `File loaded from: ${path}`);

    return this.loadString(content);
  };
};
