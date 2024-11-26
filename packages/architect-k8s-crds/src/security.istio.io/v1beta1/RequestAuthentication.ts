import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/SecurityIstioIoV1beta1RequestAuthentication.js";

export interface IRequestAuthentication {
  /**
   * RequestAuthentication defines what request authentication methods are supported by a workload.
   */
  "spec"?: {
    /**
     * Define the list of JWTs that can be validated at the selected workloads' proxy.
     */
    "jwtRules"?: Array<{
      "audiences"?: Array<string>;
      /**
       * If set to true, the original token will be kept for the upstream request.
       */
      "forwardOriginalToken"?: boolean;
      /**
       * List of header locations from which JWT is expected.
       */
      "fromHeaders"?: Array<{
        /**
         * The HTTP header name.
         */
        "name"?: string;
        /**
         * The prefix that should be stripped before decoding the token.
         */
        "prefix"?: string;
      }>;
      /**
       * List of query parameters from which JWT is expected.
       */
      "fromParams"?: Array<string>;
      /**
       * Identifies the issuer that issued the JWT.
       */
      "issuer"?: string;
      /**
       * JSON Web Key Set of public keys to validate signature of the JWT.
       */
      "jwks"?: string;
      "jwksUri"?: string;
      "jwks_uri"?: string;
      "outputPayloadToHeader"?: string;
    }>;
    /**
     * Optional.
     */
    "selector"?: {
      "matchLabels"?: {
        [key: string]: string;
      };
    };
  };
  "status"?: {
  };
  "apiVersion": "security.istio.io/v1beta1";
  "kind": "RequestAuthentication";
  "metadata"?: IObjectMeta;
}

export class RequestAuthentication extends Model<IRequestAuthentication> implements IRequestAuthentication {
  "spec"?: IRequestAuthentication["spec"];
  "status"?: IRequestAuthentication["status"];
  "apiVersion": IRequestAuthentication["apiVersion"];
  "kind": IRequestAuthentication["kind"];
  "metadata"?: IRequestAuthentication["metadata"];

static apiVersion: IRequestAuthentication["apiVersion"] = "security.istio.io/v1beta1";
static kind: IRequestAuthentication["kind"] = "RequestAuthentication";
static is = createTypeMetaGuard<IRequestAuthentication>(RequestAuthentication);

constructor(data?: ModelData<IRequestAuthentication>) {
  super({
    apiVersion: RequestAuthentication.apiVersion,
    kind: RequestAuthentication.kind,
    ...data
  } as IRequestAuthentication);
}
}


setValidateFunc(RequestAuthentication, validate as ValidateFunc<IRequestAuthentication>);
