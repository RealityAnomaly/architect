import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/networking.k8s.io/v1/IngressPortStatus.js";

/**
 * IngressPortStatus represents the error condition of a service port
 */
export interface IIngressPortStatus {
  /**
 * error is to record the problem with the service port The format of the error shall comply with the following rules: - built-in error values shall be specified in this file and those shall use
 *   CamelCase names
 * - cloud provider specific error values must have names that comply with the
 *   format foo.example.com/CamelCase.
 */
"error"?: string;
/**
 * port is the port number of the ingress port.
 */
"port": number;
/**
 * protocol is the protocol of the ingress port. The supported values are: "TCP", "UDP", "SCTP"
 */
"protocol": string;
}

/**
 * IngressPortStatus represents the error condition of a service port
 */
export class IngressPortStatus extends Model<IIngressPortStatus> implements IIngressPortStatus {
  "error"?: string;
"port": number;
"protocol": string;

constructor(data?: ModelData<IIngressPortStatus>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(IngressPortStatus, validate as ValidateFunc<IIngressPortStatus>);

export type {
  IIngressPortStatus as IIoK8sApiNetworkingV1IngressPortStatus,
  IngressPortStatus as IoK8sApiNetworkingV1IngressPortStatus
};
