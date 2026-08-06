// SPDX-FileCopyrightText: 2026 Vertex X7-53
//
// SPDX-License-Identifier: GPL-3.0-or-later

import * as assert from '@std/assert';

import { Project } from '../index.ts';
import { ProjectMetadata } from '../meta.ts';
import { Constants } from '../../constants.ts';

export class TestProject extends Project {}

Deno.test('sets metadata', () => {
  const meta = new ProjectMetadata({ name: 'foobar' });
  meta.assign(TestProject);

  assert.assertEquals(Reflect.getMetadata(Constants.TYPE_META_KEY, TestProject), 'project');
  assert.assertEquals(Reflect.getMetadata(Constants.MODEL_META_KEY, TestProject), { name: 'foobar' });
  assert.assertEquals(Reflect.getMetadata(Constants.CLASS_META_KEY, TestProject), 'foobar');
});

Deno.test('gets metadata', () => {
  const meta = ProjectMetadata.from(TestProject);
  assert.assertEquals(meta.model, { name: 'foobar' });
});
