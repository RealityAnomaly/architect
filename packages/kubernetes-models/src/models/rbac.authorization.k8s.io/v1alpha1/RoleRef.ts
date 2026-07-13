import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/rbac.authorization.k8s.io/v1alpha1/RoleRef.js";

/**
 * RoleRef contains information that points to the role being used
 */
export interface IRoleRef {
  /**
 * APIGroup is the group for the resource being referenced
 */
"apiGroup": string;
/**
 * Kind is the type of resource being referenced
 */
"kind": string;
/**
 * Name is the name of resource being referenced
 */
"name": string;
}

/**
 * RoleRef contains information that points to the role being used
 */
export class RoleRef extends Model<IRoleRef> implements IRoleRef {
  "apiGroup": string;
"kind": IRoleRef["kind"];
"name": string;

constructor(data?: ModelData<IRoleRef>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(RoleRef, validate as ValidateFunc<IRoleRef>);

export type {
  IRoleRef as IIoK8sApiRbacV1alpha1RoleRef,
  RoleRef as IoK8sApiRbacV1alpha1RoleRef
};
