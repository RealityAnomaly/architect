import { IIoK8sApimachineryPkgApisMetaV1Time } from "../../../apimachinery/apis/meta/v1/Time.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiAppsV1DaemonSetCondition.js";

/**
 * DaemonSetCondition describes the state of a DaemonSet at a certain point.
 */
export interface IDaemonSetCondition {
  /**
 * Last time the condition transitioned from one status to another.
 */
"lastTransitionTime"?: IIoK8sApimachineryPkgApisMetaV1Time;
/**
 * A human readable message indicating details about the transition.
 */
"message"?: string;
/**
 * The reason for the condition's last transition.
 */
"reason"?: string;
/**
 * Status of the condition, one of True, False, Unknown.
 */
"status": string;
/**
 * Type of DaemonSet condition.
 */
"type": string;
}

/**
 * DaemonSetCondition describes the state of a DaemonSet at a certain point.
 */
export class DaemonSetCondition extends Model<IDaemonSetCondition> implements IDaemonSetCondition {
  "lastTransitionTime"?: IIoK8sApimachineryPkgApisMetaV1Time;
"message"?: string;
"reason"?: string;
"status": string;
"type": string;

constructor(data?: ModelData<IDaemonSetCondition>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(DaemonSetCondition, validate as ValidateFunc<IDaemonSetCondition>);

export type {
  IDaemonSetCondition as IIoK8sApiAppsV1DaemonSetCondition,
  DaemonSetCondition as IoK8sApiAppsV1DaemonSetCondition
};
