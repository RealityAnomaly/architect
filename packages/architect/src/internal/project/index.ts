// SPDX-FileCopyrightText: 2026 Vertex X7-53
//
// SPDX-License-Identifier: GPL-3.0-or-later

import path from 'node:path';
import 'reflect-metadata';

import {
  ComponentClass,
  ComponentLoader,
  ComponentMetadata,
  ITarget,
  TargetLoader,
} from '../../index.ts';
import { PluginClass } from '../plugin/plugin.ts';
import Module from 'node:module';
import { IArchitect } from '../../app.ts';
import { ProjectConfig, ProjectConfigLoader } from './config.ts';
import { ProjectUtils } from './utils.ts';
import * as yaml from '@std/yaml';
import * as crds from './../../kubernetes/crds/index.ts';
import { ProjectMetadata } from './meta.ts';
import { ProjectGitHelper, ProjectGitInfo } from './git.ts';

export interface IProject {
  /**
   * Pointer to the global {@link IArchitect} instance.
   */
  get app(): IArchitect;

  /**
   * Returns the configuration (architect.yaml) from the decorator on this project's constructor
   */
  get config(): ProjectConfig;

  /**
   * Recursively resolves all dependencies of this project, returning a {@link Project} instance for each dependency
   */
  resolveImports(): Project[];

  /**
   * Loads and registers the imports of this and all descendent imports
   * @param topLevel Whether this project is the top level in the hierarchy (current workspace project)
   */
  load(topLevel?: boolean): Promise<void>;

  /**
   * Saves the project configuration file
   */
  saveConfig(): Promise<void>;

  /**
   * Finds a target available in this project by name
   * @param name The name of the target
   */
  getTarget(name: string): Promise<ITarget | undefined>;

  /**
   * Returns all targets available in this project
   */
  getTargets(): Promise<ITarget[]>;

  /**
   * Locates the class of a component by its logical class
   * @param clazz The logical class of the component, i.e. architect.glassway.net/external-secrets
   * @param recursive Whether to recursively locate the component from all dependencies
   */
  getComponent(
    clazz: string,
    recursive?: boolean,
  ): Promise<ComponentClass | undefined>;

  /**
   * Returns the classes of all components from all modules registered with this project, and optionally all dependencies
   * @param recursive Whether to fetch the components of all dependencies
   */
  getComponents(
    recursive?: boolean,
  ): Promise<ComponentClass[]>;

  /**
   * Returns all component ECMAScript modules in the project.
   */
  getModules(): unknown[];

  /**
   * Returns the classes of all plugins in the project.
   */
  getPlugins(): PluginClass[];

  /**
   * Returns the filesystem root of the project.
   */
  getRoot(): string;

  /**
   * Returns information about the project's Git repo
   */
  getGitInfo(): Promise<ProjectGitInfo>;
}

/**
 * High-level abstraction that defines a provider of components, targets, and plugins.
 * Override the {@link Project.configure} method to configure the project, register the architect.yaml file with {@link Project.decorate}, and finally use {@link App.run} to invoke it.
 */
export abstract class Project implements IProject {
  /**
   * The root path of the project. Only set if this project is the currently active workspace.
   */
  private _root?: string;
  private _gitInfo?: ProjectGitInfo;
  private readonly _app: IArchitect;

  /**
   * Whether the project is loaded (it's configured, all imports are resolved, and the root path if present is found)
   * @private
   */
  private loaded?: boolean = false;

  private modules: unknown[] = [];
  private imports: ProjectClass[] = [];
  private plugins: PluginClass[] = [];

  private components?: ComponentClass[];
  private targets?: ITarget[];

  constructor(app: IArchitect) {
    this._app = app;
  }

  public get app(): IArchitect {
    return this._app;
  }

  public get config(): ProjectConfig {
    return ProjectMetadata.from(this.constructor as ProjectClass).model;
  }

  /**
   * Helper function to parse a configuration object and then decorate a {@link Project} constructor using it
   * @param model The configuration (architect.yaml)
   */
  public static decorate<T extends object>(
    model: ProjectConfig,
  ): (target: T) => void {
    return (target: T) => {
      new ProjectMetadata(model).assign(target);
    };
  }

  /**
   * Helper function to parse a YAML object and then decorate a {@link Project} constructor using it
   * @param text The YAML configuration (architect.yaml)
   */
  public static decorateYaml<T extends object>(
    text: string,
  ): (target: T) => void {
    return (target: T) => {
      const model = yaml.parse(text) as ProjectConfig;
      new ProjectMetadata(model).assign(target);
    };
  }

  public resolveImports(): Project[] {
    return this.app.projectRegistry.resolveAll(this.imports);
  }

  public async load(topLevel: boolean = false) {
    if (this.loaded) return;

    this.app.logger.debug(`loading project ${this.constructor.name}`);
    await this.configure();

    if (topLevel) {
      this._root = await ProjectUtils.findProjectRoot(Deno.cwd());

      if (!this._root) {
        this.app.logger.info(
          `the project root is not writeable, actions that write to configuration files will be unavailable`,
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

  /**
   * Configure your project by overriding this method and calling addModules, addImports, or addPlugins.
   */
  protected async configure() {
    this.addImports(ArchitectCoreProject);
  }

  public async saveConfig() {
    await ProjectConfigLoader.save(
      path.join(this.getRoot(), 'architect.yaml'),
      this.config!,
    );
  }

  public async getTarget(name: string): Promise<ITarget | undefined> {
    const targets = await this.getTargets();
    return targets.find((t) => t.model.metadata.name === name);
  }

  public async getTargets(): Promise<ITarget[]> {
    if (!this.targets && this._root) {
      this.targets = await TargetLoader.collectFolder(
        this,
        this.app.pluginRegistry,
        this.app.kubeLoader,
        path.join(this._root, 'targets'),
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
      const components: ComponentClass[] = [];
      for (const mod of this.modules) {
        components.push(...await ComponentLoader.fromModule(mod as Module));
      }
      // must assign here, not above to prevent async race
      this.components = components;
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

  public getRoot(): string {
    if (!this._root) {
      throw Error("Project is not writable");
    }

    return this._root;
  }

  public async getGitInfo(): Promise<ProjectGitInfo> {
    if (!this._gitInfo) {
      this._gitInfo = await ProjectGitHelper.resolve(this.getRoot());
    }

    return this._gitInfo;
  }

  /**
   * Adds module(s) of components into this project. All exported classes that extend Component will be registered.
   * @param mods The ESM modules to import.
   * @protected
   */
  protected addModules(...mods: unknown[]) {
    this.modules.push(...mods);
  }

  /**
   * Imports another project(s) into this project, making their components and plugins available.
   * @param projects The classes of the projects to import.
   * @protected
   */
  protected addImports(...projects: ProjectClass[]) {
    this.imports.push(...projects);
  }

  /**
   * Installs plugin(s) into this project.
   * @param plugins The classes of the plugins to use.
   * @protected
   */
  // noinspection JSUnusedGlobalSymbols
  protected addPlugins(...plugins: PluginClass[]) {
    this.plugins.push(...plugins);
  }
}

@Project.decorate({
  name: '@glassway/architect',
})
export class ArchitectCoreProject extends Project {
  public override async configure(): Promise<void> {
    this.addModules(crds);
  }
}

export interface ProjectClass<T extends Project = Project> {
  // deno-lint-ignore no-explicit-any
  new(app: any): T;
}
