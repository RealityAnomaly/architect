import { IIoK8sApiResourceV1alpha3OpaqueDeviceConfiguration } from "./OpaqueDeviceConfiguration.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/resource.k8s.io/v1alpha3/DeviceClaimConfiguration.js";

/**
 * DeviceClaimConfiguration is used for configuration parameters in DeviceClaim.
 */
export interface IDeviceClaimConfiguration {
  /**
 * Opaque provides driver-specific configuration parameters.
 */
"opaque"?: IIoK8sApiResourceV1alpha3OpaqueDeviceConfiguration;
/**
 * Requests lists the names of requests where the configuration applies. If empty, it applies to all requests.
 */
"requests"?: Array<string>;
}

/**
 * DeviceClaimConfiguration is used for configuration parameters in DeviceClaim.
 */
export class DeviceClaimConfiguration extends Model<IDeviceClaimConfiguration> implements IDeviceClaimConfiguration {
  "opaque"?: IIoK8sApiResourceV1alpha3OpaqueDeviceConfiguration;
"requests"?: Array<string>;

constructor(data?: ModelData<IDeviceClaimConfiguration>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(DeviceClaimConfiguration, validate as ValidateFunc<IDeviceClaimConfiguration>);

export type {
  IDeviceClaimConfiguration as IIoK8sApiResourceV1alpha3DeviceClaimConfiguration,
  DeviceClaimConfiguration as IoK8sApiResourceV1alpha3DeviceClaimConfiguration
};
