import path from 'node:path';

import * as fs from 'node:fs/promises';
import { Ajv, JSONSchemaType } from "ajv";
import { Reflect } from "@dx/reflect";

import { Architect, ComponentClass, ComponentMetadata, Target, ArchitectCoreProject } from './index.mts';
import { PluginClass } from "./plugin.mts";
import { Component } from "./component.mts";
import Module from "node:module";

export abstract class Project {
  /**
   * The root path of the project. Only set if this project is the currently active workspace.
   */
  public root?: string;
  private loaded?: boolean = false;

  private _components?: ComponentClass[];
  private _targets?: Target[];

  /**
   * Returns a list of project classes to import as dependencies for this project
   */
  public get imports(): ProjectClass[] { return [ArchitectCoreProject]; };

  /**
   * Returns a list of plugin classes to expose from this project
   */
  public get plugins(): PluginClass[] { return []; }

  /**
   * Returns a list of modules within this project that should be scanned for components and file-based targets
   */
  public get modules(): unknown[] { return []; };

  public get config(): ProjectConfig {
    return ProjectMetadata.from(this.constructor as ProjectClass).model;
  };

  /**
   * Loads and registers the imports of this and all descendent imports
   */
  public async load(parent: Architect) {
    if (this.loaded) return;

    parent.logger.debug(`loading project ${this.constructor.name}`);
    for (const plugin of this.plugins) {
      await parent.plugins.register(plugin);
    };

    for (const _import of parent.projects.resolveAll(this.imports)) {
      if (_import === this) {
        throw new Error(`Project ${this.constructor.name} references itself as a dependency`);
      };

      await _import.load(parent);
    };

    this.loaded = true;
  };

  public async saveConfig() {
    if (!this.root) return;
    await ProjectConfigLoader.save(path.join(this.root, 'architect.json'), this.config!);
  };

  public async getTarget(parent: Architect, name: string): Promise<Target | undefined> {
    const targets = await this.getTargets(parent);
    return targets.find(t => t.model.metadata.name === name);
  };

  public async getTargets(parent: Architect): Promise<Target[]> {
    if (!this._targets && this.root) {
      this._targets = await Target.collectFolder(parent, path.join(this.root, 'src/targets'));
    };

    return this._targets || [];
  };

  public async getComponent(parent: Architect, clazz: string, recursive: boolean = false): Promise<ComponentClass | undefined> {
    const components = await this.getComponents(parent, recursive);
    return components.find(c => {
      const meta = ComponentMetadata.from(c);
      if (!meta.model) return false;

      return meta.model.class === clazz;
    });
  };

  public async getComponents(parent: Architect, recursive: boolean = false): Promise<ComponentClass[]> {
    if (!this._components) {
      this._components = [];
      for (const mod of this.modules) {
        this._components.push(...await Component.collect(mod as Module));
      };
    };

    const copy = this._components.slice();
    if (recursive) {
      for (const _import of parent.projects.resolveAll(this.imports)) {
        copy.push(...await _import.getComponents(parent, true));
      };
    };

    return copy;
  };

  public static decorate<T extends object>(model: ProjectConfig): (target: T) => void {
    return (target: T) => { new ProjectMetadata(model).assign(target); };
  };
}

export class ProjectMetadata<TModel extends ProjectConfig = ProjectConfig> {
  public model: TModel;
  constructor(model: TModel) {
    this.model = model;
  };

  // deno-lint-ignore no-explicit-any
  public assign(target: any) {
    ProjectConfigLoader.validate(this.model, target.name);

    Reflect.defineMetadata(Architect.TYPE_META_KEY, 'project', target);
    Reflect.defineMetadata(Architect.MODEL_META_KEY, this.model, target);
    Reflect.defineMetadata(Architect.CLASS_META_KEY, this.model.name, target);
  };

  public static from<TModel extends ProjectConfig, T extends Project = Project>(clazz: T | ProjectClass<T>): ProjectMetadata<TModel> {
    const model = Reflect.getMetadata(Architect.MODEL_META_KEY, clazz);
    return new ProjectMetadata<TModel>(model);
  };
};

export interface ProjectClass<T extends Project = Project> {
  new (): T;
};

export interface ProjectConfig {
  name: string;
  library?: boolean;
  backend?: object;
  plugins?: Record<string, object>;
};

const ProjectConfigSchema: JSONSchemaType<ProjectConfig> = {
  type: "object",
  required: ["name"],
  properties: {
    name: {
      type: "string",
    },
    library: {
      type: "boolean",
      nullable: true,
    },
    backend: {
      type: "object",
      nullable: true,
    },
    plugins: {
      type: "object",
      required: [],
      nullable: true,
      additionalProperties: {
        type: "object",
      }
    },
  },
};

class ProjectConfigLoader {
  public static async load(path: string, ajv: Ajv = new Ajv()): Promise<ProjectConfig> {
    const content = await fs.readFile(path, 'utf-8');
    const config = JSON.parse(content) as ProjectConfig;
    ProjectConfigLoader.validate(config, path, ajv);

    return config;
  };

  public static async save(path: string, config: ProjectConfig): Promise<void> {
    await fs.writeFile(path, JSON.stringify(config, undefined, 2));
  };

  public static validate(config: ProjectConfig, ctx?: string, ajv: Ajv = new Ajv()) {
    const validator = ajv.compile(ProjectConfigSchema);
    if (!validator(config)) {
      throw new Error(`failed to validate configuration model for project ${ctx || 'unknown'}: ${ajv.errorsText(validator.errors)}`);
    };
  };
};
