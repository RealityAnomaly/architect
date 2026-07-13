import { IIoK8sApimachineryPkgApisMetaV1Condition } from "../../../apimachinery/apis/meta/v1/Condition.ts";
import { IIoK8sApimachineryPkgRuntimeRawExtension } from "../../../apimachinery/runtime/RawExtension.ts";
import { IIoK8sApiResourceV1alpha3NetworkDeviceData } from "./NetworkDeviceData.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/resource.k8s.io/v1alpha3/AllocatedDeviceStatus.js";

/**
 * AllocatedDeviceStatus contains the status of an allocated device, if the driver chooses to report it. This may include driver-specific information.
 */
export interface IAllocatedDeviceStatus {
  /**
 * Conditions contains the latest observation of the device's state. If the device has been configured according to the class and claim config references, the `Ready` condition should be True.
 */
"conditions"?: Array<IIoK8sApimachineryPkgApisMetaV1Condition>;
/**
 * Data contains arbitrary driver-specific data.
 * 
 * The length of the raw data must be smaller or equal to 10 Ki.
 */
"data"?: IIoK8sApimachineryPkgRuntimeRawExtension;
/**
 * Device references one device instance via its name in the driver's resource pool. It must be a DNS label.
 */
"device": string;
/**
 * Driver specifies the name of the DRA driver whose kubelet plugin should be invoked to process the allocation once the claim is needed on a node.
 * 
 * Must be a DNS subdomain and should end with a DNS domain owned by the vendor of the driver.
 */
"driver": string;
/**
 * NetworkData contains network-related information specific to the device.
 */
"networkData"?: IIoK8sApiResourceV1alpha3NetworkDeviceData;
/**
 * This name together with the driver name and the device name field identify which device was allocated (`<driver name>/<pool name>/<device name>`).
 * 
 * Must not be longer than 253 characters and may contain one or more DNS sub-domains separated by slashes.
 */
"pool": string;
}

/**
 * AllocatedDeviceStatus contains the status of an allocated device, if the driver chooses to report it. This may include driver-specific information.
 */
export class AllocatedDeviceStatus extends Model<IAllocatedDeviceStatus> implements IAllocatedDeviceStatus {
  "conditions"?: Array<IIoK8sApimachineryPkgApisMetaV1Condition>;
"data"?: IIoK8sApimachineryPkgRuntimeRawExtension;
"device": string;
"driver": string;
"networkData"?: IIoK8sApiResourceV1alpha3NetworkDeviceData;
"pool": string;

constructor(data?: ModelData<IAllocatedDeviceStatus>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(AllocatedDeviceStatus, validate as ValidateFunc<IAllocatedDeviceStatus>);

export type {
  IAllocatedDeviceStatus as IIoK8sApiResourceV1alpha3AllocatedDeviceStatus,
  AllocatedDeviceStatus as IoK8sApiResourceV1alpha3AllocatedDeviceStatus
};
