import { IIoK8sApimachineryPkgApisMetaV1MicroTime } from "../../apimachinery/apis/meta/v1/MicroTime.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../_schemas/IoK8sApiCoreV1EventSeries.js";

/**
 * EventSeries contain information on series of events, i.e. thing that was/is happening continuously for some time.
 */
export interface IEventSeries {
  /**
 * Number of occurrences in this series up to the last heartbeat time
 */
"count"?: number;
/**
 * Time of the last occurrence observed
 */
"lastObservedTime"?: IIoK8sApimachineryPkgApisMetaV1MicroTime;
}

/**
 * EventSeries contain information on series of events, i.e. thing that was/is happening continuously for some time.
 */
export class EventSeries extends Model<IEventSeries> implements IEventSeries {
  "count"?: number;
"lastObservedTime"?: IIoK8sApimachineryPkgApisMetaV1MicroTime;

constructor(data?: ModelData<IEventSeries>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(EventSeries, validate as ValidateFunc<IEventSeries>);

export type {
  IEventSeries as IIoK8sApiCoreV1EventSeries,
  EventSeries as IoK8sApiCoreV1EventSeries
};
