import { IIoK8sApiResourceV1alpha1ResourceClaimSchedulingStatus } from "./ResourceClaimSchedulingStatus.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiResourceV1alpha1PodSchedulingStatus.js";

/**
 * PodSchedulingStatus describes where resources for the Pod can be allocated.
 */
export interface IPodSchedulingStatus {
  /**
 * ResourceClaims describes resource availability for each pod.spec.resourceClaim entry where the corresponding ResourceClaim uses "WaitForFirstConsumer" allocation mode.
 */
"resourceClaims"?: Array<IIoK8sApiResourceV1alpha1ResourceClaimSchedulingStatus>;
}

/**
 * PodSchedulingStatus describes where resources for the Pod can be allocated.
 */
export class PodSchedulingStatus extends Model<IPodSchedulingStatus> implements IPodSchedulingStatus {
  "resourceClaims"?: Array<IIoK8sApiResourceV1alpha1ResourceClaimSchedulingStatus>;

constructor(data?: ModelData<IPodSchedulingStatus>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(PodSchedulingStatus, validate as ValidateFunc<IPodSchedulingStatus>);

export type {
  IPodSchedulingStatus as IIoK8sApiResourceV1alpha1PodSchedulingStatus,
  PodSchedulingStatus as IoK8sApiResourceV1alpha1PodSchedulingStatus
};
