// SPDX-FileCopyrightText: 2026 Vertex X7-53
//
// SPDX-License-Identifier: GPL-3.0-or-later

import 'reflect-metadata';
import * as logtape from '@logtape/logtape';

import { architectGlasswayNet } from '../../kubernetes/crds/index.ts';

import { Component, ComponentClass, IComponent } from '../component/index.ts';
import {
  Condition,
  Constructor, ContextUtils,
  DeepLazySpec,
  DeepPartial,
  TokenRegistry,
  ValidationError,
  ValidationErrorLevel,
} from '../../utils/index.ts';
import { Result, DiffResult } from '../result/index.ts';
import { Context } from '../../utils/index.ts';
import {
  IArchitect,
  Capability,
  BuildPhase,
  IDependencyGraph,
  DependencyGraph,
  ExtractComponentArgs,
  ICompileListener,
  VirtualCapability, TargetIntrospection, BuildContext,
} from '../../index.ts';
import { IProject } from '../project/index.ts';

// Alias to the target type in case the interface is ever updated
export type TargetType = architectGlasswayNet.v1alpha1.Target;

export interface TargetParams {
  /**
   * Location of the target configuration file.
   * For backend-loaded targets this is always undefined
   */
  path?: string;
}

export interface TargetResolveParams {
  /**
   * Bypass any GitOps providers
   */
  direct?: boolean;

  /**
   * Applies only resources marked for bootstrapping the target
   */
  bootstrap?: boolean;

  /**
   * Optional filter of components to resolve or apply
   */
  components?: string[];

  /**
   * Enable or disable validating requirements
   */
  requirements?: boolean;

  /**
   * Enable or disable validating configuration
   */
  validate?: boolean;

  /**
   * Validate without building
   */
  validateOnly?: boolean;

  /**
   * Write a visualised dependency graph
   */
  graph?: boolean;
}

export interface TargetDiffParams extends TargetResolveParams {}

export interface TargetApplyParams extends TargetResolveParams {
  dryRun?: boolean;
  force?: boolean;
  watch?: boolean;
}

export interface ITarget {
  get app(): IArchitect;
  get model(): TargetType;
  get params(): TargetParams;
  get project(): IProject;
  get components(): TokenRegistry<IComponent>;
  get capabilities(): Capability<unknown>[];

  /**
   * Resolves the component dependency graph
   */
  resolve(params: TargetResolveParams): Promise<IDependencyGraph>;

  /**
   * Compiles all output resources
   * @param params The parameters to use for resolution
   * @param logger A logger to use for the invocation
   * @param listener
   */
  compile(
    params?: TargetResolveParams,
    logger?: logtape.Logger,
    listener?: ICompileListener,
  ): Promise<Result | undefined>;

  /**
   * Diffs the result of a compile operation against the target
   * @param result
   * @param params
   * @param logger
   * @param listener
   */
  diff(
    result: Result,
    params?: TargetDiffParams,
    logger?: logtape.Logger,
    listener?: ICompileListener,
  ): Promise<DiffResult>;

  /**
   * Applies the result of a compile operation
   * @param result
   * @param params
   * @param logger
   * @param listener
   */
  apply(
    result: Result,
    params?: TargetApplyParams,
    logger?: logtape.Logger,
    listener?: ICompileListener,
  ): Promise<void>;

  /**
   * Registers and enables the specified component
   */
  enable<T extends Component>(
    token: ComponentClass<T>,
    config?: DeepLazySpec<DeepPartial<ExtractComponentArgs<T>>>,
    context?: Partial<Context>,
    weight?: number,
    force?: boolean,
    condition?: Condition,
  ): void;

  /**
   * Registers an existing instance of a {@link Component}.
   * @param token
   * @param instance
   * @param context
   */
  register<T extends Component>(
    token: ComponentClass<T>,
    instance: T,
    context: Context,
  ): void;

