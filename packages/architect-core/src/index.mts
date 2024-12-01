import * as kubeUtils from './kubernetes/index.mts';

import * as fs from 'node:fs/promises';
import path from 'path';
import { PluginResolver } from './plugin.mts';
import { Target, TargetResolveParams } from './target.mts';
import winston from 'winston';
import { Project } from './project.mts';
import { DependencyGraphRenderer } from './graph/render.mts';
import { TargetCache } from './cache.mts';
import { StateProvider } from './index.mts';

export class Architect {
  public static PATH = path.resolve(path.join(import.meta.dirname, '..'));

  public project?: Project;
  public readonly plugins: PluginResolver;
  public readonly logger: winston.Logger;

  public readonly state: StateProvider;
  public readonly cache: TargetCache;

  public readonly kubeTypes: kubeUtils.TypeRegistry;
  public readonly kubeLoader: kubeUtils.ManifestLoader;

  private constructor(logLevel: string = 'info') {
    this.plugins = new PluginResolver(this);
    this.logger = winston.createLogger({
      level: logLevel,
      format: winston.format.cli(),
      transports: [
        new winston.transports.Console(),
      ],
    });

    this.logger.debug(`initialised logging with level '${logLevel}'`);

    this.state = StateProvider.fromAppDirs();
    this.cache = new TargetCache(this.state, this.logger);

    this.kubeTypes = new kubeUtils.TypeRegistry();
    this.kubeLoader = new kubeUtils.ManifestLoader(this.kubeTypes);
  };

  public get projectPaths(): string[] {
    return [this.project!.root, ...this.project!.libraries.map(l => l.root)];
  };

  public static async create(workspace: string, config: string, logLevel: string = 'info'): Promise<Architect> {
    const instance = new Architect(logLevel);
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

    // in validateOnly mode, only first stage validation runs
    const validateOnly = false;

    const graph = await target.resolve(params);
    if (validateOnly) {
      graph.assertValid();
      return;
    };

    const resolved = await target.compile(graph);
    if (!resolved.graph.assertValid()) return;

    await resolved.write(output);

    if (params?.graph) {
      await DependencyGraphRenderer.render(resolved.graph, {
        path: output,
      });
    };
  };

  public async apply(output: string, target: Target, params?: TargetResolveParams) {
    await this.compile(output, target, params);
  };

  public static class(name: string): {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
    (target: Function): void;
    (target: object, propertyKey: string | symbol): void;
  } {
    return Reflect.metadata('class', name);
  };
}

export * from './cli/index.mts';
export * from './utils/index.mts';
export * from './components/index.mts';
export * from './generated/crds/index.ts';
export * from './graph/index.mts';
export * from './kubernetes/index.mts';
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
