import { IIoK8sApiCoreV1LifecycleHandler } from "./LifecycleHandler.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../_schemas/v1/Lifecycle.js";

/**
 * Lifecycle describes actions that the management system should take in response to container lifecycle events. For the PostStart and PreStop lifecycle handlers, management of the container blocks until the action is complete, unless the container process fails, in which case the handler is aborted.
 */
export interface ILifecycle {
  /**
 * PostStart is called immediately after a container is created. If the handler fails, the container is terminated and restarted according to its restart policy. Other management of the container blocks until the hook completes. More info: https://kubernetes.io/docs/concepts/containers/container-lifecycle-hooks/#container-hooks
 */
"postStart"?: IIoK8sApiCoreV1LifecycleHandler;
/**
 * PreStop is called immediately before a container is terminated due to an API request or management event such as liveness/startup probe failure, preemption, resource contention, etc. The handler is not called if the container crashes or exits. The Pod's termination grace period countdown begins before the PreStop hook is executed. Regardless of the outcome of the handler, the container will eventually terminate within the Pod's termination grace period (unless delayed by finalizers). Other management of the container blocks until the hook completes or until the termination grace period is reached. More info: https://kubernetes.io/docs/concepts/containers/container-lifecycle-hooks/#container-hooks
 */
"preStop"?: IIoK8sApiCoreV1LifecycleHandler;
/**
 * StopSignal defines which signal will be sent to a container when it is being stopped. If not specified, the default is defined by the container runtime in use. StopSignal can only be set for Pods with a non-empty .spec.os.name
 */
"stopSignal"?: string;
}

/**
 * Lifecycle describes actions that the management system should take in response to container lifecycle events. For the PostStart and PreStop lifecycle handlers, management of the container blocks until the action is complete, unless the container process fails, in which case the handler is aborted.
 */
export class Lifecycle extends Model<ILifecycle> implements ILifecycle {
  "postStart"?: IIoK8sApiCoreV1LifecycleHandler;
"preStop"?: IIoK8sApiCoreV1LifecycleHandler;
"stopSignal"?: string;

constructor(data?: ModelData<ILifecycle>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(Lifecycle, validate as ValidateFunc<ILifecycle>);

export type {
  ILifecycle as IIoK8sApiCoreV1Lifecycle,
  Lifecycle as IoK8sApiCoreV1Lifecycle
};
