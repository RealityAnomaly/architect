import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "../../../apimachinery/apis/meta/v1/ObjectMeta.ts";
import { IIoK8sApiSchedulingV1alpha2PodGroupSpec } from "./PodGroupSpec.ts";
import { IIoK8sApiSchedulingV1alpha2PodGroupStatus } from "./PodGroupStatus.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/kubernetes-types/meta";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/scheduling.k8s.io/v1alpha2/PodGroup.js";

/**
 * PodGroup represents a runtime instance of pods grouped together. PodGroups are created by workload controllers (Job, LWS, JobSet, etc...) from Workload.podGroupTemplates. PodGroup API enablement is toggled by the GenericWorkload feature gate.
 */
export interface IPodGroup extends TypeMeta {
  "apiVersion": "scheduling.k8s.io/v1alpha2";
"kind": "PodGroup";
/**
 * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * Spec defines the desired state of the PodGroup.
 */
"spec": IIoK8sApiSchedulingV1alpha2PodGroupSpec;
/**
 * Status represents the current observed state of the PodGroup.
 */
"status"?: IIoK8sApiSchedulingV1alpha2PodGroupStatus;
}

/**
 * PodGroup represents a runtime instance of pods grouped together. PodGroups are created by workload controllers (Job, LWS, JobSet, etc...) from Workload.podGroupTemplates. PodGroup API enablement is toggled by the GenericWorkload feature gate.
 */
export class PodGroup extends Model<IPodGroup> implements IPodGroup {
  "apiVersion": IPodGroup["apiVersion"];
"kind": IPodGroup["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
"spec": IIoK8sApiSchedulingV1alpha2PodGroupSpec;
"status"?: IIoK8sApiSchedulingV1alpha2PodGroupStatus;

static apiVersion: IPodGroup["apiVersion"] = "scheduling.k8s.io/v1alpha2";
static kind: IPodGroup["kind"] = "PodGroup";
static is: TypeMetaGuard<IPodGroup> = createTypeMetaGuard<IPodGroup>(PodGroup);

constructor(data?: ModelData<IPodGroup>) {
  super();

  this.setDefinedProps({
    apiVersion: PodGroup.apiVersion,
    kind: PodGroup.kind,
    ...data
  } as IPodGroup);
}
}

setValidateFunc(PodGroup, validate as ValidateFunc<IPodGroup>);

export type {
  IPodGroup as IIoK8sApiSchedulingV1alpha2PodGroup,
  PodGroup as IoK8sApiSchedulingV1alpha2PodGroup
};
