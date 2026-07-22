import * as assert from '@std/assert';
import { stub } from "@std/testing/mock";

import { MockArchitect } from '../../../__mocks__/app.ts';
import { Constructor } from '../../../index.ts';
import { Plugin } from '../plugin.ts';
import { MockTarget } from '../../target/__mocks__/target.ts';
import { Constants } from '../../constants.ts';
import { ModuleUtilities } from '../../../utils/modules.ts';
import { TestPluginBase } from '../__mocks__/plugin.ts';

@Plugin.decorate('architect.glassway.net/foobar')
class TestPlugin extends TestPluginBase {}

class TestPlugin2 extends TestPluginBase {}

class TestPluginWrongType extends TestPluginBase {}
Reflect.defineMetadata(Constants.TYPE_META_KEY, 'foobar', TestPluginWrongType);

let app: MockArchitect;
let plugin: TestPlugin;

Deno.test.beforeEach(() => {
  app = new MockArchitect();
  plugin = new TestPlugin(app);
});

Deno.test('getters function', () => {
  assert.assertStrictEquals(plugin.parent, app);
  assert.assertStrictEquals(plugin.targets['foobar'], MockTarget);
});

Deno.test('decorate sets metadata', () => {
  Plugin.decorate('architect.glassway.net/foobar2')(TestPlugin2);
  assert.assertEquals(Reflect.getMetadata(Constants.TYPE_META_KEY, TestPlugin2), 'plugin');
  assert.assertEquals(Reflect.getMetadata(Constants.CLASS_META_KEY, TestPlugin2), 'architect.glassway.net/foobar2');
});

Deno.test('collectClasses filters by plugin', async () => {
  stub(ModuleUtilities, 'collectClasses', (m, ma) => Object.values(m).filter(p => ma(p as Constructor<unknown>)) as Constructor<unknown>[]);
  const result = await Plugin.collect({
    // @ts-ignore: test
    test1: 'blah',
    test2: TestPlugin,
    test3: TestPluginWrongType,
  });

  assert.assertEquals(result, [TestPlugin]);
});
