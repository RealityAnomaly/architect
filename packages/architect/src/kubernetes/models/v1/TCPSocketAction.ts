import { IIoK8sApimachineryPkgUtilIntstrIntOrString } from "../../apimachinery/util/intstr/IntOrString.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../_schemas/IoK8sApiCoreV1TCPSocketAction.js";

/**
 * TCPSocketAction describes an action based on opening a socket
 */
export interface ITCPSocketAction {
  /**
 * Optional: Host name to connect to, defaults to the pod IP.
 */
"host"?: string;
/**
 * Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
 */
"port": IIoK8sApimachineryPkgUtilIntstrIntOrString;
}

/**
 * TCPSocketAction describes an action based on opening a socket
 */
export class TCPSocketAction extends Model<ITCPSocketAction> implements ITCPSocketAction {
  "host"?: string;
"port": IIoK8sApimachineryPkgUtilIntstrIntOrString;

constructor(data?: ModelData<ITCPSocketAction>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(TCPSocketAction, validate as ValidateFunc<ITCPSocketAction>);

export type {
  ITCPSocketAction as IIoK8sApiCoreV1TCPSocketAction,
  TCPSocketAction as IoK8sApiCoreV1TCPSocketAction
};
