import * as assert from 'jsr:@std/assert';
import * as toolkit from 'jsr:@es-toolkit/es-toolkit';
import * as objects from './objects.mts';

Deno.test('isRecord', async () => {
  assert.assertEquals(objects.isRecord({ foo: 'bar' }), true);
  assert.assertEquals(objects.isRecord(['bar']), false);
  assert.assertEquals(objects.isRecord('blah'), false);
  assert.assertEquals(objects.isRecord(null), false);
  assert.assertEquals(objects.isRecord(undefined), false);
});

Deno.test('toArray', async () => {
  assert.assertEquals(objects.toArray('foo'), ['foo']);
  assert.assertEquals(objects.toArray(['foo']), ['foo']);
});

Deno.test('arrayStartsWith', async () => {
  assert.assertEquals(objects.arrayStartsWith(['foo', 'bar'], ['foo']), true);
  assert.assertEquals(objects.arrayStartsWith(['foo', 'bar'], ['bar']), false);
});

Deno.test('recursiveMerge and recursiveMergeThese', async () => {
  const test1 = {
    foo: 'bar',
    foobar: ['foo'],
    barfoo: {
      test: 'blah',
      bar: ['foo', 'bar'],
    },
  };

  const test2 = {
    foo: 'baz',
    foobar: ['bar'],
    barfoo: {
      test: 'blaz',
      bar: ['foo'],
    },
    bar: {},
  };

  const result = {
    foo: 'baz',
    foobar: ['foo', 'bar'],
    barfoo: {
      test: 'blaz',
      bar: ['foo', 'bar', 'foo'],
    },
    bar: {},
  };

  assert.assertEquals(objects.recursiveMerge(toolkit.cloneDeep(test1), toolkit.cloneDeep(test2)), result);
  assert.assertEquals(objects.recursiveMergeThese([toolkit.cloneDeep(test1), toolkit.cloneDeep(test2)]), result);

  // test recursively merging arrays too
  assert.assertEquals(objects.recursiveMerge(['foo'], ['baz']), ['foo', 'baz']);
});

Deno.test('notEmpty', async () => {
  assert.assertEquals(objects.notEmpty({ foo: 'bar' }), true);
  assert.assertEquals(objects.notEmpty({}), true);
  assert.assertEquals(objects.notEmpty(null), false);
  assert.assertEquals(objects.notEmpty(undefined), false);
});

Deno.test('isEmptyObject', async () => {
  assert.assertEquals(objects.isEmptyObject({ foo: 'bar' }), false);
  assert.assertEquals(objects.isEmptyObject({}), true);
  // deno-lint-ignore no-explicit-any
  assert.assertEquals(objects.isEmptyObject(null as any), true);
  // deno-lint-ignore no-explicit-any
  assert.assertEquals(objects.isEmptyObject(undefined as any), true);
});

Deno.test('asyncFilter', async () => {
  const predicate = async (value: number) => value % 2 === 0;
  const array = [1, 2, 3, 4, 5, 6];
  assert.assertEquals(await objects.asyncFilter(array, predicate), [2, 4, 6]);
});
