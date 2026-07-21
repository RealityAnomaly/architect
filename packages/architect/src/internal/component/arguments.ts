import { IComponent } from './component.ts';

export type ExtractComponentArgs<T extends IComponent> = T extends IComponent<object, infer A> ? A : never;

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
