import path from 'node:path';
import * as fs from 'node:fs/promises';
import { Reflect } from "@dx/reflect";

import { architectGlasswayNet } from './generated/crds/index.ts';

import { Component, ComponentClass, ExtractComponentArgs } from './component.mts';
import { Registry } from './registry.mts';
import { Result } from './result.mts';
import { Context } from './context.mts';
import { Condition, constructor, DeepLazySpec, DeepPartial, ReflectionUtilities } from './utils/index.mts';
import { Architect, CLASS_META_KEY, DependencyGraph } from './index.mts';

export const PLUGIN_TARGET_IDENTIFIERS = {
  kubernetes: 'target.architect.glassway.net/kubernetes',
};

export interface TargetParams {};

export interface TargetResolveParams {
  /**
   * Enable or disable validating requirements
   */
  requirements?: boolean;

  /**
   * Enable or disable validating configuration
   */
  validate?: boolean;

  /**
   * Write a visualised dependency graph
   */
  graph?: boolean;
};

export abstract class BaseFact<T = unknown> {
  public readonly instance: T;

  constructor(instance: T) {
    this.instance = instance;
  };
};

/**
 * Represents a location to which rendered configuration or objects is applied against
 */
export class Target {
  public static async collectFolder(parent: Architect, input: string): Promise<Target[]> {
    try {
      const statr = await fs.stat(input);
      if (!statr.isDirectory()) return [];
    } catch {
      return [];
    };

    const result = await fs.readdir(input);
    const targetMap = parent.plugins.targetMap;

    const results = (await Promise.all(result.map(async (k): Promise<Target[]> => {
      if (!k.endsWith('.yaml')) return [];

      const resources = await parent.kubeLoader.loadFile(path.join(input, k));
      const targets = resources.filter(r => r instanceof architectGlasswayNet.v1alpha1.Target).map(r => {
        try {
          r.validate();
        } catch (exception: unknown) {
          parent.logger.error(`failed to validate target ${r.metadata.name}: ${exception}`);
          return undefined;
        };

        // pick target type from plugin property
        if (r.spec.plugins?.kubernetes) {
          return new targetMap[PLUGIN_TARGET_IDENTIFIERS.kubernetes](r, {}, parent);
        } else {
          parent.logger.error(`attempted to load target ${r.metadata.name} with unconfigured plugins`);
          return undefined;
        };
      }).filter(r => r !== undefined);

      return targets;
    }))).flat();

    await Promise.all(results.map(async t => {
      await t.init()
      parent.logger.debug(`loaded target ${t.model.metadata.name} of kind ${t.constructor.name}`);
    }));

    return results;
  };

  public readonly model: architectGlasswayNet.v1alpha1.Target;
  public readonly parent: Architect;
  public readonly params: TargetParams;

  public readonly components = new Registry<Component>();
  protected readonly facts = new Registry<BaseFact>();

  protected constructor(model: architectGlasswayNet.v1alpha1.Target, params: TargetParams = {}, parent: Architect) {
    this.model = model;
    this.params = params;
    this.parent = parent;
  };

  protected async init() {
    for (const def of this.model.spec.components || []) {
      const token = this.parent.project!.getComponent(def.class, true);
      if (!token) {
        this.parent.logger.warn(`Target ${this.model.metadata.name} references unknown component ${def.class}, skipping`);
        continue;
      };

      this.enable(token, def.options);
    };
  };

  /**
    * Resolves the component dependency graph
    */
  public async resolve(params: TargetResolveParams = {}): Promise<DependencyGraph> {
    return await DependencyGraph.resolve(this, Object.values(this.components.data), params.requirements !== false);
  };

  public async compile(graph: DependencyGraph, _params?: TargetResolveParams): Promise<Result> {
    const results: Record<string, unknown> = {};

    await Promise.all(Object.values(graph.components).map(async (v): Promise<void> => {
      const result = await v.component.build();
      if (result === undefined) return;

      results[v.component.rid] = await v.component.postBuild(result);
    }));

    const result = new Result(graph, results);

    //this.parent.logger.info(`target ${this.model.metadata.name}: ${Object.values(result.components).length} components built`);
    return result;
  };

  /**
   * Registers and enables the specified component
   */
  public enable<T extends Component>(
    token: ComponentClass<T>,
    config?: DeepLazySpec<DeepPartial<ExtractComponentArgs<T>>>,
    context?: Partial<Context>,
    weight?: number,
    force?: boolean,
    condition?: Condition,
  ) {
    const result = this.component(token, context, true);
    result.props.$set({ enable: true, ...config || {} }, weight, force, condition);
  };

  /**
   * Requests the component identified by the specified token and context
   */
  public component<T extends Component>(token: ComponentClass<T>, context?: Partial<Context>, auto: boolean = false): T {
    context = this.defaultContext(token, context);
    let result = this.components.request(token, context);
    if (result === undefined && auto) {
      result = new token(this, undefined, context);
      this.components.register(token, result, context);
    };

    return result! as T;
  };

  /**
   * Requests the fact identified by the specified token
   */
  public fact<T extends BaseFact>(token: constructor<T>): T {
    return this.facts.request(token)! as T;
  };

  public defaultContext<T extends Component>(token: constructor<T>, context?: Partial<Context>, force?: boolean): Partial<Context> {
    if (!context) context = {};
    if ((!context.name || force) && Reflect.hasMetadata(CLASS_META_KEY, token)) {
      context.name = ReflectionUtilities.classToName(Reflect.getMetadata(CLASS_META_KEY, token));
    };

    return context as Context;
  };

  public toString(): string {
    return `target ${this.model.metadata.name}`;
  };
};

export type TargetClass = {
  new (model: architectGlasswayNet.v1alpha1.Target, params: unknown, parent: Architect): Target
  fake(): architectGlasswayNet.v1alpha1.Target;
};
