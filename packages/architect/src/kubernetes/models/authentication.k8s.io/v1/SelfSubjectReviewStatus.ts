import { IIoK8sApiAuthenticationV1UserInfo } from "./UserInfo.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiAuthenticationV1SelfSubjectReviewStatus.js";

/**
 * SelfSubjectReviewStatus is filled by the kube-apiserver and sent back to a user.
 */
export interface ISelfSubjectReviewStatus {
  /**
 * userInfo is a set of attributes belonging to the user making this request.
 */
"userInfo"?: IIoK8sApiAuthenticationV1UserInfo;
}

/**
 * SelfSubjectReviewStatus is filled by the kube-apiserver and sent back to a user.
 */
export class SelfSubjectReviewStatus extends Model<ISelfSubjectReviewStatus> implements ISelfSubjectReviewStatus {
  "userInfo"?: IIoK8sApiAuthenticationV1UserInfo;

constructor(data?: ModelData<ISelfSubjectReviewStatus>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(SelfSubjectReviewStatus, validate as ValidateFunc<ISelfSubjectReviewStatus>);

export type {
  ISelfSubjectReviewStatus as IIoK8sApiAuthenticationV1SelfSubjectReviewStatus,
  SelfSubjectReviewStatus as IoK8sApiAuthenticationV1SelfSubjectReviewStatus
};
