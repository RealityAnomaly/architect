import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiStorageV1beta1TokenRequest.js";

/**
 * TokenRequest contains parameters of a service account token.
 */
export interface ITokenRequest {
  /**
 * Audience is the intended audience of the token in "TokenRequestSpec". It will default to the audiences of kube apiserver.
 */
"audience": string;
/**
 * ExpirationSeconds is the duration of validity of the token in "TokenRequestSpec". It has the same default value of "ExpirationSeconds" in "TokenRequestSpec"
 */
"expirationSeconds"?: number;
}

/**
 * TokenRequest contains parameters of a service account token.
 */
export class TokenRequest extends Model<ITokenRequest> implements ITokenRequest {
  "audience": string;
"expirationSeconds"?: number;

constructor(data?: ModelData<ITokenRequest>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(TokenRequest, validate as ValidateFunc<ITokenRequest>);

export type {
  ITokenRequest as IIoK8sApiStorageV1beta1TokenRequest,
  TokenRequest as IoK8sApiStorageV1beta1TokenRequest
};
