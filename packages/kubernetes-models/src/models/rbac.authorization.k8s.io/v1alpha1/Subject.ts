import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/rbac.authorization.k8s.io/v1alpha1/Subject.js";

/**
 * Subject contains a reference to the object or user identities a role binding applies to.  This can either hold a direct API object reference, or a value for non-objects such as user and group names.
 */
export interface ISubject {
  /**
 * APIVersion holds the API group and version of the referenced subject. Defaults to "v1" for ServiceAccount subjects. Defaults to "rbac.authorization.k8s.io/v1alpha1" for User and Group subjects.
 */
"apiVersion"?: string;
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
  "apiVersion"?: ISubject["apiVersion"];
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
  ISubject as IIoK8sApiRbacV1alpha1Subject,
  Subject as IoK8sApiRbacV1alpha1Subject
};
