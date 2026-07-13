import { IIoK8sApiCoreV1ResourceHealth } from "./ResourceHealth.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../_schemas/IoK8sApiCoreV1ResourceStatus.js";

/**
 * ResourceStatus represents the status of a single resource allocated to a Pod.
 */
export interface IResourceStatus {
  /**
 * Name of the resource. Must be unique within the pod and in case of non-DRA resource, match one of the resources from the pod spec. For DRA resources, the value must be "claim:<claim_name>/<request>". When this status is reported about a container, the "claim_name" and "request" must match one of the claims of this container.
 */
"name": string;
/**
 * List of unique resources health. Each element in the list contains an unique resource ID and its health. At a minimum, for the lifetime of a Pod, resource ID must uniquely identify the resource allocated to the Pod on the Node. If other Pod on the same Node reports the status with the same resource ID, it must be the same resource they share. See ResourceID type definition for a specific format it has in various use cases.
 */
"resources"?: Array<IIoK8sApiCoreV1ResourceHealth>;
}

/**
 * ResourceStatus represents the status of a single resource allocated to a Pod.
 */
export class ResourceStatus extends Model<IResourceStatus> implements IResourceStatus {
  "name": string;
"resources"?: Array<IIoK8sApiCoreV1ResourceHealth>;

constructor(data?: ModelData<IResourceStatus>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(ResourceStatus, validate as ValidateFunc<IResourceStatus>);

export type {
  IResourceStatus as IIoK8sApiCoreV1ResourceStatus,
  ResourceStatus as IoK8sApiCoreV1ResourceStatus
};
