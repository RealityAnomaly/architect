import { IIoK8sApiResourceV1beta1OpaqueDeviceConfiguration } from "./OpaqueDeviceConfiguration.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiResourceV1beta1DeviceClassConfiguration.js";

/**
 * DeviceClassConfiguration is used in DeviceClass.
 */
export interface IDeviceClassConfiguration {
  /**
 * Opaque provides driver-specific configuration parameters.
 */
"opaque"?: IIoK8sApiResourceV1beta1OpaqueDeviceConfiguration;
}

/**
 * DeviceClassConfiguration is used in DeviceClass.
 */
export class DeviceClassConfiguration extends Model<IDeviceClassConfiguration> implements IDeviceClassConfiguration {
  "opaque"?: IIoK8sApiResourceV1beta1OpaqueDeviceConfiguration;

constructor(data?: ModelData<IDeviceClassConfiguration>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(DeviceClassConfiguration, validate as ValidateFunc<IDeviceClassConfiguration>);

export type {
  IDeviceClassConfiguration as IIoK8sApiResourceV1beta1DeviceClassConfiguration,
  DeviceClassConfiguration as IoK8sApiResourceV1beta1DeviceClassConfiguration
};
