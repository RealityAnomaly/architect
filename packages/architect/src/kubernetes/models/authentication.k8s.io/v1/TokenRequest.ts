import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "../../../apimachinery/apis/meta/v1/ObjectMeta.ts";
import { IIoK8sApiAuthenticationV1TokenRequestSpec } from "./TokenRequestSpec.ts";
import { IIoK8sApiAuthenticationV1TokenRequestStatus } from "./TokenRequestStatus.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/architect/kubernetes/types/meta";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiAuthenticationV1TokenRequest.js";

/**
 * TokenRequest requests a token for a given service account.
 */
export interface ITokenRequest extends TypeMeta {
  "apiVersion": "authentication.k8s.io/v1";
"kind": "TokenRequest";
/**
 * metadata is the standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * spec holds information about the request being evaluated
 */
"spec"?: IIoK8sApiAuthenticationV1TokenRequestSpec;
/**
 * status is filled in by the server and indicates whether the token can be authenticated.
 */
"status"?: IIoK8sApiAuthenticationV1TokenRequestStatus;
}

/**
 * TokenRequest requests a token for a given service account.
 */
export class TokenRequest extends Model<ITokenRequest> implements ITokenRequest {
  "apiVersion": ITokenRequest["apiVersion"];
"kind": ITokenRequest["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
"spec"?: IIoK8sApiAuthenticationV1TokenRequestSpec;
"status"?: IIoK8sApiAuthenticationV1TokenRequestStatus;

static apiVersion: ITokenRequest["apiVersion"] = "authentication.k8s.io/v1";
static kind: ITokenRequest["kind"] = "TokenRequest";
static is = createTypeMetaGuard<ITokenRequest>(TokenRequest);

constructor(data?: ModelData<ITokenRequest>) {
  super();

  this.setDefinedProps({
    apiVersion: TokenRequest.apiVersion,
    kind: TokenRequest.kind,
    ...data
  } as ITokenRequest);
}
}

setValidateFunc(TokenRequest, validate as ValidateFunc<ITokenRequest>);

export type {
  ITokenRequest as IIoK8sApiAuthenticationV1TokenRequest,
  TokenRequest as IoK8sApiAuthenticationV1TokenRequest
};
