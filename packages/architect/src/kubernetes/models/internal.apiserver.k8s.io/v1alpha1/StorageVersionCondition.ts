import { IIoK8sApimachineryPkgApisMetaV1Time } from "../../../apimachinery/apis/meta/v1/Time.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiApiserverinternalV1alpha1StorageVersionCondition.js";

/**
 * Describes the state of the storageVersion at a certain point.
 */
export interface IStorageVersionCondition {
  /**
 * lastTransitionTime is the last time the condition transitioned from one status to another.
 */
"lastTransitionTime"?: IIoK8sApimachineryPkgApisMetaV1Time;
/**
 * message is a human readable string indicating details about the transition.
 */
"message": string;
/**
 * observedGeneration represents the .metadata.generation that the condition was set based upon, if field is set.
 */
"observedGeneration"?: number;
/**
 * reason for the condition's last transition.
 */
"reason": string;
/**
 * status of the condition, one of True, False, Unknown.
 */
"status": string;
/**
 * type of the condition.
 */
"type": string;
}

/**
 * Describes the state of the storageVersion at a certain point.
 */
export class StorageVersionCondition extends Model<IStorageVersionCondition> implements IStorageVersionCondition {
  "lastTransitionTime"?: IIoK8sApimachineryPkgApisMetaV1Time;
"message": string;
"observedGeneration"?: number;
"reason": string;
"status": string;
"type": string;

constructor(data?: ModelData<IStorageVersionCondition>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(StorageVersionCondition, validate as ValidateFunc<IStorageVersionCondition>);

export type {
  IStorageVersionCondition as IIoK8sApiApiserverinternalV1alpha1StorageVersionCondition,
  StorageVersionCondition as IoK8sApiApiserverinternalV1alpha1StorageVersionCondition
};
