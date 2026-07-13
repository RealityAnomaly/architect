import { IIoK8sApiResourceV1beta1CELDeviceSelector } from "./CELDeviceSelector.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/resource.k8s.io/v1beta1/DeviceSelector.js";

/**
 * DeviceSelector must have exactly one field set.
 */
export interface IDeviceSelector {
  /**
 * CEL contains a CEL expression for selecting a device.
 */
"cel"?: IIoK8sApiResourceV1beta1CELDeviceSelector;
}

/**
 * DeviceSelector must have exactly one field set.
 */
export class DeviceSelector extends Model<IDeviceSelector> implements IDeviceSelector {
  "cel"?: IIoK8sApiResourceV1beta1CELDeviceSelector;

constructor(data?: ModelData<IDeviceSelector>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(DeviceSelector, validate as ValidateFunc<IDeviceSelector>);

export type {
  IDeviceSelector as IIoK8sApiResourceV1beta1DeviceSelector,
  DeviceSelector as IoK8sApiResourceV1beta1DeviceSelector
};
