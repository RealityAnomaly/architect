import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { addSchema } from "@kubernetes-models/apimachinery/_schemas/IoK8sApimachineryPkgApisMetaV1ObjectMeta";
import { Model, setSchema, ModelData, createTypeMetaGuard } from "@kubernetes-models/base";
import { register } from "@kubernetes-models/validate";

const schemaId = "networking.istio.io.v1beta1.Sidecar";
const schema = {
  "type": "object",
  "properties": {
    "spec": {
      "properties": {
        "egress": {
          "items": {
            "properties": {
              "bind": {
                "type": "string",
                "nullable": true
              },
              "captureMode": {
                "enum": [
                  "DEFAULT",
                  "IPTABLES",
                  "NONE"
                ],
                "type": "string",
                "nullable": true
              },
              "hosts": {
                "items": {
                  "type": "string"
                },
                "type": "array",
                "nullable": true
              },
              "port": {
                "properties": {
                  "name": {
                    "type": "string",
                    "nullable": true
                  },
                  "number": {
                    "type": "integer",
                    "nullable": true
                  },
                  "protocol": {
                    "type": "string",
                    "nullable": true
                  },
                  "targetPort": {
                    "type": "integer",
                    "nullable": true
                  }
                },
                "type": "object",
                "nullable": true
              }
            },
            "type": "object"
          },
          "type": "array",
          "nullable": true
        },
        "ingress": {
          "items": {
            "properties": {
              "bind": {
                "type": "string",
                "nullable": true
              },
              "captureMode": {
                "enum": [
                  "DEFAULT",
                  "IPTABLES",
                  "NONE"
                ],
                "type": "string",
                "nullable": true
              },
              "defaultEndpoint": {
                "type": "string",
                "nullable": true
              },
              "port": {
                "properties": {
                  "name": {
                    "type": "string",
                    "nullable": true
                  },
                  "number": {
                    "type": "integer",
                    "nullable": true
                  },
                  "protocol": {
                    "type": "string",
                    "nullable": true
                  },
                  "targetPort": {
                    "type": "integer",
                    "nullable": true
                  }
                },
                "type": "object",
                "nullable": true
              },
              "tls": {
                "properties": {
                  "caCertificates": {
                    "type": "string",
                    "nullable": true
                  },
                  "cipherSuites": {
                    "items": {
                      "type": "string"
                    },
                    "type": "array",
                    "nullable": true
                  },
                  "credentialName": {
                    "type": "string",
                    "nullable": true
                  },
                  "httpsRedirect": {
                    "type": "boolean",
                    "nullable": true
                  },
                  "maxProtocolVersion": {
                    "enum": [
                      "TLS_AUTO",
                      "TLSV1_0",
                      "TLSV1_1",
                      "TLSV1_2",
                      "TLSV1_3"
                    ],
                    "type": "string",
                    "nullable": true
                  },
                  "minProtocolVersion": {
                    "enum": [
                      "TLS_AUTO",
                      "TLSV1_0",
                      "TLSV1_1",
                      "TLSV1_2",
                      "TLSV1_3"
                    ],
                    "type": "string",
                    "nullable": true
                  },
                  "mode": {
                    "enum": [
                      "PASSTHROUGH",
                      "SIMPLE",
                      "MUTUAL",
                      "AUTO_PASSTHROUGH",
                      "ISTIO_MUTUAL"
                    ],
                    "type": "string",
                    "nullable": true
                  },
                  "privateKey": {
                    "type": "string",
                    "nullable": true
                  },
                  "serverCertificate": {
                    "type": "string",
                    "nullable": true
                  },
                  "subjectAltNames": {
                    "items": {
                      "type": "string"
                    },
                    "type": "array",
                    "nullable": true
                  },
                  "verifyCertificateHash": {
                    "items": {
                      "type": "string"
                    },
                    "type": "array",
                    "nullable": true
                  },
                  "verifyCertificateSpki": {
                    "items": {
                      "type": "string"
                    },
                    "type": "array",
                    "nullable": true
                  }
                },
                "type": "object",
                "nullable": true
              }
            },
            "type": "object"
          },
          "type": "array",
          "nullable": true
        },
        "outboundTrafficPolicy": {
          "properties": {
            "egressProxy": {
              "properties": {
                "host": {
                  "type": "string",
                  "nullable": true
                },
                "port": {
                  "properties": {
                    "number": {
                      "type": "integer",
                      "nullable": true
                    }
                  },
                  "type": "object",
                  "nullable": true
                },
                "subset": {
                  "type": "string",
                  "nullable": true
                }
              },
              "type": "object",
              "nullable": true
            },
            "mode": {
              "enum": [
                "REGISTRY_ONLY",
                "ALLOW_ANY"
              ],
              "type": "string",
              "nullable": true
            }
          },
          "type": "object",
          "nullable": true
        },
        "workloadSelector": {
          "properties": {
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
        }
      },
      "type": "object",
      "nullable": true
    },
    "status": {
      "type": "object",
      "properties": {},
      "nullable": true
    },
    "apiVersion": {
      "type": "string",
      "enum": [
        "networking.istio.io/v1beta1"
      ]
    },
    "kind": {
      "type": "string",
      "enum": [
        "Sidecar"
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
    }
  },
  "required": [
    "apiVersion",
    "kind"
  ]
};

export interface ISidecar {
  /**
   * Configuration affecting network reachability of a sidecar. See more details at: https://istio.io/docs/reference/config/networking/sidecar.html
   */
  "spec"?: {
    "egress"?: Array<{
      "bind"?: string;
      "captureMode"?: "DEFAULT" | "IPTABLES" | "NONE";
      "hosts"?: Array<string>;
      /**
       * The port associated with the listener.
       */
      "port"?: {
        /**
         * Label assigned to the port.
         */
        "name"?: string;
        /**
         * A valid non-negative integer port number.
         */
        "number"?: number;
        /**
         * The protocol exposed on the port.
         */
        "protocol"?: string;
        "targetPort"?: number;
      };
    }>;
    "ingress"?: Array<{
      /**
       * The IP to which the listener should be bound.
       */
      "bind"?: string;
      "captureMode"?: "DEFAULT" | "IPTABLES" | "NONE";
      "defaultEndpoint"?: string;
      /**
       * The port associated with the listener.
       */
      "port"?: {
        /**
         * Label assigned to the port.
         */
        "name"?: string;
        /**
         * A valid non-negative integer port number.
         */
        "number"?: number;
        /**
         * The protocol exposed on the port.
         */
        "protocol"?: string;
        "targetPort"?: number;
      };
      "tls"?: {
        /**
         * REQUIRED if mode is `MUTUAL`.
         */
        "caCertificates"?: string;
        /**
         * Optional: If specified, only support the specified cipher list.
         */
        "cipherSuites"?: Array<string>;
        "credentialName"?: string;
        "httpsRedirect"?: boolean;
        /**
         * Optional: Maximum TLS protocol version.
         */
        "maxProtocolVersion"?: "TLS_AUTO" | "TLSV1_0" | "TLSV1_1" | "TLSV1_2" | "TLSV1_3";
        /**
         * Optional: Minimum TLS protocol version.
         */
        "minProtocolVersion"?: "TLS_AUTO" | "TLSV1_0" | "TLSV1_1" | "TLSV1_2" | "TLSV1_3";
        "mode"?: "PASSTHROUGH" | "SIMPLE" | "MUTUAL" | "AUTO_PASSTHROUGH" | "ISTIO_MUTUAL";
        /**
         * REQUIRED if mode is `SIMPLE` or `MUTUAL`.
         */
        "privateKey"?: string;
        /**
         * REQUIRED if mode is `SIMPLE` or `MUTUAL`.
         */
        "serverCertificate"?: string;
        "subjectAltNames"?: Array<string>;
        "verifyCertificateHash"?: Array<string>;
        "verifyCertificateSpki"?: Array<string>;
      };
    }>;
    /**
     * Configuration for the outbound traffic policy.
     */
    "outboundTrafficPolicy"?: {
      "egressProxy"?: {
        /**
         * The name of a service from the service registry.
         */
        "host"?: string;
        /**
         * Specifies the port on the host that is being addressed.
         */
        "port"?: {
          "number"?: number;
        };
        /**
         * The name of a subset within the service.
         */
        "subset"?: string;
      };
      "mode"?: "REGISTRY_ONLY" | "ALLOW_ANY";
    };
    "workloadSelector"?: {
      "labels"?: {
        [key: string]: string;
      };
    };
  };
  "status"?: {
  };
  "apiVersion": "networking.istio.io/v1beta1";
  "kind": "Sidecar";
  "metadata"?: IObjectMeta;
}

export class Sidecar extends Model<ISidecar> implements ISidecar {
  "spec"?: ISidecar["spec"];
  "status"?: ISidecar["status"];
  "apiVersion": ISidecar["apiVersion"];
  "kind": ISidecar["kind"];
  "metadata"?: ISidecar["metadata"];

static apiVersion: ISidecar["apiVersion"] = "networking.istio.io/v1beta1";
static kind: ISidecar["kind"] = "Sidecar";
static is = createTypeMetaGuard<ISidecar>(Sidecar);

constructor(data?: ModelData<ISidecar>) {
  super({
    apiVersion: Sidecar.apiVersion,
    kind: Sidecar.kind,
    ...data
  } as ISidecar);
}
}


setSchema(Sidecar, schemaId, () => {
  addSchema();
  register(schemaId, schema);
});
