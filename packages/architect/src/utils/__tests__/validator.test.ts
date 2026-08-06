// SPDX-FileCopyrightText: 2026 Vertex X7-53
//
// SPDX-License-Identifier: GPL-3.0-or-later

import * as assert from '@std/assert';
import * as logtape from '@logtape/logtape';
import { isValidator, ValidationError, ValidationErrorLevel } from '../validator.ts';

class Foobar {}

Deno.test('isValidator', () => {
  assert.assertFalse(isValidator(false));
  assert.assertFalse(isValidator(new Foobar()));
  assert.assertFalse(isValidator((_m: unknown) => { return () => { return true }; }));
});

Deno.test('validation error asserts', () => {
  const logger = logtape.getLogger(['test']);
  const info = new ValidationError('foobar', ValidationErrorLevel.INFO, 'whatever');
  const warning = new ValidationError('foobar', ValidationErrorLevel.WARNING, 'whatever');
  const error = new ValidationError('foobar', ValidationErrorLevel.ERROR, 'whatever');

  // TODO: logtape recorder
  info.assert(logger);
  warning.assert(logger);
  error.assert(logger);

  // does not assert again
  info.assert(logger);
});
