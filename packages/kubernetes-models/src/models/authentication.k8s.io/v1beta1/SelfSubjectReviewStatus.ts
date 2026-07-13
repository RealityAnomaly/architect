import { IIoK8sApiAuthenticationV1UserInfo } from "../v1/UserInfo.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/authentication.k8s.io/v1beta1/SelfSubjectReviewStatus.js";

/**
 * SelfSubjectReviewStatus is filled by the kube-apiserver and sent back to a user.
 */
export interface ISelfSubjectReviewStatus {
  /**
 * User attributes of the user making this request.
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
  ISelfSubjectReviewStatus as IIoK8sApiAuthenticationV1beta1SelfSubjectReviewStatus,
  SelfSubjectReviewStatus as IoK8sApiAuthenticationV1beta1SelfSubjectReviewStatus
};
