import path from 'node:path';
import * as yaml from 'js-yaml';  
import * as fs from 'node:fs/promises';
import { Architect, Component, ComponentClass, ComponentMetadata, Target } from './index.mts';
//import { YarnUtilities } from './utils/yarn/index.mts';
//import { ModulePackageEntry, ModuleUtilities } from './utils/modules.mts';
import Module from 'node:module';

export class Project {
  public readonly parent: Architect;
  public readonly root: string;
  public readonly libraries: Project[] = [];
  public module?: Module;
  public moduleName?: string;

  public config: ProjectConfig;
  public configPath: string;

  private _targets?: Target[];
  private _components?: ComponentClass[];

  private constructor(parent: Architect, root: string, config: ProjectConfig, configPath: string) {
    this.parent = parent;
    this.root = root;
    this.config = config;
    this.configPath = configPath;
  };

  public async saveConfig() {
    await ProjectConfigLoader.save(this.configPath!, this.config!);
  };

  public static async load(parent: Architect, root: string, configPath?: string): Promise<Project> {
    if (!configPath) configPath = path.join(root, 'architect.yaml');
    const config = await ProjectConfigLoader.load(configPath);
    const project = new Project(parent, root, config, configPath);
    await project.loadImports();
    await project.loadComponents();

    return project;
  };

  private async loadImports() {
    throw new Error('Not implemented for Deno');
    // const packageMap = {} as Record<string, ModulePackageEntry>;

    // const yarnWorkspace = await YarnUtilities.getCurrentWorkspace(this.root);
    // if (!yarnWorkspace) {
    //   throw Error(`Non-Yarn projects are not currently supported`);
    // };

    // Object.assign(packageMap, YarnUtilities.projectToPackageMap(yarnWorkspace.project));
    // this.moduleName = YarnUtilities.workspaceToIdentifier(yarnWorkspace);
    // this.module = await ModuleUtilities.importWithMap(this.moduleName, packageMap);

    // for (const pkg of this.config.imports?.libraries || []) {
    //   let lib: Project;
    //   try {
    //     let path = await ModuleUtilities.resolveModulePath(pkg, packageMap, import.meta.url);
    //     path = await fs.realpath(path.replace('/src/index.mts', ''));

    //     lib = await Project.load(this.parent, path);
    //   } catch (exception) {
    //     this.parent.logger.warn(`unable to load project ${pkg}: ${exception}`);
    //     continue;
    //   };
      
    //   if (lib.config.library !== true) {
    //     this.parent.logger.warn(`unable to load project import ${pkg}: not designated as a library`);
    //     continue;
    //   };

    //   this.parent.logger.debug(`loaded project import ${pkg}`);
    //   this.libraries.push(lib);
    // };
  };

  private async loadComponents() {
    if (!this._components && this.module) {
      this._components = await Component.collect(this.parent, this.module);
    };

    for (const library of this.libraries) {
      await library.loadComponents();
    };
  };

  public async getTarget(name: string, recursive?: boolean): Promise<Target | undefined> {
    const targets = await this.getTargets(recursive);
    return targets.find(t => t.model.metadata.name === name);
  };

  public async getTargets(recursive?: boolean): Promise<Target[]> {
    if (!this._targets) {
      this._targets = await Target.collectFolder(this.parent, path.join(this.root, 'src/targets'));
    };

    const result = [];
    result.push(...this._targets || []);
    if (recursive) {
      for (const library of this.libraries) {
        result.push(...await library.getTargets(recursive));
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
}

export interface ProjectConfig {
  library?: boolean;
  imports?: ProjectConfigImports;
  plugins?: Record<string, object>;
}

export interface ProjectConfigImports {
  plugins?: string[];
  libraries?: string[];
}

class ProjectConfigLoader {
  public static async load(path: string): Promise<ProjectConfig> {
    try {
      await fs.stat(path);
    } catch {
      return {};
    };

    const content = await fs.readFile(path, 'utf-8');
    return yaml.load(content) as ProjectConfig;
  };

  public static async save(path: string, config: ProjectConfig): Promise<void> {
    const content = yaml.dump(config);
    await fs.writeFile(path, content);
  };
}
