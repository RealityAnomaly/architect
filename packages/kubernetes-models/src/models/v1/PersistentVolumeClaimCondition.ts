import { IIoK8sApimachineryPkgApisMetaV1Time } from "../../apimachinery/apis/meta/v1/Time.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../_schemas/v1/PersistentVolumeClaimCondition.js";

/**
 * PersistentVolumeClaimCondition contains details about state of pvc
 */
export interface IPersistentVolumeClaimCondition {
  /**
 * lastProbeTime is the time we probed the condition.
 */
"lastProbeTime"?: IIoK8sApimachineryPkgApisMetaV1Time;
/**
 * lastTransitionTime is the time the condition transitioned from one status to another.
 */
"lastTransitionTime"?: IIoK8sApimachineryPkgApisMetaV1Time;
/**
 * message is the human-readable message indicating details about last transition.
 */
"message"?: string;
/**
 * reason is a unique, this should be a short, machine understandable string that gives the reason for condition's last transition. If it reports "Resizing" that means the underlying persistent volume is being resized.
 */
"reason"?: string;
/**
 * Status is the status of the condition. Can be True, False, Unknown. More info: https://kubernetes.io/docs/reference/kubernetes-api/config-and-storage-resources/persistent-volume-claim-v1/#:~:text=state%20of%20pvc-,conditions.status,-(string)%2C%20required
 */
"status": string;
/**
 * Type is the type of the condition. More info: https://kubernetes.io/docs/reference/kubernetes-api/config-and-storage-resources/persistent-volume-claim-v1/#:~:text=set%20to%20%27ResizeStarted%27.-,PersistentVolumeClaimCondition,-contains%20details%20about
 */
"type": string;
}

/**
 * PersistentVolumeClaimCondition contains details about state of pvc
 */
export class PersistentVolumeClaimCondition extends Model<IPersistentVolumeClaimCondition> implements IPersistentVolumeClaimCondition {
  "lastProbeTime"?: IIoK8sApimachineryPkgApisMetaV1Time;
"lastTransitionTime"?: IIoK8sApimachineryPkgApisMetaV1Time;
"message"?: string;
"reason"?: string;
"status": string;
"type": string;

constructor(data?: ModelData<IPersistentVolumeClaimCondition>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(PersistentVolumeClaimCondition, validate as ValidateFunc<IPersistentVolumeClaimCondition>);

export type {
  IPersistentVolumeClaimCondition as IIoK8sApiCoreV1PersistentVolumeClaimCondition,
  PersistentVolumeClaimCondition as IoK8sApiCoreV1PersistentVolumeClaimCondition
};
