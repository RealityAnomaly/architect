import { IIoK8sApiRbacV1alpha1ClusterRoleBinding } from "./ClusterRoleBinding.ts";
import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "../../../apimachinery/apis/meta/v1/ListMeta.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/architect/kubernetes/types/meta";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiRbacV1alpha1ClusterRoleBindingList.js";

/**
 * ClusterRoleBindingList is a collection of ClusterRoleBindings. Deprecated in v1.17 in favor of rbac.authorization.k8s.io/v1 ClusterRoleBindings, and will no longer be served in v1.22.
 * @deprecated
 */
export interface IClusterRoleBindingList extends TypeMeta {
  "apiVersion": "rbac.authorization.k8s.io/v1alpha1";
/**
 * Items is a list of ClusterRoleBindings
 */
"items": Array<IIoK8sApiRbacV1alpha1ClusterRoleBinding>;
"kind": "ClusterRoleBindingList";
/**
 * Standard object's metadata.
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * ClusterRoleBindingList is a collection of ClusterRoleBindings. Deprecated in v1.17 in favor of rbac.authorization.k8s.io/v1 ClusterRoleBindings, and will no longer be served in v1.22.
 * @deprecated
 */
export class ClusterRoleBindingList extends Model<IClusterRoleBindingList> implements IClusterRoleBindingList {
  "apiVersion": IClusterRoleBindingList["apiVersion"];
"items": Array<IIoK8sApiRbacV1alpha1ClusterRoleBinding>;
"kind": IClusterRoleBindingList["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IClusterRoleBindingList["apiVersion"] = "rbac.authorization.k8s.io/v1alpha1";
static kind: IClusterRoleBindingList["kind"] = "ClusterRoleBindingList";
static is = createTypeMetaGuard<IClusterRoleBindingList>(ClusterRoleBindingList);

constructor(data?: ModelData<IClusterRoleBindingList>) {
  super();

  this.setDefinedProps({
    apiVersion: ClusterRoleBindingList.apiVersion,
    kind: ClusterRoleBindingList.kind,
    ...data
  } as IClusterRoleBindingList);
}
}

setValidateFunc(ClusterRoleBindingList, validate as ValidateFunc<IClusterRoleBindingList>);

export type {
  IClusterRoleBindingList as IIoK8sApiRbacV1alpha1ClusterRoleBindingList,
  ClusterRoleBindingList as IoK8sApiRbacV1alpha1ClusterRoleBindingList
};
