import { Reflect } from '@dx/reflect';
import { Architect } from '../../app.mts';

export abstract class Capability<T> {
  public readonly data?: T;

  // noinspection TypeScriptAbstractClassConstructorCanBeMadeProtected
  constructor(data?: T) {
    this.data = data;
  }

  public get clazz(): string {
    return Reflect.getMetadata(Architect.CLASS_META_KEY, this.constructor);
  }
}

export class VirtualCapability extends Capability<any> {
  protected readonly _clazz;

  constructor(clazz: string, data?: any) {
    super(data);

    this._clazz = clazz;
  }

  override get clazz(): string {
    return this._clazz;
  }
}
