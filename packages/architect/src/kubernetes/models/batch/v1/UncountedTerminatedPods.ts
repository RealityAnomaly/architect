import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiBatchV1UncountedTerminatedPods.js";

/**
 * UncountedTerminatedPods holds UIDs of Pods that have terminated but haven't been accounted in Job status counters.
 */
export interface IUncountedTerminatedPods {
  /**
 * failed holds UIDs of failed Pods.
 */
"failed"?: Array<string>;
/**
 * succeeded holds UIDs of succeeded Pods.
 */
"succeeded"?: Array<string>;
}

/**
 * UncountedTerminatedPods holds UIDs of Pods that have terminated but haven't been accounted in Job status counters.
 */
export class UncountedTerminatedPods extends Model<IUncountedTerminatedPods> implements IUncountedTerminatedPods {
  "failed"?: Array<string>;
"succeeded"?: Array<string>;

constructor(data?: ModelData<IUncountedTerminatedPods>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(UncountedTerminatedPods, validate as ValidateFunc<IUncountedTerminatedPods>);

export type {
  IUncountedTerminatedPods as IIoK8sApiBatchV1UncountedTerminatedPods,
  UncountedTerminatedPods as IoK8sApiBatchV1UncountedTerminatedPods
};
