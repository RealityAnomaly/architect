import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/SourceToolkitFluxcdIoV1beta1HelmRepository.js";

/**
 * HelmRepository is the Schema for the helmrepositories API
 */
export interface IHelmRepository {
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
  "kind": "HelmRepository";
  "metadata"?: IObjectMeta;
  /**
   * HelmRepositorySpec defines the reference to a Helm repository.
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
     * The interval at which to check the upstream for updates.
     */
    "interval": string;
    /**
     * PassCredentials allows the credentials from the SecretRef to be passed on to
     * a host that does not match the host as defined in URL.
     * This may be required if the host of the advertised chart URLs in the index
     * differ from the defined URL.
     * Enabling this should be done with caution, as it can potentially result in
     * credentials getting stolen in a MITM-attack.
     */
    "passCredentials"?: boolean;
    /**
     * The name of the secret containing authentication credentials for the Helm
     * repository.
     * For HTTP/S basic auth the secret must contain username and
     * password fields.
     * For TLS the secret must contain a certFile and keyFile, and/or
     * caFile fields.
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
     * The timeout of index downloading, defaults to 60s.
     */
    "timeout"?: string;
    /**
     * The Helm repository URL, a valid URL contains at least a protocol and host.
     */
    "url": string;
  };
  /**
   * HelmRepositoryStatus defines the observed state of the HelmRepository.
   */
  "status"?: {
    /**
     * Artifact represents the output of the last successful repository sync.
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
     * Conditions holds the conditions for the HelmRepository.
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
     * URL is the download link for the last index fetched.
     */
    "url"?: string;
  };
}

/**
 * HelmRepository is the Schema for the helmrepositories API
 */
export class HelmRepository extends Model<IHelmRepository> implements IHelmRepository {
  "apiVersion": IHelmRepository["apiVersion"];
  "kind": IHelmRepository["kind"];
  "metadata"?: IHelmRepository["metadata"];
  "spec"?: IHelmRepository["spec"];
  "status"?: IHelmRepository["status"];

static apiVersion: IHelmRepository["apiVersion"] = "source.toolkit.fluxcd.io/v1beta1";
static kind: IHelmRepository["kind"] = "HelmRepository";
static is = createTypeMetaGuard<IHelmRepository>(HelmRepository);

constructor(data?: ModelData<IHelmRepository>) {
  super({
    apiVersion: HelmRepository.apiVersion,
    kind: HelmRepository.kind,
    ...data
  } as IHelmRepository);
}
}


setValidateFunc(HelmRepository, validate as ValidateFunc<IHelmRepository>);
