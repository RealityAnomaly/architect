// deno-coverage-ignore-file
import { ITarget, IComponent, BuildPhase } from '../../../index.ts';
import { ICompileListener } from '../progress.ts';

export class MockCompileListener implements ICompileListener {
  setTarget(_target: ITarget | undefined): void {}
  setTotal(_total: number): void {}
  onComponentStart(_component: IComponent): void {}
  onComponentEnd(_component: IComponent): void {}
  onResourceStart(_resource: object, _description?: string): void {}
  onResourceEnd(_resource: object): void {}
  onPhaseChange(_phase: BuildPhase): void {}
}
