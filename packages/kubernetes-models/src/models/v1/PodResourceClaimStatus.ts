import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../_schemas/v1/PodResourceClaimStatus.js";

/**
 * PodResourceClaimStatus is stored in the PodStatus for each PodResourceClaim which references a ResourceClaimTemplate. It stores the generated name for the corresponding ResourceClaim.
 */
export interface IPodResourceClaimStatus {
  /**
 * Name uniquely identifies this resource claim inside the pod. This must match the name of an entry in pod.spec.resourceClaims, which implies that the string must be a DNS_LABEL.
 */
"name": string;
/**
 * ResourceClaimName is the name of the ResourceClaim that was generated for the Pod in the namespace of the Pod.
 * 
 * When the DRAWorkloadResourceClaims feature is enabled and the corresponding PodResourceClaim matches a PodGroupResourceClaim made by the Pod's PodGroup, then this is the name of the ResourceClaim generated and reserved for the PodGroup.
 * 
 * If this is unset, then generating a ResourceClaim was not necessary. The pod.spec.resourceClaims entry can be ignored in this case.
 */
"resourceClaimName"?: string;
}

/**
 * PodResourceClaimStatus is stored in the PodStatus for each PodResourceClaim which references a ResourceClaimTemplate. It stores the generated name for the corresponding ResourceClaim.
 */
export class PodResourceClaimStatus extends Model<IPodResourceClaimStatus> implements IPodResourceClaimStatus {
  "name": string;
"resourceClaimName"?: string;

constructor(data?: ModelData<IPodResourceClaimStatus>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(PodResourceClaimStatus, validate as ValidateFunc<IPodResourceClaimStatus>);

export type {
  IPodResourceClaimStatus as IIoK8sApiCoreV1PodResourceClaimStatus,
  PodResourceClaimStatus as IoK8sApiCoreV1PodResourceClaimStatus
};
