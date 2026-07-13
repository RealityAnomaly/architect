import * as kubeUtils from './kubernetes/index.ts';
import 'reflect-metadata';
import path from 'node:path';
import { PluginRegistry } from './plugin.ts';
import { TargetCache } from './internal/index.ts';
import * as logtape from '@logtape/logtape';
import { Project } from './internal/project/index.ts';
import { Ajv } from 'ajv';

import { TypeRegistry } from './utils/index.ts';
import { StateProvider } from './utils/state.ts';
import { ProjectClass } from './index.ts';

/**
 * The main class of the application.
 */
export class Architect {
  public static PATH: string = path.resolve(path.join(import.meta.dirname!, '..'));

  public static readonly TYPE_META_KEY = 'architect.glassway.net/type';
  public static readonly MODEL_META_KEY = 'architect.glassway.net/model';
  public static readonly CLASS_META_KEY = 'architect.glassway.net/class';
  public static readonly TARGET_TYPE_META_KEY =
    'architect.glassway.net/target-type';

  public project?: Project;

  public readonly ajv: Ajv;
  public readonly pluginRegistry: PluginRegistry;
  public readonly projectRegistry: TypeRegistry<Project>;
  public readonly logger: logtape.Logger;
  public readonly state: StateProvider;
  public readonly cache: TargetCache;
  public readonly kubeTypes: kubeUtils.KubeTypeRegistry;
  public readonly kubeLoader: kubeUtils.ManifestLoader;

  private constructor(project?: ProjectClass, logLevel: logtape.LogLevel = 'info') {
    this.ajv = new Ajv();

    this.projectRegistry = new TypeRegistry(this);
    this.pluginRegistry = new PluginRegistry();

    logtape.configure({
      sinks: { console: logtape.getConsoleSink() },
      loggers: [
        { category: "architect", lowestLevel: logLevel, sinks: ["console"] }
      ]
    });

    this.logger = logtape.getLogger(["architect"]);

    this.logger.debug(`initialised logging with level '${logLevel}'`);

    this.state = StateProvider.fromAppDirs();
    this.cache = new TargetCache(this.state, this.logger);

    this.kubeTypes = new kubeUtils.KubeTypeRegistry(this.logger);
    this.kubeLoader = new kubeUtils.ManifestLoader(this.kubeTypes);

    if (project) this.project = new project(this);
  }

  public async init() {
    if (this.project) await this.project.load(true);

    for (const project of this.getProjects()) {
      // register plugins for all projects
      for (const plugin of project.getPlugins()) {
        await this.pluginRegistry.register(plugin, this);
      }

      // register project modules against CRD registry
      for (const module of project.getModules()) {
        this.kubeTypes.appendModule(module as object);
      }
    }

    await this.pluginRegistry.resolve();
    await this.pluginRegistry.init();
  }

  public static async create(
    project?: ProjectClass,
    logLevel: logtape.LogLevel = 'info',
  ): Promise<Architect> {
    const instance = new Architect(project, logLevel);
    await instance.init();

    return instance;
  }

  public static class(name: string): any {
    return Reflect.metadata(Architect.CLASS_META_KEY, name);
  }

  public getProjects(): Project[] {
    const projects = this.project !== undefined ? [this.project] : [];
    return projects.concat(...this.projectRegistry.data.map((p) => p.instance));
  }
}
