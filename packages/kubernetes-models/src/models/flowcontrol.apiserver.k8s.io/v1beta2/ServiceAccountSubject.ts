import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/flowcontrol.apiserver.k8s.io/v1beta2/ServiceAccountSubject.js";

/**
 * ServiceAccountSubject holds detailed information for service-account-kind subject.
 */
export interface IServiceAccountSubject {
  /**
 * `name` is the name of matching ServiceAccount objects, or "\*" to match regardless of name. Required.
 */
"name": string;
/**
 * `namespace` is the namespace of matching ServiceAccount objects. Required.
 */
"namespace": string;
}

/**
 * ServiceAccountSubject holds detailed information for service-account-kind subject.
 */
export class ServiceAccountSubject extends Model<IServiceAccountSubject> implements IServiceAccountSubject {
  "name": string;
"namespace": string;

constructor(data?: ModelData<IServiceAccountSubject>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(ServiceAccountSubject, validate as ValidateFunc<IServiceAccountSubject>);

export type {
  IServiceAccountSubject as IIoK8sApiFlowcontrolV1beta2ServiceAccountSubject,
  ServiceAccountSubject as IoK8sApiFlowcontrolV1beta2ServiceAccountSubject
};
