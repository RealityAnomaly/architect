import { IIoK8sApiBatchV1SuccessPolicyRule } from "./SuccessPolicyRule.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiBatchV1SuccessPolicy.js";

/**
 * SuccessPolicy describes when a Job can be declared as succeeded based on the success of some indexes.
 */
export interface ISuccessPolicy {
  /**
 * rules represents the list of alternative rules for the declaring the Jobs as successful before `.status.succeeded >= .spec.completions`. Once any of the rules are met, the "SuccessCriteriaMet" condition is added, and the lingering pods are removed. The terminal state for such a Job has the "Complete" condition. Additionally, these rules are evaluated in order; Once the Job meets one of the rules, other rules are ignored. At most 20 elements are allowed.
 */
"rules": Array<IIoK8sApiBatchV1SuccessPolicyRule>;
}

/**
 * SuccessPolicy describes when a Job can be declared as succeeded based on the success of some indexes.
 */
export class SuccessPolicy extends Model<ISuccessPolicy> implements ISuccessPolicy {
  "rules": Array<IIoK8sApiBatchV1SuccessPolicyRule>;

constructor(data?: ModelData<ISuccessPolicy>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(SuccessPolicy, validate as ValidateFunc<ISuccessPolicy>);

export type {
  ISuccessPolicy as IIoK8sApiBatchV1SuccessPolicy,
  SuccessPolicy as IoK8sApiBatchV1SuccessPolicy
};
