import { stub, returnsNext } from '@std/testing/mock';
import * as assert from '@std/assert';
import * as yaml from '@std/yaml';

import { MockArchitect } from '../../../__mocks__/app.ts';
import { Project } from '../index.ts';
import { ProjectConfig, ProjectConfigLoader } from '../config.ts';
import { ProjectUtils } from '../utils.ts';
import { Constants } from '../../constants.ts';
import { TargetLoader } from '../../target/index.ts';
import { MockTarget } from '../../target/__mocks__/target.ts';
import { MockPlugin } from '../../plugin/__mocks__/plugin.ts';
import { PluginClass } from '../../plugin/plugin.ts';
import { Component, ComponentClass, ComponentLoader } from '../../component/index.ts';
import { assertEquals } from '../../../vendor/progress/deps.test.ts';

const model: ProjectConfig = { name: 'dependent' }

@Project.decorate({ name: 'dependency' })
class TestProjectDependency extends Project {
  public static loadCalled: boolean = false;

  protected override async configure(): Promise<void> {
    this.addModules({ foo: 'bar' });
  }

  public override async load(topLevel: boolean = false): Promise<void> {
    TestProjectDependency.loadCalled = true;
    return super.load(topLevel);
  }
}

@Project.decorate(model)
class TestProject extends Project {
  protected override async configure(): Promise<void> {
    await super.configure();
    this.addImports(TestProjectDependency);
    this.addModules({ foo: 'bar' });
    this.addPlugins(MockPlugin as unknown as PluginClass);
  }
}

@Project.decorate({ name: 'self-referential' })
class SelfRefProject extends Project {
  protected override async configure(): Promise<void> {
    this.addImports(SelfRefProject);
  }
}

class ToDecorateProject extends Project {}
class ToDecorateProject2 extends Project {}
@Component.decorate({ class: 'foobar' })
class DummyComponent1 extends Component {}
class DummyComponent2 extends Component {}

let app: MockArchitect;
let project: TestProject;

Deno.test.beforeEach(() => {
  app = new MockArchitect();
  project = new TestProject(app);
});

Deno.test('getters', () => {
  assert.assertEquals(project.app, app);
  assert.assertEquals(project.config.name, 'dependent');
});

Deno.test('decorate', () => {
  Project.decorate({ name: 'foobar' })(ToDecorateProject);
  assert.assertEquals(Reflect.getMetadata(Constants.TYPE_META_KEY, ToDecorateProject), 'project');
  assert.assertEquals(Reflect.getMetadata(Constants.MODEL_META_KEY, ToDecorateProject), { name: 'foobar' });
  assert.assertEquals(Reflect.getMetadata(Constants.CLASS_META_KEY, ToDecorateProject), 'foobar');
});

Deno.test('decorate yaml', () => {
  Project.decorateYaml(yaml.stringify({ name: 'foobar' }))(ToDecorateProject2);
  assert.assertEquals(Reflect.getMetadata(Constants.TYPE_META_KEY, ToDecorateProject2), 'project');
  assert.assertEquals(Reflect.getMetadata(Constants.MODEL_META_KEY, ToDecorateProject2), { name: 'foobar' });
  assert.assertEquals(Reflect.getMetadata(Constants.CLASS_META_KEY, ToDecorateProject2), 'foobar');
});

Deno.test('loads, registers imports, and saves', async () => {
  using _getCwd = stub(Deno, 'cwd', () => '/foo/bar');
  using _findProjectRoot = stub(ProjectUtils, 'findProjectRoot', async (p) => p);
  await project.load(true);
  assert.assertEquals(project.getRoot(), '/foo/bar');
  assert.assert(TestProjectDependency.loadCalled);

  // does not call again if loaded
  await project.load(true);

  // loads targets
  using _loader = stub(TargetLoader, 'collectFolder', async (_project, _plugins, _loader, _input, _logger) => [
    new MockTarget(undefined, undefined, _project)
  ]);

  const targets = await project.getTargets();
  assert.assertEquals(targets.length, 1);
  assert.assertEquals(targets[0].toString(), 'foobar');
  assert.assertEquals(_loader.calls.length, 1);

  const target = await project.getTarget('foobar');
  assert.assertEquals(target!.toString(), 'foobar');
  const target2 = await project.getTarget('barfoo');
  assert.assertFalse(target2);

  // reads components recursively
  // note: the first component is a surrogate for the core component
  const rtn = returnsNext([DummyComponent1, DummyComponent1, DummyComponent2]);
  using _fromModule = stub(ComponentLoader, 'fromModule', async (_m) => [rtn() as ComponentClass]);
  const components = await project.getComponents(true);
  assert.assertEquals(_fromModule.calls.length, 3);
  assert.assertEquals(components, [DummyComponent1, DummyComponent1, DummyComponent2]);

  // saves config
  using save = stub(ProjectConfigLoader, 'save');
  await project.saveConfig();

  assert.assertEquals(save.calls.length, 1);
  assert.assertEquals(save.calls[0].args[0], '/foo/bar/architect.yaml');
  assert.assertEquals(save.calls[0].args[1], project.config);
});

Deno.test('throws for self-referential import', async () => {
  const selfRef = new SelfRefProject(app);
  assert.assertRejects(async () => {
    await selfRef.load();
  }, Error, 'Project SelfRefProject is self-referential');
});

Deno.test('unable to find project root', async () => {
  using _getCwd = stub(Deno, 'cwd', () => '/foo/bar');
  using _findProjectRoot = stub(ProjectUtils, 'findProjectRoot', async (_p) => undefined);

  await project.load(true);
  assert.assertThrows(() => {
    project.getRoot();
  }, Error, 'Project is not writable');

  const targets = await project.getTargets();
  assert.assertEquals(targets, []);
});

Deno.test('returns components', async () => {
  using _fromModule = stub(ComponentLoader, 'fromModule', async (_m) => [DummyComponent1, DummyComponent2]);
  await project.load();
  const components = await project.getComponents();
  assert.assertEquals(components, [DummyComponent1, DummyComponent2]);
  const component = await project.getComponent('foobar');
  assert.assertEquals(component, DummyComponent1);
});

Deno.test('returns components 2', async () => {
  using _fromModule = stub(ComponentLoader, 'fromModule', async (_m) => [DummyComponent2]);
  await project.load();
  const components = await project.getComponents();
  assert.assertEquals(components, [DummyComponent2]);
  const component = await project.getComponent('foobar');
  assert.assertFalse(component);
});

Deno.test('returns modules', async () => {
  await project.load();
  assert.assertEquals(project.getModules(), [{ foo: 'bar' }]);
});

Deno.test('returns plugins', async () => {
  await project.load();
  assert.assertEquals(project.getPlugins(), [MockPlugin as unknown as PluginClass]);
});
