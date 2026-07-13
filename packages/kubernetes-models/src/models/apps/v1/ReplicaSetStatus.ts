import { IIoK8sApiAppsV1ReplicaSetCondition } from "./ReplicaSetCondition.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/apps/v1/ReplicaSetStatus.js";

/**
 * ReplicaSetStatus represents the current status of a ReplicaSet.
 */
export interface IReplicaSetStatus {
  /**
 * The number of available non-terminating pods (ready for at least minReadySeconds) for this replica set.
 */
"availableReplicas"?: number;
/**
 * Represents the latest available observations of a replica set's current state.
 */
"conditions"?: Array<IIoK8sApiAppsV1ReplicaSetCondition>;
/**
 * The number of non-terminating pods that have labels matching the labels of the pod template of the replicaset.
 */
"fullyLabeledReplicas"?: number;
/**
 * ObservedGeneration reflects the generation of the most recently observed ReplicaSet.
 */
"observedGeneration"?: number;
/**
 * The number of non-terminating pods targeted by this ReplicaSet with a Ready Condition.
 */
"readyReplicas"?: number;
/**
 * Replicas is the most recently observed number of non-terminating pods. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicaset
 */
"replicas": number;
/**
 * The number of terminating pods for this replica set. Terminating pods have a non-null .metadata.deletionTimestamp and have not yet reached the Failed or Succeeded .status.phase.
 * 
 * This is a beta field and requires enabling DeploymentReplicaSetTerminatingReplicas feature (enabled by default).
 */
"terminatingReplicas"?: number;
}

/**
 * ReplicaSetStatus represents the current status of a ReplicaSet.
 */
export class ReplicaSetStatus extends Model<IReplicaSetStatus> implements IReplicaSetStatus {
  "availableReplicas"?: number;
"conditions"?: Array<IIoK8sApiAppsV1ReplicaSetCondition>;
"fullyLabeledReplicas"?: number;
"observedGeneration"?: number;
"readyReplicas"?: number;
"replicas": number;
"terminatingReplicas"?: number;

constructor(data?: ModelData<IReplicaSetStatus>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(ReplicaSetStatus, validate as ValidateFunc<IReplicaSetStatus>);

export type {
  IReplicaSetStatus as IIoK8sApiAppsV1ReplicaSetStatus,
  ReplicaSetStatus as IoK8sApiAppsV1ReplicaSetStatus
};
