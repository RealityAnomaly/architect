import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/resource.k8s.io/v1alpha2/PodSchedulingContextSpec.js";

/**
 * PodSchedulingContextSpec describes where resources for the Pod are needed.
 */
export interface IPodSchedulingContextSpec {
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
 * PodSchedulingContextSpec describes where resources for the Pod are needed.
 */
export class PodSchedulingContextSpec extends Model<IPodSchedulingContextSpec> implements IPodSchedulingContextSpec {
  "potentialNodes"?: Array<string>;
"selectedNode"?: string;

constructor(data?: ModelData<IPodSchedulingContextSpec>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(PodSchedulingContextSpec, validate as ValidateFunc<IPodSchedulingContextSpec>);

export type {
  IPodSchedulingContextSpec as IIoK8sApiResourceV1alpha2PodSchedulingContextSpec,
  PodSchedulingContextSpec as IoK8sApiResourceV1alpha2PodSchedulingContextSpec
};
