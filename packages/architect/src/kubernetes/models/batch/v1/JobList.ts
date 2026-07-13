import { IIoK8sApiBatchV1Job } from "./Job.ts";
import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "../../../apimachinery/apis/meta/v1/ListMeta.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/architect/kubernetes/types/meta";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiBatchV1JobList.js";

/**
 * JobList is a collection of jobs.
 */
export interface IJobList extends TypeMeta {
  "apiVersion": "batch/v1";
/**
 * items is the list of Jobs.
 */
"items": Array<IIoK8sApiBatchV1Job>;
"kind": "JobList";
/**
 * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * JobList is a collection of jobs.
 */
export class JobList extends Model<IJobList> implements IJobList {
  "apiVersion": IJobList["apiVersion"];
"items": Array<IIoK8sApiBatchV1Job>;
"kind": IJobList["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IJobList["apiVersion"] = "batch/v1";
static kind: IJobList["kind"] = "JobList";
static is = createTypeMetaGuard<IJobList>(JobList);

constructor(data?: ModelData<IJobList>) {
  super();

  this.setDefinedProps({
    apiVersion: JobList.apiVersion,
    kind: JobList.kind,
    ...data
  } as IJobList);
}
}

setValidateFunc(JobList, validate as ValidateFunc<IJobList>);

export type {
  IJobList as IIoK8sApiBatchV1JobList,
  JobList as IoK8sApiBatchV1JobList
};
