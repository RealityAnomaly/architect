import { IIoK8sApimachineryPkgApiResourceQuantity } from "../../../apimachinery/api/resource/Quantity.ts";
import { IIoK8sApiResourceV1CapacityRequestPolicyRange } from "./CapacityRequestPolicyRange.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiResourceV1CapacityRequestPolicy.js";

/**
 * CapacityRequestPolicy defines how requests consume device capacity.
 * 
 * Must not set more than one ValidRequestValues.
 */
export interface ICapacityRequestPolicy {
  /**
 * Default specifies how much of this capacity is consumed by a request that does not contain an entry for it in DeviceRequest's Capacity.
 */
"default"?: IIoK8sApimachineryPkgApiResourceQuantity;
/**
 * ValidRange defines an acceptable quantity value range in consuming requests.
 * 
 * If this field is set, Default must be defined and it must fall within the defined ValidRange.
 * 
 * If the requested amount does not fall within the defined range, the request violates the policy, and this device cannot be allocated.
 * 
 * If the request doesn't contain this capacity entry, Default value is used.
 */
"validRange"?: IIoK8sApiResourceV1CapacityRequestPolicyRange;
/**
 * ValidValues defines a set of acceptable quantity values in consuming requests.
 * 
 * Must not contain more than 10 entries. Must be sorted in ascending order.
 * 
 * If this field is set, Default must be defined and it must be included in ValidValues list.
 * 
 * If the requested amount does not match any valid value but smaller than some valid values, the scheduler calculates the smallest valid value that is greater than or equal to the request. That is: min(ceil(requestedValue) ∈ validValues), where requestedValue ≤ max(validValues).
 * 
 * If the requested amount exceeds all valid values, the request violates the policy, and this device cannot be allocated.
 */
"validValues"?: Array<IIoK8sApimachineryPkgApiResourceQuantity>;
}

/**
 * CapacityRequestPolicy defines how requests consume device capacity.
 * 
 * Must not set more than one ValidRequestValues.
 */
export class CapacityRequestPolicy extends Model<ICapacityRequestPolicy> implements ICapacityRequestPolicy {
  "default"?: IIoK8sApimachineryPkgApiResourceQuantity;
"validRange"?: IIoK8sApiResourceV1CapacityRequestPolicyRange;
"validValues"?: Array<IIoK8sApimachineryPkgApiResourceQuantity>;

constructor(data?: ModelData<ICapacityRequestPolicy>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(CapacityRequestPolicy, validate as ValidateFunc<ICapacityRequestPolicy>);

export type {
  ICapacityRequestPolicy as IIoK8sApiResourceV1CapacityRequestPolicy,
  CapacityRequestPolicy as IoK8sApiResourceV1CapacityRequestPolicy
};
