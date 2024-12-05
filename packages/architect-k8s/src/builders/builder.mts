import * as util from 'node:util';

import { Logger } from 'npm:winston';
import { KubeResource, ManifestLoader, TargetCache } from 'jsr:@perdition/architect-core';

export interface BuilderParams {
  logger: Logger,
  loader: ManifestLoader;
  cache: TargetCache;
};

/**
 * A builder is an opaque system that runs to perform some work and return a list of Kubernetes resources.
 * When inputs are stored, the result can be cached and later reproduced consistently.
 */
export abstract class Builder {
  protected readonly key: string;
  protected readonly logger: Logger;
  protected readonly loader: ManifestLoader;
  protected readonly cache: TargetCache;

  constructor(params: BuilderParams, key: string) {
    this.logger = params.logger;
    this.loader = params.loader;
    this.cache = params.cache;
    this.key = key;
  };

  protected async tryFetchCache(key: string | object | object[]): Promise<KubeResource[] | null> {
    const bytes = await this.cache.get('helm', key);
    if (!bytes) return null;

    const decoder = new util.TextDecoder();
    const data = decoder.decode(bytes);
    return this.loader.loadString(data);
  };

  protected async storeCache(key: string | object | object[], data: string) {
    const encoder = new util.TextEncoder();
    const bytes = encoder.encode(data);
    await this.cache.set('helm', key, bytes);
  };
};
