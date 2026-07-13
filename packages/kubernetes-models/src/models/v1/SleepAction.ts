import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../_schemas/v1/SleepAction.js";

/**
 * SleepAction describes a "sleep" action.
 */
export interface ISleepAction {
  /**
 * Seconds is the number of seconds to sleep.
 */
"seconds": number;
}

/**
 * SleepAction describes a "sleep" action.
 */
export class SleepAction extends Model<ISleepAction> implements ISleepAction {
  "seconds": number;

constructor(data?: ModelData<ISleepAction>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(SleepAction, validate as ValidateFunc<ISleepAction>);

export type {
  ISleepAction as IIoK8sApiCoreV1SleepAction,
  SleepAction as IoK8sApiCoreV1SleepAction
};
