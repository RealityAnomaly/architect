import { IIoK8sApiRbacV1RoleBinding } from "./RoleBinding.ts";
import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "../../../apimachinery/apis/meta/v1/ListMeta.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/kubernetes-types/meta";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/rbac.authorization.k8s.io/v1/RoleBindingList.js";

/**
 * RoleBindingList is a collection of RoleBindings
 */
export interface IRoleBindingList extends TypeMeta {
  "apiVersion": "rbac.authorization.k8s.io/v1";
/**
 * Items is a list of RoleBindings
 */
"items": Array<IIoK8sApiRbacV1RoleBinding>;
"kind": "RoleBindingList";
/**
 * Standard object's metadata.
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * RoleBindingList is a collection of RoleBindings
 */
export class RoleBindingList extends Model<IRoleBindingList> implements IRoleBindingList {
  "apiVersion": IRoleBindingList["apiVersion"];
"items": Array<IIoK8sApiRbacV1RoleBinding>;
"kind": IRoleBindingList["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IRoleBindingList["apiVersion"] = "rbac.authorization.k8s.io/v1";
static kind: IRoleBindingList["kind"] = "RoleBindingList";
static is: TypeMetaGuard<IRoleBindingList> = createTypeMetaGuard<IRoleBindingList>(RoleBindingList);

constructor(data?: ModelData<IRoleBindingList>) {
  super();

  this.setDefinedProps({
    apiVersion: RoleBindingList.apiVersion,
    kind: RoleBindingList.kind,
    ...data
  } as IRoleBindingList);
}
}

setValidateFunc(RoleBindingList, validate as ValidateFunc<IRoleBindingList>);

export type {
  IRoleBindingList as IIoK8sApiRbacV1RoleBindingList,
  RoleBindingList as IoK8sApiRbacV1RoleBindingList
};
