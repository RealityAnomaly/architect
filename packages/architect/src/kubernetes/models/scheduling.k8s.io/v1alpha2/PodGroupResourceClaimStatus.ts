import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiSchedulingV1alpha2PodGroupResourceClaimStatus.js";

/**
 * PodGroupResourceClaimStatus is stored in the PodGroupStatus for each PodGroupResourceClaim which references a ResourceClaimTemplate. It stores the generated name for the corresponding ResourceClaim.
 */
export interface IPodGroupResourceClaimStatus {
  /**
 * Name uniquely identifies this resource claim inside the PodGroup. This must match the name of an entry in podgroup.spec.resourceClaims, which implies that the string must be a DNS_LABEL.
 */
"name": string;
/**
 * ResourceClaimName is the name of the ResourceClaim that was generated for the PodGroup in the namespace of the PodGroup. If this is unset, then generating a ResourceClaim was not necessary. The podgroup.spec.resourceClaims entry can be ignored in this case.
 */
"resourceClaimName"?: string;
}

/**
 * PodGroupResourceClaimStatus is stored in the PodGroupStatus for each PodGroupResourceClaim which references a ResourceClaimTemplate. It stores the generated name for the corresponding ResourceClaim.
 */
export class PodGroupResourceClaimStatus extends Model<IPodGroupResourceClaimStatus> implements IPodGroupResourceClaimStatus {
  "name": string;
"resourceClaimName"?: string;

constructor(data?: ModelData<IPodGroupResourceClaimStatus>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(PodGroupResourceClaimStatus, validate as ValidateFunc<IPodGroupResourceClaimStatus>);

export type {
  IPodGroupResourceClaimStatus as IIoK8sApiSchedulingV1alpha2PodGroupResourceClaimStatus,
  PodGroupResourceClaimStatus as IoK8sApiSchedulingV1alpha2PodGroupResourceClaimStatus
};
