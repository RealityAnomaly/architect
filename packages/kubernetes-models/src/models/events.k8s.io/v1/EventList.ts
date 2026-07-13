import { IIoK8sApiEventsV1Event } from "./Event.ts";
import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "../../../apimachinery/apis/meta/v1/ListMeta.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/kubernetes-types/meta";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/events.k8s.io/v1/EventList.js";

/**
 * EventList is a list of Event objects.
 */
export interface IEventList extends TypeMeta {
  "apiVersion": "events.k8s.io/v1";
/**
 * items is a list of schema objects.
 */
"items": Array<IIoK8sApiEventsV1Event>;
"kind": "EventList";
/**
 * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * EventList is a list of Event objects.
 */
export class EventList extends Model<IEventList> implements IEventList {
  "apiVersion": IEventList["apiVersion"];
"items": Array<IIoK8sApiEventsV1Event>;
"kind": IEventList["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IEventList["apiVersion"] = "events.k8s.io/v1";
static kind: IEventList["kind"] = "EventList";
static is: TypeMetaGuard<IEventList> = createTypeMetaGuard<IEventList>(EventList);

constructor(data?: ModelData<IEventList>) {
  super();

  this.setDefinedProps({
    apiVersion: EventList.apiVersion,
    kind: EventList.kind,
    ...data
  } as IEventList);
}
}

setValidateFunc(EventList, validate as ValidateFunc<IEventList>);

export type {
  IEventList as IIoK8sApiEventsV1EventList,
  EventList as IoK8sApiEventsV1EventList
};
