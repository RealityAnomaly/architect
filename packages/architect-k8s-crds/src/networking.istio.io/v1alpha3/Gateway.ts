import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { addSchema } from "@kubernetes-models/apimachinery/_schemas/IoK8sApimachineryPkgApisMetaV1ObjectMeta";
import { Model, setSchema, ModelData, createTypeMetaGuard } from "@kubernetes-models/base";
import { register } from "@kubernetes-models/validate";

const schemaId = "networking.istio.io.v1alpha3.Gateway";
const schema = {
  "type": "object",
  "properties": {
    "spec": {
      "properties": {
        "selector": {
          "additionalProperties": {
            "type": "string"
          },
          "type": "object",
          "properties": {},
          "nullable": true
        },
        "servers": {
          "items": {
            "properties": {
              "bind": {
                "type": "string",
                "nullable": true
              },
              "defaultEndpoint": {
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
              "name": {
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
        "networking.istio.io/v1alpha3"
      ]
    },
    "kind": {
      "type": "string",
      "enum": [
        "Gateway"
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

export interface IGateway {
  /**
   * Configuration affecting edge load balancer. See more details at: https://istio.io/docs/reference/config/networking/gateway.html
   */
  "spec"?: {
    "selector"?: {
      [key: string]: string;
    };
    /**
     * A list of server specifications.
     */
    "servers"?: Array<{
      "bind"?: string;
      "defaultEndpoint"?: string;
      /**
       * One or more hosts exposed by this gateway.
       */
      "hosts"?: Array<string>;
      /**
       * An optional name of the server, when set must be unique across all servers.
       */
      "name"?: string;
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
      /**
       * Set of TLS related options that govern the server's behavior.
       */
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
  };
  "status"?: {
  };
  "apiVersion": "networking.istio.io/v1alpha3";
  "kind": "Gateway";
  "metadata"?: IObjectMeta;
}

export class Gateway extends Model<IGateway> implements IGateway {
  "spec"?: IGateway["spec"];
  "status"?: IGateway["status"];
  "apiVersion": IGateway["apiVersion"];
  "kind": IGateway["kind"];
  "metadata"?: IGateway["metadata"];

static apiVersion: IGateway["apiVersion"] = "networking.istio.io/v1alpha3";
static kind: IGateway["kind"] = "Gateway";
static is = createTypeMetaGuard<IGateway>(Gateway);

constructor(data?: ModelData<IGateway>) {
  super({
    apiVersion: Gateway.apiVersion,
    kind: Gateway.kind,
    ...data
  } as IGateway);
}
}


setSchema(Gateway, schemaId, () => {
  addSchema();
  register(schemaId, schema);
});
