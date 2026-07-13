import { IIoK8sApiSchedulingV1alpha2TopologyConstraint } from "./TopologyConstraint.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiSchedulingV1alpha2PodGroupSchedulingConstraints.js";

/**
 * PodGroupSchedulingConstraints defines scheduling constraints (e.g. topology) for a PodGroup.
 */
export interface IPodGroupSchedulingConstraints {
  /**
 * Topology defines the topology constraints for the pod group. Currently only a single topology constraint can be specified. This may change in the future.
 */
"topology"?: Array<IIoK8sApiSchedulingV1alpha2TopologyConstraint>;
}

/**
 * PodGroupSchedulingConstraints defines scheduling constraints (e.g. topology) for a PodGroup.
 */
export class PodGroupSchedulingConstraints extends Model<IPodGroupSchedulingConstraints> implements IPodGroupSchedulingConstraints {
  "topology"?: Array<IIoK8sApiSchedulingV1alpha2TopologyConstraint>;

constructor(data?: ModelData<IPodGroupSchedulingConstraints>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(PodGroupSchedulingConstraints, validate as ValidateFunc<IPodGroupSchedulingConstraints>);

export type {
  IPodGroupSchedulingConstraints as IIoK8sApiSchedulingV1alpha2PodGroupSchedulingConstraints,
  PodGroupSchedulingConstraints as IoK8sApiSchedulingV1alpha2PodGroupSchedulingConstraints
};
