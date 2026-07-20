import path from 'node:path';
import * as commander from 'commander';
import { TargetResolveParams } from '../internal/index.ts';
import { Architect, IProject } from '../index.ts';
import { ComponentCommand } from './component.ts';
import { TargetCommand } from './target.ts';
import process from 'node:process';
import { ProjectClass } from '../internal/project/index.ts';
import { DependencyGraphRenderer } from '../internal/graph/render.ts';
import * as logtape from '@logtape/logtape';
import fs from 'node:fs/promises';
import { CompileProgressBar } from './progress.ts';

export interface AppCommandOptions {
  debug: boolean;
}

interface AppCommandCompileOptions extends AppCommandOptions {
  target?: string;
  output: string;
  components: string[];
  graph: boolean;
  validate: boolean;
  requirements: boolean;
}

interface AppCommandApplyOptions extends AppCommandCompileOptions {
}

export class App {
  public instance?: Architect;
  private readonly _projectClass?: ProjectClass;
  private pluginCommand?: commander.Command;

  constructor(_projectClass?: ProjectClass) {
    this._projectClass = _projectClass;
  }

  protected get project(): IProject {
    return this.instanceAsserted().getProject();
  }

  public static async run(_projectClass?: ProjectClass) {
    const instance = new App(_projectClass);
    const command = await instance.build();
    await command.parseAsync();
  }

  protected instanceAsserted(): Architect {
    if (!this.instance) throw new Error('parent not initialised');
    return this.instance;
  }

  protected async build(): Promise<commander.Command> {
    const program = new commander.Command();
    program.hook('preSubcommand', this.preSubcommand.bind(this));

    program
      .name('architect')
      .description(
        'Architect is a framework for generating structured configuration trees in TypeScript.',
      )
      .option(
        '-v, --verbose',
        'increase the verbosity (can be specified up to two times)',
        this.increaseVerbosity.bind(this),
        0,
      );

    if (this._projectClass) {
      program.command('compile')
        .description(
          'Compiles resources for the specified target or all targets',
        )
        .option('-t, --target <target>', 'the target to compile for')
        .option(
          '-o, --output <dir>',
          'output directory',
          path.join(process.cwd(), 'build'),
        )
        .option(
          '-c, --component [components...]',
          'list of component names to compile',
          [],
        )
        .option('-g, --graph', 'render and write a dependency graph')
        .option('--no-validate', 'skips resource validation')
        .option('--no-requirements', 'skips requirement validation')
        .action(this.compile.bind(this));

      program.command('apply')
        .description('Applies compiled resources to infrastructure')
        .requiredOption('-t, --target <target>', 'the target to deploy to')
        .option(
          '-o, --output <dir>',
          'output directory',
          path.join(process.cwd(), 'build'),
        )
        .option(
          '-c, --component [components...]',
          'list of component names to apply',
          [],
        )
        .option('--no-validate', 'skips resource validation')
        .option('--no-requirements', 'skips requirement validation')
        .action(this.apply.bind(this));

      program.addCommand(new ComponentCommand(this));
      program.addCommand(new TargetCommand(this));
    }

    this.pluginCommand = program.command('plugin')
      .description('Commands for plugin modules');

    return program;
  }

  private increaseVerbosity(_dummyValue: string, previous: number): number {
    return previous + 1;
  }

  private async preSubcommand(
    thisCommand: commander.Command,
    actionCommand: commander.Command,
  ): Promise<void> {
    const options = thisCommand.opts();
    let logLevel: logtape.LogLevel = 'info';
    if (options.verbose === 1) {
      logLevel = 'debug';
    } else if (options.verbose >= 2) {
      logLevel = 'trace';
    }

    this.instance = await Architect.create(this._projectClass, logLevel);

    // we have to do this late because the config file is only loaded once we have the -c parameter
    if (actionCommand == this.pluginCommand!) {
      for (const plugin of Object.values(this.instance.pluginRegistry.data)) {
        await plugin.registerCommand(actionCommand);
      }
    }
  }

  private async run(options: AppCommandCompileOptions | AppCommandApplyOptions, apply: boolean) {
    const params: TargetResolveParams = {
      requirements: options.requirements,
      validate: options.validate,
      graph: options.graph,
    };

    if (apply && params?.validateOnly) {
      throw Error("validateOnly cannot be used at the same time as apply");
    }

    const ignoreErrors = false;
    const targets = (options.target
      ? [await this.project.getTarget(options.target)]
      : await this.project.getTargets()).filter((t) => !!t);

    if (targets.length <= 0) {
      console.log(`Unable to find any targets`);
      return;
    }

    // currently the bar only works when we're not rendering multiple targets in parallel
    const bar = targets.length == 1 ? new CompileProgressBar() : undefined;

    const architect = this.instanceAsserted();
    const logger = architect.logger;
    let promises = targets.map(async (v): Promise<void> => {
      if (!v) return;

      const result = await v.compile(params, logger, bar);
      if (result == null) return;

      if (apply) {
        if (!result.graph.valid) {
          if (ignoreErrors) {
            logger.warn(`validation errors occurred, but continuing anyway as the ignore option was specified`)
          } else {
            bar?.setCompleted();
            return;
          }
        }

        await v.apply(result, params, logger, bar);
      } else {
        const output = path.join(options.output, v.model.metadata.name!);
        await fs.rm(output, {recursive: true, force: true});
        await fs.mkdir(output, {recursive: true});
        await result.write(output);

        if (options.graph) {
          await DependencyGraphRenderer.render(result.graph, {
            path: output,
          });
        }
      }

      bar?.setCompleted();
    });

    if (bar != undefined) {
      promises = promises.concat(bar.render());
    }

    await Promise.all(promises);
  }

  private async compile(options: AppCommandCompileOptions) {
    await this.run(options, false);
  }

  private async apply(options: AppCommandApplyOptions) {
    await this.run(options, true);
  }
}
