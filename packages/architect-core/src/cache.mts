import * as toolkit from '@es-toolkit/es-toolkit';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';

import { HashUtilities, StateProvider } from './utils/index.mts';
import objectHash from 'object-hash';
import { Logger } from 'winston';

/**
 * Target cache that caches the result of build inputs
 */
export class TargetCache {
  readonly dir: string;
  readonly logger?: Logger;

  constructor(state: StateProvider, logger?: Logger) {
    this.dir = state.dirs.cache;
    this.logger = logger;
  };

  private hash(key: object | string): string {
    if (Array.isArray(key)) {
      return HashUtilities.compositeHash(key);
    } else if (toolkit.isString(key)) {
      return HashUtilities.stringHash(key);
    } else {
      return objectHash(key);
    };
  };

  public async get(ns: string, key: object | object[] | string): Promise<Uint8Array | null> {
    const file = path.join(this.dir, ns, this.hash(key));

    try {
      await fs.stat(file);
      this.logger?.silly(`cache hit for key ${JSON.stringify(key)} in namespace ${ns}`);
    } catch {
      this.logger?.silly(`cache miss for key ${JSON.stringify(key)} in namespace ${ns}`);
      return null;
    };

    const buf = await fs.readFile(file);
    return Uint8Array.from(buf);
  };

  // TODO: monitor size of cache folder. Prune the oldest entries if we exceed the maximum size.
  public async set(ns: string, key: object | string, value: Uint8Array) {
    const dir = path.join(this.dir, ns);
    await fs.mkdir(dir, { recursive: true });

    const file = path.join(dir, this.hash(key));
    await fs.writeFile(file, value);
  };
};
