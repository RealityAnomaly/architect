import { IIoK8sApiResourceV1beta2Device } from "./Device.ts";
import { IIoK8sApiCoreV1NodeSelector } from "../../v1/NodeSelector.ts";
import { IIoK8sApiResourceV1beta2ResourcePool } from "./ResourcePool.ts";
import { IIoK8sApiResourceV1beta2CounterSet } from "./CounterSet.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/resource.k8s.io/v1beta2/ResourceSliceSpec.js";

/**
 * ResourceSliceSpec contains the information published by the driver in one ResourceSlice.
 */
export interface IResourceSliceSpec {
  /**
 * AllNodes indicates that all nodes have access to the resources in the pool.
 * 
 * Exactly one of NodeName, NodeSelector, AllNodes, and PerDeviceNodeSelection must be set.
 */
"allNodes"?: boolean;
/**
 * Devices lists some or all of the devices in this pool.
 * 
 * Must not have more than 128 entries. If any device uses taints or consumes counters the limit is 64.
 * 
 * Only one of Devices and SharedCounters can be set in a ResourceSlice.
 */
"devices"?: Array<IIoK8sApiResourceV1beta2Device>;
/**
 * Driver identifies the DRA driver providing the capacity information. A field selector can be used to list only ResourceSlice objects with a certain driver name.
 * 
 * Must be a DNS subdomain and should end with a DNS domain owned by the vendor of the driver. It should use only lower case characters. This field is immutable.
 */
"driver": string;
/**
 * NodeName identifies the node which provides the resources in this pool. A field selector can be used to list only ResourceSlice objects belonging to a certain node.
 * 
 * This field can be used to limit access from nodes to ResourceSlices with the same node name. It also indicates to autoscalers that adding new nodes of the same type as some old node might also make new resources available.
 * 
 * Exactly one of NodeName, NodeSelector, AllNodes, and PerDeviceNodeSelection must be set. This field is immutable.
 */
"nodeName"?: string;
/**
 * NodeSelector defines which nodes have access to the resources in the pool, when that pool is not limited to a single node.
 * 
 * Must use exactly one term.
 * 
 * Exactly one of NodeName, NodeSelector, AllNodes, and PerDeviceNodeSelection must be set.
 */
"nodeSelector"?: IIoK8sApiCoreV1NodeSelector;
/**
 * PerDeviceNodeSelection defines whether the access from nodes to resources in the pool is set on the ResourceSlice level or on each device. If it is set to true, every device defined the ResourceSlice must specify this individually.
 * 
 * Exactly one of NodeName, NodeSelector, AllNodes, and PerDeviceNodeSelection must be set.
 */
"perDeviceNodeSelection"?: boolean;
/**
 * Pool describes the pool that this ResourceSlice belongs to.
 */
"pool": IIoK8sApiResourceV1beta2ResourcePool;
/**
 * SharedCounters defines a list of counter sets, each of which has a name and a list of counters available.
 * 
 * The names of the counter sets must be unique in the ResourcePool.
 * 
 * Only one of Devices and SharedCounters can be set in a ResourceSlice.
 * 
 * The maximum number of counter sets is 8.
 */
"sharedCounters"?: Array<IIoK8sApiResourceV1beta2CounterSet>;
}

/**
 * ResourceSliceSpec contains the information published by the driver in one ResourceSlice.
 */
export class ResourceSliceSpec extends Model<IResourceSliceSpec> implements IResourceSliceSpec {
  "allNodes"?: boolean;
"devices"?: Array<IIoK8sApiResourceV1beta2Device>;
"driver": string;
"nodeName"?: string;
"nodeSelector"?: IIoK8sApiCoreV1NodeSelector;
"perDeviceNodeSelection"?: boolean;
"pool": IIoK8sApiResourceV1beta2ResourcePool;
"sharedCounters"?: Array<IIoK8sApiResourceV1beta2CounterSet>;

constructor(data?: ModelData<IResourceSliceSpec>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(ResourceSliceSpec, validate as ValidateFunc<IResourceSliceSpec>);

export type {
  IResourceSliceSpec as IIoK8sApiResourceV1beta2ResourceSliceSpec,
  ResourceSliceSpec as IoK8sApiResourceV1beta2ResourceSliceSpec
};
