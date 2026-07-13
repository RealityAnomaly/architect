import { IIoK8sApiFlowcontrolV1beta2PriorityLevelConfigurationCondition } from "./PriorityLevelConfigurationCondition.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/flowcontrol.apiserver.k8s.io/v1beta2/PriorityLevelConfigurationStatus.js";

/**
 * PriorityLevelConfigurationStatus represents the current state of a "request-priority".
 */
export interface IPriorityLevelConfigurationStatus {
  /**
 * `conditions` is the current state of "request-priority".
 */
"conditions"?: Array<IIoK8sApiFlowcontrolV1beta2PriorityLevelConfigurationCondition>;
}

/**
 * PriorityLevelConfigurationStatus represents the current state of a "request-priority".
 */
export class PriorityLevelConfigurationStatus extends Model<IPriorityLevelConfigurationStatus> implements IPriorityLevelConfigurationStatus {
  "conditions"?: Array<IIoK8sApiFlowcontrolV1beta2PriorityLevelConfigurationCondition>;

constructor(data?: ModelData<IPriorityLevelConfigurationStatus>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(PriorityLevelConfigurationStatus, validate as ValidateFunc<IPriorityLevelConfigurationStatus>);

export type {
  IPriorityLevelConfigurationStatus as IIoK8sApiFlowcontrolV1beta2PriorityLevelConfigurationStatus,
  PriorityLevelConfigurationStatus as IoK8sApiFlowcontrolV1beta2PriorityLevelConfigurationStatus
};
