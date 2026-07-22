import * as logtape from '@logtape/logtape';
import * as assert from '@std/assert';
import { getLatestSemVer } from '../semver.ts';

let logger: logtape.Logger;

Deno.test.beforeEach(() => {
  logger = logtape.getLogger(['test']);
})

Deno.test('finds latest semver', () => {
  const latest = getLatestSemVer([
    'v1.3.3',
    'v1.2',
    'v5.1.2.3',
    'v5.6.2',
    'v5.6.3-rc.2',
    '1.4.3.2',
    '3.1.2',
    'v1.2.7+what',
    'invalid-whatever'
  ], undefined, logger);

  assert.assertEquals(latest, 'v5.6.2');
});

Deno.test('finds version with constraint', () => {
  const latest = getLatestSemVer([
    'v1.6.7',
    'v1.7.8',
  ], '<=v1.6.7', logger)

  assert.assertEquals(latest, 'v1.6.7');
});
