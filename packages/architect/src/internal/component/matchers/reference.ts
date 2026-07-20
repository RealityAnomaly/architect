import * as toolkit from '@es-toolkit/es-toolkit';

import { IComponentMatcher } from './index.ts';
import { IComponent } from '../component.ts';
import { ComponentReference } from '../types.ts';

// noinspection JSUnusedGlobalSymbols
export class ComponentReferenceMatcher<T> implements IComponentMatcher {
  private readonly ref: ComponentReference<T>;

  constructor(ref: ComponentReference<T>) {
    this.ref = ref;
  }

  match(input: IComponent): boolean {
    return toolkit.isEqual(input.context, this.ref);
  }

  toString(): string {
    return `ComponentReference(${JSON.stringify(this.ref)})`;
  }
}
