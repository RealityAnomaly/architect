import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { addSchema } from "@kubernetes-models/apimachinery/_schemas/IoK8sApimachineryPkgApisMetaV1ObjectMeta";
import { Model, setSchema, ModelData, createTypeMetaGuard } from "@kubernetes-models/base";
import { register } from "@kubernetes-models/validate";

const schemaId = "acme.cert-manager.io.v1beta1.Order";
const schema = {
  "type": "object",
  "properties": {
    "apiVersion": {
      "type": "string",
      "enum": [
        "acme.cert-manager.io/v1beta1"
      ]
    },
    "kind": {
      "type": "string",
      "enum": [
        "Order"
      ]
    },
    "metadata": {
      "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta#"
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
        "ipAddresses": {
          "items": {
            "type": "string"
          },
          "type": "array",
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
        "request": {
          "format": "byte",
          "type": "string"
        }
      },
      "required": [
        "issuerRef",
        "request"
      ],
      "type": "object"
    },
    "status": {
      "properties": {
        "authorizations": {
          "items": {
            "properties": {
              "challenges": {
                "items": {
                  "properties": {
                    "token": {
                      "type": "string"
                    },
                    "type": {
                      "type": "string"
                    },
                    "url": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "token",
                    "type",
                    "url"
                  ],
                  "type": "object"
                },
                "type": "array",
                "nullable": true
              },
              "identifier": {
                "type": "string",
                "nullable": true
              },
              "initialState": {
                "enum": [
                  "valid",
                  "ready",
                  "pending",
                  "processing",
                  "invalid",
                  "expired",
                  "errored"
                ],
                "type": "string",
                "nullable": true
              },
              "url": {
                "type": "string"
              },
              "wildcard": {
                "type": "boolean",
                "nullable": true
              }
            },
            "required": [
              "url"
            ],
            "type": "object"
          },
          "type": "array",
          "nullable": true
        },
        "certificate": {
          "format": "byte",
          "type": "string",
          "nullable": true
        },
        "failureTime": {
          "format": "date-time",
          "type": "string",
          "nullable": true
        },
        "finalizeURL": {
          "type": "string",
          "nullable": true
        },
        "reason": {
          "type": "string",
          "nullable": true
        },
        "state": {
          "enum": [
            "valid",
            "ready",
            "pending",
            "processing",
            "invalid",
            "expired",
            "errored"
          ],
          "type": "string",
          "nullable": true
        },
        "url": {
          "type": "string",
          "nullable": true
        }
      },
      "type": "object",
      "nullable": true
    }
  },
  "required": [
    "metadata",
    "spec",
    "apiVersion",
    "kind"
  ]
};

/**
 * Order is a type to represent an Order with an ACME server
 */
