import 'reflect-metadata';
import { Constants } from '../constants.ts';

export abstract class Capability<T> {
  public readonly data?: T;

  // noinspection TypeScriptAbstractClassConstructorCanBeMadeProtected
  constructor(data?: T) {
    this.data = data;
  }

  public get clazz(): string {
    return Reflect.getMetadata(Constants.CLASS_META_KEY, this.constructor);
  }
}

export class VirtualCapability extends Capability<object> {
  protected readonly _clazz: string;

  constructor(clazz: string, data?: object) {
    super(data);

    this._clazz = clazz;
  }

  override get clazz(): string {
    return this._clazz;
  }
}
