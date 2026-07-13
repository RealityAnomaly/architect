import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiAuthorizationV1beta1SelfSubjectRulesReviewSpec.js";

export interface ISelfSubjectRulesReviewSpec {
  /**
 * Namespace to evaluate rules for. Required.
 */
"namespace"?: string;
}

export class SelfSubjectRulesReviewSpec extends Model<ISelfSubjectRulesReviewSpec> implements ISelfSubjectRulesReviewSpec {
  "namespace"?: string;

constructor(data?: ModelData<ISelfSubjectRulesReviewSpec>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(SelfSubjectRulesReviewSpec, validate as ValidateFunc<ISelfSubjectRulesReviewSpec>);

export type {
  ISelfSubjectRulesReviewSpec as IIoK8sApiAuthorizationV1beta1SelfSubjectRulesReviewSpec,
  SelfSubjectRulesReviewSpec as IoK8sApiAuthorizationV1beta1SelfSubjectRulesReviewSpec
};
