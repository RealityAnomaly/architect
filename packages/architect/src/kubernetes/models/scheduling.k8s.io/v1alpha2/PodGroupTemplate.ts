import { IIoK8sApiSchedulingV1alpha2PodGroupResourceClaim } from "./PodGroupResourceClaim.ts";
import { IIoK8sApiSchedulingV1alpha2PodGroupSchedulingConstraints } from "./PodGroupSchedulingConstraints.ts";
import { IIoK8sApiSchedulingV1alpha2PodGroupSchedulingPolicy } from "./PodGroupSchedulingPolicy.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiSchedulingV1alpha2PodGroupTemplate.js";

/**
 * PodGroupTemplate represents a template for a set of pods with a scheduling policy.
 */
export interface IPodGroupTemplate {
  /**
 * DisruptionMode defines the mode in which a given PodGroup can be disrupted. One of Pod, PodGroup. This field is available only when the WorkloadAwarePreemption feature gate is enabled.
 */
"disruptionMode"?: string;
/**
 * Name is a unique identifier for the PodGroupTemplate within the Workload. It must be a DNS label. This field is immutable.
 */
"name": string;
/**
 * Priority is the value of priority of pod groups created from this template. Various system components use this field to find the priority of the pod group. When Priority Admission Controller is enabled, it prevents users from setting this field. The admission controller populates this field from PriorityClassName. The higher the value, the higher the priority. This field is available only when the WorkloadAwarePreemption feature gate is enabled.
 */
"priority"?: number;
/**
 * PriorityClassName indicates the priority that should be considered when scheduling a pod group created from this template. If no priority class is specified, admission control can set this to the global default priority class if it exists. Otherwise, pod groups created from this template will have the priority set to zero. This field is available only when the WorkloadAwarePreemption feature gate is enabled.
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
 * SchedulingConstraints defines optional scheduling constraints (e.g. topology) for this PodGroupTemplate. This field is only available when the TopologyAwareWorkloadScheduling feature gate is enabled.
 */
"schedulingConstraints"?: IIoK8sApiSchedulingV1alpha2PodGroupSchedulingConstraints;
/**
 * SchedulingPolicy defines the scheduling policy for this PodGroupTemplate.
 */
"schedulingPolicy": IIoK8sApiSchedulingV1alpha2PodGroupSchedulingPolicy;
}

/**
 * PodGroupTemplate represents a template for a set of pods with a scheduling policy.
 */
export class PodGroupTemplate extends Model<IPodGroupTemplate> implements IPodGroupTemplate {
  "disruptionMode"?: string;
"name": string;
"priority"?: number;
"priorityClassName"?: string;
"resourceClaims"?: Array<IIoK8sApiSchedulingV1alpha2PodGroupResourceClaim>;
"schedulingConstraints"?: IIoK8sApiSchedulingV1alpha2PodGroupSchedulingConstraints;
"schedulingPolicy": IIoK8sApiSchedulingV1alpha2PodGroupSchedulingPolicy;

constructor(data?: ModelData<IPodGroupTemplate>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(PodGroupTemplate, validate as ValidateFunc<IPodGroupTemplate>);

export type {
  IPodGroupTemplate as IIoK8sApiSchedulingV1alpha2PodGroupTemplate,
  PodGroupTemplate as IoK8sApiSchedulingV1alpha2PodGroupTemplate
};
