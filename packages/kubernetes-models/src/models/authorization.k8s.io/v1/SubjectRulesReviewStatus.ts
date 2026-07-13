import { IIoK8sApiAuthorizationV1NonResourceRule } from "./NonResourceRule.ts";
import { IIoK8sApiAuthorizationV1ResourceRule } from "./ResourceRule.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/authorization.k8s.io/v1/SubjectRulesReviewStatus.js";

/**
 * SubjectRulesReviewStatus contains the result of a rules check. This check can be incomplete depending on the set of authorizers the server is configured with and any errors experienced during evaluation. Because authorization rules are additive, if a rule appears in a list it's safe to assume the subject has that permission, even if that list is incomplete.
 */
export interface ISubjectRulesReviewStatus {
  /**
 * evaluationError can appear in combination with Rules. It indicates an error occurred during rule evaluation, such as an authorizer that doesn't support rule evaluation, and that ResourceRules and/or NonResourceRules may be incomplete.
 */
"evaluationError"?: string;
/**
 * incomplete is true when the rules returned by this call are incomplete. This is most commonly encountered when an authorizer, such as an external authorizer, doesn't support rules evaluation.
 */
"incomplete": boolean;
/**
 * nonResourceRules is the list of actions the subject is allowed to perform on non-resources. The list ordering isn't significant, may contain duplicates, and possibly be incomplete.
 */
"nonResourceRules": Array<IIoK8sApiAuthorizationV1NonResourceRule>;
/**
 * resourceRules is the list of actions the subject is allowed to perform on resources. The list ordering isn't significant, may contain duplicates, and possibly be incomplete.
 */
"resourceRules": Array<IIoK8sApiAuthorizationV1ResourceRule>;
}

/**
 * SubjectRulesReviewStatus contains the result of a rules check. This check can be incomplete depending on the set of authorizers the server is configured with and any errors experienced during evaluation. Because authorization rules are additive, if a rule appears in a list it's safe to assume the subject has that permission, even if that list is incomplete.
 */
export class SubjectRulesReviewStatus extends Model<ISubjectRulesReviewStatus> implements ISubjectRulesReviewStatus {
  "evaluationError"?: string;
"incomplete": boolean;
"nonResourceRules": Array<IIoK8sApiAuthorizationV1NonResourceRule>;
"resourceRules": Array<IIoK8sApiAuthorizationV1ResourceRule>;

constructor(data?: ModelData<ISubjectRulesReviewStatus>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(SubjectRulesReviewStatus, validate as ValidateFunc<ISubjectRulesReviewStatus>);

export type {
  ISubjectRulesReviewStatus as IIoK8sApiAuthorizationV1SubjectRulesReviewStatus,
  SubjectRulesReviewStatus as IoK8sApiAuthorizationV1SubjectRulesReviewStatus
};
