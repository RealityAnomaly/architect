import { IIoK8sApiResourceV1alpha2ResourceClaimSchedulingStatus } from "./ResourceClaimSchedulingStatus.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiResourceV1alpha2PodSchedulingContextStatus.js";

/**
 * PodSchedulingContextStatus describes where resources for the Pod can be allocated.
 */
export interface IPodSchedulingContextStatus {
  /**
 * ResourceClaims describes resource availability for each pod.spec.resourceClaim entry where the corresponding ResourceClaim uses "WaitForFirstConsumer" allocation mode.
 */
"resourceClaims"?: Array<IIoK8sApiResourceV1alpha2ResourceClaimSchedulingStatus>;
}

/**
 * PodSchedulingContextStatus describes where resources for the Pod can be allocated.
 */
export class PodSchedulingContextStatus extends Model<IPodSchedulingContextStatus> implements IPodSchedulingContextStatus {
  "resourceClaims"?: Array<IIoK8sApiResourceV1alpha2ResourceClaimSchedulingStatus>;

constructor(data?: ModelData<IPodSchedulingContextStatus>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(PodSchedulingContextStatus, validate as ValidateFunc<IPodSchedulingContextStatus>);

export type {
  IPodSchedulingContextStatus as IIoK8sApiResourceV1alpha2PodSchedulingContextStatus,
  PodSchedulingContextStatus as IoK8sApiResourceV1alpha2PodSchedulingContextStatus
};
