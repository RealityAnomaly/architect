import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "../../../apimachinery/apis/meta/v1/ObjectMeta.ts";
import { IIoK8sApiAuthenticationV1beta1TokenReviewSpec } from "./TokenReviewSpec.ts";
import { IIoK8sApiAuthenticationV1beta1TokenReviewStatus } from "./TokenReviewStatus.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/kubernetes-types/meta";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/authentication.k8s.io/v1beta1/TokenReview.js";

/**
 * TokenReview attempts to authenticate a token to a known user. Note: TokenReview requests may be cached by the webhook token authenticator plugin in the kube-apiserver.
 */
export interface ITokenReview extends TypeMeta {
  "apiVersion": "authentication.k8s.io/v1beta1";
"kind": "TokenReview";
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * Spec holds information about the request being evaluated
 */
"spec": IIoK8sApiAuthenticationV1beta1TokenReviewSpec;
/**
 * Status is filled in by the server and indicates whether the request can be authenticated.
 */
"status"?: IIoK8sApiAuthenticationV1beta1TokenReviewStatus;
}

/**
 * TokenReview attempts to authenticate a token to a known user. Note: TokenReview requests may be cached by the webhook token authenticator plugin in the kube-apiserver.
 */
export class TokenReview extends Model<ITokenReview> implements ITokenReview {
  "apiVersion": ITokenReview["apiVersion"];
"kind": ITokenReview["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
"spec": IIoK8sApiAuthenticationV1beta1TokenReviewSpec;
"status"?: IIoK8sApiAuthenticationV1beta1TokenReviewStatus;

static apiVersion: ITokenReview["apiVersion"] = "authentication.k8s.io/v1beta1";
static kind: ITokenReview["kind"] = "TokenReview";
static is: TypeMetaGuard<ITokenReview> = createTypeMetaGuard<ITokenReview>(TokenReview);

constructor(data?: ModelData<ITokenReview>) {
  super();

  this.setDefinedProps({
    apiVersion: TokenReview.apiVersion,
    kind: TokenReview.kind,
    ...data
  } as ITokenReview);
}
}

setValidateFunc(TokenReview, validate as ValidateFunc<ITokenReview>);

export type {
  ITokenReview as IIoK8sApiAuthenticationV1beta1TokenReview,
  TokenReview as IoK8sApiAuthenticationV1beta1TokenReview
};
