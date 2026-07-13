import { IIoK8sApiCoreV1NodeSelector } from "../../v1/NodeSelector.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/resource.k8s.io/v1alpha1/AllocationResult.js";

/**
 * AllocationResult contains attributed of an allocated resource.
 */
export interface IAllocationResult {
  /**
 * This field will get set by the resource driver after it has allocated the resource driver to inform the scheduler where it can schedule Pods using the ResourceClaim.
 * 
 * Setting this field is optional. If null, the resource is available everywhere.
 */
"availableOnNodes"?: IIoK8sApiCoreV1NodeSelector;
/**
 * ResourceHandle contains arbitrary data returned by the driver after a successful allocation. This is opaque for Kubernetes. Driver documentation may explain to users how to interpret this data if needed.
 * 
 * The maximum size of this field is 16KiB. This may get increased in the future, but not reduced.
 */
"resourceHandle"?: string;
/**
 * Shareable determines whether the resource supports more than one consumer at a time.
 */
"shareable"?: boolean;
}

/**
 * AllocationResult contains attributed of an allocated resource.
 */
export class AllocationResult extends Model<IAllocationResult> implements IAllocationResult {
  "availableOnNodes"?: IIoK8sApiCoreV1NodeSelector;
"resourceHandle"?: string;
"shareable"?: boolean;

constructor(data?: ModelData<IAllocationResult>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(AllocationResult, validate as ValidateFunc<IAllocationResult>);

export type {
  IAllocationResult as IIoK8sApiResourceV1alpha1AllocationResult,
  AllocationResult as IoK8sApiResourceV1alpha1AllocationResult
};