export interface IOrder {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "acme.cert-manager.io/v1beta1";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "Order";
  "metadata": IObjectMeta;
  "spec": {
    /**
     * CommonName is the common name as specified on the DER encoded CSR. If specified, this value must also be present in `dnsNames` or `ipAddresses`. This field must match the corresponding field on the DER encoded CSR.
     */
    "commonName"?: string;
    /**
     * DNSNames is a list of DNS names that should be included as part of the Order validation process. This field must match the corresponding field on the DER encoded CSR.
     */
    "dnsNames"?: Array<string>;
    /**
     * Duration is the duration for the not after date for the requested certificate. this is set on order creation as pe the ACME spec.
     */
    "duration"?: string;
    /**
     * IPAddresses is a list of IP addresses that should be included as part of the Order validation process. This field must match the corresponding field on the DER encoded CSR.
     */
    "ipAddresses"?: Array<string>;
    /**
     * IssuerRef references a properly configured ACME-type Issuer which should be used to create this Order. If the Issuer does not exist, processing will be retried. If the Issuer is not an 'ACME' Issuer, an error will be returned and the Order will be marked as failed.
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
     * Certificate signing request bytes in DER encoding. This will be used when finalizing the order. This field must be set on the order.
     */
    "request": string;
  };
  "status"?: {
    /**
     * Authorizations contains data returned from the ACME server on what authorizations must be completed in order to validate the DNS names specified on the Order.
     */
    "authorizations"?: Array<{
      /**
       * Challenges specifies the challenge types offered by the ACME server. One of these challenge types will be selected when validating the DNS name and an appropriate Challenge resource will be created to perform the ACME challenge process.
       */
      "challenges"?: Array<{
        /**
         * Token is the token that must be presented for this challenge. This is used to compute the 'key' that must also be presented.
         */
        "token": string;
        /**
         * Type is the type of challenge being offered, e.g. 'http-01', 'dns-01', 'tls-sni-01', etc. This is the raw value retrieved from the ACME server. Only 'http-01' and 'dns-01' are supported by cert-manager, other values will be ignored.
         */
        "type": string;
        /**
         * URL is the URL of this challenge. It can be used to retrieve additional metadata about the Challenge from the ACME server.
         */
        "url": string;
      }>;
      /**
       * Identifier is the DNS name to be validated as part of this authorization
       */
      "identifier"?: string;
      /**
       * InitialState is the initial state of the ACME authorization when first fetched from the ACME server. If an Authorization is already 'valid', the Order controller will not create a Challenge resource for the authorization. This will occur when working with an ACME server that enables 'authz reuse' (such as Let's Encrypt's production endpoint). If not set and 'identifier' is set, the state is assumed to be pending and a Challenge will be created.
       */
      "initialState"?: "valid" | "ready" | "pending" | "processing" | "invalid" | "expired" | "errored";
      /**
       * URL is the URL of the Authorization that must be completed
       */
      "url": string;
      /**
       * Wildcard will be true if this authorization is for a wildcard DNS name. If this is true, the identifier will be the \*non-wildcard\* version of the DNS name. For example, if '\*.example.com' is the DNS name being validated, this field will be 'true' and the 'identifier' field will be 'example.com'.
       */
      "wildcard"?: boolean;
    }>;
    /**
     * Certificate is a copy of the PEM encoded certificate for this Order. This field will be populated after the order has been successfully finalized with the ACME server, and the order has transitioned to the 'valid' state.
     */
    "certificate"?: string;
    /**
     * FailureTime stores the time that this order failed. This is used to influence garbage collection and back-off.
     */
    "failureTime"?: string;
    /**
     * FinalizeURL of the Order. This is used to obtain certificates for this order once it has been completed.
     */
    "finalizeURL"?: string;
    /**
     * Reason optionally provides more information about a why the order is in the current state.
     */
    "reason"?: string;
    /**
     * State contains the current state of this Order resource. States 'success' and 'expired' are 'final'
     */
    "state"?: "valid" | "ready" | "pending" | "processing" | "invalid" | "expired" | "errored";
    /**
     * URL of the Order. This will initially be empty when the resource is first created. The Order controller will populate this field when the Order is first processed. This field will be immutable after it is initially set.
     */
    "url"?: string;
  };
}

/**
 * Order is a type to represent an Order with an ACME server
 */
export class Order extends Model<IOrder> implements IOrder {
  "apiVersion": IOrder["apiVersion"];
  "kind": IOrder["kind"];
  "metadata": IOrder["metadata"];
  "spec": IOrder["spec"];
  "status"?: IOrder["status"];

static apiVersion: IOrder["apiVersion"] = "acme.cert-manager.io/v1beta1";
static kind: IOrder["kind"] = "Order";
static is = createTypeMetaGuard<IOrder>(Order);

constructor(data?: ModelData<IOrder>) {
  super({
    apiVersion: Order.apiVersion,
    kind: Order.kind,
    ...data
  } as IOrder);
}
}


setSchema(Order, schemaId, () => {
  addSchema();
  register(schemaId, schema);
});
