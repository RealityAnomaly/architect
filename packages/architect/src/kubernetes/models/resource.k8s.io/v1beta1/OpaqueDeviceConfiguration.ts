import { IIoK8sApimachineryPkgRuntimeRawExtension } from "../../../apimachinery/runtime/RawExtension.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiResourceV1beta1OpaqueDeviceConfiguration.js";

/**
 * OpaqueDeviceConfiguration contains configuration parameters for a driver in a format defined by the driver vendor.
 */
export interface IOpaqueDeviceConfiguration {
  /**
 * Driver is used to determine which kubelet plugin needs to be passed these configuration parameters.
 * 
 * An admission policy provided by the driver developer could use this to decide whether it needs to validate them.
 * 
 * Must be a DNS subdomain and should end with a DNS domain owned by the vendor of the driver. It should use only lower case characters.
 */
"driver": string;
/**
 * Parameters can contain arbitrary data. It is the responsibility of the driver developer to handle validation and versioning. Typically this includes self-identification and a version ("kind" + "apiVersion" for Kubernetes types), with conversion between different versions.
 * 
 * The length of the raw data must be smaller or equal to 10 Ki.
 */
"parameters": IIoK8sApimachineryPkgRuntimeRawExtension;
}

/**
 * OpaqueDeviceConfiguration contains configuration parameters for a driver in a format defined by the driver vendor.
 */
export class OpaqueDeviceConfiguration extends Model<IOpaqueDeviceConfiguration> implements IOpaqueDeviceConfiguration {
  "driver": string;
"parameters": IIoK8sApimachineryPkgRuntimeRawExtension;

constructor(data?: ModelData<IOpaqueDeviceConfiguration>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(OpaqueDeviceConfiguration, validate as ValidateFunc<IOpaqueDeviceConfiguration>);

export type {
  IOpaqueDeviceConfiguration as IIoK8sApiResourceV1beta1OpaqueDeviceConfiguration,
  OpaqueDeviceConfiguration as IoK8sApiResourceV1beta1OpaqueDeviceConfiguration
};
