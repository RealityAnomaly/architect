import * as fs from 'node:fs/promises';
import path from 'path';
import { PluginResolver } from './plugin.mts';
import { TargetResolveParams } from './target.mts';
import winston from 'winston';
import { Project } from './project.mts';

export class Architect {
  public project?: Project;
  public readonly plugins: PluginResolver;
  public readonly logger: winston.Logger;

  private constructor(debug: boolean) {
    this.plugins = new PluginResolver(this);
    this.logger = winston.createLogger({
      level: debug ? 'debug' : 'info',
      format: winston.format.cli(),
      transports: [
        new winston.transports.Console(),
      ],
    });
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
    await instance.project.postLoad();

    return instance;
  };

  public async compile(output: string, params: TargetResolveParams) {
    await fs.rm(output, { recursive: true, force: true });
    await fs.mkdir(output, { recursive: true });
    await Promise.all(Object.values(this.project!.getTargets(false)).map(async (v): Promise<void> => {
      const resolved = await v.resolve(params);
      await resolved.write(path.join(output, v.model.metadata.name));
    }));
  };
}

export * from './cli/index.mts';
export * from './utils/index.mts';
export * from './cache.mts';
export * from './components/index.mts';
export * from './config.mts';
export * from './capability.mts';
export * from './plugin.mts';
export * from './result.mts';
export * from './target.mts';
