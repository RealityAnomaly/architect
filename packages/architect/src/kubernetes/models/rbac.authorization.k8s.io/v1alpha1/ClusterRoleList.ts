import { IIoK8sApiRbacV1alpha1ClusterRole } from "./ClusterRole.ts";
import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "../../../apimachinery/apis/meta/v1/ListMeta.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/architect/kubernetes/types/meta";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiRbacV1alpha1ClusterRoleList.js";

/**
 * ClusterRoleList is a collection of ClusterRoles. Deprecated in v1.17 in favor of rbac.authorization.k8s.io/v1 ClusterRoles, and will no longer be served in v1.22.
 * @deprecated
 */
export interface IClusterRoleList extends TypeMeta {
  "apiVersion": "rbac.authorization.k8s.io/v1alpha1";
/**
 * Items is a list of ClusterRoles
 */
"items": Array<IIoK8sApiRbacV1alpha1ClusterRole>;
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
"items": Array<IIoK8sApiRbacV1alpha1ClusterRole>;
"kind": IClusterRoleList["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IClusterRoleList["apiVersion"] = "rbac.authorization.k8s.io/v1alpha1";
static kind: IClusterRoleList["kind"] = "ClusterRoleList";
static is = createTypeMetaGuard<IClusterRoleList>(ClusterRoleList);

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
  IClusterRoleList as IIoK8sApiRbacV1alpha1ClusterRoleList,
  ClusterRoleList as IoK8sApiRbacV1alpha1ClusterRoleList
};
