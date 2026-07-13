import { IIoK8sApiAppsV1DeploymentCondition } from "./DeploymentCondition.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/apps/v1/DeploymentStatus.js";

/**
 * DeploymentStatus is the most recently observed status of the Deployment.
 */
export interface IDeploymentStatus {
  /**
 * Total number of available non-terminating pods (ready for at least minReadySeconds) targeted by this deployment.
 */
"availableReplicas"?: number;
/**
 * Count of hash collisions for the Deployment. The Deployment controller uses this field as a collision avoidance mechanism when it needs to create the name for the newest ReplicaSet.
 */
"collisionCount"?: number;
/**
 * Represents the latest available observations of a deployment's current state.
 */
"conditions"?: Array<IIoK8sApiAppsV1DeploymentCondition>;
/**
 * The generation observed by the deployment controller.
 */
"observedGeneration"?: number;
/**
 * Total number of non-terminating pods targeted by this Deployment with a Ready Condition.
 */
"readyReplicas"?: number;
/**
 * Total number of non-terminating pods targeted by this deployment (their labels match the selector).
 */
"replicas"?: number;
/**
 * Total number of terminating pods targeted by this deployment. Terminating pods have a non-null .metadata.deletionTimestamp and have not yet reached the Failed or Succeeded .status.phase.
 * 
 * This is a beta field and requires enabling DeploymentReplicaSetTerminatingReplicas feature (enabled by default).
 */
"terminatingReplicas"?: number;
/**
 * Total number of unavailable pods targeted by this deployment. This is the total number of pods that are still required for the deployment to have 100% available capacity. They may either be pods that are running but not yet available or pods that still have not been created.
 */
"unavailableReplicas"?: number;
/**
 * Total number of non-terminating pods targeted by this deployment that have the desired template spec.
 */
"updatedReplicas"?: number;
}

/**
 * DeploymentStatus is the most recently observed status of the Deployment.
 */
export class DeploymentStatus extends Model<IDeploymentStatus> implements IDeploymentStatus {
  "availableReplicas"?: number;
"collisionCount"?: number;
"conditions"?: Array<IIoK8sApiAppsV1DeploymentCondition>;
"observedGeneration"?: number;
"readyReplicas"?: number;
"replicas"?: number;
"terminatingReplicas"?: number;
"unavailableReplicas"?: number;
"updatedReplicas"?: number;

constructor(data?: ModelData<IDeploymentStatus>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(DeploymentStatus, validate as ValidateFunc<IDeploymentStatus>);

export type {
  IDeploymentStatus as IIoK8sApiAppsV1DeploymentStatus,
  DeploymentStatus as IoK8sApiAppsV1DeploymentStatus
};
