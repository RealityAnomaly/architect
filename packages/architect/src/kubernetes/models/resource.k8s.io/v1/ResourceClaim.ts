import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "../../../apimachinery/apis/meta/v1/ObjectMeta.ts";
import { IIoK8sApiResourceV1ResourceClaimSpec } from "./ResourceClaimSpec.ts";
import { IIoK8sApiResourceV1ResourceClaimStatus } from "./ResourceClaimStatus.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/architect/kubernetes/types/meta";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiResourceV1ResourceClaim.js";

/**
 * ResourceClaim describes a request for access to resources in the cluster, for use by workloads. For example, if a workload needs an accelerator device with specific properties, this is how that request is expressed. The status stanza tracks whether this claim has been satisfied and what specific resources have been allocated.
 */
export interface IResourceClaim extends TypeMeta {
  "apiVersion": "resource.k8s.io/v1";
"kind": "ResourceClaim";
/**
 * Standard object metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * Spec describes what is being requested and how to configure it. The spec is immutable.
 */
"spec": IIoK8sApiResourceV1ResourceClaimSpec;
/**
 * Status describes whether the claim is ready to use and what has been allocated.
 */
"status"?: IIoK8sApiResourceV1ResourceClaimStatus;
}

/**
 * ResourceClaim describes a request for access to resources in the cluster, for use by workloads. For example, if a workload needs an accelerator device with specific properties, this is how that request is expressed. The status stanza tracks whether this claim has been satisfied and what specific resources have been allocated.
 */
export class ResourceClaim extends Model<IResourceClaim> implements IResourceClaim {
  "apiVersion": IResourceClaim["apiVersion"];
"kind": IResourceClaim["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
"spec": IIoK8sApiResourceV1ResourceClaimSpec;
"status"?: IIoK8sApiResourceV1ResourceClaimStatus;

static apiVersion: IResourceClaim["apiVersion"] = "resource.k8s.io/v1";
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
  IResourceClaim as IIoK8sApiResourceV1ResourceClaim,
  ResourceClaim as IoK8sApiResourceV1ResourceClaim
};
