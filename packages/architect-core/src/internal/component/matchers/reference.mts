import * as toolkit from '@es-toolkit/es-toolkit';

import { IComponentMatcher } from './index.mts';
import { Component } from '../component.mts';
import { ComponentReference } from '../types.mts';

export class ComponentReferenceMatcher<T> implements IComponentMatcher {
  private readonly ref: ComponentReference<T>;

  constructor(ref: ComponentReference<T>) {
    this.ref = ref;
  }

  match(input: Component): boolean {
    return toolkit.isEqual(input.context, this.ref);
  }

  constraint(): string {
    return `ComponentReference(${JSON.stringify(this.ref)})`;
  }

  toString(): string {
    return `${this.constructor.name}(${this.ref})`;
  }
}
