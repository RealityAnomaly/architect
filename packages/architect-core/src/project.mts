import path from 'node:path';
import * as fs from 'node:fs/promises';
import { JSONSchemaType } from "npm:ajv";
import { Architect, Component, ComponentClass, ComponentMetadata, Target } from './index.mts';
import Module from 'node:module';
import { PluginConstructor } from "./plugin.mts";

export class Project {
  public readonly libraries: Project[] = [];
  public root?: string;
  public module?: Module;
  public moduleName?: string;

  public config: ProjectConfig;
  private _targets?: Target[];
  private _components?: ComponentClass[];

  constructor(config: ProjectConfig) {
    this.config = config;
  };

  public async saveConfig() {
    if (!this.root) return;
    await ProjectConfigLoader.save(path.join(this.root, 'architect.json'), this.config!);
  };

  public async init(parent: Architect, module: Module, moduleName: string, root?: string): Promise<void> {
    if (root) this.root = root;
    this.module = module;
    this.moduleName = moduleName;

    const validator = parent.ajv.compile(ProjectConfigSchema);
    if (!validator(this.config)) {
      throw new Error(`${this.moduleName}: failed to validate project config: ${parent.ajv.errorsText(validator.errors)}`);
    };

    await this.loadImports(parent);
    await this.loadComponents(parent);
  };

  /**
   * Loads a {Project} from the default export of an ECMAScript module
   */
  public static async load(parent: Architect, moduleName: string, root?: string): Promise<Project> {
    const module = await import(moduleName);
    const project = module.default as Project;
    await project.init(parent, module, moduleName, root);

    return project;
  };

  private async loadImports(parent: Architect) {
    for (const pkg of this.config.imports || []) {
      let lib: Project;
      try {
        lib = await Project.load(parent, pkg);
      } catch (exception) {
        parent.logger.warn(`unable to load project ${pkg}: ${exception}`);
        continue;
      };

      if (lib.config.library !== true) {
        parent.logger.warn(`unable to load project import ${pkg}: not designated as a library`);
        continue;
      };

      parent.logger.debug(`loaded project import ${pkg}`);
      this.libraries.push(lib);
    };
  };

  private async loadComponents(parent: Architect) {
    if (!this._components && this.module) {
      this._components = await Component.collect(parent, this.module);
    };

    for (const library of this.libraries) {
      await library.loadComponents(parent);
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

  public getComponent(clazz: string, recursive?: boolean): ComponentClass | undefined {
    const components = this.getComponents(recursive);
    return components.find(c => {
      const meta = ComponentMetadata.from(c);
      if (!meta.model) return false;

      return meta.model.class === clazz;
    });
  };

  public getComponents(recursive?: boolean): ComponentClass[] {
    const result = [];
    result.push(...this._components || []);
    if (recursive) {
      for (const library of this.libraries) {
        result.push(...library.getComponents(recursive));
      };
    };

    return result;
  };

  public getPlugins(): PluginConstructor[] {
    const result = [];
    for (const library of this.libraries) {
      result.push(...library.getPlugins());
    };

    return result;
  };
}

export interface ProjectConfig {
  library?: boolean;
  imports?: string[];
  plugins?: Record<string, object>;
}

const ProjectConfigSchema: JSONSchemaType<ProjectConfig> = {
  type: "object",
  required: [],
  properties: {
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
  public static async load(path: string): Promise<ProjectConfig> {
    try {
      await fs.stat(path);
    } catch {
      return {};
    };

    const content = await fs.readFile(path, 'utf-8');
    return JSON.parse(content) as ProjectConfig;
  };

  public static async save(path: string, config: ProjectConfig): Promise<void> {
    await fs.writeFile(path, JSON.stringify(config, undefined, 2));
  };
}
