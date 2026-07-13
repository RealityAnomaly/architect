import { IIoK8sApiResourceV1alpha3OpaqueDeviceConfiguration } from "./OpaqueDeviceConfiguration.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiResourceV1alpha3DeviceAllocationConfiguration.js";

/**
 * DeviceAllocationConfiguration gets embedded in an AllocationResult.
 */
export interface IDeviceAllocationConfiguration {
  /**
 * Opaque provides driver-specific configuration parameters.
 */
"opaque"?: IIoK8sApiResourceV1alpha3OpaqueDeviceConfiguration;
/**
 * Requests lists the names of requests where the configuration applies. If empty, its applies to all requests.
 */
"requests"?: Array<string>;
/**
 * Source records whether the configuration comes from a class and thus is not something that a normal user would have been able to set or from a claim.
 */
"source": string;
}

/**
 * DeviceAllocationConfiguration gets embedded in an AllocationResult.
 */
export class DeviceAllocationConfiguration extends Model<IDeviceAllocationConfiguration> implements IDeviceAllocationConfiguration {
  "opaque"?: IIoK8sApiResourceV1alpha3OpaqueDeviceConfiguration;
"requests"?: Array<string>;
"source": string;

constructor(data?: ModelData<IDeviceAllocationConfiguration>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(DeviceAllocationConfiguration, validate as ValidateFunc<IDeviceAllocationConfiguration>);

export type {
  IDeviceAllocationConfiguration as IIoK8sApiResourceV1alpha3DeviceAllocationConfiguration,
  DeviceAllocationConfiguration as IoK8sApiResourceV1alpha3DeviceAllocationConfiguration
};
