// SPDX-FileCopyrightText: 2026 Vertex X7-53
//
// SPDX-License-Identifier: GPL-3.0-or-later

import * as assert from '@std/assert';
import { stub } from "@std/testing/mock";

import { MockTarget } from '../../target/__mocks__/target.ts';
import { MockArchitect } from '../../../__mocks__/app.ts';
import { PluginRegistry } from '../registry.ts';
import { Plugin } from '../plugin.ts';
import { TestPluginBase } from '../__mocks__/plugin.ts';

let app: MockArchitect;
let registry: PluginRegistry;

@Plugin.decorate('architect.glassway.net/foobar')
class TestPlugin extends TestPluginBase {}

Deno.test.beforeEach(() => {
  app = new MockArchitect();
  registry = new PluginRegistry();
  registry.register(TestPlugin, app);
});

Deno.test('register constructs plugin', () => {
  const instance = registry.get('architect.glassway.net/foobar');
  assert.assertEquals(instance.parent, app);
});

Deno.test('init called', async () => {
  const instance = registry.get('architect.glassway.net/foobar');
  using init = stub(instance, 'init');
  await registry.init();
  assert.assertEquals(init.calls.length, 1);
});

Deno.test('targetMap returns all target types', () => {
  assert.assertEquals(registry.targetMap['foobar'], MockTarget);
});
