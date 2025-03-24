// deno-lint-ignore-file no-explicit-any
// noinspection SpellCheckingInspection

import { Lazy } from './lazy.mts';
import * as assert from '@std/assert';

interface TestOptionsB {
  barA: string;
  barB: string;
  off?: any;
}

interface TestOptionsA {
  foobar?: Record<string, TestOptionsB>;
  barfoo?: any;
  test3?: any;
  blasj?: any;
}

interface RecursionTestA {
  test?: any;
}

interface RecursionTestB {
  test2?: any;
}

Deno.test("assignment and resolution", async () => {
  const value: TestOptionsA = {
    foobar: {
      foo: {
        barA: "12212",
        barB: "1221212112",
      },
    },
  };

  const lazy = Lazy.from(value);
  const resolved = await lazy.$resolve();
  assert.assertEquals(resolved, value);
});

Deno.test("creating lazy leaf from atomic", async () => {
  const atom = "foobar";
  assert.assertEquals(await Lazy.from(atom).$resolve(), atom);
});

Deno.test("creating lazy leaf from function", async () => {
  const atom = () => "foobar";
  assert.assertEquals(await Lazy.from(atom).$resolve(), "foobar" as any);
});

Deno.test("conditional values of leaf", async () => {
  const lazy = Lazy.from({
    stuff: ["foo"],
    options: {
      enable: true,
    },
  });

  const stuff = lazy.stuff;
  stuff.$set(["bar"] as any, undefined, false, lazy.options.enable);
  stuff.$set(
    ["barfoo"] as any,
    undefined,
    false,
    async () => !await lazy.options.enable.$resolve(),
  );

  assert.assertEquals(await lazy.$resolve(), {
    stuff: ["foo", "bar"],
    options: {
      enable: true,
    },
  });
});

Deno.test("advanced conditional stuff", async () => {
  const lazy = Lazy.from({
    app: {
      stuff: [],
      options: {
        enable: false,
      },
    },
  });

  lazy.$set({
    app: {
      options: {
        enable: (lazy as any).app2.options.enable,
      },
    },
    app2: {
      stuff: [],
      options: {
        enable: false,
      },
    },
  } as any, 10);

  lazy.app.stuff.$set(
    ["bar"] as any,
    undefined,
    false,
    lazy.app.options.enable,
  );

  assert.assertEquals(await lazy.$resolve(), {
    app: {
      stuff: [],
      options: { enable: false },
    },
    app2: {
      stuff: [],
      options: { enable: false },
    },
  } as any);

  lazy.$set({
    app2: {
      options: { enable: true },
    },
  } as any, 20);

  assert.assertEquals(await lazy.$resolve(), {
    app: {
      stuff: ["bar"],
      options: { enable: true },
    },
    app2: {
      stuff: [],
      options: { enable: true },
    },
  } as any);
});

Deno.test("conditional returns lazy value", async () => {
  const lazy = Lazy.from({
    stuff: ["foo"],
    options: {
      enable: true,
    },
  });

  const stuff = lazy.stuff;
  stuff.$set(["bar"] as any, undefined, false, async () => lazy.options.enable);

  assert.assertEquals(await lazy.$resolve(), {
    stuff: ["foo", "bar"],
    options: {
      enable: true,
    },
  });
});

Deno.test("directly mutating properties throws error", async () => {
  const value: TestOptionsA = {
    foobar: {
      foo: {
        barA: "12212",
        barB: "1221212112",
      },
    },
  };

  const lazy = Lazy.from(value) as any;

  assert.assertThrows(() => {
    Reflect.defineProperty(lazy.foobar.foo, "offf", {});
  });

  // expected behaviour is merging in a dict with attributes forced to omit
  assert.assertThrows(() => {
    delete lazy.foobar.foo.barA;
  });

  assert.assertThrows(() => {
    lazy.foobar.foo.off = "dwjdjwws";
  });
});

