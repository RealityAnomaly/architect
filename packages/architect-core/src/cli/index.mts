import path from 'path';
import * as commander from 'commander';
import { TargetResolveParams } from '../target.mts';
import { Architect } from '../index.mts';
import { ComponentCommand } from '../components/cli.mts';

export class App {
  public parent?: Architect;
  private pluginCommand?: commander.Command;

  private constructor() {}

  public static async run() {
    const instance = new App();

    const command = await instance.build();
    await command.parseAsync();
  };

  private async preSubcommand(thisCommand: commander.Command, actionCommand: commander.Command): Promise<void> {
    const options = thisCommand.opts();
    this.parent = await Architect.create(options.workspace, options.config, options.debug);

    // we have to do this late because the config file is only loaded once we have the -c parameter
    if (actionCommand == this.pluginCommand!) {
      for (const plugin of Object.values(this.parent.plugins.data)) {
        plugin.registerCommand(actionCommand);
      }
    }
  }

  private async compile(options: any) {
    const params: TargetResolveParams = {
      requirements: options.requirements,
      validate: options.validate,
    };

    await this.parent!.compile(options.output, params);
  };

  protected async build(): Promise<commander.Command> {
    const program = new commander.Command();
    program.hook('preSubcommand', this.preSubcommand.bind(this));

    program
      .name('architect')
      .description('Architect is a framework for generating structured configuration trees in TypeScript.')
      .option('-d, --debug', 'enable debug logging', false)
      .option('-w, --workspace <path>', 'path to the workspace to use (default current dir)', process.cwd())
      .option('-c, --config <path>', 'configuration file (default architect.yaml)', path.join(process.cwd(), 'architect.yaml'))

    program.command('compile')
      .description('Runs the build process')
      .option('-o, --output <dir>', 'output directory', path.join(process.cwd(), 'build'))
      .option('--no-validate', 'skips resource validation')
      .option('--no-requirements', 'skips requirement validation')
      .action(this.compile.bind(this));
    
      program.addCommand(new ComponentCommand(this));
    
    this.pluginCommand = program.command('plugin')
      .description('Commands for plugin modules')

    return program;
  };
};
