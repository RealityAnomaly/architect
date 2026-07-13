import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "../../../apimachinery/apis/meta/v1/ObjectMeta.ts";
import { IIoK8sApiBatchV2alpha1CronJobSpec } from "./CronJobSpec.ts";
import { IIoK8sApiBatchV2alpha1CronJobStatus } from "./CronJobStatus.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/kubernetes-types/meta";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/batch/v2alpha1/CronJob.js";

/**
 * CronJob represents the configuration of a single cron job.
 */
export interface ICronJob extends TypeMeta {
  "apiVersion": "batch/v2alpha1";
"kind": "CronJob";
/**
 * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * Specification of the desired behavior of a cron job, including the schedule. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
 */
"spec"?: IIoK8sApiBatchV2alpha1CronJobSpec;
/**
 * Current status of a cron job. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#spec-and-status
 */
"status"?: IIoK8sApiBatchV2alpha1CronJobStatus;
}

/**
 * CronJob represents the configuration of a single cron job.
 */
export class CronJob extends Model<ICronJob> implements ICronJob {
  "apiVersion": ICronJob["apiVersion"];
"kind": ICronJob["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
"spec"?: IIoK8sApiBatchV2alpha1CronJobSpec;
"status"?: IIoK8sApiBatchV2alpha1CronJobStatus;

static apiVersion: ICronJob["apiVersion"] = "batch/v2alpha1";
static kind: ICronJob["kind"] = "CronJob";
static is: TypeMetaGuard<ICronJob> = createTypeMetaGuard<ICronJob>(CronJob);

constructor(data?: ModelData<ICronJob>) {
  super();

  this.setDefinedProps({
    apiVersion: CronJob.apiVersion,
    kind: CronJob.kind,
    ...data
  } as ICronJob);
}
}

setValidateFunc(CronJob, validate as ValidateFunc<ICronJob>);

export type {
  ICronJob as IIoK8sApiBatchV2alpha1CronJob,
  CronJob as IoK8sApiBatchV2alpha1CronJob
};
