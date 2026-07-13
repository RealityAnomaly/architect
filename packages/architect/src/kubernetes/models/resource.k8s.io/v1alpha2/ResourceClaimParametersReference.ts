import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiResourceV1alpha2ResourceClaimParametersReference.js";

/**
 * ResourceClaimParametersReference contains enough information to let you locate the parameters for a ResourceClaim. The object must be in the same namespace as the ResourceClaim.
 */
export interface IResourceClaimParametersReference {
  /**
 * APIGroup is the group for the resource being referenced. It is empty for the core API. This matches the group in the APIVersion that is used when creating the resources.
 */
"apiGroup"?: string;
/**
 * Kind is the type of resource being referenced. This is the same value as in the parameter object's metadata, for example "ConfigMap".
 */
"kind": string;
/**
 * Name is the name of resource being referenced.
 */
"name": string;
}

/**
 * ResourceClaimParametersReference contains enough information to let you locate the parameters for a ResourceClaim. The object must be in the same namespace as the ResourceClaim.
 */
export class ResourceClaimParametersReference extends Model<IResourceClaimParametersReference> implements IResourceClaimParametersReference {
  "apiGroup"?: string;
"kind": IResourceClaimParametersReference["kind"];
"name": string;

constructor(data?: ModelData<IResourceClaimParametersReference>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(ResourceClaimParametersReference, validate as ValidateFunc<IResourceClaimParametersReference>);

export type {
  IResourceClaimParametersReference as IIoK8sApiResourceV1alpha2ResourceClaimParametersReference,
  ResourceClaimParametersReference as IoK8sApiResourceV1alpha2ResourceClaimParametersReference
};
