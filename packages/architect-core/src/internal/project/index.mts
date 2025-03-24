import path from 'node:path';
import { Reflect } from '@dx/reflect';

import { ArchitectCoreProject, ComponentClass, ComponentLoader, ComponentMetadata, Target, TargetLoader, } from '../../index.mts';
import { PluginClass } from '../../plugin.mts';
import Module from 'node:module';
import { Architect } from '../../app.mts';
import { ProjectConfig, ProjectConfigLoader } from './config.mts';
import { ProjectUtils } from './utils.mts';

export abstract class Project {
  /**
   * The root path of the project. Only set if this project is the currently active workspace.
   */
  public root?: string;
  public app: Architect;
  private loaded?: boolean = false;

  private modules: unknown[] = [];
  private imports: ProjectClass[] = [];
  private plugins: PluginClass[] = [];

  private components?: ComponentClass[];
  private targets?: Target[];

  constructor(app: Architect) {
    this.app = app;
  }

  public get config(): ProjectConfig {
    return ProjectMetadata.from(this.constructor as ProjectClass).model;
  }

  public static decorate<T extends object>(
    model: ProjectConfig,
  ): (target: T) => void {
    return (target: T) => {
      new ProjectMetadata(model).assign(target);
    };
  }

  public resolveImports(): Project[] {
    return this.app.projectRegistry.resolveAll(this.imports);
  }

  /**
   * Loads and registers the imports of this and all descendent imports
   */
  public async load(topLevel: boolean = false) {
    if (this.loaded) return;

    this.app.logger.debug(`loading project ${this.constructor.name}`);
    await this.configure();

    if (topLevel) {
      this.root = await ProjectUtils.findProjectRoot(Deno.cwd());

      if (!this.root) {
        this.app.logger.error(
          `couldn't automatically detect the project root. either pass -w, or ensure an architect.json folder is present in a parent folder`,
        );
        this.app.logger.error(
          `because project root detection failed, actions that write to configuration files will be unavailable`,
        );
      }
    }

    for (const _import of this.resolveImports()) {
      if (_import === this) {
        throw new Error(`Project ${this.constructor.name} is self-referential`);
      }

      await _import.load();
    }

    this.loaded = true;
  }

  public async configure() {
    this.addImports(ArchitectCoreProject);
  }

  public async saveConfig() {
    if (!this.root) return;
    await ProjectConfigLoader.save(
      path.join(this.root, 'architect.json'),
      this.config!,
    );
  }

  public async getTarget(name: string): Promise<Target | undefined> {
    const targets = await this.getTargets();
    return targets.find((t) => t.model.metadata.name === name);
  }

  public async getTargets(): Promise<Target[]> {
    if (!this.targets && this.root) {
      this.targets = await TargetLoader.collectFolder(
        this,
        this.app.pluginRegistry,
        this.app.kubeLoader,
        path.join(this.root, 'src/targets'),
        this.app.logger
      );
    }

    return this.targets || [];
  }

  public async getComponent(
    clazz: string,
    recursive: boolean = false,
  ): Promise<ComponentClass | undefined> {
    const components = await this.getComponents(recursive);
    return components.find((c) => {
      const meta = ComponentMetadata.from(c);
      if (!meta.model) return false;

      return meta.model.class === clazz;
    });
  }

  public async getComponents(
    recursive: boolean = false,
  ): Promise<ComponentClass[]> {
    if (!this.components) {
      this.components = [];
      for (const mod of this.modules) {
        this.components.push(...await ComponentLoader.fromModule(mod as Module));
      }
    }

    const copy = this.components.slice();

    if (recursive) {
      for (const _import of this.resolveImports()) {
        copy.push(...await _import.getComponents(true));
      }
    }

    return copy;
  }

  public getModules(): unknown[] {
    return this.modules;
  }

  public getPlugins(): PluginClass[] {
    return this.plugins;
  }

  protected addModules(...mods: unknown[]) {
    this.modules.push(...mods);
  }

  protected addImports(...projects: ProjectClass[]) {
    this.imports.push(...projects);
  }

  protected addPlugins(...plugins: PluginClass[]) {
    this.plugins.push(...plugins);
  }
}

export class ProjectMetadata<TModel extends ProjectConfig = ProjectConfig> {
  public model: TModel;

  constructor(model: TModel) {
    this.model = model;
  }

  public static from<TModel extends ProjectConfig, T extends Project = Project>(
    clazz: T | ProjectClass<T>,
  ): ProjectMetadata<TModel> {
    const model = Reflect.getMetadata(Architect.MODEL_META_KEY, clazz);
    return new ProjectMetadata<TModel>(model);
  }

  // deno-lint-ignore no-explicit-any
  public assign(target: any) {
    ProjectConfigLoader.validate(this.model, target.name);

    Reflect.defineMetadata(Architect.TYPE_META_KEY, 'project', target);
    Reflect.defineMetadata(Architect.MODEL_META_KEY, this.model, target);
    Reflect.defineMetadata(Architect.CLASS_META_KEY, this.model.name, target);
  }
}

export interface ProjectClass<T extends Project = Project> {
  new(app: Architect): T;
}
