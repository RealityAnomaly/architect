import * as commander from 'commander';
import { Architect, TargetClass } from './index.mts';
import { Logger } from 'winston';

const STANDARD_PLUGINS = [
  "@perdition/architect-k8s"
]

export class PluginResolver {
  private readonly parent: Architect;
  public readonly data: Record<string, Plugin> = {};

  constructor(parent: Architect) {
    this.parent = parent;
  };

  public async register(module: string): Promise<void> {
    this.data[module] = new (await import(module)).default(this.parent) as Plugin;
  };

  public async resolve(): Promise<void> {
    for (const plugin of STANDARD_PLUGINS) {
      await this.register(plugin);
    }
  };

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
      for (const target of p.targets) results[target.key] = target;
    });

    return results;
  };
}

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

  public abstract get targets(): TargetClass[];
}
