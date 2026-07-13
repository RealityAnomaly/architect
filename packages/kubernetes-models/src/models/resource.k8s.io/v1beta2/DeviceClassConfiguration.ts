import { IIoK8sApiResourceV1beta2OpaqueDeviceConfiguration } from "./OpaqueDeviceConfiguration.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/resource.k8s.io/v1beta2/DeviceClassConfiguration.js";

/**
 * DeviceClassConfiguration is used in DeviceClass.
 */
export interface IDeviceClassConfiguration {
  /**
 * Opaque provides driver-specific configuration parameters.
 */
"opaque"?: IIoK8sApiResourceV1beta2OpaqueDeviceConfiguration;
}

/**
 * DeviceClassConfiguration is used in DeviceClass.
 */
export class DeviceClassConfiguration extends Model<IDeviceClassConfiguration> implements IDeviceClassConfiguration {
  "opaque"?: IIoK8sApiResourceV1beta2OpaqueDeviceConfiguration;

constructor(data?: ModelData<IDeviceClassConfiguration>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(DeviceClassConfiguration, validate as ValidateFunc<IDeviceClassConfiguration>);

export type {
  IDeviceClassConfiguration as IIoK8sApiResourceV1beta2DeviceClassConfiguration,
  DeviceClassConfiguration as IoK8sApiResourceV1beta2DeviceClassConfiguration
};
