import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/scheduling.k8s.io/v1alpha2/TopologyConstraint.js";

/**
 * TopologyConstraint defines a topology constraint for a PodGroup.
 */
export interface ITopologyConstraint {
  /**
 * Key specifies the key of the node label representing the topology domain. All pods within the PodGroup must be colocated within the same domain instance. Different PodGroups can land on different domain instances even if they derive from the same PodGroupTemplate. Examples: "topology.kubernetes.io/rack"
 */
"key": string;
}

/**
 * TopologyConstraint defines a topology constraint for a PodGroup.
 */
export class TopologyConstraint extends Model<ITopologyConstraint> implements ITopologyConstraint {
  "key": string;

constructor(data?: ModelData<ITopologyConstraint>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(TopologyConstraint, validate as ValidateFunc<ITopologyConstraint>);

export type {
  ITopologyConstraint as IIoK8sApiSchedulingV1alpha2TopologyConstraint,
  TopologyConstraint as IoK8sApiSchedulingV1alpha2TopologyConstraint
};
