export enum CompilePhase {
  Resolve,
  Build,
  Validate,
}

export interface ICompileListener {
  setTotal(total: number): void;
  setCompleted(): void;
  onComponentStart(name: string): void;
  onComponentEnd(name: string): void;
  onPhaseChange(phase: CompilePhase): void;
}
