import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/MonitoringCoreosComV1ServiceMonitor.js";

/**
 * ServiceMonitor defines monitoring for a set of services.
 */
export interface IServiceMonitor {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "monitoring.coreos.com/v1";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "ServiceMonitor";
  "metadata"?: IObjectMeta;
  /**
   * Specification of desired Service selection for target discovery by Prometheus.
   */
  "spec": {
    /**
     * A list of endpoints allowed as part of this ServiceMonitor.
     */
    "endpoints": Array<{
      /**
       * Authorization section for this endpoint
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
       * BasicAuth allow an endpoint to authenticate over basic authentication More info: https://prometheus.io/docs/operating/configuration/#endpoints
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
       * File to read bearer token for scraping targets.
       */
      "bearerTokenFile"?: string;
      /**
       * Secret to mount to read bearer token for scraping targets. The secret needs to be in the same namespace as the service monitor and accessible by the Prometheus Operator.
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
       * FollowRedirects configures whether scrape requests follow HTTP 3xx redirects.
       */
      "followRedirects"?: boolean;
      /**
       * HonorLabels chooses the metric's labels on collisions with target labels.
       */
      "honorLabels"?: boolean;
      /**
       * HonorTimestamps controls whether Prometheus respects the timestamps present in scraped data.
       */
      "honorTimestamps"?: boolean;
      /**
       * Interval at which metrics should be scraped If not specified Prometheus' global scrape interval is used.
       */
      "interval"?: string;
      /**
       * MetricRelabelConfigs to apply to samples before ingestion.
       */
      "metricRelabelings"?: Array<{
        /**
         * Action to perform based on regex matching. Default is 'replace'
         */
        "action"?: "replace" | "keep" | "drop" | "hashmod" | "labelmap" | "labeldrop" | "labelkeep";
        /**
         * Modulus to take of the hash of the source label values.
         */
        "modulus"?: number;
        /**
         * Regular expression against which the extracted value is matched. Default is '(.\*)'
         */
        "regex"?: string;
        /**
         * Replacement value against which a regex replace is performed if the regular expression matches. Regex capture groups are available. Default is '$1'
         */
        "replacement"?: string;
        /**
         * Separator placed between concatenated source label values. default is ';'.
         */
        "separator"?: string;
        /**
         * The source labels select values from existing labels. Their content is concatenated using the configured separator and matched against the configured regular expression for the replace, keep, and drop actions.
         */
        "sourceLabels"?: Array<string>;
        /**
         * Label to which the resulting value is written in a replace action. It is mandatory for replace actions. Regex capture groups are available.
         */
        "targetLabel"?: string;
      }>;
      /**
       * OAuth2 for the URL. Only valid in Prometheus versions 2.27.0 and newer.
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
       * Optional HTTP URL parameters
       */
      "params"?: {
        [key: string]: Array<string>;
      };
      /**
       * HTTP path to scrape for metrics.
       */
      "path"?: string;
      /**
       * Name of the service port this endpoint refers to. Mutually exclusive with targetPort.
       */
      "port"?: string;
      /**
       * ProxyURL eg http://proxyserver:2195 Directs scrapes to proxy through this endpoint.
       */
      "proxyUrl"?: string;
      /**
       * RelabelConfigs to apply to samples before scraping. Prometheus Operator automatically adds relabelings for a few standard Kubernetes fields. The original scrape job's name is available via the `__tmp_prometheus_job_name` label. More info: https://prometheus.io/docs/prometheus/latest/configuration/configuration/#relabel_config
       */
      "relabelings"?: Array<{
        /**
         * Action to perform based on regex matching. Default is 'replace'
         */
        "action"?: "replace" | "keep" | "drop" | "hashmod" | "labelmap" | "labeldrop" | "labelkeep";
        /**
         * Modulus to take of the hash of the source label values.
         */
        "modulus"?: number;
        /**
         * Regular expression against which the extracted value is matched. Default is '(.\*)'
         */
        "regex"?: string;
        /**
         * Replacement value against which a regex replace is performed if the regular expression matches. Regex capture groups are available. Default is '$1'
         */
        "replacement"?: string;
        /**
         * Separator placed between concatenated source label values. default is ';'.
         */
        "separator"?: string;
        /**
         * The source labels select values from existing labels. Their content is concatenated using the configured separator and matched against the configured regular expression for the replace, keep, and drop actions.
         */
        "sourceLabels"?: Array<string>;
        /**
         * Label to which the resulting value is written in a replace action. It is mandatory for replace actions. Regex capture groups are available.
         */
        "targetLabel"?: string;
      }>;
      /**
       * HTTP scheme to use for scraping.
       */
      "scheme"?: string;
      /**
       * Timeout after which the scrape is ended If not specified, the Prometheus global scrape timeout is used unless it is less than `Interval` in which the latter is used.
       */
      "scrapeTimeout"?: string;
      /**
       * Name or number of the target port of the Pod behind the Service, the port must be specified with container port property. Mutually exclusive with port.
       */
      "targetPort"?: number | string;
      /**
       * TLS configuration to use when scraping the endpoint
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
         * Path to the CA cert in the Prometheus container to use for the targets.
         */
        "caFile"?: string;
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
         * Path to the client cert file in the Prometheus container for the targets.
         */
        "certFile"?: string;
        /**
         * Disable target certificate validation.
         */
        "insecureSkipVerify"?: boolean;
        /**
         * Path to the client key file in the Prometheus container for the targets.
         */
        "keyFile"?: string;
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
    }>;
    /**
     * Chooses the label of the Kubernetes `Endpoints`. Its value will be used for the `job`-label's value of the created metrics. 
     *  Default & fallback value: the name of the respective Kubernetes `Endpoint`.
     */
    "jobLabel"?: string;
    /**
     * Per-scrape limit on number of labels that will be accepted for a sample. Only valid in Prometheus versions 2.27.0 and newer.
     */
    "labelLimit"?: number;
    /**
     * Per-scrape limit on length of labels name that will be accepted for a sample. Only valid in Prometheus versions 2.27.0 and newer.
     */
    "labelNameLengthLimit"?: number;
    /**
     * Per-scrape limit on length of labels value that will be accepted for a sample. Only valid in Prometheus versions 2.27.0 and newer.
     */
    "labelValueLengthLimit"?: number;
    /**
     * Selector to select which namespaces the Kubernetes Endpoints objects are discovered from.
     */
    "namespaceSelector"?: {
      /**
       * Boolean describing whether all namespaces are selected in contrast to a list restricting them.
       */
      "any"?: boolean;
      /**
       * List of namespace names to select from.
       */
      "matchNames"?: Array<string>;
    };
    /**
     * PodTargetLabels transfers labels on the Kubernetes `Pod` onto the created metrics.
     */
    "podTargetLabels"?: Array<string>;
    /**
     * SampleLimit defines per-scrape limit on number of scraped samples that will be accepted.
     */
    "sampleLimit"?: number;
    /**
     * Selector to select Endpoints objects.
     */
    "selector": {
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
     * TargetLabels transfers labels from the Kubernetes `Service` onto the created metrics.
     */
    "targetLabels"?: Array<string>;
    /**
     * TargetLimit defines a limit on the number of scraped targets that will be accepted.
     */
    "targetLimit"?: number;
  };
}

/**
 * ServiceMonitor defines monitoring for a set of services.
 */
export class ServiceMonitor extends Model<IServiceMonitor> implements IServiceMonitor {
  "apiVersion": IServiceMonitor["apiVersion"];
  "kind": IServiceMonitor["kind"];
  "metadata"?: IServiceMonitor["metadata"];
  "spec": IServiceMonitor["spec"];

static apiVersion: IServiceMonitor["apiVersion"] = "monitoring.coreos.com/v1";
static kind: IServiceMonitor["kind"] = "ServiceMonitor";
static is = createTypeMetaGuard<IServiceMonitor>(ServiceMonitor);

constructor(data?: ModelData<IServiceMonitor>) {
  super({
    apiVersion: ServiceMonitor.apiVersion,
    kind: ServiceMonitor.kind,
    ...data
  } as IServiceMonitor);
}
}


setValidateFunc(ServiceMonitor, validate as ValidateFunc<IServiceMonitor>);
