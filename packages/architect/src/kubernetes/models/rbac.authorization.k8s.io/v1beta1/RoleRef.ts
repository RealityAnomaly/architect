import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiRbacV1beta1RoleRef.js";

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
  IRoleRef as IIoK8sApiRbacV1beta1RoleRef,
  RoleRef as IoK8sApiRbacV1beta1RoleRef
};
