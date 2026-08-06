// SPDX-FileCopyrightText: 2020 zfx
//
// SPDX-License-Identifier: MIT

import ProgressBar from "../mod.ts";
import { simpleTimerStream } from "../deps.test.ts";
import { DummyWriter } from '../../../utils/test/helpers.ts';

Deno.test(`Use ProgressBar in a deno test`, async () => {
  const progress = new ProgressBar({
    title: "downloading: ",
    total: 50,
    output: new DummyWriter(),
  });

  const timer = simpleTimerStream({
    maxEventCount: 100,
    intervalInMilliseconds: 0.01,
  });

  for await (const event of timer) {
    await progress.render(event);
  }
});
