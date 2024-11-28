import path from 'path';
import * as yaml from 'js-yaml';  
import * as fs from 'node:fs/promises';
import { Architect, Component, ComponentClass, Target } from './index.mts';
import { YarnUtilities } from './utils/yarn/index.mts';
import { ModulePackageEntry, ModuleUtilities } from './utils/modules.mts';
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

    return project;
  };

  private async loadImports() {
    const packageMap = {} as Record<string, ModulePackageEntry>;
    const yarnProject = await YarnUtilities.getCurrentProject(this.root);
    if (yarnProject) {
      Object.assign(packageMap, YarnUtilities.projectToPackageMap(yarnProject));
    };

    for (const pkg of this.config.imports?.libraries || []) {
      let path: string;
      let mod: Module;

      try {
        [path, mod] = await ModuleUtilities.importWithMap(pkg, packageMap, import.meta.url);
      } catch (exception) {
        this.parent.logger.warn(`unable to import project ${pkg}: ${exception}`);
        continue;
      };

      let lib: Project;
      try {
        lib = await Project.load(this.parent, path);
        lib.module = mod;
        lib.moduleName = pkg;
      } catch (exception) {
        this.parent.logger.warn(`unable to load project ${pkg}: ${exception}`);
        continue;
      };
      
      if (lib.config.library !== true) {
        this.parent.logger.warn(`unable to load project import ${pkg}: not designated as a library`);
        continue;
      };

      this.parent.logger.debug(`loaded project import ${pkg}`);
      this.libraries.push(lib);
    };
  }

  public async getTargets(recursive: boolean): Promise<Target[]> {
    if (!this._targets) {
      this._targets = await Target.collectFolder(this.parent, path.join(this.root, 'src/targets'));
    };

    const result = [];
    result.push(...this._targets || []);
    if (recursive) this.libraries.forEach(async l => result.push(...await l.getTargets(recursive) || []));

    return result;
  };

  public async getComponents(recursive: boolean): Promise<ComponentClass[]> {
    if (!this._components) {
      this._components = await Component.collectPaths(this.parent, [
        path.join(this.root, 'src/components'),
        path.join(this.root, 'src/modules'), // compatibility with existing project structure
      ]);
    };

    const result = [];
    result.push(...this._components || []);
    if (recursive) this.libraries.forEach(async l => result.push(...await l.getComponents(recursive) || []));

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
