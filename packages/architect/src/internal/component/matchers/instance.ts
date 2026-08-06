// SPDX-FileCopyrightText: 2026 Vertex X7-53
//
// SPDX-License-Identifier: GPL-3.0-or-later

import { IComponent } from '../component.ts';
import { IComponentMatcher } from './index.ts';

export class ComponentInstanceMatcher implements IComponentMatcher {
  public readonly instance: IComponent;

  constructor(instance: IComponent) {
    this.instance = instance;
  }

  match(input: IComponent): boolean {
    return input === this.instance;
  }

  toString(): string {
    return `ComponentInstance("${this.instance.rid}")`;
  }
}
