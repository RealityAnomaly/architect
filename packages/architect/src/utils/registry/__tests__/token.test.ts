// SPDX-FileCopyrightText: 2026 Vertex X7-53
//
// SPDX-License-Identifier: GPL-3.0-or-later

import * as assert from '@std/assert';
import { TokenRegistry } from '../token.ts';
import { Architect } from '../../../app.ts';

@Architect.class('architect.glassway.net/foobar')
class TestClass {}

let registry: TokenRegistry<TestClass>;

Deno.test.beforeEach(() => {
  registry = new TokenRegistry();
});

Deno.test('registers and returns instance', () => {
  assert.assertStrictEquals(registry.length(), 0);
  assert.assertFalse(registry.request(TestClass));

  const instance = new TestClass();
  registry.register(TestClass, instance);
  assert.assertStrictEquals(registry.length(), 1);
  assert.assertStrictEquals(registry.request(TestClass), instance);
});

Deno.test('duplicate registration throws', () => {
  registry.register(TestClass, new TestClass());
  assert.assertThrows(() => {
    registry.register(TestClass, new TestClass());
  }, Error, 'foobar-749a534c51fc939c1142fde4ca0d700426244e5d already exists in this TokenRegistry');
});
