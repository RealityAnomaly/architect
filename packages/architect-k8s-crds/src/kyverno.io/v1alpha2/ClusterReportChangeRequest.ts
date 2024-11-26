import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/KyvernoIoV1alpha2ClusterReportChangeRequest.js";

/**
 * ClusterReportChangeRequest is the Schema for the ClusterReportChangeRequests API
 */
export interface IClusterReportChangeRequest {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "kyverno.io/v1alpha2";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "ClusterReportChangeRequest";
  "metadata"?: IObjectMeta;
  /**
   * PolicyReportResult provides result details
   */
  "results"?: Array<{
    /**
     * Category indicates policy category
     */
    "category"?: string;
    /**
     * Message is a short user friendly description of the policy rule
     */
    "message"?: string;
    /**
     * Policy is the name of the policy
     */
    "policy": string;
    /**
     * Properties provides additional information for the policy rule
     */
    "properties"?: {
      [key: string]: string;
    };
    /**
     * ResourceSelector is an optional selector for policy results that apply to multiple resources. For example, a policy result may apply to all pods that match a label. Either a Resource or a ResourceSelector can be specified. If neither are provided, the result is assumed to be for the policy report scope.
     */
    "resourceSelector"?: {
      /**
       * matchExpressions is a list of label selector requirements. The requirements are ANDed.
       */
      "matchExpressions"?: Array<{
        /**
         * key is the label key that the selector applies to.
         */
        "key": string;
        /**
         * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
         */
        "operator": string;
        /**
         * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
         */
        "values"?: Array<string>;
      }>;
      /**
       * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
       */
      "matchLabels"?: {
        [key: string]: string;
      };
    };
    /**
     * Resources is an optional reference to the resource checked by the policy and rule
     */
    "resources"?: Array<{
      /**
       * API version of the referent.
       */
      "apiVersion"?: string;
      /**
       * If referring to a piece of an object instead of an entire object, this string should contain a valid JSON/Go field access statement, such as desiredState.manifest.containers[2]. For example, if the object reference is to a container within a pod, this would take on a value like: "spec.containers{name}" (where "name" refers to the name of the container that triggered the event) or if no container name is specified "spec.containers[2]" (container with index 2 in this pod). This syntax is chosen only to have some well-defined way of referencing a part of an object. TODO: this design is not final and this field is subject to change in the future.
       */
      "fieldPath"?: string;
      /**
       * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
       */
      "kind"?: string;
      /**
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       */
      "name"?: string;
      /**
       * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
       */
      "namespace"?: string;
      /**
       * Specific resourceVersion to which this reference is made, if any. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
       */
      "resourceVersion"?: string;
      /**
       * UID of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#uids
       */
      "uid"?: string;
    }>;
    /**
     * Result indicates the outcome of the policy rule execution
     */
    "result"?: "pass" | "fail" | "warn" | "error" | "skip";
    /**
     * Rule is the name of the policy rule
     */
    "rule"?: string;
    /**
     * Scored indicates if this policy rule is scored
     */
    "scored"?: boolean;
    /**
     * Severity indicates policy severity
     */
    "severity"?: "high" | "low" | "medium";
    /**
     * Source is an identifier for the policy engine that manages this report
     */
    "source"?: string;
    /**
     * Timestamp indicates the time the result was found
     */
    "timestamp"?: {
      /**
       * Non-negative fractions of a second at nanosecond resolution. Negative second values with fractions must still have non-negative nanos values that count forward in time. Must be from 0 to 999,999,999 inclusive. This field may be limited in precision depending on context.
       */
      "nanos": number;
      /**
       * Represents seconds of UTC time since Unix epoch 1970-01-01T00:00:00Z. Must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive.
       */
      "seconds": number;
    };
  }>;
  /**
   * Scope is an optional reference to the report scope (e.g. a Deployment, Namespace, or Node)
   */
  "scope"?: {
    /**
     * API version of the referent.
     */
    "apiVersion"?: string;
    /**
     * If referring to a piece of an object instead of an entire object, this string should contain a valid JSON/Go field access statement, such as desiredState.manifest.containers[2]. For example, if the object reference is to a container within a pod, this would take on a value like: "spec.containers{name}" (where "name" refers to the name of the container that triggered the event) or if no container name is specified "spec.containers[2]" (container with index 2 in this pod). This syntax is chosen only to have some well-defined way of referencing a part of an object. TODO: this design is not final and this field is subject to change in the future.
     */
    "fieldPath"?: string;
    /**
     * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    "kind"?: string;
    /**
     * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
     */
    "name"?: string;
    /**
     * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
     */
    "namespace"?: string;
    /**
     * Specific resourceVersion to which this reference is made, if any. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
     */
    "resourceVersion"?: string;
    /**
     * UID of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#uids
     */
    "uid"?: string;
  };
  /**
   * ScopeSelector is an optional selector for multiple scopes (e.g. Pods). Either one of, or none of, but not both of, Scope or ScopeSelector should be specified.
   */
  "scopeSelector"?: {
    /**
     * matchExpressions is a list of label selector requirements. The requirements are ANDed.
     */
    "matchExpressions"?: Array<{
      /**
       * key is the label key that the selector applies to.
       */
      "key": string;
      /**
       * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
       */
      "operator": string;
      /**
       * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
       */
      "values"?: Array<string>;
    }>;
    /**
     * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
     */
    "matchLabels"?: {
      [key: string]: string;
    };
  };
  /**
   * PolicyReportSummary provides a summary of results
   */
  "summary"?: {
    /**
     * Error provides the count of policies that could not be evaluated
     */
    "error"?: number;
    /**
     * Fail provides the count of policies whose requirements were not met
     */
    "fail"?: number;
    /**
     * Pass provides the count of policies whose requirements were met
     */
    "pass"?: number;
    /**
     * Skip indicates the count of policies that were not selected for evaluation
     */
    "skip"?: number;
    /**
     * Warn provides the count of unscored policies whose requirements were not met
     */
    "warn"?: number;
  };
}

/**
 * ClusterReportChangeRequest is the Schema for the ClusterReportChangeRequests API
 */
export class ClusterReportChangeRequest extends Model<IClusterReportChangeRequest> implements IClusterReportChangeRequest {
  "apiVersion": IClusterReportChangeRequest["apiVersion"];
  "kind": IClusterReportChangeRequest["kind"];
  "metadata"?: IClusterReportChangeRequest["metadata"];
  "results"?: IClusterReportChangeRequest["results"];
  "scope"?: IClusterReportChangeRequest["scope"];
  "scopeSelector"?: IClusterReportChangeRequest["scopeSelector"];
  "summary"?: IClusterReportChangeRequest["summary"];

static apiVersion: IClusterReportChangeRequest["apiVersion"] = "kyverno.io/v1alpha2";
static kind: IClusterReportChangeRequest["kind"] = "ClusterReportChangeRequest";
static is = createTypeMetaGuard<IClusterReportChangeRequest>(ClusterReportChangeRequest);

constructor(data?: ModelData<IClusterReportChangeRequest>) {
  super({
    apiVersion: ClusterReportChangeRequest.apiVersion,
    kind: ClusterReportChangeRequest.kind,
    ...data
  } as IClusterReportChangeRequest);
}
}


setValidateFunc(ClusterReportChangeRequest, validate as ValidateFunc<IClusterReportChangeRequest>);
