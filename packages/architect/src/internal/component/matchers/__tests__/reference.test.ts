// SPDX-FileCopyrightText: 2026 Vertex X7-53
//
// SPDX-License-Identifier: GPL-3.0-or-later

import * as assert from '@std/assert';
import { ComponentReferenceMatcher } from '../reference.ts';
import { ComponentReference } from '../../types.ts';
import { MockComponent } from '../../__mocks__/component.ts';

let ref: ComponentReference<unknown>;
let component: MockComponent;
let matcher: ComponentReferenceMatcher<unknown>;

Deno.test.beforeEach(() => {
  ref = { name: 'foobar3' };
  matcher = new ComponentReferenceMatcher(ref);
  component = new MockComponent();
});

Deno.test('component matches', () => {
  component._context = ref;
  assert.assert(matcher.match(component))
});

Deno.test('component does not match', () => {
  component._context = { name: 'blahfoo3' };
  assert.assertFalse(matcher.match(component))
});

Deno.test('toString returns', () => {
  assert.assertEquals(matcher.toString(), 'ComponentReference({"name":"foobar3"})')
});
