// SPDX-FileCopyrightText: 2026 Vertex X7-53
//
// SPDX-License-Identifier: GPL-3.0-or-later

import * as assert from '@std/assert';
import { ContextUtils } from '../context.ts';
import { Architect } from '../../../app.ts';

@Architect.class('architect.glassway.net/test')
class TestClass {}

Deno.test('defaultContext returns context', () => {
  assert.assertEquals(ContextUtils.defaultContext(TestClass, undefined, false), { name: 'test' });
  assert.assertEquals(ContextUtils.defaultContext(TestClass, { name: 'foo' }, false), { name: 'foo' });
  assert.assertEquals(ContextUtils.defaultContext(TestClass, { name: 'foo' }, true), { name: 'test' });
});
