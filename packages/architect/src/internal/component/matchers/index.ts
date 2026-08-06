// SPDX-FileCopyrightText: 2026 Vertex X7-53
//
// SPDX-License-Identifier: GPL-3.0-or-later

import { Component, IComponent } from '../component.ts';
import { Constructor } from '../../../utils/index.ts';
import { ComponentMetadata } from '../metadata.ts';

export * from './capability.ts';
export * from './instance.ts';
export * from './reference.ts';

/**
 * Defines an object that matches one or more components according to a defined ruleset
 */
export interface IComponentMatcher {
  match(input: IComponent): boolean;

  toString(): string;
}

// noinspection JSUnusedGlobalSymbols
export class ComponentMatcher implements IComponentMatcher {
  private readonly token: Constructor<Component>;
  private readonly clazz: string;

  constructor(token: Constructor<Component>) {
    this.token = token;
    this.clazz = ComponentMetadata.from(this.token)!.model!.class!;
  }

  match(input: IComponent): boolean {
    return input.clazz === this.clazz;
  }

  toString(): string {
    return `Component("${this.clazz}")`;
  }
}
