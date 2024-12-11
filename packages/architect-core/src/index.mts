import * as kubeUtils from './kubernetes/index.mts';
import { Reflect } from "@dx/reflect";

import * as fs from 'node:fs/promises';
import path from 'node:path';
import { PluginRegistry } from './plugin.mts';
import { Target, TargetResolveParams } from './target.mts';
import winston from 'winston';
import { Project, ProjectClass } from './project.mts';
import { DependencyGraphRenderer } from './graph/render.mts';
import { TargetCache } from './cache.mts';
import { Ajv } from 'ajv';

import model from './../architect.json' with { type: 'json' };
import { TypeRegistry } from "./registry.mts";
import { StateProvider } from "./utils/state.mts";

export * from './cli/index.mts';
export * from './dynamic/index.mts';
export * from './generated/crds/index.ts';
export * from './graph/index.mts';
export * from './kubernetes/index.mts';
export * from './model/index.mts';
export * from './utils/index.mts';
export * from './backend.mts';
export * from './cache.mts';
export * from './config.mts';
export * from './context.mts';
export * from './capability.mts';
export * from './component.mts';
export * from './plugin.mts';
export * from './project.mts';
export * from './provider.mts';
export * from './result.mts';
export * from './target.mts';

export class Architect {
  public static PATH = path.resolve(path.join(import.meta.dirname!, '..'));

  public static readonly TYPE_META_KEY = 'architect.glassway.net/type';
  public static readonly MODEL_META_KEY = 'architect.glassway.net/model';
  public static readonly CLASS_META_KEY = 'architect.glassway.net/class';
  public static readonly TARGET_TYPE_META_KEY = 'architect.glassway.net/target-type';

  public project?: Project;

  public readonly ajv: Ajv;
  public readonly projects: TypeRegistry<Project>;
  public readonly plugins: PluginRegistry;

  public readonly logger: winston.Logger;

  public readonly state: StateProvider;
  public readonly cache: TargetCache;

  public readonly kubeTypes: kubeUtils.TypeRegistry;
  public readonly kubeLoader: kubeUtils.ManifestLoader;

  private constructor(logLevel: string = 'info') {
    this.ajv = new Ajv();

    this.projects = new TypeRegistry();
    this.plugins = new PluginRegistry(this);

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

    this.kubeTypes = new kubeUtils.TypeRegistry(this.logger);
    this.kubeLoader = new kubeUtils.ManifestLoader(this.kubeTypes);
  };

  public static async create(project?: Project, logLevel: string = 'info'): Promise<Architect> {
    const instance = new Architect(logLevel);
    instance.project = project;

    if (instance.project && !instance.project.root) {
      instance.logger.error(`couldn't automatically detect the project root. either pass -w, or ensure an architect.json folder is present in a parent folder`);
      instance.logger.error(`because project root detection failed, actions that write to configuration files will be unavailable`);
    };

    await instance.project?.load(instance);
    for (const project of instance.projects.data) {
      for (const plugin of project.instance.plugins) {
        await instance.plugins.register(plugin);
      }
    };

    await instance.plugins.resolve();
    await instance.plugins.init();

    return instance;
  };

  public async compile(output: string, target: Target, params?: TargetResolveParams) {
    await fs.rm(output, { recursive: true, force: true });
    await fs.mkdir(output, { recursive: true });

    // in validateOnly mode, only first stage validation runs
    const validate = params?.validate !== false;
    const validateOnly = false;

    const graph = await target.resolve(params);
    if (validateOnly) {
      graph.assertValid();
      return;
    };

    const resolved = await target.compile(graph, params);
    this.logger.info(`${target.toString()}: ${Object.values(resolved.components).length} components built`);

    if (validate) {
      if (!resolved.graph.assertValid()) return;
    } else {
      this.logger.warn(`validation skipped for target ${target.toString()}`);
    };

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

  public static class(name: string) {
    return Reflect.metadata(Architect.CLASS_META_KEY, name);
  };
};

@Project.decorate(model)
export class ArchitectCoreProject extends Project {
  public override get imports(): ProjectClass<Project>[] { return [] };
};

await Project.runIfMain(ArchitectCoreProject, import.meta.url);
