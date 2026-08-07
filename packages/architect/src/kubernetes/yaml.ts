// SPDX-FileCopyrightText: 2026 Vertex X7-53
//
// SPDX-License-Identifier: GPL-3.0-or-later

import fs from 'node:fs/promises';
import { parseAll } from '@std/yaml';

import { KubeResource, KubeResourceUtilities } from './resource.ts';
import { GVK, KubeTypeRegistry } from './types/index.ts';
import { TypeUtilities } from '../utils/types.ts';

export class ManifestLoader {
  private readonly types: KubeTypeRegistry;

  constructor(types: KubeTypeRegistry) {
    this.types = types;
  }

  public loadArray(
    content: unknown[],
    skipInvalid: boolean = false
  ): KubeResource[] {
    content = content.filter((x: unknown) => x !== null && x !== undefined);
    const resources: KubeResource[] = [];

    for (const object of content) {
      if (!TypeUtilities.isRecord(object)) {
        if (skipInvalid) continue;
        throw new Error(
          `The value is not an object: ${JSON.stringify(object)}`,
        );
      }

      if (!KubeResourceUtilities.isResource(object)) {
        if (skipInvalid) continue;
        throw new Error(
          `The value is not a Kubernetes API resource (apiVersion and kind required): ${
            JSON.stringify(object)
          }`,
        );
      }

      const gvk = GVK.fromAK(object.apiVersion, object.kind);
      const Constructor = this.types.getConstructor(gvk);
      const resource = Constructor ? new Constructor(object) : object;

      resources.push(resource as KubeResource);
    }

    return resources;
  }

  public loadString(
    content: string,
    skipInvalid: boolean = false,
    // options: ManifestLoadOptions = {}
  ): KubeResource[] {
    return this.loadArray(parseAll(content), skipInvalid);
  }

  /**
   * Loads a YAML manifest from the specified path.
   *
   * @param path Path to the manifest file to load.
   * @param skipInvalid Whether to silently skip non-Kubernetes documents instead of failing
   * @public
   */
  public async loadFile(path: string, skipInvalid: boolean = false): Promise<KubeResource[]> {
    const content = await fs.readFile(path, 'utf-8');
    return this.loadString(content, skipInvalid);
  }
}
