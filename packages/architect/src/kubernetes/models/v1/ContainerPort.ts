import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../_schemas/IoK8sApiCoreV1ContainerPort.js";

/**
 * ContainerPort represents a network port in a single container.
 */
export interface IContainerPort {
  /**
 * Number of port to expose on the pod's IP address. This must be a valid port number, 0 < x < 65536.
 */
"containerPort": number;
/**
 * What host IP to bind the external port to.
 */
"hostIP"?: string;
/**
 * Number of port to expose on the host. If specified, this must be a valid port number, 0 < x < 65536. If HostNetwork is specified, this must match ContainerPort. Most containers do not need this.
 */
"hostPort"?: number;
/**
 * If specified, this must be an IANA_SVC_NAME and unique within the pod. Each named port in a pod must have a unique name. Name for the port that can be referred to by services.
 */
"name"?: string;
/**
 * Protocol for port. Must be UDP, TCP, or SCTP. Defaults to "TCP".
 */
"protocol"?: string;
}

/**
 * ContainerPort represents a network port in a single container.
 */
export class ContainerPort extends Model<IContainerPort> implements IContainerPort {
  "containerPort": number;
"hostIP"?: string;
"hostPort"?: number;
"name"?: string;
"protocol"?: string;

constructor(data?: ModelData<IContainerPort>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(ContainerPort, validate as ValidateFunc<IContainerPort>);

export type {
  IContainerPort as IIoK8sApiCoreV1ContainerPort,
  ContainerPort as IoK8sApiCoreV1ContainerPort
};
