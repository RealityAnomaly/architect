import { IIoK8sApiCoreV1DaemonEndpoint } from "./DaemonEndpoint.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../_schemas/v1/NodeDaemonEndpoints.js";

/**
 * NodeDaemonEndpoints lists ports opened by daemons running on the Node.
 */
export interface INodeDaemonEndpoints {
  /**
 * Endpoint on which Kubelet is listening.
 */
"kubeletEndpoint"?: IIoK8sApiCoreV1DaemonEndpoint;
}

/**
 * NodeDaemonEndpoints lists ports opened by daemons running on the Node.
 */
export class NodeDaemonEndpoints extends Model<INodeDaemonEndpoints> implements INodeDaemonEndpoints {
  "kubeletEndpoint"?: IIoK8sApiCoreV1DaemonEndpoint;

constructor(data?: ModelData<INodeDaemonEndpoints>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(NodeDaemonEndpoints, validate as ValidateFunc<INodeDaemonEndpoints>);

export type {
  INodeDaemonEndpoints as IIoK8sApiCoreV1NodeDaemonEndpoints,
  NodeDaemonEndpoints as IoK8sApiCoreV1NodeDaemonEndpoints
};
