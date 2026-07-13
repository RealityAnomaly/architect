import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../_schemas/IoK8sApiCoreV1NodeFeatures.js";

/**
 * NodeFeatures describes the set of features implemented by the CRI implementation. The features contained in the NodeFeatures should depend only on the cri implementation independent of runtime handlers.
 */
export interface INodeFeatures {
  /**
 * SupplementalGroupsPolicy is set to true if the runtime supports SupplementalGroupsPolicy and ContainerUser.
 */
"supplementalGroupsPolicy"?: boolean;
}

/**
 * NodeFeatures describes the set of features implemented by the CRI implementation. The features contained in the NodeFeatures should depend only on the cri implementation independent of runtime handlers.
 */
export class NodeFeatures extends Model<INodeFeatures> implements INodeFeatures {
  "supplementalGroupsPolicy"?: boolean;

constructor(data?: ModelData<INodeFeatures>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(NodeFeatures, validate as ValidateFunc<INodeFeatures>);

export type {
  INodeFeatures as IIoK8sApiCoreV1NodeFeatures,
  NodeFeatures as IoK8sApiCoreV1NodeFeatures
};
