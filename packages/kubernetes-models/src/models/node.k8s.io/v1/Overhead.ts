import { IIoK8sApimachineryPkgApiResourceQuantity } from "../../../apimachinery/api/resource/Quantity.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/node.k8s.io/v1/Overhead.js";

/**
 * Overhead structure represents the resource overhead associated with running a pod.
 */
export interface IOverhead {
  /**
 * podFixed represents the fixed resource overhead associated with running a pod.
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
  IOverhead as IIoK8sApiNodeV1Overhead,
  Overhead as IoK8sApiNodeV1Overhead
};
