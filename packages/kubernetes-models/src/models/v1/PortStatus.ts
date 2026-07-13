import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../_schemas/v1/PortStatus.js";

/**
 * PortStatus represents the error condition of a service port
 */
export interface IPortStatus {
  /**
 * Error is to record the problem with the service port The format of the error shall comply with the following rules: - built-in error values shall be specified in this file and those shall use
 *   CamelCase names
 * - cloud provider specific error values must have names that comply with the
 *   format foo.example.com/CamelCase.
 */
"error"?: string;
/**
 * Port is the port number of the service port of which status is recorded here
 */
"port": number;
/**
 * Protocol is the protocol of the service port of which status is recorded here The supported values are: "TCP", "UDP", "SCTP"
 */
"protocol": string;
}

/**
 * PortStatus represents the error condition of a service port
 */
export class PortStatus extends Model<IPortStatus> implements IPortStatus {
  "error"?: string;
"port": number;
"protocol": string;

constructor(data?: ModelData<IPortStatus>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(PortStatus, validate as ValidateFunc<IPortStatus>);

export type {
  IPortStatus as IIoK8sApiCoreV1PortStatus,
  PortStatus as IoK8sApiCoreV1PortStatus
};
