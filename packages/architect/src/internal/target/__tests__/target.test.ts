// SPDX-FileCopyrightText: 2026 Vertex X7-53
//
// SPDX-License-Identifier: GPL-3.0-or-later

import * as assert from '@std/assert';
import { stub } from '@std/testing/mock';
import * as logtape from '@logtape/logtape';

import { Target } from '../target.ts';
import { MockProject } from '../../project/__mocks__/project.ts';
import { MockArchitect } from '../../../__mocks__/app.ts';
import { architectGlasswayNet } from '../../../kubernetes/crds/index.ts';
import { DependencyGraph } from '../../graph/index.ts';
import { MockDependencyGraph } from '../../graph/__mocks__/index.ts';
import { MockCompileListener } from '../__mocks__/progress.ts';
import { MockComponent } from '../../component/__mocks__/component.ts';
import { BuildPhase } from '../progress.ts';
import { Capability, Component, VirtualCapability } from '../../component/index.ts';
import { ContextUtils } from '../../../utils/index.ts';

let app: MockArchitect;
let project: MockProject;
let target: Target;
let listener: MockCompileListener;
let graph: MockDependencyGraph;
let logger: logtape.Logger;

@Component.decorate({ class: 'architect.glassway.net/test' })
class TestComponent extends Component {}

class TestCapability extends Capability<unknown> {}

const model = new architectGlasswayNet.v1alpha1.Target({
  metadata: {
    name: 'foobar'
  },
  spec: {
    capabilities: [{
      class: 'architect.glassway.net/test-capability',
      options: { option: 'blah' }
    }],
    components: [
      {
        class: 'architect.glassway.net/test'
      },
      {
        class: 'architect.glassway.net/missing-component'
      }
    ]
  }
});

Deno.test.beforeEach(() => {
  app = new MockArchitect();
  project = new MockProject(app);
  target = new Target(model, undefined, project);
  listener = new MockCompileListener();
  graph = new MockDependencyGraph(target);
  logger = logtape.getLogger(['test']);
});

Deno.test('getters work', () => {
  assert.assertEquals(target.app, app);
  assert.assertEquals(target.model, model);
  assert.assertEquals(target.params, {});
  assert.assertEquals(target.project, project);
  assert.assertEquals(target.components.length(), 0);
  assert.assertEquals(target.toString(), model.metadata.name);
  assert.assertEquals(target.getIntrospection(), undefined);
});

Deno.test('resolve resolves', async () => {
  using resolve = stub(DependencyGraph, 'resolve', async (_r) => graph);
  const result = await target.resolve();
  assert.assertEquals(resolve.calls.length, 1);
  assert.assertEquals(result, graph);
});

Deno.test('compile compiles', async () => {
  using _phaseChange = stub(listener, 'onPhaseChange');
  const component = new MockComponent();

  const component2 = new MockComponent({ name: 'real-error' });
  component2._result = () => {
    throw new Error('real error');
  };

  const component3 = new MockComponent({ name: 'not-error' });
  component3._result = () => {
    throw 'not an Error';
  };

  graph.components[component.rid] = {
    component: component,
    dependencies: [],
    errors: []
  };

  graph.components[component2.rid] = {
    component: component2,
    dependencies: [],
    errors: []
  };

  graph.components[component3.rid] = {
    component: component3,
    dependencies: [],
    errors: []
  };

  using _resolve = stub(DependencyGraph, 'resolve', async (_r) => graph);
  const result = await target.compile({}, logger, listener);
  assert.assert(result);
  assert.assertEquals(result.components[component.rid], { foo: 'result' });
  assert.assertEquals(result.graph.components[component2.rid].errors[0].message, 'build exception thrown: real error');
  assert.assertEquals(result.graph.components[component3.rid].errors[0].message, 'build exception thrown: Unknown exception');

  assert.assertEquals(_phaseChange.calls.length, 3);
  assert.assertEquals(_phaseChange.calls[0].args[0], BuildPhase.Resolve);
  assert.assertEquals(_phaseChange.calls[1].args[0], BuildPhase.Build);
  assert.assertEquals(_phaseChange.calls[2].args[0], BuildPhase.Validate);

  await target.apply(result, {}, logger, listener);
  assert.assertEquals(_phaseChange.calls.length, 4);
  assert.assertEquals(_phaseChange.calls[3].args[0], BuildPhase.Apply);
});

