import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../_schemas/IoK8sApiCoreV1NodeAddress.js";

/**
 * NodeAddress contains information for the node's address.
 */
export interface INodeAddress {
  /**
 * The node address.
 */
"address": string;
/**
 * Node address type, one of Hostname, ExternalIP or InternalIP.
 */
"type": string;
}

/**
 * NodeAddress contains information for the node's address.
 */
export class NodeAddress extends Model<INodeAddress> implements INodeAddress {
  "address": string;
"type": string;

constructor(data?: ModelData<INodeAddress>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(NodeAddress, validate as ValidateFunc<INodeAddress>);

export type {
  INodeAddress as IIoK8sApiCoreV1NodeAddress,
  NodeAddress as IoK8sApiCoreV1NodeAddress
};
