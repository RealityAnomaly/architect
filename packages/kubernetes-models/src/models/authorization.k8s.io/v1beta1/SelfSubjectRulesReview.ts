import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "../../../apimachinery/apis/meta/v1/ObjectMeta.ts";
import { IIoK8sApiAuthorizationV1beta1SelfSubjectRulesReviewSpec } from "./SelfSubjectRulesReviewSpec.ts";
import { IIoK8sApiAuthorizationV1beta1SubjectRulesReviewStatus } from "./SubjectRulesReviewStatus.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/kubernetes-types/meta";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/authorization.k8s.io/v1beta1/SelfSubjectRulesReview.js";

/**
 * SelfSubjectRulesReview enumerates the set of actions the current user can perform within a namespace. The returned list of actions may be incomplete depending on the server's authorization mode, and any errors experienced during the evaluation. SelfSubjectRulesReview should be used by UIs to show/hide actions, or to quickly let an end user reason about their permissions. It should NOT Be used by external systems to drive authorization decisions as this raises confused deputy, cache lifetime/revocation, and correctness concerns. SubjectAccessReview, and LocalAccessReview are the correct way to defer authorization decisions to the API server.
 */
export interface ISelfSubjectRulesReview extends TypeMeta {
  "apiVersion": "authorization.k8s.io/v1beta1";
"kind": "SelfSubjectRulesReview";
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * Spec holds information about the request being evaluated.
 */
"spec": IIoK8sApiAuthorizationV1beta1SelfSubjectRulesReviewSpec;
/**
 * Status is filled in by the server and indicates the set of actions a user can perform.
 */
"status"?: IIoK8sApiAuthorizationV1beta1SubjectRulesReviewStatus;
}

/**
 * SelfSubjectRulesReview enumerates the set of actions the current user can perform within a namespace. The returned list of actions may be incomplete depending on the server's authorization mode, and any errors experienced during the evaluation. SelfSubjectRulesReview should be used by UIs to show/hide actions, or to quickly let an end user reason about their permissions. It should NOT Be used by external systems to drive authorization decisions as this raises confused deputy, cache lifetime/revocation, and correctness concerns. SubjectAccessReview, and LocalAccessReview are the correct way to defer authorization decisions to the API server.
 */
export class SelfSubjectRulesReview extends Model<ISelfSubjectRulesReview> implements ISelfSubjectRulesReview {
  "apiVersion": ISelfSubjectRulesReview["apiVersion"];
"kind": ISelfSubjectRulesReview["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
"spec": IIoK8sApiAuthorizationV1beta1SelfSubjectRulesReviewSpec;
"status"?: IIoK8sApiAuthorizationV1beta1SubjectRulesReviewStatus;

static apiVersion: ISelfSubjectRulesReview["apiVersion"] = "authorization.k8s.io/v1beta1";
static kind: ISelfSubjectRulesReview["kind"] = "SelfSubjectRulesReview";
static is: TypeMetaGuard<ISelfSubjectRulesReview> = createTypeMetaGuard<ISelfSubjectRulesReview>(SelfSubjectRulesReview);

constructor(data?: ModelData<ISelfSubjectRulesReview>) {
  super();

  this.setDefinedProps({
    apiVersion: SelfSubjectRulesReview.apiVersion,
    kind: SelfSubjectRulesReview.kind,
    ...data
  } as ISelfSubjectRulesReview);
}
}

setValidateFunc(SelfSubjectRulesReview, validate as ValidateFunc<ISelfSubjectRulesReview>);

export type {
  ISelfSubjectRulesReview as IIoK8sApiAuthorizationV1beta1SelfSubjectRulesReview,
  SelfSubjectRulesReview as IoK8sApiAuthorizationV1beta1SelfSubjectRulesReview
};
