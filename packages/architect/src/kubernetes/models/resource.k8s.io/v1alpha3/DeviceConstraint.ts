import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiResourceV1alpha3DeviceConstraint.js";

/**
 * DeviceConstraint must have exactly one field set besides Requests.
 */
export interface IDeviceConstraint {
  /**
 * MatchAttribute requires that all devices in question have this attribute and that its type and value are the same across those devices.
 * 
 * For example, if you specified "dra.example.com/numa" (a hypothetical example!), then only devices in the same NUMA node will be chosen. A device which does not have that attribute will not be chosen. All devices should use a value of the same type for this attribute because that is part of its specification, but if one device doesn't, then it also will not be chosen.
 * 
 * Must include the domain qualifier.
 */
"matchAttribute"?: string;
/**
 * Requests is a list of the one or more requests in this claim which must co-satisfy this constraint. If a request is fulfilled by multiple devices, then all of the devices must satisfy the constraint. If this is not specified, this constraint applies to all requests in this claim.
 */
"requests"?: Array<string>;
}

/**
 * DeviceConstraint must have exactly one field set besides Requests.
 */
export class DeviceConstraint extends Model<IDeviceConstraint> implements IDeviceConstraint {
  "matchAttribute"?: string;
"requests"?: Array<string>;

constructor(data?: ModelData<IDeviceConstraint>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(DeviceConstraint, validate as ValidateFunc<IDeviceConstraint>);

export type {
  IDeviceConstraint as IIoK8sApiResourceV1alpha3DeviceConstraint,
  DeviceConstraint as IoK8sApiResourceV1alpha3DeviceConstraint
};
