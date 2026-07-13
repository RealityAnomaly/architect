import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/resource.k8s.io/v1alpha3/PoolStatus.js";

/**
 * PoolStatus contains status information for a single resource pool.
 */
export interface IPoolStatus {
  /**
 * AllocatedDevices is the number of devices currently allocated to claims. A value of 0 means no devices are allocated. May be unset when validationError is set.
 */
"allocatedDevices"?: number;
/**
 * AvailableDevices is the number of devices available for allocation. This equals TotalDevices - AllocatedDevices - UnavailableDevices. A value of 0 means no devices are currently available. May be unset when validationError is set.
 */
"availableDevices"?: number;
/**
 * Driver is the DRA driver name for this pool. Must be a DNS subdomain (e.g., "gpu.example.com").
 */
"driver": string;
/**
 * Generation is the pool generation observed across all ResourceSlices in this pool. Only the latest generation is reported. During a generation rollout, if not all slices at the latest generation have been published, the pool is included with a validationError and device counts unset.
 */
"generation": number;
/**
 * NodeName is the node this pool is associated with. When omitted, the pool is not associated with a specific node. Must be a valid DNS subdomain name (RFC1123).
 */
"nodeName"?: string;
/**
 * PoolName is the name of the pool. Must be a valid resource pool name (DNS subdomains separated by "/").
 */
"poolName": string;
/**
 * ResourceSliceCount is the number of ResourceSlices that make up this pool. May be unset when validationError is set.
 */
"resourceSliceCount"?: number;
/**
 * TotalDevices is the total number of devices in the pool across all slices. A value of 0 means the pool has no devices. May be unset when validationError is set.
 */
"totalDevices"?: number;
/**
 * UnavailableDevices is the number of devices that are not available due to taints or other conditions, but are not allocated. A value of 0 means all unallocated devices are available. May be unset when validationError is set.
 */
"unavailableDevices"?: number;
/**
 * ValidationError is set when the pool's data could not be fully validated (e.g., incomplete slice publication). When set, device count fields and ResourceSliceCount may be unset.
 */
"validationError"?: string;
}

/**
 * PoolStatus contains status information for a single resource pool.
 */
export class PoolStatus extends Model<IPoolStatus> implements IPoolStatus {
  "allocatedDevices"?: number;
"availableDevices"?: number;
"driver": string;
"generation": number;
"nodeName"?: string;
"poolName": string;
"resourceSliceCount"?: number;
"totalDevices"?: number;
"unavailableDevices"?: number;
"validationError"?: string;

constructor(data?: ModelData<IPoolStatus>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(PoolStatus, validate as ValidateFunc<IPoolStatus>);

export type {
  IPoolStatus as IIoK8sApiResourceV1alpha3PoolStatus,
  PoolStatus as IoK8sApiResourceV1alpha3PoolStatus
};
