import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiResourceV1alpha3DeviceAttribute.js";

/**
 * DeviceAttribute must have exactly one field set.
 */
export interface IDeviceAttribute {
  /**
 * BoolValue is a true/false value.
 */
"bool"?: boolean;
/**
 * IntValue is a number.
 */
"int"?: number;
/**
 * StringValue is a string. Must not be longer than 64 characters.
 */
"string"?: string;
/**
 * VersionValue is a semantic version according to semver.org spec 2.0.0. Must not be longer than 64 characters.
 */
"version"?: string;
}

/**
 * DeviceAttribute must have exactly one field set.
 */
export class DeviceAttribute extends Model<IDeviceAttribute> implements IDeviceAttribute {
  "bool"?: boolean;
"int"?: number;
"string"?: string;
"version"?: string;

constructor(data?: ModelData<IDeviceAttribute>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(DeviceAttribute, validate as ValidateFunc<IDeviceAttribute>);

export type {
  IDeviceAttribute as IIoK8sApiResourceV1alpha3DeviceAttribute,
  DeviceAttribute as IoK8sApiResourceV1alpha3DeviceAttribute
};
