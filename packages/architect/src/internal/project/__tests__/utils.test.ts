import * as assert from '@std/assert';
import { ProjectUtils } from '../utils.ts';

let tmpdir: string;

Deno.test.beforeEach(async () => {
  tmpdir = await Deno.makeTempDir();
})

Deno.test({
  name: 'can neither read nor write',
  permissions: {
    read: false,
    write: false,
  }
}, async () => {
  assert.assertFalse(await ProjectUtils.findProjectRoot(tmpdir));
});

Deno.test({
  name: 'can read but cannot write',
  permissions: {
    read: true,
    write: false,
  }
}, async () => {
  assert.assertFalse(await ProjectUtils.findProjectRoot(tmpdir));
});

Deno.test({
  name: 'can both read and write',
  permissions: {
    read: true,
    write: true,
  }
}, async () => {
  assert.assert(await ProjectUtils.findProjectRoot(tmpdir));
});
