import { Component } from '../component.mts';
import { constructor } from '../../../utils/index.mts';
import { ComponentMetadata } from '../metadata.mts';

export * from './capability.mts';
export * from './instance.mts';
export * from './reference.mts';

/**
 * Defines an object that matches one or more components according to a defined ruleset
 */
export interface IComponentMatcher {
  match(input: Component): boolean;

  constraint(): string;

  toString(): string;
}

export class ComponentMatcher implements IComponentMatcher {
  private readonly token: constructor<Component>;
  private readonly clazz: string;

  constructor(token: constructor<Component>) {
    this.token = token;
    this.clazz = ComponentMetadata.from(this.token)!.model!.class!;
  }

  match(input: Component): boolean {
    return input.clazz === this.clazz;
  }

  constraint(): string {
    return `Component("${this.clazz}")`;
  }

  toString(): string {
    return `${this.constructor.name}(${this.token.name})`;
  }
}