Deno.test('compile without validation', async () => {
  using _phaseChange = stub(listener, 'onPhaseChange');
  using _resolve = stub(DependencyGraph, 'resolve', async (_r) => graph);
  const result = await target.compile({
    validate: false
  }, logger, listener);
  assert.assert(result);

  assert.assertEquals(_phaseChange.calls.length, 2);
  assert.assertEquals(_phaseChange.calls[0].args[0], BuildPhase.Resolve);
  assert.assertEquals(_phaseChange.calls[1].args[0], BuildPhase.Build);
});

Deno.test('compile with validate only', async () => {
  using _phaseChange = stub(listener, 'onPhaseChange');
  using _resolve = stub(DependencyGraph, 'resolve', async (_r) => graph);
  const result = await target.compile({
    validateOnly: true
  }, logger, listener);
  assert.assertFalse(result);

  assert.assertEquals(_phaseChange.calls.length, 2);
  assert.assertEquals(_phaseChange.calls[0].args[0], BuildPhase.Resolve);
  assert.assertEquals(_phaseChange.calls[1].args[0], BuildPhase.Validate);
});

Deno.test('register registers component', () => {
  using register = stub(target.components, 'register');
  const context = { name: 'foo' };
  target.register(TestComponent, new TestComponent(target, context), context);
  assert.assertEquals(register.calls.length, 1);
});

Deno.test('component gets component already exists',  async () => {
  const component = new TestComponent(target, { name: 'foo' });
  using request = stub(target.components, 'request', (_token, _context) => component);
  const result = target.component(TestComponent)!;
  assert.assertEquals(result, component);
  assert.assertEquals(request.calls.length, 1);

  assert.assertFalse(await component.props.enable.$resolve());
  target.enable(TestComponent);
  assert.assert(await component.props.enable.$resolve());
});

Deno.test('component gets component not existing with auto', () => {
  using request = stub(target.components, 'request', (_token, _context) => undefined);
  using register = stub(target.components, 'register');
  const result = target.component(TestComponent, {}, true)!;

  assert.assertEquals(result.constructor, TestComponent);
  assert.assertEquals(request.calls.length, 1);
  assert.assertEquals(register.calls.length, 1);
});

Deno.test('component gets component not existing without auto', () => {
  using request = stub(target.components, 'request', (_token, _context) => undefined);
  using register = stub(target.components, 'register');
  const result = target.component(TestComponent, {}, false)!;

  assert.assertFalse(result);
  assert.assertEquals(request.calls.length, 1);
  assert.assertEquals(register.calls.length, 0);
});

Deno.test('declare adds capability', () => {
  const capability = new TestCapability();
  target.declare(capability);
  assert.assertEquals(target.capabilities, [capability]);
});

Deno.test('defaultContext calls ContextUtils', () => {
  using defaultContext = stub(ContextUtils, 'defaultContext');
  target.defaultContext(TestComponent, { name: 'foo' }, true);
  assert.assertStrictEquals(defaultContext.calls.length, 1);
});

Deno.test('init registers all defined components and capabilities', async () => {
  using request = stub(target.components, 'request', (_token, _context) => undefined);
  using register = stub(target.components, 'register');
  using _getComponent = stub(target.project, 'getComponent', async (clazz, _recursive) => {
    return (clazz === 'architect.glassway.net/test') ? TestComponent : undefined;
  });

  await target.init();

  assert.assertEquals(request.calls.length, 1);
  assert.assertEquals(register.calls.length, 1);
  assert.assertEquals(request.calls[0].args[0], TestComponent);
  assert.assertEquals(register.calls[0].args[0], TestComponent);

  const virtual = target.capabilities[0] as VirtualCapability;
  assert.assertEquals(virtual.clazz, 'architect.glassway.net/test-capability');
  assert.assertEquals(virtual.data, { option: 'blah' });
});

Deno.test('init with empty works', async () => {
  target.model.spec.components = undefined;
  target.model.spec.capabilities = undefined;
  await target.init();
});