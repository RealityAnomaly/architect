import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "../../../apimachinery/apis/meta/v1/ObjectMeta.ts";
import { IIoK8sApiRbacV1RoleRef } from "./RoleRef.ts";
import { IIoK8sApiRbacV1Subject } from "./Subject.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/architect/kubernetes/types/meta";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiRbacV1RoleBinding.js";

/**
 * RoleBinding references a role, but does not contain it.  It can reference a Role in the same namespace or a ClusterRole in the global namespace. It adds who information via Subjects and namespace information by which namespace it exists in.  RoleBindings in a given namespace only have effect in that namespace.
 */
export interface IRoleBinding extends TypeMeta {
  "apiVersion": "rbac.authorization.k8s.io/v1";
"kind": "RoleBinding";
/**
 * Standard object's metadata.
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * RoleRef can reference a Role in the current namespace or a ClusterRole in the global namespace. If the RoleRef cannot be resolved, the Authorizer must return an error. This field is immutable.
 */
"roleRef": IIoK8sApiRbacV1RoleRef;
/**
 * Subjects holds references to the objects the role applies to.
 */
"subjects"?: Array<IIoK8sApiRbacV1Subject>;
}

/**
 * RoleBinding references a role, but does not contain it.  It can reference a Role in the same namespace or a ClusterRole in the global namespace. It adds who information via Subjects and namespace information by which namespace it exists in.  RoleBindings in a given namespace only have effect in that namespace.
 */
export class RoleBinding extends Model<IRoleBinding> implements IRoleBinding {
  "apiVersion": IRoleBinding["apiVersion"];
"kind": IRoleBinding["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
"roleRef": IIoK8sApiRbacV1RoleRef;
"subjects"?: Array<IIoK8sApiRbacV1Subject>;

static apiVersion: IRoleBinding["apiVersion"] = "rbac.authorization.k8s.io/v1";
static kind: IRoleBinding["kind"] = "RoleBinding";
static is = createTypeMetaGuard<IRoleBinding>(RoleBinding);

constructor(data?: ModelData<IRoleBinding>) {
  super();

  this.setDefinedProps({
    apiVersion: RoleBinding.apiVersion,
    kind: RoleBinding.kind,
    ...data
  } as IRoleBinding);
}
}

setValidateFunc(RoleBinding, validate as ValidateFunc<IRoleBinding>);

export type {
  IRoleBinding as IIoK8sApiRbacV1RoleBinding,
  RoleBinding as IoK8sApiRbacV1RoleBinding
};
