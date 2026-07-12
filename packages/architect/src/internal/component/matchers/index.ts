import { Component } from '../component.ts';
import { Constructor } from '../../../utils/index.ts';
import { ComponentMetadata } from '../metadata.ts';

export * from './capability.ts';
export * from './instance.ts';
export * from './reference.ts';

/**
 * Defines an object that matches one or more components according to a defined ruleset
 */
export interface IComponentMatcher {
  match(input: Component): boolean;

  constraint(): string;

  toString(): string;
}

export class ComponentMatcher implements IComponentMatcher {
  private readonly token: Constructor<Component>;
  private readonly clazz: string;

  constructor(token: Constructor<Component>) {
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
