import { IIoK8sApiResourceV1alpha3DeviceClaim } from "./DeviceClaim.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/resource.k8s.io/v1alpha3/ResourceClaimSpec.js";

/**
 * ResourceClaimSpec defines what is being requested in a ResourceClaim and how to configure it.
 */
export interface IResourceClaimSpec {
  /**
 * Devices defines how to request devices.
 */
"devices"?: IIoK8sApiResourceV1alpha3DeviceClaim;
}

/**
 * ResourceClaimSpec defines what is being requested in a ResourceClaim and how to configure it.
 */
export class ResourceClaimSpec extends Model<IResourceClaimSpec> implements IResourceClaimSpec {
  "devices"?: IIoK8sApiResourceV1alpha3DeviceClaim;

constructor(data?: ModelData<IResourceClaimSpec>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(ResourceClaimSpec, validate as ValidateFunc<IResourceClaimSpec>);

export type {
  IResourceClaimSpec as IIoK8sApiResourceV1alpha3ResourceClaimSpec,
  ResourceClaimSpec as IoK8sApiResourceV1alpha3ResourceClaimSpec
};
