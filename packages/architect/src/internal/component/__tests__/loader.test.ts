// SPDX-FileCopyrightText: 2026 Vertex X7-53
//
// SPDX-License-Identifier: GPL-3.0-or-later

import * as assert from '@std/assert';
import { ComponentLoader } from '../loader.ts';
import Module from 'node:module';
import { Constants } from '../../constants.ts';
import { ComponentClass } from '../component.ts';
import { stub } from '@std/testing/mock';
import { ModuleUtilities } from '../../../utils/modules.ts';
import { Constructor } from '../../../utils/index.ts';

class TestClass {}

class TestClassWithType {}
Reflect.defineMetadata(Constants.TYPE_META_KEY, 'blah', TestClassWithType);

class TestClassWithCorrectType {}
Reflect.defineMetadata(Constants.TYPE_META_KEY, 'component', TestClassWithCorrectType);

Deno.test('fromModule collects only classes of type component', async () => {
  using collectClasses = stub(ModuleUtilities, 'collectClasses', (m, ma) => Object.values(m).filter(p => ma(p as Constructor<unknown>)) as Constructor<unknown>[])
  const result = await ComponentLoader.fromModule({
    test1: 'blah',
    test2: TestClass,
    test3: TestClassWithType,
    test4: TestClassWithCorrectType
    // deno-lint-ignore no-explicit-any
  } as any as Module);
  // deno-lint-ignore no-explicit-any
  assert.assertEquals(result, [TestClassWithCorrectType as any as ComponentClass]);
  assert.assertStrictEquals(collectClasses.calls.length, 1);
});
