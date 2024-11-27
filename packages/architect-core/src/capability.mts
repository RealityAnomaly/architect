import { Component, IComponentMatcher } from './components/index.mts';
import { constructor } from './utils/index.mts';

type CapabilityCondition<T extends Capability<any>> = (capability: T) => boolean;

export abstract class Capability<T> {
  public readonly data: T;

  constructor(data: T) {
    this.data = data;
  };

  public get clazz(): string {
    return Reflect.getMetadata('class', this.constructor);
  };
};

export class CapabilityMatcher<T extends Capability<any>> implements IComponentMatcher {
  private readonly token: constructor<T>;
  private readonly condition?: CapabilityCondition<T>;

  constructor(token: constructor<T>, condition?: CapabilityCondition<T>) {
    this.token = token;
    this.condition = condition;
  };

  match(input: Component): boolean {
    const clazz = Reflect.getMetadata('class', this.token);
    const capability = input.capabilities.find(object => {
      return object.clazz === clazz;
    });

    if (!capability) return false;
    if (this.condition && !this.condition(capability as any)) return false;

    return true;
  };

  toString(): string {
    return `${this.constructor.name}(${this.token.name})`;
  };
};
