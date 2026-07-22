import { MultiProgressBar } from "../mod.ts";
import { delay } from "../deps.example.ts";
import { DummyWriter } from '../../../utils/test/helpers.ts';

Deno.test(`Use MultiProgressBar in a deno test`, async () => {
  const title = "download files";
  const total = 100;

  const bars = new MultiProgressBar({
    title,
    // clear: true,
    complete: "=",
    incomplete: "-",
    display: "[:bar] :text :eta",
    output: new DummyWriter()
  });

  let completed1 = 0;
  let completed2 = 0;

  while (completed1 <= total || completed2 <= total) {
    completed1 += 1;
    completed2 += 2;
    await bars.render([
      {
        completed: completed1,
        total,
        text: "file1",
        complete: "*",
        incomplete: ".",
      },
      { completed: completed2, total, text: "file2" },
    ]);
  }
});
