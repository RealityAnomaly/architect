import { IIoK8sApiResourceV1beta2Counter } from "./Counter.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiResourceV1beta2CounterSet.js";

/**
 * CounterSet defines a named set of counters that are available to be used by devices defined in the ResourcePool.
 * 
 * The counters are not allocatable by themselves, but can be referenced by devices. When a device is allocated, the portion of counters it uses will no longer be available for use by other devices.
 */
export interface ICounterSet {
  /**
 * Counters defines the set of counters for this CounterSet The name of each counter must be unique in that set and must be a DNS label.
 * 
 * The maximum number of counters is 32.
 */
"counters": {
  [key: string]: IIoK8sApiResourceV1beta2Counter;
};
/**
 * Name defines the name of the counter set. It must be a DNS label.
 */
"name": string;
}

/**
 * CounterSet defines a named set of counters that are available to be used by devices defined in the ResourcePool.
 * 
 * The counters are not allocatable by themselves, but can be referenced by devices. When a device is allocated, the portion of counters it uses will no longer be available for use by other devices.
 */
export class CounterSet extends Model<ICounterSet> implements ICounterSet {
  "counters": {
  [key: string]: IIoK8sApiResourceV1beta2Counter;
};
"name": string;

constructor(data?: ModelData<ICounterSet>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(CounterSet, validate as ValidateFunc<ICounterSet>);

export type {
  ICounterSet as IIoK8sApiResourceV1beta2CounterSet,
  CounterSet as IoK8sApiResourceV1beta2CounterSet
};
