import * as logtape from '@logtape/logtape';
import { ProgressBar } from '../vendor/progress/index.ts';
import { delay } from '@std/async';
import { CompilePhase, ICompileListener } from '../internal/index.ts';

export class CompileProgressBar implements ICompileListener {
  protected bar: ProgressBar;
  protected total: number = 100;
  protected progress: number = 0;
  protected title?: string;
  protected status?: string;
  protected target?: string;
  protected completed: boolean = false;
  private messages: string[] = [];

  constructor() {
    this.bar = new ProgressBar();
  }

  private async renderBar(): Promise<void> {
    const progress = this.completed ? this.total : this.progress;

    while (this.messages.length > 0) {
      const msg = this.messages.shift()!;
      await this.bar.console(msg);
    }

    await this.bar.render(progress, {
      total: this.total,
      text: this.status,
      title: this.title,
    });
  }

  async render() {
    // start hooking log messages
    const loggerConfig = logtape.getConfig();
    let oldSink: logtape.Sink | undefined;

    if (loggerConfig?.sinks) {
      const sinks = loggerConfig.sinks;
      if ("console" in sinks) {
        oldSink = sinks.console;
        sinks.console = async (record: logtape.LogRecord) => {
          this.messages.push(record.message.join(""));
        };

        loggerConfig.reset = true;
        await logtape.configure(loggerConfig);
      }
    }

    try {
      while (!this.completed) {
        await this.renderBar();
        await delay(20);
      }

      // update one more time at 100
      await this.renderBar();
    } finally {
      // end hooking log messages
      if (loggerConfig?.sinks) {
        const sinks = loggerConfig.sinks;
        if ("console" in sinks) {
          sinks.console = oldSink!;
          loggerConfig.reset = true;
          await logtape.configure(loggerConfig);
        }
      }

      // prevent it from leaving the console in a bad state
      const encoder = new TextEncoder();
      await Deno.stdout.write(encoder.encode("\x1b[?25h\x1b[0m"));
    }
  }

  public setTotal(total: number) {
    this.total = total;
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

  public setTarget(target: string | undefined) {
    this.target = target;
  }

  public setCompleted() {
    this.completed = true;
  }
}
