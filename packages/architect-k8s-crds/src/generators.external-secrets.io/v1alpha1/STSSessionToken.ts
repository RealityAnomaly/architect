import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/GeneratorsExternalSecretsIoV1alpha1STSSessionToken.js";

/**
 * STSSessionToken uses the GetSessionToken API to retrieve an authorization token.
 * The authorization token is valid for 12 hours.
 * The authorizationToken returned is a base64 encoded string that can be decoded.
 * For more information, see GetSessionToken (https://docs.aws.amazon.com/STS/latest/APIReference/API_GetSessionToken.html).
 */
export interface ISTSSessionToken {
  /**
   * APIVersion defines the versioned schema of this representation of an object.
   * Servers should convert recognized schemas to the latest internal value, and
   * may reject unrecognized values.
   * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "generators.external-secrets.io/v1alpha1";
  /**
   * Kind is a string value representing the REST resource this object represents.
   * Servers may infer this from the endpoint the client submits requests to.
   * Cannot be updated.
   * In CamelCase.
   * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "STSSessionToken";
  "metadata"?: IObjectMeta;
  "spec"?: {
    /**
     * Auth defines how to authenticate with AWS
     */
    "auth"?: {
      /**
       * Authenticate against AWS using service account tokens.
       */
      "jwt"?: {
        /**
         * A reference to a ServiceAccount resource.
         */
        "serviceAccountRef"?: {
          /**
           * Audience specifies the `aud` claim for the service account token
           * If the service account uses a well-known annotation for e.g. IRSA or GCP Workload Identity
           * then this audiences will be appended to the list
           */
          "audiences"?: Array<string>;
          /**
           * The name of the ServiceAccount resource being referred to.
           */
          "name": string;
          /**
           * Namespace of the resource being referred to. Ignored if referent is not cluster-scoped. cluster-scoped defaults
           * to the namespace of the referent.
           */
          "namespace"?: string;
        };
      };
      /**
       * AWSAuthSecretRef holds secret references for AWS credentials
       * both AccessKeyID and SecretAccessKey must be defined in order to properly authenticate.
       */
      "secretRef"?: {
        /**
         * The AccessKeyID is used for authentication
         */
        "accessKeyIDSecretRef"?: {
          /**
           * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be
           * defaulted, in others it may be required.
           */
          "key"?: string;
          /**
           * The name of the Secret resource being referred to.
           */
          "name"?: string;
          /**
           * Namespace of the resource being referred to. Ignored if referent is not cluster-scoped. cluster-scoped defaults
           * to the namespace of the referent.
           */
          "namespace"?: string;
        };
        /**
         * The SecretAccessKey is used for authentication
         */
        "secretAccessKeySecretRef"?: {
          /**
           * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be
           * defaulted, in others it may be required.
           */
          "key"?: string;
          /**
           * The name of the Secret resource being referred to.
           */
          "name"?: string;
          /**
           * Namespace of the resource being referred to. Ignored if referent is not cluster-scoped. cluster-scoped defaults
           * to the namespace of the referent.
           */
          "namespace"?: string;
        };
        /**
         * The SessionToken used for authentication
         * This must be defined if AccessKeyID and SecretAccessKey are temporary credentials
         * see: https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_use-resources.html
         */
        "sessionTokenSecretRef"?: {
          /**
           * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be
           * defaulted, in others it may be required.
           */
          "key"?: string;
          /**
           * The name of the Secret resource being referred to.
           */
          "name"?: string;
          /**
           * Namespace of the resource being referred to. Ignored if referent is not cluster-scoped. cluster-scoped defaults
           * to the namespace of the referent.
           */
          "namespace"?: string;
        };
      };
    };
    /**
     * Region specifies the region to operate in.
     */
    "region": string;
    /**
     * RequestParameters contains parameters that can be passed to the STS service.
     */
    "requestParameters"?: {
      /**
       * SerialNumber is the identification number of the MFA device that is associated with the IAM user who is making
       * the GetSessionToken call.
       * Possible values: hardware device (such as GAHT12345678) or an Amazon Resource Name (ARN) for a virtual device
       * (such as arn:aws:iam::123456789012:mfa/user)
       */
      "serialNumber"?: string;
      /**
       * SessionDuration The duration, in seconds, that the credentials should remain valid. Acceptable durations for
       * IAM user sessions range from 900 seconds (15 minutes) to 129,600 seconds (36 hours), with 43,200 seconds
       * (12 hours) as the default.
       */
      "sessionDuration"?: number;
      /**
       * TokenCode is the value provided by the MFA device, if MFA is required.
       */
      "tokenCode"?: string;
    };
    /**
     * You can assume a role before making calls to the
     * desired AWS service.
     */
    "role"?: string;
  };
}

/**
 * STSSessionToken uses the GetSessionToken API to retrieve an authorization token.
 * The authorization token is valid for 12 hours.
 * The authorizationToken returned is a base64 encoded string that can be decoded.
 * For more information, see GetSessionToken (https://docs.aws.amazon.com/STS/latest/APIReference/API_GetSessionToken.html).
 */
export class STSSessionToken extends Model<ISTSSessionToken> implements ISTSSessionToken {
  "apiVersion": ISTSSessionToken["apiVersion"];
  "kind": ISTSSessionToken["kind"];
  "metadata"?: ISTSSessionToken["metadata"];
  "spec"?: ISTSSessionToken["spec"];

static apiVersion: ISTSSessionToken["apiVersion"] = "generators.external-secrets.io/v1alpha1";
static kind: ISTSSessionToken["kind"] = "STSSessionToken";
static is = createTypeMetaGuard<ISTSSessionToken>(STSSessionToken);

constructor(data?: ModelData<ISTSSessionToken>) {
  super({
    apiVersion: STSSessionToken.apiVersion,
    kind: STSSessionToken.kind,
    ...data
  } as ISTSSessionToken);
}
}


setValidateFunc(STSSessionToken, validate as ValidateFunc<ISTSSessionToken>);
