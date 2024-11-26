import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/KyvernoIoV1beta1UpdateRequest.js";

/**
 * UpdateRequestStatus is a request to process mutate and generate rules in background.
 */
export interface IUpdateRequest {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "kyverno.io/v1beta1";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "UpdateRequest";
  "metadata"?: IObjectMeta;
  /**
   * Spec is the information to identify the update request.
   */
  "spec"?: {
    /**
     * Context ...
     */
    "context": {
      /**
       * AdmissionRequestInfoObject stores the admission request and operation details
       */
      "admissionRequestInfo"?: {
        /**
         * AdmissionRequest describes the admission.Attributes for the admission request.
         */
        "admissionRequest"?: {
          /**
           * DryRun indicates that modifications will definitely not be persisted for this request. Defaults to false.
           */
          "dryRun"?: boolean;
          /**
           * Kind is the fully-qualified type of object being submitted (for example, v1.Pod or autoscaling.v1.Scale)
           */
          "kind": {
            "group": string;
            "kind": string;
            "version": string;
          };
          /**
           * Name is the name of the object as presented in the request.  On a CREATE operation, the client may omit name and rely on the server to generate the name.  If that is the case, this field will contain an empty string.
           */
          "name"?: string;
          /**
           * Namespace is the namespace associated with the request (if any).
           */
          "namespace"?: string;
          /**
           * Object is the object from the incoming request.
           */
          "object"?: {
          };
          /**
           * OldObject is the existing object. Only populated for DELETE and UPDATE requests.
           */
          "oldObject"?: {
          };
          /**
           * Operation is the operation being performed. This may be different than the operation requested. e.g. a patch can result in either a CREATE or UPDATE Operation.
           */
          "operation": string;
          /**
           * Options is the operation option structure of the operation being performed. e.g. `meta.k8s.io/v1.DeleteOptions` or `meta.k8s.io/v1.CreateOptions`. This may be different than the options the caller provided. e.g. for a patch request the performed Operation might be a CREATE, in which case the Options will a `meta.k8s.io/v1.CreateOptions` even though the caller provided `meta.k8s.io/v1.PatchOptions`.
           */
          "options"?: {
          };
          /**
           * RequestKind is the fully-qualified type of the original API request (for example, v1.Pod or autoscaling.v1.Scale). If this is specified and differs from the value in "kind", an equivalent match and conversion was performed. 
           *  For example, if deployments can be modified via apps/v1 and apps/v1beta1, and a webhook registered a rule of `apiGroups:["apps"], apiVersions:["v1"], resources: ["deployments"]` and `matchPolicy: Equivalent`, an API request to apps/v1beta1 deployments would be converted and sent to the webhook with `kind: {group:"apps", version:"v1", kind:"Deployment"}` (matching the rule the webhook registered for), and `requestKind: {group:"apps", version:"v1beta1", kind:"Deployment"}` (indicating the kind of the original API request). 
           *  See documentation for the "matchPolicy" field in the webhook configuration type for more details.
           */
          "requestKind"?: {
            "group": string;
            "kind": string;
            "version": string;
          };
          /**
           * RequestResource is the fully-qualified resource of the original API request (for example, v1.pods). If this is specified and differs from the value in "resource", an equivalent match and conversion was performed. 
           *  For example, if deployments can be modified via apps/v1 and apps/v1beta1, and a webhook registered a rule of `apiGroups:["apps"], apiVersions:["v1"], resources: ["deployments"]` and `matchPolicy: Equivalent`, an API request to apps/v1beta1 deployments would be converted and sent to the webhook with `resource: {group:"apps", version:"v1", resource:"deployments"}` (matching the resource the webhook registered for), and `requestResource: {group:"apps", version:"v1beta1", resource:"deployments"}` (indicating the resource of the original API request). 
           *  See documentation for the "matchPolicy" field in the webhook configuration type.
           */
          "requestResource"?: {
            "group": string;
            "resource": string;
            "version": string;
          };
          /**
           * RequestSubResource is the name of the subresource of the original API request, if any (for example, "status" or "scale") If this is specified and differs from the value in "subResource", an equivalent match and conversion was performed. See documentation for the "matchPolicy" field in the webhook configuration type.
           */
          "requestSubResource"?: string;
          /**
           * Resource is the fully-qualified resource being requested (for example, v1.pods)
           */
          "resource": {
            "group": string;
            "resource": string;
            "version": string;
          };
          /**
           * SubResource is the subresource being requested, if any (for example, "status" or "scale")
           */
          "subResource"?: string;
          /**
           * UID is an identifier for the individual request/response. It allows us to distinguish instances of requests which are otherwise identical (parallel requests, requests when earlier requests did not modify etc) The UID is meant to track the round trip (request/response) between the KAS and the WebHook, not the user request. It is suitable for correlating log entries between the webhook and apiserver, for either auditing or debugging.
           */
          "uid": string;
          /**
           * UserInfo is information about the requesting user
           */
          "userInfo": {
            /**
             * Any additional information provided by the authenticator.
             */
            "extra"?: {
              [key: string]: Array<string>;
            };
            /**
             * The names of groups this user is a part of.
             */
            "groups"?: Array<string>;
            /**
             * A unique value that identifies this user across time. If this user is deleted and another user by the same name is added, they will have different UIDs.
             */
            "uid"?: string;
            /**
             * The name that uniquely identifies this user among all active users.
             */
            "username"?: string;
          };
        };
        /**
         * Operation is the type of resource operation being checked for admission control
         */
        "operation"?: string;
      };
      /**
       * RequestInfo contains permission info carried in an admission request.
       */
      "userInfo"?: {
        /**
         * ClusterRoles is a list of possible clusterRoles send the request.
         */
        "clusterRoles"?: Array<string>;
        /**
         * Roles is a list of possible role send the request.
         */
        "roles"?: Array<string>;
        /**
         * UserInfo is the userInfo carried in the admission request.
         */
        "userInfo"?: {
          /**
           * Any additional information provided by the authenticator.
           */
          "extra"?: {
            [key: string]: Array<string>;
          };
          /**
           * The names of groups this user is a part of.
           */
          "groups"?: Array<string>;
          /**
           * A unique value that identifies this user across time. If this user is deleted and another user by the same name is added, they will have different UIDs.
           */
          "uid"?: string;
          /**
           * The name that uniquely identifies this user among all active users.
           */
          "username"?: string;
        };
      };
    };
    /**
     * Specifies the name of the policy.
     */
    "policy": string;
    /**
     * Type represents request type for background processing
     */
    "requestType"?: "mutate" | "generate";
    /**
     * ResourceSpec is the information to identify the update request.
     */
    "resource": {
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
    };
  };
  /**
   * Status contains statistics related to update request.
   */
  "status"?: {
    /**
     * This will track the resources that are updated by the generate Policy. Will be used during clean up resources.
     */
    "generatedResources"?: Array<{
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
    /**
     * Handler represents the instance ID that handles the UR
     */
    "handler"?: string;
    /**
     * Specifies request status message.
     */
    "message"?: string;
    /**
     * State represents state of the update request.
     */
    "state": string;
  };
}

/**
 * UpdateRequestStatus is a request to process mutate and generate rules in background.
 */
export class UpdateRequest extends Model<IUpdateRequest> implements IUpdateRequest {
  "apiVersion": IUpdateRequest["apiVersion"];
  "kind": IUpdateRequest["kind"];
  "metadata"?: IUpdateRequest["metadata"];
  "spec"?: IUpdateRequest["spec"];
  "status"?: IUpdateRequest["status"];

static apiVersion: IUpdateRequest["apiVersion"] = "kyverno.io/v1beta1";
static kind: IUpdateRequest["kind"] = "UpdateRequest";
static is = createTypeMetaGuard<IUpdateRequest>(UpdateRequest);

constructor(data?: ModelData<IUpdateRequest>) {
  super({
    apiVersion: UpdateRequest.apiVersion,
    kind: UpdateRequest.kind,
    ...data
  } as IUpdateRequest);
}
}


setValidateFunc(UpdateRequest, validate as ValidateFunc<IUpdateRequest>);
