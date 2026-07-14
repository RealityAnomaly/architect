export enum ApplyLifecycle {
  APPLYING = "applying",
  COMPLETE = "complete",
  FAILED = "failed",
}

export interface ApplyStatus {
  /**
   * The latest status string from the provider regarding the status of the resource apply
   */
  message?: string;

  /**
   * The current lifecycle status of the resource (applying, complete, failed etc)
   */
  lifecycle: ApplyLifecycle;

  // /**
  //  * The previous version of the resource before it was applied
  //  */
  // previous: T;
}
