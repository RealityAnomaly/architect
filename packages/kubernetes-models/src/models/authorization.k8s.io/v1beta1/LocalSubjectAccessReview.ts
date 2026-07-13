import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "../../../apimachinery/apis/meta/v1/ObjectMeta.ts";
import { IIoK8sApiAuthorizationV1beta1SubjectAccessReviewSpec } from "./SubjectAccessReviewSpec.ts";
import { IIoK8sApiAuthorizationV1beta1SubjectAccessReviewStatus } from "./SubjectAccessReviewStatus.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/kubernetes-types/meta";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/authorization.k8s.io/v1beta1/LocalSubjectAccessReview.js";

/**
 * LocalSubjectAccessReview checks whether or not a user or group can perform an action in a given namespace. Having a namespace scoped resource makes it much easier to grant namespace scoped policy that includes permissions checking.
 */
export interface ILocalSubjectAccessReview extends TypeMeta {
  "apiVersion": "authorization.k8s.io/v1beta1";
"kind": "LocalSubjectAccessReview";
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * Spec holds information about the request being evaluated.  spec.namespace must be equal to the namespace you made the request against.  If empty, it is defaulted.
 */
"spec": IIoK8sApiAuthorizationV1beta1SubjectAccessReviewSpec;
/**
 * Status is filled in by the server and indicates whether the request is allowed or not
 */
"status"?: IIoK8sApiAuthorizationV1beta1SubjectAccessReviewStatus;
}

/**
 * LocalSubjectAccessReview checks whether or not a user or group can perform an action in a given namespace. Having a namespace scoped resource makes it much easier to grant namespace scoped policy that includes permissions checking.
 */
export class LocalSubjectAccessReview extends Model<ILocalSubjectAccessReview> implements ILocalSubjectAccessReview {
  "apiVersion": ILocalSubjectAccessReview["apiVersion"];
"kind": ILocalSubjectAccessReview["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
"spec": IIoK8sApiAuthorizationV1beta1SubjectAccessReviewSpec;
"status"?: IIoK8sApiAuthorizationV1beta1SubjectAccessReviewStatus;

static apiVersion: ILocalSubjectAccessReview["apiVersion"] = "authorization.k8s.io/v1beta1";
static kind: ILocalSubjectAccessReview["kind"] = "LocalSubjectAccessReview";
static is: TypeMetaGuard<ILocalSubjectAccessReview> = createTypeMetaGuard<ILocalSubjectAccessReview>(LocalSubjectAccessReview);

constructor(data?: ModelData<ILocalSubjectAccessReview>) {
  super();

  this.setDefinedProps({
    apiVersion: LocalSubjectAccessReview.apiVersion,
    kind: LocalSubjectAccessReview.kind,
    ...data
  } as ILocalSubjectAccessReview);
}
}

setValidateFunc(LocalSubjectAccessReview, validate as ValidateFunc<ILocalSubjectAccessReview>);

export type {
  ILocalSubjectAccessReview as IIoK8sApiAuthorizationV1beta1LocalSubjectAccessReview,
  LocalSubjectAccessReview as IoK8sApiAuthorizationV1beta1LocalSubjectAccessReview
};
