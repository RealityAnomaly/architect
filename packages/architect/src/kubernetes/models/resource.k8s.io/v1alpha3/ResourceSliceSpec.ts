import { IIoK8sApiResourceV1alpha3Device } from "./Device.ts";
import { IIoK8sApiCoreV1NodeSelector } from "../../v1/NodeSelector.ts";
import { IIoK8sApiResourceV1alpha3ResourcePool } from "./ResourcePool.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiResourceV1alpha3ResourceSliceSpec.js";

/**
 * ResourceSliceSpec contains the information published by the driver in one ResourceSlice.
 */
export interface IResourceSliceSpec {
  /**
 * AllNodes indicates that all nodes have access to the resources in the pool.
 * 
 * Exactly one of NodeName, NodeSelector and AllNodes must be set.
 */
"allNodes"?: boolean;
/**
 * Devices lists some or all of the devices in this pool.
 * 
 * Must not have more than 128 entries.
 */
"devices"?: Array<IIoK8sApiResourceV1alpha3Device>;
/**
 * Driver identifies the DRA driver providing the capacity information. A field selector can be used to list only ResourceSlice objects with a certain driver name.
 * 
 * Must be a DNS subdomain and should end with a DNS domain owned by the vendor of the driver. This field is immutable.
 */
"driver": string;
/**
 * NodeName identifies the node which provides the resources in this pool. A field selector can be used to list only ResourceSlice objects belonging to a certain node.
 * 
 * This field can be used to limit access from nodes to ResourceSlices with the same node name. It also indicates to autoscalers that adding new nodes of the same type as some old node might also make new resources available.
 * 
 * Exactly one of NodeName, NodeSelector and AllNodes must be set. This field is immutable.
 */
"nodeName"?: string;
/**
 * NodeSelector defines which nodes have access to the resources in the pool, when that pool is not limited to a single node.
 * 
 * Must use exactly one term.
 * 
 * Exactly one of NodeName, NodeSelector and AllNodes must be set.
 */
"nodeSelector"?: IIoK8sApiCoreV1NodeSelector;
/**
 * Pool describes the pool that this ResourceSlice belongs to.
 */
"pool": IIoK8sApiResourceV1alpha3ResourcePool;
}

/**
 * ResourceSliceSpec contains the information published by the driver in one ResourceSlice.
 */
export class ResourceSliceSpec extends Model<IResourceSliceSpec> implements IResourceSliceSpec {
  "allNodes"?: boolean;
"devices"?: Array<IIoK8sApiResourceV1alpha3Device>;
"driver": string;
"nodeName"?: string;
"nodeSelector"?: IIoK8sApiCoreV1NodeSelector;
"pool": IIoK8sApiResourceV1alpha3ResourcePool;

constructor(data?: ModelData<IResourceSliceSpec>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(ResourceSliceSpec, validate as ValidateFunc<IResourceSliceSpec>);

export type {
  IResourceSliceSpec as IIoK8sApiResourceV1alpha3ResourceSliceSpec,
  ResourceSliceSpec as IoK8sApiResourceV1alpha3ResourceSliceSpec
};
