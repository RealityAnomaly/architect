import { IIoK8sApimachineryPkgApisMetaV1Time } from "../../../apimachinery/apis/meta/v1/Time.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/apps/v1/ReplicaSetCondition.js";

/**
 * ReplicaSetCondition describes the state of a replica set at a certain point.
 */
export interface IReplicaSetCondition {
  /**
 * The last time the condition transitioned from one status to another.
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
 * Type of replica set condition.
 */
"type": string;
}

/**
 * ReplicaSetCondition describes the state of a replica set at a certain point.
 */
export class ReplicaSetCondition extends Model<IReplicaSetCondition> implements IReplicaSetCondition {
  "lastTransitionTime"?: IIoK8sApimachineryPkgApisMetaV1Time;
"message"?: string;
"reason"?: string;
"status": string;
"type": string;

constructor(data?: ModelData<IReplicaSetCondition>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(ReplicaSetCondition, validate as ValidateFunc<IReplicaSetCondition>);

export type {
  IReplicaSetCondition as IIoK8sApiAppsV1ReplicaSetCondition,
  ReplicaSetCondition as IoK8sApiAppsV1ReplicaSetCondition
};
