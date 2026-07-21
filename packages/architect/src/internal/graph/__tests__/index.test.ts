import * as assert from '@std/assert';
import * as logtape from '@logtape/logtape';

import { MockArchitect } from '../../../__mocks__/app.ts';
import { MockTarget } from '../../target/__mocks__/target.ts';
import { MockProject } from '../../project/__mocks__/project.ts';
import { MockComponent } from '../../component/__mocks__/component.ts';
import {
  Capability,
  CapabilityMatcher,
  Component,
  ComponentInstanceMatcher,
  type IComponentMatcher
} from '../../component/index.ts';
import { DependencyGraph } from '../index.ts';
import { Architect, ValidationError, ValidationErrorLevel } from '../../../index.ts';

let app: MockArchitect;
let project: MockProject;
let target: MockTarget;

@Component.decorate({
  class: 'architect.glassway.net/test-dependent-succeeds',
})
class TestDependent extends MockComponent {
  public matcher: IComponentMatcher;
  constructor(matcher: IComponentMatcher) {
    super({ name: 'dependent' });
    this.matcher = matcher;
  }

  override async getRequirements(): Promise<IComponentMatcher[]> {
    return [this.matcher]
  }
}

@Architect.class("capability.architect.glassway.net/test")
class TestCapability extends Capability<unknown> {}

Deno.test.beforeEach(() => {
  app = new MockArchitect();
  project = new MockProject(app);
  target = new MockTarget(undefined, undefined, project);
});

Deno.test('satisfies dependencies', async () => {
  const dependency = new MockComponent({ name: 'dependency' });
  const dependent = new TestDependent(new ComponentInstanceMatcher(dependency));
  const graph = await DependencyGraph.resolve(target, [dependent, dependency]);

  assert.assertEquals(graph.valid, true);
  assert.assertEquals(graph.errors.length, 0);
});

Deno.test('fails to satisfy dependencies', async () => {
  const dependency = new MockComponent({ name: 'dependency' });
  const dependent = new TestDependent(new ComponentInstanceMatcher(dependency));
  const graph = await DependencyGraph.resolve(target, [dependent]);

  assert.assertEquals(graph.valid, false);
  assert.assertEquals(graph.errors.length, 1);
  assert.assertEquals(graph.errors[0].message, 'failed to satisfy dependency on ComponentInstance("dependency-b475d49")');
  assert.assertEquals(graph.errors[0].level, ValidationErrorLevel.ERROR);
  assert.assertEquals(graph.errors[0].subject, 'dependent');
});

Deno.test('satisfies capability matcher if target declares capability', async () => {
  const target2 = new MockTarget(undefined, undefined, project);
  target2.capabilities.push(new TestCapability());
  const dependent = new TestDependent(new CapabilityMatcher(TestCapability));
  const graph = await DependencyGraph.resolve(target2, [dependent]);
  assert.assertEquals(graph.valid, true);
  assert.assertEquals(graph.errors.length, 0);
});

Deno.test('does not satisfy capability matcher if target does not declares capability', async () => {
  const dependent = new TestDependent(new CapabilityMatcher(TestCapability));
  const graph = await DependencyGraph.resolve(target, [dependent]);
  assert.assertEquals(graph.valid, false);
  assert.assertEquals(graph.errors.length, 1);
});

Deno.test('target returns target', async () => {
  const graph = await DependencyGraph.resolve(target, []);
  assert.assertEquals(graph.target, target);
});

Deno.test('no errors assert correctly in logger', async () => {
  const logger = logtape.getLogger(['test']);

  const warning = new ValidationError('dummy warning', ValidationErrorLevel.WARNING, 'warning');
  const info = new ValidationError('dummy info', ValidationErrorLevel.INFO, 'info');
  const graph = await DependencyGraph.resolve(target, []);
  graph.addErrors(warning, info);

  const valid = graph.assertValid(logger);
  assert.assertEquals(valid, true);
});


Deno.test('errors assert correctly in logger', async () => {
  const logger = logtape.getLogger(['test']);

  const graph = await DependencyGraph.resolve(target, []);
  const error = new ValidationError('dummy error', ValidationErrorLevel.ERROR, 'error');
  const warning = new ValidationError('dummy warning', ValidationErrorLevel.WARNING, 'warning');
  const info = new ValidationError('dummy info', ValidationErrorLevel.INFO, 'info');
  graph.addErrors(error, warning, info);

  const valid = graph.assertValid(logger);
  assert.assertEquals(valid, false);
});
