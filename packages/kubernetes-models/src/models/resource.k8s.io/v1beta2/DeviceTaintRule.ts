import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "../../../apimachinery/apis/meta/v1/ObjectMeta.ts";
import { IIoK8sApiResourceV1beta2DeviceTaintRuleSpec } from "./DeviceTaintRuleSpec.ts";
import { IIoK8sApiResourceV1beta2DeviceTaintRuleStatus } from "./DeviceTaintRuleStatus.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/kubernetes-types/meta";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/resource.k8s.io/v1beta2/DeviceTaintRule.js";

/**
 * DeviceTaintRule adds one taint to all devices which match the selector. This has the same effect as if the taint was specified directly in the ResourceSlice by the DRA driver.
 */
export interface IDeviceTaintRule extends TypeMeta {
  "apiVersion": "resource.k8s.io/v1beta2";
"kind": "DeviceTaintRule";
/**
 * Standard object metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * Spec specifies the selector and one taint.
 * 
 * Changing the spec automatically increments the metadata.generation number.
 */
"spec": IIoK8sApiResourceV1beta2DeviceTaintRuleSpec;
/**
 * Status provides information about what was requested in the spec.
 */
"status"?: IIoK8sApiResourceV1beta2DeviceTaintRuleStatus;
}

/**
 * DeviceTaintRule adds one taint to all devices which match the selector. This has the same effect as if the taint was specified directly in the ResourceSlice by the DRA driver.
 */
export class DeviceTaintRule extends Model<IDeviceTaintRule> implements IDeviceTaintRule {
  "apiVersion": IDeviceTaintRule["apiVersion"];
"kind": IDeviceTaintRule["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
"spec": IIoK8sApiResourceV1beta2DeviceTaintRuleSpec;
"status"?: IIoK8sApiResourceV1beta2DeviceTaintRuleStatus;

static apiVersion: IDeviceTaintRule["apiVersion"] = "resource.k8s.io/v1beta2";
static kind: IDeviceTaintRule["kind"] = "DeviceTaintRule";
static is: TypeMetaGuard<IDeviceTaintRule> = createTypeMetaGuard<IDeviceTaintRule>(DeviceTaintRule);

constructor(data?: ModelData<IDeviceTaintRule>) {
  super();

  this.setDefinedProps({
    apiVersion: DeviceTaintRule.apiVersion,
    kind: DeviceTaintRule.kind,
    ...data
  } as IDeviceTaintRule);
}
}

setValidateFunc(DeviceTaintRule, validate as ValidateFunc<IDeviceTaintRule>);

export type {
  IDeviceTaintRule as IIoK8sApiResourceV1beta2DeviceTaintRule,
  DeviceTaintRule as IoK8sApiResourceV1beta2DeviceTaintRule
};
