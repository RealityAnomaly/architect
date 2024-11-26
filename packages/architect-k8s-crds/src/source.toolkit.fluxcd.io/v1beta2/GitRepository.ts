import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/SourceToolkitFluxcdIoV1beta2GitRepository.js";

/**
 * GitRepository is the Schema for the gitrepositories API.
 */
export interface IGitRepository {
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
  "kind": "GitRepository";
  "metadata"?: IObjectMeta;
  /**
   * GitRepositorySpec specifies the required configuration to produce an
   * Artifact for a Git repository.
   */
  "spec"?: {
    /**
     * AccessFrom specifies an Access Control List for allowing cross-namespace
     * references to this object.
     * NOTE: Not implemented, provisional as of https://github.com/fluxcd/flux2/pull/2092
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
     * GitImplementation specifies which Git client library implementation to
     * use. Defaults to 'go-git', valid values are ('go-git', 'libgit2').
     * Deprecated: gitImplementation is deprecated now that 'go-git' is the
     * only supported implementation.
     */
    "gitImplementation"?: "go-git" | "libgit2";
    /**
     * Ignore overrides the set of excluded patterns in the .sourceignore format
     * (which is the same as .gitignore). If not provided, a default will be used,
     * consult the documentation for your version to find out what those are.
     */
    "ignore"?: string;
    /**
     * Include specifies a list of GitRepository resources which Artifacts
     * should be included in the Artifact produced for this GitRepository.
     */
    "include"?: Array<{
      /**
       * FromPath specifies the path to copy contents from, defaults to the root
       * of the Artifact.
       */
      "fromPath"?: string;
      /**
       * GitRepositoryRef specifies the GitRepository which Artifact contents
       * must be included.
       */
      "repository": {
        /**
         * Name of the referent.
         */
        "name": string;
      };
      /**
       * ToPath specifies the path to copy contents to, defaults to the name of
       * the GitRepositoryRef.
       */
      "toPath"?: string;
    }>;
    /**
     * Interval at which to check the GitRepository for updates.
     */
    "interval": string;
    /**
     * RecurseSubmodules enables the initialization of all submodules within
     * the GitRepository as cloned from the URL, using their default settings.
     */
    "recurseSubmodules"?: boolean;
    /**
     * Reference specifies the Git reference to resolve and monitor for
     * changes, defaults to the 'master' branch.
     */
    "ref"?: {
      /**
       * Branch to check out, defaults to 'master' if no other field is defined.
       */
      "branch"?: string;
      /**
       * Commit SHA to check out, takes precedence over all reference fields.
       * 
       * This can be combined with Branch to shallow clone the branch, in which
       * the commit is expected to exist.
       */
      "commit"?: string;
      /**
       * Name of the reference to check out; takes precedence over Branch, Tag and SemVer.
       * 
       * It must be a valid Git reference: https://git-scm.com/docs/git-check-ref-format#_description
       * Examples: "refs/heads/main", "refs/tags/v0.1.0", "refs/pull/420/head", "refs/merge-requests/1/head"
       */
      "name"?: string;
      /**
       * SemVer tag expression to check out, takes precedence over Tag.
       */
      "semver"?: string;
      /**
       * Tag to check out, takes precedence over Branch.
       */
      "tag"?: string;
    };
    /**
     * SecretRef specifies the Secret containing authentication credentials for
     * the GitRepository.
     * For HTTPS repositories the Secret must contain 'username' and 'password'
     * fields for basic auth or 'bearerToken' field for token auth.
     * For SSH repositories the Secret must contain 'identity'
     * and 'known_hosts' fields.
     */
    "secretRef"?: {
      /**
       * Name of the referent.
       */
      "name": string;
    };
    /**
     * Suspend tells the controller to suspend the reconciliation of this
     * GitRepository.
     */
    "suspend"?: boolean;
    /**
     * Timeout for Git operations like cloning, defaults to 60s.
     */
    "timeout"?: string;
    /**
     * URL specifies the Git repository URL, it can be an HTTP/S or SSH address.
     */
    "url": string;
    /**
     * Verification specifies the configuration to verify the Git commit
     * signature(s).
     */
    "verify"?: {
      /**
       * Mode specifies what Git object should be verified, currently ('head').
       */
      "mode": "head";
      /**
       * SecretRef specifies the Secret containing the public keys of trusted Git
       * authors.
       */
      "secretRef": {
        /**
         * Name of the referent.
         */
        "name": string;
      };
    };
  };
  /**
   * GitRepositoryStatus records the observed state of a Git repository.
   */
  "status"?: {
    /**
     * Artifact represents the last successful GitRepository reconciliation.
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
     * Conditions holds the conditions for the GitRepository.
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
     *  - .spec.recurseSubmodules
     *  - .spec.included and the checksum of the included artifacts
     * observed in .status.observedGeneration version of the object. This can
     * be used to determine if the content of the included repository has
     * changed.
     * It has the format of `<algo>:<checksum>`, for example: `sha256:<checksum>`.
     * 
     * Deprecated: Replaced with explicit fields for observed artifact content
     * config in the status.
     */
    "contentConfigChecksum"?: string;
    /**
     * IncludedArtifacts contains a list of the last successfully included
     * Artifacts as instructed by GitRepositorySpec.Include.
     */
    "includedArtifacts"?: Array<{
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
    }>;
    /**
     * LastHandledReconcileAt holds the value of the most recent
     * reconcile request value, so a change of the annotation value
     * can be detected.
     */
    "lastHandledReconcileAt"?: string;
    /**
     * ObservedGeneration is the last observed generation of the GitRepository
     * object.
     */
    "observedGeneration"?: number;
    /**
     * ObservedIgnore is the observed exclusion patterns used for constructing
     * the source artifact.
     */
    "observedIgnore"?: string;
    /**
     * ObservedInclude is the observed list of GitRepository resources used to
     * to produce the current Artifact.
     */
    "observedInclude"?: Array<{
      /**
       * FromPath specifies the path to copy contents from, defaults to the root
       * of the Artifact.
       */
      "fromPath"?: string;
      /**
       * GitRepositoryRef specifies the GitRepository which Artifact contents
       * must be included.
       */
      "repository": {
        /**
         * Name of the referent.
         */
        "name": string;
      };
      /**
       * ToPath specifies the path to copy contents to, defaults to the name of
       * the GitRepositoryRef.
       */
      "toPath"?: string;
    }>;
    /**
     * ObservedRecurseSubmodules is the observed resource submodules
     * configuration used to produce the current Artifact.
     */
    "observedRecurseSubmodules"?: boolean;
    /**
     * URL is the dynamic fetch link for the latest Artifact.
     * It is provided on a "best effort" basis, and using the precise
     * GitRepositoryStatus.Artifact data is recommended.
     */
    "url"?: string;
  };
}

/**
 * GitRepository is the Schema for the gitrepositories API.
 */
export class GitRepository extends Model<IGitRepository> implements IGitRepository {
  "apiVersion": IGitRepository["apiVersion"];
  "kind": IGitRepository["kind"];
  "metadata"?: IGitRepository["metadata"];
  "spec"?: IGitRepository["spec"];
  "status"?: IGitRepository["status"];

static apiVersion: IGitRepository["apiVersion"] = "source.toolkit.fluxcd.io/v1beta2";
static kind: IGitRepository["kind"] = "GitRepository";
static is = createTypeMetaGuard<IGitRepository>(GitRepository);

constructor(data?: ModelData<IGitRepository>) {
  super({
    apiVersion: GitRepository.apiVersion,
    kind: GitRepository.kind,
    ...data
  } as IGitRepository);
}
}


setValidateFunc(GitRepository, validate as ValidateFunc<IGitRepository>);
