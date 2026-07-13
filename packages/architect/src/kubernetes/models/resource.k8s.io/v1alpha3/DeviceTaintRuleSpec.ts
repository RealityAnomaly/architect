import { IIoK8sApiResourceV1alpha3DeviceTaintSelector } from "./DeviceTaintSelector.ts";
import { IIoK8sApiResourceV1alpha3DeviceTaint } from "./DeviceTaint.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiResourceV1alpha3DeviceTaintRuleSpec.js";

/**
 * DeviceTaintRuleSpec specifies the selector and one taint.
 */
export interface IDeviceTaintRuleSpec {
  /**
 * DeviceSelector defines which device(s) the taint is applied to. All selector criteria must be satisfied for a device to match. The empty selector matches all devices. Without a selector, no devices are matches.
 */
"deviceSelector"?: IIoK8sApiResourceV1alpha3DeviceTaintSelector;
/**
 * The taint that gets applied to matching devices.
 */
"taint": IIoK8sApiResourceV1alpha3DeviceTaint;
}

/**
 * DeviceTaintRuleSpec specifies the selector and one taint.
 */
export class DeviceTaintRuleSpec extends Model<IDeviceTaintRuleSpec> implements IDeviceTaintRuleSpec {
  "deviceSelector"?: IIoK8sApiResourceV1alpha3DeviceTaintSelector;
"taint": IIoK8sApiResourceV1alpha3DeviceTaint;

constructor(data?: ModelData<IDeviceTaintRuleSpec>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(DeviceTaintRuleSpec, validate as ValidateFunc<IDeviceTaintRuleSpec>);

export type {
  IDeviceTaintRuleSpec as IIoK8sApiResourceV1alpha3DeviceTaintRuleSpec,
  DeviceTaintRuleSpec as IoK8sApiResourceV1alpha3DeviceTaintRuleSpec
};
