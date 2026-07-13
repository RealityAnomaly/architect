import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "../../../apimachinery/apis/meta/v1/ObjectMeta.ts";
import { IIoK8sApiAuthorizationV1SubjectAccessReviewSpec } from "./SubjectAccessReviewSpec.ts";
import { IIoK8sApiAuthorizationV1SubjectAccessReviewStatus } from "./SubjectAccessReviewStatus.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/architect/kubernetes/types/meta";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiAuthorizationV1LocalSubjectAccessReview.js";

/**
 * LocalSubjectAccessReview checks whether or not a user or group can perform an action in a given namespace. Having a namespace scoped resource makes it much easier to grant namespace scoped policy that includes permissions checking.
 */
export interface ILocalSubjectAccessReview extends TypeMeta {
  "apiVersion": "authorization.k8s.io/v1";
"kind": "LocalSubjectAccessReview";
/**
 * metadata is the standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * spec holds information about the request being evaluated.  spec.namespace must be equal to the namespace you made the request against.  If empty, it is defaulted.
 */
"spec": IIoK8sApiAuthorizationV1SubjectAccessReviewSpec;
/**
 * status is filled in by the server and indicates whether the request is allowed or not
 */
"status"?: IIoK8sApiAuthorizationV1SubjectAccessReviewStatus;
}

/**
 * LocalSubjectAccessReview checks whether or not a user or group can perform an action in a given namespace. Having a namespace scoped resource makes it much easier to grant namespace scoped policy that includes permissions checking.
 */
export class LocalSubjectAccessReview extends Model<ILocalSubjectAccessReview> implements ILocalSubjectAccessReview {
  "apiVersion": ILocalSubjectAccessReview["apiVersion"];
"kind": ILocalSubjectAccessReview["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
"spec": IIoK8sApiAuthorizationV1SubjectAccessReviewSpec;
"status"?: IIoK8sApiAuthorizationV1SubjectAccessReviewStatus;

static apiVersion: ILocalSubjectAccessReview["apiVersion"] = "authorization.k8s.io/v1";
static kind: ILocalSubjectAccessReview["kind"] = "LocalSubjectAccessReview";
static is = createTypeMetaGuard<ILocalSubjectAccessReview>(LocalSubjectAccessReview);

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
  ILocalSubjectAccessReview as IIoK8sApiAuthorizationV1LocalSubjectAccessReview,
  LocalSubjectAccessReview as IoK8sApiAuthorizationV1LocalSubjectAccessReview
};
