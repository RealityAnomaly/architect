import { IIoK8sApiCoreV1TypedLocalObjectReference } from "../../v1/TypedLocalObjectReference.ts";
import { IIoK8sApimachineryPkgUtilIntstrIntOrString } from "../../../apimachinery/util/intstr/IntOrString.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiNetworkingV1beta1IngressBackend.js";

/**
 * IngressBackend describes all endpoints for a given service and port.
 */
export interface IIngressBackend {
  /**
 * Resource is an ObjectRef to another Kubernetes resource in the namespace of the Ingress object. If resource is specified, serviceName and servicePort must not be specified.
 */
"resource"?: IIoK8sApiCoreV1TypedLocalObjectReference;
/**
 * Specifies the name of the referenced service.
 */
"serviceName"?: string;
/**
 * Specifies the port of the referenced service.
 */
"servicePort"?: IIoK8sApimachineryPkgUtilIntstrIntOrString;
}

/**
 * IngressBackend describes all endpoints for a given service and port.
 */
export class IngressBackend extends Model<IIngressBackend> implements IIngressBackend {
  "resource"?: IIoK8sApiCoreV1TypedLocalObjectReference;
"serviceName"?: string;
"servicePort"?: IIoK8sApimachineryPkgUtilIntstrIntOrString;

constructor(data?: ModelData<IIngressBackend>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(IngressBackend, validate as ValidateFunc<IIngressBackend>);

export type {
  IIngressBackend as IIoK8sApiNetworkingV1beta1IngressBackend,
  IngressBackend as IoK8sApiNetworkingV1beta1IngressBackend
};
