import { IIoK8sApimachineryPkgApiResourceQuantity } from "../../../apimachinery/api/resource/Quantity.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiNodeV1alpha1Overhead.js";

/**
 * Overhead structure represents the resource overhead associated with running a pod.
 */
export interface IOverhead {
  /**
 * PodFixed represents the fixed resource overhead associated with running a pod.
 */
"podFixed"?: {
  [key: string]: IIoK8sApimachineryPkgApiResourceQuantity;
};
}

/**
 * Overhead structure represents the resource overhead associated with running a pod.
 */
export class Overhead extends Model<IOverhead> implements IOverhead {
  "podFixed"?: {
  [key: string]: IIoK8sApimachineryPkgApiResourceQuantity;
};

constructor(data?: ModelData<IOverhead>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(Overhead, validate as ValidateFunc<IOverhead>);

export type {
  IOverhead as IIoK8sApiNodeV1alpha1Overhead,
  Overhead as IoK8sApiNodeV1alpha1Overhead
};
