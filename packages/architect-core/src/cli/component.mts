import { Command } from 'commander';
import { Reflect } from '@dx/reflect';
import { App, AppCommandOptions, Architect, ComponentClass, } from '../index.mts';
import { Updater } from '../internal/index.mts';

interface AppCommandComponentOptions extends AppCommandOptions {}

interface AppCommandComponentListOptions extends AppCommandComponentOptions {
  library?: string;
}

interface AppComponentCommandShowOptions extends AppCommandComponentOptions {
  class: string;
}

interface AppComponentCommandUpgradeOptions extends AppCommandComponentOptions {
  class?: string;
  dryRun: boolean;
  validate: boolean;
}

export class ComponentCommand extends Command {
  private readonly cli: App;

  constructor(cli: App) {
    super('component');

    this.cli = cli;
    this.description('Commands for manipulating components');

    this.command('list')
      .description('Lists available components')
      .option('--library <library>', 'Lists components for a specific library')
      .action(this.list.bind(this));
    this.command('show')
      .description('Shows information about a specific component')
      .requiredOption(
        '--class <class>',
        'Specify the component class (required)',
      )
      .action(this.show.bind(this));
    this.command('upgrade')
      .description('Upgrades versions of component dependencies')
      .option('--class <class>', 'Only target the specified component class')
      .option(
        '--dry-run',
        'Simulates the upgrade, displaying the changes that would be made',
        false,
      )
      .option(
        '--no-validate',
        'Disables post-upgrade component build validation',
        false,
      )
      .action(this.upgrade.bind(this));
  }

  private async list(options: AppCommandComponentListOptions) {
    const context = this.cli.instance!;
    const ourComponents = await context.project!.getComponents();

    if (!options.library && ourComponents.length > 0) {
      console.log('Current project:');
      for (const component of ourComponents) {
        console.log(
          '  - ' + Reflect.getMetadata(Architect.CLASS_META_KEY, component),
        );
      }

      console.log('');
    }

    for (const library of context.project!.resolveImports()) {
      if (options.library && library.config.name !== options.library) continue;

      const components = await library.getComponents();
      if (components.length <= 0) continue;

      console.log(`Library ${library.config.name}:`);
      for (const component of components) {
        console.log(
          '  - ' + Reflect.getMetadata(Architect.CLASS_META_KEY, component),
        );
      }

      console.log('');
    }
  }

  private async show(options: AppComponentCommandShowOptions) {
    const context = this.cli.instance!;
    const component = await context.project!.getComponent(options.class, true);
    if (!component) {
      console.log(`Unable to find any component with class ${options.class}`);
      return;
    }

    console.log(options.class);
  }

  private async upgrade(options: AppComponentCommandUpgradeOptions) {
    const context = this.cli.instance!;
    let components: ComponentClass[] = [];
    if (options.class) {
      const component = await context.project!.getComponent(options.class);
      if (component) components = [component];
    } else {
      components = await context.project!.getComponents();
    }

    if (components.length <= 0) {
      console.log(`Unable to find any components to upgrade`);
      return;
    }

    const updater = new Updater(context.project!);
    await updater.update(components, options.dryRun);
  }
}
