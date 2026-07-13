import { IIoK8sApimachineryPkgApisMetaV1Time } from "../../apimachinery/apis/meta/v1/Time.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../_schemas/IoK8sApiCoreV1PodCondition.js";

/**
 * PodCondition contains details for the current condition of this pod.
 */
export interface IPodCondition {
  /**
 * Last time we probed the condition.
 */
"lastProbeTime"?: IIoK8sApimachineryPkgApisMetaV1Time;
/**
 * Last time the condition transitioned from one status to another.
 */
"lastTransitionTime"?: IIoK8sApimachineryPkgApisMetaV1Time;
/**
 * Human-readable message indicating details about last transition.
 */
"message"?: string;
/**
 * If set, this represents the .metadata.generation that the pod condition was set based upon.
 */
"observedGeneration"?: number;
/**
 * Unique, one-word, CamelCase reason for the condition's last transition.
 */
"reason"?: string;
/**
 * Status is the status of the condition. Can be True, False, Unknown. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#pod-conditions
 */
"status": string;
/**
 * Type is the type of the condition. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#pod-conditions
 */
"type": string;
}

/**
 * PodCondition contains details for the current condition of this pod.
 */
export class PodCondition extends Model<IPodCondition> implements IPodCondition {
  "lastProbeTime"?: IIoK8sApimachineryPkgApisMetaV1Time;
"lastTransitionTime"?: IIoK8sApimachineryPkgApisMetaV1Time;
"message"?: string;
"observedGeneration"?: number;
"reason"?: string;
"status": string;
"type": string;

constructor(data?: ModelData<IPodCondition>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(PodCondition, validate as ValidateFunc<IPodCondition>);

export type {
  IPodCondition as IIoK8sApiCoreV1PodCondition,
  PodCondition as IoK8sApiCoreV1PodCondition
};
