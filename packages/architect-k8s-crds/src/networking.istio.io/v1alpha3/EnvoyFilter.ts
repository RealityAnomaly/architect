import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { addSchema } from "@kubernetes-models/apimachinery/_schemas/IoK8sApimachineryPkgApisMetaV1ObjectMeta";
import { Model, setSchema, ModelData, createTypeMetaGuard } from "@kubernetes-models/base";
import { register } from "@kubernetes-models/validate";

const schemaId = "networking.istio.io.v1alpha3.EnvoyFilter";
const schema = {
  "type": "object",
  "properties": {
    "spec": {
      "properties": {
        "configPatches": {
          "items": {
            "properties": {
              "applyTo": {
                "enum": [
                  "INVALID",
                  "LISTENER",
                  "FILTER_CHAIN",
                  "NETWORK_FILTER",
                  "HTTP_FILTER",
                  "ROUTE_CONFIGURATION",
                  "VIRTUAL_HOST",
                  "HTTP_ROUTE",
                  "CLUSTER",
                  "EXTENSION_CONFIG",
                  "BOOTSTRAP"
                ],
                "type": "string",
                "nullable": true
              },
              "match": {
                "oneOf": [
                  {
                    "not": {
                      "anyOf": [
                        {
                          "required": [
                            "listener"
                          ]
                        },
                        {
                          "required": [
                            "routeConfiguration"
                          ]
                        },
                        {
                          "required": [
                            "cluster"
                          ]
                        }
                      ]
                    }
                  },
                  {
                    "required": [
                      "listener"
                    ]
                  },
                  {
                    "required": [
                      "routeConfiguration"
                    ]
                  },
                  {
                    "required": [
                      "cluster"
                    ]
                  }
                ],
                "properties": {
                  "cluster": {
                    "properties": {
                      "name": {
                        "type": "string",
                        "nullable": true
                      },
                      "portNumber": {
                        "type": "integer",
                        "nullable": true
                      },
                      "service": {
                        "type": "string",
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
                  "context": {
                    "enum": [
                      "ANY",
                      "SIDECAR_INBOUND",
                      "SIDECAR_OUTBOUND",
                      "GATEWAY"
                    ],
                    "type": "string",
                    "nullable": true
                  },
                  "listener": {
                    "properties": {
                      "filterChain": {
                        "properties": {
                          "applicationProtocols": {
                            "type": "string",
                            "nullable": true
                          },
                          "destinationPort": {
                            "type": "integer",
                            "nullable": true
                          },
                          "filter": {
                            "properties": {
                              "name": {
                                "type": "string",
                                "nullable": true
                              },
                              "subFilter": {
                                "properties": {
                                  "name": {
                                    "type": "string",
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
                          "name": {
                            "type": "string",
                            "nullable": true
                          },
                          "sni": {
                            "type": "string",
                            "nullable": true
                          },
                          "transportProtocol": {
                            "type": "string",
                            "nullable": true
                          }
                        },
                        "type": "object",
                        "nullable": true
                      },
                      "name": {
                        "type": "string",
                        "nullable": true
                      },
                      "portName": {
                        "type": "string",
                        "nullable": true
                      },
                      "portNumber": {
                        "type": "integer",
                        "nullable": true
                      }
                    },
                    "type": "object",
                    "nullable": true
                  },
                  "proxy": {
                    "properties": {
                      "metadata": {
                        "additionalProperties": {
                          "type": "string"
                        },
                        "type": "object",
                        "properties": {},
                        "nullable": true
                      },
                      "proxyVersion": {
                        "type": "string",
                        "nullable": true
                      }
                    },
                    "type": "object",
                    "nullable": true
                  },
                  "routeConfiguration": {
                    "properties": {
                      "gateway": {
                        "type": "string",
                        "nullable": true
                      },
                      "name": {
                        "type": "string",
                        "nullable": true
                      },
                      "portName": {
                        "type": "string",
                        "nullable": true
                      },
                      "portNumber": {
                        "type": "integer",
                        "nullable": true
                      },
                      "vhost": {
                        "properties": {
                          "name": {
                            "type": "string",
                            "nullable": true
                          },
                          "route": {
                            "properties": {
                              "action": {
                                "enum": [
                                  "ANY",
                                  "ROUTE",
                                  "REDIRECT",
                                  "DIRECT_RESPONSE"
                                ],
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
                          }
                        },
                        "type": "object",
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
              "patch": {
                "properties": {
                  "filterClass": {
                    "enum": [
                      "UNSPECIFIED",
                      "AUTHN",
                      "AUTHZ",
                      "STATS"
                    ],
                    "type": "string",
                    "nullable": true
                  },
                  "operation": {
                    "enum": [
                      "INVALID",
                      "MERGE",
                      "ADD",
                      "REMOVE",
                      "INSERT_BEFORE",
                      "INSERT_AFTER",
                      "INSERT_FIRST",
                      "REPLACE"
                    ],
                    "type": "string",
                    "nullable": true
                  },
                  "value": {
                    "type": "object",
                    "properties": {},
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
        "priority": {
          "format": "int32",
          "type": "integer",
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
        "networking.istio.io/v1alpha3"
      ]
    },
    "kind": {
      "type": "string",
      "enum": [
        "EnvoyFilter"
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

export interface IEnvoyFilter {
  /**
   * Customizing Envoy configuration generated by Istio. See more details at: https://istio.io/docs/reference/config/networking/envoy-filter.html
   */
  "spec"?: {
    /**
     * One or more patches with match conditions.
     */
    "configPatches"?: Array<{
      "applyTo"?: "INVALID" | "LISTENER" | "FILTER_CHAIN" | "NETWORK_FILTER" | "HTTP_FILTER" | "ROUTE_CONFIGURATION" | "VIRTUAL_HOST" | "HTTP_ROUTE" | "CLUSTER" | "EXTENSION_CONFIG" | "BOOTSTRAP";
      /**
       * Match on listener/route configuration/cluster.
       */
      "match"?: Exclude<{
        /**
         * Match on envoy cluster attributes.
         */
        "cluster"?: {
          /**
           * The exact name of the cluster to match.
           */
          "name"?: string;
          /**
           * The service port for which this cluster was generated.
           */
          "portNumber"?: number;
          /**
           * The fully qualified service name for this cluster.
           */
          "service"?: string;
          /**
           * The subset associated with the service.
           */
          "subset"?: string;
        };
        /**
         * The specific config generation context to match on.
         */
        "context"?: "ANY" | "SIDECAR_INBOUND" | "SIDECAR_OUTBOUND" | "GATEWAY";
        /**
         * Match on envoy listener attributes.
         */
        "listener"?: {
          /**
           * Match a specific filter chain in a listener.
           */
          "filterChain"?: {
            /**
             * Applies only to sidecars.
             */
            "applicationProtocols"?: string;
            /**
             * The destination_port value used by a filter chain's match condition.
             */
            "destinationPort"?: number;
            /**
             * The name of a specific filter to apply the patch to.
             */
            "filter"?: {
              /**
               * The filter name to match on.
               */
              "name"?: string;
              "subFilter"?: {
                /**
                 * The filter name to match on.
                 */
                "name"?: string;
              };
            };
            /**
             * The name assigned to the filter chain.
             */
            "name"?: string;
            /**
             * The SNI value used by a filter chain's match condition.
             */
            "sni"?: string;
            /**
             * Applies only to `SIDECAR_INBOUND` context.
             */
            "transportProtocol"?: string;
          };
          /**
           * Match a specific listener by its name.
           */
          "name"?: string;
          "portName"?: string;
          "portNumber"?: number;
        };
        /**
         * Match on properties associated with a proxy.
         */
        "proxy"?: {
          "metadata"?: {
            [key: string]: string;
          };
          "proxyVersion"?: string;
        };
        /**
         * Match on envoy HTTP route configuration attributes.
         */
        "routeConfiguration"?: {
          "gateway"?: string;
          /**
           * Route configuration name to match on.
           */
          "name"?: string;
          /**
           * Applicable only for GATEWAY context.
           */
          "portName"?: string;
          "portNumber"?: number;
          "vhost"?: {
            "name"?: string;
            /**
             * Match a specific route within the virtual host.
             */
            "route"?: {
              /**
               * Match a route with specific action type.
               */
              "action"?: "ANY" | "ROUTE" | "REDIRECT" | "DIRECT_RESPONSE";
              "name"?: string;
            };
          };
        };
      }, {
        /**
         * Match on envoy cluster attributes.
         */
        "cluster"?: {
          /**
           * The exact name of the cluster to match.
           */
          "name"?: string;
          /**
           * The service port for which this cluster was generated.
           */
          "portNumber"?: number;
          /**
           * The fully qualified service name for this cluster.
           */
          "service"?: string;
          /**
           * The subset associated with the service.
           */
          "subset"?: string;
        };
        /**
         * The specific config generation context to match on.
         */
        "context"?: "ANY" | "SIDECAR_INBOUND" | "SIDECAR_OUTBOUND" | "GATEWAY";
        /**
         * Match on envoy listener attributes.
         */
        "listener": {
          /**
           * Match a specific filter chain in a listener.
           */
          "filterChain"?: {
            /**
             * Applies only to sidecars.
             */
            "applicationProtocols"?: string;
            /**
             * The destination_port value used by a filter chain's match condition.
             */
            "destinationPort"?: number;
            /**
             * The name of a specific filter to apply the patch to.
             */
            "filter"?: {
              /**
               * The filter name to match on.
               */
              "name"?: string;
              "subFilter"?: {
                /**
                 * The filter name to match on.
                 */
                "name"?: string;
              };
            };
            /**
             * The name assigned to the filter chain.
             */
            "name"?: string;
            /**
             * The SNI value used by a filter chain's match condition.
             */
            "sni"?: string;
            /**
             * Applies only to `SIDECAR_INBOUND` context.
             */
            "transportProtocol"?: string;
          };
          /**
           * Match a specific listener by its name.
           */
          "name"?: string;
          "portName"?: string;
          "portNumber"?: number;
        };
        /**
         * Match on properties associated with a proxy.
         */
        "proxy"?: {
          "metadata"?: {
            [key: string]: string;
          };
          "proxyVersion"?: string;
        };
        /**
         * Match on envoy HTTP route configuration attributes.
         */
        "routeConfiguration"?: {
          "gateway"?: string;
          /**
           * Route configuration name to match on.
           */
          "name"?: string;
          /**
           * Applicable only for GATEWAY context.
           */
          "portName"?: string;
          "portNumber"?: number;
          "vhost"?: {
            "name"?: string;
            /**
             * Match a specific route within the virtual host.
             */
            "route"?: {
              /**
               * Match a route with specific action type.
               */
              "action"?: "ANY" | "ROUTE" | "REDIRECT" | "DIRECT_RESPONSE";
              "name"?: string;
            };
          };
        };
      } | {
        /**
         * Match on envoy cluster attributes.
         */
        "cluster"?: {
          /**
           * The exact name of the cluster to match.
           */
          "name"?: string;
          /**
           * The service port for which this cluster was generated.
           */
          "portNumber"?: number;
          /**
           * The fully qualified service name for this cluster.
           */
          "service"?: string;
          /**
           * The subset associated with the service.
           */
          "subset"?: string;
        };
        /**
         * The specific config generation context to match on.
         */
        "context"?: "ANY" | "SIDECAR_INBOUND" | "SIDECAR_OUTBOUND" | "GATEWAY";
        /**
         * Match on envoy listener attributes.
         */
        "listener"?: {
          /**
           * Match a specific filter chain in a listener.
           */
          "filterChain"?: {
            /**
             * Applies only to sidecars.
             */
            "applicationProtocols"?: string;
            /**
             * The destination_port value used by a filter chain's match condition.
             */
            "destinationPort"?: number;
            /**
             * The name of a specific filter to apply the patch to.
             */
            "filter"?: {
              /**
               * The filter name to match on.
               */
              "name"?: string;
              "subFilter"?: {
                /**
                 * The filter name to match on.
                 */
                "name"?: string;
              };
            };
            /**
             * The name assigned to the filter chain.
             */
            "name"?: string;
            /**
             * The SNI value used by a filter chain's match condition.
             */
            "sni"?: string;
            /**
             * Applies only to `SIDECAR_INBOUND` context.
             */
            "transportProtocol"?: string;
          };
          /**
           * Match a specific listener by its name.
           */
          "name"?: string;
          "portName"?: string;
          "portNumber"?: number;
        };
        /**
         * Match on properties associated with a proxy.
         */
        "proxy"?: {
          "metadata"?: {
            [key: string]: string;
          };
          "proxyVersion"?: string;
        };
        /**
         * Match on envoy HTTP route configuration attributes.
         */
        "routeConfiguration": {
          "gateway"?: string;
          /**
           * Route configuration name to match on.
           */
          "name"?: string;
          /**
           * Applicable only for GATEWAY context.
           */
          "portName"?: string;
          "portNumber"?: number;
          "vhost"?: {
            "name"?: string;
            /**
             * Match a specific route within the virtual host.
             */
            "route"?: {
              /**
               * Match a route with specific action type.
               */
              "action"?: "ANY" | "ROUTE" | "REDIRECT" | "DIRECT_RESPONSE";
              "name"?: string;
            };
          };
        };
      } | {
        /**
         * Match on envoy cluster attributes.
         */
        "cluster": {
          /**
           * The exact name of the cluster to match.
           */
          "name"?: string;
          /**
           * The service port for which this cluster was generated.
           */
          "portNumber"?: number;
          /**
           * The fully qualified service name for this cluster.
           */
          "service"?: string;
          /**
           * The subset associated with the service.
           */
          "subset"?: string;
        };
        /**
         * The specific config generation context to match on.
         */
        "context"?: "ANY" | "SIDECAR_INBOUND" | "SIDECAR_OUTBOUND" | "GATEWAY";
        /**
         * Match on envoy listener attributes.
         */
        "listener"?: {
          /**
           * Match a specific filter chain in a listener.
           */
          "filterChain"?: {
            /**
             * Applies only to sidecars.
             */
            "applicationProtocols"?: string;
            /**
             * The destination_port value used by a filter chain's match condition.
             */
            "destinationPort"?: number;
            /**
             * The name of a specific filter to apply the patch to.
             */
            "filter"?: {
              /**
               * The filter name to match on.
               */
              "name"?: string;
              "subFilter"?: {
                /**
                 * The filter name to match on.
                 */
                "name"?: string;
              };
            };
            /**
             * The name assigned to the filter chain.
             */
            "name"?: string;
            /**
             * The SNI value used by a filter chain's match condition.
             */
            "sni"?: string;
            /**
             * Applies only to `SIDECAR_INBOUND` context.
             */
            "transportProtocol"?: string;
          };
          /**
           * Match a specific listener by its name.
           */
          "name"?: string;
          "portName"?: string;
          "portNumber"?: number;
        };
        /**
         * Match on properties associated with a proxy.
         */
        "proxy"?: {
          "metadata"?: {
            [key: string]: string;
          };
          "proxyVersion"?: string;
        };
        /**
         * Match on envoy HTTP route configuration attributes.
         */
        "routeConfiguration"?: {
          "gateway"?: string;
          /**
           * Route configuration name to match on.
           */
          "name"?: string;
          /**
           * Applicable only for GATEWAY context.
           */
          "portName"?: string;
          "portNumber"?: number;
          "vhost"?: {
            "name"?: string;
            /**
             * Match a specific route within the virtual host.
             */
            "route"?: {
              /**
               * Match a route with specific action type.
               */
              "action"?: "ANY" | "ROUTE" | "REDIRECT" | "DIRECT_RESPONSE";
              "name"?: string;
            };
          };
        };
      }> | {
        /**
         * Match on envoy cluster attributes.
         */
        "cluster"?: {
          /**
           * The exact name of the cluster to match.
           */
          "name"?: string;
          /**
           * The service port for which this cluster was generated.
           */
          "portNumber"?: number;
          /**
           * The fully qualified service name for this cluster.
           */
          "service"?: string;
          /**
           * The subset associated with the service.
           */
          "subset"?: string;
        };
        /**
         * The specific config generation context to match on.
         */
        "context"?: "ANY" | "SIDECAR_INBOUND" | "SIDECAR_OUTBOUND" | "GATEWAY";
        /**
         * Match on envoy listener attributes.
         */
        "listener": {
          /**
           * Match a specific filter chain in a listener.
           */
          "filterChain"?: {
            /**
             * Applies only to sidecars.
             */
            "applicationProtocols"?: string;
            /**
             * The destination_port value used by a filter chain's match condition.
             */
            "destinationPort"?: number;
            /**
             * The name of a specific filter to apply the patch to.
             */
            "filter"?: {
              /**
               * The filter name to match on.
               */
              "name"?: string;
              "subFilter"?: {
                /**
                 * The filter name to match on.
                 */
                "name"?: string;
              };
            };
            /**
             * The name assigned to the filter chain.
             */
            "name"?: string;
            /**
             * The SNI value used by a filter chain's match condition.
             */
            "sni"?: string;
            /**
             * Applies only to `SIDECAR_INBOUND` context.
             */
            "transportProtocol"?: string;
          };
          /**
           * Match a specific listener by its name.
           */
          "name"?: string;
          "portName"?: string;
          "portNumber"?: number;
        };
        /**
         * Match on properties associated with a proxy.
         */
        "proxy"?: {
          "metadata"?: {
            [key: string]: string;
          };
          "proxyVersion"?: string;
        };
        /**
         * Match on envoy HTTP route configuration attributes.
         */
        "routeConfiguration"?: {
          "gateway"?: string;
          /**
           * Route configuration name to match on.
           */
          "name"?: string;
          /**
           * Applicable only for GATEWAY context.
           */
          "portName"?: string;
          "portNumber"?: number;
          "vhost"?: {
            "name"?: string;
            /**
             * Match a specific route within the virtual host.
             */
            "route"?: {
              /**
               * Match a route with specific action type.
               */
              "action"?: "ANY" | "ROUTE" | "REDIRECT" | "DIRECT_RESPONSE";
              "name"?: string;
            };
          };
        };
      } | {
        /**
         * Match on envoy cluster attributes.
         */
        "cluster"?: {
          /**
           * The exact name of the cluster to match.
           */
          "name"?: string;
          /**
           * The service port for which this cluster was generated.
           */
          "portNumber"?: number;
          /**
           * The fully qualified service name for this cluster.
           */
          "service"?: string;
          /**
           * The subset associated with the service.
           */
          "subset"?: string;
        };
        /**
         * The specific config generation context to match on.
         */
        "context"?: "ANY" | "SIDECAR_INBOUND" | "SIDECAR_OUTBOUND" | "GATEWAY";
        /**
         * Match on envoy listener attributes.
         */
        "listener"?: {
          /**
           * Match a specific filter chain in a listener.
           */
          "filterChain"?: {
            /**
             * Applies only to sidecars.
             */
            "applicationProtocols"?: string;
            /**
             * The destination_port value used by a filter chain's match condition.
             */
            "destinationPort"?: number;
            /**
             * The name of a specific filter to apply the patch to.
             */
            "filter"?: {
              /**
               * The filter name to match on.
               */
              "name"?: string;
              "subFilter"?: {
                /**
                 * The filter name to match on.
                 */
                "name"?: string;
              };
            };
            /**
             * The name assigned to the filter chain.
             */
            "name"?: string;
            /**
             * The SNI value used by a filter chain's match condition.
             */
            "sni"?: string;
            /**
             * Applies only to `SIDECAR_INBOUND` context.
             */
            "transportProtocol"?: string;
          };
          /**
           * Match a specific listener by its name.
           */
          "name"?: string;
          "portName"?: string;
          "portNumber"?: number;
        };
        /**
         * Match on properties associated with a proxy.
         */
        "proxy"?: {
          "metadata"?: {
            [key: string]: string;
          };
          "proxyVersion"?: string;
        };
        /**
         * Match on envoy HTTP route configuration attributes.
         */
        "routeConfiguration": {
          "gateway"?: string;
          /**
           * Route configuration name to match on.
           */
          "name"?: string;
          /**
           * Applicable only for GATEWAY context.
           */
          "portName"?: string;
          "portNumber"?: number;
          "vhost"?: {
            "name"?: string;
            /**
             * Match a specific route within the virtual host.
             */
            "route"?: {
              /**
               * Match a route with specific action type.
               */
              "action"?: "ANY" | "ROUTE" | "REDIRECT" | "DIRECT_RESPONSE";
              "name"?: string;
            };
          };
        };
      } | {
        /**
         * Match on envoy cluster attributes.
         */
        "cluster": {
          /**
           * The exact name of the cluster to match.
           */
          "name"?: string;
          /**
           * The service port for which this cluster was generated.
           */
          "portNumber"?: number;
          /**
           * The fully qualified service name for this cluster.
           */
          "service"?: string;
          /**
           * The subset associated with the service.
           */
          "subset"?: string;
        };
        /**
         * The specific config generation context to match on.
         */
        "context"?: "ANY" | "SIDECAR_INBOUND" | "SIDECAR_OUTBOUND" | "GATEWAY";
        /**
         * Match on envoy listener attributes.
         */
        "listener"?: {
          /**
           * Match a specific filter chain in a listener.
           */
          "filterChain"?: {
            /**
             * Applies only to sidecars.
             */
            "applicationProtocols"?: string;
            /**
             * The destination_port value used by a filter chain's match condition.
             */
            "destinationPort"?: number;
            /**
             * The name of a specific filter to apply the patch to.
             */
            "filter"?: {
              /**
               * The filter name to match on.
               */
              "name"?: string;
              "subFilter"?: {
                /**
                 * The filter name to match on.
                 */
                "name"?: string;
              };
            };
            /**
             * The name assigned to the filter chain.
             */
            "name"?: string;
            /**
             * The SNI value used by a filter chain's match condition.
             */
            "sni"?: string;
            /**
             * Applies only to `SIDECAR_INBOUND` context.
             */
            "transportProtocol"?: string;
          };
          /**
           * Match a specific listener by its name.
           */
          "name"?: string;
          "portName"?: string;
          "portNumber"?: number;
        };
        /**
         * Match on properties associated with a proxy.
         */
        "proxy"?: {
          "metadata"?: {
            [key: string]: string;
          };
          "proxyVersion"?: string;
        };
        /**
         * Match on envoy HTTP route configuration attributes.
         */
        "routeConfiguration"?: {
          "gateway"?: string;
          /**
           * Route configuration name to match on.
           */
          "name"?: string;
          /**
           * Applicable only for GATEWAY context.
           */
          "portName"?: string;
          "portNumber"?: number;
          "vhost"?: {
            "name"?: string;
            /**
             * Match a specific route within the virtual host.
             */
            "route"?: {
              /**
               * Match a route with specific action type.
               */
              "action"?: "ANY" | "ROUTE" | "REDIRECT" | "DIRECT_RESPONSE";
              "name"?: string;
            };
          };
        };
      };
      /**
       * The patch to apply along with the operation.
       */
      "patch"?: {
        /**
         * Determines the filter insertion order.
         */
        "filterClass"?: "UNSPECIFIED" | "AUTHN" | "AUTHZ" | "STATS";
        /**
         * Determines how the patch should be applied.
         */
        "operation"?: "INVALID" | "MERGE" | "ADD" | "REMOVE" | "INSERT_BEFORE" | "INSERT_AFTER" | "INSERT_FIRST" | "REPLACE";
        /**
         * The JSON config of the object being patched.
         */
        "value"?: {
        };
      };
    }>;
    /**
     * Priority defines the order in which patch sets are applied within a context.
     */
    "priority"?: number;
    "workloadSelector"?: {
      "labels"?: {
        [key: string]: string;
      };
    };
  };
  "status"?: {
  };
  "apiVersion": "networking.istio.io/v1alpha3";
  "kind": "EnvoyFilter";
  "metadata"?: IObjectMeta;
}

export class EnvoyFilter extends Model<IEnvoyFilter> implements IEnvoyFilter {
  "spec"?: IEnvoyFilter["spec"];
  "status"?: IEnvoyFilter["status"];
  "apiVersion": IEnvoyFilter["apiVersion"];
  "kind": IEnvoyFilter["kind"];
  "metadata"?: IEnvoyFilter["metadata"];

static apiVersion: IEnvoyFilter["apiVersion"] = "networking.istio.io/v1alpha3";
static kind: IEnvoyFilter["kind"] = "EnvoyFilter";
static is = createTypeMetaGuard<IEnvoyFilter>(EnvoyFilter);

constructor(data?: ModelData<IEnvoyFilter>) {
  super({
    apiVersion: EnvoyFilter.apiVersion,
    kind: EnvoyFilter.kind,
    ...data
  } as IEnvoyFilter);
}
}


setSchema(EnvoyFilter, schemaId, () => {
  addSchema();
  register(schemaId, schema);
});
