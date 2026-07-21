// noinspection SpellCheckingInspection

import * as assert from '@std/assert';
import { stub } from "@std/testing/mock";
import { Component, ComponentClass } from '../component.ts';
import { MockTarget } from '../../target/__mocks__/target.ts';
import { Context, DeepPartial } from '../../../utils/index.ts';
import { MockProject } from '../../project/__mocks__/project.ts';
import { MockArchitect } from '../../../__mocks__/app.ts';
import { ComponentModel } from '../model.ts';
import { ComponentInstanceMatcher } from '../matchers/index.ts';
import { ConfigurationContext } from '../configuration.ts';
import { ComponentUpgradeState } from '../updater/index.ts';
import { ComponentArgs } from '../arguments.ts';

let context: Context;
let app: MockArchitect;
let project: MockProject;
let target: MockTarget;
let component: TestComponent;
let parent: TestComponentParent;
let child: TestComponent;

const model: ComponentModel = {
  class: 'architect.glassway.net/test-component',
  context: {'foo': 'foobar'},
  inputs: {
    'foo': {}
  }
};

const parentModel: ComponentModel = {
  class: 'architect.glassway.net/test-component-parent',
  context: {'foo': 'foobar'},
  inputs: {
    'foo': {}
  }
};

const buildResult = {'foo2': 'bar2'};

@Component.decorate(model)
class TestComponent extends Component {}

class TestComponentInvalid extends Component {}

@Component.decorate(parentModel)
class TestComponentParent extends Component {
  public testInit(independent: boolean) {
    this.addChild(TestComponent, independent);
  }

  public testLocalRef(name: string | undefined) {
    return this.localRef(TestComponent, name);
  }

  public testLocalRefInvalid() {
    return this.localRef(TestComponentInvalid);
  }

  public testSetDefaults(defaults: DeepPartial<ComponentArgs>) {
    this.setDefaults(defaults);
  }
}

Deno.test.beforeEach(() => {
  context = { name: 'foobar' };
  app = new MockArchitect();
  project = new MockProject(app);
  target = new MockTarget(undefined, undefined, project);

  component = new TestComponent(target, context);
  parent = new TestComponentParent(target, context);
  child = new TestComponent(target, context, undefined, parent);
});

Deno.test('context returns context', () => {
  assert.assertStrictEquals(component.context, context);
});

Deno.test('target returns target', () => {
  assert.assertStrictEquals(component.target, target);
});

Deno.test('name returns context name', () => {
  assert.assertStrictEquals(component.name, context.name);
});

Deno.test('parent returns parent', () => {
  assert.assertStrictEquals(child.parent, parent);
});

Deno.test('children includes child', () => {
  assert.assert(parent.children.includes(child));
});

Deno.test('independent set', () => {
  assert.assert(parent.independent);
});

Deno.test('capabilities returns empty', () => {
  assert.assertEquals(component.capabilities, []);
});

Deno.test('clazz returns class', () => {
  assert.assertEquals(component.clazz, component.model.class);
});

Deno.test('meta returns metadata and validates', () => {
  assert.assertStrictEquals(component.meta.model, model);
  assert.assertStrictEquals(component.meta.target, undefined);
});

Deno.test('model returns model', () => {
  assert.assertStrictEquals(component.model, model);
});

Deno.test('model returns parent model if parent set', () => {
  assert.assertStrictEquals(child.model, parentModel);
});

Deno.test('model returns own model if independent', () => {
  component.setParent(parent);
  assert.assertStrictEquals(component.model, model);
});

Deno.test('props returns props', async () => {
  assert.assertEquals(await component.props.$resolve(), {});
});

Deno.test('rid returns vaid rid', () => {
  assert.assertEquals(component.rid, 'foobar-749a534');
});

Deno.test('rid static returns valid rid', () => {
  const rid = Component.rid('foobar2', {'blah': 'foo'});
  assert.assertEquals(rid, 'foobar2-b475d49');
});

Deno.test('decorate returns valid function', () => {
  assert.assert(typeof Component.decorate(model) === 'function');
});

Deno.test('setParent sets the parent', () => {
  component.setParent(parent);
  assert.assertStrictEquals(component.parent, parent);
});

