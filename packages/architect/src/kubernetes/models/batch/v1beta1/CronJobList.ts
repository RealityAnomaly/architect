import { IIoK8sApiBatchV1beta1CronJob } from "./CronJob.ts";
import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "../../../apimachinery/apis/meta/v1/ListMeta.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/architect/kubernetes/types/meta";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiBatchV1beta1CronJobList.js";

/**
 * CronJobList is a collection of cron jobs.
 */
export interface ICronJobList extends TypeMeta {
  "apiVersion": "batch/v1beta1";
/**
 * items is the list of CronJobs.
 */
"items": Array<IIoK8sApiBatchV1beta1CronJob>;
"kind": "CronJobList";
/**
 * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * CronJobList is a collection of cron jobs.
 */
export class CronJobList extends Model<ICronJobList> implements ICronJobList {
  "apiVersion": ICronJobList["apiVersion"];
"items": Array<IIoK8sApiBatchV1beta1CronJob>;
"kind": ICronJobList["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: ICronJobList["apiVersion"] = "batch/v1beta1";
static kind: ICronJobList["kind"] = "CronJobList";
static is = createTypeMetaGuard<ICronJobList>(CronJobList);

constructor(data?: ModelData<ICronJobList>) {
  super();

  this.setDefinedProps({
    apiVersion: CronJobList.apiVersion,
    kind: CronJobList.kind,
    ...data
  } as ICronJobList);
}
}

setValidateFunc(CronJobList, validate as ValidateFunc<ICronJobList>);

export type {
  ICronJobList as IIoK8sApiBatchV1beta1CronJobList,
  CronJobList as IoK8sApiBatchV1beta1CronJobList
};
