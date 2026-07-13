import { IIoK8sApimachineryPkgApisMetaV1Time } from "../../../apimachinery/apis/meta/v1/Time.ts";
import { IIoK8sApiResourceV1DeviceAllocationResult } from "./DeviceAllocationResult.ts";
import { IIoK8sApiCoreV1NodeSelector } from "../../v1/NodeSelector.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/resource.k8s.io/v1/AllocationResult.js";

/**
 * AllocationResult contains attributes of an allocated resource.
 */
export interface IAllocationResult {
  /**
 * AllocationTimestamp stores the time when the resources were allocated. This field is not guaranteed to be set, in which case that time is unknown.
 * 
 * This is a beta field and requires enabling the DRADeviceBindingConditions and DRAResourceClaimDeviceStatus feature gate.
 */
"allocationTimestamp"?: IIoK8sApimachineryPkgApisMetaV1Time;
/**
 * Devices is the result of allocating devices.
 */
"devices"?: IIoK8sApiResourceV1DeviceAllocationResult;
/**
 * NodeSelector defines where the allocated resources are available. If unset, they are available everywhere.
 */
"nodeSelector"?: IIoK8sApiCoreV1NodeSelector;
}

/**
 * AllocationResult contains attributes of an allocated resource.
 */
export class AllocationResult extends Model<IAllocationResult> implements IAllocationResult {
  "allocationTimestamp"?: IIoK8sApimachineryPkgApisMetaV1Time;
"devices"?: IIoK8sApiResourceV1DeviceAllocationResult;
"nodeSelector"?: IIoK8sApiCoreV1NodeSelector;

constructor(data?: ModelData<IAllocationResult>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(AllocationResult, validate as ValidateFunc<IAllocationResult>);

export type {
  IAllocationResult as IIoK8sApiResourceV1AllocationResult,
  AllocationResult as IoK8sApiResourceV1AllocationResult
};
