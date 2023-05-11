import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { addSchema } from "@kubernetes-models/apimachinery/_schemas/IoK8sApimachineryPkgApisMetaV1ObjectMeta";
import { Model, setSchema, ModelData, createTypeMetaGuard } from "@kubernetes-models/base";
import { register } from "@kubernetes-models/validate";

const schemaId = "telemetry.istio.io.v1alpha1.Telemetry";
const schema = {
  "type": "object",
  "properties": {
    "spec": {
      "properties": {
        "accessLogging": {
          "items": {
            "properties": {
              "disabled": {
                "nullable": true,
                "type": "boolean"
              },
              "filter": {
                "properties": {
                  "expression": {
                    "type": "string",
                    "nullable": true
                  }
                },
                "type": "object",
                "nullable": true
              },
              "match": {
                "properties": {
                  "mode": {
                    "enum": [
                      "CLIENT_AND_SERVER",
                      "CLIENT",
                      "SERVER"
                    ],
                    "type": "string",
                    "nullable": true
                  }
                },
                "type": "object",
                "nullable": true
              },
              "providers": {
                "items": {
                  "properties": {
                    "name": {
                      "type": "string",
                      "nullable": true
                    }
                  },
                  "type": "object"
                },
                "type": "array",
                "nullable": true
              }
            },
            "type": "object"
          },
          "type": "array",
          "nullable": true
        },
        "metrics": {
          "items": {
            "properties": {
              "overrides": {
                "items": {
                  "properties": {
                    "disabled": {
                      "nullable": true,
                      "type": "boolean"
                    },
                    "match": {
                      "oneOf": [
                        {
                          "not": {
                            "anyOf": [
                              {
                                "required": [
                                  "metric"
                                ]
                              },
                              {
                                "required": [
                                  "customMetric"
                                ]
                              }
                            ]
                          }
                        },
                        {
                          "required": [
                            "metric"
                          ]
                        },
                        {
                          "required": [
                            "customMetric"
                          ]
                        }
                      ],
                      "properties": {
                        "customMetric": {
                          "type": "string",
                          "nullable": true
                        },
                        "metric": {
                          "enum": [
                            "ALL_METRICS",
                            "REQUEST_COUNT",
                            "REQUEST_DURATION",
                            "REQUEST_SIZE",
                            "RESPONSE_SIZE",
                            "TCP_OPENED_CONNECTIONS",
                            "TCP_CLOSED_CONNECTIONS",
                            "TCP_SENT_BYTES",
                            "TCP_RECEIVED_BYTES",
                            "GRPC_REQUEST_MESSAGES",
                            "GRPC_RESPONSE_MESSAGES"
                          ],
                          "type": "string",
                          "nullable": true
                        },
                        "mode": {
                          "enum": [
                            "CLIENT_AND_SERVER",
                            "CLIENT",
                            "SERVER"
                          ],
                          "type": "string",
                          "nullable": true
                        }
                      },
                      "type": "object",
                      "nullable": true
                    },
                    "tagOverrides": {
                      "additionalProperties": {
                        "properties": {
                          "operation": {
                            "enum": [
                              "UPSERT",
                              "REMOVE"
                            ],
                            "type": "string",
                            "nullable": true
                          },
                          "value": {
                            "type": "string",
                            "nullable": true
                          }
                        },
                        "type": "object"
                      },
                      "type": "object",
                      "properties": {},
                      "nullable": true
                    }
                  },
                  "type": "object"
                },
                "type": "array",
                "nullable": true
              },
              "providers": {
                "items": {
                  "properties": {
                    "name": {
                      "type": "string",
                      "nullable": true
                    }
                  },
                  "type": "object"
                },
                "type": "array",
                "nullable": true
              }
            },
            "type": "object"
          },
          "type": "array",
          "nullable": true
        },
        "selector": {
          "properties": {
            "matchLabels": {
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
        "tracing": {
          "items": {
            "properties": {
              "customTags": {
                "additionalProperties": {
                  "oneOf": [
                    {
                      "not": {
                        "anyOf": [
                          {
                            "required": [
                              "literal"
                            ]
                          },
                          {
                            "required": [
                              "environment"
                            ]
                          },
                          {
                            "required": [
                              "header"
                            ]
                          }
                        ]
                      }
                    },
                    {
                      "required": [
                        "literal"
                      ]
                    },
                    {
                      "required": [
                        "environment"
                      ]
                    },
                    {
                      "required": [
                        "header"
                      ]
                    }
                  ],
                  "properties": {
                    "environment": {
                      "properties": {
                        "defaultValue": {
                          "type": "string",
                          "nullable": true
                        },
                        "name": {
                          "type": "string",
                          "nullable": true
                        }
                      },
                      "type": "object",
                      "nullable": true
                    },
                    "header": {
                      "properties": {
                        "defaultValue": {
                          "type": "string",
                          "nullable": true
                        },
                        "name": {
                          "type": "string",
                          "nullable": true
                        }
                      },
                      "type": "object",
                      "nullable": true
                    },
                    "literal": {
                      "properties": {
                        "value": {
                          "type": "string",
                          "nullable": true
                        }
                      },
                      "type": "object",
                      "nullable": true
                    }
                  },
                  "type": "object"
                },
                "type": "object",
                "properties": {},
                "nullable": true
              },
              "disableSpanReporting": {
                "nullable": true,
                "type": "boolean"
              },
              "match": {
                "properties": {
                  "mode": {
                    "enum": [
                      "CLIENT_AND_SERVER",
                      "CLIENT",
                      "SERVER"
                    ],
                    "type": "string",
                    "nullable": true
                  }
                },
                "type": "object",
                "nullable": true
              },
              "providers": {
                "items": {
                  "properties": {
                    "name": {
                      "type": "string",
                      "nullable": true
                    }
                  },
                  "type": "object"
                },
                "type": "array",
                "nullable": true
              },
              "randomSamplingPercentage": {
                "nullable": true,
                "type": "number"
              },
              "useRequestIdForTraceSampling": {
                "nullable": true,
                "type": "boolean"
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
        "telemetry.istio.io/v1alpha1"
      ]
    },
    "kind": {
      "type": "string",
      "enum": [
        "Telemetry"
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

export interface ITelemetry {
  /**
   * Telemetry configuration for workloads. See more details at: https://istio.io/docs/reference/config/telemetry.html
   */
  "spec"?: {
    /**
     * Optional.
     */
    "accessLogging"?: Array<{
      /**
       * Controls logging.
       */
      "disabled"?: boolean;
      /**
       * Optional.
       */
      "filter"?: {
        /**
         * CEL expression for selecting when requests/connections should be logged.
         */
        "expression"?: string;
      };
      /**
       * Allows tailoring of logging behavior to specific conditions.
       */
      "match"?: {
        "mode"?: "CLIENT_AND_SERVER" | "CLIENT" | "SERVER";
      };
      /**
       * Optional.
       */
      "providers"?: Array<{
        /**
         * Required.
         */
        "name"?: string;
      }>;
    }>;
    /**
     * Optional.
     */
    "metrics"?: Array<{
      /**
       * Optional.
       */
      "overrides"?: Array<{
        /**
         * Optional.
         */
        "disabled"?: boolean;
        /**
         * Match allows provides the scope of the override.
         */
        "match"?: Exclude<{
          /**
           * Allows free-form specification of a metric.
           */
          "customMetric"?: string;
          /**
           * One of the well-known Istio Standard Metrics.
           */
          "metric"?: "ALL_METRICS" | "REQUEST_COUNT" | "REQUEST_DURATION" | "REQUEST_SIZE" | "RESPONSE_SIZE" | "TCP_OPENED_CONNECTIONS" | "TCP_CLOSED_CONNECTIONS" | "TCP_SENT_BYTES" | "TCP_RECEIVED_BYTES" | "GRPC_REQUEST_MESSAGES" | "GRPC_RESPONSE_MESSAGES";
          "mode"?: "CLIENT_AND_SERVER" | "CLIENT" | "SERVER";
        }, {
          /**
           * Allows free-form specification of a metric.
           */
          "customMetric"?: string;
          /**
           * One of the well-known Istio Standard Metrics.
           */
          "metric": "ALL_METRICS" | "REQUEST_COUNT" | "REQUEST_DURATION" | "REQUEST_SIZE" | "RESPONSE_SIZE" | "TCP_OPENED_CONNECTIONS" | "TCP_CLOSED_CONNECTIONS" | "TCP_SENT_BYTES" | "TCP_RECEIVED_BYTES" | "GRPC_REQUEST_MESSAGES" | "GRPC_RESPONSE_MESSAGES";
          "mode"?: "CLIENT_AND_SERVER" | "CLIENT" | "SERVER";
        } | {
          /**
           * Allows free-form specification of a metric.
           */
          "customMetric": string;
          /**
           * One of the well-known Istio Standard Metrics.
           */
          "metric"?: "ALL_METRICS" | "REQUEST_COUNT" | "REQUEST_DURATION" | "REQUEST_SIZE" | "RESPONSE_SIZE" | "TCP_OPENED_CONNECTIONS" | "TCP_CLOSED_CONNECTIONS" | "TCP_SENT_BYTES" | "TCP_RECEIVED_BYTES" | "GRPC_REQUEST_MESSAGES" | "GRPC_RESPONSE_MESSAGES";
          "mode"?: "CLIENT_AND_SERVER" | "CLIENT" | "SERVER";
        }> | {
          /**
           * Allows free-form specification of a metric.
           */
          "customMetric"?: string;
          /**
           * One of the well-known Istio Standard Metrics.
           */
          "metric": "ALL_METRICS" | "REQUEST_COUNT" | "REQUEST_DURATION" | "REQUEST_SIZE" | "RESPONSE_SIZE" | "TCP_OPENED_CONNECTIONS" | "TCP_CLOSED_CONNECTIONS" | "TCP_SENT_BYTES" | "TCP_RECEIVED_BYTES" | "GRPC_REQUEST_MESSAGES" | "GRPC_RESPONSE_MESSAGES";
          "mode"?: "CLIENT_AND_SERVER" | "CLIENT" | "SERVER";
        } | {
          /**
           * Allows free-form specification of a metric.
           */
          "customMetric": string;
          /**
           * One of the well-known Istio Standard Metrics.
           */
          "metric"?: "ALL_METRICS" | "REQUEST_COUNT" | "REQUEST_DURATION" | "REQUEST_SIZE" | "RESPONSE_SIZE" | "TCP_OPENED_CONNECTIONS" | "TCP_CLOSED_CONNECTIONS" | "TCP_SENT_BYTES" | "TCP_RECEIVED_BYTES" | "GRPC_REQUEST_MESSAGES" | "GRPC_RESPONSE_MESSAGES";
          "mode"?: "CLIENT_AND_SERVER" | "CLIENT" | "SERVER";
        };
        /**
         * Optional.
         */
        "tagOverrides"?: {
          [key: string]: {
            /**
             * Operation controls whether or not to update/add a tag, or to remove it.
             */
            "operation"?: "UPSERT" | "REMOVE";
            /**
             * Value is only considered if the operation is `UPSERT`.
             */
            "value"?: string;
          };
        };
      }>;
      /**
       * Optional.
       */
      "providers"?: Array<{
        /**
         * Required.
         */
        "name"?: string;
      }>;
    }>;
    /**
     * Optional.
     */
    "selector"?: {
      "matchLabels"?: {
        [key: string]: string;
      };
    };
    /**
     * Optional.
     */
    "tracing"?: Array<{
      /**
       * Optional.
       */
      "customTags"?: {
        [key: string]: Exclude<{
          /**
           * Environment adds the value of an environment variable to each span.
           */
          "environment"?: {
            /**
             * Optional.
             */
            "defaultValue"?: string;
            /**
             * Name of the environment variable from which to extract the tag value.
             */
            "name"?: string;
          };
          "header"?: {
            /**
             * Optional.
             */
            "defaultValue"?: string;
            /**
             * Name of the header from which to extract the tag value.
             */
            "name"?: string;
          };
          /**
           * Literal adds the same, hard-coded value to each span.
           */
          "literal"?: {
            /**
             * The tag value to use.
             */
            "value"?: string;
          };
        }, {
          /**
           * Environment adds the value of an environment variable to each span.
           */
          "environment"?: {
            /**
             * Optional.
             */
            "defaultValue"?: string;
            /**
             * Name of the environment variable from which to extract the tag value.
             */
            "name"?: string;
          };
          "header"?: {
            /**
             * Optional.
             */
            "defaultValue"?: string;
            /**
             * Name of the header from which to extract the tag value.
             */
            "name"?: string;
          };
          /**
           * Literal adds the same, hard-coded value to each span.
           */
          "literal": {
            /**
             * The tag value to use.
             */
            "value"?: string;
          };
        } | {
          /**
           * Environment adds the value of an environment variable to each span.
           */
          "environment": {
            /**
             * Optional.
             */
            "defaultValue"?: string;
            /**
             * Name of the environment variable from which to extract the tag value.
             */
            "name"?: string;
          };
          "header"?: {
            /**
             * Optional.
             */
            "defaultValue"?: string;
            /**
             * Name of the header from which to extract the tag value.
             */
            "name"?: string;
          };
          /**
           * Literal adds the same, hard-coded value to each span.
           */
          "literal"?: {
            /**
             * The tag value to use.
             */
            "value"?: string;
          };
        } | {
          /**
           * Environment adds the value of an environment variable to each span.
           */
          "environment"?: {
            /**
             * Optional.
             */
            "defaultValue"?: string;
            /**
             * Name of the environment variable from which to extract the tag value.
             */
            "name"?: string;
          };
          "header": {
            /**
             * Optional.
             */
            "defaultValue"?: string;
            /**
             * Name of the header from which to extract the tag value.
             */
            "name"?: string;
          };
          /**
           * Literal adds the same, hard-coded value to each span.
           */
          "literal"?: {
            /**
             * The tag value to use.
             */
            "value"?: string;
          };
        }> | {
          /**
           * Environment adds the value of an environment variable to each span.
           */
          "environment"?: {
            /**
             * Optional.
             */
            "defaultValue"?: string;
            /**
             * Name of the environment variable from which to extract the tag value.
             */
            "name"?: string;
          };
          "header"?: {
            /**
             * Optional.
             */
            "defaultValue"?: string;
            /**
             * Name of the header from which to extract the tag value.
             */
            "name"?: string;
          };
          /**
           * Literal adds the same, hard-coded value to each span.
           */
          "literal": {
            /**
             * The tag value to use.
             */
            "value"?: string;
          };
        } | {
          /**
           * Environment adds the value of an environment variable to each span.
           */
          "environment": {
            /**
             * Optional.
             */
            "defaultValue"?: string;
            /**
             * Name of the environment variable from which to extract the tag value.
             */
            "name"?: string;
          };
          "header"?: {
            /**
             * Optional.
             */
            "defaultValue"?: string;
            /**
             * Name of the header from which to extract the tag value.
             */
            "name"?: string;
          };
          /**
           * Literal adds the same, hard-coded value to each span.
           */
          "literal"?: {
            /**
             * The tag value to use.
             */
            "value"?: string;
          };
        } | {
          /**
           * Environment adds the value of an environment variable to each span.
           */
          "environment"?: {
            /**
             * Optional.
             */
            "defaultValue"?: string;
            /**
             * Name of the environment variable from which to extract the tag value.
             */
            "name"?: string;
          };
          "header": {
            /**
             * Optional.
             */
            "defaultValue"?: string;
            /**
             * Name of the header from which to extract the tag value.
             */
            "name"?: string;
          };
          /**
           * Literal adds the same, hard-coded value to each span.
           */
          "literal"?: {
            /**
             * The tag value to use.
             */
            "value"?: string;
          };
        };
      };
      /**
       * Controls span reporting.
       */
      "disableSpanReporting"?: boolean;
      /**
       * Allows tailoring of behavior to specific conditions.
       */
      "match"?: {
        "mode"?: "CLIENT_AND_SERVER" | "CLIENT" | "SERVER";
      };
      /**
       * Optional.
       */
      "providers"?: Array<{
        /**
         * Required.
         */
        "name"?: string;
      }>;
      "randomSamplingPercentage"?: number;
      "useRequestIdForTraceSampling"?: boolean;
    }>;
  };
  "status"?: {
  };
  "apiVersion": "telemetry.istio.io/v1alpha1";
  "kind": "Telemetry";
  "metadata"?: IObjectMeta;
}

export class Telemetry extends Model<ITelemetry> implements ITelemetry {
  "spec"?: ITelemetry["spec"];
  "status"?: ITelemetry["status"];
  "apiVersion": ITelemetry["apiVersion"];
  "kind": ITelemetry["kind"];
  "metadata"?: ITelemetry["metadata"];

static apiVersion: ITelemetry["apiVersion"] = "telemetry.istio.io/v1alpha1";
static kind: ITelemetry["kind"] = "Telemetry";
static is = createTypeMetaGuard<ITelemetry>(Telemetry);

constructor(data?: ModelData<ITelemetry>) {
  super({
    apiVersion: Telemetry.apiVersion,
    kind: Telemetry.kind,
    ...data
  } as ITelemetry);
}
}


setSchema(Telemetry, schemaId, () => {
  addSchema();
  register(schemaId, schema);
});
