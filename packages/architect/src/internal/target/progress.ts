import { ITarget } from './target.ts';
import { Component } from '../component/index.ts';

export enum BuildPhase {
  Resolve,
  Build,
  Validate,
  Apply,
}

export interface ICompileListener {
  setTarget(target: ITarget | undefined): void
  setTotal(total: number): void;
  onComponentStart(component: Component): void;
  onComponentEnd(component: Component): void;
  onResourceStart(resource: object, description?: string): void;
  onResourceEnd(resource: object): void;
  onPhaseChange(phase: BuildPhase): void;
}
