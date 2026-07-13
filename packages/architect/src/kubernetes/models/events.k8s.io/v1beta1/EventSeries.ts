import { IIoK8sApimachineryPkgApisMetaV1MicroTime } from "../../../apimachinery/apis/meta/v1/MicroTime.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiEventsV1beta1EventSeries.js";

/**
 * EventSeries contain information on series of events, i.e. thing that was/is happening continuously for some time.
 */
export interface IEventSeries {
  /**
 * count is the number of occurrences in this series up to the last heartbeat time.
 */
"count": number;
/**
 * lastObservedTime is the time when last Event from the series was seen before last heartbeat.
 */
"lastObservedTime": IIoK8sApimachineryPkgApisMetaV1MicroTime;
}

/**
 * EventSeries contain information on series of events, i.e. thing that was/is happening continuously for some time.
 */
export class EventSeries extends Model<IEventSeries> implements IEventSeries {
  "count": number;
"lastObservedTime": IIoK8sApimachineryPkgApisMetaV1MicroTime;

constructor(data?: ModelData<IEventSeries>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(EventSeries, validate as ValidateFunc<IEventSeries>);

export type {
  IEventSeries as IIoK8sApiEventsV1beta1EventSeries,
  EventSeries as IoK8sApiEventsV1beta1EventSeries
};
