// SPDX-FileCopyrightText: 2026 Vertex X7-53
//
// SPDX-License-Identifier: GPL-3.0-or-later

// deno-coverage-ignore-file
import { Result, IWriter } from '../index.ts';

export class MockWriter implements IWriter {
  async write(_result: Result, _dir: string): Promise<void> {}
}
