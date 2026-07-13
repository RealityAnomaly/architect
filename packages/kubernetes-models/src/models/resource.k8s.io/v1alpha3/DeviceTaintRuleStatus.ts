import { IIoK8sApimachineryPkgApisMetaV1Condition } from "../../../apimachinery/apis/meta/v1/Condition.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/resource.k8s.io/v1alpha3/DeviceTaintRuleStatus.js";

/**
 * DeviceTaintRuleStatus provides information about an on-going pod eviction.
 */
export interface IDeviceTaintRuleStatus {
  /**
 * Conditions provide information about the state of the DeviceTaintRule and the cluster at some point in time, in a machine-readable and human-readable format.
 * 
 * The following condition is currently defined as part of this API, more may get added: - Type: EvictionInProgress - Status: True if there are currently pods which need to be evicted, False otherwise
 *   (includes the effects which don't cause eviction).
 * - Reason: not specified, may change - Message: includes information about number of pending pods and already evicted pods
 *   in a human-readable format, updated periodically, may change
 * 
 * For `effect: None`, the condition above gets set once for each change to the spec, with the message containing information about what would happen if the effect was `NoExecute`. This feedback can be used to decide whether changing the effect to `NoExecute` will work as intended. It only gets set once to avoid having to constantly update the status.
 * 
 * Must have 8 or fewer entries.
 */
"conditions"?: Array<IIoK8sApimachineryPkgApisMetaV1Condition>;
}

/**
 * DeviceTaintRuleStatus provides information about an on-going pod eviction.
 */
export class DeviceTaintRuleStatus extends Model<IDeviceTaintRuleStatus> implements IDeviceTaintRuleStatus {
  "conditions"?: Array<IIoK8sApimachineryPkgApisMetaV1Condition>;

constructor(data?: ModelData<IDeviceTaintRuleStatus>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(DeviceTaintRuleStatus, validate as ValidateFunc<IDeviceTaintRuleStatus>);

export type {
  IDeviceTaintRuleStatus as IIoK8sApiResourceV1alpha3DeviceTaintRuleStatus,
  DeviceTaintRuleStatus as IoK8sApiResourceV1alpha3DeviceTaintRuleStatus
};
