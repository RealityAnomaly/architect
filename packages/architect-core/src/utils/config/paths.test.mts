import * as assert from 'jsr:@std/assert';
import { PathResultBuilder, prettifyPath, ValuePath } from './paths.mts';

Deno.test('prettifyPath works for all cases', async () => {
  const path: ValuePath = ['foo', 'bar', 123, 'baz'];
  assert.assertEquals(prettifyPath(path), 'foo.bar[123].baz');
});

Deno.test('no values results in undefined', async () => {
  const builder = new PathResultBuilder();
  assert.assertEquals(builder.resolve(), undefined);
});
