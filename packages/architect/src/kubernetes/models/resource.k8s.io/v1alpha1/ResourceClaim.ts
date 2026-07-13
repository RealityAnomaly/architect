import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "../../../apimachinery/apis/meta/v1/ObjectMeta.ts";
import { IIoK8sApiResourceV1alpha1ResourceClaimSpec } from "./ResourceClaimSpec.ts";
import { IIoK8sApiResourceV1alpha1ResourceClaimStatus } from "./ResourceClaimStatus.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/architect/kubernetes/types/meta";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiResourceV1alpha1ResourceClaim.js";

/**
 * ResourceClaim describes which resources are needed by a resource consumer. Its status tracks whether the resource has been allocated and what the resulting attributes are.
 * 
 * This is an alpha type and requires enabling the DynamicResourceAllocation feature gate.
 */
export interface IResourceClaim extends TypeMeta {
  "apiVersion": "resource.k8s.io/v1alpha1";
"kind": "ResourceClaim";
/**
 * Standard object metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * Spec describes the desired attributes of a resource that then needs to be allocated. It can only be set once when creating the ResourceClaim.
 */
"spec": IIoK8sApiResourceV1alpha1ResourceClaimSpec;
/**
 * Status describes whether the resource is available and with which attributes.
 */
"status"?: IIoK8sApiResourceV1alpha1ResourceClaimStatus;
}

/**
 * ResourceClaim describes which resources are needed by a resource consumer. Its status tracks whether the resource has been allocated and what the resulting attributes are.
 * 
 * This is an alpha type and requires enabling the DynamicResourceAllocation feature gate.
 */
export class ResourceClaim extends Model<IResourceClaim> implements IResourceClaim {
  "apiVersion": IResourceClaim["apiVersion"];
"kind": IResourceClaim["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
"spec": IIoK8sApiResourceV1alpha1ResourceClaimSpec;
"status"?: IIoK8sApiResourceV1alpha1ResourceClaimStatus;

static apiVersion: IResourceClaim["apiVersion"] = "resource.k8s.io/v1alpha1";
static kind: IResourceClaim["kind"] = "ResourceClaim";
static is = createTypeMetaGuard<IResourceClaim>(ResourceClaim);

constructor(data?: ModelData<IResourceClaim>) {
  super();

  this.setDefinedProps({
    apiVersion: ResourceClaim.apiVersion,
    kind: ResourceClaim.kind,
    ...data
  } as IResourceClaim);
}
}

setValidateFunc(ResourceClaim, validate as ValidateFunc<IResourceClaim>);

export type {
  IResourceClaim as IIoK8sApiResourceV1alpha1ResourceClaim,
  ResourceClaim as IoK8sApiResourceV1alpha1ResourceClaim
};
