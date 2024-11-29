import path from 'path';
import * as fs from 'node:fs/promises';
import _ from 'lodash';

import { architectGlasswayNet } from './generated/crds/index.ts';

import { Component } from './components/index.mts';
import { Registry } from './registry.mts';
import { ResolvedComponent, Result } from './result.mts';
import { asyncFilter, Condition, constructor, DeepLazySpec, DeepPartial, ReflectionUtilities } from './utils/index.mts';
import { Architect } from './index.mts';
import { Context } from 'node:vm';

type Extract<T extends Component> = T extends Component<infer _R, infer U> ? U : never;

export const PLUGIN_TARGET_IDENTIFIERS = {
  kubernetes: 'k8s.architect.glassway.net/KubeTarget',
};

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
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
      parent.logger.debug(`loaded target ${t.model.metadata.name} of kind ${t.model.kind}`);
    }));

    return results;
  };

  public readonly model: architectGlasswayNet.v1alpha1.Target;
  public readonly parent: Architect;
  public readonly params: TargetParams;

  public readonly components = new Registry<Component>([this]);
  protected readonly facts = new Registry<BaseFact>();

  protected constructor(model: architectGlasswayNet.v1alpha1.Target, params: TargetParams = {}, parent: Architect) {
    this.model = model;
    this.params = params;
    this.parent = parent;
  };

  protected async init() {
    const tokens = await this.parent.project!.getComponents(true);
    for (const component of this.model.spec.components || []) {
      const token = tokens.find(t => Reflect.getMetadata('class', t) === component.class);
      if (!token) {
        this.parent.logger.warn(`Target ${this.model.metadata.name} references unknown component ${component.class}, skipping`);
        continue;
      };

      this.enable(token, component.options, {
        ...component.context || {},
        name: component.name,
      });
    };
  };

  /**
    * Invokes a build operation on all components, passing our facts
    */
  public async resolve(params: TargetResolveParams = {}): Promise<Result> {
    // Aggregate all enabled components
    const values: Component[] = await asyncFilter(
      Object.values(this.components.data) as Component[],
      async (c: Component) => await c.props.enable.$resolve() === true,
    );

    const results: Record<string, Partial<ResolvedComponent>> = Object.fromEntries(values.map((v): [string, Partial<ResolvedComponent>] => {
      return [v.rid, { component: v }];
    }));

    // Ensure component inter-requirements are met
    await Promise.all(values.map(async (v) => {
      const requirements = await v.getRequirements();
      results[v.rid].dependencies = requirements.reduce<Component[]>((prev, cur) => {
        const matches = values.filter(v2 => cur.match(v2));
        if ((matches.length <= 0) && params.requirements !== false) {
          throw Error(`in component ${v.toString()}: failed to satisfy dependency ${cur.toString()}`);
        };

        return prev.concat(matches);
      }, []);
    }));

    // Execute component build async
    await Promise.all(values.map(async (v): Promise<void> => {
      const result = await v.build();
      if (result === undefined) return;

      results[v.rid].result = await v.postBuild(result);
    }));

    // build returning result object
    const result = new Result();
    result.components = results as Record<string, ResolvedComponent>;

    return result;
  };

  /**
   * Registers and enables the specified component
   */
  public enable<T extends Component>(
    token: constructor<T>,
    config?: DeepLazySpec<DeepPartial<Extract<T>>>,
    context?: Partial<Context>,
    weight?: number,
    force?: boolean,
    condition?: Condition,
  ) {
    const result = this.component(token, context, true);
    result.props.$set({ enable: true }, weight, force, condition);

    if (config !== undefined) {
      result.props.$set(config, weight, force, condition);
    };
  };

  /**
   * Requests the component identified by the specified token and context
   */
  public component<T extends Component>(token: constructor<T>, context?: Partial<Context>, auto: boolean = false): T {
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
    if ((!context.name || force) && Reflect.hasMetadata('class', token)) {
      context.name = ReflectionUtilities.classToName(Reflect.getMetadata('class', token));
    };

    return context as Context;
  };
};

export type TargetClass = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  new (model: architectGlasswayNet.v1alpha1.Target, params: any, parent: Architect): Target
  key: string
};

export class ValidationError extends Error {};
