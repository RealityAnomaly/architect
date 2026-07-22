import * as assert from '@std/assert';
import { stub } from '@std/testing/mock';

import { Result } from '../index.ts';
import { MockDependencyGraph } from '../../graph/__mocks__/index.ts';
import { MockArchitect } from '../../../__mocks__/app.ts';
import { MockProject } from '../../project/__mocks__/project.ts';
import { MockTarget } from '../../target/__mocks__/target.ts';
import { MockWriter } from '../__mocks__/index.test.ts';

let app: MockArchitect;
let project: MockProject;
let target: MockTarget;
let graph: MockDependencyGraph;
let result: Result;

Deno.test.beforeEach(() => {
  app = new MockArchitect();
  project = new MockProject(app);
  target = new MockTarget(undefined, undefined, project);
  graph = new MockDependencyGraph(target);
  result = new Result(graph, {
    foo1: { foobar: { blah: 'foo' } },
    foo2: { foobar: { blah2: 'foo' } }
  });
});

Deno.test('all returns merged configurations', () => {
  assert.assertEquals(result.all, {
    foobar: { blah: 'foo', blah2: 'foo' }
  });
});

Deno.test('write calls writer', async () => {
  result.writer = new MockWriter();
  using write = stub(result.writer, 'write');
  using mkdir = stub(Deno, 'mkdir');

  await result.write('foo');
  assert.assertEquals(mkdir.calls.length, 1);
  assert.assertEquals(mkdir.calls[0].args[0], 'foo');

  assert.assertEquals(write.calls.length, 1);
  assert.assertEquals(write.calls[0].args[0], result);
  assert.assertEquals(write.calls[0].args[1], 'foo');
});

Deno.test('write does nothing if no writer', async () => {
  using mkdir = stub(Deno, 'mkdir');
  await result.write('foo');
  assert.assertEquals(mkdir.calls.length, 0);
});
