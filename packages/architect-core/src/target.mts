import path from 'path';
import * as fs from 'node:fs/promises';
import * as yaml from 'js-yaml';  
import _ from 'lodash';

import { Component } from './components/index.mts';
import { Registry } from './registry.mts';
import { ResolvedComponent, Result } from './result.mts';
import { asyncFilter, Condition, constructor, DeepLazySpec, DeepPartial } from './utils/index.mts';
import { Architect, ComponentArgs } from './index.mts';

type Extract<T extends Component> = T extends Component<infer _R, infer U> ? U : never;

export interface TargetModelMeta {
  name: string;
  namespace?: string;
  labels?: Record<string, string>;
};

export interface TargetModelSpecComponent {
  class: string;
  name?: string;
  options?: ComponentArgs;
};

export interface TargetModelSpec {
  requirements: string[]; // TODO: not handled yet
  components: TargetModelSpecComponent[];
};

export interface TargetModel<T extends TargetModelSpec = TargetModelSpec> {
  apiVersion: string;
  kind: string;
  metadata: TargetModelMeta;
  spec: T;
  state: unknown;
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
export class Target<TModel extends TargetModel = TargetModel> {
  public static async collectFolder(parent: Architect, input: string): Promise<Target[]> {
    try {
      const statr = await fs.stat(input);
      if (!statr.isDirectory()) return [];
    } catch {
      return [];
    };

    const result = await fs.readdir(input);
    const targetMap = parent.plugins.targetMap;

    // attempt to import every result as a Target instance
    const results = await Promise.all(result.map(async (k): Promise<Target | null> => {
      if (!k.endsWith('.yaml')) return null;

      const content = await fs.readFile(path.join(input, k), 'utf-8');
      const model = yaml.load(content) as TargetModel;
      if (!Object.hasOwn(targetMap, model.kind)) {
        parent.logger.error(`attempted to load target ${model.metadata.name} with unsupported kind ${model.kind}`);
        return null;
      };

      const target = new targetMap[model.kind](model, {}, parent);
      await target.init();

      parent.logger.debug(`loaded target ${target.model.metadata.name} of kind ${target.model.kind}`);
      return target;
    }));

    return results.filter(v => v !== null);
  };

  public readonly model: TModel;
  public readonly parent: Architect;
  public readonly params: TargetParams;

  public readonly components = new Registry([this]);
  protected readonly facts = new Registry();

  protected constructor(model: TModel, params: TargetParams = {}, parent: Architect) {
    this.model = model;
    this.params = params;
    this.parent = parent;
  };

  protected async init() {
    const tokens = await this.parent.project!.getComponents(true);
    for (const component of this.model.spec.components) {
      const token = tokens.find(t => Reflect.getMetadata('class', t) === component.class);
      if (!token) {
        this.parent.logger.warn(`Target ${this.model.metadata.name} references unknown component ${component.class}, skipping`);
        continue;
      };

      this.enable(token, component.options, component.name);
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
    name?: string,
    weight?: number,
    force?: boolean,
    condition?: Condition,
  ) {
    const result = this.component(token, name, true);
    result.props.$set({ enable: true }, weight, force, condition);

    if (config !== undefined) {
      result.props.$set(config, weight, force, condition);
    };
  };

  /**
   * Requests the component identified by the specified token
   */
  public component<T extends Component>(token: constructor<T>, name?: string, auto: boolean = false): T {
    let result = this.components.request(token, name);
    if (result === undefined && auto) {
      result = new token(this, name, undefined);
      this.components.register(token, result);
    };

    return result!;
  };

  /**
   * Requests the fact identified by the specified token
   */
  public fact<T extends BaseFact>(token: constructor<T>): T {
    return this.facts.request(token)!;
  };
};

export type TargetClass = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  new (model: TargetModel<any>, params: any, parent: Architect): Target
  key: string
};

export class ValidationError extends Error {};
