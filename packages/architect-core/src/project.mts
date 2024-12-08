import path from 'node:path';
import * as fs from 'node:fs/promises';
import { Ajv, JSONSchemaType } from "ajv";
import { Architect, Component, ComponentClass, ComponentMetadata, Plugin, Target } from './index.mts';
import Module from 'node:module';
import { PluginConstructor } from "./plugin.mts";

export class Project {
  public readonly libraries: Project[] = [];
  public root?: string;

  public config: ProjectConfig;
  
  private _targets?: Target[];
  private _components?: ComponentClass[];
  private _plugins?: PluginConstructor[];
  private _module?: Module;

  constructor(config: ProjectConfig, root?: string) {
    this.config = config;
    this.root = root;
  };

  public async getModule(): Promise<Module | undefined> {
    if (this._module || !this.root) return this._module;
    
    this._module = await import(path.join(this.root, 'src/index.mts'));
    return this._module;
  };

  public async saveConfig() {
    if (!this.root) return;
    await ProjectConfigLoader.save(path.join(this.root, 'architect.json'), this.config!);
  };

  public async init(parent: Architect): Promise<void> {
    await this.loadImports(parent);
  };

  /**
   * Loads a {Project} from a local folder, allowing configuration file access
   */
  public static async fromWorkspace(parent: Architect, root: string): Promise<Project> {
    const config = await ProjectConfigLoader.load(path.join(root, 'architect.json'), parent.ajv);
    const project = new Project(config, root);
    await project.init(parent);

    return project;
  };

  /**
   * Loads a {Project} from the default export of an ECMAScript module
   */
  public static async fromModule(parent: Architect, modulePath: string): Promise<Project> {
    const module = await import(modulePath);
    const moduleClazz = module.default as ProjectModule;

    // remove /src/*.mts suffix from config root
    const root = moduleClazz.root?.replace('/src/index.mts', '');

    ProjectConfigLoader.validate(moduleClazz.config, parent.ajv);
    
    const project = new Project(moduleClazz.config, root);
    await project.init(parent);

    return project;
  };

  private async loadImports(parent: Architect) {
    for (const pkg of this.config.imports || []) {
      const lib = await Project.fromModule(parent, pkg);
      if (lib.config.library !== true) {
        throw new Error(`unable to load project import ${pkg}: not designated as a library`);
      };

      parent.logger.debug(`loaded project import ${pkg}`);
      this.libraries.push(lib);
    };
  };

  public async getTarget(parent: Architect, name: string, recursive?: boolean): Promise<Target | undefined> {
    const targets = await this.getTargets(parent, recursive);
    return targets.find(t => t.model.metadata.name === name);
  };

  public async getTargets(parent: Architect, recursive?: boolean): Promise<Target[]> {
    if (!this._targets && this.root) {
      this._targets = await Target.collectFolder(parent, path.join(this.root, 'src/targets'));
    };

    const result = [];
    result.push(...this._targets || []);
    if (recursive) {
      for (const library of this.libraries) {
        result.push(...await library.getTargets(parent, recursive));
      };
    };

    return result;
  };

  public async getComponent(clazz: string, recursive?: boolean): Promise<ComponentClass | undefined> {
    const components = await this.getComponents(recursive);
    return components.find(c => {
      const meta = ComponentMetadata.from(c);
      if (!meta.model) return false;

      return meta.model.class === clazz;
    });
  };

  public async getComponents(recursive?: boolean): Promise<ComponentClass[]> {
    const module = await this.getModule();
    if (!this._components && module) {
      this._components = await Component.collect(module);
    };

    const result = [];
    result.push(...this._components || []);
    if (recursive) {
      for (const library of this.libraries) {
        result.push(...await library.getComponents(recursive));
      };
    };

    return result;
  };

  public async getPlugins(): Promise<PluginConstructor[]> {
    if (this.config.name !== '@perdition/k8s-shared') {
      const module = await this.getModule();
      if (!this._plugins && module) {
        this._plugins = await Plugin.collect(module);
      };
    };
    

    const result = [];
    result.push(...this._plugins || []);
    for (const library of this.libraries) {
      result.push(...await library.getPlugins());
    };

    return result;
  };
}

export interface ProjectConfig {
  name: string;
  library?: boolean;
  imports?: string[];
  plugins?: Record<string, object>;
};

export class ProjectModule {
  public readonly config: ProjectConfig;
  public readonly root?: string;

  public constructor(config: ProjectConfig, root?: string) {
    this.config = config;
    this.root = root;
  };
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
    imports: {
      type: "array",
      nullable: true,
      items: {
        type: "string"
      },
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
  public static async load(path: string, ajv: Ajv): Promise<ProjectConfig> {
    const content = await fs.readFile(path, 'utf-8');
    const config = JSON.parse(content) as ProjectConfig;
    ProjectConfigLoader.validate(config, ajv);

    return config;
  };

  public static async save(path: string, config: ProjectConfig): Promise<void> {
    await fs.writeFile(path, JSON.stringify(config, undefined, 2));
  };

  public static validate(config: ProjectConfig, ajv: Ajv) {
    const validator = ajv.compile(ProjectConfigSchema);
    if (!validator(config)) {
      throw new Error(`failed to validate project config: ${ajv.errorsText(validator.errors)}`);
    };
  };
};
