import { Component } from './component.mts';

export type ExtractComponentArgs<T extends Component> = T extends Component<object, infer A> ? A : never;

export interface ComponentArgs<TInput = unknown> {
  /**
   * Whether the component is enabled.
   */
  enable?: boolean;

  /**
   * The inputs for the component.
   */
  inputs?: Record<string, TInput>;
}
