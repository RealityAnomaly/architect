import { IIoK8sApiCoreV1NodeSelectorRequirement } from "./NodeSelectorRequirement.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../_schemas/v1/NodeSelectorTerm.js";

/**
 * A null or empty node selector term matches no objects. The requirements of them are ANDed. The TopologySelectorTerm type implements a subset of the NodeSelectorTerm.
 */
export interface INodeSelectorTerm {
  /**
 * A list of node selector requirements by node's labels.
 */
"matchExpressions"?: Array<IIoK8sApiCoreV1NodeSelectorRequirement>;
/**
 * A list of node selector requirements by node's fields.
 */
"matchFields"?: Array<IIoK8sApiCoreV1NodeSelectorRequirement>;
}

/**
 * A null or empty node selector term matches no objects. The requirements of them are ANDed. The TopologySelectorTerm type implements a subset of the NodeSelectorTerm.
 */
export class NodeSelectorTerm extends Model<INodeSelectorTerm> implements INodeSelectorTerm {
  "matchExpressions"?: Array<IIoK8sApiCoreV1NodeSelectorRequirement>;
"matchFields"?: Array<IIoK8sApiCoreV1NodeSelectorRequirement>;

constructor(data?: ModelData<INodeSelectorTerm>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(NodeSelectorTerm, validate as ValidateFunc<INodeSelectorTerm>);

export type {
  INodeSelectorTerm as IIoK8sApiCoreV1NodeSelectorTerm,
  NodeSelectorTerm as IoK8sApiCoreV1NodeSelectorTerm
};
