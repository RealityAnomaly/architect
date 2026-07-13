import { IIoK8sApiResourceV1beta1CapacityRequestPolicy } from "./CapacityRequestPolicy.ts";
import { IIoK8sApimachineryPkgApiResourceQuantity } from "../../../apimachinery/api/resource/Quantity.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiResourceV1beta1DeviceCapacity.js";

/**
 * DeviceCapacity describes a quantity associated with a device.
 */
export interface IDeviceCapacity {
  /**
 * RequestPolicy defines how this DeviceCapacity must be consumed when the device is allowed to be shared by multiple allocations.
 * 
 * The Device must have allowMultipleAllocations set to true in order to set a requestPolicy.
 * 
 * If unset, capacity requests are unconstrained: requests can consume any amount of capacity, as long as the total consumed across all allocations does not exceed the device's defined capacity. If request is also unset, default is the full capacity value.
 */
"requestPolicy"?: IIoK8sApiResourceV1beta1CapacityRequestPolicy;
/**
 * Value defines how much of a certain capacity that device has.
 * 
 * This field reflects the fixed total capacity and does not change. The consumed amount is tracked separately by scheduler and does not affect this value.
 */
"value": IIoK8sApimachineryPkgApiResourceQuantity;
}

/**
 * DeviceCapacity describes a quantity associated with a device.
 */
export class DeviceCapacity extends Model<IDeviceCapacity> implements IDeviceCapacity {
  "requestPolicy"?: IIoK8sApiResourceV1beta1CapacityRequestPolicy;
"value": IIoK8sApimachineryPkgApiResourceQuantity;

constructor(data?: ModelData<IDeviceCapacity>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(DeviceCapacity, validate as ValidateFunc<IDeviceCapacity>);

export type {
  IDeviceCapacity as IIoK8sApiResourceV1beta1DeviceCapacity,
  DeviceCapacity as IoK8sApiResourceV1beta1DeviceCapacity
};
