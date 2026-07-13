import { IIoK8sApiSchedulingV1alpha2WorkloadPodGroupTemplateReference } from "./WorkloadPodGroupTemplateReference.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiSchedulingV1alpha2PodGroupTemplateReference.js";

/**
 * PodGroupTemplateReference references a PodGroup template defined in some object (e.g. Workload). Exactly one reference must be set.
 */
export interface IPodGroupTemplateReference {
  /**
 * Workload references the PodGroupTemplate within the Workload object that was used to create the PodGroup.
 */
"workload"?: IIoK8sApiSchedulingV1alpha2WorkloadPodGroupTemplateReference;
}

/**
 * PodGroupTemplateReference references a PodGroup template defined in some object (e.g. Workload). Exactly one reference must be set.
 */
export class PodGroupTemplateReference extends Model<IPodGroupTemplateReference> implements IPodGroupTemplateReference {
  "workload"?: IIoK8sApiSchedulingV1alpha2WorkloadPodGroupTemplateReference;

constructor(data?: ModelData<IPodGroupTemplateReference>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(PodGroupTemplateReference, validate as ValidateFunc<IPodGroupTemplateReference>);

export type {
  IPodGroupTemplateReference as IIoK8sApiSchedulingV1alpha2PodGroupTemplateReference,
  PodGroupTemplateReference as IoK8sApiSchedulingV1alpha2PodGroupTemplateReference
};