  /**
   * Requests the component identified by the specified token and context
   */
  component<T extends Component>(
    token: ComponentClass<T>,
    context?: Partial<Context>,
    auto?: boolean,
  ): T | undefined;

  /**
   * Attempts to locate the first registered capability matching the condition
   * @param token
   * @param condition
   */
  capability<T, R extends Capability<T>>(
    token: Constructor<R>,
    condition?: (capability: R) => boolean
  ): Promise<R | undefined>;

  capabilityEnabler<T, R extends Capability<T>>(
    token: Constructor<R>,
    condition?: (capability: R) => boolean
  ): () => Promise<boolean>;

  /**
   * Declares the existence of a Capability not exposed by resources declared in this target.
   */
  declare(capability: Capability<unknown>): void;

  defaultContext<T extends Component>(
    token: Constructor<T>,
    context?: Partial<Context>,
    force?: boolean,
  ): Partial<Context>;

  toString(): string;
  init(): Promise<void>;

  getIntrospection(): TargetIntrospection<unknown> | undefined;
}

export interface TargetFake {
  model: TargetType,
  state?: object
}

/**
 * Represents a location to which rendered configuration or objects is applied against
 */
export class Target implements ITarget {
  protected readonly _model: TargetType;
  protected readonly _params: TargetParams;
  protected readonly _project: IProject;
  protected readonly _components: TokenRegistry<IComponent> = new TokenRegistry<IComponent>();
  protected readonly _capabilities: Capability<unknown>[] = [];

  public constructor(
    model: TargetType,
    params: TargetParams = {},
    project: IProject,
  ) {
    this._model = model;
    this._params = params;
    this._project = project;
  }

  public get app(): IArchitect { return this._project.app; }
  public get model(): TargetType { return this._model; }
  public get params(): TargetParams { return this._params };
  public get project(): IProject { return this._project };
  public get components(): TokenRegistry<IComponent> { return this._components };

  public get capabilities(): Capability<unknown>[] {
    return this._capabilities;
  }

  public async resolve(
    params: TargetResolveParams = {},
  ): Promise<IDependencyGraph> {
    return await DependencyGraph.resolve(
      this,
      Object.values(this.components.data),
      params.requirements !== false,
    );
  }

  public async compile(
    params?: TargetResolveParams,
    logger?: logtape.Logger,
    listener?: ICompileListener,
  ): Promise<Result | undefined> {
    listener?.setTarget(this);
    listener?.setTotal(this.components.length());
    listener?.onPhaseChange(BuildPhase.Resolve);

    // in validateOnly mode, only first stage validation runs
    const validate = params?.validate !== false;

    const graph = await this.resolve(params);
    if (params?.validateOnly) {
      listener?.onPhaseChange(BuildPhase.Validate);
      return undefined;
    }

    listener?.onPhaseChange(BuildPhase.Build);

    const results: Record<string, unknown> = {};
    // collect component weight values and evaluate sequentially
    const buckets =
      Array.from(Map.groupBy(Object.values(graph.components), c => c.component.weight).entries())
        .sort(([a], [b]) => a - b)
        .map(([, value]) => value);

    const context = this.getBuildContext(params ?? {});

    for (const bucket of buckets) {
      await Promise.all(bucket.map(async (v): Promise<void> => {
          listener?.setStatus(v.component.toString());

          let result = undefined;
          try {
            result = await v.component.build(context);
          } catch (e) {
            const message = e instanceof Error ? e.message : 'Unknown exception';

            graph.components[v.component.name].errors.push(
              new ValidationError(
                'build exception thrown: ' + message,
                ValidationErrorLevel.ERROR,
                v.component.toString(),
              ),
            );
          }

          if (result === undefined) return;

          results[v.component.name] = await v.component.postBuild(context, result);
          listener?.onResourceEnd();
        }),
      );
    }

    const result = new Result(this, graph, results);
    logger?.info(
      `${this.toString()}: ${
        Object.values(result.components).length
      } components built`,
    );

    if (validate) {
      listener?.onPhaseChange(BuildPhase.Validate);
    } else {
      logger?.warn(
        `validation skipped for target ${this.toString()}`,
      );
    }

    return result;
  }

