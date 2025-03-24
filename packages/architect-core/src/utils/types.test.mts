import * as assert from "@std/assert";
import * as types from "./types.mts";

Deno.test("setNamed", async () => {
  const obj = {
    foo: "bar",
  };

  types.setNamed(obj);
  assert.assertEquals(types.NAMED_SYMBOL in obj, true);
});

Deno.test("isNamed", async () => {
  const obj1 = {
    foo: "bar",
  };
  assert.assertEquals(types.isNamed(obj1), false);

  const obj2 = {
    foo: "bar",
  };
  Object.defineProperty(obj2, types.NAMED_SYMBOL, {
    value: true,
    enumerable: true,
  });
  assert.assertEquals(types.isNamed(obj2), true);
});
