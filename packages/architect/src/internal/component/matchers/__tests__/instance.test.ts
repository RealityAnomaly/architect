import * as assert from '@std/assert';
import { MockComponent } from '../../__mocks__/component.ts';
import { ComponentInstanceMatcher } from '../instance.ts';

let component: MockComponent;
let matcher: ComponentInstanceMatcher;

Deno.test.beforeEach(() => {
  component = new MockComponent();
  matcher = new ComponentInstanceMatcher(component);
});

Deno.test('component matches', () => {
  assert.assert(matcher.match(component))
});

Deno.test('component does not match', () => {
  const component2 = new MockComponent();
  assert.assertFalse(matcher.match(component2))
});

Deno.test('toString returns', () => {
  assert.assertEquals(matcher.toString(), 'ComponentInstance("blah123-b475d49")')
});
