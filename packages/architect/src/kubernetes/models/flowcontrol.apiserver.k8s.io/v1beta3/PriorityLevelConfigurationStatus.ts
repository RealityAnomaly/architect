import { IIoK8sApiFlowcontrolV1beta3PriorityLevelConfigurationCondition } from "./PriorityLevelConfigurationCondition.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiFlowcontrolV1beta3PriorityLevelConfigurationStatus.js";

/**
 * PriorityLevelConfigurationStatus represents the current state of a "request-priority".
 */
export interface IPriorityLevelConfigurationStatus {
  /**
 * `conditions` is the current state of "request-priority".
 */
"conditions"?: Array<IIoK8sApiFlowcontrolV1beta3PriorityLevelConfigurationCondition>;
}

/**
 * PriorityLevelConfigurationStatus represents the current state of a "request-priority".
 */
export class PriorityLevelConfigurationStatus extends Model<IPriorityLevelConfigurationStatus> implements IPriorityLevelConfigurationStatus {
  "conditions"?: Array<IIoK8sApiFlowcontrolV1beta3PriorityLevelConfigurationCondition>;

constructor(data?: ModelData<IPriorityLevelConfigurationStatus>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(PriorityLevelConfigurationStatus, validate as ValidateFunc<IPriorityLevelConfigurationStatus>);

export type {
  IPriorityLevelConfigurationStatus as IIoK8sApiFlowcontrolV1beta3PriorityLevelConfigurationStatus,
  PriorityLevelConfigurationStatus as IoK8sApiFlowcontrolV1beta3PriorityLevelConfigurationStatus
};
