import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../_schemas/v1/ResourceClaim.js";

/**
 * ResourceClaim references one entry in PodSpec.ResourceClaims.
 */
export interface IResourceClaim {
  /**
 * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
 */
"name": string;
/**
 * Request is the name chosen for a request in the referenced claim. If empty, everything from the claim is made available, otherwise only the result of this request.
 */
"request"?: string;
}

/**
 * ResourceClaim references one entry in PodSpec.ResourceClaims.
 */
export class ResourceClaim extends Model<IResourceClaim> implements IResourceClaim {
  "name": string;
"request"?: string;

constructor(data?: ModelData<IResourceClaim>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(ResourceClaim, validate as ValidateFunc<IResourceClaim>);

export type {
  IResourceClaim as IIoK8sApiCoreV1ResourceClaim,
  ResourceClaim as IoK8sApiCoreV1ResourceClaim
};
