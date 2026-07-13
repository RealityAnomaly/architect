import { IIoK8sApiResourceV1alpha2ResourceClaimParametersReference } from "./ResourceClaimParametersReference.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiResourceV1alpha2ResourceClaimSpec.js";

/**
 * ResourceClaimSpec defines how a resource is to be allocated.
 */
export interface IResourceClaimSpec {
  /**
 * Allocation can start immediately or when a Pod wants to use the resource. "WaitForFirstConsumer" is the default.
 */
"allocationMode"?: string;
/**
 * ParametersRef references a separate object with arbitrary parameters that will be used by the driver when allocating a resource for the claim.
 * 
 * The object must be in the same namespace as the ResourceClaim.
 */
"parametersRef"?: IIoK8sApiResourceV1alpha2ResourceClaimParametersReference;
/**
 * ResourceClassName references the driver and additional parameters via the name of a ResourceClass that was created as part of the driver deployment.
 */
"resourceClassName": string;
}

/**
 * ResourceClaimSpec defines how a resource is to be allocated.
 */
export class ResourceClaimSpec extends Model<IResourceClaimSpec> implements IResourceClaimSpec {
  "allocationMode"?: string;
"parametersRef"?: IIoK8sApiResourceV1alpha2ResourceClaimParametersReference;
"resourceClassName": string;

constructor(data?: ModelData<IResourceClaimSpec>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(ResourceClaimSpec, validate as ValidateFunc<IResourceClaimSpec>);

export type {
  IResourceClaimSpec as IIoK8sApiResourceV1alpha2ResourceClaimSpec,
  ResourceClaimSpec as IoK8sApiResourceV1alpha2ResourceClaimSpec
};
