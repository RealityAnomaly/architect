import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/ExternalSecretsIoV1beta1ExternalSecret.js";

/**
 * ExternalSecret is the Schema for the external-secrets API.
 */
export interface IExternalSecret {
  /**
   * APIVersion defines the versioned schema of this representation of an object.
   * Servers should convert recognized schemas to the latest internal value, and
   * may reject unrecognized values.
   * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "external-secrets.io/v1beta1";
  /**
   * Kind is a string value representing the REST resource this object represents.
   * Servers may infer this from the endpoint the client submits requests to.
   * Cannot be updated.
   * In CamelCase.
   * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "ExternalSecret";
  "metadata"?: IObjectMeta;
  /**
   * ExternalSecretSpec defines the desired state of ExternalSecret.
   */
  "spec"?: {
    /**
     * Data defines the connection between the Kubernetes Secret keys and the Provider data
     */
    "data"?: Array<{
      /**
       * RemoteRef points to the remote secret and defines
       * which secret (version/property/..) to fetch.
       */
      "remoteRef": {
        /**
         * Used to define a conversion Strategy
         */
        "conversionStrategy"?: "Default" | "Unicode";
        /**
         * Used to define a decoding Strategy
         */
        "decodingStrategy"?: "Auto" | "Base64" | "Base64URL" | "None";
        /**
         * Key is the key used in the Provider, mandatory
         */
        "key": string;
        /**
         * Policy for fetching tags/labels from provider secrets, possible options are Fetch, None. Defaults to None
         */
        "metadataPolicy"?: "None" | "Fetch";
        /**
         * Used to select a specific property of the Provider value (if a map), if supported
         */
        "property"?: string;
        /**
         * Used to select a specific version of the Provider value, if supported
         */
        "version"?: string;
      };
      /**
       * SecretKey defines the key in which the controller stores
       * the value. This is the key in the Kind=Secret
       */
      "secretKey": string;
      /**
       * SourceRef allows you to override the source
       * from which the value will pulled from.
       */
      "sourceRef"?: {
        /**
         * GeneratorRef points to a generator custom resource.
         * 
         * Deprecated: The generatorRef is not implemented in .data[].
         * this will be removed with v1.
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
         * SecretStoreRef defines which SecretStore to fetch the ExternalSecret data.
         */
        "storeRef"?: {
          /**
           * Kind of the SecretStore resource (SecretStore or ClusterSecretStore)
           * Defaults to `SecretStore`
           */
          "kind"?: string;
          /**
           * Name of the SecretStore resource
           */
          "name": string;
        };
      };
    }>;
    /**
     * DataFrom is used to fetch all properties from a specific Provider data
     * If multiple entries are specified, the Secret keys are merged in the specified order
     */
    "dataFrom"?: Array<{
      /**
       * Used to extract multiple key/value pairs from one secret
       * Note: Extract does not support sourceRef.Generator or sourceRef.GeneratorRef.
       */
      "extract"?: {
        /**
         * Used to define a conversion Strategy
         */
        "conversionStrategy"?: "Default" | "Unicode";
        /**
         * Used to define a decoding Strategy
         */
        "decodingStrategy"?: "Auto" | "Base64" | "Base64URL" | "None";
        /**
         * Key is the key used in the Provider, mandatory
         */
        "key": string;
        /**
         * Policy for fetching tags/labels from provider secrets, possible options are Fetch, None. Defaults to None
         */
        "metadataPolicy"?: "None" | "Fetch";
        /**
         * Used to select a specific property of the Provider value (if a map), if supported
         */
        "property"?: string;
        /**
         * Used to select a specific version of the Provider value, if supported
         */
        "version"?: string;
      };
      /**
       * Used to find secrets based on tags or regular expressions
       * Note: Find does not support sourceRef.Generator or sourceRef.GeneratorRef.
       */
      "find"?: {
        /**
         * Used to define a conversion Strategy
         */
        "conversionStrategy"?: "Default" | "Unicode";
        /**
         * Used to define a decoding Strategy
         */
        "decodingStrategy"?: "Auto" | "Base64" | "Base64URL" | "None";
        /**
         * Finds secrets based on the name.
         */
        "name"?: {
          /**
           * Finds secrets base
           */
          "regexp"?: string;
        };
        /**
         * A root path to start the find operations.
         */
        "path"?: string;
        /**
         * Find secrets based on tags.
         */
        "tags"?: {
          [key: string]: string;
        };
      };
      /**
       * Used to rewrite secret Keys after getting them from the secret Provider
       * Multiple Rewrite operations can be provided. They are applied in a layered order (first to last)
       */
      "rewrite"?: Array<{
        /**
         * Used to rewrite with regular expressions.
         * The resulting key will be the output of a regexp.ReplaceAll operation.
         */
        "regexp"?: {
          /**
           * Used to define the regular expression of a re.Compiler.
           */
          "source": string;
          /**
           * Used to define the target pattern of a ReplaceAll operation.
           */
          "target": string;
        };
        /**
         * Used to apply string transformation on the secrets.
         * The resulting key will be the output of the template applied by the operation.
         */
        "transform"?: {
          /**
           * Used to define the template to apply on the secret name.
           * `.value ` will specify the secret name in the template.
           */
          "template": string;
        };
      }>;
      /**
       * SourceRef points to a store or generator
       * which contains secret values ready to use.
       * Use this in combination with Extract or Find pull values out of
       * a specific SecretStore.
       * When sourceRef points to a generator Extract or Find is not supported.
       * The generator returns a static map of values
       */
      "sourceRef"?: {
        /**
         * GeneratorRef points to a generator custom resource.
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
         * SecretStoreRef defines which SecretStore to fetch the ExternalSecret data.
         */
        "storeRef"?: {
          /**
           * Kind of the SecretStore resource (SecretStore or ClusterSecretStore)
           * Defaults to `SecretStore`
           */
          "kind"?: string;
          /**
           * Name of the SecretStore resource
           */
          "name": string;
        };
      };
    }>;
    /**
     * RefreshInterval is the amount of time before the values are read again from the SecretStore provider,
     * specified as Golang Duration strings.
     * Valid time units are "ns", "us" (or "µs"), "ms", "s", "m", "h"
     * Example values: "1h", "2h30m", "5d", "10s"
     * May be set to zero to fetch and create it once. Defaults to 1h.
     */
    "refreshInterval"?: string;
    /**
     * SecretStoreRef defines which SecretStore to fetch the ExternalSecret data.
     */
    "secretStoreRef"?: {
      /**
       * Kind of the SecretStore resource (SecretStore or ClusterSecretStore)
       * Defaults to `SecretStore`
       */
      "kind"?: string;
      /**
       * Name of the SecretStore resource
       */
      "name": string;
    };
    /**
     * ExternalSecretTarget defines the Kubernetes Secret to be created
     * There can be only one target per ExternalSecret.
     */
    "target"?: {
      /**
       * CreationPolicy defines rules on how to create the resulting Secret
       * Defaults to 'Owner'
       */
      "creationPolicy"?: "Owner" | "Orphan" | "Merge" | "None";
      /**
       * DeletionPolicy defines rules on how to delete the resulting Secret
       * Defaults to 'Retain'
       */
      "deletionPolicy"?: "Delete" | "Merge" | "Retain";
      /**
       * Immutable defines if the final secret will be immutable
       */
      "immutable"?: boolean;
      /**
       * Name defines the name of the Secret resource to be managed
       * This field is immutable
       * Defaults to the .metadata.name of the ExternalSecret resource
       */
      "name"?: string;
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
    };
  };
  "status"?: {
    /**
     * Binding represents a servicebinding.io Provisioned Service reference to the secret
     */
    "binding"?: {
      /**
       * Name of the referent.
       * This field is effectively required, but due to backwards compatibility is
       * allowed to be empty. Instances of this type with an empty value here are
       * almost certainly wrong.
       * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       */
      "name"?: string;
    };
    "conditions"?: Array<{
      "lastTransitionTime"?: string;
      "message"?: string;
      "reason"?: string;
      "status": string;
      "type": string;
    }>;
    /**
     * refreshTime is the time and date the external secret was fetched and
     * the target secret updated
     */
    "refreshTime"?: string;
    /**
     * SyncedResourceVersion keeps track of the last synced version
     */
    "syncedResourceVersion"?: string;
  };
}

/**
 * ExternalSecret is the Schema for the external-secrets API.
 */
export class ExternalSecret extends Model<IExternalSecret> implements IExternalSecret {
  "apiVersion": IExternalSecret["apiVersion"];
  "kind": IExternalSecret["kind"];
  "metadata"?: IExternalSecret["metadata"];
  "spec"?: IExternalSecret["spec"];
  "status"?: IExternalSecret["status"];

static apiVersion: IExternalSecret["apiVersion"] = "external-secrets.io/v1beta1";
static kind: IExternalSecret["kind"] = "ExternalSecret";
static is = createTypeMetaGuard<IExternalSecret>(ExternalSecret);

constructor(data?: ModelData<IExternalSecret>) {
  super({
    apiVersion: ExternalSecret.apiVersion,
    kind: ExternalSecret.kind,
    ...data
  } as IExternalSecret);
}
}


setValidateFunc(ExternalSecret, validate as ValidateFunc<IExternalSecret>);
