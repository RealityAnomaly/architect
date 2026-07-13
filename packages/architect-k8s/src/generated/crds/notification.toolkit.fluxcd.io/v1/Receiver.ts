import { IObjectMeta } from "@glassway/kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc } from "@glassway/kubernetes-types/model";
import { TypeMetaGuard, createTypeMetaGuard } from "@glassway/kubernetes-types/meta";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/NotificationToolkitFluxcdIoV1Receiver.js";

/**
 * Receiver is the Schema for the receivers API.
 */
export interface IReceiver {
  /**
 * APIVersion defines the versioned schema of this representation of an object.
 * Servers should convert recognized schemas to the latest internal value, and
 * may reject unrecognized values.
 * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
 */
"apiVersion": "notification.toolkit.fluxcd.io/v1";
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
 * ReceiverSpec defines the desired state of the Receiver.
 */
"spec"?: {
  /**
 * Events specifies the list of event types to handle,
 * e.g. 'push' for GitHub or 'Push Hook' for GitLab.
 */
"events"?: Array<string>;
/**
 * Interval at which to reconcile the Receiver with its Secret references.
 */
"interval"?: string;
/**
 * OIDCProviders specifies the OIDC providers used to authenticate incoming
 * requests when Type is 'generic-oidc'. The provider whose IssuerURL matches
 * the token's 'iss' claim is used to verify the token signature, expiration
 * and audience, and to evaluate the configured CEL validations against the
 * token claims.
 */
"oidcProviders"?: Array<{
  /**
 * Audience is the expected audience ('aud' claim) for tokens issued by
 * this provider. Defaults to 'notification-controller'.
 */
"audience"?: string;
/**
 * IssuerURL is the OIDC issuer URL used for provider discovery. It must
 * match the 'iss' claim of tokens issued by this provider.
 */
"issuerURL": string;
/**
 * Validations is the list of CEL boolean expressions evaluated against the
 * token claims and the variables. The request is accepted only if all of
 * them evaluate to true; the message of each failing expression is returned
 * to the caller.
 * 
 * At least one validation is required. A valid signature alone does not
 * authorize a request: public issuers issue tokens to any caller on the
 * platform, so the validations must constrain the caller's identity claims
 * (e.g. 'repository_owner' for GitHub Actions).
 */
"validations": Array<{
  /**
 * Expression is the CEL boolean expression to evaluate.
 */
"expression": string;
/**
 * Message is returned to the caller when the expression evaluates to false.
 */
"message": string;
}>;
/**
 * Variables is an optional list of named CEL expressions, evaluated in order
 * and exposed as 'vars.<name>'. Each expression can read the token claims
 * via 'claims' and any variable defined before it. Use it to share
 * sub-expressions across validations.
 */
"variables"?: Array<{
  /**
 * Expression is the CEL expression that defines the variable value.
 */
"expression": string;
/**
 * Name is the variable name; it must be a valid CEL identifier.
 */
"name": string;
}>;
}>;
/**
 * ResourceFilter is a CEL expression expected to return a boolean that is
 * evaluated for each resource referenced in the Resources field when a
 * webhook is received. If the expression returns false then the controller
 * will not request a reconciliation for the resource.
 * The expression can read the resource metadata via 'res' and the webhook
 * request body via 'req'. For generic-oidc receivers, the verified OIDC
 * token claims are also available via 'claims'.
 * When the expression is specified the controller will parse it and mark
 * the object as terminally failed if the expression is invalid or does not
 * return a boolean.
 */
"resourceFilter"?: string;
/**
 * A list of resources to be notified about changes.
 */
"resources": Array<{
  /**
 * API version of the referent
 */
"apiVersion"?: string;
/**
 * Filter is a CEL expression expected to return a boolean that is evaluated
 * for each resource matched by this reference when a webhook is received,
 * in addition to the top-level resourceFilter. A reconciliation is requested
 * only when both expressions (when set) return true.
 * The expression can read the resource metadata via 'res' and the webhook
 * request body via 'req'. For generic-oidc receivers, the verified OIDC
 * token claims are also available via 'claims'.
 * When the expression is specified the controller will parse it and mark
 * the object as terminally failed if the expression is invalid or does not
 * return a boolean.
 */
"filter"?: string;
/**
 * Kind of the referent
 */
"kind": "Bucket" | "GitRepository" | "Kustomization" | "HelmRelease" | "HelmChart" | "HelmRepository" | "ImageRepository" | "ImagePolicy" | "ImageUpdateAutomation" | "OCIRepository" | "ArtifactGenerator" | "ExternalArtifact";
/**
 * MatchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
 * map is equivalent to an element of matchExpressions, whose key field is "key", the
 * operator is "In", and the values array contains only "value". The requirements are ANDed.
 * MatchLabels requires the name to be set to `\*`.
 */
"matchLabels"?: {
  [key: string]: string;
};
/**
 * Name of the referent
 * If multiple resources are targeted `\*` may be set.
 */
"name": string;
/**
 * Namespace of the referent
 */
"namespace"?: string;
}>;
/**
 * SecretRef specifies the Secret containing the token used
 * to validate the payload authenticity. The Secret must contain a 'token'
 * key. For GCR receivers, the Secret must also contain an 'email' key
 * with the IAM service account email configured on the Pub/Sub push
 * subscription, and an 'audience' key with the expected OIDC token audience.
 * 
 * Required for all receiver types except 'generic-oidc', which authenticates
 * requests using the OIDC token instead and must not set this field.
 */
"secretRef"?: {
  /**
 * Name of the referent.
 */
"name": string;
};
/**
 * Suspend tells the controller to suspend subsequent
 * events handling for this receiver.
 */
"suspend"?: boolean;
/**
 * Type of webhook sender, used to determine
 * the validation procedure and payload deserialization.
 */
"type": "generic" | "generic-hmac" | "generic-oidc" | "github" | "gitlab" | "bitbucket" | "harbor" | "dockerhub" | "quay" | "gcr" | "nexus" | "acr" | "cdevents";
};
/**
 * ReceiverStatus defines the observed state of the Receiver.
 */
"status"?: {
  /**
 * Conditions holds the conditions for the Receiver.
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
 * ObservedGeneration is the last observed generation of the Receiver object.
 */
"observedGeneration"?: number;
/**
 * WebhookPath is the generated incoming webhook address in the format
 * of '/hook/sha256sum(token+name+namespace)'.
 */
"webhookPath"?: string;
};
}

/**
 * Receiver is the Schema for the receivers API.
 */
export class Receiver extends Model<IReceiver> implements IReceiver {
  "apiVersion": IReceiver["apiVersion"];
"kind": IReceiver["kind"];
"metadata"?: IReceiver["metadata"];
"spec"?: IReceiver["spec"];
"status"?: IReceiver["status"];

static apiVersion: IReceiver["apiVersion"] = "notification.toolkit.fluxcd.io/v1";
static kind: IReceiver["kind"] = "Receiver";
static is: TypeMetaGuard<IReceiver> = createTypeMetaGuard<IReceiver>(Receiver);

constructor(data?: ModelData<IReceiver>) {
  super();

  this.setDefinedProps({
    apiVersion: Receiver.apiVersion,
    kind: Receiver.kind,
    ...data
  } as IReceiver);
}
}


setValidateFunc(Receiver, validate as ValidateFunc<IReceiver>);
