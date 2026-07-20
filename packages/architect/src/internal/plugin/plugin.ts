import * as commander from 'commander';
import 'reflect-metadata';

import { IArchitect, Architect, TargetClass } from '../../index.ts';
import * as logtape from '@logtape/logtape';
import Module from 'node:module';
import { TypeUtilities } from '../../utils/types.ts';
import { ModuleUtilities } from '../../utils/modules.ts';

/**
 * Represents an extension to Architect that defines new functionality.
 */
export abstract class Plugin {
  public static TARGET_IDENTIFIERS = {
    kubernetes: "target.architect.glassway.net/kubernetes",
  };

  public readonly name: string;
  public readonly parent: IArchitect;
  public readonly logger: logtape.Logger;

  protected constructor(parent: IArchitect, name: string) {
    this.name = name;
    this.parent = parent;
    this.logger = logtape.getLogger(['architect', 'plugin', name]);
  }

  public abstract get targets(): Record<string, TargetClass>;

  // noinspection JSUnusedGlobalSymbols
  public static decorate<T extends Plugin>(
    clazz: string,
  ): (target: PluginClass<T>) => void {
    function decorator(target: PluginClass<T>) {
      Reflect.defineMetadata(Architect.TYPE_META_KEY, "plugin", target);
      Reflect.defineMetadata(Architect.CLASS_META_KEY, clazz, target);
    }

    return decorator;
  }

  // noinspection JSUnusedGlobalSymbols
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
  new (parent: IArchitect): T;
}
