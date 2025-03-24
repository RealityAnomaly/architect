// noinspection SpellCheckingInspection
import * as assert from '@std/assert';
import { TypeUtilities } from './types.mts';

Deno.test('isRecord', async () => {
  assert.assertEquals(TypeUtilities.isRecord({ foo: 'bar' }), true);
  assert.assertEquals(TypeUtilities.isRecord(['bar']), false);
  assert.assertEquals(TypeUtilities.isRecord('blah'), false);
  assert.assertEquals(TypeUtilities.isRecord(null), false);
  assert.assertEquals(TypeUtilities.isRecord(undefined), false);
});

Deno.test('notEmpty', async () => {
  assert.assertEquals(TypeUtilities.notEmpty({ foo: 'bar' }), true);
  assert.assertEquals(TypeUtilities.notEmpty({}), true);
  assert.assertEquals(TypeUtilities.notEmpty(null), false);
  assert.assertEquals(TypeUtilities.notEmpty(undefined), false);
});

Deno.test('isEmptyObject', async () => {
  assert.assertEquals(TypeUtilities.isEmptyObject({ foo: 'bar' }), false);
  assert.assertEquals(TypeUtilities.isEmptyObject({}), true);
  // deno-lint-ignore no-explicit-any
  assert.assertEquals(TypeUtilities.isEmptyObject(null as any), true);
  // deno-lint-ignore no-explicit-any
  assert.assertEquals(TypeUtilities.isEmptyObject(undefined as any), true);
});
