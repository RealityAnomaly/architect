import { Component } from '../component.ts';
import { IComponentMatcher } from './index.ts';

export class ComponentInstanceMatcher implements IComponentMatcher {
  public readonly instance: Component;

  constructor(instance: Component) {
    this.instance = instance;
  }

  match(input: Component): boolean {
    return input === this.instance;
  }

  constraint(): string {
    return `ComponentInstance("${this.instance.rid}")`;
  }

  toString(): string {
    return `${this.constructor.name}(${this.instance.rid})`;
  }
}
