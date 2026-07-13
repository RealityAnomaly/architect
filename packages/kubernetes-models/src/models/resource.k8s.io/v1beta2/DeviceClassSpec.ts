import { IIoK8sApiResourceV1beta2DeviceClassConfiguration } from "./DeviceClassConfiguration.ts";
import { IIoK8sApiResourceV1beta2DeviceSelector } from "./DeviceSelector.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/resource.k8s.io/v1beta2/DeviceClassSpec.js";

/**
 * DeviceClassSpec is used in a [DeviceClass] to define what can be allocated and how to configure it.
 */
export interface IDeviceClassSpec {
  /**
 * Config defines configuration parameters that apply to each device that is claimed via this class. Some classses may potentially be satisfied by multiple drivers, so each instance of a vendor configuration applies to exactly one driver.
 * 
 * They are passed to the driver, but are not considered while allocating the claim.
 */
"config"?: Array<IIoK8sApiResourceV1beta2DeviceClassConfiguration>;
/**
 * ExtendedResourceName is the extended resource name for the devices of this class. The devices of this class can be used to satisfy a pod's extended resource requests. It has the same format as the name of a pod's extended resource. It should be unique among all the device classes in a cluster. If two device classes have the same name, then the class created later is picked to satisfy a pod's extended resource requests. If two classes are created at the same time, then the name of the class lexicographically sorted first is picked.
 * 
 * This is a beta field.
 */
"extendedResourceName"?: string;
/**
 * Each selector must be satisfied by a device which is claimed via this class.
 */
"selectors"?: Array<IIoK8sApiResourceV1beta2DeviceSelector>;
}

/**
 * DeviceClassSpec is used in a [DeviceClass] to define what can be allocated and how to configure it.
 */
export class DeviceClassSpec extends Model<IDeviceClassSpec> implements IDeviceClassSpec {
  "config"?: Array<IIoK8sApiResourceV1beta2DeviceClassConfiguration>;
"extendedResourceName"?: string;
"selectors"?: Array<IIoK8sApiResourceV1beta2DeviceSelector>;

constructor(data?: ModelData<IDeviceClassSpec>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(DeviceClassSpec, validate as ValidateFunc<IDeviceClassSpec>);

export type {
  IDeviceClassSpec as IIoK8sApiResourceV1beta2DeviceClassSpec,
  DeviceClassSpec as IoK8sApiResourceV1beta2DeviceClassSpec
};
