import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/RicobergerDeV1alpha1VaultSecret.js";

/**
 * VaultSecret is the Schema for the vaultsecrets API
 */
export interface IVaultSecret {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "ricoberger.de/v1alpha1";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "VaultSecret";
  "metadata"?: IObjectMeta;
  /**
   * VaultSecretSpec defines the desired state of VaultSecret
   */
  "spec"?: {
    /**
     * EngineOptions specifies options for the engine.
     */
    "engineOptions"?: {
      [key: string]: string;
    };
    /**
     * isBinary is a flag indicates if data stored in vault is binary data. Since vault does not store binary data natively, the binary data is stored as base64 encoded. However, same data get encoded again when operator stored them as secret in k8s which caused the data to get double encoded. This flag will skip the base64 encode which is needed for string data to avoid the double encode problem.
     */
    "isBinary"?: boolean;
    /**
     * Keys is an array of Keys, which should be included in the Kubernetes secret. If the Keys field is ommitted all keys from the Vault secret will be included in the Kubernetes secret.
     */
    "keys"?: Array<string>;
    /**
     * Path is the path of the corresponding secret in Vault.
     */
    "path": string;
    /**
     * ReconcileStrategy defines the strategy for reconcilation. The default value is "Replace", which replaces any existing data keys in a secret with the loaded keys from Vault. The second valid value is "Merge" wiche merges the loaded keys from Vault with the existing keys in a secret. Duplicated keys will be replaced with the value from Vault. Other values are not valid for this field.
     */
    "reconcileStrategy"?: string;
    /**
     * Role specifies the role to use with PKI engine
     */
    "role"?: string;
    /**
     * SecretEngine specifies the type of the Vault secret engine in which the secret is stored. Currently the 'KV Secrets Engine - Version 1' and 'KV Secrets Engine - Version 2' are supported. The value must be 'kv'. If the value is omitted or an other values is used the Vault Secrets Operator will try to use the KV secret engine.
     */
    "secretEngine"?: string;
    /**
     * Templates, if not empty will be run through the the Go templating engine, with `.Secrets` being mapped to the list of secrets received from Vault. When omitted set, all secrets will be added as key/val pairs under Secret.data.
     */
    "templates"?: {
      [key: string]: string;
    };
    /**
     * Type is the type of the Kubernetes secret, which will be created by the Vault Secrets Operator.
     */
    "type": string;
    /**
     * VaultNamespace can be used to specify the Vault namespace for a secret. When this value is set, the X-Vault-Namespace header will be set for the request. More information regarding namespaces can be found in the Vault Enterprise documentation: https://www.vaultproject.io/docs/enterprise/namespaces
     */
    "vaultNamespace"?: string;
    /**
     * VaultRole can be used to specify the Vault role, which should be used to get the secret from Vault. If the vaultRole property is set a new client with the specified Vault Role will be created and the shared client is ignored. If the operator is configured using the token auth method this property has no effect.
     */
    "vaultRole"?: string;
    /**
     * Version sets the version of the secret which should be used. The version is only used if the KVv2 secret engine is used. If the version is omitted the Operator uses the latest version of the secret. If the version omitted and the VAULT_RECONCILIATION_TIME environment variable is set, the Kubernetes secret will be updated if the Vault secret changes.
     */
    "version"?: number;
  };
  /**
   * VaultSecretStatus defines the observed state of VaultSecret
   */
  "status"?: {
    "conditions"?: Array<{
      /**
       * lastTransitionTime is the last time the condition transitioned from one status to another. This should be when the underlying condition changed.  If that is not known, then using the time when the API field changed is acceptable.
       */
      "lastTransitionTime": string;
      /**
       * message is a human readable message indicating details about the transition. This may be an empty string.
       */
      "message": string;
      /**
       * observedGeneration represents the .metadata.generation that the condition was set based upon. For instance, if .metadata.generation is currently 12, but the .status.conditions[x].observedGeneration is 9, the condition is out of date with respect to the current state of the instance.
       */
      "observedGeneration"?: number;
      /**
       * reason contains a programmatic identifier indicating the reason for the condition's last transition. Producers of specific condition types may define expected values and meanings for this field, and whether the values are considered a guaranteed API. The value should be a CamelCase string. This field may not be empty.
       */
      "reason": string;
      /**
       * status of the condition, one of True, False, Unknown.
       */
      "status": "True" | "False" | "Unknown";
      /**
       * type of condition in CamelCase or in foo.example.com/CamelCase. --- Many .condition.type values are consistent across resources like Available, but because arbitrary conditions can be useful (see .node.status.conditions), the ability to deconflict is important. The regex it matches is (dns1123SubdomainFmt/)?(qualifiedNameFmt)
       */
      "type": string;
    }>;
  };
}

/**
 * VaultSecret is the Schema for the vaultsecrets API
 */
export class VaultSecret extends Model<IVaultSecret> implements IVaultSecret {
  "apiVersion": IVaultSecret["apiVersion"];
  "kind": IVaultSecret["kind"];
  "metadata"?: IVaultSecret["metadata"];
  "spec"?: IVaultSecret["spec"];
  "status"?: IVaultSecret["status"];

static apiVersion: IVaultSecret["apiVersion"] = "ricoberger.de/v1alpha1";
static kind: IVaultSecret["kind"] = "VaultSecret";
static is = createTypeMetaGuard<IVaultSecret>(VaultSecret);

constructor(data?: ModelData<IVaultSecret>) {
  super({
    apiVersion: VaultSecret.apiVersion,
    kind: VaultSecret.kind,
    ...data
  } as IVaultSecret);
}
}


setValidateFunc(VaultSecret, validate as ValidateFunc<IVaultSecret>);
