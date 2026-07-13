import { IIoK8sApiResourceV1beta2DeviceTaintSelector } from "./DeviceTaintSelector.ts";
import { IIoK8sApiResourceV1beta2DeviceTaint } from "./DeviceTaint.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/resource.k8s.io/v1beta2/DeviceTaintRuleSpec.js";

/**
 * DeviceTaintRuleSpec specifies the selector and one taint.
 */
export interface IDeviceTaintRuleSpec {
  /**
 * DeviceSelector defines which device(s) the taint is applied to. All selector criteria must be satisfied for a device to match. The empty selector matches all devices. Without a selector, no devices are matches.
 */
"deviceSelector"?: IIoK8sApiResourceV1beta2DeviceTaintSelector;
/**
 * The taint that gets applied to matching devices.
 */
"taint": IIoK8sApiResourceV1beta2DeviceTaint;
}

/**
 * DeviceTaintRuleSpec specifies the selector and one taint.
 */
export class DeviceTaintRuleSpec extends Model<IDeviceTaintRuleSpec> implements IDeviceTaintRuleSpec {
  "deviceSelector"?: IIoK8sApiResourceV1beta2DeviceTaintSelector;
"taint": IIoK8sApiResourceV1beta2DeviceTaint;

constructor(data?: ModelData<IDeviceTaintRuleSpec>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(DeviceTaintRuleSpec, validate as ValidateFunc<IDeviceTaintRuleSpec>);

export type {
  IDeviceTaintRuleSpec as IIoK8sApiResourceV1beta2DeviceTaintRuleSpec,
  DeviceTaintRuleSpec as IoK8sApiResourceV1beta2DeviceTaintRuleSpec
};
