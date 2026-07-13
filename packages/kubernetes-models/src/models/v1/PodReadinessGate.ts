import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../_schemas/v1/PodReadinessGate.js";

/**
 * PodReadinessGate contains the reference to a pod condition
 */
export interface IPodReadinessGate {
  /**
 * ConditionType refers to a condition in the pod's condition list with matching type.
 */
"conditionType": string;
}

/**
 * PodReadinessGate contains the reference to a pod condition
 */
export class PodReadinessGate extends Model<IPodReadinessGate> implements IPodReadinessGate {
  "conditionType": string;

constructor(data?: ModelData<IPodReadinessGate>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(PodReadinessGate, validate as ValidateFunc<IPodReadinessGate>);

export type {
  IPodReadinessGate as IIoK8sApiCoreV1PodReadinessGate,
  PodReadinessGate as IoK8sApiCoreV1PodReadinessGate
};
