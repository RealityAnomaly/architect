// SPDX-FileCopyrightText: 2026 Vertex X7-53
//
// SPDX-License-Identifier: GPL-3.0-or-later

// deno-coverage-ignore-file
// deno-lint-ignore-file no-unused-vars
import { IArchitect, ITarget, ComponentClass, PluginClass } from '../../../index.ts';
import { ProjectConfig } from '../config.ts';
import { IProject, Project } from '../index.ts';
import { ProjectGitInfo } from '../git.ts';

export class MockProject implements IProject {
  public _app: IArchitect;
  public _root: string = '/foo/bar';

  constructor(app: IArchitect) {
    this._app = app;
  }

  get app(): IArchitect {
    return this._app;
  }
  get config(): ProjectConfig {
    throw new Error('Method not implemented.');
  }
  resolveImports(): Project[] {
    throw new Error('Method not implemented.');
  }
  load(topLevel?: boolean): Promise<void> {
    throw new Error('Method not implemented.');
  }
  configure(): Promise<void> {
    throw new Error('Method not implemented.');
  }
  saveConfig(): Promise<void> {
    throw new Error('Method not implemented.');
  }
  getTarget(name: string): Promise<ITarget | undefined> {
    throw new Error('Method not implemented.');
  }
  getTargets(): Promise<ITarget[]> {
    throw new Error('Method not implemented.');
  }
  getComponent(clazz: string, recursive?: boolean): Promise<ComponentClass | undefined> {
    throw new Error('Method not implemented.');
  }
  getComponents(recursive?: boolean): Promise<ComponentClass[]> {
    throw new Error('Method not implemented.');
  }
  getModules(): unknown[] {
    throw new Error('Method not implemented.');
  }
  getPlugins(): PluginClass[] {
    throw new Error('Method not implemented.');
  }
  getRoot(): string {
    return this._root;
  }
  getGitInfo(): Promise<ProjectGitInfo> {
    throw new Error('Method not implemented.');
  }
}
