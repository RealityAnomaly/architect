import * as assert from '@std/assert';
import { CapabilityMatcher } from '../capability.ts';
import { MockComponent } from '../../__mocks__/component.ts';
import { Architect } from '../../../../app.ts';
import { Capability } from '../../capability.ts';

@Architect.class('capability.architect.glassway.net/test-capability-good')
class GoodCapability extends Capability<unknown> {}

@Architect.class('capability.architect.glassway.net/test-capability-bad')
class BadCapability extends Capability<unknown> {}

let component: MockComponent;

Deno.test.beforeEach(() => {
  component = new MockComponent();
});

Deno.test('component matches', () => {
  const capability = new GoodCapability();
  const matcher = new CapabilityMatcher(GoodCapability);
  component._capabilities.push(capability);
  assert.assert(matcher.match(component));
});

Deno.test('component does not match', () => {
  const capability = new BadCapability();
  const matcher = new CapabilityMatcher(GoodCapability);
  component._capabilities.push(capability);
  assert.assertFalse(matcher.match(component));
});

Deno.test('component matches with condition', () => {
  const capability = new GoodCapability('foobar');
  const matcher = new CapabilityMatcher(GoodCapability, (c) => c.data === 'foobar');
  component._capabilities.push(capability);
  assert.assert(matcher.match(component));
});

Deno.test('component does not match without condition', () => {
  const capability = new GoodCapability('barfoo');
  const matcher = new CapabilityMatcher(GoodCapability, (c) => c.data === 'foobar');
  component._capabilities.push(capability);
  assert.assertFalse(matcher.match(component));
});

Deno.test('toString returns', () => {
  const matcher = new CapabilityMatcher(GoodCapability);
  assert.assertEquals(matcher.toString(), 'Capability("capability.architect.glassway.net/test-capability-good")')
});
