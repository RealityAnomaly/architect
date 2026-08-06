// SPDX-FileCopyrightText: 2026 Vertex X7-53
//
// SPDX-License-Identifier: GPL-3.0-or-later

// deno-coverage-ignore-file
import { TargetIntrospection } from '../intro.ts';

export class MockTargetIntrospection extends TargetIntrospection<object> {
  protected override async loadState(): Promise<object> {
    return {}
  }
}
