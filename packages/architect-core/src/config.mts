import { Context } from 'vm';
import { Component, ComponentArgs } from './component.mts';
import { Target } from './target.mts';
import { Condition, constructor, DeepPartial, Lazy, LazyAuto, _LazyProxy, DeepLazySpec } from './utils/index.mts';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Extract<T extends Component> = T extends Component<any, infer A, any> ? A : never;

/**
 * Provides context for component configuration execution
 */
export class ConfigurationContext {
  private readonly target: Target;
  private readonly self: LazyAuto<ComponentArgs>;
  private readonly enabler: Condition;

  constructor(target: Target, self: LazyAuto<ComponentArgs>, enabler: Condition = self.enable) {
    this.target = target;
    this.self = self;
    this.enabler = enabler;
  };

  public component<T extends Component>(token: constructor<T>, context?: Partial<Context>): LazyAuto<Extract<T>> {
    return this.target.component(token, context, true).props as LazyAuto<Extract<T>>;
  };

  public enable<T extends Component>(
    token: constructor<T>,
    config?: DeepLazySpec<DeepPartial<Extract<T>>>,
    context?: Partial<Context>,
    weight?: number,
    force?: boolean,
    condition = this.enabler,
  ) {
    this.target.enable<T>(token, config, context, weight, force, condition);
  };

  public set<T extends Component>(
    token: constructor<T>,
    value: DeepLazySpec<DeepPartial<Extract<T>>>,
    weight?: number,
    force?: boolean,
    condition = this.enabler,
  ) {
    this.component<T>(token, undefined).$set(value, weight, force, condition);
  };

  public mkIf(condition: _LazyProxy<boolean>, configurator: (context: ConfigurationContext) => void) {
    const enabler = Lazy.combineConditions(this.enabler, condition);
    configurator(new ConfigurationContext(this.target, this.self, enabler));
  };
};
