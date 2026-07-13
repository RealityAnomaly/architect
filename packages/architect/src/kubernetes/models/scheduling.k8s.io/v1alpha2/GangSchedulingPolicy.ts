import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiSchedulingV1alpha2GangSchedulingPolicy.js";

/**
 * GangSchedulingPolicy defines the parameters for gang scheduling.
 */
export interface IGangSchedulingPolicy {
  /**
 * MinCount is the minimum number of pods that must be schedulable or scheduled at the same time for the scheduler to admit the entire group. It must be a positive integer.
 */
"minCount": number;
}

/**
 * GangSchedulingPolicy defines the parameters for gang scheduling.
 */
export class GangSchedulingPolicy extends Model<IGangSchedulingPolicy> implements IGangSchedulingPolicy {
  "minCount": number;

constructor(data?: ModelData<IGangSchedulingPolicy>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(GangSchedulingPolicy, validate as ValidateFunc<IGangSchedulingPolicy>);

export type {
  IGangSchedulingPolicy as IIoK8sApiSchedulingV1alpha2GangSchedulingPolicy,
  GangSchedulingPolicy as IoK8sApiSchedulingV1alpha2GangSchedulingPolicy
};
