import { IIoK8sApimachineryPkgApisMetaV1Condition } from "../../../apimachinery/apis/meta/v1/Condition.ts";
import { IIoK8sApiResourceV1alpha3PoolStatus } from "./PoolStatus.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiResourceV1alpha3ResourcePoolStatusRequestStatus.js";

/**
 * ResourcePoolStatusRequestStatus contains the calculated pool status information.
 */
export interface IResourcePoolStatusRequestStatus {
  /**
 * Conditions provide information about the state of the request. A condition with type=Complete or type=Failed will always be set when the status is populated.
 * 
 * Known condition types: - "Complete": True when the request has been processed successfully - "Failed": True when the request could not be processed
 */
"conditions"?: Array<IIoK8sApimachineryPkgApisMetaV1Condition>;
/**
 * PoolCount is the total number of pools that matched the filter criteria, regardless of truncation. This helps users understand how many pools exist even when the response is truncated. A value of 0 means no pools matched the filter criteria.
 */
"poolCount": number;
/**
 * Pools contains the first `spec.limit` matching pools, sorted by driver then pool name. If `len(pools) < poolCount`, the list was truncated. When omitted, no pools matched the request filters.
 */
"pools"?: Array<IIoK8sApiResourceV1alpha3PoolStatus>;
}

/**
 * ResourcePoolStatusRequestStatus contains the calculated pool status information.
 */
export class ResourcePoolStatusRequestStatus extends Model<IResourcePoolStatusRequestStatus> implements IResourcePoolStatusRequestStatus {
  "conditions"?: Array<IIoK8sApimachineryPkgApisMetaV1Condition>;
"poolCount": number;
"pools"?: Array<IIoK8sApiResourceV1alpha3PoolStatus>;

constructor(data?: ModelData<IResourcePoolStatusRequestStatus>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(ResourcePoolStatusRequestStatus, validate as ValidateFunc<IResourcePoolStatusRequestStatus>);

export type {
  IResourcePoolStatusRequestStatus as IIoK8sApiResourceV1alpha3ResourcePoolStatusRequestStatus,
  ResourcePoolStatusRequestStatus as IoK8sApiResourceV1alpha3ResourcePoolStatusRequestStatus
};
