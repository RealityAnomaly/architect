import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "../../../apimachinery/apis/meta/v1/ObjectMeta.ts";
import { IIoK8sApiAuthenticationV1beta1SelfSubjectReviewStatus } from "./SelfSubjectReviewStatus.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/architect/kubernetes/types/meta";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiAuthenticationV1beta1SelfSubjectReview.js";

/**
 * SelfSubjectReview contains the user information that the kube-apiserver has about the user making this request. When using impersonation, users will receive the user info of the user being impersonated.  If impersonation or request header authentication is used, any extra keys will have their case ignored and returned as lowercase.
 */
export interface ISelfSubjectReview extends TypeMeta {
  "apiVersion": "authentication.k8s.io/v1beta1";
"kind": "SelfSubjectReview";
/**
 * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * Status is filled in by the server with the user attributes.
 */
"status"?: IIoK8sApiAuthenticationV1beta1SelfSubjectReviewStatus;
}

/**
 * SelfSubjectReview contains the user information that the kube-apiserver has about the user making this request. When using impersonation, users will receive the user info of the user being impersonated.  If impersonation or request header authentication is used, any extra keys will have their case ignored and returned as lowercase.
 */
export class SelfSubjectReview extends Model<ISelfSubjectReview> implements ISelfSubjectReview {
  "apiVersion": ISelfSubjectReview["apiVersion"];
"kind": ISelfSubjectReview["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
"status"?: IIoK8sApiAuthenticationV1beta1SelfSubjectReviewStatus;

static apiVersion: ISelfSubjectReview["apiVersion"] = "authentication.k8s.io/v1beta1";
static kind: ISelfSubjectReview["kind"] = "SelfSubjectReview";
static is = createTypeMetaGuard<ISelfSubjectReview>(SelfSubjectReview);

constructor(data?: ModelData<ISelfSubjectReview>) {
  super();

  this.setDefinedProps({
    apiVersion: SelfSubjectReview.apiVersion,
    kind: SelfSubjectReview.kind,
    ...data
  } as ISelfSubjectReview);
}
}

setValidateFunc(SelfSubjectReview, validate as ValidateFunc<ISelfSubjectReview>);

export type {
  ISelfSubjectReview as IIoK8sApiAuthenticationV1beta1SelfSubjectReview,
  SelfSubjectReview as IoK8sApiAuthenticationV1beta1SelfSubjectReview
};
