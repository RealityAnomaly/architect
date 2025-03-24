import ProgressBar from 'jsr:@deno-library/progress';
import { delay } from 'jsr:@std/async';
import { CompilePhase, ICompileListener } from '../internal/index.mts';

export class CompileProgressBar implements ICompileListener {
  protected bar: ProgressBar;
  protected total: number = 100;
  protected progress: number = 0;
  protected title?: string;
  protected status?: string;
  protected target?: string;
  protected completed: boolean = false;

  constructor() {
    this.bar = new ProgressBar();
  }

  async render() {
    while (!this.completed) {
      await this.bar.render(this.progress, {
        total: this.total,
        text: this.status,
        title: this.title,
      });

      await delay(20);
    }
  }

  public setTotal(total: number) {
    this.bar.total = total;
  }

  public onComponentStart(name: string) {
    this.status = name;
  }

  public onComponentEnd(name: string) {
    this.progress++;
  }

  public onPhaseChange(phase: CompilePhase) {
    this.progress = 0;
    this.status = undefined;

    let prefix;
    switch (phase) {
      case CompilePhase.Resolve:
        prefix = 'Resolving';
        break;
      case CompilePhase.Build:
        prefix = 'Building';
        break;
      case CompilePhase.Validate:
        prefix = 'Validating';
        break;
    }

    this.title = `${prefix} Target ${this.target}`;
  }

  public setTarget(target: string) {
    this.target = target;
  }

  public setCompleted() {
    this.completed = true;
  }
}
