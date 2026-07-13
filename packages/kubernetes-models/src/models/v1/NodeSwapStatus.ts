import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../_schemas/v1/NodeSwapStatus.js";

/**
 * NodeSwapStatus represents swap memory information.
 */
export interface INodeSwapStatus {
  /**
 * Total amount of swap memory in bytes.
 */
"capacity"?: number;
}

/**
 * NodeSwapStatus represents swap memory information.
 */
export class NodeSwapStatus extends Model<INodeSwapStatus> implements INodeSwapStatus {
  "capacity"?: number;

constructor(data?: ModelData<INodeSwapStatus>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(NodeSwapStatus, validate as ValidateFunc<INodeSwapStatus>);

export type {
  INodeSwapStatus as IIoK8sApiCoreV1NodeSwapStatus,
  NodeSwapStatus as IoK8sApiCoreV1NodeSwapStatus
};
