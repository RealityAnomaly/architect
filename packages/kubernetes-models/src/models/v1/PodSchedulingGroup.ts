import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../_schemas/v1/PodSchedulingGroup.js";

/**
 * PodSchedulingGroup identifies the runtime scheduling group instance that a Pod belongs to. The scheduler uses this information to apply workload-aware scheduling semantics. Exactly one field must be specified.
 */
export interface IPodSchedulingGroup {
  /**
 * PodGroupName specifies the name of the standalone PodGroup object that represents the runtime instance of this group. Must be a DNS subdomain.
 */
"podGroupName"?: string;
}

/**
 * PodSchedulingGroup identifies the runtime scheduling group instance that a Pod belongs to. The scheduler uses this information to apply workload-aware scheduling semantics. Exactly one field must be specified.
 */
export class PodSchedulingGroup extends Model<IPodSchedulingGroup> implements IPodSchedulingGroup {
  "podGroupName"?: string;

constructor(data?: ModelData<IPodSchedulingGroup>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(PodSchedulingGroup, validate as ValidateFunc<IPodSchedulingGroup>);

export type {
  IPodSchedulingGroup as IIoK8sApiCoreV1PodSchedulingGroup,
  PodSchedulingGroup as IoK8sApiCoreV1PodSchedulingGroup
};
