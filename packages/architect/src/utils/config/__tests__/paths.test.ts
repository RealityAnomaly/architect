// SPDX-FileCopyrightText: 2026 Vertex X7-53
//
// SPDX-License-Identifier: GPL-3.0-or-later

import * as assert from '@std/assert';
import { PathResultBuilder, prettifyPath, ValuePath } from './../paths.ts';

Deno.test("prettifyPath works for all cases", async () => {
  const path: ValuePath = ["foo", "bar", 123, "baz"];
  assert.assertEquals(prettifyPath(path), "foo.bar[123].baz");
});

Deno.test("no values results in undefined", async () => {
  const builder = new PathResultBuilder();
  assert.assertEquals(builder.resolve(), undefined);
});
