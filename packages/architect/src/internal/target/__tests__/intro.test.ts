// SPDX-FileCopyrightText: 2026 Vertex X7-53
//
// SPDX-License-Identifier: GPL-3.0-or-later

import * as assert from '@std/assert';
import { TargetIntrospection } from '../intro.ts';

interface TestState {
  foo: 'bar' | 'barfoo'
}

class TestIntrospection extends TargetIntrospection<TestState> {
  protected override async loadState(): Promise<TestState> {
    return { foo: 'bar' };
  }
}

Deno.test('loads state', async () => {
  const intro = new TestIntrospection();
  assert.assertEquals(await intro.getState(), { foo: 'bar' });
});

Deno.test('gets and sets state', async () => {
  const intro = new TestIntrospection();
  intro.setState({ foo: 'barfoo' });
  assert.assertEquals(await intro.getState(), { foo: 'barfoo' });
});
