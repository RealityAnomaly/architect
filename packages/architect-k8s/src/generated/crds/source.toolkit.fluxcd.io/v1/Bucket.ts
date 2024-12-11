import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/SourceToolkitFluxcdIoV1Bucket.js";

/**
 * Bucket is the Schema for the buckets API.
 */
export interface IBucket {
  /**
   * APIVersion defines the versioned schema of this representation of an object.
   * Servers should convert recognized schemas to the latest internal value, and
   * may reject unrecognized values.
   * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "source.toolkit.fluxcd.io/v1";
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
   * BucketSpec specifies the required configuration to produce an Artifact for
   * an object storage bucket.
   */
  "spec"?: {
    /**
     * BucketName is the name of the object storage bucket.
     */
    "bucketName": string;
    /**
     * CertSecretRef can be given the name of a Secret containing
     * either or both of
     * 
     * - a PEM-encoded client certificate (`tls.crt`) and private
     * key (`tls.key`);
     * - a PEM-encoded CA certificate (`ca.crt`)
     * 
     * and whichever are supplied, will be used for connecting to the
     * bucket. The client cert and key are useful if you are
     * authenticating with a certificate; the CA cert is useful if
     * you are using a self-signed server certificate. The Secret must
     * be of type `Opaque` or `kubernetes.io/tls`.
     * 
     * This field is only supported for the `generic` provider.
     */
    "certSecretRef"?: {
      /**
       * Name of the referent.
       */
      "name": string;
    };
    /**
     * Endpoint is the object storage address the BucketName is located at.
     */
    "endpoint": string;
    /**
     * Ignore overrides the set of excluded patterns in the .sourceignore format
     * (which is the same as .gitignore). If not provided, a default will be used,
     * consult the documentation for your version to find out what those are.
     */
    "ignore"?: string;
    /**
     * Insecure allows connecting to a non-TLS HTTP Endpoint.
     */
    "insecure"?: boolean;
    /**
     * Interval at which the Bucket Endpoint is checked for updates.
     * This interval is approximate and may be subject to jitter to ensure
     * efficient use of resources.
     */
    "interval": string;
    /**
     * Prefix to use for server-side filtering of files in the Bucket.
     */
    "prefix"?: string;
    /**
     * Provider of the object storage bucket.
     * Defaults to 'generic', which expects an S3 (API) compatible object
     * storage.
     */
    "provider"?: "generic" | "aws" | "gcp" | "azure";
    /**
     * ProxySecretRef specifies the Secret containing the proxy configuration
     * to use while communicating with the Bucket server.
     */
    "proxySecretRef"?: {
      /**
       * Name of the referent.
       */
      "name": string;
    };
    /**
     * Region of the Endpoint where the BucketName is located in.
     */
    "region"?: string;
    /**
     * SecretRef specifies the Secret containing authentication credentials
     * for the Bucket.
     */
    "secretRef"?: {
      /**
       * Name of the referent.
       */
      "name": string;
    };
    /**
     * STS specifies the required configuration to use a Security Token
     * Service for fetching temporary credentials to authenticate in a
     * Bucket provider.
     * 
     * This field is only supported for the `aws` and `generic` providers.
     */
    "sts"?: {
      /**
       * CertSecretRef can be given the name of a Secret containing
       * either or both of
       * 
       * - a PEM-encoded client certificate (`tls.crt`) and private
       * key (`tls.key`);
       * - a PEM-encoded CA certificate (`ca.crt`)
       * 
       * and whichever are supplied, will be used for connecting to the
       * STS endpoint. The client cert and key are useful if you are
       * authenticating with a certificate; the CA cert is useful if
       * you are using a self-signed server certificate. The Secret must
       * be of type `Opaque` or `kubernetes.io/tls`.
       * 
       * This field is only supported for the `ldap` provider.
       */
      "certSecretRef"?: {
        /**
         * Name of the referent.
         */
        "name": string;
      };
      /**
       * Endpoint is the HTTP/S endpoint of the Security Token Service from
       * where temporary credentials will be fetched.
       */
      "endpoint": string;
      /**
       * Provider of the Security Token Service.
       */
      "provider": "aws" | "ldap";
      /**
       * SecretRef specifies the Secret containing authentication credentials
       * for the STS endpoint. This Secret must contain the fields `username`
       * and `password` and is supported only for the `ldap` provider.
       */
      "secretRef"?: {
        /**
         * Name of the referent.
         */
        "name": string;
      };
    };
    /**
     * Suspend tells the controller to suspend the reconciliation of this
     * Bucket.
     */
    "suspend"?: boolean;
    /**
     * Timeout for fetch operations, defaults to 60s.
     */
    "timeout"?: string;
  };
  /**
   * BucketStatus records the observed state of a Bucket.
   */
  "status"?: {
    /**
     * Artifact represents the last successful Bucket reconciliation.
     */
    "artifact"?: {
      /**
       * Digest is the digest of the file in the form of '<algorithm>:<checksum>'.
       */
      "digest"?: string;
      /**
       * LastUpdateTime is the timestamp corresponding to the last update of the
       * Artifact.
       */
      "lastUpdateTime": string;
      /**
       * Metadata holds upstream information such as OCI annotations.
       */
      "metadata"?: {
        [key: string]: string;
      };
      /**
       * Path is the relative file path of the Artifact. It can be used to locate
       * the file in the root of the Artifact storage on the local file system of
       * the controller managing the Source.
       */
      "path": string;
      /**
       * Revision is a human-readable identifier traceable in the origin source
       * system. It can be a Git commit SHA, Git tag, a Helm chart version, etc.
       */
      "revision": string;
      /**
       * Size is the number of bytes in the file.
       */
      "size"?: number;
      /**
       * URL is the HTTP address of the Artifact as exposed by the controller
       * managing the Source. It can be used to retrieve the Artifact for
       * consumption, e.g. by another controller applying the Artifact contents.
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
     * ObservedGeneration is the last observed generation of the Bucket object.
     */
    "observedGeneration"?: number;
    /**
     * ObservedIgnore is the observed exclusion patterns used for constructing
     * the source artifact.
     */
    "observedIgnore"?: string;
    /**
     * URL is the dynamic fetch link for the latest Artifact.
     * It is provided on a "best effort" basis, and using the precise
     * BucketStatus.Artifact data is recommended.
     */
    "url"?: string;
  };
}

/**
 * Bucket is the Schema for the buckets API.
 */
export class Bucket extends Model<IBucket> implements IBucket {
  "apiVersion": IBucket["apiVersion"];
  "kind": IBucket["kind"];
  "metadata"?: IBucket["metadata"];
  "spec"?: IBucket["spec"];
  "status"?: IBucket["status"];

static apiVersion: IBucket["apiVersion"] = "source.toolkit.fluxcd.io/v1";
static kind: IBucket["kind"] = "Bucket";
static is = createTypeMetaGuard<IBucket>(Bucket);

constructor(data?: ModelData<IBucket>) {
  super();

  this.setDefinedProps({
    apiVersion: Bucket.apiVersion,
    kind: Bucket.kind,
    ...data
  } as IBucket);
}
}


setValidateFunc(Bucket, validate as ValidateFunc<IBucket>);
