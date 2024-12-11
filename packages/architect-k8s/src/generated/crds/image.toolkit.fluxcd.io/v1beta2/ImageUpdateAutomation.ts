import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/ImageToolkitFluxcdIoV1beta2ImageUpdateAutomation.js";

/**
 * ImageUpdateAutomation is the Schema for the imageupdateautomations API
 */
export interface IImageUpdateAutomation {
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
  "kind": "ImageUpdateAutomation";
  "metadata"?: IObjectMeta;
  /**
   * ImageUpdateAutomationSpec defines the desired state of ImageUpdateAutomation
   */
  "spec"?: {
    /**
     * GitSpec contains all the git-specific definitions. This is
     * technically optional, but in practice mandatory until there are
     * other kinds of source allowed.
     */
    "git"?: {
      /**
       * Checkout gives the parameters for cloning the git repository,
       * ready to make changes. If not present, the `spec.ref` field from the
       * referenced `GitRepository` or its default will be used.
       */
      "checkout"?: {
        /**
         * Reference gives a branch, tag or commit to clone from the Git
         * repository.
         */
        "ref": {
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
      };
      /**
       * Commit specifies how to commit to the git repository.
       */
      "commit": {
        /**
         * Author gives the email and optionally the name to use as the
         * author of commits.
         */
        "author": {
          /**
           * Email gives the email to provide when making a commit.
           */
          "email": string;
          /**
           * Name gives the name to provide when making a commit.
           */
          "name"?: string;
        };
        /**
         * MessageTemplate provides a template for the commit message,
         * into which will be interpolated the details of the change made.
         */
        "messageTemplate"?: string;
        /**
         * SigningKey provides the option to sign commits with a GPG key
         */
        "signingKey"?: {
          /**
           * SecretRef holds the name to a secret that contains a 'git.asc' key
           * corresponding to the ASCII Armored file containing the GPG signing
           * keypair as the value. It must be in the same namespace as the
           * ImageUpdateAutomation.
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
       * Push specifies how and where to push commits made by the
       * automation. If missing, commits are pushed (back) to
       * `.spec.checkout.branch` or its default.
       */
      "push"?: {
        /**
         * Branch specifies that commits should be pushed to the branch
         * named. The branch is created using `.spec.checkout.branch` as the
         * starting point, if it doesn't already exist.
         */
        "branch"?: string;
        /**
         * Options specifies the push options that are sent to the Git
         * server when performing a push operation. For details, see:
         * https://git-scm.com/docs/git-push#Documentation/git-push.txt---push-optionltoptiongt
         */
        "options"?: {
          [key: string]: string;
        };
        /**
         * Refspec specifies the Git Refspec to use for a push operation.
         * If both Branch and Refspec are provided, then the commit is pushed
         * to the branch and also using the specified refspec.
         * For more details about Git Refspecs, see:
         * https://git-scm.com/book/en/v2/Git-Internals-The-Refspec
         */
        "refspec"?: string;
      };
    };
    /**
     * Interval gives an lower bound for how often the automation
     * run should be attempted.
     */
    "interval": string;
    /**
     * PolicySelector allows to filter applied policies based on labels.
     * By default includes all policies in namespace.
     */
    "policySelector"?: {
      /**
       * matchExpressions is a list of label selector requirements. The requirements are ANDed.
       */
      "matchExpressions"?: Array<{
        /**
         * key is the label key that the selector applies to.
         */
        "key": string;
        /**
         * operator represents a key's relationship to a set of values.
         * Valid operators are In, NotIn, Exists and DoesNotExist.
         */
        "operator": string;
        /**
         * values is an array of string values. If the operator is In or NotIn,
         * the values array must be non-empty. If the operator is Exists or DoesNotExist,
         * the values array must be empty. This array is replaced during a strategic
         * merge patch.
         */
        "values"?: Array<string>;
      }>;
      /**
       * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
       * map is equivalent to an element of matchExpressions, whose key field is "key", the
       * operator is "In", and the values array contains only "value". The requirements are ANDed.
       */
      "matchLabels"?: {
        [key: string]: string;
      };
    };
    /**
     * SourceRef refers to the resource giving access details
     * to a git repository.
     */
    "sourceRef": {
      /**
       * API version of the referent.
       */
      "apiVersion"?: string;
      /**
       * Kind of the referent.
       */
      "kind": "GitRepository";
      /**
       * Name of the referent.
       */
      "name": string;
      /**
       * Namespace of the referent, defaults to the namespace of the Kubernetes resource object that contains the reference.
       */
      "namespace"?: string;
    };
    /**
     * Suspend tells the controller to not run this automation, until
     * it is unset (or set to false). Defaults to false.
     */
    "suspend"?: boolean;
    /**
     * Update gives the specification for how to update the files in
     * the repository. This can be left empty, to use the default
     * value.
     */
    "update"?: {
      /**
       * Path to the directory containing the manifests to be updated.
       * Defaults to 'None', which translates to the root path
       * of the GitRepositoryRef.
       */
      "path"?: string;
      /**
       * Strategy names the strategy to be used.
       */
      "strategy": "Setters";
    };
  };
  /**
   * ImageUpdateAutomationStatus defines the observed state of ImageUpdateAutomation
   */
  "status"?: {
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
     * LastAutomationRunTime records the last time the controller ran
     * this automation through to completion (even if no updates were
     * made).
     */
    "lastAutomationRunTime"?: string;
    /**
     * LastHandledReconcileAt holds the value of the most recent
     * reconcile request value, so a change of the annotation value
     * can be detected.
     */
    "lastHandledReconcileAt"?: string;
    /**
     * LastPushCommit records the SHA1 of the last commit made by the
     * controller, for this automation object
     */
    "lastPushCommit"?: string;
    /**
     * LastPushTime records the time of the last pushed change.
     */
    "lastPushTime"?: string;
    "observedGeneration"?: number;
    /**
     * ObservedPolicies is the list of observed ImagePolicies that were
     * considered by the ImageUpdateAutomation update process.
     */
    "observedPolicies"?: {
      [key: string]: {
        /**
         * Name is the bare image's name.
         */
        "name": string;
        /**
         * Tag is the image's tag.
         */
        "tag": string;
      };
    };
    /**
     * ObservedPolicies []ObservedPolicy `json:"observedPolicies,omitempty"`
     * ObservedSourceRevision is the last observed source revision. This can be
     * used to determine if the source has been updated since last observation.
     */
    "observedSourceRevision"?: string;
  };
}

/**
 * ImageUpdateAutomation is the Schema for the imageupdateautomations API
 */
export class ImageUpdateAutomation extends Model<IImageUpdateAutomation> implements IImageUpdateAutomation {
  "apiVersion": IImageUpdateAutomation["apiVersion"];
  "kind": IImageUpdateAutomation["kind"];
  "metadata"?: IImageUpdateAutomation["metadata"];
  "spec"?: IImageUpdateAutomation["spec"];
  "status"?: IImageUpdateAutomation["status"];

static apiVersion: IImageUpdateAutomation["apiVersion"] = "image.toolkit.fluxcd.io/v1beta2";
static kind: IImageUpdateAutomation["kind"] = "ImageUpdateAutomation";
static is = createTypeMetaGuard<IImageUpdateAutomation>(ImageUpdateAutomation);

constructor(data?: ModelData<IImageUpdateAutomation>) {
  super();

  this.setDefinedProps({
    apiVersion: ImageUpdateAutomation.apiVersion,
    kind: ImageUpdateAutomation.kind,
    ...data
  } as IImageUpdateAutomation);
}
}


setValidateFunc(ImageUpdateAutomation, validate as ValidateFunc<IImageUpdateAutomation>);
