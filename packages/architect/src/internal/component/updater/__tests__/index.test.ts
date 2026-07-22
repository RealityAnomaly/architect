import * as assert from '@std/assert';
import * as mock from '@std/testing/mock';

import { ComponentUpgradeState, Updater } from '../index.ts';
import { MockProject } from '../../../project/__mocks__/project.ts';
import { MockArchitect } from '../../../../__mocks__/app.ts';
import { ComponentModel, ComponentModelFileInstance, ComponentModelUtilities } from '../../model.ts';
import { Component } from '../../component.ts';
import { MockPlugin } from '../../../plugin/__mocks__/plugin.ts';
import { type ITarget } from '../../../target/index.ts';
import { type Context } from '../../../../utils/index.ts';
import { type ComponentArgs } from '../../arguments.ts';
import { ComponentMetadata } from '../../metadata.ts';
import { MockTarget, MockTargetForIntrospection, MockTargetReturnsInvalid } from '../../../target/__mocks__/target.ts';

class ValidComponent extends Component {
  public static ctorCalled = false;
  public static upgradeCalled = false;
  public static upgradeReturn = true;

  constructor(target: ITarget, context: Context, props?: ComponentArgs, parent?: unknown) {
    ValidComponent.ctorCalled = true;
    super(target, context, props, parent);
  }

  override async upgrade(_state: ComponentUpgradeState): Promise<boolean> {
    ValidComponent.upgradeCalled = true;
    return ValidComponent.upgradeReturn;
  }
}

new ComponentMetadata<ComponentModel>(
  { class: 'architect.glassway.net/test-component' },
  MockPlugin.MOCK_TARGET_IDENTIFIER,
).assign(ValidComponent);

@Component.decorate({
  class: 'architect.glassway.net/test-component-no-match',
})
class NoMatchComponent extends Component {}

class NoModelComponent extends Component {}

let app: MockArchitect;
let project: MockProject;
let plugin: MockPlugin;
let updater: Updater;

const fileInstance: ComponentModelFileInstance = {
  path: 'foo/bar.json',
  dirty: false,
  model: {
    'test': {
      class: 'architect.glassway.net/test-component'
    }
  }
};

Deno.test.beforeEach(() => {
  app = new MockArchitect();
  project = new MockProject(app);
  plugin = new MockPlugin(app);

  app.pluginRegistry.data[MockPlugin.MOCK_TARGET_IDENTIFIER] = plugin;
  updater = new Updater(project);
})

Deno.test('calls compile if component changes', async () => {
  using modelCollect = mock.stub(ComponentModelUtilities, 'collect', async () => { return [fileInstance]; });
  using writeFile = mock.stub(Deno, 'writeTextFile');

  ValidComponent.upgradeReturn = true;
  MockTarget.compileCalled = false;
  await updater.update([ValidComponent, NoMatchComponent, NoModelComponent]);

  assert.assertEquals(modelCollect.calls.length, 1);
  assert.assertEquals(modelCollect.calls[0].args[0], ['/foo/bar/src/components']);

  assert.assertEquals(MockTarget.compileCalled, true);
  assert.assertEquals(ValidComponent.ctorCalled, true);
  assert.assertEquals(ValidComponent.upgradeCalled, true);
  assert.assertEquals(writeFile.calls.length, 0);
});

Deno.test('throws if graph fails to validate', async () => {
  using _ = mock.stub(ComponentModelUtilities, 'collect', async () => { return [fileInstance]; });

  ValidComponent.upgradeReturn = true;
  plugin._targets[MockPlugin.MOCK_TARGET_IDENTIFIER] = MockTargetReturnsInvalid;
  assert.assertRejects(async () => {
    await updater.update([ValidComponent]);
  });
});

Deno.test('sets introspection state on fake target', async () => {
  using _ = mock.stub(ComponentModelUtilities, 'collect', async () => { return [fileInstance]; });

  ValidComponent.upgradeReturn = false;
  plugin._targets[MockPlugin.MOCK_TARGET_IDENTIFIER] = MockTargetForIntrospection;
  using setState = mock.stub(MockTargetForIntrospection.introspection, 'setState');
  await updater.update([ValidComponent]);
  assert.assertEquals(setState.calls.length, 1);
  assert.assertEquals(setState.calls[0].args[0], MockTargetForIntrospection.fake().state);
});

Deno.test('writes file if component changes', async () => {
  const fi = {
    path: 'foo/bar.json',
    dirty: true,
    model: {
      'test': {
        class: 'architect.glassway.net/test-component'
      }
    }
  };

  using _ = mock.stub(ComponentModelUtilities, 'collect', async () => { return [fi]; });
  using writeFile = mock.stub(Deno, 'writeTextFile');

  ValidComponent.upgradeReturn = false;
  await updater.update([ValidComponent]);
  assert.assertEquals(writeFile.calls.length, 1);
  assert.assertEquals(writeFile.calls[0].args[0], 'foo/bar.json');
  assert.assertEquals(writeFile.calls[0].args[1], JSON.stringify(fi.model, undefined, 2));

  // ensure dry run doesn't write
  await updater.update([ValidComponent], true);
  assert.assertEquals(writeFile.calls.length, 1);
});

Deno.test('does not call compile if component did not change', async () => {
  using modelCollect = mock.stub(ComponentModelUtilities, 'collect', async () => { return [fileInstance]; });

  ValidComponent.upgradeReturn = false;
  MockTarget.compileCalled = false;
  await updater.update([ValidComponent, NoMatchComponent, NoModelComponent]);

  assert.assertEquals(modelCollect.calls.length, 1);
  assert.assertEquals(modelCollect.calls[0].args[0], ['/foo/bar/src/components']);
  assert.assertEquals(MockTarget.compileCalled, false);
});
