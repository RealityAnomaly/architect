import 'reflect-metadata';
import * as logtape from '@logtape/logtape';

import { architectGlasswayNet } from '../../kubernetes/crds/index.ts';

import { Component, ComponentClass,  } from '../component/index.ts';
import {
  Condition,
  Constructor,
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
  Architect,
  Capability,
  BuildPhase,
  DependencyGraph, ExtractComponentArgs,
  ICompileListener,
  VirtualCapability, TargetIntrospection,
} from '../../index.ts';
import { Project } from '../project/index.ts';

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

/**
 * Represents a location to which rendered configuration or objects is applied against
 */
export class Target {
  public readonly project: Project;
  public readonly model: architectGlasswayNet.v1alpha1.Target;
  public readonly params: TargetParams;
  public readonly components: TokenRegistry<Component> = new TokenRegistry<Component>();
  public readonly capabilities: Capability<unknown>[] = [];

  protected constructor(
    model: architectGlasswayNet.v1alpha1.Target,
    params: TargetParams = {},
    project: Project,
  ) {
    this.model = model;
    this.params = params;
    this.project = project;
  }

  public get app(): Architect {
    return this.project.app;
  }

  /**
   * Resolves the component dependency graph
   */
  public async resolve(
    params: TargetResolveParams = {},
  ): Promise<DependencyGraph> {
    return await DependencyGraph.resolve(
      this,
      Object.values(this.components.data),
      params.requirements !== false,
    );
  }

  /**
   * Compiles all output resources
   * @param params The parameters to use for resolution
   * @param logger A logger to use for the invocation
   * @param listener
   */
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
      if (!result.graph.assertValid(logger)) {
        return result;
      }
    } else {
      logger?.warn(
        `validation skipped for target ${this.toString()}`,
      );
    }

    return result;
  }

  /**
   * Applies the result of a compile operation
   * @param result
   * @param params
   * @param logger
   * @param listener
   */
  public async apply(
    result: Result,
    params?: TargetApplyParams,
    logger?: logtape.Logger,
    listener?: ICompileListener,
  ): Promise<void> {
    listener?.onPhaseChange(BuildPhase.Apply);
  }

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
    result.props.$set(
      { enable: true, ...config || {} },
      weight,
      force,
      condition,
    );
  }

  /**
   * Requests the component identified by the specified token and context
   */
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

  /**
   * Declares the existence of a Capability not exposed by resources declared in this target.
   */
  public declare(capability: Capability<unknown>) {
    this.capabilities.push(capability);
  }

  public defaultContext<T extends Component>(
    token: Constructor<T>,
    context?: Partial<Context>,
    force?: boolean,
  ): Partial<Context> {
    if (!context) context = {};
    if (
      (!context.name || force) &&
      Reflect.hasMetadata(Architect.CLASS_META_KEY, token)
    ) {
      context.name = ReflectionUtilities.classToName(
        Reflect.getMetadata(Architect.CLASS_META_KEY, token),
      );
    }

    return context as Context;
  }

  public toString(): string {
    return this.model.metadata.name ?? "unnamed";
  }

  public async init() {
    for (const def of this.model.spec.components || []) {
      const token = await this.project.getComponent(def.class, true);
      if (!token) {
        this.app.logger.warn(
          `Target ${this.model.metadata.name} references unknown component ${def.class}, skipping`,
        );
        continue;
      }

      this.enable(token, def.options);
    }

    for (const capability of this.model.spec.capabilities || []) {
      this.capabilities.push(
        new VirtualCapability(capability.class, capability.options),
      );
    }
  }

  public getIntrospection(): TargetIntrospection<unknown> | undefined {
    return undefined;
  }
}

export interface TargetFake {
  model: architectGlasswayNet.v1alpha1.Target,
  state?: object
}

export type TargetClass = {
  new (
    model: architectGlasswayNet.v1alpha1.Target,
    // deno-lint-ignore no-explicit-any
    params: any,
    parent: Project,
  ): Target;
  fake(): TargetFake;
};
