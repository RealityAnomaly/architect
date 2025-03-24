import { Reflect } from '@dx/reflect';

import { Architect } from '../../../app.mts';
import { constructor } from '../../../index.mts';
import { Component } from '../index.mts';
import { Capability } from '../capability.mts';
import { IComponentMatcher } from './index.mts';

type CapabilityCondition<T extends Capability<unknown>> = (
  capability: T,
) => boolean;

export class CapabilityMatcher<T extends Capability<unknown>>
  implements IComponentMatcher {
  private readonly token: constructor<T>;
  private readonly condition?: CapabilityCondition<T>;

  constructor(token: constructor<T>, condition?: CapabilityCondition<T>) {
    this.token = token;
    this.condition = condition;
  }

  match(input: Component): boolean {
    return this.matchArray(input.capabilities);
  }

  matchArray(capabilities: Capability<unknown>[]): boolean {
    const clazz = Reflect.getMetadata(Architect.CLASS_META_KEY, this.token);
    const capability = capabilities.find((object) => {
      return object.clazz === clazz;
    });

    if (!capability) return false;
    if (this.condition) return this.condition(capability as T);

    return true;
  }

  constraint(): string {
    return `Capability("${
      Reflect.getMetadata(Architect.CLASS_META_KEY, this.token)
    }")`;
  }

  toString(): string {
    return `${this.constructor.name}(${this.token.name})`;
  }
}
