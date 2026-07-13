import { IIoK8sApiResourceV1beta2OpaqueDeviceConfiguration } from "./OpaqueDeviceConfiguration.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/resource.k8s.io/v1beta2/DeviceAllocationConfiguration.js";

/**
 * DeviceAllocationConfiguration gets embedded in an AllocationResult.
 */
export interface IDeviceAllocationConfiguration {
  /**
 * Opaque provides driver-specific configuration parameters.
 */
"opaque"?: IIoK8sApiResourceV1beta2OpaqueDeviceConfiguration;
/**
 * Requests lists the names of requests where the configuration applies. If empty, its applies to all requests.
 * 
 * References to subrequests must include the name of the main request and may include the subrequest using the format <main request>[/<subrequest>]. If just the main request is given, the configuration applies to all subrequests.
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
  "opaque"?: IIoK8sApiResourceV1beta2OpaqueDeviceConfiguration;
"requests"?: Array<string>;
"source": string;

constructor(data?: ModelData<IDeviceAllocationConfiguration>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(DeviceAllocationConfiguration, validate as ValidateFunc<IDeviceAllocationConfiguration>);

export type {
  IDeviceAllocationConfiguration as IIoK8sApiResourceV1beta2DeviceAllocationConfiguration,
  DeviceAllocationConfiguration as IoK8sApiResourceV1beta2DeviceAllocationConfiguration
};