Deno.test('getRequirements returns nothing', async () => {
  const requirements = await component.getRequirements();
  assert.assertEquals(requirements, []);
});

Deno.test('getRequirements returns parent instance matcher if parent set', async () => {
  const requirements = await child.getRequirements();
  const matcher = requirements[0] as ComponentInstanceMatcher;
  assert.assertStrictEquals(matcher.instance, parent);
});

Deno.test('build calls build on parent', async () => {
  parent.children.push(child);
  using buildStub = stub(child, 'build', async (_result?) => { return buildResult; });
  const result = await parent.build({'blah': 'blah2'});
  assert.assertEquals(result, buildResult);
  assert.assertStrictEquals(buildStub.calls.length, 1);
});

Deno.test('build does not call build on parent if independent', async () => {
  parent.children.push(component);
  component.setParent(component);
  using buildStub = stub(component, 'build', async (_result?) => { return buildResult; });
  const result = await parent.build({'blah': 'blah2'});
  assert.assertEquals(result, {'blah': 'blah2'});
  assert.assertStrictEquals(buildStub.calls.length, 0);
});

Deno.test('configure calls configure on parent', () => {
  parent.children.push(child);
  using configureStub = stub(child, 'configure');
  const context = new ConfigurationContext(target, parent.props);
  parent.configure(context);
  assert.assertStrictEquals(configureStub.calls.length, 1);
});

Deno.test('configure does not call configure on parent if independent', () => {
  parent.children.push(component);
  component.setParent(component);
  using configureStub = stub(component, 'configure');
  const context = new ConfigurationContext(target, parent.props);
  parent.configure(context);
  assert.assertStrictEquals(configureStub.calls.length, 0);
});

Deno.test('init succeeds', () => {
  component.init();
});

Deno.test('postBuild returns data', async () => {
  const result = await component.postBuild(buildResult);
  assert.assertEquals(result, buildResult);
});

Deno.test('upgrade returns false', async () => {
  const state: ComponentUpgradeState = {
    clazz: component.constructor as ComponentClass,
    meta: component.meta,
    model: component.meta.model!,
    file: {
      path: 'foo',
      dirty: false,
      model: {}
    },
  };

  assert.assertFalse(await component.upgrade(state));
});

Deno.test('toString returns name', () => {
  assert.assertEquals(component.toString(), 'Component foobar');
});

Deno.test('addChild constructs and adds child', () => {
  using enableStub = stub(target, 'enable');
  using registerStub = stub(target, 'register');

  parent.testInit(false);
  const child2 = parent.children[0] as TestComponent;
  assert.assertStrictEquals(child2.parent, parent);
  assert.assertStrictEquals(child2.independent, false);

  assert.assertStrictEquals(enableStub.calls.length, 0);
  assert.assertStrictEquals(registerStub.calls.length, 0);
});

Deno.test('addChild constructs and adds independent child', () => {
  using enableStub = stub(target, 'enable');
  using registerStub = stub(target, 'register');

  parent.testInit(true);
  const child2 = parent.children[0] as TestComponent;
  assert.assertStrictEquals(child2.parent, parent);
  assert.assertEquals(child2.independent, true);

  // target enable and register called
  assert.assertStrictEquals(enableStub.calls[0].args[0], TestComponent);
  assert.assertStrictEquals(registerStub.calls[0].args[0], TestComponent);
  assert.assertStrictEquals(registerStub.calls[0].args[1], child2);
  assert.assertEquals(registerStub.calls[0].args[2], child2.context);
});

Deno.test('localRef succeeds', () => {
  const context = parent.testLocalRef('foobar2');
  assert.assertEquals(context.name, 'foobar2');
});

Deno.test('localRef defaults without name', () => {
  const context = parent.testLocalRef(undefined);
  assert.assertEquals(context.name, 'test-component');
});

Deno.test('localRef throws if unable to resolve name', () => {
  assert.assertThrows(() => {
    parent.testLocalRefInvalid();
  });
});

Deno.test('setDefaults sets fallback', () => {
  const defaults: ComponentArgs = { enable: true };
  parent.testSetDefaults(defaults);
  assert.assertStrictEquals(parent.props.$__fallback__, defaults);
});
