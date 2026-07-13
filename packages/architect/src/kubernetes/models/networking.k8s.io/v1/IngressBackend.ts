import { IIoK8sApiCoreV1TypedLocalObjectReference } from "../../v1/TypedLocalObjectReference.ts";
import { IIoK8sApiNetworkingV1IngressServiceBackend } from "./IngressServiceBackend.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiNetworkingV1IngressBackend.js";

/**
 * IngressBackend describes all endpoints for a given service and port.
 */
export interface IIngressBackend {
  /**
 * resource is an ObjectRef to another Kubernetes resource in the namespace of the Ingress object. If resource is specified, a service.Name and service.Port must not be specified. This is a mutually exclusive setting with "Service".
 */
"resource"?: IIoK8sApiCoreV1TypedLocalObjectReference;
/**
 * service references a service as a backend. This is a mutually exclusive setting with "Resource".
 */
"service"?: IIoK8sApiNetworkingV1IngressServiceBackend;
}

/**
 * IngressBackend describes all endpoints for a given service and port.
 */
export class IngressBackend extends Model<IIngressBackend> implements IIngressBackend {
  "resource"?: IIoK8sApiCoreV1TypedLocalObjectReference;
"service"?: IIoK8sApiNetworkingV1IngressServiceBackend;

constructor(data?: ModelData<IIngressBackend>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(IngressBackend, validate as ValidateFunc<IIngressBackend>);

export type {
  IIngressBackend as IIoK8sApiNetworkingV1IngressBackend,
  IngressBackend as IoK8sApiNetworkingV1IngressBackend
};
