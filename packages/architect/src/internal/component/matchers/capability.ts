import 'reflect-metadata';

import { Constructor } from '../../../index.ts';
import { Component } from '../index.ts';
import { Capability } from '../capability.ts';
import { IComponentMatcher } from './index.ts';
import { Constants } from '../../constants.ts';

type CapabilityCondition<T extends Capability<unknown>> = (
  capability: T,
) => boolean;

export class CapabilityMatcher<T extends Capability<unknown>>
  implements IComponentMatcher {
  private readonly token: Constructor<T>;
  private readonly condition?: CapabilityCondition<T>;

  constructor(token: Constructor<T>, condition?: CapabilityCondition<T>) {
    this.token = token;
    this.condition = condition;
  }

  match(input: Component): boolean {
    return this.matchArray(input.capabilities);
  }

  matchArray(capabilities: Capability<unknown>[]): boolean {
    const clazz = Reflect.getMetadata(Constants.CLASS_META_KEY, this.token);
    const capability = capabilities.find((object) => {
      return object.clazz === clazz;
    });

    if (!capability) return false;
    if (this.condition) return this.condition(capability as T);

    return true;
  }

  constraint(): string {
    return `Capability("${
      Reflect.getMetadata(Constants.CLASS_META_KEY, this.token)
    }")`;
  }

  toString(): string {
    return `${this.constructor.name}(${this.token.name})`;
  }
}
