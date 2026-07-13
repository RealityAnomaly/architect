import { IIoK8sApiCoreV1ContainerExtendedResourceRequest } from "./ContainerExtendedResourceRequest.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../_schemas/IoK8sApiCoreV1PodExtendedResourceClaimStatus.js";

/**
 * PodExtendedResourceClaimStatus is stored in the PodStatus for the extended resource requests backed by DRA. It stores the generated name for the corresponding special ResourceClaim created by the scheduler.
 */
export interface IPodExtendedResourceClaimStatus {
  /**
 * RequestMappings identifies the mapping of <container, extended resource backed by DRA> to  device request in the generated ResourceClaim.
 */
"requestMappings": Array<IIoK8sApiCoreV1ContainerExtendedResourceRequest>;
/**
 * ResourceClaimName is the name of the ResourceClaim that was generated for the Pod in the namespace of the Pod.
 */
"resourceClaimName": string;
}

/**
 * PodExtendedResourceClaimStatus is stored in the PodStatus for the extended resource requests backed by DRA. It stores the generated name for the corresponding special ResourceClaim created by the scheduler.
 */
export class PodExtendedResourceClaimStatus extends Model<IPodExtendedResourceClaimStatus> implements IPodExtendedResourceClaimStatus {
  "requestMappings": Array<IIoK8sApiCoreV1ContainerExtendedResourceRequest>;
"resourceClaimName": string;

constructor(data?: ModelData<IPodExtendedResourceClaimStatus>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(PodExtendedResourceClaimStatus, validate as ValidateFunc<IPodExtendedResourceClaimStatus>);

export type {
  IPodExtendedResourceClaimStatus as IIoK8sApiCoreV1PodExtendedResourceClaimStatus,
  PodExtendedResourceClaimStatus as IoK8sApiCoreV1PodExtendedResourceClaimStatus
};
