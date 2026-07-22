// noinspection SpellCheckingInspection
import * as assert from '@std/assert';
import { ReflectionUtilities, TypeUtilities } from './../types.ts';

class Foobar {}

Deno.test('isObject', async () => {
  assert.assertEquals(TypeUtilities.isObject({ foo: 'bar' }), true);
  assert.assertEquals(TypeUtilities.isObject(new Foobar()), true);
  assert.assertEquals(TypeUtilities.isObject('bar'), false);
  assert.assertEquals(TypeUtilities.isObject(() => {}), true);
});

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

Deno.test('isObjectDeepKeys', async () => {
  assert.assertEquals(TypeUtilities.isObjectDeepKeys('blah'), false);
  assert.assertEquals(TypeUtilities.isObjectDeepKeys(null), false);
  assert.assertEquals(TypeUtilities.isObjectDeepKeys(undefined), false);
  assert.assertEquals(TypeUtilities.isObjectDeepKeys(() => {}), false);
  assert.assertEquals(TypeUtilities.isObjectDeepKeys({ foo: 'bar' }), true);
  assert.assertEquals(TypeUtilities.isObjectDeepKeys([]), false);
  assert.assertEquals(TypeUtilities.isObjectDeepKeys(new Foobar()), false);
});

Deno.test('classToName', async () => {
  assert.assertEquals(ReflectionUtilities.classToName('architect.glassway.net/foobar'), 'foobar');
  assert.assertEquals(ReflectionUtilities.classToName('foobar2'), 'foobar2');
});