Deno.test("weight conflict on atomic property throws error", async () => {
  const lazy = Lazy.from({ foo: "bar", bar2: "bar2" });
  lazy.$set({ foo: "bar3" });

  await assert.assertRejects(
    async () => {
      await lazy.$resolve();
    },
    Error,
    "conflict: two atomic values with weight 0 at path foo",
  );
});

Deno.test("internal properties cannot be mutated", async () => {
  const lazy = Lazy.from({ foo: "bar", bar2: "bar2" });

  assert.assertThrows(() => {
    (lazy as any).$resolve = "bad";
  });

  assert.assertThrows(() => {
    delete (lazy as any).$resolve;
  });

  assert.assertEquals(await lazy.$resolve(), { foo: "bar", bar2: "bar2" });
});

Deno.test("merging existing objects", async () => {
  const value: TestOptionsA = {
    foobar: {
      foo: {
        barA: "12212",
        barB: "1221212112",
      },
    },
  };

  const lazy = Lazy.from(value);

  // weight precedence
  lazy.$set({
    foobar: {
      foo: {
        barB: "12828128138",
      },
    },
  }, 10);

  lazy.$set({
    foobar: {
      foo: {
        barB: "23818383712372273",
      },
    },
  }, -10);

  lazy.$set({
    foobar: {
      foo: {
        barB: "2121121",
      },
    },
  }, 30);

  const resolved = await lazy.$resolve();
  assert.assertEquals(resolved, {
    foobar: {
      foo: {
        barA: "12212",
        barB: "2121121",
      },
    },
  });
});

Deno.test("merging objects with force", async () => {
  const value = {
    foobar: {
      foo: {
        barA: "12212",
        barB: "1221212112",
      },
      barfoo: "bar",
    },
  };

  const lazy = Lazy.from(value);
  lazy.foobar.foo.$set(
    {
      fuck: "off",
    } as any,
    undefined,
    true,
  );

  assert.assertEquals(await lazy.$resolve(), {
    foobar: {
      foo: { fuck: "off" } as any,
      barfoo: "bar",
    },
  });

  lazy.foobar.$set({ fuck: "you" } as any, undefined, true);
  assert.assertEquals(await lazy.$resolve(), {
    foobar: { fuck: "you" },
  } as any);
});

Deno.test("merging arrays", async () => {
  const lazy = Lazy.from(["foo", "bar"]);
  lazy.$set(["bar2"]);

  const resolved = await lazy.$resolve();
  assert.assertEquals(resolved, ["foo", "bar", "bar2"]);
});

Deno.test("merging arrays deep in objects", async () => {
  const lazy = Lazy.from({
    what: {
      the: {
        fuck: ["foobar"],
      },
    },
  });
  lazy.$set({
    what: {
      the: {
        fuck: ["bar2"],
      },
    },
  });

  const resolved = await lazy.$resolve();
  assert.assertEquals(resolved, {
    what: {
      the: {
        fuck: ["foobar", "bar2"],
      },
    },
  });
});

Deno.test("merging to undefined properties", async () => {
  const lazy = Lazy.from({
    foo: undefined as any,
  });

  lazy.$set({
    foo: "bar",
  }, 10);

  assert.assertEquals(await lazy.$resolve(), {
    foo: "bar",
  });
});

Deno.test("fallback resolution", async () => {
  const tree = Lazy.from({ fuck: "off" });
  const resolved1 = await tree.$resolve({
    the: "fuck",
  } as any);

  assert.assertEquals(resolved1, { fuck: "off", the: "fuck" } as any);

  // what if result is undefined?
  const tree2 = Lazy.from(undefined);
  assert.assertEquals(await tree2.$resolve({ fuck: "off" } as any), {
    fuck: "off",
  });
});

