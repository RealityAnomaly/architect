import { IIoK8sApiCoreV1NodeRuntimeHandlerFeatures } from "./NodeRuntimeHandlerFeatures.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../_schemas/v1/NodeRuntimeHandler.js";

/**
 * NodeRuntimeHandler is a set of runtime handler information.
 */
export interface INodeRuntimeHandler {
  /**
 * Supported features.
 */
"features"?: IIoK8sApiCoreV1NodeRuntimeHandlerFeatures;
/**
 * Runtime handler name. Empty for the default runtime handler.
 */
"name"?: string;
}

/**
 * NodeRuntimeHandler is a set of runtime handler information.
 */
export class NodeRuntimeHandler extends Model<INodeRuntimeHandler> implements INodeRuntimeHandler {
  "features"?: IIoK8sApiCoreV1NodeRuntimeHandlerFeatures;
"name"?: string;

constructor(data?: ModelData<INodeRuntimeHandler>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(NodeRuntimeHandler, validate as ValidateFunc<INodeRuntimeHandler>);

export type {
  INodeRuntimeHandler as IIoK8sApiCoreV1NodeRuntimeHandler,
  NodeRuntimeHandler as IoK8sApiCoreV1NodeRuntimeHandler
};
