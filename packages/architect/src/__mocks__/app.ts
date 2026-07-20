// deno-coverage-ignore-file
import { Ajv } from 'ajv';
import { Logger } from '@logtape/logtape';
import { IArchitect } from '../app.ts';
import { PluginRegistry, TargetCache } from '../index.ts';
import { IProject } from '../internal/project/index.ts';
import { KubeTypeRegistry } from '../kubernetes/index.ts';
import { ManifestLoader } from '../kubernetes/yaml.ts';
import { TypeRegistry } from '../utils/index.ts';
import { StateProvider } from '../utils/state.ts';

export class MockArchitect implements IArchitect {
  public _ajv: Ajv = new Ajv();
  public _pluginRegistry: PluginRegistry = new PluginRegistry();
  public _projectRegistry: TypeRegistry<IProject> = new TypeRegistry();

  get ajv(): Ajv {
    return this._ajv;
  }
  get pluginRegistry(): PluginRegistry {
    return this._pluginRegistry;
  }
  get projectRegistry(): TypeRegistry<IProject> {
    return this._projectRegistry;
  }
  get logger(): Logger {
    throw new Error('Method not implemented.');
  }
  get state(): StateProvider {
    throw new Error('Method not implemented.');
  }
  get cache(): TargetCache {
    throw new Error('Method not implemented.');
  }
  get kubeTypes(): KubeTypeRegistry {
    throw new Error('Method not implemented.');
  }
  get kubeLoader(): ManifestLoader {
    throw new Error('Method not implemented.');
  }
  get project(): IProject | undefined {
    throw new Error('Method not implemented.');
  }
  init(): Promise<void> {
    throw new Error('Method not implemented.');
  }
  getProject(): IProject {
    throw new Error('Method not implemented.');
  }
  getProjects(): IProject[] {
    throw new Error('Method not implemented.');
  }
}
