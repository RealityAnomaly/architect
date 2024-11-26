import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/GeneratorsExternalSecretsIoV1alpha1Webhook.js";

/**
 * Webhook connects to a third party API server to handle the secrets generation
 * configuration parameters in spec.
 * You can specify the server, the token, and additional body parameters.
 * See documentation for the full API specification for requests and responses.
 */
export interface IWebhook {
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
  "kind": "Webhook";
  "metadata"?: IObjectMeta;
  /**
   * WebhookSpec controls the behavior of the external generator. Any body parameters should be passed to the server through the parameters field.
   */
  "spec"?: {
    /**
     * Body
     */
    "body"?: string;
    /**
     * PEM encoded CA bundle used to validate webhook server certificate. Only used
     * if the Server URL is using HTTPS protocol. This parameter is ignored for
     * plain HTTP protocol connection. If not set the system root certificates
     * are used to validate the TLS connection.
     */
    "caBundle"?: string;
    /**
     * The provider for the CA bundle to use to validate webhook server certificate.
     */
    "caProvider"?: {
      /**
       * The key the value inside of the provider type to use, only used with "Secret" type
       */
      "key"?: string;
      /**
       * The name of the object located at the provider type.
       */
      "name": string;
      /**
       * The namespace the Provider type is in.
       */
      "namespace"?: string;
      /**
       * The type of provider to use such as "Secret", or "ConfigMap".
       */
      "type": "Secret" | "ConfigMap";
    };
    /**
     * Headers
     */
    "headers"?: {
      [key: string]: string;
    };
    /**
     * Webhook Method
     */
    "method"?: string;
    /**
     * Result formatting
     */
    "result": {
      /**
       * Json path of return value
       */
      "jsonPath"?: string;
    };
    /**
     * Secrets to fill in templates
     * These secrets will be passed to the templating function as key value pairs under the given name
     */
    "secrets"?: Array<{
      /**
       * Name of this secret in templates
       */
      "name": string;
      /**
       * Secret ref to fill in credentials
       */
      "secretRef": {
        /**
         * The key where the token is found.
         */
        "key"?: string;
        /**
         * The name of the Secret resource being referred to.
         */
        "name"?: string;
      };
    }>;
    /**
     * Timeout
     */
    "timeout"?: string;
    /**
     * Webhook url to call
     */
    "url": string;
  };
}

/**
 * Webhook connects to a third party API server to handle the secrets generation
 * configuration parameters in spec.
 * You can specify the server, the token, and additional body parameters.
 * See documentation for the full API specification for requests and responses.
 */
export class Webhook extends Model<IWebhook> implements IWebhook {
  "apiVersion": IWebhook["apiVersion"];
  "kind": IWebhook["kind"];
  "metadata"?: IWebhook["metadata"];
  "spec"?: IWebhook["spec"];

static apiVersion: IWebhook["apiVersion"] = "generators.external-secrets.io/v1alpha1";
static kind: IWebhook["kind"] = "Webhook";
static is = createTypeMetaGuard<IWebhook>(Webhook);

constructor(data?: ModelData<IWebhook>) {
  super({
    apiVersion: Webhook.apiVersion,
    kind: Webhook.kind,
    ...data
  } as IWebhook);
}
}


setValidateFunc(Webhook, validate as ValidateFunc<IWebhook>);
