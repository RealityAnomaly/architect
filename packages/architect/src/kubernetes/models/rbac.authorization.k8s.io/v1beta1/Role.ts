import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "../../../apimachinery/apis/meta/v1/ObjectMeta.ts";
import { IIoK8sApiRbacV1beta1PolicyRule } from "./PolicyRule.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/architect/kubernetes/types/meta";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiRbacV1beta1Role.js";

/**
 * Role is a namespaced, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding. Deprecated in v1.17 in favor of rbac.authorization.k8s.io/v1 Role, and will no longer be served in v1.22.
 * @deprecated
 */
export interface IRole extends TypeMeta {
  "apiVersion": "rbac.authorization.k8s.io/v1beta1";
"kind": "Role";
/**
 * Standard object's metadata.
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * Rules holds all the PolicyRules for this Role
 */
"rules"?: Array<IIoK8sApiRbacV1beta1PolicyRule>;
}

/**
 * Role is a namespaced, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding. Deprecated in v1.17 in favor of rbac.authorization.k8s.io/v1 Role, and will no longer be served in v1.22.
 * @deprecated
 */
export class Role extends Model<IRole> implements IRole {
  "apiVersion": IRole["apiVersion"];
"kind": IRole["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
"rules"?: Array<IIoK8sApiRbacV1beta1PolicyRule>;

static apiVersion: IRole["apiVersion"] = "rbac.authorization.k8s.io/v1beta1";
static kind: IRole["kind"] = "Role";
static is = createTypeMetaGuard<IRole>(Role);

constructor(data?: ModelData<IRole>) {
  super();

  this.setDefinedProps({
    apiVersion: Role.apiVersion,
    kind: Role.kind,
    ...data
  } as IRole);
}
}

setValidateFunc(Role, validate as ValidateFunc<IRole>);

export type {
  IRole as IIoK8sApiRbacV1beta1Role,
  Role as IoK8sApiRbacV1beta1Role
};
