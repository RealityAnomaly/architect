import { ITarget } from './target.ts';
import { IComponent } from '../component/index.ts';

export enum BuildPhase {
  Resolve,
  Build,
  Validate,
  Apply,
}

export interface ICompileListener {
  setTarget(target: ITarget | undefined): void
  setTotal(total: number): void;
  onComponentStart(component: IComponent): void;
  onComponentEnd(component: IComponent): void;
  onResourceStart(resource: object, description?: string): void;
  onResourceEnd(resource: object): void;
  onPhaseChange(phase: BuildPhase): void;
}
