import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/SourceToolkitFluxcdIoV1beta1Bucket.js";

/**
 * Bucket is the Schema for the buckets API
 */
export interface IBucket {
  /**
   * APIVersion defines the versioned schema of this representation of an object.
   * Servers should convert recognized schemas to the latest internal value, and
   * may reject unrecognized values.
   * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "source.toolkit.fluxcd.io/v1beta1";
  /**
   * Kind is a string value representing the REST resource this object represents.
   * Servers may infer this from the endpoint the client submits requests to.
   * Cannot be updated.
   * In CamelCase.
   * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "Bucket";
  "metadata"?: IObjectMeta;
  /**
   * BucketSpec defines the desired state of an S3 compatible bucket
   */
  "spec"?: {
    /**
     * AccessFrom defines an Access Control List for allowing cross-namespace references to this object.
     */
    "accessFrom"?: {
      /**
       * NamespaceSelectors is the list of namespace selectors to which this ACL applies.
       * Items in this list are evaluated using a logical OR operation.
       */
      "namespaceSelectors": Array<{
        /**
         * MatchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
         * map is equivalent to an element of matchExpressions, whose key field is "key", the
         * operator is "In", and the values array contains only "value". The requirements are ANDed.
         */
        "matchLabels"?: {
          [key: string]: string;
        };
      }>;
    };
    /**
     * The bucket name.
     */
    "bucketName": string;
    /**
     * The bucket endpoint address.
     */
    "endpoint": string;
    /**
     * Ignore overrides the set of excluded patterns in the .sourceignore format
     * (which is the same as .gitignore). If not provided, a default will be used,
     * consult the documentation for your version to find out what those are.
     */
    "ignore"?: string;
    /**
     * Insecure allows connecting to a non-TLS S3 HTTP endpoint.
     */
    "insecure"?: boolean;
    /**
     * The interval at which to check for bucket updates.
     */
    "interval": string;
    /**
     * The S3 compatible storage provider name, default ('generic').
     */
    "provider"?: "generic" | "aws" | "gcp";
    /**
     * The bucket region.
     */
    "region"?: string;
    /**
     * The name of the secret containing authentication credentials
     * for the Bucket.
     */
    "secretRef"?: {
      /**
       * Name of the referent.
       */
      "name": string;
    };
    /**
     * This flag tells the controller to suspend the reconciliation of this source.
     */
    "suspend"?: boolean;
    /**
     * The timeout for download operations, defaults to 60s.
     */
    "timeout"?: string;
  };
  /**
   * BucketStatus defines the observed state of a bucket
   */
  "status"?: {
    /**
     * Artifact represents the output of the last successful Bucket sync.
     */
    "artifact"?: {
      /**
       * Checksum is the SHA256 checksum of the artifact.
       */
      "checksum"?: string;
      /**
       * LastUpdateTime is the timestamp corresponding to the last update of this
       * artifact.
       */
      "lastUpdateTime": string;
      /**
       * Path is the relative file path of this artifact.
       */
      "path": string;
      /**
       * Revision is a human readable identifier traceable in the origin source
       * system. It can be a Git commit SHA, Git tag, a Helm index timestamp, a Helm
       * chart version, etc.
       */
      "revision"?: string;
      /**
       * URL is the HTTP address of this artifact.
       */
      "url": string;
    };
    /**
     * Conditions holds the conditions for the Bucket.
     */
    "conditions"?: Array<{
      /**
       * lastTransitionTime is the last time the condition transitioned from one status to another.
       * This should be when the underlying condition changed.  If that is not known, then using the time when the API field changed is acceptable.
       */
      "lastTransitionTime": string;
      /**
       * message is a human readable message indicating details about the transition.
       * This may be an empty string.
       */
      "message": string;
      /**
       * observedGeneration represents the .metadata.generation that the condition was set based upon.
       * For instance, if .metadata.generation is currently 12, but the .status.conditions[x].observedGeneration is 9, the condition is out of date
       * with respect to the current state of the instance.
       */
      "observedGeneration"?: number;
      /**
       * reason contains a programmatic identifier indicating the reason for the condition's last transition.
       * Producers of specific condition types may define expected values and meanings for this field,
       * and whether the values are considered a guaranteed API.
       * The value should be a CamelCase string.
       * This field may not be empty.
       */
      "reason": string;
      /**
       * status of the condition, one of True, False, Unknown.
       */
      "status": "True" | "False" | "Unknown";
      /**
       * type of condition in CamelCase or in foo.example.com/CamelCase.
       */
      "type": string;
    }>;
    /**
     * LastHandledReconcileAt holds the value of the most recent
     * reconcile request value, so a change of the annotation value
     * can be detected.
     */
    "lastHandledReconcileAt"?: string;
    /**
     * ObservedGeneration is the last observed generation.
     */
    "observedGeneration"?: number;
    /**
     * URL is the download link for the artifact output of the last Bucket sync.
     */
    "url"?: string;
  };
}

/**
 * Bucket is the Schema for the buckets API
 */
export class Bucket extends Model<IBucket> implements IBucket {
  "apiVersion": IBucket["apiVersion"];
  "kind": IBucket["kind"];
  "metadata"?: IBucket["metadata"];
  "spec"?: IBucket["spec"];
  "status"?: IBucket["status"];

static apiVersion: IBucket["apiVersion"] = "source.toolkit.fluxcd.io/v1beta1";
static kind: IBucket["kind"] = "Bucket";
static is = createTypeMetaGuard<IBucket>(Bucket);

constructor(data?: ModelData<IBucket>) {
  super({
    apiVersion: Bucket.apiVersion,
    kind: Bucket.kind,
    ...data
  } as IBucket);
}
}


setValidateFunc(Bucket, validate as ValidateFunc<IBucket>);
