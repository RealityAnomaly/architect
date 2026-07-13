import { IIoK8sApiAuthenticationV1BoundObjectReference } from "./BoundObjectReference.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiAuthenticationV1TokenRequestSpec.js";

/**
 * TokenRequestSpec contains client provided parameters of a token request.
 */
export interface ITokenRequestSpec {
  /**
 * audiences are the intendend audiences of the token. A recipient of a token must identify themself with an identifier in the list of audiences of the token, and otherwise should reject the token. A token issued for multiple audiences may be used to authenticate against any of the audiences listed but implies a high degree of trust between the target audiences.
 */
"audiences"?: Array<string>;
/**
 * boundObjectRef is a reference to an object that the token will be bound to. The token will only be valid for as long as the bound object exists. NOTE: The API server's TokenReview endpoint will validate the BoundObjectRef, but other audiences may not. Keep ExpirationSeconds small if you want prompt revocation.
 */
"boundObjectRef"?: IIoK8sApiAuthenticationV1BoundObjectReference;
/**
 * expirationSeconds is the requested duration of validity of the request. The token issuer may return a token with a different validity duration so a client needs to check the 'expiration' field in a response.
 */
"expirationSeconds"?: number;
}

/**
 * TokenRequestSpec contains client provided parameters of a token request.
 */
export class TokenRequestSpec extends Model<ITokenRequestSpec> implements ITokenRequestSpec {
  "audiences"?: Array<string>;
"boundObjectRef"?: IIoK8sApiAuthenticationV1BoundObjectReference;
"expirationSeconds"?: number;

constructor(data?: ModelData<ITokenRequestSpec>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(TokenRequestSpec, validate as ValidateFunc<ITokenRequestSpec>);

export type {
  ITokenRequestSpec as IIoK8sApiAuthenticationV1TokenRequestSpec,
  TokenRequestSpec as IoK8sApiAuthenticationV1TokenRequestSpec
};
