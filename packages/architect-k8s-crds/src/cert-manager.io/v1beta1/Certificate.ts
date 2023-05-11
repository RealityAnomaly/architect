import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { addSchema } from "@kubernetes-models/apimachinery/_schemas/IoK8sApimachineryPkgApisMetaV1ObjectMeta";
import { Model, setSchema, ModelData, createTypeMetaGuard } from "@kubernetes-models/base";
import { register } from "@kubernetes-models/validate";

const schemaId = "cert-manager.io.v1beta1.Certificate";
const schema = {
  "type": "object",
  "properties": {
    "apiVersion": {
      "type": "string",
      "enum": [
        "cert-manager.io/v1beta1"
      ]
    },
    "kind": {
      "type": "string",
      "enum": [
        "Certificate"
      ]
    },
    "metadata": {
      "oneOf": [
        {
          "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta#"
        },
        {
          "type": "null"
        }
      ]
    },
    "spec": {
      "properties": {
        "commonName": {
          "type": "string",
          "nullable": true
        },
        "dnsNames": {
          "items": {
            "type": "string"
          },
          "type": "array",
          "nullable": true
        },
        "duration": {
          "type": "string",
          "nullable": true
        },
        "emailSANs": {
          "items": {
            "type": "string"
          },
          "type": "array",
          "nullable": true
        },
        "encodeUsagesInRequest": {
          "type": "boolean",
          "nullable": true
        },
        "ipAddresses": {
          "items": {
            "type": "string"
          },
          "type": "array",
          "nullable": true
        },
        "isCA": {
          "type": "boolean",
          "nullable": true
        },
        "issuerRef": {
          "properties": {
            "group": {
              "type": "string",
              "nullable": true
            },
            "kind": {
              "type": "string",
              "nullable": true
            },
            "name": {
              "type": "string"
            }
          },
          "required": [
            "name"
          ],
          "type": "object"
        },
        "keystores": {
          "properties": {
            "jks": {
              "properties": {
                "create": {
                  "type": "boolean"
                },
                "passwordSecretRef": {
                  "properties": {
                    "key": {
                      "type": "string",
                      "nullable": true
                    },
                    "name": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name"
                  ],
                  "type": "object"
                }
              },
              "required": [
                "create",
                "passwordSecretRef"
              ],
              "type": "object",
              "nullable": true
            },
            "pkcs12": {
              "properties": {
                "create": {
                  "type": "boolean"
                },
                "passwordSecretRef": {
                  "properties": {
                    "key": {
                      "type": "string",
                      "nullable": true
                    },
                    "name": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "name"
                  ],
                  "type": "object"
                }
              },
              "required": [
                "create",
                "passwordSecretRef"
              ],
              "type": "object",
              "nullable": true
            }
          },
          "type": "object",
          "nullable": true
        },
        "privateKey": {
          "properties": {
            "algorithm": {
              "enum": [
                "RSA",
                "ECDSA"
              ],
              "type": "string",
              "nullable": true
            },
            "encoding": {
              "enum": [
                "PKCS1",
                "PKCS8"
              ],
              "type": "string",
              "nullable": true
            },
            "rotationPolicy": {
              "type": "string",
              "nullable": true
            },
            "size": {
              "type": "integer",
              "nullable": true
            }
          },
          "type": "object",
          "nullable": true
        },
        "renewBefore": {
          "type": "string",
          "nullable": true
        },
        "revisionHistoryLimit": {
          "format": "int32",
          "type": "integer",
          "nullable": true
        },
        "secretName": {
          "type": "string"
        },
        "secretTemplate": {
          "properties": {
            "annotations": {
              "additionalProperties": {
                "type": "string"
              },
              "type": "object",
              "properties": {},
              "nullable": true
            },
            "labels": {
              "additionalProperties": {
                "type": "string"
              },
              "type": "object",
              "properties": {},
              "nullable": true
            }
          },
          "type": "object",
          "nullable": true
        },
        "subject": {
          "properties": {
            "countries": {
              "items": {
                "type": "string"
              },
              "type": "array",
              "nullable": true
            },
            "localities": {
              "items": {
                "type": "string"
              },
              "type": "array",
              "nullable": true
            },
            "organizationalUnits": {
              "items": {
                "type": "string"
              },
              "type": "array",
              "nullable": true
            },
            "organizations": {
              "items": {
                "type": "string"
              },
              "type": "array",
              "nullable": true
            },
            "postalCodes": {
              "items": {
                "type": "string"
              },
              "type": "array",
              "nullable": true
            },
            "provinces": {
              "items": {
                "type": "string"
              },
              "type": "array",
              "nullable": true
            },
            "serialNumber": {
              "type": "string",
              "nullable": true
            },
            "streetAddresses": {
              "items": {
                "type": "string"
              },
              "type": "array",
              "nullable": true
            }
          },
          "type": "object",
          "nullable": true
        },
        "uriSANs": {
          "items": {
            "type": "string"
          },
          "type": "array",
          "nullable": true
        },
        "usages": {
          "items": {
            "enum": [
              "signing",
              "digital signature",
              "content commitment",
              "key encipherment",
              "key agreement",
              "data encipherment",
              "cert sign",
              "crl sign",
              "encipher only",
              "decipher only",
              "any",
              "server auth",
              "client auth",
              "code signing",
              "email protection",
              "s/mime",
              "ipsec end system",
              "ipsec tunnel",
              "ipsec user",
              "timestamping",
              "ocsp signing",
              "microsoft sgc",
              "netscape sgc"
            ],
            "type": "string"
          },
          "type": "array",
          "nullable": true
        }
      },
      "required": [
        "issuerRef",
        "secretName"
      ],
      "type": "object"
    },
    "status": {
      "properties": {
        "conditions": {
          "items": {
            "properties": {
              "lastTransitionTime": {
                "format": "date-time",
                "type": "string",
                "nullable": true
              },
              "message": {
                "type": "string",
                "nullable": true
              },
              "observedGeneration": {
                "format": "int64",
                "type": "integer",
                "nullable": true
              },
              "reason": {
                "type": "string",
                "nullable": true
              },
              "status": {
                "enum": [
                  "True",
                  "False",
                  "Unknown"
                ],
                "type": "string"
              },
              "type": {
                "type": "string"
              }
            },
            "required": [
              "status",
              "type"
            ],
            "type": "object"
          },
          "type": "array",
          "nullable": true
        },
        "lastFailureTime": {
          "format": "date-time",
          "type": "string",
          "nullable": true
        },
        "nextPrivateKeySecretName": {
          "type": "string",
          "nullable": true
        },
        "notAfter": {
          "format": "date-time",
          "type": "string",
          "nullable": true
        },
        "notBefore": {
          "format": "date-time",
          "type": "string",
          "nullable": true
        },
        "renewalTime": {
          "format": "date-time",
          "type": "string",
          "nullable": true
        },
        "revision": {
          "type": "integer",
          "nullable": true
        }
      },
      "type": "object",
      "nullable": true
    }
  },
  "required": [
    "spec",
    "apiVersion",
    "kind"
  ]
};

