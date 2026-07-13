import { IIoK8sApimachineryPkgApisMetaV1Time } from "../../apimachinery/apis/meta/v1/Time.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../_schemas/IoK8sApiCoreV1Taint.js";

/**
 * The node this Taint is attached to has the "effect" on any pod that does not tolerate the Taint.
 */
export interface ITaint {
  /**
 * Required. The effect of the taint on pods that do not tolerate the taint. Valid effects are NoSchedule, PreferNoSchedule and NoExecute.
 */
"effect": string;
/**
 * Required. The taint key to be applied to a node.
 */
"key": string;
/**
 * TimeAdded represents the time at which the taint was added.
 */
"timeAdded"?: IIoK8sApimachineryPkgApisMetaV1Time;
/**
 * The taint value corresponding to the taint key.
 */
"value"?: string;
}

/**
 * The node this Taint is attached to has the "effect" on any pod that does not tolerate the Taint.
 */
export class Taint extends Model<ITaint> implements ITaint {
  "effect": string;
"key": string;
"timeAdded"?: IIoK8sApimachineryPkgApisMetaV1Time;
"value"?: string;

constructor(data?: ModelData<ITaint>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(Taint, validate as ValidateFunc<ITaint>);

export type {
  ITaint as IIoK8sApiCoreV1Taint,
  Taint as IoK8sApiCoreV1Taint
};
