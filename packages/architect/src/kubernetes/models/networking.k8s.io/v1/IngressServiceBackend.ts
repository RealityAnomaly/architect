import { IIoK8sApiNetworkingV1ServiceBackendPort } from "./ServiceBackendPort.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiNetworkingV1IngressServiceBackend.js";

/**
 * IngressServiceBackend references a Kubernetes Service as a Backend.
 */
export interface IIngressServiceBackend {
  /**
 * name is the referenced service. The service must exist in the same namespace as the Ingress object.
 */
"name": string;
/**
 * port of the referenced service. A port name or port number is required for a IngressServiceBackend.
 */
"port"?: IIoK8sApiNetworkingV1ServiceBackendPort;
}

/**
 * IngressServiceBackend references a Kubernetes Service as a Backend.
 */
export class IngressServiceBackend extends Model<IIngressServiceBackend> implements IIngressServiceBackend {
  "name": string;
"port"?: IIoK8sApiNetworkingV1ServiceBackendPort;

constructor(data?: ModelData<IIngressServiceBackend>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(IngressServiceBackend, validate as ValidateFunc<IIngressServiceBackend>);

export type {
  IIngressServiceBackend as IIoK8sApiNetworkingV1IngressServiceBackend,
  IngressServiceBackend as IoK8sApiNetworkingV1IngressServiceBackend
};
