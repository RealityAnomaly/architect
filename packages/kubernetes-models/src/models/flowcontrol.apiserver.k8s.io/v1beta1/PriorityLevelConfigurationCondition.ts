import { IIoK8sApimachineryPkgApisMetaV1Time } from "../../../apimachinery/apis/meta/v1/Time.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/flowcontrol.apiserver.k8s.io/v1beta1/PriorityLevelConfigurationCondition.js";

/**
 * PriorityLevelConfigurationCondition defines the condition of priority level.
 */
export interface IPriorityLevelConfigurationCondition {
  /**
 * `lastTransitionTime` is the last time the condition transitioned from one status to another.
 */
"lastTransitionTime"?: IIoK8sApimachineryPkgApisMetaV1Time;
/**
 * `message` is a human-readable message indicating details about last transition.
 */
"message"?: string;
/**
 * `reason` is a unique, one-word, CamelCase reason for the condition's last transition.
 */
"reason"?: string;
/**
 * `status` is the status of the condition. Can be True, False, Unknown. Required.
 */
"status"?: string;
/**
 * `type` is the type of the condition. Required.
 */
"type"?: string;
}

/**
 * PriorityLevelConfigurationCondition defines the condition of priority level.
 */
export class PriorityLevelConfigurationCondition extends Model<IPriorityLevelConfigurationCondition> implements IPriorityLevelConfigurationCondition {
  "lastTransitionTime"?: IIoK8sApimachineryPkgApisMetaV1Time;
"message"?: string;
"reason"?: string;
"status"?: string;
"type"?: string;

constructor(data?: ModelData<IPriorityLevelConfigurationCondition>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(PriorityLevelConfigurationCondition, validate as ValidateFunc<IPriorityLevelConfigurationCondition>);

export type {
  IPriorityLevelConfigurationCondition as IIoK8sApiFlowcontrolV1beta1PriorityLevelConfigurationCondition,
  PriorityLevelConfigurationCondition as IoK8sApiFlowcontrolV1beta1PriorityLevelConfigurationCondition
};
