// SPDX-FileCopyrightText: 2026 Vertex X7-53
//
// SPDX-License-Identifier: GPL-3.0-or-later

import { ITarget } from './target.ts';

export enum BuildPhase {
  Resolve,
  Build,
  Validate,
  Apply,
}

export interface ICompileListener {
  setTarget(target: ITarget | undefined): void
  setTotal(total: number): void;
  setStatus(status: string) : void;
  onResourceEnd(): void;
  onPhaseChange(phase: BuildPhase, override?: string): void;
}
