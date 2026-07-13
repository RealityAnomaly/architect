import { IIoK8sApimachineryPkgApisMetaV1Time } from "../../apimachinery/apis/meta/v1/Time.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../_schemas/v1/ReplicationControllerCondition.js";

/**
 * ReplicationControllerCondition describes the state of a replication controller at a certain point.
 */
export interface IReplicationControllerCondition {
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
 * Type of replication controller condition.
 */
"type": string;
}

/**
 * ReplicationControllerCondition describes the state of a replication controller at a certain point.
 */
export class ReplicationControllerCondition extends Model<IReplicationControllerCondition> implements IReplicationControllerCondition {
  "lastTransitionTime"?: IIoK8sApimachineryPkgApisMetaV1Time;
"message"?: string;
"reason"?: string;
"status": string;
"type": string;

constructor(data?: ModelData<IReplicationControllerCondition>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(ReplicationControllerCondition, validate as ValidateFunc<IReplicationControllerCondition>);

export type {
  IReplicationControllerCondition as IIoK8sApiCoreV1ReplicationControllerCondition,
  ReplicationControllerCondition as IoK8sApiCoreV1ReplicationControllerCondition
};
