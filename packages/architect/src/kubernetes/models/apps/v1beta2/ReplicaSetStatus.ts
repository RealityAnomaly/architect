import { IIoK8sApiAppsV1beta2ReplicaSetCondition } from "./ReplicaSetCondition.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiAppsV1beta2ReplicaSetStatus.js";

/**
 * ReplicaSetStatus represents the current status of a ReplicaSet.
 */
export interface IReplicaSetStatus {
  /**
 * The number of available replicas (ready for at least minReadySeconds) for this replica set.
 */
"availableReplicas"?: number;
/**
 * Represents the latest available observations of a replica set's current state.
 */
"conditions"?: Array<IIoK8sApiAppsV1beta2ReplicaSetCondition>;
/**
 * The number of pods that have labels matching the labels of the pod template of the replicaset.
 */
"fullyLabeledReplicas"?: number;
/**
 * ObservedGeneration reflects the generation of the most recently observed ReplicaSet.
 */
"observedGeneration"?: number;
/**
 * The number of ready replicas for this replica set.
 */
"readyReplicas"?: number;
/**
 * Replicas is the most recently oberved number of replicas. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller/#what-is-a-replicationcontroller
 */
"replicas": number;
}

/**
 * ReplicaSetStatus represents the current status of a ReplicaSet.
 */
export class ReplicaSetStatus extends Model<IReplicaSetStatus> implements IReplicaSetStatus {
  "availableReplicas"?: number;
"conditions"?: Array<IIoK8sApiAppsV1beta2ReplicaSetCondition>;
"fullyLabeledReplicas"?: number;
"observedGeneration"?: number;
"readyReplicas"?: number;
"replicas": number;

constructor(data?: ModelData<IReplicaSetStatus>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(ReplicaSetStatus, validate as ValidateFunc<IReplicaSetStatus>);

export type {
  IReplicaSetStatus as IIoK8sApiAppsV1beta2ReplicaSetStatus,
  ReplicaSetStatus as IoK8sApiAppsV1beta2ReplicaSetStatus
};
