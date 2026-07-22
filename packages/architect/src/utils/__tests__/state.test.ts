import appDirs from "appdirsjs";
import * as assert from '@std/assert';
import { stub } from "@std/testing/mock";
import { StateProvider } from '../state.ts';

Deno.test('returns from app dirs', () => {
  using call = stub(appDirs, 'default', (_) => {
    return { cache: 'foo', config: 'foo', data: 'foo', runtime: 'foo' }
  });

  const instance = StateProvider.fromAppDirs('foobar');

  assert.assertEquals(call.calls.length, 1);
  assert.assertEquals(call.calls[0].args[0], { appName: 'foobar' });
  assert.assertEquals(instance.dirs, {
    cache: 'foo',
    config: 'foo',
    data: 'foo',
    runtime: 'foo'
  });
});

Deno.test('returns from temp dirs', () => {
  const instance = StateProvider.fromTempDir('foobar');

  assert.assertEquals(instance.dirs, {
    cache: 'foobar/cache',
    config: 'foobar/config',
    data: 'foobar/data',
    runtime: 'foobar/runtime'
  });
});
