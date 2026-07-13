import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/discovery.k8s.io/v1/ForNode.js";

/**
 * ForNode provides information about which nodes should consume this endpoint.
 */
export interface IForNode {
  /**
 * name represents the name of the node.
 */
"name": string;
}

/**
 * ForNode provides information about which nodes should consume this endpoint.
 */
export class ForNode extends Model<IForNode> implements IForNode {
  "name": string;

constructor(data?: ModelData<IForNode>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(ForNode, validate as ValidateFunc<IForNode>);

export type {
  IForNode as IIoK8sApiDiscoveryV1ForNode,
  ForNode as IoK8sApiDiscoveryV1ForNode
};
