import { IIoK8sApimachineryPkgApisMetaV1Condition } from "../../../apimachinery/apis/meta/v1/Condition.ts";
import { IIoK8sApiSchedulingV1alpha2PodGroupResourceClaimStatus } from "./PodGroupResourceClaimStatus.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiSchedulingV1alpha2PodGroupStatus.js";

/**
 * PodGroupStatus represents information about the status of a pod group.
 */
export interface IPodGroupStatus {
  /**
 * Conditions represent the latest observations of the PodGroup's state.
 * 
 * Known condition types: - "PodGroupScheduled": Indicates whether the scheduling requirement has been satisfied. - "DisruptionTarget": Indicates whether the PodGroup is about to be terminated
 *   due to disruption such as preemption.
 * 
 * Known reasons for the PodGroupScheduled condition: - "Unschedulable": The PodGroup cannot be scheduled due to resource constraints,
 *   affinity/anti-affinity rules, or insufficient capacity for the gang.
 * - "SchedulerError": The PodGroup cannot be scheduled due to some internal error
 *   that happened during scheduling, for example due to nodeAffinity parsing errors.
 * 
 * Known reasons for the DisruptionTarget condition: - "PreemptionByScheduler": The PodGroup was preempted by the scheduler to make room for
 *   higher-priority PodGroups or Pods.
 */
"conditions"?: Array<IIoK8sApimachineryPkgApisMetaV1Condition>;
/**
 * Status of resource claims.
 */
"resourceClaimStatuses"?: Array<IIoK8sApiSchedulingV1alpha2PodGroupResourceClaimStatus>;
}

/**
 * PodGroupStatus represents information about the status of a pod group.
 */
export class PodGroupStatus extends Model<IPodGroupStatus> implements IPodGroupStatus {
  "conditions"?: Array<IIoK8sApimachineryPkgApisMetaV1Condition>;
"resourceClaimStatuses"?: Array<IIoK8sApiSchedulingV1alpha2PodGroupResourceClaimStatus>;

constructor(data?: ModelData<IPodGroupStatus>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(PodGroupStatus, validate as ValidateFunc<IPodGroupStatus>);

export type {
  IPodGroupStatus as IIoK8sApiSchedulingV1alpha2PodGroupStatus,
  PodGroupStatus as IoK8sApiSchedulingV1alpha2PodGroupStatus
};
