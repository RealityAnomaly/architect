import { Component } from '../component.mts';
import { IComponentMatcher } from './index.mts';

export class ComponentInstanceMatcher implements IComponentMatcher {
  private readonly instance: Component;

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
