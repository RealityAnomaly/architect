import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiResourceV1alpha3ResourcePoolStatusRequestSpec.js";

/**
 * ResourcePoolStatusRequestSpec defines the filters for the pool status request.
 */
export interface IResourcePoolStatusRequestSpec {
  /**
 * Driver specifies the DRA driver name to filter pools. Only pools from ResourceSlices with this driver will be included. Must be a DNS subdomain (e.g., "gpu.example.com").
 */
"driver": string;
/**
 * Limit optionally specifies the maximum number of pools to return in the status. If more pools match the filter criteria, the response will be truncated (i.e., len(status.pools) < status.poolCount).
 * 
 * Default: 100 Minimum: 1 Maximum: 1000
 */
"limit"?: number;
/**
 * PoolName optionally filters to a specific pool name. If not specified, all pools from the specified driver are included. When specified, must be a non-empty valid resource pool name (DNS subdomains separated by "/").
 */
"poolName"?: string;
}

/**
 * ResourcePoolStatusRequestSpec defines the filters for the pool status request.
 */
export class ResourcePoolStatusRequestSpec extends Model<IResourcePoolStatusRequestSpec> implements IResourcePoolStatusRequestSpec {
  "driver": string;
"limit"?: number;
"poolName"?: string;

constructor(data?: ModelData<IResourcePoolStatusRequestSpec>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(ResourcePoolStatusRequestSpec, validate as ValidateFunc<IResourcePoolStatusRequestSpec>);

export type {
  IResourcePoolStatusRequestSpec as IIoK8sApiResourceV1alpha3ResourcePoolStatusRequestSpec,
  ResourcePoolStatusRequestSpec as IoK8sApiResourceV1alpha3ResourcePoolStatusRequestSpec
};
