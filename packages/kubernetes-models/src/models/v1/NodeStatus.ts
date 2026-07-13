import { IIoK8sApiCoreV1NodeAddress } from "./NodeAddress.ts";
import { IIoK8sApimachineryPkgApiResourceQuantity } from "../../apimachinery/api/resource/Quantity.ts";
import { IIoK8sApiCoreV1NodeCondition } from "./NodeCondition.ts";
import { IIoK8sApiCoreV1NodeConfigStatus } from "./NodeConfigStatus.ts";
import { IIoK8sApiCoreV1NodeDaemonEndpoints } from "./NodeDaemonEndpoints.ts";
import { IIoK8sApiCoreV1NodeFeatures } from "./NodeFeatures.ts";
import { IIoK8sApiCoreV1ContainerImage } from "./ContainerImage.ts";
import { IIoK8sApiCoreV1NodeSystemInfo } from "./NodeSystemInfo.ts";
import { IIoK8sApiCoreV1NodeRuntimeHandler } from "./NodeRuntimeHandler.ts";
import { IIoK8sApiCoreV1AttachedVolume } from "./AttachedVolume.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../_schemas/v1/NodeStatus.js";

/**
 * NodeStatus is information about the current status of a node.
 */
export interface INodeStatus {
  /**
 * List of addresses reachable to the node. Queried from cloud provider, if available. More info: https://kubernetes.io/docs/reference/node/node-status/#addresses Note: This field is declared as mergeable, but the merge key is not sufficiently unique, which can cause data corruption when it is merged. Callers should instead use a full-replacement patch. See https://pr.k8s.io/79391 for an example. Consumers should assume that addresses can change during the lifetime of a Node. However, there are some exceptions where this may not be possible, such as Pods that inherit a Node's address in its own status or consumers of the downward API (status.hostIP).
 */
"addresses"?: Array<IIoK8sApiCoreV1NodeAddress>;
/**
 * Allocatable represents the resources of a node that are available for scheduling. Defaults to Capacity.
 */
"allocatable"?: {
  [key: string]: IIoK8sApimachineryPkgApiResourceQuantity;
};
/**
 * Capacity represents the total resources of a node. More info: https://kubernetes.io/docs/reference/node/node-status/#capacity
 */
"capacity"?: {
  [key: string]: IIoK8sApimachineryPkgApiResourceQuantity;
};
/**
 * Conditions is an array of current observed node conditions. More info: https://kubernetes.io/docs/reference/node/node-status/#condition
 */
"conditions"?: Array<IIoK8sApiCoreV1NodeCondition>;
/**
 * Status of the config assigned to the node via the dynamic Kubelet config feature.
 */
"config"?: IIoK8sApiCoreV1NodeConfigStatus;
/**
 * Endpoints of daemons running on the Node.
 */
"daemonEndpoints"?: IIoK8sApiCoreV1NodeDaemonEndpoints;
/**
 * DeclaredFeatures represents the features related to feature gates that are declared by the node.
 */
"declaredFeatures"?: Array<string>;
/**
 * Features describes the set of features implemented by the CRI implementation.
 */
"features"?: IIoK8sApiCoreV1NodeFeatures;
/**
 * List of container images on this node
 */
"images"?: Array<IIoK8sApiCoreV1ContainerImage>;
/**
 * Set of ids/uuids to uniquely identify the node. More info: https://kubernetes.io/docs/reference/node/node-status/#info
 */
"nodeInfo"?: IIoK8sApiCoreV1NodeSystemInfo;
/**
 * NodePhase is the recently observed lifecycle phase of the node. More info: https://kubernetes.io/docs/concepts/nodes/node/#phase The field is never populated, and now is deprecated.
 */
"phase"?: string;
/**
 * The available runtime handlers.
 */
"runtimeHandlers"?: Array<IIoK8sApiCoreV1NodeRuntimeHandler>;
/**
 * List of volumes that are attached to the node.
 */
"volumesAttached"?: Array<IIoK8sApiCoreV1AttachedVolume>;
/**
 * List of attachable volumes in use (mounted) by the node.
 */
"volumesInUse"?: Array<string>;
}

/**
 * NodeStatus is information about the current status of a node.
 */
export class NodeStatus extends Model<INodeStatus> implements INodeStatus {
  "addresses"?: Array<IIoK8sApiCoreV1NodeAddress>;
"allocatable"?: {
  [key: string]: IIoK8sApimachineryPkgApiResourceQuantity;
};
"capacity"?: {
  [key: string]: IIoK8sApimachineryPkgApiResourceQuantity;
};
"conditions"?: Array<IIoK8sApiCoreV1NodeCondition>;
"config"?: IIoK8sApiCoreV1NodeConfigStatus;
"daemonEndpoints"?: IIoK8sApiCoreV1NodeDaemonEndpoints;
"declaredFeatures"?: Array<string>;
"features"?: IIoK8sApiCoreV1NodeFeatures;
"images"?: Array<IIoK8sApiCoreV1ContainerImage>;
"nodeInfo"?: IIoK8sApiCoreV1NodeSystemInfo;
"phase"?: string;
"runtimeHandlers"?: Array<IIoK8sApiCoreV1NodeRuntimeHandler>;
"volumesAttached"?: Array<IIoK8sApiCoreV1AttachedVolume>;
"volumesInUse"?: Array<string>;

constructor(data?: ModelData<INodeStatus>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(NodeStatus, validate as ValidateFunc<INodeStatus>);

export type {
  INodeStatus as IIoK8sApiCoreV1NodeStatus,
  NodeStatus as IoK8sApiCoreV1NodeStatus
};
