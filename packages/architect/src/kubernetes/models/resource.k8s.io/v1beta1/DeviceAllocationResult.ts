import { IIoK8sApiResourceV1beta1DeviceAllocationConfiguration } from "./DeviceAllocationConfiguration.ts";
import { IIoK8sApiResourceV1beta1DeviceRequestAllocationResult } from "./DeviceRequestAllocationResult.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiResourceV1beta1DeviceAllocationResult.js";

/**
 * DeviceAllocationResult is the result of allocating devices.
 */
export interface IDeviceAllocationResult {
  /**
 * This field is a combination of all the claim and class configuration parameters. Drivers can distinguish between those based on a flag.
 * 
 * This includes configuration parameters for drivers which have no allocated devices in the result because it is up to the drivers which configuration parameters they support. They can silently ignore unknown configuration parameters.
 */
"config"?: Array<IIoK8sApiResourceV1beta1DeviceAllocationConfiguration>;
/**
 * Results lists all allocated devices.
 */
"results"?: Array<IIoK8sApiResourceV1beta1DeviceRequestAllocationResult>;
}

/**
 * DeviceAllocationResult is the result of allocating devices.
 */
export class DeviceAllocationResult extends Model<IDeviceAllocationResult> implements IDeviceAllocationResult {
  "config"?: Array<IIoK8sApiResourceV1beta1DeviceAllocationConfiguration>;
"results"?: Array<IIoK8sApiResourceV1beta1DeviceRequestAllocationResult>;

constructor(data?: ModelData<IDeviceAllocationResult>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(DeviceAllocationResult, validate as ValidateFunc<IDeviceAllocationResult>);

export type {
  IDeviceAllocationResult as IIoK8sApiResourceV1beta1DeviceAllocationResult,
  DeviceAllocationResult as IoK8sApiResourceV1beta1DeviceAllocationResult
};
