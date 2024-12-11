import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/ImageToolkitFluxcdIoV1beta1ImagePolicy.js";

/**
 * ImagePolicy is the Schema for the imagepolicies API
 */
export interface IImagePolicy {
  /**
   * APIVersion defines the versioned schema of this representation of an object.
   * Servers should convert recognized schemas to the latest internal value, and
   * may reject unrecognized values.
   * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "image.toolkit.fluxcd.io/v1beta1";
  /**
   * Kind is a string value representing the REST resource this object represents.
   * Servers may infer this from the endpoint the client submits requests to.
   * Cannot be updated.
   * In CamelCase.
   * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "ImagePolicy";
  "metadata"?: IObjectMeta;
  /**
   * ImagePolicySpec defines the parameters for calculating the
   * ImagePolicy
   */
  "spec"?: {
    /**
     * FilterTags enables filtering for only a subset of tags based on a set of
     * rules. If no rules are provided, all the tags from the repository will be
     * ordered and compared.
     */
    "filterTags"?: {
      /**
       * Extract allows a capture group to be extracted from the specified regular
       * expression pattern, useful before tag evaluation.
       */
      "extract"?: string;
      /**
       * Pattern specifies a regular expression pattern used to filter for image
       * tags.
       */
      "pattern"?: string;
    };
    /**
     * ImageRepositoryRef points at the object specifying the image
     * being scanned
     */
    "imageRepositoryRef": {
      /**
       * Name of the referent.
       */
      "name": string;
      /**
       * Namespace of the referent, when not specified it acts as LocalObjectReference.
       */
      "namespace"?: string;
    };
    /**
     * Policy gives the particulars of the policy to be followed in
     * selecting the most recent image
     */
    "policy": {
      /**
       * Alphabetical set of rules to use for alphabetical ordering of the tags.
       */
      "alphabetical"?: {
        /**
         * Order specifies the sorting order of the tags. Given the letters of the
         * alphabet as tags, ascending order would select Z, and descending order
         * would select A.
         */
        "order"?: "asc" | "desc";
      };
      /**
       * Numerical set of rules to use for numerical ordering of the tags.
       */
      "numerical"?: {
        /**
         * Order specifies the sorting order of the tags. Given the integer values
         * from 0 to 9 as tags, ascending order would select 9, and descending order
         * would select 0.
         */
        "order"?: "asc" | "desc";
      };
      /**
       * SemVer gives a semantic version range to check against the tags
       * available.
       */
      "semver"?: {
        /**
         * Range gives a semver range for the image tag; the highest
         * version within the range that's a tag yields the latest image.
         */
        "range": string;
      };
    };
  };
  /**
   * ImagePolicyStatus defines the observed state of ImagePolicy
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
     * LatestImage gives the first in the list of images scanned by
     * the image repository, when filtered and ordered according to
     * the policy.
     */
    "latestImage"?: string;
    "observedGeneration"?: number;
  };
}

/**
 * ImagePolicy is the Schema for the imagepolicies API
 */
export class ImagePolicy extends Model<IImagePolicy> implements IImagePolicy {
  "apiVersion": IImagePolicy["apiVersion"];
  "kind": IImagePolicy["kind"];
  "metadata"?: IImagePolicy["metadata"];
  "spec"?: IImagePolicy["spec"];
  "status"?: IImagePolicy["status"];

static apiVersion: IImagePolicy["apiVersion"] = "image.toolkit.fluxcd.io/v1beta1";
static kind: IImagePolicy["kind"] = "ImagePolicy";
static is = createTypeMetaGuard<IImagePolicy>(ImagePolicy);

constructor(data?: ModelData<IImagePolicy>) {
  super();

  this.setDefinedProps({
    apiVersion: ImagePolicy.apiVersion,
    kind: ImagePolicy.kind,
    ...data
  } as IImagePolicy);
}
}


setValidateFunc(ImagePolicy, validate as ValidateFunc<IImagePolicy>);
