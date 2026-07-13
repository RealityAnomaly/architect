import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/autoscaling/v2/HPAScalingPolicy.js";

/**
 * HPAScalingPolicy is a single policy which must hold true for a specified past interval.
 */
export interface IHPAScalingPolicy {
  /**
 * periodSeconds specifies the window of time for which the policy should hold true. PeriodSeconds must be greater than zero and less than or equal to 1800 (30 min).
 */
"periodSeconds": number;
/**
 * type is used to specify the scaling policy.
 */
"type": string;
/**
 * value contains the amount of change which is permitted by the policy. It must be greater than zero
 */
"value": number;
}

/**
 * HPAScalingPolicy is a single policy which must hold true for a specified past interval.
 */
export class HPAScalingPolicy extends Model<IHPAScalingPolicy> implements IHPAScalingPolicy {
  "periodSeconds": number;
"type": string;
"value": number;

constructor(data?: ModelData<IHPAScalingPolicy>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(HPAScalingPolicy, validate as ValidateFunc<IHPAScalingPolicy>);

export type {
  IHPAScalingPolicy as IIoK8sApiAutoscalingV2HPAScalingPolicy,
  HPAScalingPolicy as IoK8sApiAutoscalingV2HPAScalingPolicy
};
