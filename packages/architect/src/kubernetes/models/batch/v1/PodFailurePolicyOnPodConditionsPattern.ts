import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiBatchV1PodFailurePolicyOnPodConditionsPattern.js";

/**
 * PodFailurePolicyOnPodConditionsPattern describes a pattern for matching an actual pod condition type.
 */
export interface IPodFailurePolicyOnPodConditionsPattern {
  /**
 * Specifies the required Pod condition status. To match a pod condition it is required that the specified status equals the pod condition status. Defaults to True.
 */
"status"?: string;
/**
 * Specifies the required Pod condition type. To match a pod condition it is required that specified type equals the pod condition type.
 */
"type": string;
}

/**
 * PodFailurePolicyOnPodConditionsPattern describes a pattern for matching an actual pod condition type.
 */
export class PodFailurePolicyOnPodConditionsPattern extends Model<IPodFailurePolicyOnPodConditionsPattern> implements IPodFailurePolicyOnPodConditionsPattern {
  "status"?: string;
"type": string;

constructor(data?: ModelData<IPodFailurePolicyOnPodConditionsPattern>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(PodFailurePolicyOnPodConditionsPattern, validate as ValidateFunc<IPodFailurePolicyOnPodConditionsPattern>);

export type {
  IPodFailurePolicyOnPodConditionsPattern as IIoK8sApiBatchV1PodFailurePolicyOnPodConditionsPattern,
  PodFailurePolicyOnPodConditionsPattern as IoK8sApiBatchV1PodFailurePolicyOnPodConditionsPattern
};