  public async diff(
    _result: Result,
    _params?: TargetDiffParams,
    _logger?: logtape.Logger,
    listener?: ICompileListener,
  ): Promise<DiffResult> {
    listener?.onPhaseChange(BuildPhase.Diff);
    return {};
  }

  public async apply(
    _result: Result,
    _params?: TargetApplyParams,
    _logger?: logtape.Logger,
    listener?: ICompileListener,
  ): Promise<void> {
    listener?.onPhaseChange(BuildPhase.Apply);
  }

  public enable<T extends Component>(
    token: ComponentClass<T>,
    config?: DeepLazySpec<DeepPartial<ExtractComponentArgs<T>>>,
    context?: Partial<Context>,
    weight?: number,
    force?: boolean,
    condition?: Condition,
  ) {
    const result = this.component(token, context, true)!;
    result.props.$set(
      { enable: true, ...config || {} },
      weight,
      force,
      condition,
    );
  }

  public register<T extends Component>(
    token: ComponentClass<T>,
    instance: T,
    context: Context,
  ) {
   this.components.register(token, instance, context);
  }

  public component<T extends Component>(
    token: ComponentClass<T>,
    context?: Partial<Context>,
    auto: boolean = false,
  ): T | undefined {
    context = this.defaultContext(token, context);
    let result = this.components.request(token, context);
    if (result === undefined && auto) {
      result = new token(this, context as Context);
      result.init();

      this.components.register(token, result, context);
    }

    return result as T;
  }

  public async capability<T, R extends Capability<T>>(
    token: Constructor<R>,
    condition?: (capability: R) => boolean
  ): Promise<R | undefined> {
    // merge capabilities from target and all components
    const capabilities = [...this.capabilities];
    for (const component of Object.values(this.components.data)) {
      if (await component.props.enable.$resolve())
        capabilities.push(...component.capabilities);
    }

    for (const capability of capabilities) {
      if (ContextUtils.compareTokens(token, capability.constructor as Constructor<R>)
        && (!condition || condition(capability as R))) return capability as R;
    }

    return undefined;
  }

  public capabilityEnabler<T, R extends Capability<T>>(
    token: Constructor<R>,
    condition?: (capability: R) => boolean
  ): () => Promise<boolean> {
    return async () => !!(await this.capability(token, condition));
  }

  public declare(capability: Capability<unknown>) {
    this._capabilities.push(capability);
  }

  public defaultContext<T extends Component>(
    token: Constructor<T>,
    context?: Partial<Context>,
    force?: boolean,
  ): Partial<Context> {
    return ContextUtils.defaultContext(token, context, force);
  }

  public toString(): string {
    return this._model.metadata.name!;
  }

  public async init() {
    for (const def of this._model.spec.components || []) {
      const token = await this._project.getComponent(def.class, true);
      if (!token) {
        this.app.logger.warn(
          `target ${this._model.metadata.name} references unknown component ${def.class}, skipping`,
        );
        continue;
      }

      this.enable(token, def.options);
    }

    for (const capability of this._model.spec.capabilities || []) {
      this._capabilities.push(
        new VirtualCapability(capability.class, capability.options),
      );
    }
  }

  protected getBuildContext(_params: TargetResolveParams): BuildContext {
    return {};
  }

  public getIntrospection(): TargetIntrospection<unknown> | undefined {
    return undefined;
  }
}

export type TargetClass = {
  new (
    model: architectGlasswayNet.v1alpha1.Target,
    // deno-lint-ignore no-explicit-any
    params: any,
    parent: IProject,
  ): ITarget;
  fake(): TargetFake;
};
