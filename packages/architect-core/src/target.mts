import * as fs from 'node:fs/promises';
import path from 'node:path';
import _ from 'lodash';

import { Component } from './component.mts';
import { Registry } from './registry.mts';
import { ResolvedComponent, Result } from './result.mts';
import { asyncFilter, Condition, constructor, DeepLazySpec, DeepPartial } from './utils/index.mts';

type Extract<T extends Component> = T extends Component<infer _R, infer U> ? U : never;

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
  public static async collectFolder(input: string): Promise<Record<string, Target>> {
    const result = await fs.readdir(input);

    // attempt to import every result as a Target instance
    let results = await Promise.all(result.map(async (k): Promise<[string, Target | null]> => {
      if (!k.endsWith('.mts')) return [k, null]; // ignore type definitions
      const stripped = k.replace(/\.[^/.]+$/, ''); // strip extension

      try {
        const imported = await import(path.join(input, k));
        return [stripped, imported.default];
      } catch (exception) {
        console.log(exception);
        throw exception;
      };
    }));

    const targets = {} as Record<string, Target>;
    results = results.filter(([_k, v]) => v !== null);
    results.forEach(([k, v]) => targets[k] = v as Target);
    return targets;
  };

  public readonly params: TargetParams;

  public readonly components = new Registry([this]);
  protected readonly facts = new Registry();

  constructor(params: TargetParams = {}) {
    this.params = params;
  };

  /**
    * Invokes a build operation on all components, passing our facts
    */
  public async resolve(params: TargetResolveParams = {}): Promise<Result> {
    // Aggregate all enabled components
    const values: Component[] = await asyncFilter(
      Object.values(this.components.data),
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
          throw Error(`Component ${v.toString()}\nMatcher ${cur.toString()} failed`);
        };

        return prev.concat(matches);
      }, []);
    }));

    // Execute component build async
    await Promise.all(values.map(async (v): Promise<void> => {
      let result = await v.build();
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

export class ValidationError extends Error {};
