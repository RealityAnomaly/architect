import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "../../../apimachinery/apis/meta/v1/ObjectMeta.ts";
import { IIoK8sApiAuthorizationV1beta1SelfSubjectAccessReviewSpec } from "./SelfSubjectAccessReviewSpec.ts";
import { IIoK8sApiAuthorizationV1beta1SubjectAccessReviewStatus } from "./SubjectAccessReviewStatus.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/architect/kubernetes/types/meta";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiAuthorizationV1beta1SelfSubjectAccessReview.js";

/**
 * SelfSubjectAccessReview checks whether or the current user can perform an action.  Not filling in a spec.namespace means "in all namespaces".  Self is a special case, because users should always be able to check whether they can perform an action
 */
export interface ISelfSubjectAccessReview extends TypeMeta {
  "apiVersion": "authorization.k8s.io/v1beta1";
"kind": "SelfSubjectAccessReview";
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * Spec holds information about the request being evaluated.  user and groups must be empty
 */
"spec": IIoK8sApiAuthorizationV1beta1SelfSubjectAccessReviewSpec;
/**
 * Status is filled in by the server and indicates whether the request is allowed or not
 */
"status"?: IIoK8sApiAuthorizationV1beta1SubjectAccessReviewStatus;
}

/**
 * SelfSubjectAccessReview checks whether or the current user can perform an action.  Not filling in a spec.namespace means "in all namespaces".  Self is a special case, because users should always be able to check whether they can perform an action
 */
export class SelfSubjectAccessReview extends Model<ISelfSubjectAccessReview> implements ISelfSubjectAccessReview {
  "apiVersion": ISelfSubjectAccessReview["apiVersion"];
"kind": ISelfSubjectAccessReview["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
"spec": IIoK8sApiAuthorizationV1beta1SelfSubjectAccessReviewSpec;
"status"?: IIoK8sApiAuthorizationV1beta1SubjectAccessReviewStatus;

static apiVersion: ISelfSubjectAccessReview["apiVersion"] = "authorization.k8s.io/v1beta1";
static kind: ISelfSubjectAccessReview["kind"] = "SelfSubjectAccessReview";
static is = createTypeMetaGuard<ISelfSubjectAccessReview>(SelfSubjectAccessReview);

constructor(data?: ModelData<ISelfSubjectAccessReview>) {
  super();

  this.setDefinedProps({
    apiVersion: SelfSubjectAccessReview.apiVersion,
    kind: SelfSubjectAccessReview.kind,
    ...data
  } as ISelfSubjectAccessReview);
}
}

setValidateFunc(SelfSubjectAccessReview, validate as ValidateFunc<ISelfSubjectAccessReview>);

export type {
  ISelfSubjectAccessReview as IIoK8sApiAuthorizationV1beta1SelfSubjectAccessReview,
  SelfSubjectAccessReview as IoK8sApiAuthorizationV1beta1SelfSubjectAccessReview
};
