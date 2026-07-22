import 'reflect-metadata';
import * as logtape from '@logtape/logtape';

import { architectGlasswayNet } from '../../kubernetes/crds/index.ts';

import { Component, ComponentClass, IComponent } from '../component/index.ts';
import {
  Condition,
  Constructor, ContextUtils,
  DeepLazySpec,
  DeepPartial,
  ReflectionUtilities,
  TokenRegistry,
  ValidationError,
  ValidationErrorLevel,
} from '../../utils/index.ts';
import { Result } from '../result/index.ts';
import { Context } from '../../utils/index.ts';
import {
  IArchitect,
  Capability,
  BuildPhase,
  IDependencyGraph,
  DependencyGraph,
  ExtractComponentArgs,
  ICompileListener,
  VirtualCapability, TargetIntrospection,
} from '../../index.ts';
import { IProject } from '../project/index.ts';
import { Constants } from '../constants.ts';

export interface TargetParams {
}

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
   * Validate without building
   */
  validateOnly?: boolean;

  /**
   * Write a visualised dependency graph
   */
  graph?: boolean;
}

export interface TargetApplyParams extends TargetResolveParams {
  force?: boolean;
  dryRun?: boolean;
  watch?: boolean;
}

export interface ITarget {
  get app(): IArchitect;
  get model(): architectGlasswayNet.v1alpha1.Target;
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
  ): T;

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
  model: architectGlasswayNet.v1alpha1.Target,
  state?: object
}

/**
 * Represents a location to which rendered configuration or objects is applied against
 */
export class Target implements ITarget {
  protected readonly _model: architectGlasswayNet.v1alpha1.Target;
  protected readonly _params: TargetParams;
  protected readonly _project: IProject;
  protected readonly _components: TokenRegistry<IComponent> = new TokenRegistry<IComponent>();
  protected readonly _capabilities: Capability<unknown>[] = [];

  public constructor(
    model: architectGlasswayNet.v1alpha1.Target,
    params: TargetParams = {},
    project: IProject,
  ) {
    this._model = model;
    this._params = params;
    this._project = project;
  }

  public get app(): IArchitect { return this._project.app; }
  public get model() { return this._model; }
  public get params() { return this._params };
  public get project() { return this._project };
  public get components() { return this._components };

  public get capabilities() {
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
      graph.assertValid(logger);
      return undefined;
    }

    listener?.onPhaseChange(BuildPhase.Build);

    const results: Record<string, unknown> = {};
    await Promise.all(
      Object.values(graph.components).map(async (v): Promise<void> => {
        listener?.onComponentStart(v.component);

        let result = undefined;
        try {
          result = await v.component.build();
        } catch (e) {
          const message = e instanceof Error ? e.message : 'Unknown exception';

          graph.components[v.component.rid].errors.push(
            new ValidationError(
              'build exception thrown: ' + message,
              ValidationErrorLevel.ERROR,
              v.component.toString(),
            ),
          );
        }

        if (result === undefined) return;

        results[v.component.rid] = await v.component.postBuild(result);
        listener?.onComponentEnd(v.component);
      }),
    );

    const result = new Result(graph, results);
    logger?.info(
      `${this.toString()}: ${
        Object.values(result.components).length
      } components built`,
    );

    if (validate) {
      listener?.onPhaseChange(BuildPhase.Validate);
      graph.assertValid(logger);
    } else {
      logger?.warn(
        `validation skipped for target ${this.toString()}`,
      );
    }

    return result;
  }

  public async apply(
    result: Result,
    params?: TargetApplyParams,
    logger?: logtape.Logger,
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
    const result = this.component(token, context, true);
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
  ): T {
    context = this.defaultContext(token, context);
    let result = this.components.request(token, context);
    if (result === undefined && auto) {
      result = new token(this, context as Context);
      result.init();

      this.components.register(token, result, context);
    }

    return result! as T;
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
          `Target ${this._model.metadata.name} references unknown component ${def.class}, skipping`,
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
