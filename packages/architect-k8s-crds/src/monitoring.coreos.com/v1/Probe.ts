import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/MonitoringCoreosComV1Probe.js";

/**
 * Probe defines monitoring for a set of static targets or ingresses.
 */
export interface IProbe {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "monitoring.coreos.com/v1";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "Probe";
  "metadata"?: IObjectMeta;
  /**
   * Specification of desired Ingress selection for target discovery by Prometheus.
   */
  "spec": {
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
     * BasicAuth allow an endpoint to authenticate over basic authentication. More info: https://prometheus.io/docs/operating/configuration/#endpoint
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
     * Secret to mount to read bearer token for scraping targets. The secret needs to be in the same namespace as the probe and accessible by the Prometheus Operator.
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
     * Interval at which targets are probed using the configured prober. If not specified Prometheus' global scrape interval is used.
     */
    "interval"?: string;
    /**
     * The job name assigned to scraped metrics by default.
     */
    "jobName"?: string;
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
     * The module to use for probing specifying how to probe the target. Example module configuring in the blackbox exporter: https://github.com/prometheus/blackbox_exporter/blob/master/example.yml
     */
    "module"?: string;
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
     * Specification for the prober to use for probing targets. The prober.URL parameter is required. Targets cannot be probed if left empty.
     */
    "prober"?: {
      /**
       * Path to collect metrics from. Defaults to `/probe`.
       */
      "path"?: string;
      /**
       * Optional ProxyURL.
       */
      "proxyUrl"?: string;
      /**
       * HTTP scheme to use for scraping. Defaults to `http`.
       */
      "scheme"?: string;
      /**
       * Mandatory URL of the prober.
       */
      "url": string;
    };
    /**
     * SampleLimit defines per-scrape limit on number of scraped samples that will be accepted.
     */
    "sampleLimit"?: number;
    /**
     * Timeout for scraping metrics from the Prometheus exporter. If not specified, the Prometheus global scrape interval is used.
     */
    "scrapeTimeout"?: string;
    /**
     * TargetLimit defines a limit on the number of scraped targets that will be accepted.
     */
    "targetLimit"?: number;
    /**
     * Targets defines a set of static or dynamically discovered targets to probe.
     */
    "targets"?: {
      /**
       * ingress defines the Ingress objects to probe and the relabeling configuration. If `staticConfig` is also defined, `staticConfig` takes precedence.
       */
      "ingress"?: {
        /**
         * From which namespaces to select Ingress objects.
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
         * RelabelConfigs to apply to the label set of the target before it gets scraped. The original ingress address is available via the `__tmp_prometheus_ingress_address` label. It can be used to customize the probed URL. The original scrape job's name is available via the `__tmp_prometheus_job_name` label. More info: https://prometheus.io/docs/prometheus/latest/configuration/configuration/#relabel_config
         */
        "relabelingConfigs"?: Array<{
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
         * Selector to select the Ingress objects.
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
       * staticConfig defines the static list of targets to probe and the relabeling configuration. If `ingress` is also defined, `staticConfig` takes precedence. More info: https://prometheus.io/docs/prometheus/latest/configuration/configuration/#static_config.
       */
      "staticConfig"?: {
        /**
         * Labels assigned to all metrics scraped from the targets.
         */
        "labels"?: {
          [key: string]: string;
        };
        /**
         * RelabelConfigs to apply to the label set of the targets before it gets scraped. More info: https://prometheus.io/docs/prometheus/latest/configuration/configuration/#relabel_config
         */
        "relabelingConfigs"?: Array<{
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
         * The list of hosts to probe.
         */
        "static"?: Array<string>;
      };
    };
    /**
     * TLS configuration to use when scraping the endpoint.
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
}

/**
 * Probe defines monitoring for a set of static targets or ingresses.
 */
export class Probe extends Model<IProbe> implements IProbe {
  "apiVersion": IProbe["apiVersion"];
  "kind": IProbe["kind"];
  "metadata"?: IProbe["metadata"];
  "spec": IProbe["spec"];

static apiVersion: IProbe["apiVersion"] = "monitoring.coreos.com/v1";
static kind: IProbe["kind"] = "Probe";
static is = createTypeMetaGuard<IProbe>(Probe);

constructor(data?: ModelData<IProbe>) {
  super({
    apiVersion: Probe.apiVersion,
    kind: Probe.kind,
    ...data
  } as IProbe);
}
}


setValidateFunc(Probe, validate as ValidateFunc<IProbe>);
