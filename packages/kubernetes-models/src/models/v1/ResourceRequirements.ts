import { IIoK8sApiCoreV1ResourceClaim } from "./ResourceClaim.ts";
import { IIoK8sApimachineryPkgApiResourceQuantity } from "../../apimachinery/api/resource/Quantity.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../_schemas/v1/ResourceRequirements.js";

/**
 * ResourceRequirements describes the compute resource requirements.
 */
export interface IResourceRequirements {
  /**
 * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container.
 * 
 * This field depends on the DynamicResourceAllocation feature gate.
 * 
 * This field is immutable. It can only be set for containers.
 */
"claims"?: Array<IIoK8sApiCoreV1ResourceClaim>;
/**
 * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
 */
"limits"?: {
  [key: string]: IIoK8sApimachineryPkgApiResourceQuantity;
};
/**
 * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
 */
"requests"?: {
  [key: string]: IIoK8sApimachineryPkgApiResourceQuantity;
};
}

/**
 * ResourceRequirements describes the compute resource requirements.
 */
export class ResourceRequirements extends Model<IResourceRequirements> implements IResourceRequirements {
  "claims"?: Array<IIoK8sApiCoreV1ResourceClaim>;
"limits"?: {
  [key: string]: IIoK8sApimachineryPkgApiResourceQuantity;
};
"requests"?: {
  [key: string]: IIoK8sApimachineryPkgApiResourceQuantity;
};

constructor(data?: ModelData<IResourceRequirements>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(ResourceRequirements, validate as ValidateFunc<IResourceRequirements>);

export type {
  IResourceRequirements as IIoK8sApiCoreV1ResourceRequirements,
  ResourceRequirements as IoK8sApiCoreV1ResourceRequirements
};
