import { IIoK8sApiSchedulingV1alpha2TypedLocalObjectReference } from "./TypedLocalObjectReference.ts";
import { IIoK8sApiSchedulingV1alpha2PodGroupTemplate } from "./PodGroupTemplate.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/scheduling.k8s.io/v1alpha2/WorkloadSpec.js";

/**
 * WorkloadSpec defines the desired state of a Workload.
 */
export interface IWorkloadSpec {
  /**
 * ControllerRef is an optional reference to the controlling object, such as a Deployment or Job. This field is intended for use by tools like CLIs to provide a link back to the original workload definition. This field is immutable.
 */
"controllerRef"?: IIoK8sApiSchedulingV1alpha2TypedLocalObjectReference;
/**
 * PodGroupTemplates is the list of templates that make up the Workload. The maximum number of templates is 8. This field is immutable.
 */
"podGroupTemplates": Array<IIoK8sApiSchedulingV1alpha2PodGroupTemplate>;
}

/**
 * WorkloadSpec defines the desired state of a Workload.
 */
export class WorkloadSpec extends Model<IWorkloadSpec> implements IWorkloadSpec {
  "controllerRef"?: IIoK8sApiSchedulingV1alpha2TypedLocalObjectReference;
"podGroupTemplates": Array<IIoK8sApiSchedulingV1alpha2PodGroupTemplate>;

constructor(data?: ModelData<IWorkloadSpec>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(WorkloadSpec, validate as ValidateFunc<IWorkloadSpec>);

export type {
  IWorkloadSpec as IIoK8sApiSchedulingV1alpha2WorkloadSpec,
  WorkloadSpec as IoK8sApiSchedulingV1alpha2WorkloadSpec
};
