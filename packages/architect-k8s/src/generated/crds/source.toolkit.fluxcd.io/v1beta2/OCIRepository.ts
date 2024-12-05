import { IObjectMeta } from "npm:@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "npm:@kubernetes-models/base";
import { ValidateFunc } from "npm:@kubernetes-models/validate";
import { validate } from "../../_schemas/SourceToolkitFluxcdIoV1beta2OCIRepository.js";

/**
 * OCIRepository is the Schema for the ocirepositories API
 */
export interface IOCIRepository {
  /**
   * APIVersion defines the versioned schema of this representation of an object.
   * Servers should convert recognized schemas to the latest internal value, and
   * may reject unrecognized values.
   * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "source.toolkit.fluxcd.io/v1beta2";
  /**
   * Kind is a string value representing the REST resource this object represents.
   * Servers may infer this from the endpoint the client submits requests to.
   * Cannot be updated.
   * In CamelCase.
   * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "OCIRepository";
  "metadata"?: IObjectMeta;
  /**
   * OCIRepositorySpec defines the desired state of OCIRepository
   */
  "spec"?: {
    /**
     * CertSecretRef can be given the name of a Secret containing
     * either or both of
     * 
     * - a PEM-encoded client certificate (`tls.crt`) and private
     * key (`tls.key`);
     * - a PEM-encoded CA certificate (`ca.crt`)
     * 
     * and whichever are supplied, will be used for connecting to the
     * registry. The client cert and key are useful if you are
     * authenticating with a certificate; the CA cert is useful if
     * you are using a self-signed server certificate. The Secret must
     * be of type `Opaque` or `kubernetes.io/tls`.
     * 
     * Note: Support for the `caFile`, `certFile` and `keyFile` keys have
     * been deprecated.
     */
    "certSecretRef"?: {
      /**
       * Name of the referent.
       */
      "name": string;
    };
    /**
     * Ignore overrides the set of excluded patterns in the .sourceignore format
     * (which is the same as .gitignore). If not provided, a default will be used,
     * consult the documentation for your version to find out what those are.
     */
    "ignore"?: string;
    /**
     * Insecure allows connecting to a non-TLS HTTP container registry.
     */
    "insecure"?: boolean;
    /**
     * Interval at which the OCIRepository URL is checked for updates.
     * This interval is approximate and may be subject to jitter to ensure
     * efficient use of resources.
     */
    "interval": string;
    /**
     * LayerSelector specifies which layer should be extracted from the OCI artifact.
     * When not specified, the first layer found in the artifact is selected.
     */
    "layerSelector"?: {
      /**
       * MediaType specifies the OCI media type of the layer
       * which should be extracted from the OCI Artifact. The
       * first layer matching this type is selected.
       */
      "mediaType"?: string;
      /**
       * Operation specifies how the selected layer should be processed.
       * By default, the layer compressed content is extracted to storage.
       * When the operation is set to 'copy', the layer compressed content
       * is persisted to storage as it is.
       */
      "operation"?: "extract" | "copy";
    };
    /**
     * The provider used for authentication, can be 'aws', 'azure', 'gcp' or 'generic'.
     * When not specified, defaults to 'generic'.
     */
    "provider"?: "generic" | "aws" | "azure" | "gcp";
    /**
     * ProxySecretRef specifies the Secret containing the proxy configuration
     * to use while communicating with the container registry.
     */
    "proxySecretRef"?: {
      /**
       * Name of the referent.
       */
      "name": string;
    };
    /**
     * The OCI reference to pull and monitor for changes,
     * defaults to the latest tag.
     */
    "ref"?: {
      /**
       * Digest is the image digest to pull, takes precedence over SemVer.
       * The value should be in the format 'sha256:<HASH>'.
       */
      "digest"?: string;
      /**
       * SemVer is the range of tags to pull selecting the latest within
       * the range, takes precedence over Tag.
       */
      "semver"?: string;
      /**
       * SemverFilter is a regex pattern to filter the tags within the SemVer range.
       */
      "semverFilter"?: string;
      /**
       * Tag is the image tag to pull, defaults to latest.
       */
      "tag"?: string;
    };
    /**
     * SecretRef contains the secret name containing the registry login
     * credentials to resolve image metadata.
     * The secret must be of type kubernetes.io/dockerconfigjson.
     */
    "secretRef"?: {
      /**
       * Name of the referent.
       */
      "name": string;
    };
    /**
     * ServiceAccountName is the name of the Kubernetes ServiceAccount used to authenticate
     * the image pull if the service account has attached pull secrets. For more information:
     * https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/#add-imagepullsecrets-to-a-service-account
     */
    "serviceAccountName"?: string;
    /**
     * This flag tells the controller to suspend the reconciliation of this source.
     */
    "suspend"?: boolean;
    /**
     * The timeout for remote OCI Repository operations like pulling, defaults to 60s.
     */
    "timeout"?: string;
    /**
     * URL is a reference to an OCI artifact repository hosted
     * on a remote container registry.
     */
    "url": string;
    /**
     * Verify contains the secret name containing the trusted public keys
     * used to verify the signature and specifies which provider to use to check
     * whether OCI image is authentic.
     */
    "verify"?: {
      /**
       * MatchOIDCIdentity specifies the identity matching criteria to use
       * while verifying an OCI artifact which was signed using Cosign keyless
       * signing. The artifact's identity is deemed to be verified if any of the
       * specified matchers match against the identity.
       */
      "matchOIDCIdentity"?: Array<{
        /**
         * Issuer specifies the regex pattern to match against to verify
         * the OIDC issuer in the Fulcio certificate. The pattern must be a
         * valid Go regular expression.
         */
        "issuer": string;
        /**
         * Subject specifies the regex pattern to match against to verify
         * the identity subject in the Fulcio certificate. The pattern must
         * be a valid Go regular expression.
         */
        "subject": string;
      }>;
      /**
       * Provider specifies the technology used to sign the OCI Artifact.
       */
      "provider": "cosign" | "notation";
      /**
       * SecretRef specifies the Kubernetes Secret containing the
       * trusted public keys.
       */
      "secretRef"?: {
        /**
         * Name of the referent.
         */
        "name": string;
      };
    };
  };
  /**
   * OCIRepositoryStatus defines the observed state of OCIRepository
   */
  "status"?: {
    /**
     * Artifact represents the output of the last successful OCI Repository sync.
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
     * Conditions holds the conditions for the OCIRepository.
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
     * ContentConfigChecksum is a checksum of all the configurations related to
     * the content of the source artifact:
     *  - .spec.ignore
     *  - .spec.layerSelector
     * observed in .status.observedGeneration version of the object. This can
     * be used to determine if the content configuration has changed and the
     * artifact needs to be rebuilt.
     * It has the format of `<algo>:<checksum>`, for example: `sha256:<checksum>`.
     * 
     * Deprecated: Replaced with explicit fields for observed artifact content
     * config in the status.
     */
    "contentConfigChecksum"?: string;
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
     * ObservedIgnore is the observed exclusion patterns used for constructing
     * the source artifact.
     */
    "observedIgnore"?: string;
    /**
     * ObservedLayerSelector is the observed layer selector used for constructing
     * the source artifact.
     */
    "observedLayerSelector"?: {
      /**
       * MediaType specifies the OCI media type of the layer
       * which should be extracted from the OCI Artifact. The
       * first layer matching this type is selected.
       */
      "mediaType"?: string;
      /**
       * Operation specifies how the selected layer should be processed.
       * By default, the layer compressed content is extracted to storage.
       * When the operation is set to 'copy', the layer compressed content
       * is persisted to storage as it is.
       */
      "operation"?: "extract" | "copy";
    };
    /**
     * URL is the download link for the artifact output of the last OCI Repository sync.
     */
    "url"?: string;
  };
}

/**
 * OCIRepository is the Schema for the ocirepositories API
 */
export class OCIRepository extends Model<IOCIRepository> implements IOCIRepository {
  "apiVersion": IOCIRepository["apiVersion"];
  "kind": IOCIRepository["kind"];
  "metadata"?: IOCIRepository["metadata"];
  "spec"?: IOCIRepository["spec"];
  "status"?: IOCIRepository["status"];

static apiVersion: IOCIRepository["apiVersion"] = "source.toolkit.fluxcd.io/v1beta2";
static kind: IOCIRepository["kind"] = "OCIRepository";
static is = createTypeMetaGuard<IOCIRepository>(OCIRepository);

constructor(data?: ModelData<IOCIRepository>) {
  super({
    apiVersion: OCIRepository.apiVersion,
    kind: OCIRepository.kind,
    ...data
  } as IOCIRepository);
}
}


setValidateFunc(OCIRepository, validate as ValidateFunc<IOCIRepository>);
