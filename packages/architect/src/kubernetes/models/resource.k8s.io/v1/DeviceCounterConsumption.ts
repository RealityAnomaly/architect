import { IIoK8sApiResourceV1Counter } from "./Counter.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiResourceV1DeviceCounterConsumption.js";

/**
 * DeviceCounterConsumption defines a set of counters that a device will consume from a CounterSet.
 */
export interface IDeviceCounterConsumption {
  /**
 * CounterSet is the name of the set from which the counters defined will be consumed.
 */
"counterSet": string;
/**
 * Counters defines the counters that will be consumed by the device.
 * 
 * The maximum number of counters is 32.
 */
"counters": {
  [key: string]: IIoK8sApiResourceV1Counter;
};
}

/**
 * DeviceCounterConsumption defines a set of counters that a device will consume from a CounterSet.
 */
export class DeviceCounterConsumption extends Model<IDeviceCounterConsumption> implements IDeviceCounterConsumption {
  "counterSet": string;
"counters": {
  [key: string]: IIoK8sApiResourceV1Counter;
};

constructor(data?: ModelData<IDeviceCounterConsumption>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(DeviceCounterConsumption, validate as ValidateFunc<IDeviceCounterConsumption>);

export type {
  IDeviceCounterConsumption as IIoK8sApiResourceV1DeviceCounterConsumption,
  DeviceCounterConsumption as IoK8sApiResourceV1DeviceCounterConsumption
};
