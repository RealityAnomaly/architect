import { IIoK8sApimachineryPkgApiResourceQuantity } from "../../../apimachinery/api/resource/Quantity.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/resource.k8s.io/v1beta2/Counter.js";

/**
 * Counter describes a quantity associated with a device.
 */
export interface ICounter {
  /**
 * Value defines how much of a certain device counter is available.
 */
"value": IIoK8sApimachineryPkgApiResourceQuantity;
}

/**
 * Counter describes a quantity associated with a device.
 */
export class Counter extends Model<ICounter> implements ICounter {
  "value": IIoK8sApimachineryPkgApiResourceQuantity;

constructor(data?: ModelData<ICounter>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(Counter, validate as ValidateFunc<ICounter>);

export type {
  ICounter as IIoK8sApiResourceV1beta2Counter,
  Counter as IoK8sApiResourceV1beta2Counter
};
