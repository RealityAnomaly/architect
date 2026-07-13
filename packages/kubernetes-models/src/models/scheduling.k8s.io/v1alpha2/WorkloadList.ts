import { IIoK8sApiSchedulingV1alpha2Workload } from "./Workload.ts";
import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "../../../apimachinery/apis/meta/v1/ListMeta.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/kubernetes-types/meta";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/scheduling.k8s.io/v1alpha2/WorkloadList.js";

/**
 * WorkloadList contains a list of Workload resources.
 */
export interface IWorkloadList extends TypeMeta {
  "apiVersion": "scheduling.k8s.io/v1alpha2";
/**
 * Items is the list of Workloads.
 */
"items": Array<IIoK8sApiSchedulingV1alpha2Workload>;
"kind": "WorkloadList";
/**
 * Standard list metadata.
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * WorkloadList contains a list of Workload resources.
 */
export class WorkloadList extends Model<IWorkloadList> implements IWorkloadList {
  "apiVersion": IWorkloadList["apiVersion"];
"items": Array<IIoK8sApiSchedulingV1alpha2Workload>;
"kind": IWorkloadList["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IWorkloadList["apiVersion"] = "scheduling.k8s.io/v1alpha2";
static kind: IWorkloadList["kind"] = "WorkloadList";
static is: TypeMetaGuard<IWorkloadList> = createTypeMetaGuard<IWorkloadList>(WorkloadList);

constructor(data?: ModelData<IWorkloadList>) {
  super();

  this.setDefinedProps({
    apiVersion: WorkloadList.apiVersion,
    kind: WorkloadList.kind,
    ...data
  } as IWorkloadList);
}
}

setValidateFunc(WorkloadList, validate as ValidateFunc<IWorkloadList>);

export type {
  IWorkloadList as IIoK8sApiSchedulingV1alpha2WorkloadList,
  WorkloadList as IoK8sApiSchedulingV1alpha2WorkloadList
};
