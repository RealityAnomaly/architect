import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/KyvernoIoV1Policy.js";

/**
 * Policy declares validation, mutation, and generation behaviors for matching resources. See: https://kyverno.io/docs/writing-policies/ for more information.
 */
export interface IPolicy {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "kyverno.io/v1";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "Policy";
  "metadata"?: IObjectMeta;
  /**
   * Spec defines policy behaviors and contains one or more rules.
   */
  "spec": {
    /**
     * Background controls if rules are applied to existing resources during a background scan. Optional. Default value is "true". The value must be set to "false" if the policy rule uses variables that are only available in the admission review request (e.g. user name).
     */
    "background"?: boolean;
    /**
     * FailurePolicy defines how unrecognized errors from the admission endpoint are handled. Rules within the same policy share the same failure behavior. Allowed values are Ignore or Fail. Defaults to Fail.
     */
    "failurePolicy"?: "Ignore" | "Fail";
    /**
     * GenerateExistingOnPolicyUpdate controls wether to trigger generate rule in existing resources If is set to "true" generate rule will be triggered and applied to existing matched resources. Defaults to "false" if not specified.
     */
    "generateExistingOnPolicyUpdate"?: boolean;
    /**
     * MutateExistingOnPolicyUpdate controls if a mutateExisting policy is applied on policy events. Default value is "false".
     */
    "mutateExistingOnPolicyUpdate"?: boolean;
    /**
     * Rules is a list of Rule instances. A Policy contains multiple rules and each rule can validate, mutate, or generate resources.
     */
    "rules"?: Array<{
      /**
       * Context defines variables and data sources that can be used during rule execution.
       */
      "context"?: Array<{
        /**
         * APICall defines an HTTP request to the Kubernetes API server. The JSON data retrieved is stored in the context.
         */
        "apiCall"?: {
          /**
           * JMESPath is an optional JSON Match Expression that can be used to transform the JSON response returned from the API server. For example a JMESPath of "items | length(@)" applied to the API server response to the URLPath "/apis/apps/v1/deployments" will return the total count of deployments across all namespaces.
           */
          "jmesPath"?: string;
          /**
           * URLPath is the URL path to be used in the HTTP GET request to the Kubernetes API server (e.g. "/api/v1/namespaces" or  "/apis/apps/v1/deployments"). The format required is the same format used by the `kubectl get --raw` command.
           */
          "urlPath": string;
        };
        /**
         * ConfigMap is the ConfigMap reference.
         */
        "configMap"?: {
          /**
           * Name is the ConfigMap name.
           */
          "name": string;
          /**
           * Namespace is the ConfigMap namespace.
           */
          "namespace"?: string;
        };
        /**
         * ImageRegistry defines requests to an OCI/Docker V2 registry to fetch image details.
         */
        "imageRegistry"?: {
          /**
           * JMESPath is an optional JSON Match Expression that can be used to transform the ImageData struct returned as a result of processing the image reference.
           */
          "jmesPath"?: string;
          /**
           * Reference is image reference to a container image in the registry. Example: ghcr.io/kyverno/kyverno:latest
           */
          "reference": string;
        };
        /**
         * Name is the variable name.
         */
        "name"?: string;
        /**
         * Variable defines an arbitrary JMESPath context variable that can be defined inline.
         */
        "variable"?: {
          /**
           * Default is an optional arbitrary JSON object that the variable may take if the JMESPath expression evaluates to nil
           */
          "default"?: any;
          /**
           * JMESPath is an optional JMESPath Expression that can be used to transform the variable.
           */
          "jmesPath"?: string;
          /**
           * Value is any arbitrary JSON object representable in YAML or JSON form.
           */
          "value"?: any;
        };
      }>;
      /**
       * ExcludeResources defines when this policy rule should not be applied. The exclude criteria can include resource information (e.g. kind, name, namespace, labels) and admission review request information like the name or role.
       */
      "exclude"?: {
        /**
         * All allows specifying resources which will be ANDed
         */
        "all"?: Array<{
          /**
           * ClusterRoles is the list of cluster-wide role names for the user.
           */
          "clusterRoles"?: Array<string>;
          /**
           * ResourceDescription contains information about the resource being created or modified.
           */
          "resources"?: {
            /**
             * Annotations is a  map of annotations (key-value pairs of type string). Annotation keys and values support the wildcard characters "\*" (matches zero or many characters) and "?" (matches at least one character).
             */
            "annotations"?: {
              [key: string]: string;
            };
            /**
             * Kinds is a list of resource kinds.
             */
            "kinds"?: Array<string>;
            /**
             * Name is the name of the resource. The name supports wildcard characters "\*" (matches zero or many characters) and "?" (at least one character). NOTE: "Name" is being deprecated in favor of "Names".
             */
            "name"?: string;
            /**
             * Names are the names of the resources. Each name supports wildcard characters "\*" (matches zero or many characters) and "?" (at least one character).
             */
            "names"?: Array<string>;
            /**
             * NamespaceSelector is a label selector for the resource namespace. Label keys and values in `matchLabels` support the wildcard characters `\*` (matches zero or many characters) and `?` (matches one character).Wildcards allows writing label selectors like ["storage.k8s.io/\*": "\*"]. Note that using ["\*" : "\*"] matches any key and value but does not match an empty label set.
             */
            "namespaceSelector"?: {
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
             * Namespaces is a list of namespaces names. Each name supports wildcard characters "\*" (matches zero or many characters) and "?" (at least one character).
             */
            "namespaces"?: Array<string>;
            /**
             * Selector is a label selector. Label keys and values in `matchLabels` support the wildcard characters `\*` (matches zero or many characters) and `?` (matches one character). Wildcards allows writing label selectors like ["storage.k8s.io/\*": "\*"]. Note that using ["\*" : "\*"] matches any key and value but does not match an empty label set.
             */
            "selector"?: {
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
          };
          /**
           * Roles is the list of namespaced role names for the user.
           */
          "roles"?: Array<string>;
          /**
           * Subjects is the list of subject names like users, user groups, and service accounts.
           */
          "subjects"?: Array<{
            /**
             * APIGroup holds the API group of the referenced subject. Defaults to "" for ServiceAccount subjects. Defaults to "rbac.authorization.k8s.io" for User and Group subjects.
             */
            "apiGroup"?: string;
            /**
             * Kind of object being referenced. Values defined by this API group are "User", "Group", and "ServiceAccount". If the Authorizer does not recognized the kind value, the Authorizer should report an error.
             */
            "kind": string;
            /**
             * Name of the object being referenced.
             */
            "name": string;
            /**
             * Namespace of the referenced object.  If the object kind is non-namespace, such as "User" or "Group", and this value is not empty the Authorizer should report an error.
             */
            "namespace"?: string;
          }>;
        }>;
        /**
         * Any allows specifying resources which will be ORed
         */
        "any"?: Array<{
          /**
           * ClusterRoles is the list of cluster-wide role names for the user.
           */
          "clusterRoles"?: Array<string>;
          /**
           * ResourceDescription contains information about the resource being created or modified.
           */
          "resources"?: {
            /**
             * Annotations is a  map of annotations (key-value pairs of type string). Annotation keys and values support the wildcard characters "\*" (matches zero or many characters) and "?" (matches at least one character).
             */
            "annotations"?: {
              [key: string]: string;
            };
            /**
             * Kinds is a list of resource kinds.
             */
            "kinds"?: Array<string>;
            /**
             * Name is the name of the resource. The name supports wildcard characters "\*" (matches zero or many characters) and "?" (at least one character). NOTE: "Name" is being deprecated in favor of "Names".
             */
            "name"?: string;
            /**
             * Names are the names of the resources. Each name supports wildcard characters "\*" (matches zero or many characters) and "?" (at least one character).
             */
            "names"?: Array<string>;
            /**
             * NamespaceSelector is a label selector for the resource namespace. Label keys and values in `matchLabels` support the wildcard characters `\*` (matches zero or many characters) and `?` (matches one character).Wildcards allows writing label selectors like ["storage.k8s.io/\*": "\*"]. Note that using ["\*" : "\*"] matches any key and value but does not match an empty label set.
             */
            "namespaceSelector"?: {
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
             * Namespaces is a list of namespaces names. Each name supports wildcard characters "\*" (matches zero or many characters) and "?" (at least one character).
             */
            "namespaces"?: Array<string>;
            /**
             * Selector is a label selector. Label keys and values in `matchLabels` support the wildcard characters `\*` (matches zero or many characters) and `?` (matches one character). Wildcards allows writing label selectors like ["storage.k8s.io/\*": "\*"]. Note that using ["\*" : "\*"] matches any key and value but does not match an empty label set.
             */
            "selector"?: {
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
          };
          /**
           * Roles is the list of namespaced role names for the user.
           */
          "roles"?: Array<string>;
          /**
           * Subjects is the list of subject names like users, user groups, and service accounts.
           */
          "subjects"?: Array<{
            /**
             * APIGroup holds the API group of the referenced subject. Defaults to "" for ServiceAccount subjects. Defaults to "rbac.authorization.k8s.io" for User and Group subjects.
             */
            "apiGroup"?: string;
            /**
             * Kind of object being referenced. Values defined by this API group are "User", "Group", and "ServiceAccount". If the Authorizer does not recognized the kind value, the Authorizer should report an error.
             */
            "kind": string;
            /**
             * Name of the object being referenced.
             */
            "name": string;
            /**
             * Namespace of the referenced object.  If the object kind is non-namespace, such as "User" or "Group", and this value is not empty the Authorizer should report an error.
             */
            "namespace"?: string;
          }>;
        }>;
        /**
         * ClusterRoles is the list of cluster-wide role names for the user.
         */
        "clusterRoles"?: Array<string>;
        /**
         * ResourceDescription contains information about the resource being created or modified. Requires at least one tag to be specified when under MatchResources. Specifying ResourceDescription directly under match is being deprecated. Please specify under "any" or "all" instead.
         */
        "resources"?: {
          /**
           * Annotations is a  map of annotations (key-value pairs of type string). Annotation keys and values support the wildcard characters "\*" (matches zero or many characters) and "?" (matches at least one character).
           */
          "annotations"?: {
            [key: string]: string;
          };
          /**
           * Kinds is a list of resource kinds.
           */
          "kinds"?: Array<string>;
          /**
           * Name is the name of the resource. The name supports wildcard characters "\*" (matches zero or many characters) and "?" (at least one character). NOTE: "Name" is being deprecated in favor of "Names".
           */
          "name"?: string;
          /**
           * Names are the names of the resources. Each name supports wildcard characters "\*" (matches zero or many characters) and "?" (at least one character).
           */
          "names"?: Array<string>;
          /**
           * NamespaceSelector is a label selector for the resource namespace. Label keys and values in `matchLabels` support the wildcard characters `\*` (matches zero or many characters) and `?` (matches one character).Wildcards allows writing label selectors like ["storage.k8s.io/\*": "\*"]. Note that using ["\*" : "\*"] matches any key and value but does not match an empty label set.
           */
          "namespaceSelector"?: {
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
           * Namespaces is a list of namespaces names. Each name supports wildcard characters "\*" (matches zero or many characters) and "?" (at least one character).
           */
          "namespaces"?: Array<string>;
          /**
           * Selector is a label selector. Label keys and values in `matchLabels` support the wildcard characters `\*` (matches zero or many characters) and `?` (matches one character). Wildcards allows writing label selectors like ["storage.k8s.io/\*": "\*"]. Note that using ["\*" : "\*"] matches any key and value but does not match an empty label set.
           */
          "selector"?: {
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
        };
        /**
         * Roles is the list of namespaced role names for the user.
         */
        "roles"?: Array<string>;
        /**
         * Subjects is the list of subject names like users, user groups, and service accounts.
         */
        "subjects"?: Array<{
          /**
           * APIGroup holds the API group of the referenced subject. Defaults to "" for ServiceAccount subjects. Defaults to "rbac.authorization.k8s.io" for User and Group subjects.
           */
          "apiGroup"?: string;
          /**
           * Kind of object being referenced. Values defined by this API group are "User", "Group", and "ServiceAccount". If the Authorizer does not recognized the kind value, the Authorizer should report an error.
           */
          "kind": string;
          /**
           * Name of the object being referenced.
           */
          "name": string;
          /**
           * Namespace of the referenced object.  If the object kind is non-namespace, such as "User" or "Group", and this value is not empty the Authorizer should report an error.
           */
          "namespace"?: string;
        }>;
      };
      /**
       * Generation is used to create new resources.
       */
      "generate"?: {
        /**
         * APIVersion specifies resource apiVersion.
         */
        "apiVersion"?: string;
        /**
         * Clone specifies the source resource used to populate each generated resource. At most one of Data or Clone can be specified. If neither are provided, the generated resource will be created with default data only.
         */
        "clone"?: {
          /**
           * Name specifies name of the resource.
           */
          "name"?: string;
          /**
           * Namespace specifies source resource namespace.
           */
          "namespace"?: string;
        };
        /**
         * Data provides the resource declaration used to populate each generated resource. At most one of Data or Clone must be specified. If neither are provided, the generated resource will be created with default data only.
         */
        "data"?: any;
        /**
         * Kind specifies resource kind.
         */
        "kind"?: string;
        /**
         * Name specifies the resource name.
         */
        "name"?: string;
        /**
         * Namespace specifies resource namespace.
         */
        "namespace"?: string;
        /**
         * Synchronize controls if generated resources should be kept in-sync with their source resource. If Synchronize is set to "true" changes to generated resources will be overwritten with resource data from Data or the resource specified in the Clone declaration. Optional. Defaults to "false" if not specified.
         */
        "synchronize"?: boolean;
      };
      /**
       * ImageExtractors defines a mapping from kinds to ImageExtractorConfigs. This config is only valid for verifyImages rules.
       */
      "imageExtractors"?: {
        [key: string]: Array<{
          /**
           * Key is an optional name of the field within 'path' that will be used to uniquely identify an image. Note - this field MUST be unique.
           */
          "key"?: string;
          /**
           * Name is the entry the image will be available under 'images.<name>' in the context. If this field is not defined, image entries will appear under 'images.custom'.
           */
          "name"?: string;
          /**
           * Path is the path to the object containing the image field in a custom resource. It should be slash-separated. Each slash-separated key must be a valid YAML key or a wildcard '\*'. Wildcard keys are expanded in case of arrays or objects.
           */
          "path": string;
          /**
           * Value is an optional name of the field within 'path' that points to the image URI. This is useful when a custom 'key' is also defined.
           */
          "value"?: string;
        }>;
      };
      /**
       * MatchResources defines when this policy rule should be applied. The match criteria can include resource information (e.g. kind, name, namespace, labels) and admission review request information like the user name or role. At least one kind is required.
       */
      "match"?: {
        /**
         * All allows specifying resources which will be ANDed
         */
        "all"?: Array<{
          /**
           * ClusterRoles is the list of cluster-wide role names for the user.
           */
          "clusterRoles"?: Array<string>;
          /**
           * ResourceDescription contains information about the resource being created or modified.
           */
          "resources"?: {
            /**
             * Annotations is a  map of annotations (key-value pairs of type string). Annotation keys and values support the wildcard characters "\*" (matches zero or many characters) and "?" (matches at least one character).
             */
            "annotations"?: {
              [key: string]: string;
            };
            /**
             * Kinds is a list of resource kinds.
             */
            "kinds"?: Array<string>;
            /**
             * Name is the name of the resource. The name supports wildcard characters "\*" (matches zero or many characters) and "?" (at least one character). NOTE: "Name" is being deprecated in favor of "Names".
             */
            "name"?: string;
            /**
             * Names are the names of the resources. Each name supports wildcard characters "\*" (matches zero or many characters) and "?" (at least one character).
             */
            "names"?: Array<string>;
            /**
             * NamespaceSelector is a label selector for the resource namespace. Label keys and values in `matchLabels` support the wildcard characters `\*` (matches zero or many characters) and `?` (matches one character).Wildcards allows writing label selectors like ["storage.k8s.io/\*": "\*"]. Note that using ["\*" : "\*"] matches any key and value but does not match an empty label set.
             */
            "namespaceSelector"?: {
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
             * Namespaces is a list of namespaces names. Each name supports wildcard characters "\*" (matches zero or many characters) and "?" (at least one character).
             */
            "namespaces"?: Array<string>;
            /**
             * Selector is a label selector. Label keys and values in `matchLabels` support the wildcard characters `\*` (matches zero or many characters) and `?` (matches one character). Wildcards allows writing label selectors like ["storage.k8s.io/\*": "\*"]. Note that using ["\*" : "\*"] matches any key and value but does not match an empty label set.
             */
            "selector"?: {
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
          };
          /**
           * Roles is the list of namespaced role names for the user.
           */
          "roles"?: Array<string>;
          /**
           * Subjects is the list of subject names like users, user groups, and service accounts.
           */
          "subjects"?: Array<{
            /**
             * APIGroup holds the API group of the referenced subject. Defaults to "" for ServiceAccount subjects. Defaults to "rbac.authorization.k8s.io" for User and Group subjects.
             */
            "apiGroup"?: string;
            /**
             * Kind of object being referenced. Values defined by this API group are "User", "Group", and "ServiceAccount". If the Authorizer does not recognized the kind value, the Authorizer should report an error.
             */
            "kind": string;
            /**
             * Name of the object being referenced.
             */
            "name": string;
            /**
             * Namespace of the referenced object.  If the object kind is non-namespace, such as "User" or "Group", and this value is not empty the Authorizer should report an error.
             */
            "namespace"?: string;
          }>;
        }>;
        /**
         * Any allows specifying resources which will be ORed
         */
        "any"?: Array<{
          /**
           * ClusterRoles is the list of cluster-wide role names for the user.
           */
          "clusterRoles"?: Array<string>;
          /**
           * ResourceDescription contains information about the resource being created or modified.
           */
          "resources"?: {
            /**
             * Annotations is a  map of annotations (key-value pairs of type string). Annotation keys and values support the wildcard characters "\*" (matches zero or many characters) and "?" (matches at least one character).
             */
            "annotations"?: {
              [key: string]: string;
            };
            /**
             * Kinds is a list of resource kinds.
             */
            "kinds"?: Array<string>;
            /**
             * Name is the name of the resource. The name supports wildcard characters "\*" (matches zero or many characters) and "?" (at least one character). NOTE: "Name" is being deprecated in favor of "Names".
             */
            "name"?: string;
            /**
             * Names are the names of the resources. Each name supports wildcard characters "\*" (matches zero or many characters) and "?" (at least one character).
             */
            "names"?: Array<string>;
            /**
             * NamespaceSelector is a label selector for the resource namespace. Label keys and values in `matchLabels` support the wildcard characters `\*` (matches zero or many characters) and `?` (matches one character).Wildcards allows writing label selectors like ["storage.k8s.io/\*": "\*"]. Note that using ["\*" : "\*"] matches any key and value but does not match an empty label set.
             */
            "namespaceSelector"?: {
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
             * Namespaces is a list of namespaces names. Each name supports wildcard characters "\*" (matches zero or many characters) and "?" (at least one character).
             */
            "namespaces"?: Array<string>;
            /**
             * Selector is a label selector. Label keys and values in `matchLabels` support the wildcard characters `\*` (matches zero or many characters) and `?` (matches one character). Wildcards allows writing label selectors like ["storage.k8s.io/\*": "\*"]. Note that using ["\*" : "\*"] matches any key and value but does not match an empty label set.
             */
            "selector"?: {
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
          };
          /**
           * Roles is the list of namespaced role names for the user.
           */
          "roles"?: Array<string>;
          /**
           * Subjects is the list of subject names like users, user groups, and service accounts.
           */
          "subjects"?: Array<{
            /**
             * APIGroup holds the API group of the referenced subject. Defaults to "" for ServiceAccount subjects. Defaults to "rbac.authorization.k8s.io" for User and Group subjects.
             */
            "apiGroup"?: string;
            /**
             * Kind of object being referenced. Values defined by this API group are "User", "Group", and "ServiceAccount". If the Authorizer does not recognized the kind value, the Authorizer should report an error.
             */
            "kind": string;
            /**
             * Name of the object being referenced.
             */
            "name": string;
            /**
             * Namespace of the referenced object.  If the object kind is non-namespace, such as "User" or "Group", and this value is not empty the Authorizer should report an error.
             */
            "namespace"?: string;
          }>;
        }>;
        /**
         * ClusterRoles is the list of cluster-wide role names for the user.
         */
        "clusterRoles"?: Array<string>;
        /**
         * ResourceDescription contains information about the resource being created or modified. Requires at least one tag to be specified when under MatchResources. Specifying ResourceDescription directly under match is being deprecated. Please specify under "any" or "all" instead.
         */
        "resources"?: {
          /**
           * Annotations is a  map of annotations (key-value pairs of type string). Annotation keys and values support the wildcard characters "\*" (matches zero or many characters) and "?" (matches at least one character).
           */
          "annotations"?: {
            [key: string]: string;
          };
          /**
           * Kinds is a list of resource kinds.
           */
          "kinds"?: Array<string>;
          /**
           * Name is the name of the resource. The name supports wildcard characters "\*" (matches zero or many characters) and "?" (at least one character). NOTE: "Name" is being deprecated in favor of "Names".
           */
          "name"?: string;
          /**
           * Names are the names of the resources. Each name supports wildcard characters "\*" (matches zero or many characters) and "?" (at least one character).
           */
          "names"?: Array<string>;
          /**
           * NamespaceSelector is a label selector for the resource namespace. Label keys and values in `matchLabels` support the wildcard characters `\*` (matches zero or many characters) and `?` (matches one character).Wildcards allows writing label selectors like ["storage.k8s.io/\*": "\*"]. Note that using ["\*" : "\*"] matches any key and value but does not match an empty label set.
           */
          "namespaceSelector"?: {
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
           * Namespaces is a list of namespaces names. Each name supports wildcard characters "\*" (matches zero or many characters) and "?" (at least one character).
           */
          "namespaces"?: Array<string>;
          /**
           * Selector is a label selector. Label keys and values in `matchLabels` support the wildcard characters `\*` (matches zero or many characters) and `?` (matches one character). Wildcards allows writing label selectors like ["storage.k8s.io/\*": "\*"]. Note that using ["\*" : "\*"] matches any key and value but does not match an empty label set.
           */
          "selector"?: {
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
        };
        /**
         * Roles is the list of namespaced role names for the user.
         */
        "roles"?: Array<string>;
        /**
         * Subjects is the list of subject names like users, user groups, and service accounts.
         */
        "subjects"?: Array<{
          /**
           * APIGroup holds the API group of the referenced subject. Defaults to "" for ServiceAccount subjects. Defaults to "rbac.authorization.k8s.io" for User and Group subjects.
           */
          "apiGroup"?: string;
          /**
           * Kind of object being referenced. Values defined by this API group are "User", "Group", and "ServiceAccount". If the Authorizer does not recognized the kind value, the Authorizer should report an error.
           */
          "kind": string;
          /**
           * Name of the object being referenced.
           */
          "name": string;
          /**
           * Namespace of the referenced object.  If the object kind is non-namespace, such as "User" or "Group", and this value is not empty the Authorizer should report an error.
           */
          "namespace"?: string;
        }>;
      };
      /**
       * Mutation is used to modify matching resources.
       */
      "mutate"?: {
        /**
         * ForEach applies mutation rules to a list of sub-elements by creating a context for each entry in the list and looping over it to apply the specified logic.
         */
        "foreach"?: Array<{
          /**
           * Context defines variables and data sources that can be used during rule execution.
           */
          "context"?: Array<{
            /**
             * APICall defines an HTTP request to the Kubernetes API server. The JSON data retrieved is stored in the context.
             */
            "apiCall"?: {
              /**
               * JMESPath is an optional JSON Match Expression that can be used to transform the JSON response returned from the API server. For example a JMESPath of "items | length(@)" applied to the API server response to the URLPath "/apis/apps/v1/deployments" will return the total count of deployments across all namespaces.
               */
              "jmesPath"?: string;
              /**
               * URLPath is the URL path to be used in the HTTP GET request to the Kubernetes API server (e.g. "/api/v1/namespaces" or  "/apis/apps/v1/deployments"). The format required is the same format used by the `kubectl get --raw` command.
               */
              "urlPath": string;
            };
            /**
             * ConfigMap is the ConfigMap reference.
             */
            "configMap"?: {
              /**
               * Name is the ConfigMap name.
               */
              "name": string;
              /**
               * Namespace is the ConfigMap namespace.
               */
              "namespace"?: string;
            };
            /**
             * ImageRegistry defines requests to an OCI/Docker V2 registry to fetch image details.
             */
            "imageRegistry"?: {
              /**
               * JMESPath is an optional JSON Match Expression that can be used to transform the ImageData struct returned as a result of processing the image reference.
               */
              "jmesPath"?: string;
              /**
               * Reference is image reference to a container image in the registry. Example: ghcr.io/kyverno/kyverno:latest
               */
              "reference": string;
            };
            /**
             * Name is the variable name.
             */
            "name"?: string;
            /**
             * Variable defines an arbitrary JMESPath context variable that can be defined inline.
             */
            "variable"?: {
              /**
               * Default is an optional arbitrary JSON object that the variable may take if the JMESPath expression evaluates to nil
               */
              "default"?: any;
              /**
               * JMESPath is an optional JMESPath Expression that can be used to transform the variable.
               */
              "jmesPath"?: string;
              /**
               * Value is any arbitrary JSON object representable in YAML or JSON form.
               */
              "value"?: any;
            };
          }>;
          /**
           * List specifies a JMESPath expression that results in one or more elements to which the validation logic is applied.
           */
          "list"?: string;
          /**
           * PatchStrategicMerge is a strategic merge patch used to modify resources. See https://kubernetes.io/docs/tasks/manage-kubernetes-objects/update-api-object-kubectl-patch/ and https://kubectl.docs.kubernetes.io/references/kustomize/patchesstrategicmerge/.
           */
          "patchStrategicMerge"?: any;
          /**
           * PatchesJSON6902 is a list of RFC 6902 JSON Patch declarations used to modify resources. See https://tools.ietf.org/html/rfc6902 and https://kubectl.docs.kubernetes.io/references/kustomize/patchesjson6902/.
           */
          "patchesJson6902"?: string;
          /**
           * AnyAllConditions are used to determine if a policy rule should be applied by evaluating a set of conditions. The declaration can contain nested `any` or `all` statements. See: https://kyverno.io/docs/writing-policies/preconditions/
           */
          "preconditions"?: {
            /**
             * AllConditions enable variable-based conditional rule execution. This is useful for finer control of when an rule is applied. A condition can reference object data using JMESPath notation. Here, all of the conditions need to pass
             */
            "all"?: Array<{
              /**
               * Key is the context entry (using JMESPath) for conditional rule evaluation.
               */
              "key"?: any;
              /**
               * Operator is the conditional operation to perform. Valid operators are: Equals, NotEquals, In, AnyIn, AllIn, NotIn, AnyNotIn, AllNotIn, GreaterThanOrEquals, GreaterThan, LessThanOrEquals, LessThan, DurationGreaterThanOrEquals, DurationGreaterThan, DurationLessThanOrEquals, DurationLessThan
               */
              "operator"?: "Equals" | "NotEquals" | "In" | "AnyIn" | "AllIn" | "NotIn" | "AnyNotIn" | "AllNotIn" | "GreaterThanOrEquals" | "GreaterThan" | "LessThanOrEquals" | "LessThan" | "DurationGreaterThanOrEquals" | "DurationGreaterThan" | "DurationLessThanOrEquals" | "DurationLessThan";
              /**
               * Value is the conditional value, or set of values. The values can be fixed set or can be variables declared using JMESPath.
               */
              "value"?: any;
            }>;
            /**
             * AnyConditions enable variable-based conditional rule execution. This is useful for finer control of when an rule is applied. A condition can reference object data using JMESPath notation. Here, at least one of the conditions need to pass
             */
            "any"?: Array<{
              /**
               * Key is the context entry (using JMESPath) for conditional rule evaluation.
               */
              "key"?: any;
              /**
               * Operator is the conditional operation to perform. Valid operators are: Equals, NotEquals, In, AnyIn, AllIn, NotIn, AnyNotIn, AllNotIn, GreaterThanOrEquals, GreaterThan, LessThanOrEquals, LessThan, DurationGreaterThanOrEquals, DurationGreaterThan, DurationLessThanOrEquals, DurationLessThan
               */
              "operator"?: "Equals" | "NotEquals" | "In" | "AnyIn" | "AllIn" | "NotIn" | "AnyNotIn" | "AllNotIn" | "GreaterThanOrEquals" | "GreaterThan" | "LessThanOrEquals" | "LessThan" | "DurationGreaterThanOrEquals" | "DurationGreaterThan" | "DurationLessThanOrEquals" | "DurationLessThan";
              /**
               * Value is the conditional value, or set of values. The values can be fixed set or can be variables declared using JMESPath.
               */
              "value"?: any;
            }>;
          };
        }>;
        /**
         * PatchStrategicMerge is a strategic merge patch used to modify resources. See https://kubernetes.io/docs/tasks/manage-kubernetes-objects/update-api-object-kubectl-patch/ and https://kubectl.docs.kubernetes.io/references/kustomize/patchesstrategicmerge/.
         */
        "patchStrategicMerge"?: any;
        /**
         * PatchesJSON6902 is a list of RFC 6902 JSON Patch declarations used to modify resources. See https://tools.ietf.org/html/rfc6902 and https://kubectl.docs.kubernetes.io/references/kustomize/patchesjson6902/.
         */
        "patchesJson6902"?: string;
        /**
         * Targets defines the target resources to be mutated.
         */
        "targets"?: Array<{
          /**
           * APIVersion specifies resource apiVersion.
           */
          "apiVersion"?: string;
          /**
           * Kind specifies resource kind.
           */
          "kind"?: string;
          /**
           * Name specifies the resource name.
           */
          "name"?: string;
          /**
           * Namespace specifies resource namespace.
           */
          "namespace"?: string;
        }>;
      };
      /**
       * Name is a label to identify the rule, It must be unique within the policy.
       */
      "name"?: string;
      /**
       * Preconditions are used to determine if a policy rule should be applied by evaluating a set of conditions. The declaration can contain nested `any` or `all` statements. A direct list of conditions (without `any` or `all` statements is supported for backwards compatibility but will be deprecated in the next major release. See: https://kyverno.io/docs/writing-policies/preconditions/
       */
      "preconditions"?: any;
      /**
       * Validation is used to validate matching resources.
       */
      "validate"?: {
        /**
         * AnyPattern specifies list of validation patterns. At least one of the patterns must be satisfied for the validation rule to succeed.
         */
        "anyPattern"?: any;
        /**
         * Deny defines conditions used to pass or fail a validation rule.
         */
        "deny"?: {
          /**
           * Multiple conditions can be declared under an `any` or `all` statement. A direct list of conditions (without `any` or `all` statements) is also supported for backwards compatibility but will be deprecated in the next major release. See: https://kyverno.io/docs/writing-policies/validate/#deny-rules
           */
          "conditions"?: any;
        };
        /**
         * ForEach applies validate rules to a list of sub-elements by creating a context for each entry in the list and looping over it to apply the specified logic.
         */
        "foreach"?: Array<{
          /**
           * AnyPattern specifies list of validation patterns. At least one of the patterns must be satisfied for the validation rule to succeed.
           */
          "anyPattern"?: any;
          /**
           * Context defines variables and data sources that can be used during rule execution.
           */
          "context"?: Array<{
            /**
             * APICall defines an HTTP request to the Kubernetes API server. The JSON data retrieved is stored in the context.
             */
            "apiCall"?: {
              /**
               * JMESPath is an optional JSON Match Expression that can be used to transform the JSON response returned from the API server. For example a JMESPath of "items | length(@)" applied to the API server response to the URLPath "/apis/apps/v1/deployments" will return the total count of deployments across all namespaces.
               */
              "jmesPath"?: string;
              /**
               * URLPath is the URL path to be used in the HTTP GET request to the Kubernetes API server (e.g. "/api/v1/namespaces" or  "/apis/apps/v1/deployments"). The format required is the same format used by the `kubectl get --raw` command.
               */
              "urlPath": string;
            };
            /**
             * ConfigMap is the ConfigMap reference.
             */
            "configMap"?: {
              /**
               * Name is the ConfigMap name.
               */
              "name": string;
              /**
               * Namespace is the ConfigMap namespace.
               */
              "namespace"?: string;
            };
            /**
             * ImageRegistry defines requests to an OCI/Docker V2 registry to fetch image details.
             */
            "imageRegistry"?: {
              /**
               * JMESPath is an optional JSON Match Expression that can be used to transform the ImageData struct returned as a result of processing the image reference.
               */
              "jmesPath"?: string;
              /**
               * Reference is image reference to a container image in the registry. Example: ghcr.io/kyverno/kyverno:latest
               */
              "reference": string;
            };
            /**
             * Name is the variable name.
             */
            "name"?: string;
            /**
             * Variable defines an arbitrary JMESPath context variable that can be defined inline.
             */
            "variable"?: {
              /**
               * Default is an optional arbitrary JSON object that the variable may take if the JMESPath expression evaluates to nil
               */
              "default"?: any;
              /**
               * JMESPath is an optional JMESPath Expression that can be used to transform the variable.
               */
              "jmesPath"?: string;
              /**
               * Value is any arbitrary JSON object representable in YAML or JSON form.
               */
              "value"?: any;
            };
          }>;
          /**
           * Deny defines conditions used to pass or fail a validation rule.
           */
          "deny"?: {
            /**
             * Multiple conditions can be declared under an `any` or `all` statement. A direct list of conditions (without `any` or `all` statements) is also supported for backwards compatibility but will be deprecated in the next major release. See: https://kyverno.io/docs/writing-policies/validate/#deny-rules
             */
            "conditions"?: any;
          };
          /**
           * ElementScope specifies whether to use the current list element as the scope for validation. Defaults to "true" if not specified. When set to "false", "request.object" is used as the validation scope within the foreach block to allow referencing other elements in the subtree.
           */
          "elementScope"?: boolean;
          /**
           * List specifies a JMESPath expression that results in one or more elements to which the validation logic is applied.
           */
          "list"?: string;
          /**
           * Pattern specifies an overlay-style pattern used to check resources.
           */
          "pattern"?: any;
          /**
           * AnyAllConditions are used to determine if a policy rule should be applied by evaluating a set of conditions. The declaration can contain nested `any` or `all` statements. See: https://kyverno.io/docs/writing-policies/preconditions/
           */
          "preconditions"?: {
            /**
             * AllConditions enable variable-based conditional rule execution. This is useful for finer control of when an rule is applied. A condition can reference object data using JMESPath notation. Here, all of the conditions need to pass
             */
            "all"?: Array<{
              /**
               * Key is the context entry (using JMESPath) for conditional rule evaluation.
               */
              "key"?: any;
              /**
               * Operator is the conditional operation to perform. Valid operators are: Equals, NotEquals, In, AnyIn, AllIn, NotIn, AnyNotIn, AllNotIn, GreaterThanOrEquals, GreaterThan, LessThanOrEquals, LessThan, DurationGreaterThanOrEquals, DurationGreaterThan, DurationLessThanOrEquals, DurationLessThan
               */
              "operator"?: "Equals" | "NotEquals" | "In" | "AnyIn" | "AllIn" | "NotIn" | "AnyNotIn" | "AllNotIn" | "GreaterThanOrEquals" | "GreaterThan" | "LessThanOrEquals" | "LessThan" | "DurationGreaterThanOrEquals" | "DurationGreaterThan" | "DurationLessThanOrEquals" | "DurationLessThan";
              /**
               * Value is the conditional value, or set of values. The values can be fixed set or can be variables declared using JMESPath.
               */
              "value"?: any;
            }>;
            /**
             * AnyConditions enable variable-based conditional rule execution. This is useful for finer control of when an rule is applied. A condition can reference object data using JMESPath notation. Here, at least one of the conditions need to pass
             */
            "any"?: Array<{
              /**
               * Key is the context entry (using JMESPath) for conditional rule evaluation.
               */
              "key"?: any;
              /**
               * Operator is the conditional operation to perform. Valid operators are: Equals, NotEquals, In, AnyIn, AllIn, NotIn, AnyNotIn, AllNotIn, GreaterThanOrEquals, GreaterThan, LessThanOrEquals, LessThan, DurationGreaterThanOrEquals, DurationGreaterThan, DurationLessThanOrEquals, DurationLessThan
               */
              "operator"?: "Equals" | "NotEquals" | "In" | "AnyIn" | "AllIn" | "NotIn" | "AnyNotIn" | "AllNotIn" | "GreaterThanOrEquals" | "GreaterThan" | "LessThanOrEquals" | "LessThan" | "DurationGreaterThanOrEquals" | "DurationGreaterThan" | "DurationLessThanOrEquals" | "DurationLessThan";
              /**
               * Value is the conditional value, or set of values. The values can be fixed set or can be variables declared using JMESPath.
               */
              "value"?: any;
            }>;
          };
        }>;
        /**
         * Message specifies a custom message to be displayed on failure.
         */
        "message"?: string;
        /**
         * Pattern specifies an overlay-style pattern used to check resources.
         */
        "pattern"?: any;
      };
      /**
       * VerifyImages is used to verify image signatures and mutate them to add a digest
       */
      "verifyImages"?: Array<{
        /**
         * AdditionalExtensions are certificate-extensions used for keyless signing. Deprecated.
         */
        "additionalExtensions"?: {
          [key: string]: string;
        };
        /**
         * Annotations are used for image verification. Every specified key-value pair must exist and match in the verified payload. The payload may contain other key-value pairs. Deprecated. Use annotations per Attestor instead.
         */
        "annotations"?: {
          [key: string]: string;
        };
        /**
         * Attestations are optional checks for signed in-toto Statements used to verify the image. See https://github.com/in-toto/attestation. Kyverno fetches signed attestations from the OCI registry and decodes them into a list of Statement declarations.
         */
        "attestations"?: Array<{
          /**
           * Conditions are used to verify attributes within a Predicate. If no Conditions are specified the attestation check is satisfied as long there are predicates that match the predicate type.
           */
          "conditions"?: Array<{
            /**
             * AllConditions enable variable-based conditional rule execution. This is useful for finer control of when an rule is applied. A condition can reference object data using JMESPath notation. Here, all of the conditions need to pass
             */
            "all"?: Array<{
              /**
               * Key is the context entry (using JMESPath) for conditional rule evaluation.
               */
              "key"?: any;
              /**
               * Operator is the conditional operation to perform. Valid operators are: Equals, NotEquals, In, AnyIn, AllIn, NotIn, AnyNotIn, AllNotIn, GreaterThanOrEquals, GreaterThan, LessThanOrEquals, LessThan, DurationGreaterThanOrEquals, DurationGreaterThan, DurationLessThanOrEquals, DurationLessThan
               */
              "operator"?: "Equals" | "NotEquals" | "In" | "AnyIn" | "AllIn" | "NotIn" | "AnyNotIn" | "AllNotIn" | "GreaterThanOrEquals" | "GreaterThan" | "LessThanOrEquals" | "LessThan" | "DurationGreaterThanOrEquals" | "DurationGreaterThan" | "DurationLessThanOrEquals" | "DurationLessThan";
              /**
               * Value is the conditional value, or set of values. The values can be fixed set or can be variables declared using JMESPath.
               */
              "value"?: any;
            }>;
            /**
             * AnyConditions enable variable-based conditional rule execution. This is useful for finer control of when an rule is applied. A condition can reference object data using JMESPath notation. Here, at least one of the conditions need to pass
             */
            "any"?: Array<{
              /**
               * Key is the context entry (using JMESPath) for conditional rule evaluation.
               */
              "key"?: any;
              /**
               * Operator is the conditional operation to perform. Valid operators are: Equals, NotEquals, In, AnyIn, AllIn, NotIn, AnyNotIn, AllNotIn, GreaterThanOrEquals, GreaterThan, LessThanOrEquals, LessThan, DurationGreaterThanOrEquals, DurationGreaterThan, DurationLessThanOrEquals, DurationLessThan
               */
              "operator"?: "Equals" | "NotEquals" | "In" | "AnyIn" | "AllIn" | "NotIn" | "AnyNotIn" | "AllNotIn" | "GreaterThanOrEquals" | "GreaterThan" | "LessThanOrEquals" | "LessThan" | "DurationGreaterThanOrEquals" | "DurationGreaterThan" | "DurationLessThanOrEquals" | "DurationLessThan";
              /**
               * Value is the conditional value, or set of values. The values can be fixed set or can be variables declared using JMESPath.
               */
              "value"?: any;
            }>;
          }>;
          /**
           * PredicateType defines the type of Predicate contained within the Statement.
           */
          "predicateType"?: string;
        }>;
        /**
         * Attestors specified the required attestors (i.e. authorities)
         */
        "attestors"?: Array<{
          /**
           * Count specifies the required number of entries that must match. If the count is null, all entries must match (a logical AND). If the count is 1, at least one entry must match (a logical OR). If the count contains a value N, then N must be less than or equal to the size of entries, and at least N entries must match.
           */
          "count"?: number;
          /**
           * Entries contains the available attestors. An attestor can be a static key, attributes for keyless verification, or a nested attestor declaration.
           */
          "entries"?: Array<{
            /**
             * Annotations are used for image verification. Every specified key-value pair must exist and match in the verified payload. The payload may contain other key-value pairs.
             */
            "annotations"?: {
              [key: string]: string;
            };
            /**
             * Attestor is a nested AttestorSet used to specify a more complex set of match authorities
             */
            "attestor"?: any;
            /**
             * Certificates specifies one or more certificates
             */
            "certificates"?: {
              /**
               * Certificate is an optional PEM encoded public certificate.
               */
              "cert"?: string;
              /**
               * CertificateChain is an optional PEM encoded set of certificates used to verify
               */
              "certChain"?: string;
              /**
               * Rekor provides configuration for the Rekor transparency log service. If the value is nil, Rekor is not checked. If an empty object is provided the public instance of Rekor (https://rekor.sigstore.dev) is used.
               */
              "rekor"?: {
                /**
                 * URL is the address of the transparency log. Defaults to the public log https://rekor.sigstore.dev.
                 */
                "url": string;
              };
            };
            /**
             * Keyless is a set of attribute used to verify a Sigstore keyless attestor. See https://github.com/sigstore/cosign/blob/main/KEYLESS.md.
             */
            "keyless"?: {
              /**
               * AdditionalExtensions are certificate-extensions used for keyless signing.
               */
              "additionalExtensions"?: {
                [key: string]: string;
              };
              /**
               * Issuer is the certificate issuer used for keyless signing.
               */
              "issuer"?: string;
              /**
               * Rekor provides configuration for the Rekor transparency log service. If the value is nil, Rekor is not checked and a root certificate chain is expected instead. If an empty object is provided the public instance of Rekor (https://rekor.sigstore.dev) is used.
               */
              "rekor"?: {
                /**
                 * URL is the address of the transparency log. Defaults to the public log https://rekor.sigstore.dev.
                 */
                "url": string;
              };
              /**
               * Roots is an optional set of PEM encoded trusted root certificates. If not provided, the system roots are used.
               */
              "roots"?: string;
              /**
               * Subject is the verified identity used for keyless signing, for example the email address
               */
              "subject"?: string;
            };
            /**
             * Keys specifies one or more public keys
             */
            "keys"?: {
              /**
               * Keys is a set of X.509 public keys used to verify image signatures. The keys can be directly specified or can be a variable reference to a key specified in a ConfigMap (see https://kyverno.io/docs/writing-policies/variables/). When multiple keys are specified each key is processed as a separate staticKey entry (.attestors[\*].entries.keys) within the set of attestors and the count is applied across the keys.
               */
              "publicKeys"?: string;
              /**
               * Rekor provides configuration for the Rekor transparency log service. If the value is nil, Rekor is not checked. If an empty object is provided the public instance of Rekor (https://rekor.sigstore.dev) is used.
               */
              "rekor"?: {
                /**
                 * URL is the address of the transparency log. Defaults to the public log https://rekor.sigstore.dev.
                 */
                "url": string;
              };
            };
            /**
             * Repository is an optional alternate OCI repository to use for signatures and attestations that match this rule. If specified Repository will override other OCI image repository locations for this Attestor.
             */
            "repository"?: string;
          }>;
        }>;
        /**
         * Image is the image name consisting of the registry address, repository, image, and tag. Wildcards ('\*' and '?') are allowed. See: https://kubernetes.io/docs/concepts/containers/images. Deprecated. Use ImageReferences instead.
         */
        "image"?: string;
        /**
         * ImageReferences is a list of matching image reference patterns. At least one pattern in the list must match the image for the rule to apply. Each image reference consists of a registry address (defaults to docker.io), repository, image, and tag (defaults to latest). Wildcards ('\*' and '?') are allowed. See: https://kubernetes.io/docs/concepts/containers/images.
         */
        "imageReferences"?: Array<string>;
        /**
         * Issuer is the certificate issuer used for keyless signing. Deprecated. Use KeylessAttestor instead.
         */
        "issuer"?: string;
        /**
         * Key is the PEM encoded public key that the image or attestation is signed with. Deprecated. Use StaticKeyAttestor instead.
         */
        "key"?: string;
        /**
         * MutateDigest enables replacement of image tags with digests. Defaults to true.
         */
        "mutateDigest"?: boolean;
        /**
         * Repository is an optional alternate OCI repository to use for image signatures and attestations that match this rule. If specified Repository will override the default OCI image repository configured for the installation. The repository can also be overridden per Attestor or Attestation.
         */
        "repository"?: string;
        /**
         * Required validates that images are verified i.e. have matched passed a signature or attestation check.
         */
        "required"?: boolean;
        /**
         * Roots is the PEM encoded Root certificate chain used for keyless signing Deprecated. Use KeylessAttestor instead.
         */
        "roots"?: string;
        /**
         * Subject is the identity used for keyless signing, for example an email address Deprecated. Use KeylessAttestor instead.
         */
        "subject"?: string;
        /**
         * VerifyDigest validates that images have a digest.
         */
        "verifyDigest"?: boolean;
      }>;
    }>;
    /**
     * SchemaValidation skips policy validation checks. Optional. The default value is set to "true", it must be set to "false" to disable the validation checks.
     */
    "schemaValidation"?: boolean;
    /**
     * ValidationFailureAction controls if a validation policy rule failure should disallow the admission review request (enforce), or allow (audit) the admission review request and report an error in a policy report. Optional. The default value is "audit".
     */
    "validationFailureAction"?: "audit" | "enforce";
    /**
     * ValidationFailureActionOverrides is a Cluster Policy attribute that specifies ValidationFailureAction namespace-wise. It overrides ValidationFailureAction for the specified namespaces.
     */
    "validationFailureActionOverrides"?: Array<{
      /**
       * ValidationFailureAction defines the policy validation failure action
       */
      "action"?: "audit" | "enforce";
      "namespaces"?: Array<string>;
    }>;
    /**
     * WebhookTimeoutSeconds specifies the maximum time in seconds allowed to apply this policy. After the configured time expires, the admission request may fail, or may simply ignore the policy results, based on the failure policy. The default timeout is 10s, the value must be between 1 and 30 seconds.
     */
    "webhookTimeoutSeconds"?: number;
  };
  /**
   * Status contains policy runtime information. Deprecated. Policy metrics are available via the metrics endpoint
   */
  "status"?: {
    /**
     * Conditions is a list of conditions that apply to the policy
     */
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
     * Ready indicates if the policy is ready to serve the admission request. Deprecated in favor of Conditions
     */
    "ready": boolean;
  };
}

/**
 * Policy declares validation, mutation, and generation behaviors for matching resources. See: https://kyverno.io/docs/writing-policies/ for more information.
 */
export class Policy extends Model<IPolicy> implements IPolicy {
  "apiVersion": IPolicy["apiVersion"];
  "kind": IPolicy["kind"];
  "metadata"?: IPolicy["metadata"];
  "spec": IPolicy["spec"];
  "status"?: IPolicy["status"];

static apiVersion: IPolicy["apiVersion"] = "kyverno.io/v1";
static kind: IPolicy["kind"] = "Policy";
static is = createTypeMetaGuard<IPolicy>(Policy);

constructor(data?: ModelData<IPolicy>) {
  super({
    apiVersion: Policy.apiVersion,
    kind: Policy.kind,
    ...data
  } as IPolicy);
}
}


setValidateFunc(Policy, validate as ValidateFunc<IPolicy>);
