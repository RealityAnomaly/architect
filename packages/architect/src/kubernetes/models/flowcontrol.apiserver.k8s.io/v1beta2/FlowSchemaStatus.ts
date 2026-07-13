import { IIoK8sApiFlowcontrolV1beta2FlowSchemaCondition } from "./FlowSchemaCondition.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiFlowcontrolV1beta2FlowSchemaStatus.js";

/**
 * FlowSchemaStatus represents the current state of a FlowSchema.
 */
export interface IFlowSchemaStatus {
  /**
 * `conditions` is a list of the current states of FlowSchema.
 */
"conditions"?: Array<IIoK8sApiFlowcontrolV1beta2FlowSchemaCondition>;
}

/**
 * FlowSchemaStatus represents the current state of a FlowSchema.
 */
export class FlowSchemaStatus extends Model<IFlowSchemaStatus> implements IFlowSchemaStatus {
  "conditions"?: Array<IIoK8sApiFlowcontrolV1beta2FlowSchemaCondition>;

constructor(data?: ModelData<IFlowSchemaStatus>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(FlowSchemaStatus, validate as ValidateFunc<IFlowSchemaStatus>);

export type {
  IFlowSchemaStatus as IIoK8sApiFlowcontrolV1beta2FlowSchemaStatus,
  FlowSchemaStatus as IoK8sApiFlowcontrolV1beta2FlowSchemaStatus
};
