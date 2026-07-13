import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiAuthorizationV1SubjectAccessReviewStatus.js";

/**
 * SubjectAccessReviewStatus
 */
export interface ISubjectAccessReviewStatus {
  /**
 * allowed is required. True if the action would be allowed, false otherwise.
 */
"allowed": boolean;
/**
 * denied is optional. True if the action would be denied, otherwise false. If both allowed is false and denied is false, then the authorizer has no opinion on whether to authorize the action. Denied may not be true if Allowed is true.
 */
"denied"?: boolean;
/**
 * evaluationError is an indication that some error occurred during the authorization check. It is entirely possible to get an error and be able to continue determine authorization status in spite of it. For instance, RBAC can be missing a role, but enough roles are still present and bound to reason about the request.
 */
"evaluationError"?: string;
/**
 * reason is optional.  It indicates why a request was allowed or denied.
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
  ISubjectAccessReviewStatus as IIoK8sApiAuthorizationV1SubjectAccessReviewStatus,
  SubjectAccessReviewStatus as IoK8sApiAuthorizationV1SubjectAccessReviewStatus
};
