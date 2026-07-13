import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiRbacV1beta1Subject.js";

/**
 * Subject contains a reference to the object or user identities a role binding applies to.  This can either hold a direct API object reference, or a value for non-objects such as user and group names.
 */
export interface ISubject {
  /**
 * APIGroup holds the API group of the referenced subject. Defaults to "" for ServiceAccount subjects. Defaults to "rbac.authorization.k8s.io" for User and Group subjects.
 */
"apiGroup"?: string;
/**
 * Kind of object being referenced. Values defined by this API group are "User", "Group", and "ServiceAccount". If the Authorizer does not recognized the kind value, the Authorizer should report an error.
 */
"kind": string;
/**
 * Name of the object being referenced.
 */
"name": string;
/**
 * Namespace of the referenced object.  If the object kind is non-namespace, such as "User" or "Group", and this value is not empty the Authorizer should report an error.
 */
"namespace"?: string;
}

/**
 * Subject contains a reference to the object or user identities a role binding applies to.  This can either hold a direct API object reference, or a value for non-objects such as user and group names.
 */
export class Subject extends Model<ISubject> implements ISubject {
  "apiGroup"?: string;
"kind": ISubject["kind"];
"name": string;
"namespace"?: string;

constructor(data?: ModelData<ISubject>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(Subject, validate as ValidateFunc<ISubject>);

export type {
  ISubject as IIoK8sApiRbacV1beta1Subject,
  Subject as IoK8sApiRbacV1beta1Subject
};
