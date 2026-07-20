import * as kubeUtils from './kubernetes/index.ts';
import 'reflect-metadata';
import path from 'node:path';
import { TargetCache } from './internal/index.ts';
import * as logtape from '@logtape/logtape';
import { IProject } from './internal/project/index.ts';
import { Ajv } from 'ajv';

import { TypeRegistry } from './utils/index.ts';
import { StateProvider } from './utils/state.ts';
import { ProjectClass } from './index.ts';
import { PluginRegistry } from './internal/plugin/registry.ts';
import { Constants } from './internal/constants.ts';

export interface IArchitect {
  get ajv(): Ajv;
  get pluginRegistry(): PluginRegistry;
  get projectRegistry(): TypeRegistry<IProject>;
  get logger(): logtape.Logger;
  get state(): StateProvider;
  get cache(): TargetCache;
  get kubeTypes(): kubeUtils.KubeTypeRegistry;
  get kubeLoader(): kubeUtils.ManifestLoader;
  get project(): IProject | undefined;
  init(): Promise<void>;
  getProject(): IProject;
  getProjects(): IProject[];
}

/**
 * The main class of the application.
 */
export class Architect implements IArchitect {
  public static PATH: string = path.resolve(path.join(import.meta.dirname!, '..'));

  protected _project?: IProject;

  protected readonly _ajv: Ajv;
  protected readonly _pluginRegistry: PluginRegistry;
  protected readonly _projectRegistry: TypeRegistry<IProject>;
  protected readonly _logger: logtape.Logger;
  protected readonly _state: StateProvider;
  protected readonly _cache: TargetCache;
  protected readonly _kubeTypes: kubeUtils.KubeTypeRegistry;
  protected readonly _kubeLoader: kubeUtils.ManifestLoader;

  private constructor(project?: ProjectClass, logLevel: logtape.LogLevel = 'info') {
    this._ajv = new Ajv();

    this._projectRegistry = new TypeRegistry(this);
    this._pluginRegistry = new PluginRegistry();

    logtape.configure({
      sinks: { console: logtape.getConsoleSink() },
      loggers: [
        { category: "logtape", lowestLevel: "warning", sinks: ["console"] },
        { category: "architect", lowestLevel: logLevel, sinks: ["console"] },
        { category: ["architect", "updater", "validator"], lowestLevel: "warning" },
      ]
    });

    this._logger = logtape.getLogger(["architect"]);

    this._logger.debug(`initialised logging with level '${logLevel}'`);

    this._state = StateProvider.fromAppDirs();
    this._cache = new TargetCache(this._state, this._logger);

    this._kubeTypes = new kubeUtils.KubeTypeRegistry(this._logger);
    this._kubeLoader = new kubeUtils.ManifestLoader(this._kubeTypes);

    if (project) this._project = new project(this);
  }

  public get ajv() { return this._ajv; }
  public get pluginRegistry() { return this._pluginRegistry; }
  public get projectRegistry() { return this._projectRegistry; }
  public get logger() { return this._logger; }
  public get state() { return this._state; }
  public get cache() { return this._cache; }
  public get kubeTypes() { return this._kubeTypes; }
  public get kubeLoader() { return this._kubeLoader; }
  public get project() { return this._project; }

  public async init() {
    if (this._project) await this._project.load(true);

    for (const project of this.getProjects()) {
      // register plugins for all projects
      for (const plugin of project.getPlugins()) {
        await this._pluginRegistry.register(plugin, this);
      }

      // register project modules against CRD registry
      for (const module of project.getModules()) {
        this.kubeTypes.appendModule(module as object);
      }
    }

    await this._pluginRegistry.init();
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
    return Reflect.metadata(Constants.CLASS_META_KEY, name);
  }

  public getProject(): IProject {
    if (!this._project) throw new Error("Project is not available");
    return this._project;
  }

  public getProjects(): IProject[] {
    const projects = this._project !== undefined ? [this._project] : [];
    return projects.concat(...this._projectRegistry.data.map((p) => p.instance));
  }
}
