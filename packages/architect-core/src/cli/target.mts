import { Command } from 'commander';
import { App, AppCommandOptions, Component } from '../index.mts';

interface AppCommandTargetOptions extends AppCommandOptions {}
interface AppCommandTargetListOptions extends AppCommandTargetOptions {}
interface AppCommandTargetShowOptions extends AppCommandTargetOptions {
  name: string;
}

export class TargetCommand extends Command {
  private readonly app: App;

  constructor(app: App) {
    super('target');

    this.app = app;
    this.description('Commands for manipulating targets');

    this.command('list')
      .description('Lists available targets')
      .action(this.list.bind(this));
    this.command('show')
      .description('Shows information about a specific target')
      .requiredOption('-n, --name <name>', 'The name of the target')
      .action(this.show.bind(this));
  }

  private async list(_options: AppCommandTargetListOptions) {
    const context = this.app.instance!;
    const targets = await context.project!.getTargets();
    if (targets.length > 0) {
      console.log(`${targets.length} targets available:`);
    } else {
      console.log(
        'No targets were found in the current project. Is your backend set up correctly?',
      );
    }

    for (const target of targets) {
      console.log('  - ' + target.model.metadata.name);
    }
  }

  private async show(options: AppCommandTargetShowOptions) {
    const context = this.app.instance!;
    const target = await context.project!.getTarget(options.name);
    if (!target) {
      console.log(`Unable to find any target with name ${options.name}`);
      return;
    }

    console.log(`Name: ${target.model.metadata.name}`);
    console.log(`Plugin: ${Object.keys(target.model.spec.plugins!)[0]}`);

    console.log('Components:');
    for (
      const [_, v] of Object.entries(
        target.components.data as Record<string, Component>,
      )
    ) {
      const component = v as Component;
      console.log(`  - ${component.context.name}`);
    }
  }
}
