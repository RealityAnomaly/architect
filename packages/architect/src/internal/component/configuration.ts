import { Component } from './component.ts';
import { Context } from '../../utils/index.ts';
import { ITarget } from '../target/index.ts';
import { Condition, Constructor, DeepLazySpec, DeepPartial, Lazy, LazyAuto, } from '../../utils/index.ts';
import { ComponentArgs, ExtractComponentArgs } from './arguments.ts';

export interface ConfigurationOptions {
  context?: Partial<Context>,
  weight?: number,
  force?: boolean,
  condition?: Condition;
  require?: boolean;
}

/**
 * Provides context for component configuration execution
 */
export class ConfigurationContext {
  private readonly target: ITarget;
  private readonly self: LazyAuto<ComponentArgs>;
  private readonly enabler: Condition;

  constructor(
    target: ITarget,
    self: LazyAuto<ComponentArgs>,
    enabler: Condition = self.enable,
  ) {
    this.target = target;
    this.self = self;
    this.enabler = enabler;
  }

  public component<T extends Component>(
    token: Constructor<T>,
    context?: Partial<Context>,
    require?: true
  ): LazyAuto<ExtractComponentArgs<T>>;

  public component<T extends Component>(
    token: Constructor<T>,
    context?: Partial<Context>,
    require?: boolean
  ): LazyAuto<ExtractComponentArgs<T>> | undefined;

  public component<T extends Component>(
    token: Constructor<T>,
    context?: Partial<Context>,
    require: boolean = true
  ): LazyAuto<ExtractComponentArgs<T>> | undefined {
    // Note: auto here creates, but does not enable the component
    const component = this.target.component(token, context, true);
    if (!component && require) {
      throw new Error(`Component ${token} was requested, but it was not found`);
    }

    return component ? component.props as LazyAuto<
      ExtractComponentArgs<T>
    > : undefined;
  }

  public enable<T extends Component>(
    token: Constructor<T>,
    config?: DeepLazySpec<DeepPartial<ExtractComponentArgs<T>>>,
    options?: ConfigurationOptions,
  ) {
    this.target.enable<T>(token, config, options?.context, options?.weight, options?.force, options?.condition ?? this.enabler);
  }

  public set<T extends Component>(
    token: Constructor<T>,
    value: DeepLazySpec<DeepPartial<ExtractComponentArgs<T>>>,
    options?: ConfigurationOptions
  ) {
    const component = this.component(token, options?.context, options?.require ?? true);
    if (component) component.$set(value, options?.weight, options?.force, options?.condition ?? this.enabler);
  }

  public mkIf(
    condition: Condition,
    configurator: (context: ConfigurationContext) => void,
  ) {
    const enabler = Lazy.combineConditions(this.enabler, condition);
    configurator(new ConfigurationContext(this.target, this.self, enabler));
  }
}
