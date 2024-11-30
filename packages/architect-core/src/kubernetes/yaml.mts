import fs from 'node:fs/promises';
import { isRecord } from '@perdition/architect-core';
import { loadAll } from 'js-yaml';

import { Resource, ResourceUtilities } from './resource.mts';
import { GVK, TypeRegistry } from './types/index.mts';

export class ManifestLoader {
  private readonly types: TypeRegistry;

  constructor(types: TypeRegistry) {
    this.types = types;
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

      if (!ResourceUtilities.isResource(object)) {
        throw new Error(`The value is not a Kubernetes API resource (apiVersion and kind required): ${JSON.stringify(object)}`);
      };

      const gvk = GVK.fromAK(object.apiVersion, object.kind);
      const Constructor = await this.types.getConstructor(gvk);
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
