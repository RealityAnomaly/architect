import * as commander from 'commander';
import 'reflect-metadata';

import { IArchitect, TargetClass } from '../../index.ts';
import * as logtape from '@logtape/logtape';
import Module from 'node:module';
import { TypeUtilities } from '../../utils/types.ts';
import { ModuleUtilities } from '../../utils/modules.ts';
import { Constants } from '../constants.ts';

/**
 * Represents an extension to Architect that defines new functionality.
 */
export interface IPlugin {
  /**
   * Returns the owning app instance of the plugin.
   */
  get parent(): IArchitect;

  /**
   * Returns a mapping of target type identifiers to concrete target classes provided by this plugin.
   */
  get targets(): Record<string, TargetClass>;

  /**
   * Does some work to initialise the plugin. Called once at app init time, after the root project is loaded.
   */
  init(): Promise<void>;

  /**
   * Registers a command group to allow extending the CLI with plugin-specific commands.
   * @param command The command to register.
   */
  registerCommand(command: commander.Command): Promise<void>;
}

export abstract class Plugin implements IPlugin {
  public static TARGET_IDENTIFIERS = {
    kubernetes: "target.architect.glassway.net/kubernetes",
  };

  private readonly _parent: IArchitect;
  public readonly name: string;
  public readonly logger: logtape.Logger;

  protected constructor(parent: IArchitect, name: string) {
    this._parent = parent;
    this.name = name;
    this.logger = logtape.getLogger(['architect', 'plugin', name]);
  }

  public get parent(): IArchitect { return this._parent; }

  public abstract get targets(): Record<string, TargetClass>;

  // noinspection JSUnusedGlobalSymbols
  public static decorate<T extends Plugin>(
    clazz: string,
  ): (target: PluginClass<T>) => void {
    function decorator(target: PluginClass<T>) {
      Reflect.defineMetadata(Constants.TYPE_META_KEY, "plugin", target);
      Reflect.defineMetadata(Constants.CLASS_META_KEY, clazz, target);
    }

    return decorator;
  }

  // noinspection JSUnusedGlobalSymbols
  public static async collect(module: Module): Promise<PluginClass[]> {
    return ModuleUtilities.collectClasses(module, (clazz) => {
      return TypeUtilities.isObject(clazz) &&
        Reflect.hasMetadata(Constants.TYPE_META_KEY, clazz) &&
        Reflect.getMetadata(Constants.TYPE_META_KEY, clazz) === "plugin";
    });
  }

  public abstract init(): Promise<void>;

  public abstract registerCommand(command: commander.Command): Promise<void>;
}

export interface PluginClass<T extends Plugin = Plugin> {
  new (parent: IArchitect): T;
}
