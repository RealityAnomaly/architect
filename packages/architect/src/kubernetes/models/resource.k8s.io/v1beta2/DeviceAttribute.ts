import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiResourceV1beta2DeviceAttribute.js";

/**
 * DeviceAttribute must have exactly one field set.
 */
export interface IDeviceAttribute {
  /**
 * BoolValue is a true/false value.
 */
"bool"?: boolean;
/**
 * BoolValues is a non-empty list of true/false values.
 */
"bools"?: Array<boolean>;
/**
 * IntValue is a number.
 */
"int"?: number;
/**
 * IntValues is a non-empty list of numbers.
 * 
 * This is an alpha field and requires enabling the DRAListTypeAttributes feature gate.
 */
"ints"?: Array<number>;
/**
 * StringValue is a string. Must not be longer than 64 characters.
 */
"string"?: string;
/**
 * StringValues is a non-empty list of strings. Each string must not be longer than 64 characters.
 * 
 * This is an alpha field and requires enabling the DRAListTypeAttributes feature gate.
 */
"strings"?: Array<string>;
/**
 * VersionValue is a semantic version according to semver.org spec 2.0.0. Must not be longer than 64 characters.
 */
"version"?: string;
/**
 * VersionValues is a non-empty list of semantic versions according to semver.org spec 2.0.0. Each version string must not be longer than 64 characters.
 * 
 * This is an alpha field and requires enabling the DRAListTypeAttributes feature gate.
 */
"versions"?: Array<string>;
}

/**
 * DeviceAttribute must have exactly one field set.
 */
export class DeviceAttribute extends Model<IDeviceAttribute> implements IDeviceAttribute {
  "bool"?: boolean;
"bools"?: Array<boolean>;
"int"?: number;
"ints"?: Array<number>;
"string"?: string;
"strings"?: Array<string>;
"version"?: string;
"versions"?: Array<string>;

constructor(data?: ModelData<IDeviceAttribute>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(DeviceAttribute, validate as ValidateFunc<IDeviceAttribute>);

export type {
  IDeviceAttribute as IIoK8sApiResourceV1beta2DeviceAttribute,
  DeviceAttribute as IoK8sApiResourceV1beta2DeviceAttribute
};
