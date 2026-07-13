import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/resource.k8s.io/v1alpha1/ResourceClaimSchedulingStatus.js";

/**
 * ResourceClaimSchedulingStatus contains information about one particular ResourceClaim with "WaitForFirstConsumer" allocation mode.
 */
export interface IResourceClaimSchedulingStatus {
  /**
 * Name matches the pod.spec.resourceClaims[\*].Name field.
 */
"name"?: string;
/**
 * UnsuitableNodes lists nodes that the ResourceClaim cannot be allocated for.
 * 
 * The size of this field is limited to 128, the same as for PodSchedulingSpec.PotentialNodes. This may get increased in the future, but not reduced.
 */
"unsuitableNodes"?: Array<string>;
}

/**
 * ResourceClaimSchedulingStatus contains information about one particular ResourceClaim with "WaitForFirstConsumer" allocation mode.
 */
export class ResourceClaimSchedulingStatus extends Model<IResourceClaimSchedulingStatus> implements IResourceClaimSchedulingStatus {
  "name"?: string;
"unsuitableNodes"?: Array<string>;

constructor(data?: ModelData<IResourceClaimSchedulingStatus>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(ResourceClaimSchedulingStatus, validate as ValidateFunc<IResourceClaimSchedulingStatus>);

export type {
  IResourceClaimSchedulingStatus as IIoK8sApiResourceV1alpha1ResourceClaimSchedulingStatus,
  ResourceClaimSchedulingStatus as IoK8sApiResourceV1alpha1ResourceClaimSchedulingStatus
};
