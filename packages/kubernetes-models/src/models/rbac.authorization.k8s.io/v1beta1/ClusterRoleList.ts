import { IIoK8sApiRbacV1beta1ClusterRole } from "./ClusterRole.ts";
import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "../../../apimachinery/apis/meta/v1/ListMeta.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/kubernetes-types/meta";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/rbac.authorization.k8s.io/v1beta1/ClusterRoleList.js";

/**
 * ClusterRoleList is a collection of ClusterRoles. Deprecated in v1.17 in favor of rbac.authorization.k8s.io/v1 ClusterRoles, and will no longer be served in v1.22.
 * @deprecated
 */
export interface IClusterRoleList extends TypeMeta {
  "apiVersion": "rbac.authorization.k8s.io/v1beta1";
/**
 * Items is a list of ClusterRoles
 */
"items": Array<IIoK8sApiRbacV1beta1ClusterRole>;
"kind": "ClusterRoleList";
/**
 * Standard object's metadata.
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * ClusterRoleList is a collection of ClusterRoles. Deprecated in v1.17 in favor of rbac.authorization.k8s.io/v1 ClusterRoles, and will no longer be served in v1.22.
 * @deprecated
 */
export class ClusterRoleList extends Model<IClusterRoleList> implements IClusterRoleList {
  "apiVersion": IClusterRoleList["apiVersion"];
"items": Array<IIoK8sApiRbacV1beta1ClusterRole>;
"kind": IClusterRoleList["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IClusterRoleList["apiVersion"] = "rbac.authorization.k8s.io/v1beta1";
static kind: IClusterRoleList["kind"] = "ClusterRoleList";
static is: TypeMetaGuard<IClusterRoleList> = createTypeMetaGuard<IClusterRoleList>(ClusterRoleList);

constructor(data?: ModelData<IClusterRoleList>) {
  super();

  this.setDefinedProps({
    apiVersion: ClusterRoleList.apiVersion,
    kind: ClusterRoleList.kind,
    ...data
  } as IClusterRoleList);
}
}

setValidateFunc(ClusterRoleList, validate as ValidateFunc<IClusterRoleList>);

export type {
  IClusterRoleList as IIoK8sApiRbacV1beta1ClusterRoleList,
  ClusterRoleList as IoK8sApiRbacV1beta1ClusterRoleList
};
