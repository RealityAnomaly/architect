import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/resource.k8s.io/v1beta2/DeviceTaintSelector.js";

/**
 * DeviceTaintSelector defines which device(s) a DeviceTaintRule applies to. The empty selector matches all devices. Without a selector, no devices are matched.
 */
export interface IDeviceTaintSelector {
  /**
 * If device is set, only devices with that name are selected. This field corresponds to slice.spec.devices[].name.
 * 
 * Setting also driver and pool may be required to avoid ambiguity, but is not required.
 */
"device"?: string;
/**
 * If driver is set, only devices from that driver are selected. This fields corresponds to slice.spec.driver.
 */
"driver"?: string;
/**
 * If pool is set, only devices in that pool are selected.
 * 
 * Also setting the driver name may be useful to avoid ambiguity when different drivers use the same pool name, but this is not required because selecting pools from different drivers may also be useful, for example when drivers with node-local devices use the node name as their pool name.
 */
"pool"?: string;
}

/**
 * DeviceTaintSelector defines which device(s) a DeviceTaintRule applies to. The empty selector matches all devices. Without a selector, no devices are matched.
 */
export class DeviceTaintSelector extends Model<IDeviceTaintSelector> implements IDeviceTaintSelector {
  "device"?: string;
"driver"?: string;
"pool"?: string;

constructor(data?: ModelData<IDeviceTaintSelector>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(DeviceTaintSelector, validate as ValidateFunc<IDeviceTaintSelector>);

export type {
  IDeviceTaintSelector as IIoK8sApiResourceV1beta2DeviceTaintSelector,
  DeviceTaintSelector as IoK8sApiResourceV1beta2DeviceTaintSelector
};
