import { IIoK8sApiRbacV1alpha1Role } from "./Role.ts";
import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "../../../apimachinery/apis/meta/v1/ListMeta.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/architect/kubernetes/types/meta";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiRbacV1alpha1RoleList.js";

/**
 * RoleList is a collection of Roles. Deprecated in v1.17 in favor of rbac.authorization.k8s.io/v1 RoleList, and will no longer be served in v1.22.
 * @deprecated
 */
export interface IRoleList extends TypeMeta {
  "apiVersion": "rbac.authorization.k8s.io/v1alpha1";
/**
 * Items is a list of Roles
 */
"items": Array<IIoK8sApiRbacV1alpha1Role>;
"kind": "RoleList";
/**
 * Standard object's metadata.
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * RoleList is a collection of Roles. Deprecated in v1.17 in favor of rbac.authorization.k8s.io/v1 RoleList, and will no longer be served in v1.22.
 * @deprecated
 */
export class RoleList extends Model<IRoleList> implements IRoleList {
  "apiVersion": IRoleList["apiVersion"];
"items": Array<IIoK8sApiRbacV1alpha1Role>;
"kind": IRoleList["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IRoleList["apiVersion"] = "rbac.authorization.k8s.io/v1alpha1";
static kind: IRoleList["kind"] = "RoleList";
static is = createTypeMetaGuard<IRoleList>(RoleList);

constructor(data?: ModelData<IRoleList>) {
  super();

  this.setDefinedProps({
    apiVersion: RoleList.apiVersion,
    kind: RoleList.kind,
    ...data
  } as IRoleList);
}
}

setValidateFunc(RoleList, validate as ValidateFunc<IRoleList>);

export type {
  IRoleList as IIoK8sApiRbacV1alpha1RoleList,
  RoleList as IoK8sApiRbacV1alpha1RoleList
};
