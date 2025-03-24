import * as kubeUtils from './kubernetes/index.mts';
import { Reflect } from '@dx/reflect';
import path from 'node:path';
import { PluginRegistry } from './plugin.mts';
import { TargetCache } from './internal/index.mts';
import winston from 'winston';
import { Project } from './internal/project/index.mts';
import { Ajv } from 'ajv';

import { TypeRegistry } from './utils/index.mts';
import { StateProvider } from './utils/state.mts';
import { ProjectClass } from './index.mts';

export class Architect {
  public static PATH = path.resolve(path.join(import.meta.dirname!, '..'));

  public static readonly TYPE_META_KEY = 'architect.glassway.net/type';
  public static readonly MODEL_META_KEY = 'architect.glassway.net/model';
  public static readonly CLASS_META_KEY = 'architect.glassway.net/class';
  public static readonly TARGET_TYPE_META_KEY =
    'architect.glassway.net/target-type';

  public project?: Project;

  public readonly ajv: Ajv;
  public readonly pluginRegistry: PluginRegistry;
  public readonly projectRegistry: TypeRegistry<Project>;
  public readonly logger: winston.Logger;
  public readonly state: StateProvider;
  public readonly cache: TargetCache;
  public readonly kubeTypes: kubeUtils.KubeTypeRegistry;
  public readonly kubeLoader: kubeUtils.ManifestLoader;

  private constructor(logLevel: string = 'info') {
    this.ajv = new Ajv();

    this.projectRegistry = new TypeRegistry(this);
    this.pluginRegistry = new PluginRegistry(this);

    this.logger = winston.createLogger({
      level: logLevel,
      format: winston.format.cli(),
      transports: [
        new winston.transports.Console(),
      ],
    });

    this.logger.debug(`initialised logging with level '${logLevel}'`);

    this.state = StateProvider.fromAppDirs();
    this.cache = new TargetCache(this.state, this.logger);

    this.kubeTypes = new kubeUtils.KubeTypeRegistry(this.logger);
    this.kubeLoader = new kubeUtils.ManifestLoader(this.kubeTypes);
  }

  public static async create(
    project?: ProjectClass,
    logLevel: string = 'info',
  ): Promise<Architect> {
    const instance = new Architect(logLevel);
    if (project) instance.project = new project(instance);
    await instance.project?.load(true);

    for (const project of instance.getProjects()) {
      // register project plugins
      for (const plugin of project.getPlugins()) {
        await instance.pluginRegistry.register(plugin);
      }

      // register project modules against CRD registry
      // TODO: maybe instead have the registry do this?
      for (const module of project.getModules()) {
        instance.kubeTypes.appendModule(module as object);
      }
    }

    await instance.pluginRegistry.resolve();
    await instance.pluginRegistry.init();

    return instance;
  }

  public static class(name: string) {
    return Reflect.metadata(Architect.CLASS_META_KEY, name);
  }

  public getProjects(): Project[] {
    return this.projectRegistry.data.map((p) => p.instance);
  }
}
