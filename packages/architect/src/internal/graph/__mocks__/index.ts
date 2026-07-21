import { Logger } from '@logtape/logtape';
import { ITarget } from '../../../index.ts';
import { ValidationError } from '../../../utils/index.ts';
import { IDependencyGraph, ResolvedComponent } from '../index.ts';

export class MockDependencyGraph implements IDependencyGraph {
  public _target: ITarget;
  public _errors: ValidationError[] = [];
  public _components: Record<string, ResolvedComponent> = {};
  public _valid: boolean = true;

  constructor(target: ITarget) {
    this._target = target;
  }

  get target(): ITarget {
    return this._target;
  }

  get errors(): ValidationError[] {
    return this._errors;
  }

  get components(): Record<string, ResolvedComponent> {
    return this._components;
  }

  get valid(): boolean {
    return this._valid;
  }

  assertValid(_logger?: Logger): boolean {
    return this._valid;
  }
}
