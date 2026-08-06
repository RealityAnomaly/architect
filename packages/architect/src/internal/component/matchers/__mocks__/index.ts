// SPDX-FileCopyrightText: 2026 Vertex X7-53
//
// SPDX-License-Identifier: GPL-3.0-or-later

// deno-coverage-ignore-file
import { IComponentMatcher } from '../index.ts';
import { IComponent } from '../../component.ts';

export class MockComponentMatcher implements IComponentMatcher {
  public succeeds: boolean;

  constructor(succeeds: boolean) {
    this.succeeds = succeeds;
  }

  match(_input: IComponent): boolean {
    return this.succeeds;
  }
  toString(): string {
    return this.succeeds ? 'true' : 'false';
  }
}
