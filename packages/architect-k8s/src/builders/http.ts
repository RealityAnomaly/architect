// SPDX-FileCopyrightText: 2026 Vertex X7-53
//
// SPDX-License-Identifier: GPL-3.0-or-later

import { Hash, KubeResource } from '@glassway/architect';
import { Builder, BuilderParams } from './builder.ts';

export interface HttpFetchOptions {
  hash: string;
}

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
    if (_options?.hash) {
      const buf = new TextEncoder().encode(text);
      const hash = Hash.parse(_options.hash);
      if (!await hash.validate(buf))
        throw new Error(
          `HTTP fetch failed for ${url}: wanted hash ${_options.hash}, got hash ${hash.encode()}`
        )
    }

    return this.loader.loadString(text);
  }
}
