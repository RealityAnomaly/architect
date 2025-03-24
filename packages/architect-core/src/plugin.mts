import * as commander from 'commander';
import { Reflect } from '@dx/reflect';

import { Architect, TargetClass } from './index.mts';
import { Logger } from 'winston';
import Module from 'node:module';
import { TypeUtilities } from './utils/types.mts';
import { ModuleUtilities } from './utils/modules.mts';

export class PluginRegistry {
  public readonly data: Record<string, Plugin> = {};

  public get targetMap(): Record<string, TargetClass> {
    const results = {} as Record<string, TargetClass>;
    Object.values(this.data).forEach((p) => {
      for (const [k, v] of Object.entries(p.targets)) results[k] = v;
    });

    return results;
  }

  public async register(plugin: PluginClass, parent: Architect): Promise<void> {
    const clazz = Reflect.getMetadata(Architect.CLASS_META_KEY, plugin);
    this.data[clazz] = new plugin(parent);
  }

  public async resolve(): Promise<void> {}

  public async init(): Promise<void> {
    for (const plugin of Object.values(this.data)) {
      await plugin.init();
    }
  }

  public get(module: string): Plugin {
    return this.data[module];
  }
}

/**
 * Represents an extension to Architect that defines new functionality.
 */
export abstract class Plugin {
  public static TARGET_IDENTIFIERS = {
    kubernetes: "target.architect.glassway.net/kubernetes",
  };

  public readonly name: string;
  public readonly parent: Architect;
  public readonly logger: Logger;

  protected constructor(parent: Architect, name: string) {
    this.name = name;
    this.parent = parent;
    this.logger = parent.logger.child({ component: `plugin.${name}` });
  }

  public abstract get targets(): Record<string, TargetClass>;

  public static decorate<T extends Plugin>(
    clazz: string,
  ): (target: PluginClass<T>) => void {
    function decorator(target: PluginClass<T>) {
      Reflect.defineMetadata(Architect.TYPE_META_KEY, "plugin", target);
      Reflect.defineMetadata(Architect.CLASS_META_KEY, clazz, target);
    }

    return decorator;
  }

  public static async collect(module: Module): Promise<PluginClass[]> {
    return ModuleUtilities.collectClasses(module, (clazz) => {
      return TypeUtilities.isObject(clazz) &&
        Reflect.hasMetadata(Architect.TYPE_META_KEY, clazz) &&
        Reflect.getMetadata(Architect.TYPE_META_KEY, clazz) === "plugin";
    });
  }

  public abstract init(): Promise<void>;

  public abstract registerCommand(command: commander.Command): Promise<void>;
}

export interface PluginClass<T extends Plugin = Plugin> {
  new (parent: Architect): T;
}
