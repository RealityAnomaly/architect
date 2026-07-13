import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/resource.k8s.io/v1alpha1/ResourceClaimConsumerReference.js";

/**
 * ResourceClaimConsumerReference contains enough information to let you locate the consumer of a ResourceClaim. The user must be a resource in the same namespace as the ResourceClaim.
 */
export interface IResourceClaimConsumerReference {
  /**
 * APIGroup is the group for the resource being referenced. It is empty for the core API. This matches the group in the APIVersion that is used when creating the resources.
 */
"apiGroup"?: string;
/**
 * Name is the name of resource being referenced.
 */
"name": string;
/**
 * Resource is the type of resource being referenced, for example "pods".
 */
"resource": string;
/**
 * UID identifies exactly one incarnation of the resource.
 */
"uid": string;
}

/**
 * ResourceClaimConsumerReference contains enough information to let you locate the consumer of a ResourceClaim. The user must be a resource in the same namespace as the ResourceClaim.
 */
export class ResourceClaimConsumerReference extends Model<IResourceClaimConsumerReference> implements IResourceClaimConsumerReference {
  "apiGroup"?: string;
"name": string;
"resource": string;
"uid": string;

constructor(data?: ModelData<IResourceClaimConsumerReference>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(ResourceClaimConsumerReference, validate as ValidateFunc<IResourceClaimConsumerReference>);

export type {
  IResourceClaimConsumerReference as IIoK8sApiResourceV1alpha1ResourceClaimConsumerReference,
  ResourceClaimConsumerReference as IoK8sApiResourceV1alpha1ResourceClaimConsumerReference
};
