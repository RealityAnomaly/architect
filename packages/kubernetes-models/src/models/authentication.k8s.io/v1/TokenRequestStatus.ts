import { IIoK8sApimachineryPkgApisMetaV1Time } from "../../../apimachinery/apis/meta/v1/Time.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/authentication.k8s.io/v1/TokenRequestStatus.js";

/**
 * TokenRequestStatus is the result of a token request.
 */
export interface ITokenRequestStatus {
  /**
 * expirationTimestamp is the time of expiration of the returned token.
 */
"expirationTimestamp"?: IIoK8sApimachineryPkgApisMetaV1Time;
/**
 * token is the opaque bearer token.
 */
"token"?: string;
}

/**
 * TokenRequestStatus is the result of a token request.
 */
export class TokenRequestStatus extends Model<ITokenRequestStatus> implements ITokenRequestStatus {
  "expirationTimestamp"?: IIoK8sApimachineryPkgApisMetaV1Time;
"token"?: string;

constructor(data?: ModelData<ITokenRequestStatus>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(TokenRequestStatus, validate as ValidateFunc<ITokenRequestStatus>);

export type {
  ITokenRequestStatus as IIoK8sApiAuthenticationV1TokenRequestStatus,
  TokenRequestStatus as IoK8sApiAuthenticationV1TokenRequestStatus
};
