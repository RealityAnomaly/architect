import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/ImageToolkitFluxcdIoV1beta2ImageRepository.js";

/**
 * ImageRepository is the Schema for the imagerepositories API
 */
export interface IImageRepository {
  /**
   * APIVersion defines the versioned schema of this representation of an object.
   * Servers should convert recognized schemas to the latest internal value, and
   * may reject unrecognized values.
   * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "image.toolkit.fluxcd.io/v1beta2";
  /**
   * Kind is a string value representing the REST resource this object represents.
   * Servers may infer this from the endpoint the client submits requests to.
   * Cannot be updated.
   * In CamelCase.
   * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "ImageRepository";
  "metadata"?: IObjectMeta;
  /**
   * ImageRepositorySpec defines the parameters for scanning an image
   * repository, e.g., `fluxcd/flux`.
   */
  "spec"?: {
    /**
     * AccessFrom defines an ACL for allowing cross-namespace references
     * to the ImageRepository object based on the caller's namespace labels.
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
     * Note: Support for the `caFile`, `certFile` and `keyFile` keys has
     * been deprecated.
     */
    "certSecretRef"?: {
      /**
       * Name of the referent.
       */
      "name": string;
    };
    /**
     * ExclusionList is a list of regex strings used to exclude certain tags
     * from being stored in the database.
     */
    "exclusionList"?: Array<string>;
    /**
     * Image is the name of the image repository
     */
    "image": string;
    /**
     * Insecure allows connecting to a non-TLS HTTP container registry.
     */
    "insecure"?: boolean;
    /**
     * Interval is the length of time to wait between
     * scans of the image repository.
     */
    "interval": string;
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
     * SecretRef can be given the name of a secret containing
     * credentials to use for the image registry. The secret should be
     * created with `kubectl create secret docker-registry`, or the
     * equivalent.
     */
    "secretRef"?: {
      /**
       * Name of the referent.
       */
      "name": string;
    };
    /**
     * ServiceAccountName is the name of the Kubernetes ServiceAccount used to authenticate
     * the image pull if the service account has attached pull secrets.
     */
    "serviceAccountName"?: string;
    /**
     * This flag tells the controller to suspend subsequent image scans.
     * It does not apply to already started scans. Defaults to false.
     */
    "suspend"?: boolean;
    /**
     * Timeout for image scanning.
     * Defaults to 'Interval' duration.
     */
    "timeout"?: string;
  };
  /**
   * ImageRepositoryStatus defines the observed state of ImageRepository
   */
  "status"?: {
    /**
     * CanonicalName is the name of the image repository with all the
     * implied bits made explicit; e.g., `docker.io/library/alpine`
     * rather than `alpine`.
     */
    "canonicalImageName"?: string;
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
     * LastScanResult contains the number of fetched tags.
     */
    "lastScanResult"?: {
      "latestTags"?: Array<string>;
      "scanTime"?: string;
      "tagCount": number;
    };
    /**
     * ObservedExclusionList is a list of observed exclusion list. It reflects
     * the exclusion rules used for the observed scan result in
     * spec.lastScanResult.
     */
    "observedExclusionList"?: Array<string>;
    /**
     * ObservedGeneration is the last reconciled generation.
     */
    "observedGeneration"?: number;
  };
}

/**
 * ImageRepository is the Schema for the imagerepositories API
 */
export class ImageRepository extends Model<IImageRepository> implements IImageRepository {
  "apiVersion": IImageRepository["apiVersion"];
  "kind": IImageRepository["kind"];
  "metadata"?: IImageRepository["metadata"];
  "spec"?: IImageRepository["spec"];
  "status"?: IImageRepository["status"];

static apiVersion: IImageRepository["apiVersion"] = "image.toolkit.fluxcd.io/v1beta2";
static kind: IImageRepository["kind"] = "ImageRepository";
static is = createTypeMetaGuard<IImageRepository>(ImageRepository);

constructor(data?: ModelData<IImageRepository>) {
  super();

  this.setDefinedProps({
    apiVersion: ImageRepository.apiVersion,
    kind: ImageRepository.kind,
    ...data
  } as IImageRepository);
}
}


setValidateFunc(ImageRepository, validate as ValidateFunc<IImageRepository>);
