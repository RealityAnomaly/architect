import fs from 'node:fs/promises';
import { loadAll } from 'js-yaml';

import { KubeResource, KubeResourceUtilities } from './resource.mts';
import { GVK, KubeTypeRegistry } from './types/index.mts';
import { isRecord } from '../utils/objects.mts';

export class ManifestLoader {
  private readonly types: KubeTypeRegistry;

  constructor(types: KubeTypeRegistry) {
    this.types = types;
  }

  public loadArray(
    content: unknown[],
  ): KubeResource[] {
    content = content.filter((x: unknown) => x != null);
    const resources: KubeResource[] = [];

    for (const object of content) {
      if (!isRecord(object)) {
        throw new Error(
          `The value is not an object: ${JSON.stringify(object)}`,
        );
      }

      if (!KubeResourceUtilities.isResource(object)) {
        throw new Error(
          `The value is not a Kubernetes API resource (apiVersion and kind required): ${
            JSON.stringify(object)
          }`,
        );
      }

      const gvk = GVK.fromAK(object.apiVersion, object.kind);
      const Constructor = this.types.getConstructor(gvk);
      const resource = Constructor ? new Constructor(object) : object;
      if (!resource) continue;

      resources.push(resource);
    }

    return resources;
  }

  public loadString(
    content: string,
    // options: ManifestLoadOptions = {}
  ): KubeResource[] {
    return this.loadArray(loadAll(content));
  }

  /**
   * Loads a YAML manifest from the specified path.
   *
   * @param path Path to the manifest file to load.
   * @public
   */
  public async loadFile(path: string): Promise<KubeResource[]> {
    const content = await fs.readFile(path, 'utf-8');
    return this.loadString(content);
  }
}
