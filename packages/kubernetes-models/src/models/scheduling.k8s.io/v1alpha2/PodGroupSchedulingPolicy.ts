import { IIoK8sApiSchedulingV1alpha2BasicSchedulingPolicy } from "./BasicSchedulingPolicy.ts";
import { IIoK8sApiSchedulingV1alpha2GangSchedulingPolicy } from "./GangSchedulingPolicy.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/scheduling.k8s.io/v1alpha2/PodGroupSchedulingPolicy.js";

/**
 * PodGroupSchedulingPolicy defines the scheduling configuration for a PodGroup. Exactly one policy must be set.
 */
export interface IPodGroupSchedulingPolicy {
  /**
 * Basic specifies that the pods in this group should be scheduled using standard Kubernetes scheduling behavior.
 */
"basic"?: IIoK8sApiSchedulingV1alpha2BasicSchedulingPolicy;
/**
 * Gang specifies that the pods in this group should be scheduled using all-or-nothing semantics.
 */
"gang"?: IIoK8sApiSchedulingV1alpha2GangSchedulingPolicy;
}

/**
 * PodGroupSchedulingPolicy defines the scheduling configuration for a PodGroup. Exactly one policy must be set.
 */
export class PodGroupSchedulingPolicy extends Model<IPodGroupSchedulingPolicy> implements IPodGroupSchedulingPolicy {
  "basic"?: IIoK8sApiSchedulingV1alpha2BasicSchedulingPolicy;
"gang"?: IIoK8sApiSchedulingV1alpha2GangSchedulingPolicy;

constructor(data?: ModelData<IPodGroupSchedulingPolicy>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(PodGroupSchedulingPolicy, validate as ValidateFunc<IPodGroupSchedulingPolicy>);

export type {
  IPodGroupSchedulingPolicy as IIoK8sApiSchedulingV1alpha2PodGroupSchedulingPolicy,
  PodGroupSchedulingPolicy as IoK8sApiSchedulingV1alpha2PodGroupSchedulingPolicy
};
