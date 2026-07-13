import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1ServiceReference.js";

/**
 * ServiceReference holds a reference to Service.legacy.k8s.io
 */
export interface IServiceReference {
  /**
 * name is the name of the service. Required
 */
"name": string;
/**
 * namespace is the namespace of the service. Required
 */
"namespace": string;
/**
 * path is an optional URL path at which the webhook will be contacted.
 */
"path"?: string;
/**
 * port is an optional service port at which the webhook will be contacted. `port` should be a valid port number (1-65535, inclusive). Defaults to 443 for backward compatibility.
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
  IServiceReference as IIoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1ServiceReference,
  ServiceReference as IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1ServiceReference
};
