import { HashUtilities } from "./hashing.mts";
import * as assert from "@std/assert";

Deno.test("composite hash equality", () => {
  const first = [
    "foo",
    "bar",
    { foo: "bar" },
  ];

  const second = [
    "foo",
    "bar",
    { foo: "bar" },
  ];

  const hash = HashUtilities.compositeHash([first]);
  assert.assertStrictEquals(hash, HashUtilities.compositeHash([second]));
});

Deno.test("composite hash inequality", () => {
  const first = [
    "foo",
    "bar",
    { foo: "bar" },
  ];

  const second = [
    "foo",
    "bar",
    { foo: "baz" },
  ];

  const hash = HashUtilities.compositeHash([first]);
  assert.assertNotStrictEquals(hash, HashUtilities.compositeHash([second]));
});
