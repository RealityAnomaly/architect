import { Reflect } from "@dx/reflect";

import { Component, IComponentMatcher } from './component.mts';
import { CLASS_META_KEY } from './index.mts';
import { constructor } from './utils/index.mts';

type CapabilityCondition<T extends Capability<unknown>> = (capability: T) => boolean;

export abstract class Capability<T> {
  public readonly data: T;

  constructor(data: T) {
    this.data = data;
  };

  public get clazz(): string {
    return Reflect.getMetadata(CLASS_META_KEY, this.constructor);
  };
};

export class CapabilityMatcher<T extends Capability<unknown>> implements IComponentMatcher {
  private readonly token: constructor<T>;
  private readonly condition?: CapabilityCondition<T>;

  constructor(token: constructor<T>, condition?: CapabilityCondition<T>) {
    this.token = token;
    this.condition = condition;
  };

  match(input: Component): boolean {
    const clazz = Reflect.getMetadata(CLASS_META_KEY, this.token);
    const capability = input.capabilities.find(object => {
      return object.clazz === clazz;
    });

    if (!capability) return false;
    if (this.condition && !this.condition(capability as T)) return false;

    return true;
  };

  constraint(): string {
    return `Capability("${Reflect.getMetadata(CLASS_META_KEY, this.token)}")`;
  };

  toString(): string {
    return `${this.constructor.name}(${this.token.name})`;
  };
};
