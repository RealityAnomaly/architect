// SPDX-FileCopyrightText: 2026 Vertex X7-53
//
// SPDX-License-Identifier: GPL-3.0-or-later

import * as crypto from 'node:crypto';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import * as assert from '@std/assert';
import * as logtape from '@logtape/logtape';
import objectHash from 'object-hash';

import { TargetCache } from './../cache.ts';
import { runInTempDir } from '../../../utils/test/helpers.ts';
import { StateProvider } from '../../../utils/index.ts';
import { HashUtilities } from '../../../utils/hashing.ts';

Deno.test({
  name: "putting stuff in cache",
  permissions: { read: true, write: true },
}, async () => {
  // create a temporary directory and clean it up after use
  await runInTempDir(async (dir) => {
    const logger = logtape.getLogger(['test']);
    const state = StateProvider.fromTempDir(dir);
    const obj = new TargetCache(state, logger);

    // randomly generate a 512-byte buffer
    const buf = Uint8Array.from(crypto.randomBytes(512));
    const value = "foo";
    const value2 = {"foo": "bar"};
    const value3 = [{"ff": "foo12"}, {"blah": "123"}];
    await obj.set("foobar", value, buf);
    await obj.set("foobar", value2, buf);
    await obj.set("foobar", value3, buf);

    // check to see if the file now exists
    let file = path.join(dir, "cache", "foobar", HashUtilities.stringHash(value));
    assert.assertEquals(((await fs.stat(file)).isFile()), true);

    // check file contents matches
    const buf2 = Uint8Array.from(await fs.readFile(file));
    assert.assertEquals(buf2, buf);

    // check other files
    file = path.join(dir, "cache", "foobar", HashUtilities.compositeHash(value3));
    assert.assertEquals(((await fs.stat(file)).isFile()), true);
    file = path.join(dir, "cache", "foobar", objectHash(value2));
    assert.assertEquals(((await fs.stat(file)).isFile()), true);
  });
});

Deno.test({
  name: "getting stuff from cache",
  permissions: { read: true, write: true },
}, async () => {
  // create a temporary directory and clean it up after use
  await runInTempDir(async (dir) => {
    // write the file
    const value = "foo";
    const buf = Uint8Array.from(crypto.randomBytes(512));
    const namespace = path.join(dir, "cache", "foobar");
    await fs.mkdir(namespace, { recursive: true });
    const file = path.join(namespace, HashUtilities.stringHash(value));
    await fs.writeFile(file, buf);

    const logger = logtape.getLogger(['test']);
    const state = StateProvider.fromTempDir(dir);
    const obj = new TargetCache(state, logger);

    const result = await obj.get("foobar", value);
    assert.assertEquals(result, buf);
  });
});

Deno.test({
  name: "non-existent file returns null",
  permissions: { read: true, write: true },
}, async () => {
  // create a temporary directory and clean it up after use
  await runInTempDir(async (dir) => {
    const logger = logtape.getLogger(['test']);
    const state = StateProvider.fromTempDir(dir);
    const obj = new TargetCache(state, logger);

    const result = await obj.get("foobar", "foo");
    assert.assertEquals(result, null);
  });
});
