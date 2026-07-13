import { IIoK8sApiCoreV1ObjectReference } from "../../v1/ObjectReference.ts";
import { IIoK8sApimachineryPkgApisMetaV1Time } from "../../../apimachinery/apis/meta/v1/Time.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/batch/v2alpha1/CronJobStatus.js";

/**
 * CronJobStatus represents the current state of a cron job.
 */
export interface ICronJobStatus {
  /**
 * A list of pointers to currently running jobs.
 */
"active"?: Array<IIoK8sApiCoreV1ObjectReference>;
/**
 * Information when was the last time the job was successfully scheduled.
 */
"lastScheduleTime"?: IIoK8sApimachineryPkgApisMetaV1Time;
}

/**
 * CronJobStatus represents the current state of a cron job.
 */
export class CronJobStatus extends Model<ICronJobStatus> implements ICronJobStatus {
  "active"?: Array<IIoK8sApiCoreV1ObjectReference>;
"lastScheduleTime"?: IIoK8sApimachineryPkgApisMetaV1Time;

constructor(data?: ModelData<ICronJobStatus>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(CronJobStatus, validate as ValidateFunc<ICronJobStatus>);

export type {
  ICronJobStatus as IIoK8sApiBatchV2alpha1CronJobStatus,
  CronJobStatus as IoK8sApiBatchV2alpha1CronJobStatus
};
