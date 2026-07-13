import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "../../../apimachinery/apis/meta/v1/ObjectMeta.ts";
import { IIoK8sApiAuthorizationV1beta1SubjectAccessReviewSpec } from "./SubjectAccessReviewSpec.ts";
import { IIoK8sApiAuthorizationV1beta1SubjectAccessReviewStatus } from "./SubjectAccessReviewStatus.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/kubernetes-types/meta";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/authorization.k8s.io/v1beta1/SubjectAccessReview.js";

/**
 * SubjectAccessReview checks whether or not a user or group can perform an action.
 */
export interface ISubjectAccessReview extends TypeMeta {
  "apiVersion": "authorization.k8s.io/v1beta1";
"kind": "SubjectAccessReview";
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * Spec holds information about the request being evaluated
 */
"spec": IIoK8sApiAuthorizationV1beta1SubjectAccessReviewSpec;
/**
 * Status is filled in by the server and indicates whether the request is allowed or not
 */
"status"?: IIoK8sApiAuthorizationV1beta1SubjectAccessReviewStatus;
}

/**
 * SubjectAccessReview checks whether or not a user or group can perform an action.
 */
export class SubjectAccessReview extends Model<ISubjectAccessReview> implements ISubjectAccessReview {
  "apiVersion": ISubjectAccessReview["apiVersion"];
"kind": ISubjectAccessReview["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
"spec": IIoK8sApiAuthorizationV1beta1SubjectAccessReviewSpec;
"status"?: IIoK8sApiAuthorizationV1beta1SubjectAccessReviewStatus;

static apiVersion: ISubjectAccessReview["apiVersion"] = "authorization.k8s.io/v1beta1";
static kind: ISubjectAccessReview["kind"] = "SubjectAccessReview";
static is: TypeMetaGuard<ISubjectAccessReview> = createTypeMetaGuard<ISubjectAccessReview>(SubjectAccessReview);

constructor(data?: ModelData<ISubjectAccessReview>) {
  super();

  this.setDefinedProps({
    apiVersion: SubjectAccessReview.apiVersion,
    kind: SubjectAccessReview.kind,
    ...data
  } as ISubjectAccessReview);
}
}

setValidateFunc(SubjectAccessReview, validate as ValidateFunc<ISubjectAccessReview>);

export type {
  ISubjectAccessReview as IIoK8sApiAuthorizationV1beta1SubjectAccessReview,
  SubjectAccessReview as IoK8sApiAuthorizationV1beta1SubjectAccessReview
};
