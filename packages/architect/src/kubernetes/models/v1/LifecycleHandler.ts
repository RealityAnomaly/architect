import { IIoK8sApiCoreV1ExecAction } from "./ExecAction.ts";
import { IIoK8sApiCoreV1HTTPGetAction } from "./HTTPGetAction.ts";
import { IIoK8sApiCoreV1SleepAction } from "./SleepAction.ts";
import { IIoK8sApiCoreV1TCPSocketAction } from "./TCPSocketAction.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../_schemas/IoK8sApiCoreV1LifecycleHandler.js";

/**
 * LifecycleHandler defines a specific action that should be taken in a lifecycle hook. One and only one of the fields, except TCPSocket must be specified.
 */
export interface ILifecycleHandler {
  /**
 * Exec specifies a command to execute in the container.
 */
"exec"?: IIoK8sApiCoreV1ExecAction;
/**
 * HTTPGet specifies an HTTP GET request to perform.
 */
"httpGet"?: IIoK8sApiCoreV1HTTPGetAction;
/**
 * Sleep represents a duration that the container should sleep.
 */
"sleep"?: IIoK8sApiCoreV1SleepAction;
/**
 * Deprecated. TCPSocket is NOT supported as a LifecycleHandler and kept for backward compatibility. There is no validation of this field and lifecycle hooks will fail at runtime when it is specified.
 */
"tcpSocket"?: IIoK8sApiCoreV1TCPSocketAction;
}

/**
 * LifecycleHandler defines a specific action that should be taken in a lifecycle hook. One and only one of the fields, except TCPSocket must be specified.
 */
export class LifecycleHandler extends Model<ILifecycleHandler> implements ILifecycleHandler {
  "exec"?: IIoK8sApiCoreV1ExecAction;
"httpGet"?: IIoK8sApiCoreV1HTTPGetAction;
"sleep"?: IIoK8sApiCoreV1SleepAction;
"tcpSocket"?: IIoK8sApiCoreV1TCPSocketAction;

constructor(data?: ModelData<ILifecycleHandler>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(LifecycleHandler, validate as ValidateFunc<ILifecycleHandler>);

export type {
  ILifecycleHandler as IIoK8sApiCoreV1LifecycleHandler,
  LifecycleHandler as IoK8sApiCoreV1LifecycleHandler
};
