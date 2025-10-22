export enum ApplyLifecycle {
  APPLYING = "applying",
  COMPLETE = "complete",
  FAILED = "failed",
}

export interface ApplyStatus<T> {
  /**
   * The latest status string from the provider regarding the status of the resource apply
   */
  message?: string;

  /**
   * The current lifecycle status of the resource (applying, complete, failed etc)
   */
  lifecycle: ApplyLifecycle;

  /**
   * The previous version of the resource before it was applied
   */
  previous: T;
}

/**
 * A Provider is the actual thing that resources are deployed to. i.e. a physical infrastructure API or a Kubernetes cluster.
 * Providers must provide an interface to apply a set of resources, as well as watching those resources reconciliate
 */
export abstract class Provider<
  T,
  TStatus extends ApplyStatus<T> = ApplyStatus<T>,
> {
  abstract apply(
    resources: T[],
    dryRun: boolean,
    watch: boolean,
  ): AsyncGenerator<TStatus>;
}
