import * as fs from 'node:fs/promises';
import path from 'path';
import * as commander from 'commander';
import { Target, TargetResolveParams } from '../target.mts';

export class App {
  private readonly dir: string;

  public constructor(dir: string) {
    this.dir = dir;
  };

  public run() {
    const command = this.build();
    command.parse();
  };

  private async compile(options: any) {
    const output = options.output;
    const targets = await Target.collectFolder(path.join(this.dir, 'targets'));
    const params: TargetResolveParams = {
      requirements: options.requirements,
      validate: options.validate,
    };

    await fs.rm(output, { recursive: true, force: true });
    await fs.mkdir(output, { recursive: true });
    await Promise.all(Object.entries(targets).map(async ([k, v]): Promise<void> => {
      const resolved = await v.resolve(params);
      await resolved.write(path.join(output, k));
    }));
  };

  protected build(): commander.Command {
    const program = new commander.Command();

    program
      .name('architect')
      .description('Architect is a framework for generating structured configuration trees in TypeScript.');

    program.command('compile')
      .description('Runs the build process')
      .option('-o, --output <dir>', 'output directory', path.join(this.dir, '../build'))
      .option('--no-validate', 'skips resource validation')
      .option('--no-requirements', 'skips requirement validation')
      .action(this.compile.bind(this));
    
    const plugins = program.command('plugin')
      .description('Commands for plugin modules')
    
    // add from k8s package
    //plugins.addCommand()
    
    plugins.command('k8s')
      .description('Commands for the Kubernetes module')

    return program;
  };
};

//new App(process.cwd()).run();
