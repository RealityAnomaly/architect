import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiSchedulingV1alpha2WorkloadPodGroupTemplateReference.js";

/**
 * WorkloadPodGroupTemplateReference references the PodGroupTemplate within the Workload object.
 */
export interface IWorkloadPodGroupTemplateReference {
  /**
 * PodGroupTemplateName defines the PodGroupTemplate name within the Workload object.
 */
"podGroupTemplateName": string;
/**
 * WorkloadName defines the name of the Workload object.
 */
"workloadName": string;
}

/**
 * WorkloadPodGroupTemplateReference references the PodGroupTemplate within the Workload object.
 */
export class WorkloadPodGroupTemplateReference extends Model<IWorkloadPodGroupTemplateReference> implements IWorkloadPodGroupTemplateReference {
  "podGroupTemplateName": string;
"workloadName": string;

constructor(data?: ModelData<IWorkloadPodGroupTemplateReference>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(WorkloadPodGroupTemplateReference, validate as ValidateFunc<IWorkloadPodGroupTemplateReference>);

export type {
  IWorkloadPodGroupTemplateReference as IIoK8sApiSchedulingV1alpha2WorkloadPodGroupTemplateReference,
  WorkloadPodGroupTemplateReference as IoK8sApiSchedulingV1alpha2WorkloadPodGroupTemplateReference
};