Deno.test("fallback refs", async () => {
  const lazy = Lazy.from({
    get: "fucked",
    fuck: "off",
    screwoff: "ff",
  });

  lazy.$set({
    screwoff: async () => (lazy as any).bruh.mm.$resolve("nah"),
  }, 10);

  const resolved = await lazy.$resolve();
  assert.assertEquals(resolved, {
    get: "fucked",
    fuck: "off",
    screwoff: "nah",
  });

  // unspecified fallback should throw
  lazy.$set({
    screwoff: async () => (lazy as any).bruh.mm,
  });

  await assert.assertRejects(async () => {
    await lazy.$resolve();
  });
});

Deno.test("recursive resolution stress test", async () => {
  for (let i = 0; i < 100; i++) {
    const value: TestOptionsA = {};
    const lazy = Lazy.from(value);

    lazy.$set({
      foobar: {
        foo: {
          barA: "12212",
          barB: "1221212112",
        },
        foo2: lazy.foobar.foo,
        foo3: {
          barA: "12321",
          barB: lazy.foobar.foo2.barA,
        },
        foo4: {
          barA: "1291292912",
          barB: lazy.foobar.foo3.barA,
        },
        foo5: {
          barB: lazy.foobar.foo2.barA,
        },
        foo6: {
          off: [
            lazy.foobar.foo,
          ],
        },
        foo7: lazy.foobar.foo2,
      },
      barfoo: {
        fuck: "yeah",
      },
    });

    lazy.$set({
      barfoo: {
        fuck: "no",
        blahaj: ["12212"],
      },
      foobar: {
        foo7: {
          barB: "bndbdsnd",
        },
      },
    }, 10);

    lazy.$set({
      blasj: ["fuck"],
      test3: lazy.barfoo,
    });

    lazy.$set({
      blasj: ["why", "the"],
      test3: { fuck: { eeee: "the" }, blahaj: ["13"] },
    });

    const resolved = await lazy.$resolve();
    assert.assertEquals(resolved, {
      barfoo: { fuck: "no", blahaj: ["12212"] },
      test3: { fuck: { eeee: "the" }, blahaj: ["12212", "13"] },
      blasj: ["fuck", "why", "the"],
      foobar: {
        foo: { barA: "12212", barB: "1221212112" },
        foo2: { barA: "12212", barB: "1221212112" },
        foo3: { barA: "12321", barB: "12212" },
        foo4: { barA: "1291292912", barB: "12321" },
        foo5: { barB: "12212" },
        foo6: { off: [{ barA: "12212", barB: "1221212112" }] },
        foo7: { barA: "12212", barB: "bndbdsnd" },
      },
    } as any);
  }
});

Deno.test("reading value of undefined throws", async () => {
  const lazy = Lazy.from({ foo: undefined });
  await assert.assertRejects(
    async () => {
      await ((lazy.foo) as any).barfoo.$resolve();
    },
    Error,
    "attempted to read value of undefined at foo.barfoo",
  );
});

Deno.test("combining permutations of conditions", async () => {
  const lazy1 = Lazy.from({ foo: true });
  const lazy2 = Lazy.from({ foo: false });
  const lazy3 = Lazy.from({ foo: true });

  const condition1 = Lazy.combineConditions(lazy1.foo, lazy2.foo);
  assert.assertEquals(await Lazy.resolveCondition(condition1), false);

  const condition2 = Lazy.combineConditions(lazy1.foo, lazy3.foo);
  assert.assertEquals(await Lazy.resolveCondition(condition2), true);
});

Deno.test("max recursion depth throws error", async () => {
  const valueA: RecursionTestA = {};
  const valueB: RecursionTestB = {};
  const lazyA = Lazy.from(valueA);
  const lazyB = Lazy.from(valueB);

  lazyA.$set({
    test: lazyB.test2,
  });

  lazyB.$set({
    test2: lazyA.test,
  });

  await assert.assertRejects(
    async () => {
      await lazyA.$resolve();
    },
    Error,
    "Maximum evaluation depth of 100 exceeded",
  );
});
