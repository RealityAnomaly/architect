import { IIoK8sApiResourceV1alpha3DeviceClassConfiguration } from "./DeviceClassConfiguration.ts";
import { IIoK8sApiResourceV1alpha3DeviceSelector } from "./DeviceSelector.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/resource.k8s.io/v1alpha3/DeviceClassSpec.js";

/**
 * DeviceClassSpec is used in a [DeviceClass] to define what can be allocated and how to configure it.
 */
export interface IDeviceClassSpec {
  /**
 * Config defines configuration parameters that apply to each device that is claimed via this class. Some classses may potentially be satisfied by multiple drivers, so each instance of a vendor configuration applies to exactly one driver.
 * 
 * They are passed to the driver, but are not considered while allocating the claim.
 */
"config"?: Array<IIoK8sApiResourceV1alpha3DeviceClassConfiguration>;
/**
 * Each selector must be satisfied by a device which is claimed via this class.
 */
"selectors"?: Array<IIoK8sApiResourceV1alpha3DeviceSelector>;
}

/**
 * DeviceClassSpec is used in a [DeviceClass] to define what can be allocated and how to configure it.
 */
export class DeviceClassSpec extends Model<IDeviceClassSpec> implements IDeviceClassSpec {
  "config"?: Array<IIoK8sApiResourceV1alpha3DeviceClassConfiguration>;
"selectors"?: Array<IIoK8sApiResourceV1alpha3DeviceSelector>;

constructor(data?: ModelData<IDeviceClassSpec>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(DeviceClassSpec, validate as ValidateFunc<IDeviceClassSpec>);

export type {
  IDeviceClassSpec as IIoK8sApiResourceV1alpha3DeviceClassSpec,
  DeviceClassSpec as IoK8sApiResourceV1alpha3DeviceClassSpec
};
