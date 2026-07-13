import { IIoK8sApiResourceV1alpha3DeviceAllocationResult } from "./DeviceAllocationResult.ts";
import { IIoK8sApiCoreV1NodeSelector } from "../../v1/NodeSelector.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/resource.k8s.io/v1alpha3/AllocationResult.js";

/**
 * AllocationResult contains attributes of an allocated resource.
 */
export interface IAllocationResult {
  /**
 * Devices is the result of allocating devices.
 */
"devices"?: IIoK8sApiResourceV1alpha3DeviceAllocationResult;
/**
 * NodeSelector defines where the allocated resources are available. If unset, they are available everywhere.
 */
"nodeSelector"?: IIoK8sApiCoreV1NodeSelector;
}

/**
 * AllocationResult contains attributes of an allocated resource.
 */
export class AllocationResult extends Model<IAllocationResult> implements IAllocationResult {
  "devices"?: IIoK8sApiResourceV1alpha3DeviceAllocationResult;
"nodeSelector"?: IIoK8sApiCoreV1NodeSelector;

constructor(data?: ModelData<IAllocationResult>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(AllocationResult, validate as ValidateFunc<IAllocationResult>);

export type {
  IAllocationResult as IIoK8sApiResourceV1alpha3AllocationResult,
  AllocationResult as IoK8sApiResourceV1alpha3AllocationResult
};
