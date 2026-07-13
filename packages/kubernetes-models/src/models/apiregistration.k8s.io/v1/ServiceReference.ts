import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/apiregistration.k8s.io/v1/ServiceReference.js";

/**
 * ServiceReference holds a reference to Service.legacy.k8s.io
 */
export interface IServiceReference {
  /**
 * Name is the name of the service
 */
"name"?: string;
/**
 * Namespace is the namespace of the service
 */
"namespace"?: string;
/**
 * If specified, the port on the service that hosting webhook. Default to 443 for backward compatibility. `port` should be a valid port number (1-65535, inclusive).
 */
"port"?: number;
}

/**
 * ServiceReference holds a reference to Service.legacy.k8s.io
 */
export class ServiceReference extends Model<IServiceReference> implements IServiceReference {
  "name"?: string;
"namespace"?: string;
"port"?: number;

constructor(data?: ModelData<IServiceReference>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(ServiceReference, validate as ValidateFunc<IServiceReference>);

export type {
  IServiceReference as IIoK8sKubeAggregatorPkgApisApiregistrationV1ServiceReference,
  ServiceReference as IoK8sKubeAggregatorPkgApisApiregistrationV1ServiceReference
};
