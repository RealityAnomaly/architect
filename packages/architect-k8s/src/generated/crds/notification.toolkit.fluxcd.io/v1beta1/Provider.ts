import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/NotificationToolkitFluxcdIoV1beta1Provider.js";

/**
 * Provider is the Schema for the providers API
 */
export interface IProvider {
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
  "kind": "Provider";
  "metadata"?: IObjectMeta;
  /**
   * ProviderSpec defines the desired state of Provider
   */
  "spec"?: {
    /**
     * HTTP/S webhook address of this provider
     */
    "address"?: string;
    /**
     * CertSecretRef can be given the name of a secret containing
     * a PEM-encoded CA certificate (`caFile`)
     */
    "certSecretRef"?: {
      /**
       * Name of the referent.
       */
      "name": string;
    };
    /**
     * Alert channel for this provider
     */
    "channel"?: string;
    /**
     * HTTP/S address of the proxy
     */
    "proxy"?: string;
    /**
     * Secret reference containing the provider webhook URL
     * using "address" as data key
     */
    "secretRef"?: {
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
     * Timeout for sending alerts to the provider.
     */
    "timeout"?: string;
    /**
     * Type of provider
     */
    "type": "slack" | "discord" | "msteams" | "rocket" | "generic" | "generic-hmac" | "github" | "gitlab" | "bitbucket" | "azuredevops" | "googlechat" | "webex" | "sentry" | "azureeventhub" | "telegram" | "lark" | "matrix" | "opsgenie" | "alertmanager" | "grafana" | "githubdispatch";
    /**
     * Bot username for this provider
     */
    "username"?: string;
  };
  /**
   * ProviderStatus defines the observed state of Provider
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
     * ObservedGeneration is the last reconciled generation.
     */
    "observedGeneration"?: number;
  };
}

/**
 * Provider is the Schema for the providers API
 */
export class Provider extends Model<IProvider> implements IProvider {
  "apiVersion": IProvider["apiVersion"];
  "kind": IProvider["kind"];
  "metadata"?: IProvider["metadata"];
  "spec"?: IProvider["spec"];
  "status"?: IProvider["status"];

static apiVersion: IProvider["apiVersion"] = "notification.toolkit.fluxcd.io/v1beta1";
static kind: IProvider["kind"] = "Provider";
static is = createTypeMetaGuard<IProvider>(Provider);

constructor(data?: ModelData<IProvider>) {
  super({
    apiVersion: Provider.apiVersion,
    kind: Provider.kind,
    ...data
  } as IProvider);
}
}


setValidateFunc(Provider, validate as ValidateFunc<IProvider>);
