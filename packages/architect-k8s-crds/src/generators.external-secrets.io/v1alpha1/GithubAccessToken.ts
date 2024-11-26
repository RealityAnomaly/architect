import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/GeneratorsExternalSecretsIoV1alpha1GithubAccessToken.js";

/**
 * GithubAccessToken generates ghs_ accessToken
 */
export interface IGithubAccessToken {
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
  "kind": "GithubAccessToken";
  "metadata"?: IObjectMeta;
  "spec"?: {
    "appID": string;
    /**
     * Auth configures how ESO authenticates with a Github instance.
     */
    "auth": {
      "privateKey": {
        /**
         * A reference to a specific 'key' within a Secret resource,
         * In some instances, `key` is a required field.
         */
        "secretRef": {
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
    "installID": string;
    /**
     * Map of permissions the token will have. If omitted, defaults to all permissions the GitHub App has.
     */
    "permissions"?: {
      [key: string]: string;
    };
    /**
     * List of repositories the token will have access to. If omitted, defaults to all repositories the GitHub App
     * is installed to.
     */
    "repositories"?: Array<string>;
    /**
     * URL configures the Github instance URL. Defaults to https://github.com/.
     */
    "url"?: string;
  };
}

/**
 * GithubAccessToken generates ghs_ accessToken
 */
export class GithubAccessToken extends Model<IGithubAccessToken> implements IGithubAccessToken {
  "apiVersion": IGithubAccessToken["apiVersion"];
  "kind": IGithubAccessToken["kind"];
  "metadata"?: IGithubAccessToken["metadata"];
  "spec"?: IGithubAccessToken["spec"];

static apiVersion: IGithubAccessToken["apiVersion"] = "generators.external-secrets.io/v1alpha1";
static kind: IGithubAccessToken["kind"] = "GithubAccessToken";
static is = createTypeMetaGuard<IGithubAccessToken>(GithubAccessToken);

constructor(data?: ModelData<IGithubAccessToken>) {
  super({
    apiVersion: GithubAccessToken.apiVersion,
    kind: GithubAccessToken.kind,
    ...data
  } as IGithubAccessToken);
}
}


setValidateFunc(GithubAccessToken, validate as ValidateFunc<IGithubAccessToken>);
