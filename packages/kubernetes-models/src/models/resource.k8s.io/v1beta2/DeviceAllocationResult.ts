import { IIoK8sApiResourceV1beta2DeviceAllocationConfiguration } from "./DeviceAllocationConfiguration.ts";
import { IIoK8sApiResourceV1beta2DeviceRequestAllocationResult } from "./DeviceRequestAllocationResult.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/resource.k8s.io/v1beta2/DeviceAllocationResult.js";

/**
 * DeviceAllocationResult is the result of allocating devices.
 */
export interface IDeviceAllocationResult {
  /**
 * This field is a combination of all the claim and class configuration parameters. Drivers can distinguish between those based on a flag.
 * 
 * This includes configuration parameters for drivers which have no allocated devices in the result because it is up to the drivers which configuration parameters they support. They can silently ignore unknown configuration parameters.
 */
"config"?: Array<IIoK8sApiResourceV1beta2DeviceAllocationConfiguration>;
/**
 * Results lists all allocated devices.
 */
"results"?: Array<IIoK8sApiResourceV1beta2DeviceRequestAllocationResult>;
}

/**
 * DeviceAllocationResult is the result of allocating devices.
 */
export class DeviceAllocationResult extends Model<IDeviceAllocationResult> implements IDeviceAllocationResult {
  "config"?: Array<IIoK8sApiResourceV1beta2DeviceAllocationConfiguration>;
"results"?: Array<IIoK8sApiResourceV1beta2DeviceRequestAllocationResult>;

constructor(data?: ModelData<IDeviceAllocationResult>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(DeviceAllocationResult, validate as ValidateFunc<IDeviceAllocationResult>);

export type {
  IDeviceAllocationResult as IIoK8sApiResourceV1beta2DeviceAllocationResult,
  DeviceAllocationResult as IoK8sApiResourceV1beta2DeviceAllocationResult
};
