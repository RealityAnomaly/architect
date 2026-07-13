import { IIoK8sApiSchedulingV1alpha2PodGroupTemplateReference } from "./PodGroupTemplateReference.ts";
import { IIoK8sApiSchedulingV1alpha2PodGroupResourceClaim } from "./PodGroupResourceClaim.ts";
import { IIoK8sApiSchedulingV1alpha2PodGroupSchedulingConstraints } from "./PodGroupSchedulingConstraints.ts";
import { IIoK8sApiSchedulingV1alpha2PodGroupSchedulingPolicy } from "./PodGroupSchedulingPolicy.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/scheduling.k8s.io/v1alpha2/PodGroupSpec.js";

/**
 * PodGroupSpec defines the desired state of a PodGroup.
 */
export interface IPodGroupSpec {
  /**
 * DisruptionMode defines the mode in which a given PodGroup can be disrupted. Controllers are expected to fill this field by copying it from a PodGroupTemplate. One of Pod, PodGroup. Defaults to Pod if unset. This field is immutable. This field is available only when the WorkloadAwarePreemption feature gate is enabled.
 */
"disruptionMode"?: string;
/**
 * PodGroupTemplateRef references an optional PodGroup template within other object (e.g. Workload) that was used to create the PodGroup. This field is immutable.
 */
"podGroupTemplateRef"?: IIoK8sApiSchedulingV1alpha2PodGroupTemplateReference;
/**
 * Priority is the value of priority of this pod group. Various system components use this field to find the priority of the pod group. When Priority Admission Controller is enabled, it prevents users from setting this field. The admission controller populates this field from PriorityClassName. The higher the value, the higher the priority. This field is immutable. This field is available only when the WorkloadAwarePreemption feature gate is enabled.
 */
"priority"?: number;
/**
 * PriorityClassName defines the priority that should be considered when scheduling this pod group. Controllers are expected to fill this field by copying it from a PodGroupTemplate. Otherwise, it is validated and resolved similarly to the PriorityClassName on PodGroupTemplate (i.e. if no priority class is specified, admission control can set this to the global default priority class if it exists. Otherwise, the pod group's priority will be zero). This field is immutable. This field is available only when the WorkloadAwarePreemption feature gate is enabled.
 */
"priorityClassName"?: string;
/**
 * ResourceClaims defines which ResourceClaims may be shared among Pods in the group. Pods consume the devices allocated to a PodGroup's claim by defining a claim in its own Spec.ResourceClaims that matches the PodGroup's claim exactly. The claim must have the same name and refer to the same ResourceClaim or ResourceClaimTemplate.
 * 
 * This is an alpha-level field and requires that the DRAWorkloadResourceClaims feature gate is enabled.
 * 
 * This field is immutable.
 */
"resourceClaims"?: Array<IIoK8sApiSchedulingV1alpha2PodGroupResourceClaim>;
/**
 * SchedulingConstraints defines optional scheduling constraints (e.g. topology) for this PodGroup. Controllers are expected to fill this field by copying it from a PodGroupTemplate. This field is immutable. This field is only available when the TopologyAwareWorkloadScheduling feature gate is enabled.
 */
"schedulingConstraints"?: IIoK8sApiSchedulingV1alpha2PodGroupSchedulingConstraints;
/**
 * SchedulingPolicy defines the scheduling policy for this instance of the PodGroup. Controllers are expected to fill this field by copying it from a PodGroupTemplate. This field is immutable.
 */
"schedulingPolicy": IIoK8sApiSchedulingV1alpha2PodGroupSchedulingPolicy;
}

/**
 * PodGroupSpec defines the desired state of a PodGroup.
 */
export class PodGroupSpec extends Model<IPodGroupSpec> implements IPodGroupSpec {
  "disruptionMode"?: string;
"podGroupTemplateRef"?: IIoK8sApiSchedulingV1alpha2PodGroupTemplateReference;
"priority"?: number;
"priorityClassName"?: string;
"resourceClaims"?: Array<IIoK8sApiSchedulingV1alpha2PodGroupResourceClaim>;
"schedulingConstraints"?: IIoK8sApiSchedulingV1alpha2PodGroupSchedulingConstraints;
"schedulingPolicy": IIoK8sApiSchedulingV1alpha2PodGroupSchedulingPolicy;

constructor(data?: ModelData<IPodGroupSpec>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(PodGroupSpec, validate as ValidateFunc<IPodGroupSpec>);

export type {
  IPodGroupSpec as IIoK8sApiSchedulingV1alpha2PodGroupSpec,
  PodGroupSpec as IoK8sApiSchedulingV1alpha2PodGroupSpec
};
