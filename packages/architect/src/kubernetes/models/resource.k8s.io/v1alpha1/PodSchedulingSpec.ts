import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiResourceV1alpha1PodSchedulingSpec.js";

/**
 * PodSchedulingSpec describes where resources for the Pod are needed.
 */
export interface IPodSchedulingSpec {
  /**
 * PotentialNodes lists nodes where the Pod might be able to run.
 * 
 * The size of this field is limited to 128. This is large enough for many clusters. Larger clusters may need more attempts to find a node that suits all pending resources. This may get increased in the future, but not reduced.
 */
"potentialNodes"?: Array<string>;
/**
 * SelectedNode is the node for which allocation of ResourceClaims that are referenced by the Pod and that use "WaitForFirstConsumer" allocation is to be attempted.
 */
"selectedNode"?: string;
}

/**
 * PodSchedulingSpec describes where resources for the Pod are needed.
 */
export class PodSchedulingSpec extends Model<IPodSchedulingSpec> implements IPodSchedulingSpec {
  "potentialNodes"?: Array<string>;
"selectedNode"?: string;

constructor(data?: ModelData<IPodSchedulingSpec>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(PodSchedulingSpec, validate as ValidateFunc<IPodSchedulingSpec>);

export type {
  IPodSchedulingSpec as IIoK8sApiResourceV1alpha1PodSchedulingSpec,
  PodSchedulingSpec as IoK8sApiResourceV1alpha1PodSchedulingSpec
};
