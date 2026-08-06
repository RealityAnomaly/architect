// SPDX-FileCopyrightText: 2026 Vertex X7-53
//
// SPDX-License-Identifier: GPL-3.0-or-later

// deno-coverage-ignore-file
import { ITarget, BuildPhase } from '../../../index.ts';
import { ICompileListener } from '../progress.ts';

export class MockCompileListener implements ICompileListener {
  setTarget(_target: ITarget | undefined): void {}
  setTotal(_total: number): void {}
  setStatus(_status: string): void {}
  onResourceEnd(): void {}
  onPhaseChange(_phase: BuildPhase, _override?: string): void {}
}
