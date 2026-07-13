import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/authentication.k8s.io/v1/TokenReviewSpec.js";

/**
 * TokenReviewSpec is a description of the token authentication request.
 */
export interface ITokenReviewSpec {
  /**
 * audiences is a list of the identifiers that the resource server presented with the token identifies as. Audience-aware token authenticators will verify that the token was intended for at least one of the audiences in this list. If no audiences are provided, the audience will default to the audience of the Kubernetes apiserver.
 */
"audiences"?: Array<string>;
/**
 * token is the opaque bearer token.
 */
"token": string;
}

/**
 * TokenReviewSpec is a description of the token authentication request.
 */
export class TokenReviewSpec extends Model<ITokenReviewSpec> implements ITokenReviewSpec {
  "audiences"?: Array<string>;
"token": string;

constructor(data?: ModelData<ITokenReviewSpec>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(TokenReviewSpec, validate as ValidateFunc<ITokenReviewSpec>);

export type {
  ITokenReviewSpec as IIoK8sApiAuthenticationV1TokenReviewSpec,
  TokenReviewSpec as IoK8sApiAuthenticationV1TokenReviewSpec
};
