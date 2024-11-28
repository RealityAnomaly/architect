import { Command } from "commander";
import { App } from "../index.mts";

export class ComponentCommand extends Command {
  private readonly app: App;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private async list(options: any) {
    const libraryName = options.library as string | undefined;
    const ourComponents = await this.app.parent!.project!.getComponents(false);

    if (!libraryName && ourComponents.length > 0) {
      console.log('Current project:');
      for (const component of ourComponents) {
        console.log('  - ' + Reflect.getMetadata('class', component));
      };

      console.log('');
    };

    for (const library of this.app.parent!.project!.libraries) {
      if (libraryName && library.moduleName !== libraryName) continue;

      const components = await library.getComponents(false);
      if (components.length <= 0) continue;

      console.log(`Library ${library.moduleName}:`)
      for (const component of components) {
        console.log('  - ' + Reflect.getMetadata('class', component));
      };

      console.log('');
    };
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private async show(options: any) {
    const clazz = options.class as string;

    const components = await this.app.parent!.project!.getComponents(true);
    const component = components.find(c => Reflect.getMetadata('class', c) === clazz);
    if (!component) {
      console.log(`Unable to find any component with class ${clazz}`)
      return;
    };

    console.log(clazz);
  };

  constructor(app: App) {
    super('component');

    this.app = app;
    this.description('Commands for showing information about components');

    this.command('list')
      .description('Lists available components')
      .option('--library <library>', 'Lists components for a specific library')
      .action(this.list.bind(this));
    this.command('show')
      .description('Shows information about a specific component')
      .requiredOption('--class <class>', 'Specify the component class (required)')
      .action(this.show.bind(this));
  };
}
