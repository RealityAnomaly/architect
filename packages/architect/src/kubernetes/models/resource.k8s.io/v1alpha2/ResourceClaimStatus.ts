import { IIoK8sApiResourceV1alpha2AllocationResult } from "./AllocationResult.ts";
import { IIoK8sApiResourceV1alpha2ResourceClaimConsumerReference } from "./ResourceClaimConsumerReference.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiResourceV1alpha2ResourceClaimStatus.js";

/**
 * ResourceClaimStatus tracks whether the resource has been allocated and what the resulting attributes are.
 */
export interface IResourceClaimStatus {
  /**
 * Allocation is set by the resource driver once a resource or set of resources has been allocated successfully. If this is not specified, the resources have not been allocated yet.
 */
"allocation"?: IIoK8sApiResourceV1alpha2AllocationResult;
/**
 * DeallocationRequested indicates that a ResourceClaim is to be deallocated.
 * 
 * The driver then must deallocate this claim and reset the field together with clearing the Allocation field.
 * 
 * While DeallocationRequested is set, no new consumers may be added to ReservedFor.
 */
"deallocationRequested"?: boolean;
/**
 * DriverName is a copy of the driver name from the ResourceClass at the time when allocation started.
 */
"driverName"?: string;
/**
 * ReservedFor indicates which entities are currently allowed to use the claim. A Pod which references a ResourceClaim which is not reserved for that Pod will not be started.
 * 
 * There can be at most 32 such reservations. This may get increased in the future, but not reduced.
 */
"reservedFor"?: Array<IIoK8sApiResourceV1alpha2ResourceClaimConsumerReference>;
}

/**
 * ResourceClaimStatus tracks whether the resource has been allocated and what the resulting attributes are.
 */
export class ResourceClaimStatus extends Model<IResourceClaimStatus> implements IResourceClaimStatus {
  "allocation"?: IIoK8sApiResourceV1alpha2AllocationResult;
"deallocationRequested"?: boolean;
"driverName"?: string;
"reservedFor"?: Array<IIoK8sApiResourceV1alpha2ResourceClaimConsumerReference>;

constructor(data?: ModelData<IResourceClaimStatus>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(ResourceClaimStatus, validate as ValidateFunc<IResourceClaimStatus>);

export type {
  IResourceClaimStatus as IIoK8sApiResourceV1alpha2ResourceClaimStatus,
  ResourceClaimStatus as IoK8sApiResourceV1alpha2ResourceClaimStatus
};
