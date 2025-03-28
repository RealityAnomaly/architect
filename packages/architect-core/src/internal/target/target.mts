import { Reflect } from '@dx/reflect';
import { Logger } from 'winston';

import { architectGlasswayNet } from '../../generated/crds/index.ts';

import { Component, ComponentClass,  } from '../component/component.mts';
import {
  Condition,
  Constructor,
  DeepLazySpec,
  DeepPartial,
  ReflectionUtilities,
  TokenRegistry,
  ValidationError,
  ValidationErrorLevel,
} from '../../utils/index.mts';
import { Result } from '../result/index.mts';
import { Context } from '../../utils/index.mts';
import {
  Architect,
  Capability,
  CompilePhase,
  DependencyGraph, ExtractComponentArgs,
  ICompileListener,
  VirtualCapability,
} from '../../index.mts';
import { Project } from '../project/index.mts';

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
   * Write a visualised dependency graph
   */
  graph?: boolean;
}

/**
 * Represents a location to which rendered configuration or objects is applied against
 */
export class Target {
  public readonly project: Project;
  public readonly model: architectGlasswayNet.v1alpha1.Target;
  public readonly params: TargetParams;
  public readonly components = new TokenRegistry<Component>();
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
    logger?: Logger,
    listener?: ICompileListener,
  ): Promise<Result | undefined> {
    listener?.setTotal(this.components.length());
    listener?.onPhaseChange(CompilePhase.Resolve);

    // in validateOnly mode, only first stage validation runs
    const validate = params?.validate !== false;
    const validateOnly = false;

    const graph = await this.resolve(params);
    if (validateOnly) {
      graph.assertValid(logger);
      listener?.setCompleted();
      return undefined;
    }

    listener?.onPhaseChange(CompilePhase.Build);

    const results: Record<string, unknown> = {};
    await Promise.all(
      Object.values(graph.components).map(async (v): Promise<void> => {
        const name = v.component.toString();
        listener?.onComponentStart(name);

        let result = undefined;
        try {
          result = await v.component.build();
        } catch (e) {
          const message = e instanceof Error ? e.message : 'Unknown exception';
          graph.components[v.component.rid].errors.push(
            new ValidationError(
              'build exception thrown:\n' + message,
              ValidationErrorLevel.ERROR,
              v.component.toString(),
            ),
          );
        }

        if (result === undefined) return;

        results[v.component.rid] = await v.component.postBuild(result);
        listener?.onComponentEnd(name);
      }),
    );

    const result = new Result(graph, results);
    logger?.info(
      `${this.toString()}: ${
        Object.values(result.components).length
      } components built`,
    );

    if (validate) {
      listener?.onPhaseChange(CompilePhase.Validate);
      if (!result.graph.assertValid(logger)) {
        listener?.setCompleted();
        return result;
      }
    } else {
      logger?.warn(
        `validation skipped for target ${this.toString()}`,
      );
    }

    listener?.setCompleted();
    return result;
  }

  /**
   * Applies the result of a compile operation
   * @param params
   * @param logger
   * @param listener
   */
  public async apply(
    params?: TargetResolveParams,
    logger?: Logger,
    listener?: ICompileListener,
  ) {
    await this.compile(params, logger, listener);
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
    return `target ${this.model.metadata.name}`;
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
}

export type TargetClass = {
  // deno-lint-ignore no-explicit-any
  new (
    model: architectGlasswayNet.v1alpha1.Target,
    params: any,
    parent: Project,
  ): Target;
  fake(): architectGlasswayNet.v1alpha1.Target;
};
