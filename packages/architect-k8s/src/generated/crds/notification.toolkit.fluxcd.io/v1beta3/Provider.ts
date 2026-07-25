import { IObjectMeta } from "@glassway/kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc } from "@glassway/kubernetes-types/model";
import { TypeMetaGuard, createTypeMetaGuard } from "@glassway/kubernetes-types/meta";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/NotificationToolkitFluxcdIoV1beta3Provider.js";

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
"apiVersion": "notification.toolkit.fluxcd.io/v1beta3";
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
 * ProviderSpec defines the desired state of the Provider.
 */
"spec"?: {
  /**
 * Address specifies the endpoint, in a generic sense, to where alerts are sent.
 * What kind of endpoint depends on the specific Provider type being used.
 * For the generic Provider, for example, this is an HTTP/S address.
 * For other Provider types this could be a project ID or a namespace.
 */
"address"?: string;
/**
 * CertSecretRef specifies the Secret containing TLS certificates
 * for secure communication.
 * 
 * Supported configurations:
 * - CA-only: Server authentication (provide ca.crt only)
 * - mTLS: Mutual authentication (provide ca.crt + tls.crt + tls.key)
 * - Client-only: Client authentication with system CA (provide tls.crt + tls.key only)
 * 
 * Legacy keys "caFile", "certFile", "keyFile" are supported but deprecated. Use "ca.crt", "tls.crt", "tls.key" instead.
 */
"certSecretRef"?: {
  /**
 * Name of the referent.
 */
"name": string;
};
/**
 * Channel specifies the destination channel where events should be posted.
 */
"channel"?: string;
/**
 * CommitStatusExpr is a CEL expression that evaluates to a string value
 * that can be used to generate a custom commit status message for use
 * with eligible Provider types (github, gitlab, gitea, bitbucketserver,
 * bitbucket, azuredevops). Supported variables are: event, provider,
 * and alert.
 */
"commitStatusExpr"?: string;
/**
 * Interval at which to reconcile the Provider with its Secret references.
 * Deprecated and not used in v1beta3.
 */
"interval"?: string;
/**
 * Proxy the HTTP/S address of the proxy server.
 * Deprecated: Use ProxySecretRef instead. Will be removed in v1.
 */
"proxy"?: string;
/**
 * ProxySecretRef specifies the Secret containing the proxy configuration
 * for this Provider. The Secret should contain an 'address' key with the
 * HTTP/S address of the proxy server. Optional 'username' and 'password'
 * keys can be provided for proxy authentication.
 */
"proxySecretRef"?: {
  /**
 * Name of the referent.
 */
"name": string;
};
/**
 * SecretRef specifies the Secret containing the authentication
 * credentials for this Provider.
 */
"secretRef"?: {
  /**
 * Name of the referent.
 */
"name": string;
};
/**
 * ServiceAccountName is the name of the Kubernetes ServiceAccount used to
 * authenticate with cloud provider services through workload identity.
 * This enables multi-tenant authentication without storing static credentials.
 * 
 * Supported provider types: azureeventhub, azuredevops, googlepubsub
 * 
 * When specified, the controller will:
 * 1. Create an OIDC token for the specified ServiceAccount
 * 2. Exchange it for cloud provider credentials via STS
 * 3. Use the obtained credentials for API authentication
 * 
 * When unspecified, controller-level authentication is used (single-tenant).
 * 
 * An error is thrown if static credentials are also defined in SecretRef.
 * This field requires the ObjectLevelWorkloadIdentity feature gate to be enabled.
 */
"serviceAccountName"?: string;
/**
 * Suspend tells the controller to suspend subsequent
 * events handling for this Provider.
 */
"suspend"?: boolean;
/**
 * Timeout for sending alerts to the Provider.
 */
"timeout"?: string;
/**
 * Type specifies which Provider implementation to use.
 */
"type": "slack" | "discord" | "msteams" | "rocket" | "generic" | "generic-hmac" | "github" | "gitlab" | "gitea" | "giteapullrequestcomment" | "bitbucketserver" | "bitbucket" | "azuredevops" | "googlechat" | "googlepubsub" | "webex" | "sentry" | "azureeventhub" | "telegram" | "lark" | "matrix" | "opsgenie" | "alertmanager" | "grafana" | "githubdispatch" | "githubpullrequestcomment" | "gitlabmergerequestcomment" | "pagerduty" | "datadog" | "nats" | "zulip" | "otel";
/**
 * Username specifies the name under which events are posted.
 */
"username"?: string;
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

static apiVersion: IProvider["apiVersion"] = "notification.toolkit.fluxcd.io/v1beta3";
static kind: IProvider["kind"] = "Provider";
static is: TypeMetaGuard<IProvider> = createTypeMetaGuard<IProvider>(Provider);
static scope: string = "Namespaced";

constructor(data?: ModelData<IProvider>) {
  super();

  this.setDefinedProps({
    apiVersion: Provider.apiVersion,
    kind: Provider.kind,
    ...data
  } as IProvider);
}
}


setValidateFunc(Provider, validate as ValidateFunc<IProvider>);
