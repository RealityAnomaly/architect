import { IIoK8sApimachineryPkgApisMetaV1Time } from "../../../apimachinery/apis/meta/v1/Time.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiBatchV1JobCondition.js";

/**
 * JobCondition describes current state of a job.
 */
export interface IJobCondition {
  /**
 * Last time the condition was checked.
 */
"lastProbeTime"?: IIoK8sApimachineryPkgApisMetaV1Time;
/**
 * Last time the condition transit from one status to another.
 */
"lastTransitionTime"?: IIoK8sApimachineryPkgApisMetaV1Time;
/**
 * Human readable message indicating details about last transition.
 */
"message"?: string;
/**
 * (brief) reason for the condition's last transition.
 */
"reason"?: string;
/**
 * Status of the condition, one of True, False, Unknown.
 */
"status": string;
/**
 * Type of job condition, Complete or Failed.
 */
"type": string;
}

/**
 * JobCondition describes current state of a job.
 */
export class JobCondition extends Model<IJobCondition> implements IJobCondition {
  "lastProbeTime"?: IIoK8sApimachineryPkgApisMetaV1Time;
"lastTransitionTime"?: IIoK8sApimachineryPkgApisMetaV1Time;
"message"?: string;
"reason"?: string;
"status": string;
"type": string;

constructor(data?: ModelData<IJobCondition>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(JobCondition, validate as ValidateFunc<IJobCondition>);

export type {
  IJobCondition as IIoK8sApiBatchV1JobCondition,
  JobCondition as IoK8sApiBatchV1JobCondition
};
