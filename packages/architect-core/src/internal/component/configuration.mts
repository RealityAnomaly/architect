import { Component,  } from './component.mts';
import { Context } from '../../utils/index.mts';
import { Target } from '../target/index.mts';
import { _LazyProxy, Condition, Constructor, DeepLazySpec, DeepPartial, Lazy, LazyAuto, } from '../../utils/index.mts';
import { ComponentArgs, ExtractComponentArgs } from './arguments.mts';

/**
 * Provides context for component configuration execution
 */
export class ConfigurationContext {
  private readonly target: Target;
  private readonly self: LazyAuto<ComponentArgs>;
  private readonly enabler: Condition;

  constructor(
    target: Target,
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
  ): LazyAuto<ExtractComponentArgs<T>> {
    return this.target.component(token, context, true).props as LazyAuto<
      ExtractComponentArgs<T>
    >;
  }

  public enable<T extends Component>(
    token: Constructor<T>,
    config?: DeepLazySpec<DeepPartial<ExtractComponentArgs<T>>>,
    context?: Partial<Context>,
    weight?: number,
    force?: boolean,
    condition = this.enabler,
  ) {
    this.target.enable<T>(token, config, context, weight, force, condition);
  }

  public set<T extends Component>(
    token: Constructor<T>,
    value: DeepLazySpec<DeepPartial<ExtractComponentArgs<T>>>,
    weight?: number,
    force?: boolean,
    condition = this.enabler,
  ) {
    this.component<T>(token, undefined).$set(value, weight, force, condition);
  }

  public mkIf(
    condition: _LazyProxy<boolean>,
    configurator: (context: ConfigurationContext) => void,
  ) {
    const enabler = Lazy.combineConditions(this.enabler, condition);
    configurator(new ConfigurationContext(this.target, this.self, enabler));
  }
}
