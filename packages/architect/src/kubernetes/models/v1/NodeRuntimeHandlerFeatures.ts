import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../_schemas/IoK8sApiCoreV1NodeRuntimeHandlerFeatures.js";

/**
 * NodeRuntimeHandlerFeatures is a set of features implemented by the runtime handler.
 */
export interface INodeRuntimeHandlerFeatures {
  /**
 * RecursiveReadOnlyMounts is set to true if the runtime handler supports RecursiveReadOnlyMounts.
 */
"recursiveReadOnlyMounts"?: boolean;
/**
 * UserNamespaces is set to true if the runtime handler supports UserNamespaces, including for volumes.
 */
"userNamespaces"?: boolean;
}

/**
 * NodeRuntimeHandlerFeatures is a set of features implemented by the runtime handler.
 */
export class NodeRuntimeHandlerFeatures extends Model<INodeRuntimeHandlerFeatures> implements INodeRuntimeHandlerFeatures {
  "recursiveReadOnlyMounts"?: boolean;
"userNamespaces"?: boolean;

constructor(data?: ModelData<INodeRuntimeHandlerFeatures>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(NodeRuntimeHandlerFeatures, validate as ValidateFunc<INodeRuntimeHandlerFeatures>);

export type {
  INodeRuntimeHandlerFeatures as IIoK8sApiCoreV1NodeRuntimeHandlerFeatures,
  NodeRuntimeHandlerFeatures as IoK8sApiCoreV1NodeRuntimeHandlerFeatures
};
