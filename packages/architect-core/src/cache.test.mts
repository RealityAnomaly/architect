import * as crypto from 'node:crypto';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import * as assert from 'jsr:@std/assert';

import { TargetCache } from './cache.mts';
import { runInTempDir } from './utils/test/helpers.mts';
import { StateProvider } from './utils/index.mts';
import { HashUtilities } from "./utils/hashing.mts";

Deno.test({
  name: 'putting stuff in cache',
  permissions: { read: true, write: true },
}, async () => {
  // create a temporary directory and clean it up after use
  await runInTempDir(async (dir) => {
    const state = StateProvider.fromTempDir(dir);
    const obj = new TargetCache(state);

    // randomly generate a 512-byte buffer
    const buf = Uint8Array.from(crypto.randomBytes(512));
    const value = 'foo';
    await obj.set('foobar', value, buf);

    // check to see if the file now exists
    const file = path.join(dir, 'cache', 'foobar', HashUtilities.stringHash(value));
    const result = await fs.stat(file);
    assert.assertEquals(result.isFile(), true);

    // check file contents matches
    const buf2 = Uint8Array.from(await fs.readFile(file));
    assert.assertEquals(buf2, buf);
  });
});

Deno.test({
  name: 'getting stuff from cache',
  permissions: { read: true, write: true },
}, async () => {
  // create a temporary directory and clean it up after use
  await runInTempDir(async (dir) => {
    // write the file
    const value = 'foo';
    const buf = Uint8Array.from(crypto.randomBytes(512));
    const namespace = path.join(dir, 'cache', 'foobar');
    await fs.mkdir(namespace, { recursive: true });
    const file = path.join(namespace, HashUtilities.stringHash(value));
    await fs.writeFile(file, buf);

    const state = StateProvider.fromTempDir(dir);
    const obj = new TargetCache(state);

    const result = await obj.get('foobar', value);
    assert.assertEquals(result, buf);
  });
});

Deno.test({
  name: 'non-existent file returns null',
  permissions: { read: true, write: true }
}, async () => {
  // create a temporary directory and clean it up after use
  await runInTempDir(async (dir) => {
    const state = StateProvider.fromTempDir(dir);
    const obj = new TargetCache(state);

    const result = await obj.get('foobar', 'foo');
    assert.assertEquals(result, null);
  });
});
