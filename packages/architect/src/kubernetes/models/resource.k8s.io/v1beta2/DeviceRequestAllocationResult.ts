import { IIoK8sApimachineryPkgApiResourceQuantity } from "../../../apimachinery/api/resource/Quantity.ts";
import { IIoK8sApiResourceV1beta2DeviceToleration } from "./DeviceToleration.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiResourceV1beta2DeviceRequestAllocationResult.js";

/**
 * DeviceRequestAllocationResult contains the allocation result for one request.
 */
export interface IDeviceRequestAllocationResult {
  /**
 * AdminAccess indicates that this device was allocated for administrative access. See the corresponding request field for a definition of mode.
 * 
 * This is an alpha field and requires enabling the DRAAdminAccess feature gate. Admin access is disabled if this field is unset or set to false, otherwise it is enabled.
 */
"adminAccess"?: boolean;
/**
 * BindingConditions contains a copy of the BindingConditions from the corresponding ResourceSlice at the time of allocation.
 * 
 * This is a beta field and requires enabling the DRADeviceBindingConditions and DRAResourceClaimDeviceStatus feature gates.
 */
"bindingConditions"?: Array<string>;
/**
 * BindingFailureConditions contains a copy of the BindingFailureConditions from the corresponding ResourceSlice at the time of allocation.
 * 
 * This is a beta field and requires enabling the DRADeviceBindingConditions and DRAResourceClaimDeviceStatus feature gates.
 */
"bindingFailureConditions"?: Array<string>;
/**
 * ConsumedCapacity tracks the amount of capacity consumed per device as part of the claim request. The consumed amount may differ from the requested amount: it is rounded up to the nearest valid value based on the device’s requestPolicy if applicable (i.e., may not be less than the requested amount).
 * 
 * The total consumed capacity for each device must not exceed the DeviceCapacity's Value.
 * 
 * This field is populated only for devices that allow multiple allocations. All capacity entries are included, even if the consumed amount is zero.
 */
"consumedCapacity"?: {
  [key: string]: IIoK8sApimachineryPkgApiResourceQuantity;
};
/**
 * Device references one device instance via its name in the driver's resource pool. It must be a DNS label.
 */
"device": string;
/**
 * Driver specifies the name of the DRA driver whose kubelet plugin should be invoked to process the allocation once the claim is needed on a node.
 * 
 * Must be a DNS subdomain and should end with a DNS domain owned by the vendor of the driver. It should use only lower case characters.
 */
"driver": string;
/**
 * This name together with the driver name and the device name field identify which device was allocated (`<driver name>/<pool name>/<device name>`).
 * 
 * Must not be longer than 253 characters and may contain one or more DNS sub-domains separated by slashes.
 */
"pool": string;
/**
 * Request is the name of the request in the claim which caused this device to be allocated. If it references a subrequest in the firstAvailable list on a DeviceRequest, this field must include both the name of the main request and the subrequest using the format <main request>/<subrequest>.
 * 
 * Multiple devices may have been allocated per request.
 */
"request": string;
/**
 * ShareID uniquely identifies an individual allocation share of the device, used when the device supports multiple simultaneous allocations. It serves as an additional map key to differentiate concurrent shares of the same device.
 */
"shareID"?: string;
/**
 * A copy of all tolerations specified in the request at the time when the device got allocated.
 * 
 * The maximum number of tolerations is 16.
 * 
 * This is a beta field and requires enabling the DRADeviceTaints feature gate.
 */
"tolerations"?: Array<IIoK8sApiResourceV1beta2DeviceToleration>;
}

/**
 * DeviceRequestAllocationResult contains the allocation result for one request.
 */
export class DeviceRequestAllocationResult extends Model<IDeviceRequestAllocationResult> implements IDeviceRequestAllocationResult {
  "adminAccess"?: boolean;
"bindingConditions"?: Array<string>;
"bindingFailureConditions"?: Array<string>;
"consumedCapacity"?: {
  [key: string]: IIoK8sApimachineryPkgApiResourceQuantity;
};
"device": string;
"driver": string;
"pool": string;
"request": string;
"shareID"?: string;
"tolerations"?: Array<IIoK8sApiResourceV1beta2DeviceToleration>;

constructor(data?: ModelData<IDeviceRequestAllocationResult>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(DeviceRequestAllocationResult, validate as ValidateFunc<IDeviceRequestAllocationResult>);

export type {
  IDeviceRequestAllocationResult as IIoK8sApiResourceV1beta2DeviceRequestAllocationResult,
  DeviceRequestAllocationResult as IoK8sApiResourceV1beta2DeviceRequestAllocationResult
};
