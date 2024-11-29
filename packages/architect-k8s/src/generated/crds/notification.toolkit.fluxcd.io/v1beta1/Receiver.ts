import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/NotificationToolkitFluxcdIoV1beta1Receiver.js";

/**
 * Receiver is the Schema for the receivers API
 */
export interface IReceiver {
  /**
   * APIVersion defines the versioned schema of this representation of an object.
   * Servers should convert recognized schemas to the latest internal value, and
   * may reject unrecognized values.
   * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "notification.toolkit.fluxcd.io/v1beta1";
  /**
   * Kind is a string value representing the REST resource this object represents.
   * Servers may infer this from the endpoint the client submits requests to.
   * Cannot be updated.
   * In CamelCase.
   * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "Receiver";
  "metadata"?: IObjectMeta;
  /**
   * ReceiverSpec defines the desired state of Receiver
   */
  "spec"?: {
    /**
     * A list of events to handle,
     * e.g. 'push' for GitHub or 'Push Hook' for GitLab.
     */
    "events"?: Array<string>;
    /**
     * A list of resources to be notified about changes.
     */
    "resources": Array<{
      /**
       * API version of the referent
       */
      "apiVersion"?: string;
      /**
       * Kind of the referent
       */
      "kind": "Bucket" | "GitRepository" | "Kustomization" | "HelmRelease" | "HelmChart" | "HelmRepository" | "ImageRepository" | "ImagePolicy" | "ImageUpdateAutomation" | "OCIRepository";
      /**
       * MatchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
       * map is equivalent to an element of matchExpressions, whose key field is "key", the
       * operator is "In", and the values array contains only "value". The requirements are ANDed.
       */
      "matchLabels"?: {
        [key: string]: string;
      };
      /**
       * Name of the referent
       */
      "name": string;
      /**
       * Namespace of the referent
       */
      "namespace"?: string;
    }>;
    /**
     * Secret reference containing the token used
     * to validate the payload authenticity
     */
    "secretRef": {
      /**
       * Name of the referent.
       */
      "name": string;
    };
    /**
     * This flag tells the controller to suspend subsequent events handling.
     * Defaults to false.
     */
    "suspend"?: boolean;
    /**
     * Type of webhook sender, used to determine
     * the validation procedure and payload deserialization.
     */
    "type": "generic" | "generic-hmac" | "github" | "gitlab" | "bitbucket" | "harbor" | "dockerhub" | "quay" | "gcr" | "nexus" | "acr";
  };
  /**
   * ReceiverStatus defines the observed state of Receiver
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
     * ObservedGeneration is the last observed generation.
     */
    "observedGeneration"?: number;
    /**
     * Generated webhook URL in the format
     * of '/hook/sha256sum(token+name+namespace)'.
     */
    "url"?: string;
  };
}

/**
 * Receiver is the Schema for the receivers API
 */
export class Receiver extends Model<IReceiver> implements IReceiver {
  "apiVersion": IReceiver["apiVersion"];
  "kind": IReceiver["kind"];
  "metadata"?: IReceiver["metadata"];
  "spec"?: IReceiver["spec"];
  "status"?: IReceiver["status"];

static apiVersion: IReceiver["apiVersion"] = "notification.toolkit.fluxcd.io/v1beta1";
static kind: IReceiver["kind"] = "Receiver";
static is = createTypeMetaGuard<IReceiver>(Receiver);

constructor(data?: ModelData<IReceiver>) {
  super({
    apiVersion: Receiver.apiVersion,
    kind: Receiver.kind,
    ...data
  } as IReceiver);
}
}


setValidateFunc(Receiver, validate as ValidateFunc<IReceiver>);