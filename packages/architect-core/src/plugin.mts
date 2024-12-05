import * as commander from 'npm:commander';
import { Reflect } from "jsr:@dx/reflect";

import { Architect, CLASS_META_KEY, TargetClass, TYPE_META_KEY } from './index.mts';
import { Logger } from 'npm:winston';
import Module from "node:module";
import { TypeUtilities } from "./utils/types.mts";
import { ModuleUtilities } from "./utils/modules.mts";

export class PluginResolver {
  private readonly parent: Architect;
  public readonly data: Record<string, Plugin> = {};

  constructor(parent: Architect) {
    this.parent = parent;
  };

  public async register(plugin: PluginConstructor): Promise<void> {
    const clazz = Reflect.getMetadata(CLASS_META_KEY, plugin);
    this.data[clazz] = new plugin(this.parent);
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

  public static decorate<T extends Plugin>(clazz: string): (target: PluginConstructor<T>) => void {
    function decorator(target: PluginConstructor<T>) {
      Reflect.defineMetadata(TYPE_META_KEY, 'plugin', target);
      Reflect.defineMetadata(CLASS_META_KEY, clazz, target);
    };

    return decorator;
  };

  public static async collect(module: Module): Promise<PluginConstructor[]> {
    return ModuleUtilities.collectClasses(module, clazz => {
      return TypeUtilities.isObject(clazz) && Reflect.hasMetadata(TYPE_META_KEY, clazz) && Reflect.getMetadata(TYPE_META_KEY, clazz) === 'plugin';
    });
  };
};

export interface PluginConstructor<T extends Plugin = Plugin> {
  new (parent: Architect): T;
};
