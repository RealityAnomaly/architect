import { Command } from "commander";
import { App, AppCommandOptions } from "../index.mts";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface AppCommandComponentOptions extends AppCommandOptions {};

interface AppCommandComponentListOptions extends AppCommandComponentOptions {
  library?: string;
};

interface AppComponentCommandShowOptions extends AppCommandComponentOptions {
  class: string;
};

export class ComponentCommand extends Command {
  private readonly app: App;

  private async list(options: AppCommandComponentListOptions) {
    const ourComponents = await this.app.parent!.project!.getComponents(false);

    if (!options.library && ourComponents.length > 0) {
      console.log('Current project:');
      for (const component of ourComponents) {
        console.log('  - ' + Reflect.getMetadata('class', component));
      };

      console.log('');
    };

    for (const library of this.app.parent!.project!.libraries) {
      if (options.library && library.moduleName !== options.library) continue;

      const components = await library.getComponents(false);
      if (components.length <= 0) continue;

      console.log(`Library ${library.moduleName}:`)
      for (const component of components) {
        console.log('  - ' + Reflect.getMetadata('class', component));
      };

      console.log('');
    };
  };

  private async show(options: AppComponentCommandShowOptions) {
    const component = await this.app.parent!.project!.getComponent(options.class, true);
    if (!component) {
      console.log(`Unable to find any component with class ${options.class}`);
      return;
    };

    console.log(options.class);
  };

  constructor(app: App) {
    super('component');

    this.app = app;
    this.description('Commands for manipulating components');

    this.command('list')
      .description('Lists available components')
      .option('--library <library>', 'Lists components for a specific library')
      .action(this.list.bind(this));
    this.command('show')
      .description('Shows information about a specific component')
      .requiredOption('--class <class>', 'Specify the component class (required)')
      .action(this.show.bind(this));
  };
};
