import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/ExternalSecretsIoV1alpha1PushSecret.js";

export interface IPushSecret {
  /**
   * APIVersion defines the versioned schema of this representation of an object.
   * Servers should convert recognized schemas to the latest internal value, and
   * may reject unrecognized values.
   * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "external-secrets.io/v1alpha1";
  /**
   * Kind is a string value representing the REST resource this object represents.
   * Servers may infer this from the endpoint the client submits requests to.
   * Cannot be updated.
   * In CamelCase.
   * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "PushSecret";
  "metadata"?: IObjectMeta;
  /**
   * PushSecretSpec configures the behavior of the PushSecret.
   */
  "spec"?: {
    /**
     * Secret Data that should be pushed to providers
     */
    "data"?: Array<{
      /**
       * Used to define a conversion Strategy for the secret keys
       */
      "conversionStrategy"?: "None" | "ReverseUnicode";
      /**
       * Match a given Secret Key to be pushed to the provider.
       */
      "match": {
        /**
         * Remote Refs to push to providers.
         */
        "remoteRef": {
          /**
           * Name of the property in the resulting secret
           */
          "property"?: string;
          /**
           * Name of the resulting provider secret.
           */
          "remoteKey": string;
        };
        /**
         * Secret Key to be pushed
         */
        "secretKey"?: string;
      };
      /**
       * Metadata is metadata attached to the secret.
       * The structure of metadata is provider specific, please look it up in the provider documentation.
       */
      "metadata"?: any;
    }>;
    /**
     * Deletion Policy to handle Secrets in the provider. Possible Values: "Delete/None". Defaults to "None".
     */
    "deletionPolicy"?: "Delete" | "None";
    /**
     * The Interval to which External Secrets will try to push a secret definition
     */
    "refreshInterval"?: string;
    "secretStoreRefs": Array<{
      /**
       * Kind of the SecretStore resource (SecretStore or ClusterSecretStore)
       * Defaults to `SecretStore`
       */
      "kind"?: string;
      /**
       * Optionally, sync to secret stores with label selector
       */
      "labelSelector"?: {
        /**
         * matchExpressions is a list of label selector requirements. The requirements are ANDed.
         */
        "matchExpressions"?: Array<{
          /**
           * key is the label key that the selector applies to.
           */
          "key": string;
          /**
           * operator represents a key's relationship to a set of values.
           * Valid operators are In, NotIn, Exists and DoesNotExist.
           */
          "operator": string;
          /**
           * values is an array of string values. If the operator is In or NotIn,
           * the values array must be non-empty. If the operator is Exists or DoesNotExist,
           * the values array must be empty. This array is replaced during a strategic
           * merge patch.
           */
          "values"?: Array<string>;
        }>;
        /**
         * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
         * map is equivalent to an element of matchExpressions, whose key field is "key", the
         * operator is "In", and the values array contains only "value". The requirements are ANDed.
         */
        "matchLabels"?: {
          [key: string]: string;
        };
      };
      /**
       * Optionally, sync to the SecretStore of the given name
       */
      "name"?: string;
    }>;
    /**
     * The Secret Selector (k8s source) for the Push Secret
     */
    "selector": {
      /**
       * Point to a generator to create a Secret.
       */
      "generatorRef"?: {
        /**
         * Specify the apiVersion of the generator resource
         */
        "apiVersion"?: string;
        /**
         * Specify the Kind of the resource, e.g. Password, ACRAccessToken etc.
         */
        "kind": string;
        /**
         * Specify the name of the generator resource
         */
        "name": string;
      };
      /**
       * Select a Secret to Push.
       */
      "secret"?: {
        /**
         * Name of the Secret. The Secret must exist in the same namespace as the PushSecret manifest.
         */
        "name": string;
      };
    };
    /**
     * Template defines a blueprint for the created Secret resource.
     */
    "template"?: {
      "data"?: {
        [key: string]: string;
      };
      /**
       * EngineVersion specifies the template engine version
       * that should be used to compile/execute the
       * template specified in .data and .templateFrom[].
       */
      "engineVersion"?: "v1" | "v2";
      "mergePolicy"?: "Replace" | "Merge";
      /**
       * ExternalSecretTemplateMetadata defines metadata fields for the Secret blueprint.
       */
      "metadata"?: {
        "annotations"?: {
          [key: string]: string;
        };
        "labels"?: {
          [key: string]: string;
        };
      };
      "templateFrom"?: Array<{
        "configMap"?: {
          "items": Array<{
            "key": string;
            "templateAs"?: "Values" | "KeysAndValues";
          }>;
          "name": string;
        };
        "literal"?: string;
        "secret"?: {
          "items": Array<{
            "key": string;
            "templateAs"?: "Values" | "KeysAndValues";
          }>;
          "name": string;
        };
        "target"?: "Data" | "Annotations" | "Labels";
      }>;
      "type"?: string;
    };
    /**
     * UpdatePolicy to handle Secrets in the provider. Possible Values: "Replace/IfNotExists". Defaults to "Replace".
     */
    "updatePolicy"?: "Replace" | "IfNotExists";
  };
  /**
   * PushSecretStatus indicates the history of the status of PushSecret.
   */
  "status"?: {
    "conditions"?: Array<{
      "lastTransitionTime"?: string;
      "message"?: string;
      "reason"?: string;
      "status": string;
      /**
       * PushSecretConditionType indicates the condition of the PushSecret.
       */
      "type": string;
    }>;
    /**
     * refreshTime is the time and date the external secret was fetched and
     * the target secret updated
     */
    "refreshTime"?: string;
    /**
     * Synced PushSecrets, including secrets that already exist in provider.
     * Matches secret stores to PushSecretData that was stored to that secret store.
     */
    "syncedPushSecrets"?: {
      [key: string]: {
        [key: string]: {
          /**
           * Used to define a conversion Strategy for the secret keys
           */
          "conversionStrategy"?: "None" | "ReverseUnicode";
          /**
           * Match a given Secret Key to be pushed to the provider.
           */
          "match": {
            /**
             * Remote Refs to push to providers.
             */
            "remoteRef": {
              /**
               * Name of the property in the resulting secret
               */
              "property"?: string;
              /**
               * Name of the resulting provider secret.
               */
              "remoteKey": string;
            };
            /**
             * Secret Key to be pushed
             */
            "secretKey"?: string;
          };
          /**
           * Metadata is metadata attached to the secret.
           * The structure of metadata is provider specific, please look it up in the provider documentation.
           */
          "metadata"?: any;
        };
      };
    };
    /**
     * SyncedResourceVersion keeps track of the last synced version.
     */
    "syncedResourceVersion"?: string;
  };
}

export class PushSecret extends Model<IPushSecret> implements IPushSecret {
  "apiVersion": IPushSecret["apiVersion"];
  "kind": IPushSecret["kind"];
  "metadata"?: IPushSecret["metadata"];
  "spec"?: IPushSecret["spec"];
  "status"?: IPushSecret["status"];

static apiVersion: IPushSecret["apiVersion"] = "external-secrets.io/v1alpha1";
static kind: IPushSecret["kind"] = "PushSecret";
static is = createTypeMetaGuard<IPushSecret>(PushSecret);

constructor(data?: ModelData<IPushSecret>) {
  super({
    apiVersion: PushSecret.apiVersion,
    kind: PushSecret.kind,
    ...data
  } as IPushSecret);
}
}


setValidateFunc(PushSecret, validate as ValidateFunc<IPushSecret>);
