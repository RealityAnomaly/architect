import { IIoK8sApimachineryPkgApiResourceQuantity } from "../../apimachinery/api/resource/Quantity.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../_schemas/IoK8sApiCoreV1NodeAllocatableResourceClaimStatus.js";

/**
 * NodeAllocatableResourceClaimStatus describes the status of node allocatable resources allocated via DRA.
 */
export interface INodeAllocatableResourceClaimStatus {
  /**
 * Containers lists the names of all containers in this pod that reference the claim.
 */
"containers"?: Array<string>;
/**
 * ResourceClaimName is the resource claim referenced by the pod that resulted in this node allocatable resource allocation.
 */
"resourceClaimName": string;
/**
 * Resources is a map of the node-allocatable resource name to the aggregate quantity allocated to the claim.
 */
"resources": {
  [key: string]: IIoK8sApimachineryPkgApiResourceQuantity;
};
}

/**
 * NodeAllocatableResourceClaimStatus describes the status of node allocatable resources allocated via DRA.
 */
export class NodeAllocatableResourceClaimStatus extends Model<INodeAllocatableResourceClaimStatus> implements INodeAllocatableResourceClaimStatus {
  "containers"?: Array<string>;
"resourceClaimName": string;
"resources": {
  [key: string]: IIoK8sApimachineryPkgApiResourceQuantity;
};

constructor(data?: ModelData<INodeAllocatableResourceClaimStatus>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(NodeAllocatableResourceClaimStatus, validate as ValidateFunc<INodeAllocatableResourceClaimStatus>);

export type {
  INodeAllocatableResourceClaimStatus as IIoK8sApiCoreV1NodeAllocatableResourceClaimStatus,
  NodeAllocatableResourceClaimStatus as IoK8sApiCoreV1NodeAllocatableResourceClaimStatus
};
