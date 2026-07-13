import { IIoK8sApiRbacV1AggregationRule } from "./AggregationRule.ts";
import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "../../../apimachinery/apis/meta/v1/ObjectMeta.ts";
import { IIoK8sApiRbacV1PolicyRule } from "./PolicyRule.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/kubernetes-types/meta";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/rbac.authorization.k8s.io/v1/ClusterRole.js";

/**
 * ClusterRole is a cluster level, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding or ClusterRoleBinding.
 */
export interface IClusterRole extends TypeMeta {
  /**
 * AggregationRule is an optional field that describes how to build the Rules for this ClusterRole. If AggregationRule is set, then the Rules are controller managed and direct changes to Rules will be stomped by the controller.
 */
"aggregationRule"?: IIoK8sApiRbacV1AggregationRule;
"apiVersion": "rbac.authorization.k8s.io/v1";
"kind": "ClusterRole";
/**
 * Standard object's metadata.
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * Rules holds all the PolicyRules for this ClusterRole
 */
"rules"?: Array<IIoK8sApiRbacV1PolicyRule>;
}

/**
 * ClusterRole is a cluster level, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding or ClusterRoleBinding.
 */
export class ClusterRole extends Model<IClusterRole> implements IClusterRole {
  "aggregationRule"?: IIoK8sApiRbacV1AggregationRule;
"apiVersion": IClusterRole["apiVersion"];
"kind": IClusterRole["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
"rules"?: Array<IIoK8sApiRbacV1PolicyRule>;

static apiVersion: IClusterRole["apiVersion"] = "rbac.authorization.k8s.io/v1";
static kind: IClusterRole["kind"] = "ClusterRole";
static is: TypeMetaGuard<IClusterRole> = createTypeMetaGuard<IClusterRole>(ClusterRole);

constructor(data?: ModelData<IClusterRole>) {
  super();

  this.setDefinedProps({
    apiVersion: ClusterRole.apiVersion,
    kind: ClusterRole.kind,
    ...data
  } as IClusterRole);
}
}

setValidateFunc(ClusterRole, validate as ValidateFunc<IClusterRole>);

export type {
  IClusterRole as IIoK8sApiRbacV1ClusterRole,
  ClusterRole as IoK8sApiRbacV1ClusterRole
};
