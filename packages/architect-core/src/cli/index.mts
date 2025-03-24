import path from 'node:path';
import * as commander from 'commander';
import { TargetResolveParams } from '../internal/index.mts';
import { Architect, Project } from '../index.mts';
import { ComponentCommand } from './component.mts';
import { TargetCommand } from './target.mts';
import process from 'node:process';
import { ProjectClass } from '../internal/project/index.mts';
import { DependencyGraphRenderer } from '../internal/graph/render.mts';
import fs from 'node:fs/promises';

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
  public app?: Architect;
  private readonly _projectClass?: ProjectClass;
  private pluginCommand?: commander.Command;

  constructor(_projectClass?: ProjectClass) {
    this._projectClass = _projectClass;
  }

  protected get project(): Project {
    return this.instanceAsserted().project!;
  }

  public static async run(_projectClass?: ProjectClass) {
    const instance = new App(_projectClass);
    const command = await instance.build();
    await command.parseAsync();
  }

  protected instanceAsserted(): Architect {
    if (!this.app) throw new Error('parent not initialised');
    return this.app;
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
    let logLevel = 'info';
    if (options.verbose === 1) {
      logLevel = 'debug';
    } else if (options.verbose >= 2) {
      logLevel = 'silly';
    }

    this.app = await Architect.create(this._projectClass, logLevel);

    // we have to do this late because the config file is only loaded once we have the -c parameter
    if (actionCommand == this.pluginCommand!) {
      for (const plugin of Object.values(this.app.pluginRegistry.data)) {
        await plugin.registerCommand(actionCommand);
      }
    }
  }

  private async compile(options: AppCommandCompileOptions) {
    const params: TargetResolveParams = {
      requirements: options.requirements,
      validate: options.validate,
    };

    const targets = options.target
      ? [await this.project.getTarget(options.target)]
      : await this.project.getTargets();

    if (targets.length <= 0) {
      console.log(`Unable to find any targets`);
      return;
    }

    // currently the bar only works when we're not rendering multiple targets in parallel
    //const bar = targets.length == 1 ? new CompileProgressBar() : undefined;

    await Promise.all(targets.map(async (v): Promise<void> => {
      if (!v) return;

      const result = await v.compile(params, undefined);
      if (result == null) return;

      const output = path.join(options.output, v.model.metadata.name!);
      await fs.rm(output, {recursive: true, force: true});
      await fs.mkdir(output, {recursive: true});
      await result.write(output);

      if (options.graph) {
        await DependencyGraphRenderer.render(result.graph, {
          path: output,
        });
      }
    }));

    //if (bar != undefined) await bar.render();
  }

  private async apply(options: AppCommandApplyOptions) {
    const params: TargetResolveParams = {
      requirements: options.requirements,
      validate: options.validate,
      graph: options.graph,
    };

    const targets = options.target
      ? [await this.project.getTarget(options.target)]
      : await this.project.getTargets();

    if (targets.length <= 0) {
      console.log(`Unable to find any targets`);
      return;
    }

    await Promise.all(targets.map(async (v): Promise<void> => {
      if (!v) return;

      await v.apply(params);
    }));
  }
}
