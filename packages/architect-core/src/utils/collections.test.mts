// noinspection SpellCheckingInspection

import * as assert from '@std/assert';
import * as toolkit from '@es-toolkit/es-toolkit';
import { CollectionUtilities } from './collections.mts';

Deno.test('toArray', async () => {
  assert.assertEquals(CollectionUtilities.toArray('foo'), ['foo']);
  assert.assertEquals(CollectionUtilities.toArray(['foo']), ['foo']);
});

Deno.test('arrayStartsWith', async () => {
  assert.assertEquals(
    CollectionUtilities.arrayStartsWith(['foo', 'bar'], ['foo']),
    true,
  );
  assert.assertEquals(
    CollectionUtilities.arrayStartsWith(['foo', 'bar'], ['bar']),
    false,
  );
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

  assert.assertEquals(
    CollectionUtilities.recursiveMerge(
      toolkit.cloneDeep(test1),
      toolkit.cloneDeep(test2),
    ),
    result,
  );
  assert.assertEquals(
    CollectionUtilities.recursiveMergeThese([
      toolkit.cloneDeep(test1),
      toolkit.cloneDeep(test2),
    ]),
    result,
  );

  // test recursively merging arrays too
  assert.assertEquals(CollectionUtilities.recursiveMerge(['foo'], ['baz']), [
    'foo',
    'baz',
  ]);
});

Deno.test('asyncFilter', async () => {
  const predicate = async (value: number) => value % 2 === 0;
  const array = [1, 2, 3, 4, 5, 6];
  assert.assertEquals(await CollectionUtilities.asyncFilter(array, predicate), [
    2,
    4,
    6,
  ]);
});
