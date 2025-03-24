import { KubeResource } from '@perdition/architect-core';
import { Builder, BuilderParams } from './builder.mts';

export interface HttpFetchOptions {}

export class HttpBuilder extends Builder {
  constructor(params: BuilderParams) {
    super(params, "http");
  }

  public async fetch(
    url: string,
    cache?: boolean,
    _options?: HttpFetchOptions,
  ): Promise<KubeResource[]> {
    if (cache) {
      const cacheResult = await this.tryFetchCache(url);
      if (cacheResult) return cacheResult;
    }

    const response = await fetch(url);
    if (response.status !== 200) {
      throw new Error(
        `HTTP fetch failed for ${url}: returned code ${response.status}`,
      );
    }

    const text = await response.text();
    return await this.loader.loadString(text);
  }
}
