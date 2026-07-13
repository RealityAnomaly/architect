import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/networking.k8s.io/v1/ServiceBackendPort.js";

/**
 * ServiceBackendPort is the service port being referenced.
 */
export interface IServiceBackendPort {
  /**
 * name is the name of the port on the Service. This is a mutually exclusive setting with "Number".
 */
"name"?: string;
/**
 * number is the numerical port number (e.g. 80) on the Service. This is a mutually exclusive setting with "Name".
 */
"number"?: number;
}

/**
 * ServiceBackendPort is the service port being referenced.
 */
export class ServiceBackendPort extends Model<IServiceBackendPort> implements IServiceBackendPort {
  "name"?: string;
"number"?: number;

constructor(data?: ModelData<IServiceBackendPort>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(ServiceBackendPort, validate as ValidateFunc<IServiceBackendPort>);

export type {
  IServiceBackendPort as IIoK8sApiNetworkingV1ServiceBackendPort,
  ServiceBackendPort as IoK8sApiNetworkingV1ServiceBackendPort
};
