import { IIoK8sApiResourceV1DeviceClaimConfiguration } from "./DeviceClaimConfiguration.ts";
import { IIoK8sApiResourceV1DeviceConstraint } from "./DeviceConstraint.ts";
import { IIoK8sApiResourceV1DeviceRequest } from "./DeviceRequest.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiResourceV1DeviceClaim.js";

/**
 * DeviceClaim defines how to request devices with a ResourceClaim.
 */
export interface IDeviceClaim {
  /**
 * This field holds configuration for multiple potential drivers which could satisfy requests in this claim. It is ignored while allocating the claim.
 */
"config"?: Array<IIoK8sApiResourceV1DeviceClaimConfiguration>;
/**
 * These constraints must be satisfied by the set of devices that get allocated for the claim.
 */
"constraints"?: Array<IIoK8sApiResourceV1DeviceConstraint>;
/**
 * Requests represent individual requests for distinct devices which must all be satisfied. If empty, nothing needs to be allocated.
 */
"requests"?: Array<IIoK8sApiResourceV1DeviceRequest>;
}

/**
 * DeviceClaim defines how to request devices with a ResourceClaim.
 */
export class DeviceClaim extends Model<IDeviceClaim> implements IDeviceClaim {
  "config"?: Array<IIoK8sApiResourceV1DeviceClaimConfiguration>;
"constraints"?: Array<IIoK8sApiResourceV1DeviceConstraint>;
"requests"?: Array<IIoK8sApiResourceV1DeviceRequest>;

constructor(data?: ModelData<IDeviceClaim>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(DeviceClaim, validate as ValidateFunc<IDeviceClaim>);

export type {
  IDeviceClaim as IIoK8sApiResourceV1DeviceClaim,
  DeviceClaim as IoK8sApiResourceV1DeviceClaim
};
