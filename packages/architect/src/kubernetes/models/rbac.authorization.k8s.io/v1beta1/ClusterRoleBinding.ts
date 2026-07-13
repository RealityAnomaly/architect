import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "../../../apimachinery/apis/meta/v1/ObjectMeta.ts";
import { IIoK8sApiRbacV1beta1RoleRef } from "./RoleRef.ts";
import { IIoK8sApiRbacV1beta1Subject } from "./Subject.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/architect/kubernetes/types/meta";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiRbacV1beta1ClusterRoleBinding.js";

/**
 * ClusterRoleBinding references a ClusterRole, but not contain it.  It can reference a ClusterRole in the global namespace, and adds who information via Subject. Deprecated in v1.17 in favor of rbac.authorization.k8s.io/v1 ClusterRoleBinding, and will no longer be served in v1.22.
 * @deprecated
 */
export interface IClusterRoleBinding extends TypeMeta {
  "apiVersion": "rbac.authorization.k8s.io/v1beta1";
"kind": "ClusterRoleBinding";
/**
 * Standard object's metadata.
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * RoleRef can only reference a ClusterRole in the global namespace. If the RoleRef cannot be resolved, the Authorizer must return an error.
 */
"roleRef": IIoK8sApiRbacV1beta1RoleRef;
/**
 * Subjects holds references to the objects the role applies to.
 */
"subjects"?: Array<IIoK8sApiRbacV1beta1Subject>;
}

/**
 * ClusterRoleBinding references a ClusterRole, but not contain it.  It can reference a ClusterRole in the global namespace, and adds who information via Subject. Deprecated in v1.17 in favor of rbac.authorization.k8s.io/v1 ClusterRoleBinding, and will no longer be served in v1.22.
 * @deprecated
 */
export class ClusterRoleBinding extends Model<IClusterRoleBinding> implements IClusterRoleBinding {
  "apiVersion": IClusterRoleBinding["apiVersion"];
"kind": IClusterRoleBinding["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
"roleRef": IIoK8sApiRbacV1beta1RoleRef;
"subjects"?: Array<IIoK8sApiRbacV1beta1Subject>;

static apiVersion: IClusterRoleBinding["apiVersion"] = "rbac.authorization.k8s.io/v1beta1";
static kind: IClusterRoleBinding["kind"] = "ClusterRoleBinding";
static is = createTypeMetaGuard<IClusterRoleBinding>(ClusterRoleBinding);

constructor(data?: ModelData<IClusterRoleBinding>) {
  super();

  this.setDefinedProps({
    apiVersion: ClusterRoleBinding.apiVersion,
    kind: ClusterRoleBinding.kind,
    ...data
  } as IClusterRoleBinding);
}
}

setValidateFunc(ClusterRoleBinding, validate as ValidateFunc<IClusterRoleBinding>);

export type {
  IClusterRoleBinding as IIoK8sApiRbacV1beta1ClusterRoleBinding,
  ClusterRoleBinding as IoK8sApiRbacV1beta1ClusterRoleBinding
};
