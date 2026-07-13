import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/authorization.k8s.io/v1beta1/SubjectAccessReviewStatus.js";

/**
 * SubjectAccessReviewStatus
 */
export interface ISubjectAccessReviewStatus {
  /**
 * Allowed is required. True if the action would be allowed, false otherwise.
 */
"allowed": boolean;
/**
 * Denied is optional. True if the action would be denied, otherwise false. If both allowed is false and denied is false, then the authorizer has no opinion on whether to authorize the action. Denied may not be true if Allowed is true.
 */
"denied"?: boolean;
/**
 * EvaluationError is an indication that some error occurred during the authorization check. It is entirely possible to get an error and be able to continue determine authorization status in spite of it. For instance, RBAC can be missing a role, but enough roles are still present and bound to reason about the request.
 */
"evaluationError"?: string;
/**
 * Reason is optional.  It indicates why a request was allowed or denied.
 */
"reason"?: string;
}

/**
 * SubjectAccessReviewStatus
 */
export class SubjectAccessReviewStatus extends Model<ISubjectAccessReviewStatus> implements ISubjectAccessReviewStatus {
  "allowed": boolean;
"denied"?: boolean;
"evaluationError"?: string;
"reason"?: string;

constructor(data?: ModelData<ISubjectAccessReviewStatus>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(SubjectAccessReviewStatus, validate as ValidateFunc<ISubjectAccessReviewStatus>);

export type {
  ISubjectAccessReviewStatus as IIoK8sApiAuthorizationV1beta1SubjectAccessReviewStatus,
  SubjectAccessReviewStatus as IoK8sApiAuthorizationV1beta1SubjectAccessReviewStatus
};
