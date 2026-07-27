import * as assert from '@std/assert';
import { stub, spy, assertSpyCalls } from '@std/testing/mock';

import { MockArchitect } from '../../../__mocks__/app.ts';
import { MockProject } from '../../project/__mocks__/project.ts';
import { MockTarget } from '../../target/__mocks__/target.ts';
import { ConfigurationContext } from '../configuration.ts';
import { ComponentArgs } from '../arguments.ts';
import { Lazy } from '../../../utils/index.ts';
import { Component } from '../component.ts';

let app: MockArchitect;
let project: MockProject;
let target: MockTarget;
let context: ConfigurationContext;
let component: TestComponent;

const ctx = { name: 'blah3' };
const props = { foo: 'blah' } as ComponentArgs;
const args: ComponentArgs = {
  enable: true
}

class TestComponent extends Component {}

Deno.test.beforeEach(() => {
  app = new MockArchitect();
  project = new MockProject(app);
  target = new MockTarget(undefined, undefined, project);
  context = new ConfigurationContext(target, Lazy.from(args));
  component = new TestComponent(target, ctx, props);
});

Deno.test('component returns target component args', async () => {
  using componentStub = stub(target, 'component', (_class, _context, _enable) => new TestComponent(target, ctx, props));
  const args = context.component(TestComponent)!;
  assert.assertStrictEquals(componentStub.calls[0].args[0], TestComponent);
  assert.assertEquals(await args.$resolve(), props);
});

Deno.test('enable calls enable', async () => {
  using enableStub = stub(target, 'enable');
  context.enable(TestComponent);
  assert.assertStrictEquals(enableStub.calls[0].args[0], TestComponent);
});

Deno.test('set calls set', async () => {
  using componentStub = stub(context, 'component', (_class, _context) => component.props);
  context.set(TestComponent, Lazy.from({etc: 'blah'} as ComponentArgs));
  assert.assertStrictEquals(componentStub.calls[0].args[0], TestComponent);
  assert.assertEquals(await component.props.$resolve(), { foo: 'blah', etc: 'blah' } as ComponentArgs);
});

Deno.test('mkIf calls configurator', () => {
  const configurator = spy((_context: ConfigurationContext) => {});
  context.mkIf(Lazy.from(true), configurator);
  assertSpyCalls(configurator, 1);
});
