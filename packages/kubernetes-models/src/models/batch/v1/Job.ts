import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "../../../apimachinery/apis/meta/v1/ObjectMeta.ts";
import { IIoK8sApiBatchV1JobSpec } from "./JobSpec.ts";
import { IIoK8sApiBatchV1JobStatus } from "./JobStatus.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/kubernetes-types/meta";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/batch/v1/Job.js";

/**
 * Job represents the configuration of a single job.
 */
export interface IJob extends TypeMeta {
  "apiVersion": "batch/v1";
"kind": "Job";
/**
 * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * Specification of the desired behavior of a job. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
 */
"spec"?: IIoK8sApiBatchV1JobSpec;
/**
 * Current status of a job. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
 */
"status"?: IIoK8sApiBatchV1JobStatus;
}

/**
 * Job represents the configuration of a single job.
 */
export class Job extends Model<IJob> implements IJob {
  "apiVersion": IJob["apiVersion"];
"kind": IJob["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
"spec"?: IIoK8sApiBatchV1JobSpec;
"status"?: IIoK8sApiBatchV1JobStatus;

static apiVersion: IJob["apiVersion"] = "batch/v1";
static kind: IJob["kind"] = "Job";
static is: TypeMetaGuard<IJob> = createTypeMetaGuard<IJob>(Job);

constructor(data?: ModelData<IJob>) {
  super();

  this.setDefinedProps({
    apiVersion: Job.apiVersion,
    kind: Job.kind,
    ...data
  } as IJob);
}
}

setValidateFunc(Job, validate as ValidateFunc<IJob>);

export type {
  IJob as IIoK8sApiBatchV1Job,
  Job as IoK8sApiBatchV1Job
};
