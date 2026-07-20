import * as assert from '@std/assert';
import * as mock from '@std/testing/mock';

import { Updater } from '../index.ts';
import { MockProject } from '../../../project/__mocks__/project.ts';
import { MockArchitect } from '../../../../__mocks__/app.ts';
import { ComponentModelFileInstance, ComponentModelUtilities } from '../../model.ts';
import { Component } from '../../component.ts';

@Component.decorate({
  class: 'architect.glassway.net/test-component',
})
class ValidComponent extends Component {}

@Component.decorate({
  class: 'architect.glassway.net/test-component-no-match',
})
class NoMatchComponent extends Component {}

class NoModelComponent extends Component {}

Deno.test('updates components', async () => {
  const app = new MockArchitect();
  const project = new MockProject(app);
  const updater = new Updater(project);
  const fileInstance: ComponentModelFileInstance = {
    path: 'foo/bar.json',
    dirty: false,
    model: {
      'test1': {}
    }
  };

  using modelCollect = mock.stub(ComponentModelUtilities, 'collect', async () => { return [fileInstance]; });
  await updater.update([ValidComponent, NoMatchComponent, NoModelComponent]);

  assert.assertEquals(modelCollect.calls.length, 1);
  assert.assertEquals(modelCollect.calls[0].args[0], ['/foo/bar/src/components']);
});
