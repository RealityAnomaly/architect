import * as logtape from '@logtape/logtape';
import { ProgressBar } from '../vendor/progress/index.ts';
import { delay } from '@std/async';
import { BuildPhase, IComponent, ICompileListener, ITarget } from '../internal/index.ts';

import { defaultConsoleFormatter } from '@logtape/logtape';

export class CompileProgressBar implements ICompileListener {
  protected bar: ProgressBar;
  protected total: number = 100;
  protected progress: number = 0;
  protected title?: string;
  protected status?: string;
  protected target?: ITarget;
  protected completed: boolean = false;
  private messages: logtape.LogRecord[] = [];

  constructor() {
    this.bar = new ProgressBar();
  }

  private async renderBar(): Promise<void> {
    const progress = this.completed ? this.total : this.progress;

    const levelMap: Record<logtape.LogLevel, string> = {
      trace: "debug",
      debug: "debug",
      info: "info",
      warning: "warn",
      error: "error",
      fatal: "error",
    }

    while (this.messages.length > 0) {
      const record = this.messages.shift()!;
      const args = defaultConsoleFormatter(record) as string[] | string;
      await this.bar.clearLine();
      await this.bar.stdoutWrite("\r");

      const method = levelMap[record.level];
      if (typeof args === "string") {
        const msg = args.replace(/\r?\n$/, "");
        // @ts-ignore: dynamic
        globalThis.console[method](msg);
      } else {
        // @ts-ignore: dynamic
        globalThis.console[method](...args);
      }

      await this.bar.stdoutWrite("\x1b[?25l");
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
          this.messages.push(record);
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

  public setStatus(status: string) {
    this.status = status;
  }

  public onResourceEnd() {
    this.progress++;
  }

  public onPhaseChange(phase: BuildPhase, override?: string) {
    this.progress = 0;
    this.status = undefined;

    let prefix;
    switch (phase) {
      case BuildPhase.Resolve:
        prefix = 'Resolving';
        break;
      case BuildPhase.Build:
        prefix = 'Building';
        break;
      case BuildPhase.Validate:
        prefix = 'Validating';
        break;
      case BuildPhase.Apply:
        prefix = 'Applying';
        break;
    }

    this.title = override ? override : `${prefix} Target ${this.target}`;
  }

  public setTarget(target: ITarget | undefined) {
    this.target = target;
  }

  public setCompleted() {
    this.completed = true;
  }
}
