// SPDX-FileCopyrightText: 2026 Vertex X7-53
//
// SPDX-License-Identifier: GPL-3.0-or-later

import * as assert from '@std/assert';
import { Capability, VirtualCapability } from '../capability.ts';
import { Architect } from '../../../app.ts';

@Architect.class('capability.architect.glassway.net/test-capability')
class TestCapability extends Capability<unknown> {}

Deno.test('reflection', () => {
  const capability = new TestCapability();
  assert.assertEquals(capability.clazz, 'capability.architect.glassway.net/test-capability');
});

Deno.test('virtual capability', async (t) => {
  const capability = new VirtualCapability('foobar',  { foo3: 'bar' });
  await t.step('clazz returns class', () => {
    assert.assertEquals(capability.clazz, 'foobar');
  });
});
