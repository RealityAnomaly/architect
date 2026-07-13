import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/auditregistration.k8s.io/v1alpha1/ServiceReference.js";

/**
 * ServiceReference holds a reference to Service.legacy.k8s.io
 */
export interface IServiceReference {
  /**
 * `name` is the name of the service. Required
 */
"name": string;
/**
 * `namespace` is the namespace of the service. Required
 */
"namespace": string;
/**
 * `path` is an optional URL path which will be sent in any request to this service.
 */
"path"?: string;
/**
 * If specified, the port on the service that hosting webhook. Default to 443 for backward compatibility. `port` should be a valid port number (1-65535, inclusive).
 */
"port"?: number;
}

/**
 * ServiceReference holds a reference to Service.legacy.k8s.io
 */
export class ServiceReference extends Model<IServiceReference> implements IServiceReference {
  "name": string;
"namespace": string;
"path"?: string;
"port"?: number;

constructor(data?: ModelData<IServiceReference>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(ServiceReference, validate as ValidateFunc<IServiceReference>);

export type {
  IServiceReference as IIoK8sApiAuditregistrationV1alpha1ServiceReference,
  ServiceReference as IoK8sApiAuditregistrationV1alpha1ServiceReference
};
