import * as commander from 'npm:commander';
import { Architect, TargetClass } from './index.mts';
import { Logger } from 'npm:winston';

export class PluginResolver {
  private readonly parent: Architect;
  public readonly data: Record<string, Plugin> = {};

  constructor(parent: Architect) {
    this.parent = parent;
  };

  public async register(plugin: PluginConstructor): Promise<void> {
    this.data[plugin.id] = new plugin(this.parent);
  };

  public async resolve(): Promise<void> {};

  public async init(): Promise<void> {
    for (const plugin of Object.values(this.data)) {
      await plugin.init();
    }
  };

  public get(module: string): Plugin {
    return this.data[module];
  };

  public get targetMap(): Record<string, TargetClass> {
    const results = {} as Record<string, TargetClass>;
    Object.values(this.data).forEach(p => {
      for (const [k, v] of Object.entries(p.targets)) results[k] = v;
    });

    return results;
  };
};

/**
 * Represents an extension to Architect that defines new functionality.
 */
export abstract class Plugin {
  public readonly name: string;
  public readonly parent: Architect;
  public readonly logger: Logger;

  constructor(parent: Architect, name: string) {
    this.name = name;
    this.parent = parent;
    this.logger = parent.logger.child({ component: `plugin.${name}` })
  }

  public abstract init(): Promise<void>;

  public abstract registerCommand(command: commander.Command): Promise<void>; 

  public abstract get targets(): Record<string, TargetClass>;
};

export interface PluginConstructor<T extends Plugin = Plugin> {
  id: string;
  new (parent: Architect): T;
};
