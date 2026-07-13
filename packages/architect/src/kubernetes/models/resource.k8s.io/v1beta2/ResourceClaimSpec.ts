import { IIoK8sApiResourceV1beta2DeviceClaim } from "./DeviceClaim.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiResourceV1beta2ResourceClaimSpec.js";

/**
 * ResourceClaimSpec defines what is being requested in a ResourceClaim and how to configure it.
 */
export interface IResourceClaimSpec {
  /**
 * Devices defines how to request devices.
 */
"devices"?: IIoK8sApiResourceV1beta2DeviceClaim;
}

/**
 * ResourceClaimSpec defines what is being requested in a ResourceClaim and how to configure it.
 */
export class ResourceClaimSpec extends Model<IResourceClaimSpec> implements IResourceClaimSpec {
  "devices"?: IIoK8sApiResourceV1beta2DeviceClaim;

constructor(data?: ModelData<IResourceClaimSpec>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(ResourceClaimSpec, validate as ValidateFunc<IResourceClaimSpec>);

export type {
  IResourceClaimSpec as IIoK8sApiResourceV1beta2ResourceClaimSpec,
  ResourceClaimSpec as IoK8sApiResourceV1beta2ResourceClaimSpec
};
