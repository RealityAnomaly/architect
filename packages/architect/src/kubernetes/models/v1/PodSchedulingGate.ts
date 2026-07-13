import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../_schemas/IoK8sApiCoreV1PodSchedulingGate.js";

/**
 * PodSchedulingGate is associated to a Pod to guard its scheduling.
 */
export interface IPodSchedulingGate {
  /**
 * Name of the scheduling gate. Each scheduling gate must have a unique name field.
 */
"name": string;
}

/**
 * PodSchedulingGate is associated to a Pod to guard its scheduling.
 */
export class PodSchedulingGate extends Model<IPodSchedulingGate> implements IPodSchedulingGate {
  "name": string;

constructor(data?: ModelData<IPodSchedulingGate>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(PodSchedulingGate, validate as ValidateFunc<IPodSchedulingGate>);

export type {
  IPodSchedulingGate as IIoK8sApiCoreV1PodSchedulingGate,
  PodSchedulingGate as IoK8sApiCoreV1PodSchedulingGate
};
