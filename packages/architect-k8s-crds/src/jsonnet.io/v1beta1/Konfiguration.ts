import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/JsonnetIoV1beta1Konfiguration.js";

/**
 * Konfiguration is the Schema for the konfigurations API
 */
export interface IKonfiguration {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "jsonnet.io/v1beta1";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "Konfiguration";
  "metadata"?: IObjectMeta;
  /**
   * KonfigurationSpec defines the desired state of a Konfiguration
   */
  "spec"?: {
    /**
     * DependsOn may contain a dependency.CrossNamespaceDependencyReference slice with references to Konfiguration resources that must be ready before this Konfiguration can be reconciled.
     */
    "dependsOn"?: Array<{
      /**
       * Name holds the name reference of a dependency.
       */
      "name": string;
      /**
       * Namespace holds the namespace reference of a dependency.
       */
      "namespace"?: string;
    }>;
    /**
     * Force instructs the controller to recreate resources when patching fails due to an immutable field change.
     */
    "force"?: boolean;
    /**
     * A list of resources to be included in the health assessment.
     */
    "healthChecks"?: Array<{
      /**
       * API version of the referent, if not specified the Kubernetes preferred version will be used
       */
      "apiVersion"?: string;
      /**
       * Kind of the referent
       */
      "kind": string;
      /**
       * Name of the referent
       */
      "name": string;
      /**
       * Namespace of the referent, when not specified it acts as LocalObjectReference
       */
      "namespace"?: string;
    }>;
    /**
     * Inject raw jsonnet into the evaluation.
     */
    "inject"?: string;
    /**
     * The interval at which to reconcile the Konfiguration.
     */
    "interval": string;
    /**
     * Additional search paths to add to the jsonnet importer. These are relative to the root of the sourceRef.
     */
    "jsonnetPaths"?: Array<string>;
    /**
     * Additional HTTP(S) URLs to add to the jsonnet importer.
     */
    "jsonnetURLs"?: Array<string>;
    /**
     * The KubeConfig for reconciling the Konfiguration on a remote cluster. Defaults to the in-cluster configuration.
     */
    "kubeConfig"?: {
      /**
       * SecretRef holds the name to a secret that contains a 'value' key with the kubeconfig file as the value. It must be in the same namespace as the Konfiguration. It is recommended that the kubeconfig is self-contained, and the secret is regularly updated if credentials such as a cloud-access-token expire. Cloud specific `cmd-path` auth helpers will not function without adding binaries and credentials to the Pod that is responsible for reconciling the Konfiguration.
       */
      "secretRef"?: {
        /**
         * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
         */
        "name"?: string;
      };
    };
    /**
     * Path to the jsonnet, json, or yaml that should be applied to the cluster. Defaults to 'None', which translates to the root path of the SourceRef. When declared as a file path it is assumed to be from the root path of the SourceRef. You may also define a HTTP(S) link to fetch files from a remote location.
     */
    "path": string;
    /**
     * Prune enables garbage collection. This means that when newly rendered jsonnet does not contain objects that were applied previously, they will be removed. When a Konfiguration is removed that had this value set to `true`, all resources created by it will also be removed.
     */
    "prune": boolean;
    /**
     * The interval at which to retry a previously failed reconciliation. When not specified, the controller uses the KonfigurationSpec.Interval value to retry failures.
     */
    "retryInterval"?: string;
    /**
     * The name of the Kubernetes service account to impersonate when reconciling this Konfiguration.
     */
    "serviceAccountName"?: string;
    /**
     * Reference of the source where the jsonnet, json, or yaml file(s) are.
     */
    "sourceRef"?: {
      /**
       * API version of the referent, if not specified the Kubernetes preferred version will be used
       */
      "apiVersion"?: string;
      /**
       * Kind of the referent
       */
      "kind": string;
      /**
       * Name of the referent
       */
      "name": string;
      /**
       * Namespace of the referent, when not specified it acts as LocalObjectReference
       */
      "namespace"?: string;
    };
    /**
     * This flag tells the controller to suspend subsequent reconciliations, it does not apply to already started executions. Defaults to false.
     */
    "suspend"?: boolean;
    /**
     * Timeout for diff, validation, apply, and health checking operations. Defaults to 'Interval' duration.
     */
    "timeout"?: string;
    /**
     * Validate input against the server schema, defaults to true. At the moment this just implies a dry-run before patch/create operations. This will be updated to support different methods of validation.
     */
    "validate"?: boolean;
    /**
     * External variables and top-level arguments to supply to the jsonnet at `path`.
     */
    "variables"?: {
      /**
       * Values of external variables with values supplied as Jsonnet code.
       */
      "extCode"?: {
        [key: string]: string;
      };
      /**
       * Values of external variables with string values.
       */
      "extStr"?: {
        [key: string]: string;
      };
      /**
       * Values for external variables. They will be used as strings or code depending on the types encountered.
       */
      "extVars"?: any;
      /**
       * Values of top-level-arguments with values supplied as Jsonnet code.
       */
      "tlaCode"?: {
        [key: string]: string;
      };
      /**
       * Values of top-level-arguments with string values.
       */
      "tlaStr"?: {
        [key: string]: string;
      };
      /**
       * Values for top level arguments. They will be used as strings or code depending on the types encountered.
       */
      "tlaVars"?: any;
    };
  };
  /**
   * KonfigurationStatus defines the observed state of Konfiguration
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
    /**
     * The last successfully applied revision. The revision format for Git sources is <branch|tag>/<commit-sha>. For HTTP(S) paths it will just be the URL.
     */
    "lastAppliedRevision"?: string;
    /**
     * LastAttemptedRevision is the revision of the last reconciliation attempt. For HTTP(S) paths it will just be the URL.
     */
    "lastAttemptedRevision"?: string;
    /**
     * ObservedGeneration is the last reconciled generation.
     */
    "observedGeneration"?: number;
    /**
     * The last successfully applied revision metadata.
     */
    "snapshot"?: {
      /**
       * The manifests sha1 checksum.
       */
      "checksum": string;
      /**
       * A list of Kubernetes kinds grouped by namespace.
       */
      "entries": Array<{
        /**
         * The list of Kubernetes kinds.
         */
        "kinds": {
          [key: string]: string;
        };
        /**
         * The namespace of this entry.
         */
        "namespace"?: string;
      }>;
    };
  };
}

/**
 * Konfiguration is the Schema for the konfigurations API
 */
export class Konfiguration extends Model<IKonfiguration> implements IKonfiguration {
  "apiVersion": IKonfiguration["apiVersion"];
  "kind": IKonfiguration["kind"];
  "metadata"?: IKonfiguration["metadata"];
  "spec"?: IKonfiguration["spec"];
  "status"?: IKonfiguration["status"];

static apiVersion: IKonfiguration["apiVersion"] = "jsonnet.io/v1beta1";
static kind: IKonfiguration["kind"] = "Konfiguration";
static is = createTypeMetaGuard<IKonfiguration>(Konfiguration);

constructor(data?: ModelData<IKonfiguration>) {
  super({
    apiVersion: Konfiguration.apiVersion,
    kind: Konfiguration.kind,
    ...data
  } as IKonfiguration);
}
}


setValidateFunc(Konfiguration, validate as ValidateFunc<IKonfiguration>);
