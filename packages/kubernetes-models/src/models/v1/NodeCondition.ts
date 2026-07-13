import { IIoK8sApimachineryPkgApisMetaV1Time } from "../../apimachinery/apis/meta/v1/Time.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../_schemas/v1/NodeCondition.js";

/**
 * NodeCondition contains condition information for a node.
 */
export interface INodeCondition {
  /**
 * Last time we got an update on a given condition.
 */
"lastHeartbeatTime"?: IIoK8sApimachineryPkgApisMetaV1Time;
/**
 * Last time the condition transit from one status to another.
 */
"lastTransitionTime"?: IIoK8sApimachineryPkgApisMetaV1Time;
/**
 * Human readable message indicating details about last transition.
 */
"message"?: string;
/**
 * (brief) reason for the condition's last transition.
 */
"reason"?: string;
/**
 * Status of the condition, one of True, False, Unknown.
 */
"status": string;
/**
 * Type of node condition.
 */
"type": string;
}

/**
 * NodeCondition contains condition information for a node.
 */
export class NodeCondition extends Model<INodeCondition> implements INodeCondition {
  "lastHeartbeatTime"?: IIoK8sApimachineryPkgApisMetaV1Time;
"lastTransitionTime"?: IIoK8sApimachineryPkgApisMetaV1Time;
"message"?: string;
"reason"?: string;
"status": string;
"type": string;

constructor(data?: ModelData<INodeCondition>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(NodeCondition, validate as ValidateFunc<INodeCondition>);

export type {
  INodeCondition as IIoK8sApiCoreV1NodeCondition,
  NodeCondition as IoK8sApiCoreV1NodeCondition
};
