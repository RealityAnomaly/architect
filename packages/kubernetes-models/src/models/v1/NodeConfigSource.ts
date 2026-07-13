import { IIoK8sApiCoreV1ConfigMapNodeConfigSource } from "./ConfigMapNodeConfigSource.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../_schemas/v1/NodeConfigSource.js";

/**
 * NodeConfigSource specifies a source of node configuration. Exactly one subfield (excluding metadata) must be non-nil. This API is deprecated since 1.22
 * @deprecated
 */
export interface INodeConfigSource {
  /**
 * ConfigMap is a reference to a Node's ConfigMap
 */
"configMap"?: IIoK8sApiCoreV1ConfigMapNodeConfigSource;
}

/**
 * NodeConfigSource specifies a source of node configuration. Exactly one subfield (excluding metadata) must be non-nil. This API is deprecated since 1.22
 * @deprecated
 */
export class NodeConfigSource extends Model<INodeConfigSource> implements INodeConfigSource {
  "configMap"?: IIoK8sApiCoreV1ConfigMapNodeConfigSource;

constructor(data?: ModelData<INodeConfigSource>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(NodeConfigSource, validate as ValidateFunc<INodeConfigSource>);

export type {
  INodeConfigSource as IIoK8sApiCoreV1NodeConfigSource,
  NodeConfigSource as IoK8sApiCoreV1NodeConfigSource
};
