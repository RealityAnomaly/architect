import { IIoK8sApimachineryPkgApisMetaV1Time } from "../../../apimachinery/apis/meta/v1/Time.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiAppsV1beta1DeploymentCondition.js";

/**
 * DeploymentCondition describes the state of a deployment at a certain point.
 */
export interface IDeploymentCondition {
  /**
 * Last time the condition transitioned from one status to another.
 */
"lastTransitionTime"?: IIoK8sApimachineryPkgApisMetaV1Time;
/**
 * The last time this condition was updated.
 */
"lastUpdateTime"?: IIoK8sApimachineryPkgApisMetaV1Time;
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
 * Type of deployment condition.
 */
"type": string;
}

/**
 * DeploymentCondition describes the state of a deployment at a certain point.
 */
export class DeploymentCondition extends Model<IDeploymentCondition> implements IDeploymentCondition {
  "lastTransitionTime"?: IIoK8sApimachineryPkgApisMetaV1Time;
"lastUpdateTime"?: IIoK8sApimachineryPkgApisMetaV1Time;
"message"?: string;
"reason"?: string;
"status": string;
"type": string;

constructor(data?: ModelData<IDeploymentCondition>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(DeploymentCondition, validate as ValidateFunc<IDeploymentCondition>);

export type {
  IDeploymentCondition as IIoK8sApiAppsV1beta1DeploymentCondition,
  DeploymentCondition as IoK8sApiAppsV1beta1DeploymentCondition
};
