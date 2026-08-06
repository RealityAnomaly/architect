// SPDX-FileCopyrightText: 2026 Vertex X7-53
//
// SPDX-License-Identifier: GPL-3.0-or-later

import * as assert from '@std/assert';
import { stub, spy } from '@std/testing/mock';
import { Ajv } from 'ajv';
import { Constants } from '../../constants.ts';
import { ComponentMetadata } from '../metadata.ts';
import { ComponentClass } from '../component.ts';
import { ComponentModel, ComponentModelUtilities } from '../model.ts';

class TestComponent {}
Reflect.defineMetadata(Constants.TYPE_META_KEY, 'component', TestComponent);
Reflect.defineMetadata(Constants.MODEL_META_KEY, { blah: 'foo' }, TestComponent);
Reflect.defineMetadata(Constants.TARGET_TYPE_META_KEY, 'blah', TestComponent);

class TestComponent2 {}

Deno.test('reads metadata from constructor', () => {
  const metadata = ComponentMetadata.from(TestComponent as unknown as ComponentClass);
  assert.assertEquals(metadata.target, 'blah');
  assert.assertEquals(metadata.model, { blah: 'foo' } as ComponentModel);
});

Deno.test('assigns metadata to constructor', () => {
  const metadata = new ComponentMetadata({ blah: 'foo' } as ComponentModel, 'blah');
  metadata.assign(TestComponent2);
  assert.assertEquals(Reflect.getMetadata(Constants.TYPE_META_KEY, TestComponent2), 'component');
  assert.assertEquals(Reflect.getMetadata(Constants.MODEL_META_KEY, TestComponent2), { blah: 'foo' });
  assert.assertEquals(Reflect.getMetadata(Constants.TARGET_TYPE_META_KEY, TestComponent2), 'blah');
});

Deno.test('validates model successfully', () => {
  const metadata = new ComponentMetadata({ blah: 'foo' } as ComponentModel, 'blah');
  // deno-lint-ignore no-explicit-any
  const validator = ((_m: any) => { return () => { return true }; });

  // uses createValidator if validator not passed in
  // deno-lint-ignore no-explicit-any
  using _createValidator = stub(ComponentModelUtilities, 'createValidator', validator as any)
  const ajv = new Ajv();
  metadata.validate('foo', ajv);
  assert.assertEquals(_createValidator.calls.length, 1);

  const metadata2 = new ComponentMetadata({ blah: 'foo' } as ComponentModel, 'blah');
  const spy2 = spy(validator);
  // deno-lint-ignore no-explicit-any
  metadata2.validate('foo', ajv, spy2 as any);
  assert.assertEquals(spy2.calls.length, 1);

  // test to make sure revalidate doesn't retrigger validation
  // deno-lint-ignore no-explicit-any
  metadata2.validate('foo', ajv, spy2 as any);
  assert.assertEquals(spy2.calls.length, 1);

  // no model means no validation
  // deno-lint-ignore no-explicit-any
  const metadata3 = new ComponentMetadata(undefined as any, 'blah');
  // deno-lint-ignore no-explicit-any
  metadata3.validate('foo', ajv, spy2 as any);
  assert.assertEquals(spy2.calls.length, 1);
});

Deno.test('validates model unsuccessfully and throws', () => {
  const metadata = new ComponentMetadata({ blah: 'foo' } as ComponentModel, 'blah');
  // deno-lint-ignore no-explicit-any
  using _createValidator = stub(ComponentModelUtilities, 'createValidator', ((_m: any) => { return () => { return false }; }) as any)
  const ajv = new Ajv();
  using _errorsText = stub(ajv, 'errorsText', () => 'foobar');

  assert.assertThrows(() => {
    metadata.validate('foo', ajv);
  }, Error, 'failed to validate model for foo: foobar');
});
