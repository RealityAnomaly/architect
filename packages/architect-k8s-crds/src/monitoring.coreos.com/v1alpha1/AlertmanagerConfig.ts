import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/MonitoringCoreosComV1alpha1AlertmanagerConfig.js";

/**
 * AlertmanagerConfig defines a namespaced AlertmanagerConfig to be aggregated across multiple namespaces configuring one Alertmanager cluster.
 */
export interface IAlertmanagerConfig {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "monitoring.coreos.com/v1alpha1";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "AlertmanagerConfig";
  "metadata"?: IObjectMeta;
  /**
   * AlertmanagerConfigSpec is a specification of the desired behavior of the Alertmanager configuration. By definition, the Alertmanager configuration only applies to alerts for which the `namespace` label is equal to the namespace of the AlertmanagerConfig resource.
   */
  "spec": {
    /**
     * List of inhibition rules. The rules will only apply to alerts matching the resource’s namespace.
     */
    "inhibitRules"?: Array<{
      /**
       * Labels that must have an equal value in the source and target alert for the inhibition to take effect.
       */
      "equal"?: Array<string>;
      /**
       * Matchers for which one or more alerts have to exist for the inhibition to take effect. The operator enforces that the alert matches the resource’s namespace.
       */
      "sourceMatch"?: Array<{
        /**
         * Match operation available with AlertManager >= v0.22.0 and takes precedence over Regex (deprecated) if non-empty.
         */
        "matchType"?: "!=" | "=" | "=~" | "!~";
        /**
         * Label to match.
         */
        "name": string;
        /**
         * Whether to match on equality (false) or regular-expression (true). Deprecated as of AlertManager >= v0.22.0 where a user should use MatchType instead.
         */
        "regex"?: boolean;
        /**
         * Label value to match.
         */
        "value"?: string;
      }>;
      /**
       * Matchers that have to be fulfilled in the alerts to be muted. The operator enforces that the alert matches the resource’s namespace.
       */
      "targetMatch"?: Array<{
        /**
         * Match operation available with AlertManager >= v0.22.0 and takes precedence over Regex (deprecated) if non-empty.
         */
        "matchType"?: "!=" | "=" | "=~" | "!~";
        /**
         * Label to match.
         */
        "name": string;
        /**
         * Whether to match on equality (false) or regular-expression (true). Deprecated as of AlertManager >= v0.22.0 where a user should use MatchType instead.
         */
        "regex"?: boolean;
        /**
         * Label value to match.
         */
        "value"?: string;
      }>;
    }>;
    /**
     * List of MuteTimeInterval specifying when the routes should be muted.
     */
    "muteTimeIntervals"?: Array<{
      /**
       * Name of the time interval
       */
      "name"?: string;
      /**
       * TimeIntervals is a list of TimeInterval
       */
      "timeIntervals"?: Array<{
        /**
         * DaysOfMonth is a list of DayOfMonthRange
         */
        "daysOfMonth"?: Array<{
          /**
           * End of the inclusive range
           */
          "end"?: number;
          /**
           * Start of the inclusive range
           */
          "start"?: number;
        }>;
        /**
         * Months is a list of MonthRange
         */
        "months"?: Array<string>;
        /**
         * Times is a list of TimeRange
         */
        "times"?: Array<{
          /**
           * EndTime is the end time in 24hr format.
           */
          "endTime"?: string;
          /**
           * StartTime is the start time in 24hr format.
           */
          "startTime"?: string;
        }>;
        /**
         * Weekdays is a list of WeekdayRange
         */
        "weekdays"?: Array<string>;
        /**
         * Years is a list of YearRange
         */
        "years"?: Array<string>;
      }>;
    }>;
    /**
     * List of receivers.
     */
    "receivers"?: Array<{
      /**
       * List of Email configurations.
       */
      "emailConfigs"?: Array<{
        /**
         * The identity to use for authentication.
         */
        "authIdentity"?: string;
        /**
         * The secret's key that contains the password to use for authentication. The secret needs to be in the same namespace as the AlertmanagerConfig object and accessible by the Prometheus Operator.
         */
        "authPassword"?: {
          /**
           * The key of the secret to select from.  Must be a valid secret key.
           */
          "key": string;
          /**
           * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
           */
          "name"?: string;
          /**
           * Specify whether the Secret or its key must be defined
           */
          "optional"?: boolean;
        };
        /**
         * The secret's key that contains the CRAM-MD5 secret. The secret needs to be in the same namespace as the AlertmanagerConfig object and accessible by the Prometheus Operator.
         */
        "authSecret"?: {
          /**
           * The key of the secret to select from.  Must be a valid secret key.
           */
          "key": string;
          /**
           * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
           */
          "name"?: string;
          /**
           * Specify whether the Secret or its key must be defined
           */
          "optional"?: boolean;
        };
        /**
         * The username to use for authentication.
         */
        "authUsername"?: string;
        /**
         * The sender address.
         */
        "from"?: string;
        /**
         * Further headers email header key/value pairs. Overrides any headers previously set by the notification implementation.
         */
        "headers"?: Array<{
          /**
           * Key of the tuple.
           */
          "key": string;
          /**
           * Value of the tuple.
           */
          "value": string;
        }>;
        /**
         * The hostname to identify to the SMTP server.
         */
        "hello"?: string;
        /**
         * The HTML body of the email notification.
         */
        "html"?: string;
        /**
         * The SMTP TLS requirement. Note that Go does not support unencrypted connections to remote SMTP endpoints.
         */
        "requireTLS"?: boolean;
        /**
         * Whether or not to notify about resolved alerts.
         */
        "sendResolved"?: boolean;
        /**
         * The SMTP host and port through which emails are sent. E.g. example.com:25
         */
        "smarthost"?: string;
        /**
         * The text body of the email notification.
         */
        "text"?: string;
        /**
         * TLS configuration
         */
        "tlsConfig"?: {
          /**
           * Struct containing the CA cert to use for the targets.
           */
          "ca"?: {
            /**
             * ConfigMap containing data to use for the targets.
             */
            "configMap"?: {
              /**
               * The key to select.
               */
              "key": string;
              /**
               * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
               */
              "name"?: string;
              /**
               * Specify whether the ConfigMap or its key must be defined
               */
              "optional"?: boolean;
            };
            /**
             * Secret containing data to use for the targets.
             */
            "secret"?: {
              /**
               * The key of the secret to select from.  Must be a valid secret key.
               */
              "key": string;
              /**
               * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
               */
              "name"?: string;
              /**
               * Specify whether the Secret or its key must be defined
               */
              "optional"?: boolean;
            };
          };
          /**
           * Struct containing the client cert file for the targets.
           */
          "cert"?: {
            /**
             * ConfigMap containing data to use for the targets.
             */
            "configMap"?: {
              /**
               * The key to select.
               */
              "key": string;
              /**
               * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
               */
              "name"?: string;
              /**
               * Specify whether the ConfigMap or its key must be defined
               */
              "optional"?: boolean;
            };
            /**
             * Secret containing data to use for the targets.
             */
            "secret"?: {
              /**
               * The key of the secret to select from.  Must be a valid secret key.
               */
              "key": string;
              /**
               * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
               */
              "name"?: string;
              /**
               * Specify whether the Secret or its key must be defined
               */
              "optional"?: boolean;
            };
          };
          /**
           * Disable target certificate validation.
           */
          "insecureSkipVerify"?: boolean;
          /**
           * Secret containing the client key file for the targets.
           */
          "keySecret"?: {
            /**
             * The key of the secret to select from.  Must be a valid secret key.
             */
            "key": string;
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
             */
            "name"?: string;
            /**
             * Specify whether the Secret or its key must be defined
             */
            "optional"?: boolean;
          };
          /**
           * Used to verify the hostname for the targets.
           */
          "serverName"?: string;
        };
        /**
         * The email address to send notifications to.
         */
        "to"?: string;
      }>;
      /**
       * Name of the receiver. Must be unique across all items from the list.
       */
      "name": string;
      /**
       * List of OpsGenie configurations.
       */
      "opsgenieConfigs"?: Array<{
        /**
         * Comma separated list of actions that will be available for the alert.
         */
        "actions"?: string;
        /**
         * The secret's key that contains the OpsGenie API key. The secret needs to be in the same namespace as the AlertmanagerConfig object and accessible by the Prometheus Operator.
         */
        "apiKey"?: {
          /**
           * The key of the secret to select from.  Must be a valid secret key.
           */
          "key": string;
          /**
           * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
           */
          "name"?: string;
          /**
           * Specify whether the Secret or its key must be defined
           */
          "optional"?: boolean;
        };
        /**
         * The URL to send OpsGenie API requests to.
         */
        "apiURL"?: string;
        /**
         * Description of the incident.
         */
        "description"?: string;
        /**
         * A set of arbitrary key/value pairs that provide further detail about the incident.
         */
        "details"?: Array<{
          /**
           * Key of the tuple.
           */
          "key": string;
          /**
           * Value of the tuple.
           */
          "value": string;
        }>;
        /**
         * Optional field that can be used to specify which domain alert is related to.
         */
        "entity"?: string;
        /**
         * HTTP client configuration.
         */
        "httpConfig"?: {
          /**
           * Authorization header configuration for the client. This is mutually exclusive with BasicAuth and is only available starting from Alertmanager v0.22+.
           */
          "authorization"?: {
            /**
             * The secret's key that contains the credentials of the request
             */
            "credentials"?: {
              /**
               * The key of the secret to select from.  Must be a valid secret key.
               */
              "key": string;
              /**
               * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
               */
              "name"?: string;
              /**
               * Specify whether the Secret or its key must be defined
               */
              "optional"?: boolean;
            };
            /**
             * Set the authentication type. Defaults to Bearer, Basic will cause an error
             */
            "type"?: string;
          };
          /**
           * BasicAuth for the client. This is mutually exclusive with Authorization. If both are defined, BasicAuth takes precedence.
           */
          "basicAuth"?: {
            /**
             * The secret in the service monitor namespace that contains the password for authentication.
             */
            "password"?: {
              /**
               * The key of the secret to select from.  Must be a valid secret key.
               */
              "key": string;
              /**
               * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
               */
              "name"?: string;
              /**
               * Specify whether the Secret or its key must be defined
               */
              "optional"?: boolean;
            };
            /**
             * The secret in the service monitor namespace that contains the username for authentication.
             */
            "username"?: {
              /**
               * The key of the secret to select from.  Must be a valid secret key.
               */
              "key": string;
              /**
               * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
               */
              "name"?: string;
              /**
               * Specify whether the Secret or its key must be defined
               */
              "optional"?: boolean;
            };
          };
          /**
           * The secret's key that contains the bearer token to be used by the client for authentication. The secret needs to be in the same namespace as the AlertmanagerConfig object and accessible by the Prometheus Operator.
           */
          "bearerTokenSecret"?: {
            /**
             * The key of the secret to select from.  Must be a valid secret key.
             */
            "key": string;
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
             */
            "name"?: string;
            /**
             * Specify whether the Secret or its key must be defined
             */
            "optional"?: boolean;
          };
          /**
           * FollowRedirects specifies whether the client should follow HTTP 3xx redirects.
           */
          "followRedirects"?: boolean;
          /**
           * OAuth2 client credentials used to fetch a token for the targets.
           */
          "oauth2"?: {
            /**
             * The secret or configmap containing the OAuth2 client id
             */
            "clientId": {
              /**
               * ConfigMap containing data to use for the targets.
               */
              "configMap"?: {
                /**
                 * The key to select.
                 */
                "key": string;
                /**
                 * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
                 */
                "name"?: string;
                /**
                 * Specify whether the ConfigMap or its key must be defined
                 */
                "optional"?: boolean;
              };
              /**
               * Secret containing data to use for the targets.
               */
              "secret"?: {
                /**
                 * The key of the secret to select from.  Must be a valid secret key.
                 */
                "key": string;
                /**
                 * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
                 */
                "name"?: string;
                /**
                 * Specify whether the Secret or its key must be defined
                 */
                "optional"?: boolean;
              };
            };
            /**
             * The secret containing the OAuth2 client secret
             */
            "clientSecret": {
              /**
               * The key of the secret to select from.  Must be a valid secret key.
               */
              "key": string;
              /**
               * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
               */
              "name"?: string;
              /**
               * Specify whether the Secret or its key must be defined
               */
              "optional"?: boolean;
            };
            /**
             * Parameters to append to the token URL
             */
            "endpointParams"?: {
              [key: string]: string;
            };
            /**
             * OAuth2 scopes used for the token request
             */
            "scopes"?: Array<string>;
            /**
             * The URL to fetch the token from
             */
            "tokenUrl": string;
          };
          /**
           * Optional proxy URL.
           */
          "proxyURL"?: string;
          /**
           * TLS configuration for the client.
           */
          "tlsConfig"?: {
            /**
             * Struct containing the CA cert to use for the targets.
             */
            "ca"?: {
              /**
               * ConfigMap containing data to use for the targets.
               */
              "configMap"?: {
                /**
                 * The key to select.
                 */
                "key": string;
                /**
                 * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
                 */
                "name"?: string;
                /**
                 * Specify whether the ConfigMap or its key must be defined
                 */
                "optional"?: boolean;
              };
              /**
               * Secret containing data to use for the targets.
               */
              "secret"?: {
                /**
                 * The key of the secret to select from.  Must be a valid secret key.
                 */
                "key": string;
                /**
                 * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
                 */
                "name"?: string;
                /**
                 * Specify whether the Secret or its key must be defined
                 */
                "optional"?: boolean;
              };
            };
            /**
             * Struct containing the client cert file for the targets.
             */
            "cert"?: {
              /**
               * ConfigMap containing data to use for the targets.
               */
              "configMap"?: {
                /**
                 * The key to select.
                 */
                "key": string;
                /**
                 * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
                 */
                "name"?: string;
                /**
                 * Specify whether the ConfigMap or its key must be defined
                 */
                "optional"?: boolean;
              };
              /**
               * Secret containing data to use for the targets.
               */
              "secret"?: {
                /**
                 * The key of the secret to select from.  Must be a valid secret key.
                 */
                "key": string;
                /**
                 * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
                 */
                "name"?: string;
                /**
                 * Specify whether the Secret or its key must be defined
                 */
                "optional"?: boolean;
              };
            };
            /**
             * Disable target certificate validation.
             */
            "insecureSkipVerify"?: boolean;
            /**
             * Secret containing the client key file for the targets.
             */
            "keySecret"?: {
              /**
               * The key of the secret to select from.  Must be a valid secret key.
               */
              "key": string;
              /**
               * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
               */
              "name"?: string;
              /**
               * Specify whether the Secret or its key must be defined
               */
              "optional"?: boolean;
            };
            /**
             * Used to verify the hostname for the targets.
             */
            "serverName"?: string;
          };
        };
        /**
         * Alert text limited to 130 characters.
         */
        "message"?: string;
        /**
         * Additional alert note.
         */
        "note"?: string;
        /**
         * Priority level of alert. Possible values are P1, P2, P3, P4, and P5.
         */
        "priority"?: string;
        /**
         * List of responders responsible for notifications.
         */
        "responders"?: Array<{
          /**
           * ID of the responder.
           */
          "id"?: string;
          /**
           * Name of the responder.
           */
          "name"?: string;
          /**
           * Type of responder.
           */
          "type": "team" | "teams" | "user" | "escalation" | "schedule";
          /**
           * Username of the responder.
           */
          "username"?: string;
        }>;
        /**
         * Whether or not to notify about resolved alerts.
         */
        "sendResolved"?: boolean;
        /**
         * Backlink to the sender of the notification.
         */
        "source"?: string;
        /**
         * Comma separated list of tags attached to the notifications.
         */
        "tags"?: string;
        /**
         * Whether to update message and description of the alert in OpsGenie if it already exists By default, the alert is never updated in OpsGenie, the new message only appears in activity log.
         */
        "updateAlerts"?: boolean;
      }>;
      /**
       * List of PagerDuty configurations.
       */
      "pagerdutyConfigs"?: Array<{
        /**
         * The class/type of the event.
         */
        "class"?: string;
        /**
         * Client identification.
         */
        "client"?: string;
        /**
         * Backlink to the sender of notification.
         */
        "clientURL"?: string;
        /**
         * The part or component of the affected system that is broken.
         */
        "component"?: string;
        /**
         * Description of the incident.
         */
        "description"?: string;
        /**
         * Arbitrary key/value pairs that provide further detail about the incident.
         */
        "details"?: Array<{
          /**
           * Key of the tuple.
           */
          "key": string;
          /**
           * Value of the tuple.
           */
          "value": string;
        }>;
        /**
         * A cluster or grouping of sources.
         */
        "group"?: string;
        /**
         * HTTP client configuration.
         */
        "httpConfig"?: {
          /**
           * Authorization header configuration for the client. This is mutually exclusive with BasicAuth and is only available starting from Alertmanager v0.22+.
           */
          "authorization"?: {
            /**
             * The secret's key that contains the credentials of the request
             */
            "credentials"?: {
              /**
               * The key of the secret to select from.  Must be a valid secret key.
               */
              "key": string;
              /**
               * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
               */
              "name"?: string;
              /**
               * Specify whether the Secret or its key must be defined
               */
              "optional"?: boolean;
            };
            /**
             * Set the authentication type. Defaults to Bearer, Basic will cause an error
             */
            "type"?: string;
          };
          /**
           * BasicAuth for the client. This is mutually exclusive with Authorization. If both are defined, BasicAuth takes precedence.
           */
          "basicAuth"?: {
            /**
             * The secret in the service monitor namespace that contains the password for authentication.
             */
            "password"?: {
              /**
               * The key of the secret to select from.  Must be a valid secret key.
               */
              "key": string;
              /**
               * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
               */
              "name"?: string;
              /**
               * Specify whether the Secret or its key must be defined
               */
              "optional"?: boolean;
            };
            /**
             * The secret in the service monitor namespace that contains the username for authentication.
             */
            "username"?: {
              /**
               * The key of the secret to select from.  Must be a valid secret key.
               */
              "key": string;
              /**
               * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
               */
              "name"?: string;
              /**
               * Specify whether the Secret or its key must be defined
               */
              "optional"?: boolean;
            };
          };
          /**
           * The secret's key that contains the bearer token to be used by the client for authentication. The secret needs to be in the same namespace as the AlertmanagerConfig object and accessible by the Prometheus Operator.
           */
          "bearerTokenSecret"?: {
            /**
             * The key of the secret to select from.  Must be a valid secret key.
             */
            "key": string;
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
             */
            "name"?: string;
            /**
             * Specify whether the Secret or its key must be defined
             */
            "optional"?: boolean;
          };
          /**
           * FollowRedirects specifies whether the client should follow HTTP 3xx redirects.
           */
          "followRedirects"?: boolean;
          /**
           * OAuth2 client credentials used to fetch a token for the targets.
           */
          "oauth2"?: {
            /**
             * The secret or configmap containing the OAuth2 client id
             */
            "clientId": {
              /**
               * ConfigMap containing data to use for the targets.
               */
              "configMap"?: {
                /**
                 * The key to select.
                 */
                "key": string;
                /**
                 * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
                 */
                "name"?: string;
                /**
                 * Specify whether the ConfigMap or its key must be defined
                 */
                "optional"?: boolean;
              };
              /**
               * Secret containing data to use for the targets.
               */
              "secret"?: {
                /**
                 * The key of the secret to select from.  Must be a valid secret key.
                 */
                "key": string;
                /**
                 * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
                 */
                "name"?: string;
                /**
                 * Specify whether the Secret or its key must be defined
                 */
                "optional"?: boolean;
              };
            };
            /**
             * The secret containing the OAuth2 client secret
             */
            "clientSecret": {
              /**
               * The key of the secret to select from.  Must be a valid secret key.
               */
              "key": string;
              /**
               * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
               */
              "name"?: string;
              /**
               * Specify whether the Secret or its key must be defined
               */
              "optional"?: boolean;
            };
            /**
             * Parameters to append to the token URL
             */
            "endpointParams"?: {
              [key: string]: string;
            };
            /**
             * OAuth2 scopes used for the token request
             */
            "scopes"?: Array<string>;
            /**
             * The URL to fetch the token from
             */
            "tokenUrl": string;
          };
          /**
           * Optional proxy URL.
           */
          "proxyURL"?: string;
          /**
           * TLS configuration for the client.
           */
          "tlsConfig"?: {
            /**
             * Struct containing the CA cert to use for the targets.
             */
            "ca"?: {
              /**
               * ConfigMap containing data to use for the targets.
               */
              "configMap"?: {
                /**
                 * The key to select.
                 */
                "key": string;
                /**
                 * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
                 */
                "name"?: string;
                /**
                 * Specify whether the ConfigMap or its key must be defined
                 */
                "optional"?: boolean;
              };
              /**
               * Secret containing data to use for the targets.
               */
              "secret"?: {
                /**
                 * The key of the secret to select from.  Must be a valid secret key.
                 */
                "key": string;
                /**
                 * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
                 */
                "name"?: string;
                /**
                 * Specify whether the Secret or its key must be defined
                 */
                "optional"?: boolean;
              };
            };
            /**
             * Struct containing the client cert file for the targets.
             */
            "cert"?: {
              /**
               * ConfigMap containing data to use for the targets.
               */
              "configMap"?: {
                /**
                 * The key to select.
                 */
                "key": string;
                /**
                 * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
                 */
                "name"?: string;
                /**
                 * Specify whether the ConfigMap or its key must be defined
                 */
                "optional"?: boolean;
              };
              /**
               * Secret containing data to use for the targets.
               */
              "secret"?: {
                /**
                 * The key of the secret to select from.  Must be a valid secret key.
                 */
                "key": string;
                /**
                 * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
                 */
                "name"?: string;
                /**
                 * Specify whether the Secret or its key must be defined
                 */
                "optional"?: boolean;
              };
            };
            /**
             * Disable target certificate validation.
             */
            "insecureSkipVerify"?: boolean;
            /**
             * Secret containing the client key file for the targets.
             */
            "keySecret"?: {
              /**
               * The key of the secret to select from.  Must be a valid secret key.
               */
              "key": string;
              /**
               * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
               */
              "name"?: string;
              /**
               * Specify whether the Secret or its key must be defined
               */
              "optional"?: boolean;
            };
            /**
             * Used to verify the hostname for the targets.
             */
            "serverName"?: string;
          };
        };
        /**
         * A list of image details to attach that provide further detail about an incident.
         */
        "pagerDutyImageConfigs"?: Array<{
          /**
           * Alt is the optional alternative text for the image.
           */
          "alt"?: string;
          /**
           * Optional URL; makes the image a clickable link.
           */
          "href"?: string;
          /**
           * Src of the image being attached to the incident
           */
          "src"?: string;
        }>;
        /**
         * A list of link details to attach that provide further detail about an incident.
         */
        "pagerDutyLinkConfigs"?: Array<{
          /**
           * Text that describes the purpose of the link, and can be used as the link's text.
           */
          "alt"?: string;
          /**
           * Href is the URL of the link to be attached
           */
          "href"?: string;
        }>;
        /**
         * The secret's key that contains the PagerDuty integration key (when using Events API v2). Either this field or `serviceKey` needs to be defined. The secret needs to be in the same namespace as the AlertmanagerConfig object and accessible by the Prometheus Operator.
         */
        "routingKey"?: {
          /**
           * The key of the secret to select from.  Must be a valid secret key.
           */
          "key": string;
          /**
           * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
           */
          "name"?: string;
          /**
           * Specify whether the Secret or its key must be defined
           */
          "optional"?: boolean;
        };
        /**
         * Whether or not to notify about resolved alerts.
         */
        "sendResolved"?: boolean;
        /**
         * The secret's key that contains the PagerDuty service key (when using integration type "Prometheus"). Either this field or `routingKey` needs to be defined. The secret needs to be in the same namespace as the AlertmanagerConfig object and accessible by the Prometheus Operator.
         */
        "serviceKey"?: {
          /**
           * The key of the secret to select from.  Must be a valid secret key.
           */
          "key": string;
          /**
           * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
           */
          "name"?: string;
          /**
           * Specify whether the Secret or its key must be defined
           */
          "optional"?: boolean;
        };
        /**
         * Severity of the incident.
         */
        "severity"?: string;
        /**
         * The URL to send requests to.
         */
        "url"?: string;
      }>;
      /**
       * List of Pushover configurations.
       */
      "pushoverConfigs"?: Array<{
        /**
         * How long your notification will continue to be retried for, unless the user acknowledges the notification.
         */
        "expire"?: string;
        /**
         * Whether notification message is HTML or plain text.
         */
        "html"?: boolean;
        /**
         * HTTP client configuration.
         */
        "httpConfig"?: {
          /**
           * Authorization header configuration for the client. This is mutually exclusive with BasicAuth and is only available starting from Alertmanager v0.22+.
           */
          "authorization"?: {
            /**
             * The secret's key that contains the credentials of the request
             */
            "credentials"?: {
              /**
               * The key of the secret to select from.  Must be a valid secret key.
               */
              "key": string;
              /**
               * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
               */
              "name"?: string;
              /**
               * Specify whether the Secret or its key must be defined
               */
              "optional"?: boolean;
            };
            /**
             * Set the authentication type. Defaults to Bearer, Basic will cause an error
             */
            "type"?: string;
          };
          /**
           * BasicAuth for the client. This is mutually exclusive with Authorization. If both are defined, BasicAuth takes precedence.
           */
          "basicAuth"?: {
            /**
             * The secret in the service monitor namespace that contains the password for authentication.
             */
            "password"?: {
              /**
               * The key of the secret to select from.  Must be a valid secret key.
               */
              "key": string;
              /**
               * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
               */
              "name"?: string;
              /**
               * Specify whether the Secret or its key must be defined
               */
              "optional"?: boolean;
            };
            /**
             * The secret in the service monitor namespace that contains the username for authentication.
             */
            "username"?: {
              /**
               * The key of the secret to select from.  Must be a valid secret key.
               */
              "key": string;
              /**
               * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
               */
              "name"?: string;
              /**
               * Specify whether the Secret or its key must be defined
               */
              "optional"?: boolean;
            };
          };
          /**
           * The secret's key that contains the bearer token to be used by the client for authentication. The secret needs to be in the same namespace as the AlertmanagerConfig object and accessible by the Prometheus Operator.
           */
          "bearerTokenSecret"?: {
            /**
             * The key of the secret to select from.  Must be a valid secret key.
             */
            "key": string;
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
             */
            "name"?: string;
            /**
             * Specify whether the Secret or its key must be defined
             */
            "optional"?: boolean;
          };
          /**
           * FollowRedirects specifies whether the client should follow HTTP 3xx redirects.
           */
          "followRedirects"?: boolean;
          /**
           * OAuth2 client credentials used to fetch a token for the targets.
           */
          "oauth2"?: {
            /**
             * The secret or configmap containing the OAuth2 client id
             */
            "clientId": {
              /**
               * ConfigMap containing data to use for the targets.
               */
              "configMap"?: {
                /**
                 * The key to select.
                 */
                "key": string;
                /**
                 * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
                 */
                "name"?: string;
                /**
                 * Specify whether the ConfigMap or its key must be defined
                 */
                "optional"?: boolean;
              };
              /**
               * Secret containing data to use for the targets.
               */
              "secret"?: {
                /**
                 * The key of the secret to select from.  Must be a valid secret key.
                 */
                "key": string;
                /**
                 * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
                 */
                "name"?: string;
                /**
                 * Specify whether the Secret or its key must be defined
                 */
                "optional"?: boolean;
              };
            };
            /**
             * The secret containing the OAuth2 client secret
             */
            "clientSecret": {
              /**
               * The key of the secret to select from.  Must be a valid secret key.
               */
              "key": string;
              /**
               * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
               */
              "name"?: string;
              /**
               * Specify whether the Secret or its key must be defined
               */
              "optional"?: boolean;
            };
            /**
             * Parameters to append to the token URL
             */
            "endpointParams"?: {
              [key: string]: string;
            };
            /**
             * OAuth2 scopes used for the token request
             */
            "scopes"?: Array<string>;
            /**
             * The URL to fetch the token from
             */
            "tokenUrl": string;
          };
          /**
           * Optional proxy URL.
           */
          "proxyURL"?: string;
          /**
           * TLS configuration for the client.
           */
          "tlsConfig"?: {
            /**
             * Struct containing the CA cert to use for the targets.
             */
            "ca"?: {
              /**
               * ConfigMap containing data to use for the targets.
               */
              "configMap"?: {
                /**
                 * The key to select.
                 */
                "key": string;
                /**
                 * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
                 */
                "name"?: string;
                /**
                 * Specify whether the ConfigMap or its key must be defined
                 */
                "optional"?: boolean;
              };
              /**
               * Secret containing data to use for the targets.
               */
              "secret"?: {
                /**
                 * The key of the secret to select from.  Must be a valid secret key.
                 */
                "key": string;
                /**
                 * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
                 */
                "name"?: string;
                /**
                 * Specify whether the Secret or its key must be defined
                 */
                "optional"?: boolean;
              };
            };
            /**
             * Struct containing the client cert file for the targets.
             */
            "cert"?: {
              /**
               * ConfigMap containing data to use for the targets.
               */
              "configMap"?: {
                /**
                 * The key to select.
                 */
                "key": string;
                /**
                 * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
                 */
                "name"?: string;
                /**
                 * Specify whether the ConfigMap or its key must be defined
                 */
                "optional"?: boolean;
              };
              /**
               * Secret containing data to use for the targets.
               */
              "secret"?: {
                /**
                 * The key of the secret to select from.  Must be a valid secret key.
                 */
                "key": string;
                /**
                 * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
                 */
                "name"?: string;
                /**
                 * Specify whether the Secret or its key must be defined
                 */
                "optional"?: boolean;
              };
            };
            /**
             * Disable target certificate validation.
             */
            "insecureSkipVerify"?: boolean;
            /**
             * Secret containing the client key file for the targets.
             */
            "keySecret"?: {
              /**
               * The key of the secret to select from.  Must be a valid secret key.
               */
              "key": string;
              /**
               * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
               */
              "name"?: string;
              /**
               * Specify whether the Secret or its key must be defined
               */
              "optional"?: boolean;
            };
            /**
             * Used to verify the hostname for the targets.
             */
            "serverName"?: string;
          };
        };
        /**
         * Notification message.
         */
        "message"?: string;
        /**
         * Priority, see https://pushover.net/api#priority
         */
        "priority"?: string;
        /**
         * How often the Pushover servers will send the same notification to the user. Must be at least 30 seconds.
         */
        "retry"?: string;
        /**
         * Whether or not to notify about resolved alerts.
         */
        "sendResolved"?: boolean;
        /**
         * The name of one of the sounds supported by device clients to override the user's default sound choice
         */
        "sound"?: string;
        /**
         * Notification title.
         */
        "title"?: string;
        /**
         * The secret's key that contains the registered application’s API token, see https://pushover.net/apps. The secret needs to be in the same namespace as the AlertmanagerConfig object and accessible by the Prometheus Operator.
         */
        "token"?: {
          /**
           * The key of the secret to select from.  Must be a valid secret key.
           */
          "key": string;
          /**
           * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
           */
          "name"?: string;
          /**
           * Specify whether the Secret or its key must be defined
           */
          "optional"?: boolean;
        };
        /**
         * A supplementary URL shown alongside the message.
         */
        "url"?: string;
        /**
         * A title for supplementary URL, otherwise just the URL is shown
         */
        "urlTitle"?: string;
        /**
         * The secret's key that contains the recipient user’s user key. The secret needs to be in the same namespace as the AlertmanagerConfig object and accessible by the Prometheus Operator.
         */
        "userKey"?: {
          /**
           * The key of the secret to select from.  Must be a valid secret key.
           */
          "key": string;
          /**
           * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
           */
          "name"?: string;
          /**
           * Specify whether the Secret or its key must be defined
           */
          "optional"?: boolean;
        };
      }>;
      /**
       * List of Slack configurations.
       */
      "slackConfigs"?: Array<{
        /**
         * A list of Slack actions that are sent with each notification.
         */
        "actions"?: Array<{
          /**
           * SlackConfirmationField protect users from destructive actions or particularly distinguished decisions by asking them to confirm their button click one more time. See https://api.slack.com/docs/interactive-message-field-guide#confirmation_fields for more information.
           */
          "confirm"?: {
            "dismissText"?: string;
            "okText"?: string;
            "text": string;
            "title"?: string;
          };
          "name"?: string;
          "style"?: string;
          "text": string;
          "type": string;
          "url"?: string;
          "value"?: string;
        }>;
        /**
         * The secret's key that contains the Slack webhook URL. The secret needs to be in the same namespace as the AlertmanagerConfig object and accessible by the Prometheus Operator.
         */
        "apiURL"?: {
          /**
           * The key of the secret to select from.  Must be a valid secret key.
           */
          "key": string;
          /**
           * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
           */
          "name"?: string;
          /**
           * Specify whether the Secret or its key must be defined
           */
          "optional"?: boolean;
        };
        "callbackId"?: string;
        /**
         * The channel or user to send notifications to.
         */
        "channel"?: string;
        "color"?: string;
        "fallback"?: string;
        /**
         * A list of Slack fields that are sent with each notification.
         */
        "fields"?: Array<{
          "short"?: boolean;
          "title": string;
          "value": string;
        }>;
        "footer"?: string;
        /**
         * HTTP client configuration.
         */
        "httpConfig"?: {
          /**
           * Authorization header configuration for the client. This is mutually exclusive with BasicAuth and is only available starting from Alertmanager v0.22+.
           */
          "authorization"?: {
            /**
             * The secret's key that contains the credentials of the request
             */
            "credentials"?: {
              /**
               * The key of the secret to select from.  Must be a valid secret key.
               */
              "key": string;
              /**
               * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
               */
              "name"?: string;
              /**
               * Specify whether the Secret or its key must be defined
               */
              "optional"?: boolean;
            };
            /**
             * Set the authentication type. Defaults to Bearer, Basic will cause an error
             */
            "type"?: string;
          };
          /**
           * BasicAuth for the client. This is mutually exclusive with Authorization. If both are defined, BasicAuth takes precedence.
           */
          "basicAuth"?: {
            /**
             * The secret in the service monitor namespace that contains the password for authentication.
             */
            "password"?: {
              /**
               * The key of the secret to select from.  Must be a valid secret key.
               */
              "key": string;
              /**
               * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
               */
              "name"?: string;
              /**
               * Specify whether the Secret or its key must be defined
               */
              "optional"?: boolean;
            };
            /**
             * The secret in the service monitor namespace that contains the username for authentication.
             */
            "username"?: {
              /**
               * The key of the secret to select from.  Must be a valid secret key.
               */
              "key": string;
              /**
               * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
               */
              "name"?: string;
              /**
               * Specify whether the Secret or its key must be defined
               */
              "optional"?: boolean;
            };
          };
          /**
           * The secret's key that contains the bearer token to be used by the client for authentication. The secret needs to be in the same namespace as the AlertmanagerConfig object and accessible by the Prometheus Operator.
           */
          "bearerTokenSecret"?: {
            /**
             * The key of the secret to select from.  Must be a valid secret key.
             */
            "key": string;
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
             */
            "name"?: string;
            /**
             * Specify whether the Secret or its key must be defined
             */
            "optional"?: boolean;
          };
          /**
           * FollowRedirects specifies whether the client should follow HTTP 3xx redirects.
           */
          "followRedirects"?: boolean;
          /**
           * OAuth2 client credentials used to fetch a token for the targets.
           */
          "oauth2"?: {
            /**
             * The secret or configmap containing the OAuth2 client id
             */
            "clientId": {
              /**
               * ConfigMap containing data to use for the targets.
               */
              "configMap"?: {
                /**
                 * The key to select.
                 */
                "key": string;
                /**
                 * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
                 */
                "name"?: string;
                /**
                 * Specify whether the ConfigMap or its key must be defined
                 */
                "optional"?: boolean;
              };
              /**
               * Secret containing data to use for the targets.
               */
              "secret"?: {
                /**
                 * The key of the secret to select from.  Must be a valid secret key.
                 */
                "key": string;
                /**
                 * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
                 */
                "name"?: string;
                /**
                 * Specify whether the Secret or its key must be defined
                 */
                "optional"?: boolean;
              };
            };
            /**
             * The secret containing the OAuth2 client secret
             */
            "clientSecret": {
              /**
               * The key of the secret to select from.  Must be a valid secret key.
               */
              "key": string;
              /**
               * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
               */
              "name"?: string;
              /**
               * Specify whether the Secret or its key must be defined
               */
              "optional"?: boolean;
            };
            /**
             * Parameters to append to the token URL
             */
            "endpointParams"?: {
              [key: string]: string;
            };
            /**
             * OAuth2 scopes used for the token request
             */
            "scopes"?: Array<string>;
            /**
             * The URL to fetch the token from
             */
            "tokenUrl": string;
          };
          /**
           * Optional proxy URL.
           */
          "proxyURL"?: string;
          /**
           * TLS configuration for the client.
           */
          "tlsConfig"?: {
            /**
             * Struct containing the CA cert to use for the targets.
             */
            "ca"?: {
              /**
               * ConfigMap containing data to use for the targets.
               */
              "configMap"?: {
                /**
                 * The key to select.
                 */
                "key": string;
                /**
                 * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
                 */
                "name"?: string;
                /**
                 * Specify whether the ConfigMap or its key must be defined
                 */
                "optional"?: boolean;
              };
              /**
               * Secret containing data to use for the targets.
               */
              "secret"?: {
                /**
                 * The key of the secret to select from.  Must be a valid secret key.
                 */
                "key": string;
                /**
                 * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
                 */
                "name"?: string;
                /**
                 * Specify whether the Secret or its key must be defined
                 */
                "optional"?: boolean;
              };
            };
            /**
             * Struct containing the client cert file for the targets.
             */
            "cert"?: {
              /**
               * ConfigMap containing data to use for the targets.
               */
              "configMap"?: {
                /**
                 * The key to select.
                 */
                "key": string;
                /**
                 * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
                 */
                "name"?: string;
                /**
                 * Specify whether the ConfigMap or its key must be defined
                 */
                "optional"?: boolean;
              };
              /**
               * Secret containing data to use for the targets.
               */
              "secret"?: {
                /**
                 * The key of the secret to select from.  Must be a valid secret key.
                 */
                "key": string;
                /**
                 * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
                 */
                "name"?: string;
                /**
                 * Specify whether the Secret or its key must be defined
                 */
                "optional"?: boolean;
              };
            };
            /**
             * Disable target certificate validation.
             */
            "insecureSkipVerify"?: boolean;
            /**
             * Secret containing the client key file for the targets.
             */
            "keySecret"?: {
              /**
               * The key of the secret to select from.  Must be a valid secret key.
               */
              "key": string;
              /**
               * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
               */
              "name"?: string;
              /**
               * Specify whether the Secret or its key must be defined
               */
              "optional"?: boolean;
            };
            /**
             * Used to verify the hostname for the targets.
             */
            "serverName"?: string;
          };
        };
        "iconEmoji"?: string;
        "iconURL"?: string;
        "imageURL"?: string;
        "linkNames"?: boolean;
        "mrkdwnIn"?: Array<string>;
        "pretext"?: string;
        /**
         * Whether or not to notify about resolved alerts.
         */
        "sendResolved"?: boolean;
        "shortFields"?: boolean;
        "text"?: string;
        "thumbURL"?: string;
        "title"?: string;
        "titleLink"?: string;
        "username"?: string;
      }>;
      /**
       * List of SNS configurations
       */
      "snsConfigs"?: Array<{
        /**
         * The SNS API URL i.e. https://sns.us-east-2.amazonaws.com. If not specified, the SNS API URL from the SNS SDK will be used.
         */
        "apiURL"?: string;
        /**
         * SNS message attributes.
         */
        "attributes"?: {
          [key: string]: string;
        };
        /**
         * HTTP client configuration.
         */
        "httpConfig"?: {
          /**
           * Authorization header configuration for the client. This is mutually exclusive with BasicAuth and is only available starting from Alertmanager v0.22+.
           */
          "authorization"?: {
            /**
             * The secret's key that contains the credentials of the request
             */
            "credentials"?: {
              /**
               * The key of the secret to select from.  Must be a valid secret key.
               */
              "key": string;
              /**
               * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
               */
              "name"?: string;
              /**
               * Specify whether the Secret or its key must be defined
               */
              "optional"?: boolean;
            };
            /**
             * Set the authentication type. Defaults to Bearer, Basic will cause an error
             */
            "type"?: string;
          };
          /**
           * BasicAuth for the client. This is mutually exclusive with Authorization. If both are defined, BasicAuth takes precedence.
           */
          "basicAuth"?: {
            /**
             * The secret in the service monitor namespace that contains the password for authentication.
             */
            "password"?: {
              /**
               * The key of the secret to select from.  Must be a valid secret key.
               */
              "key": string;
              /**
               * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
               */
              "name"?: string;
              /**
               * Specify whether the Secret or its key must be defined
               */
              "optional"?: boolean;
            };
            /**
             * The secret in the service monitor namespace that contains the username for authentication.
             */
            "username"?: {
              /**
               * The key of the secret to select from.  Must be a valid secret key.
               */
              "key": string;
              /**
               * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
               */
              "name"?: string;
              /**
               * Specify whether the Secret or its key must be defined
               */
              "optional"?: boolean;
            };
          };
          /**
           * The secret's key that contains the bearer token to be used by the client for authentication. The secret needs to be in the same namespace as the AlertmanagerConfig object and accessible by the Prometheus Operator.
           */
          "bearerTokenSecret"?: {
            /**
             * The key of the secret to select from.  Must be a valid secret key.
             */
            "key": string;
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
             */
            "name"?: string;
            /**
             * Specify whether the Secret or its key must be defined
             */
            "optional"?: boolean;
          };
          /**
           * FollowRedirects specifies whether the client should follow HTTP 3xx redirects.
           */
          "followRedirects"?: boolean;
          /**
           * OAuth2 client credentials used to fetch a token for the targets.
           */
          "oauth2"?: {
            /**
             * The secret or configmap containing the OAuth2 client id
             */
            "clientId": {
              /**
               * ConfigMap containing data to use for the targets.
               */
              "configMap"?: {
                /**
                 * The key to select.
                 */
                "key": string;
                /**
                 * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
                 */
                "name"?: string;
                /**
                 * Specify whether the ConfigMap or its key must be defined
                 */
                "optional"?: boolean;
              };
              /**
               * Secret containing data to use for the targets.
               */
              "secret"?: {
                /**
                 * The key of the secret to select from.  Must be a valid secret key.
                 */
                "key": string;
                /**
                 * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
                 */
                "name"?: string;
                /**
                 * Specify whether the Secret or its key must be defined
                 */
                "optional"?: boolean;
              };
            };
            /**
             * The secret containing the OAuth2 client secret
             */
            "clientSecret": {
              /**
               * The key of the secret to select from.  Must be a valid secret key.
               */
              "key": string;
              /**
               * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
               */
              "name"?: string;
              /**
               * Specify whether the Secret or its key must be defined
               */
              "optional"?: boolean;
            };
            /**
             * Parameters to append to the token URL
             */
            "endpointParams"?: {
              [key: string]: string;
            };
            /**
             * OAuth2 scopes used for the token request
             */
            "scopes"?: Array<string>;
            /**
             * The URL to fetch the token from
             */
            "tokenUrl": string;
          };
          /**
           * Optional proxy URL.
           */
          "proxyURL"?: string;
          /**
           * TLS configuration for the client.
           */
          "tlsConfig"?: {
            /**
             * Struct containing the CA cert to use for the targets.
             */
            "ca"?: {
              /**
               * ConfigMap containing data to use for the targets.
               */
              "configMap"?: {
                /**
                 * The key to select.
                 */
                "key": string;
                /**
                 * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
                 */
                "name"?: string;
                /**
                 * Specify whether the ConfigMap or its key must be defined
                 */
                "optional"?: boolean;
              };
              /**
               * Secret containing data to use for the targets.
               */
              "secret"?: {
                /**
                 * The key of the secret to select from.  Must be a valid secret key.
                 */
                "key": string;
                /**
                 * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
                 */
                "name"?: string;
                /**
                 * Specify whether the Secret or its key must be defined
                 */
                "optional"?: boolean;
              };
            };
            /**
             * Struct containing the client cert file for the targets.
             */
            "cert"?: {
              /**
               * ConfigMap containing data to use for the targets.
               */
              "configMap"?: {
                /**
                 * The key to select.
                 */
                "key": string;
                /**
                 * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
                 */
                "name"?: string;
                /**
                 * Specify whether the ConfigMap or its key must be defined
                 */
                "optional"?: boolean;
              };
              /**
               * Secret containing data to use for the targets.
               */
              "secret"?: {
                /**
                 * The key of the secret to select from.  Must be a valid secret key.
                 */
                "key": string;
                /**
                 * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
                 */
                "name"?: string;
                /**
                 * Specify whether the Secret or its key must be defined
                 */
                "optional"?: boolean;
              };
            };
            /**
             * Disable target certificate validation.
             */
            "insecureSkipVerify"?: boolean;
            /**
             * Secret containing the client key file for the targets.
             */
            "keySecret"?: {
              /**
               * The key of the secret to select from.  Must be a valid secret key.
               */
              "key": string;
              /**
               * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
               */
              "name"?: string;
              /**
               * Specify whether the Secret or its key must be defined
               */
              "optional"?: boolean;
            };
            /**
             * Used to verify the hostname for the targets.
             */
            "serverName"?: string;
          };
        };
        /**
         * The message content of the SNS notification.
         */
        "message"?: string;
        /**
         * Phone number if message is delivered via SMS in E.164 format. If you don't specify this value, you must specify a value for the TopicARN or TargetARN.
         */
        "phoneNumber"?: string;
        /**
         * Whether or not to notify about resolved alerts.
         */
        "sendResolved"?: boolean;
        /**
         * Configures AWS's Signature Verification 4 signing process to sign requests.
         */
        "sigv4"?: {
          /**
           * AccessKey is the AWS API key. If blank, the environment variable `AWS_ACCESS_KEY_ID` is used.
           */
          "accessKey"?: {
            /**
             * The key of the secret to select from.  Must be a valid secret key.
             */
            "key": string;
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
             */
            "name"?: string;
            /**
             * Specify whether the Secret or its key must be defined
             */
            "optional"?: boolean;
          };
          /**
           * Profile is the named AWS profile used to authenticate.
           */
          "profile"?: string;
          /**
           * Region is the AWS region. If blank, the region from the default credentials chain used.
           */
          "region"?: string;
          /**
           * RoleArn is the named AWS profile used to authenticate.
           */
          "roleArn"?: string;
          /**
           * SecretKey is the AWS API secret. If blank, the environment variable `AWS_SECRET_ACCESS_KEY` is used.
           */
          "secretKey"?: {
            /**
             * The key of the secret to select from.  Must be a valid secret key.
             */
            "key": string;
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
             */
            "name"?: string;
            /**
             * Specify whether the Secret or its key must be defined
             */
            "optional"?: boolean;
          };
        };
        /**
         * Subject line when the message is delivered to email endpoints.
         */
        "subject"?: string;
        /**
         * The  mobile platform endpoint ARN if message is delivered via mobile notifications. If you don't specify this value, you must specify a value for the topic_arn or PhoneNumber.
         */
        "targetARN"?: string;
        /**
         * SNS topic ARN, i.e. arn:aws:sns:us-east-2:698519295917:My-Topic If you don't specify this value, you must specify a value for the PhoneNumber or TargetARN.
         */
        "topicARN"?: string;
      }>;
      /**
       * List of Telegram configurations.
       */
      "telegramConfigs"?: Array<{
        /**
         * The Telegram API URL i.e. https://api.telegram.org. If not specified, default API URL will be used.
         */
        "apiURL"?: string;
        /**
         * Telegram bot token The secret needs to be in the same namespace as the AlertmanagerConfig object and accessible by the Prometheus Operator.
         */
        "botToken"?: {
          /**
           * The key of the secret to select from.  Must be a valid secret key.
           */
          "key": string;
          /**
           * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
           */
          "name"?: string;
          /**
           * Specify whether the Secret or its key must be defined
           */
          "optional"?: boolean;
        };
        /**
         * The Telegram chat ID.
         */
        "chatID"?: number;
        /**
         * Disable telegram notifications
         */
        "disableNotifications"?: boolean;
        /**
         * HTTP client configuration.
         */
        "httpConfig"?: {
          /**
           * Authorization header configuration for the client. This is mutually exclusive with BasicAuth and is only available starting from Alertmanager v0.22+.
           */
          "authorization"?: {
            /**
             * The secret's key that contains the credentials of the request
             */
            "credentials"?: {
              /**
               * The key of the secret to select from.  Must be a valid secret key.
               */
              "key": string;
              /**
               * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
               */
              "name"?: string;
              /**
               * Specify whether the Secret or its key must be defined
               */
              "optional"?: boolean;
            };
            /**
             * Set the authentication type. Defaults to Bearer, Basic will cause an error
             */
            "type"?: string;
          };
          /**
           * BasicAuth for the client. This is mutually exclusive with Authorization. If both are defined, BasicAuth takes precedence.
           */
          "basicAuth"?: {
            /**
             * The secret in the service monitor namespace that contains the password for authentication.
             */
            "password"?: {
              /**
               * The key of the secret to select from.  Must be a valid secret key.
               */
              "key": string;
              /**
               * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
               */
              "name"?: string;
              /**
               * Specify whether the Secret or its key must be defined
               */
              "optional"?: boolean;
            };
            /**
             * The secret in the service monitor namespace that contains the username for authentication.
             */
            "username"?: {
              /**
               * The key of the secret to select from.  Must be a valid secret key.
               */
              "key": string;
              /**
               * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
               */
              "name"?: string;
              /**
               * Specify whether the Secret or its key must be defined
               */
              "optional"?: boolean;
            };
          };
          /**
           * The secret's key that contains the bearer token to be used by the client for authentication. The secret needs to be in the same namespace as the AlertmanagerConfig object and accessible by the Prometheus Operator.
           */
          "bearerTokenSecret"?: {
            /**
             * The key of the secret to select from.  Must be a valid secret key.
             */
            "key": string;
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
             */
            "name"?: string;
            /**
             * Specify whether the Secret or its key must be defined
             */
            "optional"?: boolean;
          };
          /**
           * FollowRedirects specifies whether the client should follow HTTP 3xx redirects.
           */
          "followRedirects"?: boolean;
          /**
           * OAuth2 client credentials used to fetch a token for the targets.
           */
          "oauth2"?: {
            /**
             * The secret or configmap containing the OAuth2 client id
             */
            "clientId": {
              /**
               * ConfigMap containing data to use for the targets.
               */
              "configMap"?: {
                /**
                 * The key to select.
                 */
                "key": string;
                /**
                 * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
                 */
                "name"?: string;
                /**
                 * Specify whether the ConfigMap or its key must be defined
                 */
                "optional"?: boolean;
              };
              /**
               * Secret containing data to use for the targets.
               */
              "secret"?: {
                /**
                 * The key of the secret to select from.  Must be a valid secret key.
                 */
                "key": string;
                /**
                 * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
                 */
                "name"?: string;
                /**
                 * Specify whether the Secret or its key must be defined
                 */
                "optional"?: boolean;
              };
            };
            /**
             * The secret containing the OAuth2 client secret
             */
            "clientSecret": {
              /**
               * The key of the secret to select from.  Must be a valid secret key.
               */
              "key": string;
              /**
               * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
               */
              "name"?: string;
              /**
               * Specify whether the Secret or its key must be defined
               */
              "optional"?: boolean;
            };
            /**
             * Parameters to append to the token URL
             */
            "endpointParams"?: {
              [key: string]: string;
            };
            /**
             * OAuth2 scopes used for the token request
             */
            "scopes"?: Array<string>;
            /**
             * The URL to fetch the token from
             */
            "tokenUrl": string;
          };
          /**
           * Optional proxy URL.
           */
          "proxyURL"?: string;
          /**
           * TLS configuration for the client.
           */
          "tlsConfig"?: {
            /**
             * Struct containing the CA cert to use for the targets.
             */
            "ca"?: {
              /**
               * ConfigMap containing data to use for the targets.
               */
              "configMap"?: {
                /**
                 * The key to select.
                 */
                "key": string;
                /**
                 * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
                 */
                "name"?: string;
                /**
                 * Specify whether the ConfigMap or its key must be defined
                 */
                "optional"?: boolean;
              };
              /**
               * Secret containing data to use for the targets.
               */
              "secret"?: {
                /**
                 * The key of the secret to select from.  Must be a valid secret key.
                 */
                "key": string;
                /**
                 * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
                 */
                "name"?: string;
                /**
                 * Specify whether the Secret or its key must be defined
                 */
                "optional"?: boolean;
              };
            };
            /**
             * Struct containing the client cert file for the targets.
             */
            "cert"?: {
              /**
               * ConfigMap containing data to use for the targets.
               */
              "configMap"?: {
                /**
                 * The key to select.
                 */
                "key": string;
                /**
                 * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
                 */
                "name"?: string;
                /**
                 * Specify whether the ConfigMap or its key must be defined
                 */
                "optional"?: boolean;
              };
              /**
               * Secret containing data to use for the targets.
               */
              "secret"?: {
                /**
                 * The key of the secret to select from.  Must be a valid secret key.
                 */
                "key": string;
                /**
                 * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
                 */
                "name"?: string;
                /**
                 * Specify whether the Secret or its key must be defined
                 */
                "optional"?: boolean;
              };
            };
            /**
             * Disable target certificate validation.
             */
            "insecureSkipVerify"?: boolean;
            /**
             * Secret containing the client key file for the targets.
             */
            "keySecret"?: {
              /**
               * The key of the secret to select from.  Must be a valid secret key.
               */
              "key": string;
              /**
               * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
               */
              "name"?: string;
              /**
               * Specify whether the Secret or its key must be defined
               */
              "optional"?: boolean;
            };
            /**
             * Used to verify the hostname for the targets.
             */
            "serverName"?: string;
          };
        };
        /**
         * Message template
         */
        "message"?: string;
        /**
         * Parse mode for telegram message
         */
        "parseMode"?: "MarkdownV2" | "Markdown" | "HTML";
        /**
         * Whether to notify about resolved alerts.
         */
        "sendResolved"?: boolean;
      }>;
      /**
       * List of VictorOps configurations.
       */
      "victoropsConfigs"?: Array<{
        /**
         * The secret's key that contains the API key to use when talking to the VictorOps API. The secret needs to be in the same namespace as the AlertmanagerConfig object and accessible by the Prometheus Operator.
         */
        "apiKey"?: {
          /**
           * The key of the secret to select from.  Must be a valid secret key.
           */
          "key": string;
          /**
           * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
           */
          "name"?: string;
          /**
           * Specify whether the Secret or its key must be defined
           */
          "optional"?: boolean;
        };
        /**
         * The VictorOps API URL.
         */
        "apiUrl"?: string;
        /**
         * Additional custom fields for notification.
         */
        "customFields"?: Array<{
          /**
           * Key of the tuple.
           */
          "key": string;
          /**
           * Value of the tuple.
           */
          "value": string;
        }>;
        /**
         * Contains summary of the alerted problem.
         */
        "entityDisplayName"?: string;
        /**
         * The HTTP client's configuration.
         */
        "httpConfig"?: {
          /**
           * Authorization header configuration for the client. This is mutually exclusive with BasicAuth and is only available starting from Alertmanager v0.22+.
           */
          "authorization"?: {
            /**
             * The secret's key that contains the credentials of the request
             */
            "credentials"?: {
              /**
               * The key of the secret to select from.  Must be a valid secret key.
               */
              "key": string;
              /**
               * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
               */
              "name"?: string;
              /**
               * Specify whether the Secret or its key must be defined
               */
              "optional"?: boolean;
            };
            /**
             * Set the authentication type. Defaults to Bearer, Basic will cause an error
             */
            "type"?: string;
          };
          /**
           * BasicAuth for the client. This is mutually exclusive with Authorization. If both are defined, BasicAuth takes precedence.
           */
          "basicAuth"?: {
            /**
             * The secret in the service monitor namespace that contains the password for authentication.
             */
            "password"?: {
              /**
               * The key of the secret to select from.  Must be a valid secret key.
               */
              "key": string;
              /**
               * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
               */
              "name"?: string;
              /**
               * Specify whether the Secret or its key must be defined
               */
              "optional"?: boolean;
            };
            /**
             * The secret in the service monitor namespace that contains the username for authentication.
             */
            "username"?: {
              /**
               * The key of the secret to select from.  Must be a valid secret key.
               */
              "key": string;
              /**
               * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
               */
              "name"?: string;
              /**
               * Specify whether the Secret or its key must be defined
               */
              "optional"?: boolean;
            };
          };
          /**
           * The secret's key that contains the bearer token to be used by the client for authentication. The secret needs to be in the same namespace as the AlertmanagerConfig object and accessible by the Prometheus Operator.
           */
          "bearerTokenSecret"?: {
            /**
             * The key of the secret to select from.  Must be a valid secret key.
             */
            "key": string;
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
             */
            "name"?: string;
            /**
             * Specify whether the Secret or its key must be defined
             */
            "optional"?: boolean;
          };
          /**
           * FollowRedirects specifies whether the client should follow HTTP 3xx redirects.
           */
          "followRedirects"?: boolean;
          /**
           * OAuth2 client credentials used to fetch a token for the targets.
           */
          "oauth2"?: {
            /**
             * The secret or configmap containing the OAuth2 client id
             */
            "clientId": {
              /**
               * ConfigMap containing data to use for the targets.
               */
              "configMap"?: {
                /**
                 * The key to select.
                 */
                "key": string;
                /**
                 * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
                 */
                "name"?: string;
                /**
                 * Specify whether the ConfigMap or its key must be defined
                 */
                "optional"?: boolean;
              };
              /**
               * Secret containing data to use for the targets.
               */
              "secret"?: {
                /**
                 * The key of the secret to select from.  Must be a valid secret key.
                 */
                "key": string;
                /**
                 * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
                 */
                "name"?: string;
                /**
                 * Specify whether the Secret or its key must be defined
                 */
                "optional"?: boolean;
              };
            };
            /**
             * The secret containing the OAuth2 client secret
             */
            "clientSecret": {
              /**
               * The key of the secret to select from.  Must be a valid secret key.
               */
              "key": string;
              /**
               * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
               */
              "name"?: string;
              /**
               * Specify whether the Secret or its key must be defined
               */
              "optional"?: boolean;
            };
            /**
             * Parameters to append to the token URL
             */
            "endpointParams"?: {
              [key: string]: string;
            };
            /**
             * OAuth2 scopes used for the token request
             */
            "scopes"?: Array<string>;
            /**
             * The URL to fetch the token from
             */
            "tokenUrl": string;
          };
          /**
           * Optional proxy URL.
           */
          "proxyURL"?: string;
          /**
           * TLS configuration for the client.
           */
          "tlsConfig"?: {
            /**
             * Struct containing the CA cert to use for the targets.
             */
            "ca"?: {
              /**
               * ConfigMap containing data to use for the targets.
               */
              "configMap"?: {
                /**
                 * The key to select.
                 */
                "key": string;
                /**
                 * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
                 */
                "name"?: string;
                /**
                 * Specify whether the ConfigMap or its key must be defined
                 */
                "optional"?: boolean;
              };
              /**
               * Secret containing data to use for the targets.
               */
              "secret"?: {
                /**
                 * The key of the secret to select from.  Must be a valid secret key.
                 */
                "key": string;
                /**
                 * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
                 */
                "name"?: string;
                /**
                 * Specify whether the Secret or its key must be defined
                 */
                "optional"?: boolean;
              };
            };
            /**
             * Struct containing the client cert file for the targets.
             */
            "cert"?: {
              /**
               * ConfigMap containing data to use for the targets.
               */
              "configMap"?: {
                /**
                 * The key to select.
                 */
                "key": string;
                /**
                 * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
                 */
                "name"?: string;
                /**
                 * Specify whether the ConfigMap or its key must be defined
                 */
                "optional"?: boolean;
              };
              /**
               * Secret containing data to use for the targets.
               */
              "secret"?: {
                /**
                 * The key of the secret to select from.  Must be a valid secret key.
                 */
                "key": string;
                /**
                 * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
                 */
                "name"?: string;
                /**
                 * Specify whether the Secret or its key must be defined
                 */
                "optional"?: boolean;
              };
            };
            /**
             * Disable target certificate validation.
             */
            "insecureSkipVerify"?: boolean;
            /**
             * Secret containing the client key file for the targets.
             */
            "keySecret"?: {
              /**
               * The key of the secret to select from.  Must be a valid secret key.
               */
              "key": string;
              /**
               * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
               */
              "name"?: string;
              /**
               * Specify whether the Secret or its key must be defined
               */
              "optional"?: boolean;
            };
            /**
             * Used to verify the hostname for the targets.
             */
            "serverName"?: string;
          };
        };
        /**
         * Describes the behavior of the alert (CRITICAL, WARNING, INFO).
         */
        "messageType"?: string;
        /**
         * The monitoring tool the state message is from.
         */
        "monitoringTool"?: string;
        /**
         * A key used to map the alert to a team.
         */
        "routingKey"?: string;
        /**
         * Whether or not to notify about resolved alerts.
         */
        "sendResolved"?: boolean;
        /**
         * Contains long explanation of the alerted problem.
         */
        "stateMessage"?: string;
      }>;
      /**
       * List of webhook configurations.
       */
      "webhookConfigs"?: Array<{
        /**
         * HTTP client configuration.
         */
        "httpConfig"?: {
          /**
           * Authorization header configuration for the client. This is mutually exclusive with BasicAuth and is only available starting from Alertmanager v0.22+.
           */
          "authorization"?: {
            /**
             * The secret's key that contains the credentials of the request
             */
            "credentials"?: {
              /**
               * The key of the secret to select from.  Must be a valid secret key.
               */
              "key": string;
              /**
               * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
               */
              "name"?: string;
              /**
               * Specify whether the Secret or its key must be defined
               */
              "optional"?: boolean;
            };
            /**
             * Set the authentication type. Defaults to Bearer, Basic will cause an error
             */
            "type"?: string;
          };
          /**
           * BasicAuth for the client. This is mutually exclusive with Authorization. If both are defined, BasicAuth takes precedence.
           */
          "basicAuth"?: {
            /**
             * The secret in the service monitor namespace that contains the password for authentication.
             */
            "password"?: {
              /**
               * The key of the secret to select from.  Must be a valid secret key.
               */
              "key": string;
              /**
               * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
               */
              "name"?: string;
              /**
               * Specify whether the Secret or its key must be defined
               */
              "optional"?: boolean;
            };
            /**
             * The secret in the service monitor namespace that contains the username for authentication.
             */
            "username"?: {
              /**
               * The key of the secret to select from.  Must be a valid secret key.
               */
              "key": string;
              /**
               * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
               */
              "name"?: string;
              /**
               * Specify whether the Secret or its key must be defined
               */
              "optional"?: boolean;
            };
          };
          /**
           * The secret's key that contains the bearer token to be used by the client for authentication. The secret needs to be in the same namespace as the AlertmanagerConfig object and accessible by the Prometheus Operator.
           */
          "bearerTokenSecret"?: {
            /**
             * The key of the secret to select from.  Must be a valid secret key.
             */
            "key": string;
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
             */
            "name"?: string;
            /**
             * Specify whether the Secret or its key must be defined
             */
            "optional"?: boolean;
          };
          /**
           * FollowRedirects specifies whether the client should follow HTTP 3xx redirects.
           */
          "followRedirects"?: boolean;
          /**
           * OAuth2 client credentials used to fetch a token for the targets.
           */
          "oauth2"?: {
            /**
             * The secret or configmap containing the OAuth2 client id
             */
            "clientId": {
              /**
               * ConfigMap containing data to use for the targets.
               */
              "configMap"?: {
                /**
                 * The key to select.
                 */
                "key": string;
                /**
                 * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
                 */
                "name"?: string;
                /**
                 * Specify whether the ConfigMap or its key must be defined
                 */
                "optional"?: boolean;
              };
              /**
               * Secret containing data to use for the targets.
               */
              "secret"?: {
                /**
                 * The key of the secret to select from.  Must be a valid secret key.
                 */
                "key": string;
                /**
                 * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
                 */
                "name"?: string;
                /**
                 * Specify whether the Secret or its key must be defined
                 */
                "optional"?: boolean;
              };
            };
            /**
             * The secret containing the OAuth2 client secret
             */
            "clientSecret": {
              /**
               * The key of the secret to select from.  Must be a valid secret key.
               */
              "key": string;
              /**
               * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
               */
              "name"?: string;
              /**
               * Specify whether the Secret or its key must be defined
               */
              "optional"?: boolean;
            };
            /**
             * Parameters to append to the token URL
             */
            "endpointParams"?: {
              [key: string]: string;
            };
            /**
             * OAuth2 scopes used for the token request
             */
            "scopes"?: Array<string>;
            /**
             * The URL to fetch the token from
             */
            "tokenUrl": string;
          };
          /**
           * Optional proxy URL.
           */
          "proxyURL"?: string;
          /**
           * TLS configuration for the client.
           */
          "tlsConfig"?: {
            /**
             * Struct containing the CA cert to use for the targets.
             */
            "ca"?: {
              /**
               * ConfigMap containing data to use for the targets.
               */
              "configMap"?: {
                /**
                 * The key to select.
                 */
                "key": string;
                /**
                 * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
                 */
                "name"?: string;
                /**
                 * Specify whether the ConfigMap or its key must be defined
                 */
                "optional"?: boolean;
              };
              /**
               * Secret containing data to use for the targets.
               */
              "secret"?: {
                /**
                 * The key of the secret to select from.  Must be a valid secret key.
                 */
                "key": string;
                /**
                 * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
                 */
                "name"?: string;
                /**
                 * Specify whether the Secret or its key must be defined
                 */
                "optional"?: boolean;
              };
            };
            /**
             * Struct containing the client cert file for the targets.
             */
            "cert"?: {
              /**
               * ConfigMap containing data to use for the targets.
               */
              "configMap"?: {
                /**
                 * The key to select.
                 */
                "key": string;
                /**
                 * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
                 */
                "name"?: string;
                /**
                 * Specify whether the ConfigMap or its key must be defined
                 */
                "optional"?: boolean;
              };
              /**
               * Secret containing data to use for the targets.
               */
              "secret"?: {
                /**
                 * The key of the secret to select from.  Must be a valid secret key.
                 */
                "key": string;
                /**
                 * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
                 */
                "name"?: string;
                /**
                 * Specify whether the Secret or its key must be defined
                 */
                "optional"?: boolean;
              };
            };
            /**
             * Disable target certificate validation.
             */
            "insecureSkipVerify"?: boolean;
            /**
             * Secret containing the client key file for the targets.
             */
            "keySecret"?: {
              /**
               * The key of the secret to select from.  Must be a valid secret key.
               */
              "key": string;
              /**
               * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
               */
              "name"?: string;
              /**
               * Specify whether the Secret or its key must be defined
               */
              "optional"?: boolean;
            };
            /**
             * Used to verify the hostname for the targets.
             */
            "serverName"?: string;
          };
        };
        /**
         * Maximum number of alerts to be sent per webhook message. When 0, all alerts are included.
         */
        "maxAlerts"?: number;
        /**
         * Whether or not to notify about resolved alerts.
         */
        "sendResolved"?: boolean;
        /**
         * The URL to send HTTP POST requests to. `urlSecret` takes precedence over `url`. One of `urlSecret` and `url` should be defined.
         */
        "url"?: string;
        /**
         * The secret's key that contains the webhook URL to send HTTP requests to. `urlSecret` takes precedence over `url`. One of `urlSecret` and `url` should be defined. The secret needs to be in the same namespace as the AlertmanagerConfig object and accessible by the Prometheus Operator.
         */
        "urlSecret"?: {
          /**
           * The key of the secret to select from.  Must be a valid secret key.
           */
          "key": string;
          /**
           * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
           */
          "name"?: string;
          /**
           * Specify whether the Secret or its key must be defined
           */
          "optional"?: boolean;
        };
      }>;
      /**
       * List of WeChat configurations.
       */
      "wechatConfigs"?: Array<{
        "agentID"?: string;
        /**
         * The secret's key that contains the WeChat API key. The secret needs to be in the same namespace as the AlertmanagerConfig object and accessible by the Prometheus Operator.
         */
        "apiSecret"?: {
          /**
           * The key of the secret to select from.  Must be a valid secret key.
           */
          "key": string;
          /**
           * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
           */
          "name"?: string;
          /**
           * Specify whether the Secret or its key must be defined
           */
          "optional"?: boolean;
        };
        /**
         * The WeChat API URL.
         */
        "apiURL"?: string;
        /**
         * The corp id for authentication.
         */
        "corpID"?: string;
        /**
         * HTTP client configuration.
         */
        "httpConfig"?: {
          /**
           * Authorization header configuration for the client. This is mutually exclusive with BasicAuth and is only available starting from Alertmanager v0.22+.
           */
          "authorization"?: {
            /**
             * The secret's key that contains the credentials of the request
             */
            "credentials"?: {
              /**
               * The key of the secret to select from.  Must be a valid secret key.
               */
              "key": string;
              /**
               * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
               */
              "name"?: string;
              /**
               * Specify whether the Secret or its key must be defined
               */
              "optional"?: boolean;
            };
            /**
             * Set the authentication type. Defaults to Bearer, Basic will cause an error
             */
            "type"?: string;
          };
          /**
           * BasicAuth for the client. This is mutually exclusive with Authorization. If both are defined, BasicAuth takes precedence.
           */
          "basicAuth"?: {
            /**
             * The secret in the service monitor namespace that contains the password for authentication.
             */
            "password"?: {
              /**
               * The key of the secret to select from.  Must be a valid secret key.
               */
              "key": string;
              /**
               * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
               */
              "name"?: string;
              /**
               * Specify whether the Secret or its key must be defined
               */
              "optional"?: boolean;
            };
            /**
             * The secret in the service monitor namespace that contains the username for authentication.
             */
            "username"?: {
              /**
               * The key of the secret to select from.  Must be a valid secret key.
               */
              "key": string;
              /**
               * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
               */
              "name"?: string;
              /**
               * Specify whether the Secret or its key must be defined
               */
              "optional"?: boolean;
            };
          };
          /**
           * The secret's key that contains the bearer token to be used by the client for authentication. The secret needs to be in the same namespace as the AlertmanagerConfig object and accessible by the Prometheus Operator.
           */
          "bearerTokenSecret"?: {
            /**
             * The key of the secret to select from.  Must be a valid secret key.
             */
            "key": string;
            /**
             * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
             */
            "name"?: string;
            /**
             * Specify whether the Secret or its key must be defined
             */
            "optional"?: boolean;
          };
          /**
           * FollowRedirects specifies whether the client should follow HTTP 3xx redirects.
           */
          "followRedirects"?: boolean;
          /**
           * OAuth2 client credentials used to fetch a token for the targets.
           */
          "oauth2"?: {
            /**
             * The secret or configmap containing the OAuth2 client id
             */
            "clientId": {
              /**
               * ConfigMap containing data to use for the targets.
               */
              "configMap"?: {
                /**
                 * The key to select.
                 */
                "key": string;
                /**
                 * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
                 */
                "name"?: string;
                /**
                 * Specify whether the ConfigMap or its key must be defined
                 */
                "optional"?: boolean;
              };
              /**
               * Secret containing data to use for the targets.
               */
              "secret"?: {
                /**
                 * The key of the secret to select from.  Must be a valid secret key.
                 */
                "key": string;
                /**
                 * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
                 */
                "name"?: string;
                /**
                 * Specify whether the Secret or its key must be defined
                 */
                "optional"?: boolean;
              };
            };
            /**
             * The secret containing the OAuth2 client secret
             */
            "clientSecret": {
              /**
               * The key of the secret to select from.  Must be a valid secret key.
               */
              "key": string;
              /**
               * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
               */
              "name"?: string;
              /**
               * Specify whether the Secret or its key must be defined
               */
              "optional"?: boolean;
            };
            /**
             * Parameters to append to the token URL
             */
            "endpointParams"?: {
              [key: string]: string;
            };
            /**
             * OAuth2 scopes used for the token request
             */
            "scopes"?: Array<string>;
            /**
             * The URL to fetch the token from
             */
            "tokenUrl": string;
          };
          /**
           * Optional proxy URL.
           */
          "proxyURL"?: string;
          /**
           * TLS configuration for the client.
           */
          "tlsConfig"?: {
            /**
             * Struct containing the CA cert to use for the targets.
             */
            "ca"?: {
              /**
               * ConfigMap containing data to use for the targets.
               */
              "configMap"?: {
                /**
                 * The key to select.
                 */
                "key": string;
                /**
                 * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
                 */
                "name"?: string;
                /**
                 * Specify whether the ConfigMap or its key must be defined
                 */
                "optional"?: boolean;
              };
              /**
               * Secret containing data to use for the targets.
               */
              "secret"?: {
                /**
                 * The key of the secret to select from.  Must be a valid secret key.
                 */
                "key": string;
                /**
                 * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
                 */
                "name"?: string;
                /**
                 * Specify whether the Secret or its key must be defined
                 */
                "optional"?: boolean;
              };
            };
            /**
             * Struct containing the client cert file for the targets.
             */
            "cert"?: {
              /**
               * ConfigMap containing data to use for the targets.
               */
              "configMap"?: {
                /**
                 * The key to select.
                 */
                "key": string;
                /**
                 * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
                 */
                "name"?: string;
                /**
                 * Specify whether the ConfigMap or its key must be defined
                 */
                "optional"?: boolean;
              };
              /**
               * Secret containing data to use for the targets.
               */
              "secret"?: {
                /**
                 * The key of the secret to select from.  Must be a valid secret key.
                 */
                "key": string;
                /**
                 * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
                 */
                "name"?: string;
                /**
                 * Specify whether the Secret or its key must be defined
                 */
                "optional"?: boolean;
              };
            };
            /**
             * Disable target certificate validation.
             */
            "insecureSkipVerify"?: boolean;
            /**
             * Secret containing the client key file for the targets.
             */
            "keySecret"?: {
              /**
               * The key of the secret to select from.  Must be a valid secret key.
               */
              "key": string;
              /**
               * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
               */
              "name"?: string;
              /**
               * Specify whether the Secret or its key must be defined
               */
              "optional"?: boolean;
            };
            /**
             * Used to verify the hostname for the targets.
             */
            "serverName"?: string;
          };
        };
        /**
         * API request data as defined by the WeChat API.
         */
        "message"?: string;
        "messageType"?: string;
        /**
         * Whether or not to notify about resolved alerts.
         */
        "sendResolved"?: boolean;
        "toParty"?: string;
        "toTag"?: string;
        "toUser"?: string;
      }>;
    }>;
    /**
     * The Alertmanager route definition for alerts matching the resource’s namespace. If present, it will be added to the generated Alertmanager configuration as a first-level route.
     */
    "route"?: {
      /**
       * Boolean indicating whether an alert should continue matching subsequent sibling nodes. It will always be overridden to true for the first-level route by the Prometheus operator.
       */
      "continue"?: boolean;
      /**
       * List of labels to group by. Labels must not be repeated (unique list). Special label "..." (aggregate by all possible labels), if provided, must be the only element in the list.
       */
      "groupBy"?: Array<string>;
      /**
       * How long to wait before sending an updated notification. Must match the regular expression`^(([0-9]+)y)?(([0-9]+)w)?(([0-9]+)d)?(([0-9]+)h)?(([0-9]+)m)?(([0-9]+)s)?(([0-9]+)ms)?$` Example: "5m"
       */
      "groupInterval"?: string;
      /**
       * How long to wait before sending the initial notification. Must match the regular expression`^(([0-9]+)y)?(([0-9]+)w)?(([0-9]+)d)?(([0-9]+)h)?(([0-9]+)m)?(([0-9]+)s)?(([0-9]+)ms)?$` Example: "30s"
       */
      "groupWait"?: string;
      /**
       * List of matchers that the alert’s labels should match. For the first level route, the operator removes any existing equality and regexp matcher on the `namespace` label and adds a `namespace: <object namespace>` matcher.
       */
      "matchers"?: Array<{
        /**
         * Match operation available with AlertManager >= v0.22.0 and takes precedence over Regex (deprecated) if non-empty.
         */
        "matchType"?: "!=" | "=" | "=~" | "!~";
        /**
         * Label to match.
         */
        "name": string;
        /**
         * Whether to match on equality (false) or regular-expression (true). Deprecated as of AlertManager >= v0.22.0 where a user should use MatchType instead.
         */
        "regex"?: boolean;
        /**
         * Label value to match.
         */
        "value"?: string;
      }>;
      /**
       * Note: this comment applies to the field definition above but appears below otherwise it gets included in the generated manifest. CRD schema doesn't support self-referential types for now (see https://github.com/kubernetes/kubernetes/issues/62872). We have to use an alternative type to circumvent the limitation. The downside is that the Kube API can't validate the data beyond the fact that it is a valid JSON representation. MuteTimeIntervals is a list of MuteTimeInterval names that will mute this route when matched,
       */
      "muteTimeIntervals"?: Array<string>;
      /**
       * Name of the receiver for this route. If not empty, it should be listed in the `receivers` field.
       */
      "receiver"?: string;
      /**
       * How long to wait before repeating the last notification. Must match the regular expression`^(([0-9]+)y)?(([0-9]+)w)?(([0-9]+)d)?(([0-9]+)h)?(([0-9]+)m)?(([0-9]+)s)?(([0-9]+)ms)?$` Example: "4h"
       */
      "repeatInterval"?: string;
      /**
       * Child routes.
       */
      "routes"?: Array<any>;
    };
  };
}

/**
 * AlertmanagerConfig defines a namespaced AlertmanagerConfig to be aggregated across multiple namespaces configuring one Alertmanager cluster.
 */
export class AlertmanagerConfig extends Model<IAlertmanagerConfig> implements IAlertmanagerConfig {
  "apiVersion": IAlertmanagerConfig["apiVersion"];
  "kind": IAlertmanagerConfig["kind"];
  "metadata"?: IAlertmanagerConfig["metadata"];
  "spec": IAlertmanagerConfig["spec"];

static apiVersion: IAlertmanagerConfig["apiVersion"] = "monitoring.coreos.com/v1alpha1";
static kind: IAlertmanagerConfig["kind"] = "AlertmanagerConfig";
static is = createTypeMetaGuard<IAlertmanagerConfig>(AlertmanagerConfig);

constructor(data?: ModelData<IAlertmanagerConfig>) {
  super({
    apiVersion: AlertmanagerConfig.apiVersion,
    kind: AlertmanagerConfig.kind,
    ...data
  } as IAlertmanagerConfig);
}
}


setValidateFunc(AlertmanagerConfig, validate as ValidateFunc<IAlertmanagerConfig>);
