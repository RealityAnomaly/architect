import path from 'node:path';
import * as commander from 'commander';
import { TargetResolveParams } from '../target.mts';
import { Architect } from '../index.mts';
import { ComponentCommand } from './component.mts';
import { TargetCommand } from './target.mts';
import process from "node:process";
import { Project, ProjectClass } from "../project.mts";

export interface AppCommandOptions {
  debug: boolean;
};

interface AppCommandCompileOptions extends AppCommandOptions {
  target?: string;
  output: string;
  components: string[];
  graph: boolean;
  validate: boolean;
  requirements: boolean;
};

interface AppCommandApplyOptions extends AppCommandCompileOptions {};

export class App {
  public readonly project?: Project;
  public parent?: Architect;
  private pluginCommand?: commander.Command;

  private constructor(project?: Project) {
    this.project = project;
  }

  public static async run(_project?: ProjectClass) {
    const project = _project ? new _project() : undefined;
    if (project) project.root = await this.findProjectRoot(Deno.cwd());

    const instance = new App(project);
    const command = await instance.build();
    await command.parseAsync();
  };

  private static async findProjectRoot(start: string): Promise<string | undefined> {
    
    const parts = start.split(path.sep);
    while (parts.length > 0) {
      const fn = path.join(...parts, 'architect.json');

      try {
        const result = await Deno.stat(fn);
        if (result.isFile) return path.resolve(path.join(...parts));
      } catch {
        // pass
      };

      parts.pop();
    };

    return undefined;
  };

  private increaseVerbosity(_dummyValue: string, previous: number): number {
    return previous + 1;
  }

  private async preSubcommand(thisCommand: commander.Command, actionCommand: commander.Command): Promise<void> {
    const options = thisCommand.opts();
    let logLevel = 'info';
    if (options.verbose === 1) {
      logLevel = 'debug';
    } else if (options.verbose >= 2) {
      logLevel = 'silly';
    };

    this.parent = await Architect.create(this.project, logLevel);

    // we have to do this late because the config file is only loaded once we have the -c parameter
    if (actionCommand == this.pluginCommand!) {
      for (const plugin of Object.values(this.parent.plugins.data)) {
        await plugin.registerCommand(actionCommand);
      };
    };
  };

  private async compile(options: AppCommandCompileOptions) {
    const params: TargetResolveParams = {
      requirements: options.requirements,
      validate: options.validate,
      graph: options.graph,
    };

    if (options.target) {
      const target = await this.project!.getTarget(this.parent!, options.target);
      if (!target) {
        console.log(`Unable to find any target with name ${options.target}`);
        return;
      };

      await this.parent!.compile(path.join(options.output, target.model.metadata.name!), target, params);
    } else {
      const targets = await this.project!.getTargets(this.parent!);
      await Promise.all(targets.map(async (v): Promise<void> => {
        await this.parent!.compile(path.join(options.output, v.model.metadata.name!), v, params);
      }));
    };
  };

  private async apply(options: AppCommandApplyOptions) {
    const params: TargetResolveParams = {
      requirements: options.requirements,
      validate: options.validate,
      graph: options.graph,
    };

    if (options.target) {
      const target = await this.project!.getTarget(this.parent!, options.target);
      if (!target) {
        console.log(`Unable to find any target with name ${options.target}`);
        return;
      };

      await this.parent!.compile(path.join(options.output, target.model.metadata.name!), target, params);
    } else {
      const targets = await this.project!.getTargets(this.parent!);
      await Promise.all(targets.map(async (v): Promise<void> => {
        await this.parent!.compile(path.join(options.output, v.model.metadata.name!), v, params);
      }));
    };
  };

  protected async build(): Promise<commander.Command> {
    const program = new commander.Command();
    program.hook('preSubcommand', this.preSubcommand.bind(this));

    program
      .name('architect')
      .description('Architect is a framework for generating structured configuration trees in TypeScript.')
      .option('-v, --verbose', 'increase the verbosity (can be specified up to two times)', this.increaseVerbosity.bind(this), 0)

    if (this.project) {
      program.command('compile')
        .description('Compiles resources for the specified target or all targets')
        .option('-t, --target <target>', 'the target to compile for')
        .option('-o, --output <dir>', 'output directory', path.join(process.cwd(), 'build'))
        .option('-c, --component [components...]', 'list of component names to compile', [])
        .option('-g, --graph', 'render and write a dependency graph')
        .option('--no-validate', 'skips resource validation')
        .option('--no-requirements', 'skips requirement validation')
        .action(this.compile.bind(this));
      
      program.command('apply')
        .description('Applies compiled resources to infrastructure')
        .requiredOption('-t, --target <target>', 'the target to deploy to')
        .option('-o, --output <dir>', 'output directory', path.join(process.cwd(), 'build'))
        .option('-c, --component [components...]', 'list of component names to apply', [])
        .option('--no-validate', 'skips resource validation')
        .option('--no-requirements', 'skips requirement validation')
        .action(this.apply.bind(this));
      
      program.addCommand(new ComponentCommand(this));
      program.addCommand(new TargetCommand(this));
    };
    
    this.pluginCommand = program.command('plugin')
      .description('Commands for plugin modules');

    return program;
  };
};
