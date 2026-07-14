import { Target } from './target.ts';
import { Component } from '../component/index.ts';

export enum BuildPhase {
  Resolve,
  Build,
  Validate,
  Apply,
}

export interface ICompileListener {
  setTarget(target: Target | undefined): void
  setTotal(total: number): void;
  onComponentStart(component: Component): void;
  onComponentEnd(component: Component): void;
  onResourceStart(resource: unknown): void;
  onResourceEnd(resource: unknown): void;
  onPhaseChange(phase: BuildPhase): void;
}
