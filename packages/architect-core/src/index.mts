import * as kubeUtils from './kubernetes/index.mts';

import * as fs from 'node:fs/promises';
import path from 'path';
import { PluginResolver } from './plugin.mts';
import { Target, TargetResolveParams } from './target.mts';
import winston from 'winston';
import { Project } from './project.mts';

export class Architect {
  public static PATH = path.resolve(path.join(import.meta.dirname, '..'));

  public project?: Project;
  public readonly plugins: PluginResolver;
  public readonly logger: winston.Logger;

  public readonly kubeTypes: kubeUtils.TypeRegistry;
  public readonly kubeLoader: kubeUtils.ManifestLoader;

  private constructor(debug: boolean) {
    this.plugins = new PluginResolver(this);
    this.logger = winston.createLogger({
      level: debug ? 'debug' : 'info',
      format: winston.format.cli(),
      transports: [
        new winston.transports.Console(),
      ],
    });

    this.kubeTypes = new kubeUtils.TypeRegistry();
    this.kubeLoader = new kubeUtils.ManifestLoader(this.kubeTypes);
  };

  public get projectPaths(): string[] {
    return [this.project!.root, ...this.project!.libraries.map(l => l.root)];
  };

  public static async create(workspace: string, config: string, debug: boolean): Promise<Architect> {
    const instance = new Architect(debug);
    instance.project = await Project.load(instance, workspace, config);

    for (const plugin of instance.project!.config.imports?.plugins || []) {
      await instance.plugins.register(plugin);
    }

    await instance.plugins.resolve();
    await instance.plugins.init();

    return instance;
  };

  public async compile(output: string, target: Target, params?: TargetResolveParams) {
    await fs.rm(output, { recursive: true, force: true });
    await fs.mkdir(output, { recursive: true });

    const resolved = await target.resolve(params);
    await resolved.write(output);
  };

  public async apply(output: string, target: Target, params?: TargetResolveParams) {
    await this.compile(output, target, params);
  };
}

export * from './cli/index.mts';
export * from './utils/index.mts';
export * from './components/index.mts';
export * from './generated/crds/index.ts';
export * from './backend.mts';
export * from './cache.mts';
export * from './config.mts';
export * from './context.mts';
export * from './capability.mts';
export * from './plugin.mts';
export * from './project.mts';
export * from './provider.mts';
export * from './result.mts';
export * from './target.mts';
