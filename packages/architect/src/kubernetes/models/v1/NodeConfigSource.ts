import { IIoK8sApiCoreV1ConfigMapNodeConfigSource } from "./ConfigMapNodeConfigSource.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../_schemas/IoK8sApiCoreV1NodeConfigSource.js";

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
