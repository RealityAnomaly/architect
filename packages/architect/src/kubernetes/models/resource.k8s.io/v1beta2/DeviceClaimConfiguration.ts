import { IIoK8sApiResourceV1beta2OpaqueDeviceConfiguration } from "./OpaqueDeviceConfiguration.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiResourceV1beta2DeviceClaimConfiguration.js";

/**
 * DeviceClaimConfiguration is used for configuration parameters in DeviceClaim.
 */
export interface IDeviceClaimConfiguration {
  /**
 * Opaque provides driver-specific configuration parameters.
 */
"opaque"?: IIoK8sApiResourceV1beta2OpaqueDeviceConfiguration;
/**
 * Requests lists the names of requests where the configuration applies. If empty, it applies to all requests.
 * 
 * References to subrequests must include the name of the main request and may include the subrequest using the format <main request>[/<subrequest>]. If just the main request is given, the configuration applies to all subrequests.
 */
"requests"?: Array<string>;
}

/**
 * DeviceClaimConfiguration is used for configuration parameters in DeviceClaim.
 */
export class DeviceClaimConfiguration extends Model<IDeviceClaimConfiguration> implements IDeviceClaimConfiguration {
  "opaque"?: IIoK8sApiResourceV1beta2OpaqueDeviceConfiguration;
"requests"?: Array<string>;

constructor(data?: ModelData<IDeviceClaimConfiguration>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(DeviceClaimConfiguration, validate as ValidateFunc<IDeviceClaimConfiguration>);

export type {
  IDeviceClaimConfiguration as IIoK8sApiResourceV1beta2DeviceClaimConfiguration,
  DeviceClaimConfiguration as IoK8sApiResourceV1beta2DeviceClaimConfiguration
};
