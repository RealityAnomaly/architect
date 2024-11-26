import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/ExternalSecretsIoV1alpha1ExternalSecret.js";

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
  "apiVersion": "external-secrets.io/v1alpha1";
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
       * ExternalSecretDataRemoteRef defines Provider data location.
       */
      "remoteRef": {
        /**
         * Used to define a conversion Strategy
         */
        "conversionStrategy"?: "Default" | "Unicode";
        /**
         * Key is the key used in the Provider, mandatory
         */
        "key": string;
        /**
         * Used to select a specific property of the Provider value (if a map), if supported
         */
        "property"?: string;
        /**
         * Used to select a specific version of the Provider value, if supported
         */
        "version"?: string;
      };
      "secretKey": string;
    }>;
    /**
     * DataFrom is used to fetch all properties from a specific Provider data
     * If multiple entries are specified, the Secret keys are merged in the specified order
     */
    "dataFrom"?: Array<{
      /**
       * Used to define a conversion Strategy
       */
      "conversionStrategy"?: "Default" | "Unicode";
      /**
       * Key is the key used in the Provider, mandatory
       */
      "key": string;
      /**
       * Used to select a specific property of the Provider value (if a map), if supported
       */
      "property"?: string;
      /**
       * Used to select a specific version of the Provider value, if supported
       */
      "version"?: string;
    }>;
    /**
     * RefreshInterval is the amount of time before the values are read again from the SecretStore provider
     * Valid time units are "ns", "us" (or "µs"), "ms", "s", "m", "h"
     * May be set to zero to fetch and create it once. Defaults to 1h.
     */
    "refreshInterval"?: string;
    /**
     * SecretStoreRef defines which SecretStore to fetch the ExternalSecret data.
     */
    "secretStoreRef": {
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
    "target": {
      /**
       * CreationPolicy defines rules on how to create the resulting Secret
       * Defaults to 'Owner'
       */
      "creationPolicy"?: "Owner" | "Merge" | "None";
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
            }>;
            "name": string;
          };
          "secret"?: {
            "items": Array<{
              "key": string;
            }>;
            "name": string;
          };
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

static apiVersion: IExternalSecret["apiVersion"] = "external-secrets.io/v1alpha1";
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
