import { IIoK8sApiCoreV1NodeSelector } from "../../v1/NodeSelector.ts";
import { IIoK8sApiResourceV1alpha2ResourceHandle } from "./ResourceHandle.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/resource.k8s.io/v1alpha2/AllocationResult.js";

/**
 * AllocationResult contains attributes of an allocated resource.
 */
export interface IAllocationResult {
  /**
 * This field will get set by the resource driver after it has allocated the resource to inform the scheduler where it can schedule Pods using the ResourceClaim.
 * 
 * Setting this field is optional. If null, the resource is available everywhere.
 */
"availableOnNodes"?: IIoK8sApiCoreV1NodeSelector;
/**
 * ResourceHandles contain the state associated with an allocation that should be maintained throughout the lifetime of a claim. Each ResourceHandle contains data that should be passed to a specific kubelet plugin once it lands on a node. This data is returned by the driver after a successful allocation and is opaque to Kubernetes. Driver documentation may explain to users how to interpret this data if needed.
 * 
 * Setting this field is optional. It has a maximum size of 32 entries. If null (or empty), it is assumed this allocation will be processed by a single kubelet plugin with no ResourceHandle data attached. The name of the kubelet plugin invoked will match the DriverName set in the ResourceClaimStatus this AllocationResult is embedded in.
 */
"resourceHandles"?: Array<IIoK8sApiResourceV1alpha2ResourceHandle>;
/**
 * Shareable determines whether the resource supports more than one consumer at a time.
 */
"shareable"?: boolean;
}

/**
 * AllocationResult contains attributes of an allocated resource.
 */
export class AllocationResult extends Model<IAllocationResult> implements IAllocationResult {
  "availableOnNodes"?: IIoK8sApiCoreV1NodeSelector;
"resourceHandles"?: Array<IIoK8sApiResourceV1alpha2ResourceHandle>;
"shareable"?: boolean;

constructor(data?: ModelData<IAllocationResult>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(AllocationResult, validate as ValidateFunc<IAllocationResult>);

export type {
  IAllocationResult as IIoK8sApiResourceV1alpha2AllocationResult,
  AllocationResult as IoK8sApiResourceV1alpha2AllocationResult
};
