import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "../../../apimachinery/apis/meta/v1/ObjectMeta.ts";
import { IIoK8sApiSchedulingV1alpha2WorkloadSpec } from "./WorkloadSpec.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/kubernetes-types/meta";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/scheduling.k8s.io/v1alpha2/Workload.js";

/**
 * Workload allows for expressing scheduling constraints that should be used when managing the lifecycle of workloads from the scheduling perspective, including scheduling, preemption, eviction and other phases. Workload API enablement is toggled by the GenericWorkload feature gate.
 */
export interface IWorkload extends TypeMeta {
  "apiVersion": "scheduling.k8s.io/v1alpha2";
"kind": "Workload";
/**
 * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * Spec defines the desired behavior of a Workload.
 */
"spec": IIoK8sApiSchedulingV1alpha2WorkloadSpec;
}

/**
 * Workload allows for expressing scheduling constraints that should be used when managing the lifecycle of workloads from the scheduling perspective, including scheduling, preemption, eviction and other phases. Workload API enablement is toggled by the GenericWorkload feature gate.
 */
export class Workload extends Model<IWorkload> implements IWorkload {
  "apiVersion": IWorkload["apiVersion"];
"kind": IWorkload["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
"spec": IIoK8sApiSchedulingV1alpha2WorkloadSpec;

static apiVersion: IWorkload["apiVersion"] = "scheduling.k8s.io/v1alpha2";
static kind: IWorkload["kind"] = "Workload";
static is: TypeMetaGuard<IWorkload> = createTypeMetaGuard<IWorkload>(Workload);

constructor(data?: ModelData<IWorkload>) {
  super();

  this.setDefinedProps({
    apiVersion: Workload.apiVersion,
    kind: Workload.kind,
    ...data
  } as IWorkload);
}
}

setValidateFunc(Workload, validate as ValidateFunc<IWorkload>);

export type {
  IWorkload as IIoK8sApiSchedulingV1alpha2Workload,
  Workload as IoK8sApiSchedulingV1alpha2Workload
};
