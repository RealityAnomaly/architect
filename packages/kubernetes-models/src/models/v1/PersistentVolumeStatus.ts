import { IIoK8sApimachineryPkgApisMetaV1Time } from "../../apimachinery/apis/meta/v1/Time.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../_schemas/v1/PersistentVolumeStatus.js";

/**
 * PersistentVolumeStatus is the current status of a persistent volume.
 */
export interface IPersistentVolumeStatus {
  /**
 * lastPhaseTransitionTime is the time the phase transitioned from one to another and automatically resets to current time everytime a volume phase transitions.
 */
"lastPhaseTransitionTime"?: IIoK8sApimachineryPkgApisMetaV1Time;
/**
 * message is a human-readable message indicating details about why the volume is in this state.
 */
"message"?: string;
/**
 * phase indicates if a volume is available, bound to a claim, or released by a claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#phase
 */
"phase"?: string;
/**
 * reason is a brief CamelCase string that describes any failure and is meant for machine parsing and tidy display in the CLI.
 */
"reason"?: string;
}

/**
 * PersistentVolumeStatus is the current status of a persistent volume.
 */
export class PersistentVolumeStatus extends Model<IPersistentVolumeStatus> implements IPersistentVolumeStatus {
  "lastPhaseTransitionTime"?: IIoK8sApimachineryPkgApisMetaV1Time;
"message"?: string;
"phase"?: string;
"reason"?: string;

constructor(data?: ModelData<IPersistentVolumeStatus>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(PersistentVolumeStatus, validate as ValidateFunc<IPersistentVolumeStatus>);

export type {
  IPersistentVolumeStatus as IIoK8sApiCoreV1PersistentVolumeStatus,
  PersistentVolumeStatus as IoK8sApiCoreV1PersistentVolumeStatus
};
