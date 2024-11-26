import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/CertManagerIoV1Issuer.js";

/**
 * An Issuer represents a certificate issuing authority which can be referenced as part of `issuerRef` fields. It is scoped to a single namespace and can therefore only be referenced by resources within the same namespace.
 */
export interface IIssuer {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "cert-manager.io/v1";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "Issuer";
  "metadata"?: IObjectMeta;
  /**
   * Desired state of the Issuer resource.
   */
  "spec": {
    /**
     * ACME configures this issuer to communicate with a RFC8555 (ACME) server to obtain signed x509 certificates.
     */
    "acme"?: {
      /**
       * Enables or disables generating a new ACME account key. If true, the Issuer resource will \*not\* request a new account but will expect the account key to be supplied via an existing secret. If false, the cert-manager system will generate a new ACME account key for the Issuer. Defaults to false.
       */
      "disableAccountKeyGeneration"?: boolean;
      /**
       * Email is the email address to be associated with the ACME account. This field is optional, but it is strongly recommended to be set. It will be used to contact you in case of issues with your account or certificates, including expiry notification emails. This field may be updated after the account is initially registered.
       */
      "email"?: string;
      /**
       * Enables requesting a Not After date on certificates that matches the duration of the certificate. This is not supported by all ACME servers like Let's Encrypt. If set to true when the ACME server does not support it it will create an error on the Order. Defaults to false.
       */
      "enableDurationFeature"?: boolean;
      /**
       * ExternalAccountBinding is a reference to a CA external account of the ACME server. If set, upon registration cert-manager will attempt to associate the given external account credentials with the registered ACME account.
       */
      "externalAccountBinding"?: {
        /**
         * Deprecated: keyAlgorithm field exists for historical compatibility reasons and should not be used. The algorithm is now hardcoded to HS256 in golang/x/crypto/acme.
         */
        "keyAlgorithm"?: "HS256" | "HS384" | "HS512";
        /**
         * keyID is the ID of the CA key that the External Account is bound to.
         */
        "keyID": string;
        /**
         * keySecretRef is a Secret Key Selector referencing a data item in a Kubernetes Secret which holds the symmetric MAC key of the External Account Binding. The `key` is the index string that is paired with the key data in the Secret and should not be confused with the key data itself, or indeed with the External Account Binding keyID above. The secret key stored in the Secret \*\*must\*\* be un-padded, base64 URL encoded data.
         */
        "keySecretRef": {
          /**
           * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
           */
          "key"?: string;
          /**
           * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
           */
          "name": string;
        };
      };
      /**
       * PreferredChain is the chain to use if the ACME server outputs multiple. PreferredChain is no guarantee that this one gets delivered by the ACME endpoint. For example, for Let's Encrypt's DST crosssign you would use: "DST Root CA X3" or "ISRG Root X1" for the newer Let's Encrypt root CA. This value picks the first certificate bundle in the ACME alternative chains that has a certificate with this value as its issuer's CN
       */
      "preferredChain"?: string;
      /**
       * PrivateKey is the name of a Kubernetes Secret resource that will be used to store the automatically generated ACME account private key. Optionally, a `key` may be specified to select a specific entry within the named Secret resource. If `key` is not specified, a default of `tls.key` will be used.
       */
      "privateKeySecretRef": {
        /**
         * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
         */
        "key"?: string;
        /**
         * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
         */
        "name": string;
      };
      /**
       * Server is the URL used to access the ACME server's 'directory' endpoint. For example, for Let's Encrypt's staging endpoint, you would use: "https://acme-staging-v02.api.letsencrypt.org/directory". Only ACME v2 endpoints (i.e. RFC 8555) are supported.
       */
      "server": string;
      /**
       * Enables or disables validation of the ACME server TLS certificate. If true, requests to the ACME server will not have their TLS certificate validated (i.e. insecure connections will be allowed). Only enable this option in development environments. The cert-manager system installed roots will be used to verify connections to the ACME server if this is false. Defaults to false.
       */
      "skipTLSVerify"?: boolean;
      /**
       * Solvers is a list of challenge solvers that will be used to solve ACME challenges for the matching domains. Solver configurations must be provided in order to obtain certificates from an ACME server. For more information, see: https://cert-manager.io/docs/configuration/acme/
       */
      "solvers"?: Array<{
        /**
         * Configures cert-manager to attempt to complete authorizations by performing the DNS01 challenge flow.
         */
        "dns01"?: {
          /**
           * Use the 'ACME DNS' (https://github.com/joohoi/acme-dns) API to manage DNS01 challenge records.
           */
          "acmeDNS"?: {
            /**
             * A reference to a specific 'key' within a Secret resource. In some instances, `key` is a required field.
             */
            "accountSecretRef": {
              /**
               * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
               */
              "key"?: string;
              /**
               * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               */
              "name": string;
            };
            "host": string;
          };
          /**
           * Use the Akamai DNS zone management API to manage DNS01 challenge records.
           */
          "akamai"?: {
            /**
             * A reference to a specific 'key' within a Secret resource. In some instances, `key` is a required field.
             */
            "accessTokenSecretRef": {
              /**
               * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
               */
              "key"?: string;
              /**
               * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               */
              "name": string;
            };
            /**
             * A reference to a specific 'key' within a Secret resource. In some instances, `key` is a required field.
             */
            "clientSecretSecretRef": {
              /**
               * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
               */
              "key"?: string;
              /**
               * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               */
              "name": string;
            };
            /**
             * A reference to a specific 'key' within a Secret resource. In some instances, `key` is a required field.
             */
            "clientTokenSecretRef": {
              /**
               * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
               */
              "key"?: string;
              /**
               * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               */
              "name": string;
            };
            "serviceConsumerDomain": string;
          };
          /**
           * Use the Microsoft Azure DNS API to manage DNS01 challenge records.
           */
          "azureDNS"?: {
            /**
             * if both this and ClientSecret are left unset MSI will be used
             */
            "clientID"?: string;
            /**
             * if both this and ClientID are left unset MSI will be used
             */
            "clientSecretSecretRef"?: {
              /**
               * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
               */
              "key"?: string;
              /**
               * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               */
              "name": string;
            };
            "environment"?: "AzurePublicCloud" | "AzureChinaCloud" | "AzureGermanCloud" | "AzureUSGovernmentCloud";
            "hostedZoneName"?: string;
            "resourceGroupName": string;
            "subscriptionID": string;
            /**
             * when specifying ClientID and ClientSecret then this field is also needed
             */
            "tenantID"?: string;
          };
          /**
           * Use the Google Cloud DNS API to manage DNS01 challenge records.
           */
          "cloudDNS"?: {
            /**
             * HostedZoneName is an optional field that tells cert-manager in which Cloud DNS zone the challenge record has to be created. If left empty cert-manager will automatically choose a zone.
             */
            "hostedZoneName"?: string;
            "project": string;
            /**
             * A reference to a specific 'key' within a Secret resource. In some instances, `key` is a required field.
             */
            "serviceAccountSecretRef"?: {
              /**
               * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
               */
              "key"?: string;
              /**
               * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               */
              "name": string;
            };
          };
          /**
           * Use the Cloudflare API to manage DNS01 challenge records.
           */
          "cloudflare"?: {
            /**
             * API key to use to authenticate with Cloudflare. Note: using an API token to authenticate is now the recommended method as it allows greater control of permissions.
             */
            "apiKeySecretRef"?: {
              /**
               * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
               */
              "key"?: string;
              /**
               * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               */
              "name": string;
            };
            /**
             * API token used to authenticate with Cloudflare.
             */
            "apiTokenSecretRef"?: {
              /**
               * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
               */
              "key"?: string;
              /**
               * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               */
              "name": string;
            };
            /**
             * Email of the account, only required when using API key based authentication.
             */
            "email"?: string;
          };
          /**
           * CNAMEStrategy configures how the DNS01 provider should handle CNAME records when found in DNS zones.
           */
          "cnameStrategy"?: "None" | "Follow";
          /**
           * Use the DigitalOcean DNS API to manage DNS01 challenge records.
           */
          "digitalocean"?: {
            /**
             * A reference to a specific 'key' within a Secret resource. In some instances, `key` is a required field.
             */
            "tokenSecretRef": {
              /**
               * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
               */
              "key"?: string;
              /**
               * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               */
              "name": string;
            };
          };
          /**
           * Use RFC2136 ("Dynamic Updates in the Domain Name System") (https://datatracker.ietf.org/doc/rfc2136/) to manage DNS01 challenge records.
           */
          "rfc2136"?: {
            /**
             * The IP address or hostname of an authoritative DNS server supporting RFC2136 in the form host:port. If the host is an IPv6 address it must be enclosed in square brackets (e.g [2001:db8::1]) ; port is optional. This field is required.
             */
            "nameserver": string;
            /**
             * The TSIG Algorithm configured in the DNS supporting RFC2136. Used only when ``tsigSecretSecretRef`` and ``tsigKeyName`` are defined. Supported values are (case-insensitive): ``HMACMD5`` (default), ``HMACSHA1``, ``HMACSHA256`` or ``HMACSHA512``.
             */
            "tsigAlgorithm"?: string;
            /**
             * The TSIG Key name configured in the DNS. If ``tsigSecretSecretRef`` is defined, this field is required.
             */
            "tsigKeyName"?: string;
            /**
             * The name of the secret containing the TSIG value. If ``tsigKeyName`` is defined, this field is required.
             */
            "tsigSecretSecretRef"?: {
              /**
               * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
               */
              "key"?: string;
              /**
               * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               */
              "name": string;
            };
          };
          /**
           * Use the AWS Route53 API to manage DNS01 challenge records.
           */
          "route53"?: {
            /**
             * The AccessKeyID is used for authentication. If not set we fall-back to using env vars, shared credentials file or AWS Instance metadata see: https://docs.aws.amazon.com/sdk-for-go/v1/developer-guide/configuring-sdk.html#specifying-credentials
             */
            "accessKeyID"?: string;
            /**
             * If set, the provider will manage only this zone in Route53 and will not do an lookup using the route53:ListHostedZonesByName api call.
             */
            "hostedZoneID"?: string;
            /**
             * Always set the region when using AccessKeyID and SecretAccessKey
             */
            "region": string;
            /**
             * Role is a Role ARN which the Route53 provider will assume using either the explicit credentials AccessKeyID/SecretAccessKey or the inferred credentials from environment variables, shared credentials file or AWS Instance metadata
             */
            "role"?: string;
            /**
             * The SecretAccessKey is used for authentication. If not set we fall-back to using env vars, shared credentials file or AWS Instance metadata https://docs.aws.amazon.com/sdk-for-go/v1/developer-guide/configuring-sdk.html#specifying-credentials
             */
            "secretAccessKeySecretRef"?: {
              /**
               * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
               */
              "key"?: string;
              /**
               * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
               */
              "name": string;
            };
          };
          /**
           * Configure an external webhook based DNS01 challenge solver to manage DNS01 challenge records.
           */
          "webhook"?: {
            /**
             * Additional configuration that should be passed to the webhook apiserver when challenges are processed. This can contain arbitrary JSON data. Secret values should not be specified in this stanza. If secret values are needed (e.g. credentials for a DNS service), you should use a SecretKeySelector to reference a Secret resource. For details on the schema of this field, consult the webhook provider implementation's documentation.
             */
            "config"?: any;
            /**
             * The API group name that should be used when POSTing ChallengePayload resources to the webhook apiserver. This should be the same as the GroupName specified in the webhook provider implementation.
             */
            "groupName": string;
            /**
             * The name of the solver to use, as defined in the webhook provider implementation. This will typically be the name of the provider, e.g. 'cloudflare'.
             */
            "solverName": string;
          };
        };
        /**
         * Configures cert-manager to attempt to complete authorizations by performing the HTTP01 challenge flow. It is not possible to obtain certificates for wildcard domain names (e.g. `\*.example.com`) using the HTTP01 challenge mechanism.
         */
        "http01"?: {
          /**
           * The Gateway API is a sig-network community API that models service networking in Kubernetes (https://gateway-api.sigs.k8s.io/). The Gateway solver will create HTTPRoutes with the specified labels in the same namespace as the challenge. This solver is experimental, and fields / behaviour may change in the future.
           */
          "gatewayHTTPRoute"?: {
            /**
             * The labels that cert-manager will use when creating the temporary HTTPRoute needed for solving the HTTP-01 challenge. These labels must match the label selector of at least one Gateway.
             */
            "labels"?: {
              [key: string]: string;
            };
            /**
             * Optional service type for Kubernetes solver service. Supported values are NodePort or ClusterIP. If unset, defaults to NodePort.
             */
            "serviceType"?: string;
          };
          /**
           * The ingress based HTTP01 challenge solver will solve challenges by creating or modifying Ingress resources in order to route requests for '/.well-known/acme-challenge/XYZ' to 'challenge solver' pods that are provisioned by cert-manager for each Challenge to be completed.
           */
          "ingress"?: {
            /**
             * The ingress class to use when creating Ingress resources to solve ACME challenges that use this challenge solver. Only one of 'class' or 'name' may be specified.
             */
            "class"?: string;
            /**
             * Optional ingress template used to configure the ACME challenge solver ingress used for HTTP01 challenges.
             */
            "ingressTemplate"?: {
              /**
               * ObjectMeta overrides for the ingress used to solve HTTP01 challenges. Only the 'labels' and 'annotations' fields may be set. If labels or annotations overlap with in-built values, the values here will override the in-built values.
               */
              "metadata"?: {
                /**
                 * Annotations that should be added to the created ACME HTTP01 solver ingress.
                 */
                "annotations"?: {
                  [key: string]: string;
                };
                /**
                 * Labels that should be added to the created ACME HTTP01 solver ingress.
                 */
                "labels"?: {
                  [key: string]: string;
                };
              };
            };
            /**
             * The name of the ingress resource that should have ACME challenge solving routes inserted into it in order to solve HTTP01 challenges. This is typically used in conjunction with ingress controllers like ingress-gce, which maintains a 1:1 mapping between external IPs and ingress resources.
             */
            "name"?: string;
            /**
             * Optional pod template used to configure the ACME challenge solver pods used for HTTP01 challenges.
             */
            "podTemplate"?: {
              /**
               * ObjectMeta overrides for the pod used to solve HTTP01 challenges. Only the 'labels' and 'annotations' fields may be set. If labels or annotations overlap with in-built values, the values here will override the in-built values.
               */
              "metadata"?: {
                /**
                 * Annotations that should be added to the create ACME HTTP01 solver pods.
                 */
                "annotations"?: {
                  [key: string]: string;
                };
                /**
                 * Labels that should be added to the created ACME HTTP01 solver pods.
                 */
                "labels"?: {
                  [key: string]: string;
                };
              };
              /**
               * PodSpec defines overrides for the HTTP01 challenge solver pod. Only the 'priorityClassName', 'nodeSelector', 'affinity', 'serviceAccountName' and 'tolerations' fields are supported currently. All other fields will be ignored.
               */
              "spec"?: {
                /**
                 * If specified, the pod's scheduling constraints
                 */
                "affinity"?: {
                  /**
                   * Describes node affinity scheduling rules for the pod.
                   */
                  "nodeAffinity"?: {
                    /**
                     * The scheduler will prefer to schedule pods to nodes that satisfy the affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node matches the corresponding matchExpressions; the node(s) with the highest sum are the most preferred.
                     */
                    "preferredDuringSchedulingIgnoredDuringExecution"?: Array<{
                      /**
                       * A node selector term, associated with the corresponding weight.
                       */
                      "preference": {
                        /**
                         * A list of node selector requirements by node's labels.
                         */
                        "matchExpressions"?: Array<{
                          /**
                           * The label key that the selector applies to.
                           */
                          "key": string;
                          /**
                           * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
                           */
                          "operator": string;
                          /**
                           * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
                           */
                          "values"?: Array<string>;
                        }>;
                        /**
                         * A list of node selector requirements by node's fields.
                         */
                        "matchFields"?: Array<{
                          /**
                           * The label key that the selector applies to.
                           */
                          "key": string;
                          /**
                           * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
                           */
                          "operator": string;
                          /**
                           * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
                           */
                          "values"?: Array<string>;
                        }>;
                      };
                      /**
                       * Weight associated with matching the corresponding nodeSelectorTerm, in the range 1-100.
                       */
                      "weight": number;
                    }>;
                    /**
                     * If the affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to an update), the system may or may not try to eventually evict the pod from its node.
                     */
                    "requiredDuringSchedulingIgnoredDuringExecution"?: {
                      /**
                       * Required. A list of node selector terms. The terms are ORed.
                       */
                      "nodeSelectorTerms": Array<{
                        /**
                         * A list of node selector requirements by node's labels.
                         */
                        "matchExpressions"?: Array<{
                          /**
                           * The label key that the selector applies to.
                           */
                          "key": string;
                          /**
                           * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
                           */
                          "operator": string;
                          /**
                           * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
                           */
                          "values"?: Array<string>;
                        }>;
                        /**
                         * A list of node selector requirements by node's fields.
                         */
                        "matchFields"?: Array<{
                          /**
                           * The label key that the selector applies to.
                           */
                          "key": string;
                          /**
                           * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
                           */
                          "operator": string;
                          /**
                           * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
                           */
                          "values"?: Array<string>;
                        }>;
                      }>;
                    };
                  };
                  /**
                   * Describes pod affinity scheduling rules (e.g. co-locate this pod in the same node, zone, etc. as some other pod(s)).
                   */
                  "podAffinity"?: {
                    /**
                     * The scheduler will prefer to schedule pods to nodes that satisfy the affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node has pods which matches the corresponding podAffinityTerm; the node(s) with the highest sum are the most preferred.
                     */
                    "preferredDuringSchedulingIgnoredDuringExecution"?: Array<{
                      /**
                       * Required. A pod affinity term, associated with the corresponding weight.
                       */
                      "podAffinityTerm": {
                        /**
                         * A label query over a set of resources, in this case pods.
                         */
                        "labelSelector"?: {
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
                         * A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means "this pod's namespace". An empty selector ({}) matches all namespaces. This field is alpha-level and is only honored when PodAffinityNamespaceSelector feature is enabled.
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
                         * namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means "this pod's namespace"
                         */
                        "namespaces"?: Array<string>;
                        /**
                         * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
                         */
                        "topologyKey": string;
                      };
                      /**
                       * weight associated with matching the corresponding podAffinityTerm, in the range 1-100.
                       */
                      "weight": number;
                    }>;
                    /**
                     * If the affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system may or may not try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied.
                     */
                    "requiredDuringSchedulingIgnoredDuringExecution"?: Array<{
                      /**
                       * A label query over a set of resources, in this case pods.
                       */
                      "labelSelector"?: {
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
                       * A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means "this pod's namespace". An empty selector ({}) matches all namespaces. This field is alpha-level and is only honored when PodAffinityNamespaceSelector feature is enabled.
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
                       * namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means "this pod's namespace"
                       */
                      "namespaces"?: Array<string>;
                      /**
                       * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
                       */
                      "topologyKey": string;
                    }>;
                  };
                  /**
                   * Describes pod anti-affinity scheduling rules (e.g. avoid putting this pod in the same node, zone, etc. as some other pod(s)).
                   */
                  "podAntiAffinity"?: {
                    /**
                     * The scheduler will prefer to schedule pods to nodes that satisfy the anti-affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling anti-affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node has pods which matches the corresponding podAffinityTerm; the node(s) with the highest sum are the most preferred.
                     */
                    "preferredDuringSchedulingIgnoredDuringExecution"?: Array<{
                      /**
                       * Required. A pod affinity term, associated with the corresponding weight.
                       */
                      "podAffinityTerm": {
                        /**
                         * A label query over a set of resources, in this case pods.
                         */
                        "labelSelector"?: {
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
                         * A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means "this pod's namespace". An empty selector ({}) matches all namespaces. This field is alpha-level and is only honored when PodAffinityNamespaceSelector feature is enabled.
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
                         * namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means "this pod's namespace"
                         */
                        "namespaces"?: Array<string>;
                        /**
                         * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
                         */
                        "topologyKey": string;
                      };
                      /**
                       * weight associated with matching the corresponding podAffinityTerm, in the range 1-100.
                       */
                      "weight": number;
                    }>;
                    /**
                     * If the anti-affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the anti-affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system may or may not try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied.
                     */
                    "requiredDuringSchedulingIgnoredDuringExecution"?: Array<{
                      /**
                       * A label query over a set of resources, in this case pods.
                       */
                      "labelSelector"?: {
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
                       * A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means "this pod's namespace". An empty selector ({}) matches all namespaces. This field is alpha-level and is only honored when PodAffinityNamespaceSelector feature is enabled.
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
                       * namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means "this pod's namespace"
                       */
                      "namespaces"?: Array<string>;
                      /**
                       * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
                       */
                      "topologyKey": string;
                    }>;
                  };
                };
                /**
                 * NodeSelector is a selector which must be true for the pod to fit on a node. Selector which must match a node's labels for the pod to be scheduled on that node. More info: https://kubernetes.io/docs/concepts/configuration/assign-pod-node/
                 */
                "nodeSelector"?: {
                  [key: string]: string;
                };
                /**
                 * If specified, the pod's priorityClassName.
                 */
                "priorityClassName"?: string;
                /**
                 * If specified, the pod's service account
                 */
                "serviceAccountName"?: string;
                /**
                 * If specified, the pod's tolerations.
                 */
                "tolerations"?: Array<{
                  /**
                   * Effect indicates the taint effect to match. Empty means match all taint effects. When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute.
                   */
                  "effect"?: string;
                  /**
                   * Key is the taint key that the toleration applies to. Empty means match all taint keys. If the key is empty, operator must be Exists; this combination means to match all values and all keys.
                   */
                  "key"?: string;
                  /**
                   * Operator represents a key's relationship to the value. Valid operators are Exists and Equal. Defaults to Equal. Exists is equivalent to wildcard for value, so that a pod can tolerate all taints of a particular category.
                   */
                  "operator"?: string;
                  /**
                   * TolerationSeconds represents the period of time the toleration (which must be of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default, it is not set, which means tolerate the taint forever (do not evict). Zero and negative values will be treated as 0 (evict immediately) by the system.
                   */
                  "tolerationSeconds"?: number;
                  /**
                   * Value is the taint value the toleration matches to. If the operator is Exists, the value should be empty, otherwise just a regular string.
                   */
                  "value"?: string;
                }>;
              };
            };
            /**
             * Optional service type for Kubernetes solver service. Supported values are NodePort or ClusterIP. If unset, defaults to NodePort.
             */
            "serviceType"?: string;
          };
        };
        /**
         * Selector selects a set of DNSNames on the Certificate resource that should be solved using this challenge solver. If not specified, the solver will be treated as the 'default' solver with the lowest priority, i.e. if any other solver has a more specific match, it will be used instead.
         */
        "selector"?: {
          /**
           * List of DNSNames that this solver will be used to solve. If specified and a match is found, a dnsNames selector will take precedence over a dnsZones selector. If multiple solvers match with the same dnsNames value, the solver with the most matching labels in matchLabels will be selected. If neither has more matches, the solver defined earlier in the list will be selected.
           */
          "dnsNames"?: Array<string>;
          /**
           * List of DNSZones that this solver will be used to solve. The most specific DNS zone match specified here will take precedence over other DNS zone matches, so a solver specifying sys.example.com will be selected over one specifying example.com for the domain www.sys.example.com. If multiple solvers match with the same dnsZones value, the solver with the most matching labels in matchLabels will be selected. If neither has more matches, the solver defined earlier in the list will be selected.
           */
          "dnsZones"?: Array<string>;
          /**
           * A label selector that is used to refine the set of certificate's that this challenge solver will apply to.
           */
          "matchLabels"?: {
            [key: string]: string;
          };
        };
      }>;
    };
    /**
     * CA configures this issuer to sign certificates using a signing CA keypair stored in a Secret resource. This is used to build internal PKIs that are managed by cert-manager.
     */
    "ca"?: {
      /**
       * The CRL distribution points is an X.509 v3 certificate extension which identifies the location of the CRL from which the revocation of this certificate can be checked. If not set, certificates will be issued without distribution points set.
       */
      "crlDistributionPoints"?: Array<string>;
      /**
       * The OCSP server list is an X.509 v3 extension that defines a list of URLs of OCSP responders. The OCSP responders can be queried for the revocation status of an issued certificate. If not set, the certificate will be issued with no OCSP servers set. For example, an OCSP server URL could be "http://ocsp.int-x3.letsencrypt.org".
       */
      "ocspServers"?: Array<string>;
      /**
       * SecretName is the name of the secret used to sign Certificates issued by this Issuer.
       */
      "secretName": string;
    };
    /**
     * SelfSigned configures this issuer to 'self sign' certificates using the private key used to create the CertificateRequest object.
     */
    "selfSigned"?: {
      /**
       * The CRL distribution points is an X.509 v3 certificate extension which identifies the location of the CRL from which the revocation of this certificate can be checked. If not set certificate will be issued without CDP. Values are strings.
       */
      "crlDistributionPoints"?: Array<string>;
    };
    /**
     * Vault configures this issuer to sign certificates using a HashiCorp Vault PKI backend.
     */
    "vault"?: {
      /**
       * Auth configures how cert-manager authenticates with the Vault server.
       */
      "auth": {
        /**
         * AppRole authenticates with Vault using the App Role auth mechanism, with the role and secret stored in a Kubernetes Secret resource.
         */
        "appRole"?: {
          /**
           * Path where the App Role authentication backend is mounted in Vault, e.g: "approle"
           */
          "path": string;
          /**
           * RoleID configured in the App Role authentication backend when setting up the authentication backend in Vault.
           */
          "roleId": string;
          /**
           * Reference to a key in a Secret that contains the App Role secret used to authenticate with Vault. The `key` field must be specified and denotes which entry within the Secret resource is used as the app role secret.
           */
          "secretRef": {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            "key"?: string;
            /**
             * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name": string;
          };
        };
        /**
         * Kubernetes authenticates with Vault by passing the ServiceAccount token stored in the named Secret resource to the Vault server.
         */
        "kubernetes"?: {
          /**
           * The Vault mountPath here is the mount path to use when authenticating with Vault. For example, setting a value to `/v1/auth/foo`, will use the path `/v1/auth/foo/login` to authenticate with Vault. If unspecified, the default value "/v1/auth/kubernetes" will be used.
           */
          "mountPath"?: string;
          /**
           * A required field containing the Vault Role to assume. A Role binds a Kubernetes ServiceAccount with a set of Vault policies.
           */
          "role": string;
          /**
           * The required Secret field containing a Kubernetes ServiceAccount JWT used for authenticating with Vault. Use of 'ambient credentials' is not supported.
           */
          "secretRef": {
            /**
             * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
             */
            "key"?: string;
            /**
             * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            "name": string;
          };
        };
        /**
         * TokenSecretRef authenticates with Vault by presenting a token.
         */
        "tokenSecretRef"?: {
          /**
           * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
           */
          "key"?: string;
          /**
           * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
           */
          "name": string;
        };
      };
      /**
       * PEM-encoded CA bundle (base64-encoded) used to validate Vault server certificate. Only used if the Server URL is using HTTPS protocol. This parameter is ignored for plain HTTP protocol connection. If not set the system root certificates are used to validate the TLS connection.
       */
      "caBundle"?: string;
      /**
       * Name of the vault namespace. Namespaces is a set of features within Vault Enterprise that allows Vault environments to support Secure Multi-tenancy. e.g: "ns1" More about namespaces can be found here https://www.vaultproject.io/docs/enterprise/namespaces
       */
      "namespace"?: string;
      /**
       * Path is the mount path of the Vault PKI backend's `sign` endpoint, e.g: "my_pki_mount/sign/my-role-name".
       */
      "path": string;
      /**
       * Server is the connection address for the Vault server, e.g: "https://vault.example.com:8200".
       */
      "server": string;
    };
    /**
     * Venafi configures this issuer to sign certificates using a Venafi TPP or Venafi Cloud policy zone.
     */
    "venafi"?: {
      /**
       * Cloud specifies the Venafi cloud configuration settings. Only one of TPP or Cloud may be specified.
       */
      "cloud"?: {
        /**
         * APITokenSecretRef is a secret key selector for the Venafi Cloud API token.
         */
        "apiTokenSecretRef": {
          /**
           * The key of the entry in the Secret resource's `data` field to be used. Some instances of this field may be defaulted, in others it may be required.
           */
          "key"?: string;
          /**
           * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
           */
          "name": string;
        };
        /**
         * URL is the base URL for Venafi Cloud. Defaults to "https://api.venafi.cloud/v1".
         */
        "url"?: string;
      };
      /**
       * TPP specifies Trust Protection Platform configuration settings. Only one of TPP or Cloud may be specified.
       */
      "tpp"?: {
        /**
         * CABundle is a PEM encoded TLS certificate to use to verify connections to the TPP instance. If specified, system roots will not be used and the issuing CA for the TPP instance must be verifiable using the provided root. If not specified, the connection will be verified using the cert-manager system root certificates.
         */
        "caBundle"?: string;
        /**
         * CredentialsRef is a reference to a Secret containing the username and password for the TPP server. The secret must contain two keys, 'username' and 'password'.
         */
        "credentialsRef": {
          /**
           * Name of the resource being referred to. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
           */
          "name": string;
        };
        /**
         * URL is the base URL for the vedsdk endpoint of the Venafi TPP instance, for example: "https://tpp.example.com/vedsdk".
         */
        "url": string;
      };
      /**
       * Zone is the Venafi Policy Zone to use for this issuer. All requests made to the Venafi platform will be restricted by the named zone policy. This field is required.
       */
      "zone": string;
    };
  };
  /**
   * Status of the Issuer. This is set and managed automatically.
   */
  "status"?: {
    /**
     * ACME specific status options. This field should only be set if the Issuer is configured to use an ACME server to issue certificates.
     */
    "acme"?: {
      /**
       * LastRegisteredEmail is the email associated with the latest registered ACME account, in order to track changes made to registered account associated with the  Issuer
       */
      "lastRegisteredEmail"?: string;
      /**
       * URI is the unique account identifier, which can also be used to retrieve account details from the CA
       */
      "uri"?: string;
    };
    /**
     * List of status conditions to indicate the status of a CertificateRequest. Known condition types are `Ready`.
     */
    "conditions"?: Array<{
      /**
       * LastTransitionTime is the timestamp corresponding to the last status change of this condition.
       */
      "lastTransitionTime"?: string;
      /**
       * Message is a human readable description of the details of the last transition, complementing reason.
       */
      "message"?: string;
      /**
       * If set, this represents the .metadata.generation that the condition was set based upon. For instance, if .metadata.generation is currently 12, but the .status.condition[x].observedGeneration is 9, the condition is out of date with respect to the current state of the Issuer.
       */
      "observedGeneration"?: number;
      /**
       * Reason is a brief machine readable explanation for the condition's last transition.
       */
      "reason"?: string;
      /**
       * Status of the condition, one of (`True`, `False`, `Unknown`).
       */
      "status": "True" | "False" | "Unknown";
      /**
       * Type of the condition, known values are (`Ready`).
       */
      "type": string;
    }>;
  };
}

/**
 * An Issuer represents a certificate issuing authority which can be referenced as part of `issuerRef` fields. It is scoped to a single namespace and can therefore only be referenced by resources within the same namespace.
 */
export class Issuer extends Model<IIssuer> implements IIssuer {
  "apiVersion": IIssuer["apiVersion"];
  "kind": IIssuer["kind"];
  "metadata"?: IIssuer["metadata"];
  "spec": IIssuer["spec"];
  "status"?: IIssuer["status"];

static apiVersion: IIssuer["apiVersion"] = "cert-manager.io/v1";
static kind: IIssuer["kind"] = "Issuer";
static is = createTypeMetaGuard<IIssuer>(Issuer);

constructor(data?: ModelData<IIssuer>) {
  super({
    apiVersion: Issuer.apiVersion,
    kind: Issuer.kind,
    ...data
  } as IIssuer);
}
}


setValidateFunc(Issuer, validate as ValidateFunc<IIssuer>);
