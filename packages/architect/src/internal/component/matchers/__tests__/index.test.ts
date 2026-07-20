import * as assert from '@std/assert';
import { ComponentMatcher } from '../index.ts';
import { ComponentModel } from '../../model.ts';
import { Component } from '../../component.ts';
import { Context } from '../../../../utils/index.ts';
import { MockArchitect } from '../../../../__mocks__/app.ts';
import { MockProject } from '../../../project/__mocks__/project.ts';
import { MockTarget } from '../../../target/__mocks__/target.ts';

let matcher: ComponentMatcher;

const model1: ComponentModel = {
  class: 'architect.glassway.net/test-component1',
};

const model2: ComponentModel = {
  class: 'architect.glassway.net/test-component2',
};

let context: Context;
let app: MockArchitect;
let project: MockProject;
let target: MockTarget;

@Component.decorate(model1)
class TestComponent extends Component {}

@Component.decorate(model2)
class TestComponentInvalid extends Component {}

Deno.test.beforeEach(() => {
  context = { name: 'foobar' };
  app = new MockArchitect();
  project = new MockProject(app);
  target = new MockTarget(undefined, undefined, project);
  matcher = new ComponentMatcher(TestComponent);
});

Deno.test('component matches', () => {
  const instance = new TestComponent(target, context);
  assert.assert(matcher.match(instance))
});

Deno.test('component does not match', () => {
  const instance = new TestComponentInvalid(target, context);
  assert.assertFalse(matcher.match(instance))
});

Deno.test('toString returns', () => {
  assert.assertEquals(matcher.toString(), 'Component("architect.glassway.net/test-component1")')
});
