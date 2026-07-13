import { IIoK8sApiBatchV1PodFailurePolicyOnExitCodesRequirement } from "./PodFailurePolicyOnExitCodesRequirement.ts";
import { IIoK8sApiBatchV1PodFailurePolicyOnPodConditionsPattern } from "./PodFailurePolicyOnPodConditionsPattern.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiBatchV1PodFailurePolicyRule.js";

/**
 * PodFailurePolicyRule describes how a pod failure is handled when the requirements are met. One of onExitCodes and onPodConditions, but not both, can be used in each rule.
 */
export interface IPodFailurePolicyRule {
  /**
 * Specifies the action taken on a pod failure when the requirements are satisfied. Possible values are:
 * 
 * - FailJob: indicates that the pod's job is marked as Failed and all
 *   running pods are terminated.
 * - FailIndex: indicates that the pod's index is marked as Failed and will
 *   not be restarted.
 * - Ignore: indicates that the counter towards the .backoffLimit is not
 *   incremented and a replacement pod is created.
 * - Count: indicates that the pod is handled in the default way - the
 *   counter towards the .backoffLimit is incremented.
 * Additional values are considered to be added in the future. Clients should react to an unknown action by skipping the rule.
 */
"action": string;
/**
 * Represents the requirement on the container exit codes.
 */
"onExitCodes"?: IIoK8sApiBatchV1PodFailurePolicyOnExitCodesRequirement;
/**
 * Represents the requirement on the pod conditions. The requirement is represented as a list of pod condition patterns. The requirement is satisfied if at least one pattern matches an actual pod condition. At most 20 elements are allowed.
 */
"onPodConditions"?: Array<IIoK8sApiBatchV1PodFailurePolicyOnPodConditionsPattern>;
}

/**
 * PodFailurePolicyRule describes how a pod failure is handled when the requirements are met. One of onExitCodes and onPodConditions, but not both, can be used in each rule.
 */
export class PodFailurePolicyRule extends Model<IPodFailurePolicyRule> implements IPodFailurePolicyRule {
  "action": string;
"onExitCodes"?: IIoK8sApiBatchV1PodFailurePolicyOnExitCodesRequirement;
"onPodConditions"?: Array<IIoK8sApiBatchV1PodFailurePolicyOnPodConditionsPattern>;

constructor(data?: ModelData<IPodFailurePolicyRule>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(PodFailurePolicyRule, validate as ValidateFunc<IPodFailurePolicyRule>);

export type {
  IPodFailurePolicyRule as IIoK8sApiBatchV1PodFailurePolicyRule,
  PodFailurePolicyRule as IoK8sApiBatchV1PodFailurePolicyRule
};
