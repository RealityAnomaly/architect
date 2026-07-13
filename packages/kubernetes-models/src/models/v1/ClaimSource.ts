import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../_schemas/v1/ClaimSource.js";

/**
 * ClaimSource describes a reference to a ResourceClaim.
 * 
 * Exactly one of these fields should be set.  Consumers of this type must treat an empty object as if it has an unknown value.
 */
export interface IClaimSource {
  /**
 * ResourceClaimName is the name of a ResourceClaim object in the same namespace as this pod.
 */
"resourceClaimName"?: string;
/**
 * ResourceClaimTemplateName is the name of a ResourceClaimTemplate object in the same namespace as this pod.
 * 
 * The template will be used to create a new ResourceClaim, which will be bound to this pod. When this pod is deleted, the ResourceClaim will also be deleted. The pod name and resource name, along with a generated component, will be used to form a unique name for the ResourceClaim, which will be recorded in pod.status.resourceClaimStatuses.
 * 
 * This field is immutable and no changes will be made to the corresponding ResourceClaim by the control plane after creating the ResourceClaim.
 */
"resourceClaimTemplateName"?: string;
}

/**
 * ClaimSource describes a reference to a ResourceClaim.
 * 
 * Exactly one of these fields should be set.  Consumers of this type must treat an empty object as if it has an unknown value.
 */
export class ClaimSource extends Model<IClaimSource> implements IClaimSource {
  "resourceClaimName"?: string;
"resourceClaimTemplateName"?: string;

constructor(data?: ModelData<IClaimSource>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(ClaimSource, validate as ValidateFunc<IClaimSource>);

export type {
  IClaimSource as IIoK8sApiCoreV1ClaimSource,
  ClaimSource as IoK8sApiCoreV1ClaimSource
};