/**
 * A Certificate resource should be created to ensure an up to date and signed x509 certificate is stored in the Kubernetes Secret resource named in `spec.secretName`. 
 *  The stored certificate will be renewed before it expires (as configured by `spec.renewBefore`).
 */
export interface ICertificate {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "cert-manager.io/v1beta1";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "Certificate";
  "metadata"?: IObjectMeta;
  /**
   * Desired state of the Certificate resource.
   */
  "spec": {
    /**
     * CommonName is a common name to be used on the Certificate. The CommonName should have a length of 64 characters or fewer to avoid generating invalid CSRs. This value is ignored by TLS clients when any subject alt name is set. This is x509 behaviour: https://tools.ietf.org/html/rfc6125#section-6.4.4
     */
    "commonName"?: string;
    /**
     * DNSNames is a list of DNS subjectAltNames to be set on the Certificate.
     */
    "dnsNames"?: Array<string>;
    /**
     * The requested 'duration' (i.e. lifetime) of the Certificate. This option may be ignored/overridden by some issuer types. If unset this defaults to 90 days. Certificate will be renewed either 2/3 through its duration or `renewBefore` period before its expiry, whichever is later. Minimum accepted duration is 1 hour. Value must be in units accepted by Go time.ParseDuration https://golang.org/pkg/time/#ParseDuration
     */
    "duration"?: string;
    /**
     * EmailSANs is a list of email subjectAltNames to be set on the Certificate.
     */
    "emailSANs"?: Array<string>;
    /**
     * EncodeUsagesInRequest controls whether key usages should be present in the CertificateRequest
     */
    "encodeUsagesInRequest"?: boolean;
    /**
     * IPAddresses is a list of IP address subjectAltNames to be set on the Certificate.
     */
    "ipAddresses"?: Array<string>;
    /**
     * IsCA will mark this Certificate as valid for certificate signing. This will automatically add the `cert sign` usage to the list of `usages`.
     */
    "isCA"?: boolean;
    /**
     * IssuerRef is a reference to the issuer for this certificate. If the `kind` field is not set, or set to `Issuer`, an Issuer resource with the given name in the same namespace as the Certificate will be used. If the `kind` field is set to `ClusterIssuer`, a ClusterIssuer with the provided name will be used. The `name` field in this stanza is required at all times.
     */
    "issuerRef": {
      /**
       * Group of the resource being referred to.
       */
      "group"?: string;
      /**
       * Kind of the resource being referred to.
       */
      "kind"?: string;
      /**
       * Name of the resource being referred to.
       */
      "name": string;
    };
    /**
     * Keystores configures additional keystore output formats stored in the `secretName` Secret resource.
     */
    "keystores"?: {
      /**
       * JKS configures options for storing a JKS keystore in the `spec.secretName` Secret resource.
       */
      "jks"?: {
        /**
         * Create enables JKS keystore creation for the Certificate. If true, a file named `keystore.jks` will be created in the target Secret resource, encrypted using the password stored in `passwordSecretRef`. The keystore file will only be updated upon re-issuance.
         */
        "create": boolean;
        /**
         * PasswordSecretRef is a reference to a key in a Secret resource containing the password used to encrypt the JKS keystore.
         */
        "passwordSecretRef": {
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
       * PKCS12 configures options for storing a PKCS12 keystore in the `spec.secretName` Secret resource.
       */
      "pkcs12"?: {
        /**
         * Create enables PKCS12 keystore creation for the Certificate. If true, a file named `keystore.p12` will be created in the target Secret resource, encrypted using the password stored in `passwordSecretRef`. The keystore file will only be updated upon re-issuance.
         */
        "create": boolean;
        /**
         * PasswordSecretRef is a reference to a key in a Secret resource containing the password used to encrypt the PKCS12 keystore.
         */
        "passwordSecretRef": {
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
    };
    /**
     * Options to control private keys used for the Certificate.
     */
    "privateKey"?: {
      /**
       * Algorithm is the private key algorithm of the corresponding private key for this certificate. If provided, allowed values are either `RSA` or `ECDSA` If `algorithm` is specified and `size` is not provided, key size of 256 will be used for `ECDSA` key algorithm and key size of 2048 will be used for `RSA` key algorithm.
       */
      "algorithm"?: "RSA" | "ECDSA";
      /**
       * The private key cryptography standards (PKCS) encoding for this certificate's private key to be encoded in. If provided, allowed values are `PKCS1` and `PKCS8` standing for PKCS#1 and PKCS#8, respectively. Defaults to `PKCS1` if not specified.
       */
      "encoding"?: "PKCS1" | "PKCS8";
      /**
       * RotationPolicy controls how private keys should be regenerated when a re-issuance is being processed. If set to Never, a private key will only be generated if one does not already exist in the target `spec.secretName`. If one does exists but it does not have the correct algorithm or size, a warning will be raised to await user intervention. If set to Always, a private key matching the specified requirements will be generated whenever a re-issuance occurs. Default is 'Never' for backward compatibility.
       */
      "rotationPolicy"?: string;
      /**
       * Size is the key bit size of the corresponding private key for this certificate. If `algorithm` is set to `RSA`, valid values are `2048`, `4096` or `8192`, and will default to `2048` if not specified. If `algorithm` is set to `ECDSA`, valid values are `256`, `384` or `521`, and will default to `256` if not specified. No other values are allowed.
       */
      "size"?: number;
    };
    /**
     * How long before the currently issued certificate's expiry cert-manager should renew the certificate. The default is 2/3 of the issued certificate's duration. Minimum accepted value is 5 minutes. Value must be in units accepted by Go time.ParseDuration https://golang.org/pkg/time/#ParseDuration
     */
    "renewBefore"?: string;
    /**
     * revisionHistoryLimit is the maximum number of CertificateRequest revisions that are maintained in the Certificate's history. Each revision represents a single `CertificateRequest` created by this Certificate, either when it was created, renewed, or Spec was changed. Revisions will be removed by oldest first if the number of revisions exceeds this number. If set, revisionHistoryLimit must be a value of `1` or greater. If unset (`nil`), revisions will not be garbage collected. Default value is `nil`.
     */
    "revisionHistoryLimit"?: number;
    /**
     * SecretName is the name of the secret resource that will be automatically created and managed by this Certificate resource. It will be populated with a private key and certificate, signed by the denoted issuer.
     */
    "secretName": string;
    /**
     * SecretTemplate defines annotations and labels to be propagated to the Kubernetes Secret when it is created or updated. Once created, labels and annotations are not yet removed from the Secret when they are removed from the template. See https://github.com/jetstack/cert-manager/issues/4292
     */
    "secretTemplate"?: {
      /**
       * Annotations is a key value map to be copied to the target Kubernetes Secret.
       */
      "annotations"?: {
        [key: string]: string;
      };
      /**
       * Labels is a key value map to be copied to the target Kubernetes Secret.
       */
      "labels"?: {
        [key: string]: string;
      };
    };
    /**
     * Full X509 name specification (https://golang.org/pkg/crypto/x509/pkix/#Name).
     */
    "subject"?: {
      /**
       * Countries to be used on the Certificate.
       */
      "countries"?: Array<string>;
      /**
       * Cities to be used on the Certificate.
       */
      "localities"?: Array<string>;
      /**
       * Organizational Units to be used on the Certificate.
       */
      "organizationalUnits"?: Array<string>;
      /**
       * Organizations to be used on the Certificate.
       */
      "organizations"?: Array<string>;
      /**
       * Postal codes to be used on the Certificate.
       */
      "postalCodes"?: Array<string>;
      /**
       * State/Provinces to be used on the Certificate.
       */
      "provinces"?: Array<string>;
      /**
       * Serial number to be used on the Certificate.
       */
      "serialNumber"?: string;
      /**
       * Street addresses to be used on the Certificate.
       */
      "streetAddresses"?: Array<string>;
    };
    /**
     * URISANs is a list of URI subjectAltNames to be set on the Certificate.
     */
    "uriSANs"?: Array<string>;
    /**
     * Usages is the set of x509 usages that are requested for the certificate. Defaults to `digital signature` and `key encipherment` if not specified.
     */
    "usages"?: Array<"signing" | "digital signature" | "content commitment" | "key encipherment" | "key agreement" | "data encipherment" | "cert sign" | "crl sign" | "encipher only" | "decipher only" | "any" | "server auth" | "client auth" | "code signing" | "email protection" | "s/mime" | "ipsec end system" | "ipsec tunnel" | "ipsec user" | "timestamping" | "ocsp signing" | "microsoft sgc" | "netscape sgc">;
  };
  /**
   * Status of the Certificate. This is set and managed automatically.
   */
  "status"?: {
    /**
     * List of status conditions to indicate the status of certificates. Known condition types are `Ready` and `Issuing`.
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
       * If set, this represents the .metadata.generation that the condition was set based upon. For instance, if .metadata.generation is currently 12, but the .status.condition[x].observedGeneration is 9, the condition is out of date with respect to the current state of the Certificate.
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
       * Type of the condition, known values are (`Ready`, `Issuing`).
       */
      "type": string;
    }>;
    /**
     * LastFailureTime is the time as recorded by the Certificate controller of the most recent failure to complete a CertificateRequest for this Certificate resource. If set, cert-manager will not re-request another Certificate until 1 hour has elapsed from this time.
     */
    "lastFailureTime"?: string;
    /**
     * The name of the Secret resource containing the private key to be used for the next certificate iteration. The keymanager controller will automatically set this field if the `Issuing` condition is set to `True`. It will automatically unset this field when the Issuing condition is not set or False.
     */
    "nextPrivateKeySecretName"?: string;
    /**
     * The expiration time of the certificate stored in the secret named by this resource in `spec.secretName`.
     */
    "notAfter"?: string;
    /**
     * The time after which the certificate stored in the secret named by this resource in spec.secretName is valid.
     */
    "notBefore"?: string;
    /**
     * RenewalTime is the time at which the certificate will be next renewed. If not set, no upcoming renewal is scheduled.
     */
    "renewalTime"?: string;
    /**
     * The current 'revision' of the certificate as issued. 
     *  When a CertificateRequest resource is created, it will have the `cert-manager.io/certificate-revision` set to one greater than the current value of this field. 
     *  Upon issuance, this field will be set to the value of the annotation on the CertificateRequest resource used to issue the certificate. 
     *  Persisting the value on the CertificateRequest resource allows the certificates controller to know whether a request is part of an old issuance or if it is part of the ongoing revision's issuance by checking if the revision value in the annotation is greater than this field.
     */
    "revision"?: number;
  };
}

/**
 * A Certificate resource should be created to ensure an up to date and signed x509 certificate is stored in the Kubernetes Secret resource named in `spec.secretName`. 
 *  The stored certificate will be renewed before it expires (as configured by `spec.renewBefore`).
 */
export class Certificate extends Model<ICertificate> implements ICertificate {
  "apiVersion": ICertificate["apiVersion"];
  "kind": ICertificate["kind"];
  "metadata"?: ICertificate["metadata"];
  "spec": ICertificate["spec"];
  "status"?: ICertificate["status"];

static apiVersion: ICertificate["apiVersion"] = "cert-manager.io/v1beta1";
static kind: ICertificate["kind"] = "Certificate";
static is = createTypeMetaGuard<ICertificate>(Certificate);

constructor(data?: ModelData<ICertificate>) {
  super({
    apiVersion: Certificate.apiVersion,
    kind: Certificate.kind,
    ...data
  } as ICertificate);
}
}


setSchema(Certificate, schemaId, () => {
  addSchema();
  register(schemaId, schema);
});
