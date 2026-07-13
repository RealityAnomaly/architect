import { IIoK8sApiResourceV1beta1DeviceClaimConfiguration } from "./DeviceClaimConfiguration.ts";
import { IIoK8sApiResourceV1beta1DeviceConstraint } from "./DeviceConstraint.ts";
import { IIoK8sApiResourceV1beta1DeviceRequest } from "./DeviceRequest.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/resource.k8s.io/v1beta1/DeviceClaim.js";

/**
 * DeviceClaim defines how to request devices with a ResourceClaim.
 */
export interface IDeviceClaim {
  /**
 * This field holds configuration for multiple potential drivers which could satisfy requests in this claim. It is ignored while allocating the claim.
 */
"config"?: Array<IIoK8sApiResourceV1beta1DeviceClaimConfiguration>;
/**
 * These constraints must be satisfied by the set of devices that get allocated for the claim.
 */
"constraints"?: Array<IIoK8sApiResourceV1beta1DeviceConstraint>;
/**
 * Requests represent individual requests for distinct devices which must all be satisfied. If empty, nothing needs to be allocated.
 */
"requests"?: Array<IIoK8sApiResourceV1beta1DeviceRequest>;
}

/**
 * DeviceClaim defines how to request devices with a ResourceClaim.
 */
export class DeviceClaim extends Model<IDeviceClaim> implements IDeviceClaim {
  "config"?: Array<IIoK8sApiResourceV1beta1DeviceClaimConfiguration>;
"constraints"?: Array<IIoK8sApiResourceV1beta1DeviceConstraint>;
"requests"?: Array<IIoK8sApiResourceV1beta1DeviceRequest>;

constructor(data?: ModelData<IDeviceClaim>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(DeviceClaim, validate as ValidateFunc<IDeviceClaim>);

export type {
  IDeviceClaim as IIoK8sApiResourceV1beta1DeviceClaim,
  DeviceClaim as IoK8sApiResourceV1beta1DeviceClaim
};
