import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { addSchema } from "@kubernetes-models/apimachinery/_schemas/IoK8sApimachineryPkgApisMetaV1ObjectMeta";
import { Model, setSchema, ModelData, createTypeMetaGuard } from "@kubernetes-models/base";
import { register } from "@kubernetes-models/validate";

const schemaId = "security.istio.io.v1beta1.AuthorizationPolicy";
const schema = {
  "type": "object",
  "properties": {
    "spec": {
      "oneOf": [
        {
          "not": {
            "anyOf": [
              {
                "required": [
                  "provider"
                ]
              }
            ]
          }
        },
        {
          "required": [
            "provider"
          ]
        }
      ],
      "properties": {
        "action": {
          "enum": [
            "ALLOW",
            "DENY",
            "AUDIT",
            "CUSTOM"
          ],
          "type": "string",
          "nullable": true
        },
        "provider": {
          "properties": {
            "name": {
              "type": "string",
              "nullable": true
            }
          },
          "type": "object",
          "nullable": true
        },
        "rules": {
          "items": {
            "properties": {
              "from": {
                "items": {
                  "properties": {
                    "source": {
                      "properties": {
                        "ipBlocks": {
                          "items": {
                            "type": "string"
                          },
                          "type": "array",
                          "nullable": true
                        },
                        "namespaces": {
                          "items": {
                            "type": "string"
                          },
                          "type": "array",
                          "nullable": true
                        },
                        "notIpBlocks": {
                          "items": {
                            "type": "string"
                          },
                          "type": "array",
                          "nullable": true
                        },
                        "notNamespaces": {
                          "items": {
                            "type": "string"
                          },
                          "type": "array",
                          "nullable": true
                        },
                        "notPrincipals": {
                          "items": {
                            "type": "string"
                          },
                          "type": "array",
                          "nullable": true
                        },
                        "notRemoteIpBlocks": {
                          "items": {
                            "type": "string"
                          },
                          "type": "array",
                          "nullable": true
                        },
                        "notRequestPrincipals": {
                          "items": {
                            "type": "string"
                          },
                          "type": "array",
                          "nullable": true
                        },
                        "principals": {
                          "items": {
                            "type": "string"
                          },
                          "type": "array",
                          "nullable": true
                        },
                        "remoteIpBlocks": {
                          "items": {
                            "type": "string"
                          },
                          "type": "array",
                          "nullable": true
                        },
                        "requestPrincipals": {
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
              "to": {
                "items": {
                  "properties": {
                    "operation": {
                      "properties": {
                        "hosts": {
                          "items": {
                            "type": "string"
                          },
                          "type": "array",
                          "nullable": true
                        },
                        "methods": {
                          "items": {
                            "type": "string"
                          },
                          "type": "array",
                          "nullable": true
                        },
                        "notHosts": {
                          "items": {
                            "type": "string"
                          },
                          "type": "array",
                          "nullable": true
                        },
                        "notMethods": {
                          "items": {
                            "type": "string"
                          },
                          "type": "array",
                          "nullable": true
                        },
                        "notPaths": {
                          "items": {
                            "type": "string"
                          },
                          "type": "array",
                          "nullable": true
                        },
                        "notPorts": {
                          "items": {
                            "type": "string"
                          },
                          "type": "array",
                          "nullable": true
                        },
                        "paths": {
                          "items": {
                            "type": "string"
                          },
                          "type": "array",
                          "nullable": true
                        },
                        "ports": {
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
              "when": {
                "items": {
                  "properties": {
                    "key": {
                      "type": "string",
                      "nullable": true
                    },
                    "notValues": {
                      "items": {
                        "type": "string"
                      },
                      "type": "array",
                      "nullable": true
                    },
                    "values": {
                      "items": {
                        "type": "string"
                      },
                      "type": "array",
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
        "security.istio.io/v1beta1"
      ]
    },
    "kind": {
      "type": "string",
      "enum": [
        "AuthorizationPolicy"
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

export interface IAuthorizationPolicy {
  /**
   * Configuration for access control on workloads. See more details at: https://istio.io/docs/reference/config/security/authorization-policy.html
   */
  "spec"?: {
    /**
     * Optional.
     */
    "action"?: "ALLOW" | "DENY" | "AUDIT" | "CUSTOM";
    /**
     * Specifies detailed configuration of the CUSTOM action.
     */
    "provider"?: {
      /**
       * Specifies the name of the extension provider.
       */
      "name"?: string;
    };
    /**
     * Optional.
     */
    "rules"?: Array<{
      /**
       * Optional.
       */
      "from"?: Array<{
        /**
         * Source specifies the source of a request.
         */
        "source"?: {
          /**
           * Optional.
           */
          "ipBlocks"?: Array<string>;
          /**
           * Optional.
           */
          "namespaces"?: Array<string>;
          /**
           * Optional.
           */
          "notIpBlocks"?: Array<string>;
          /**
           * Optional.
           */
          "notNamespaces"?: Array<string>;
          /**
           * Optional.
           */
          "notPrincipals"?: Array<string>;
          /**
           * Optional.
           */
          "notRemoteIpBlocks"?: Array<string>;
          /**
           * Optional.
           */
          "notRequestPrincipals"?: Array<string>;
          /**
           * Optional.
           */
          "principals"?: Array<string>;
          /**
           * Optional.
           */
          "remoteIpBlocks"?: Array<string>;
          /**
           * Optional.
           */
          "requestPrincipals"?: Array<string>;
        };
      }>;
      /**
       * Optional.
       */
      "to"?: Array<{
        /**
         * Operation specifies the operation of a request.
         */
        "operation"?: {
          /**
           * Optional.
           */
          "hosts"?: Array<string>;
          /**
           * Optional.
           */
          "methods"?: Array<string>;
          /**
           * Optional.
           */
          "notHosts"?: Array<string>;
          /**
           * Optional.
           */
          "notMethods"?: Array<string>;
          /**
           * Optional.
           */
          "notPaths"?: Array<string>;
          /**
           * Optional.
           */
          "notPorts"?: Array<string>;
          /**
           * Optional.
           */
          "paths"?: Array<string>;
          /**
           * Optional.
           */
          "ports"?: Array<string>;
        };
      }>;
      /**
       * Optional.
       */
      "when"?: Array<{
        /**
         * The name of an Istio attribute.
         */
        "key"?: string;
        /**
         * Optional.
         */
        "notValues"?: Array<string>;
        /**
         * Optional.
         */
        "values"?: Array<string>;
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
  } & (Exclude<{
    /**
     * Optional.
     */
    "action"?: "ALLOW" | "DENY" | "AUDIT" | "CUSTOM";
    /**
     * Specifies detailed configuration of the CUSTOM action.
     */
    "provider"?: {
      /**
       * Specifies the name of the extension provider.
       */
      "name"?: string;
    };
    /**
     * Optional.
     */
    "rules"?: Array<{
      /**
       * Optional.
       */
      "from"?: Array<{
        /**
         * Source specifies the source of a request.
         */
        "source"?: {
          /**
           * Optional.
           */
          "ipBlocks"?: Array<string>;
          /**
           * Optional.
           */
          "namespaces"?: Array<string>;
          /**
           * Optional.
           */
          "notIpBlocks"?: Array<string>;
          /**
           * Optional.
           */
          "notNamespaces"?: Array<string>;
          /**
           * Optional.
           */
          "notPrincipals"?: Array<string>;
          /**
           * Optional.
           */
          "notRemoteIpBlocks"?: Array<string>;
          /**
           * Optional.
           */
          "notRequestPrincipals"?: Array<string>;
          /**
           * Optional.
           */
          "principals"?: Array<string>;
          /**
           * Optional.
           */
          "remoteIpBlocks"?: Array<string>;
          /**
           * Optional.
           */
          "requestPrincipals"?: Array<string>;
        };
      }>;
      /**
       * Optional.
       */
      "to"?: Array<{
        /**
         * Operation specifies the operation of a request.
         */
        "operation"?: {
          /**
           * Optional.
           */
          "hosts"?: Array<string>;
          /**
           * Optional.
           */
          "methods"?: Array<string>;
          /**
           * Optional.
           */
          "notHosts"?: Array<string>;
          /**
           * Optional.
           */
          "notMethods"?: Array<string>;
          /**
           * Optional.
           */
          "notPaths"?: Array<string>;
          /**
           * Optional.
           */
          "notPorts"?: Array<string>;
          /**
           * Optional.
           */
          "paths"?: Array<string>;
          /**
           * Optional.
           */
          "ports"?: Array<string>;
        };
      }>;
      /**
       * Optional.
       */
      "when"?: Array<{
        /**
         * The name of an Istio attribute.
         */
        "key"?: string;
        /**
         * Optional.
         */
        "notValues"?: Array<string>;
        /**
         * Optional.
         */
        "values"?: Array<string>;
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
  }, {
    /**
     * Optional.
     */
    "action"?: "ALLOW" | "DENY" | "AUDIT" | "CUSTOM";
    /**
     * Specifies detailed configuration of the CUSTOM action.
     */
    "provider"?: {
      /**
       * Specifies the name of the extension provider.
       */
      "name"?: string;
    };
    /**
     * Optional.
     */
    "rules"?: Array<{
      /**
       * Optional.
       */
      "from"?: Array<{
        /**
         * Source specifies the source of a request.
         */
        "source"?: {
          /**
           * Optional.
           */
          "ipBlocks"?: Array<string>;
          /**
           * Optional.
           */
          "namespaces"?: Array<string>;
          /**
           * Optional.
           */
          "notIpBlocks"?: Array<string>;
          /**
           * Optional.
           */
          "notNamespaces"?: Array<string>;
          /**
           * Optional.
           */
          "notPrincipals"?: Array<string>;
          /**
           * Optional.
           */
          "notRemoteIpBlocks"?: Array<string>;
          /**
           * Optional.
           */
          "notRequestPrincipals"?: Array<string>;
          /**
           * Optional.
           */
          "principals"?: Array<string>;
          /**
           * Optional.
           */
          "remoteIpBlocks"?: Array<string>;
          /**
           * Optional.
           */
          "requestPrincipals"?: Array<string>;
        };
      }>;
      /**
       * Optional.
       */
      "to"?: Array<{
        /**
         * Operation specifies the operation of a request.
         */
        "operation"?: {
          /**
           * Optional.
           */
          "hosts"?: Array<string>;
          /**
           * Optional.
           */
          "methods"?: Array<string>;
          /**
           * Optional.
           */
          "notHosts"?: Array<string>;
          /**
           * Optional.
           */
          "notMethods"?: Array<string>;
          /**
           * Optional.
           */
          "notPaths"?: Array<string>;
          /**
           * Optional.
           */
          "notPorts"?: Array<string>;
          /**
           * Optional.
           */
          "paths"?: Array<string>;
          /**
           * Optional.
           */
          "ports"?: Array<string>;
        };
      }>;
      /**
       * Optional.
       */
      "when"?: Array<{
        /**
         * The name of an Istio attribute.
         */
        "key"?: string;
        /**
         * Optional.
         */
        "notValues"?: Array<string>;
        /**
         * Optional.
         */
        "values"?: Array<string>;
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
  } & ({
    /**
     * Optional.
     */
    "action"?: "ALLOW" | "DENY" | "AUDIT" | "CUSTOM";
    /**
     * Specifies detailed configuration of the CUSTOM action.
     */
    "provider": {
      /**
       * Specifies the name of the extension provider.
       */
      "name"?: string;
    };
    /**
     * Optional.
     */
    "rules"?: Array<{
      /**
       * Optional.
       */
      "from"?: Array<{
        /**
         * Source specifies the source of a request.
         */
        "source"?: {
          /**
           * Optional.
           */
          "ipBlocks"?: Array<string>;
          /**
           * Optional.
           */
          "namespaces"?: Array<string>;
          /**
           * Optional.
           */
          "notIpBlocks"?: Array<string>;
          /**
           * Optional.
           */
          "notNamespaces"?: Array<string>;
          /**
           * Optional.
           */
          "notPrincipals"?: Array<string>;
          /**
           * Optional.
           */
          "notRemoteIpBlocks"?: Array<string>;
          /**
           * Optional.
           */
          "notRequestPrincipals"?: Array<string>;
          /**
           * Optional.
           */
          "principals"?: Array<string>;
          /**
           * Optional.
           */
          "remoteIpBlocks"?: Array<string>;
          /**
           * Optional.
           */
          "requestPrincipals"?: Array<string>;
        };
      }>;
      /**
       * Optional.
       */
      "to"?: Array<{
        /**
         * Operation specifies the operation of a request.
         */
        "operation"?: {
          /**
           * Optional.
           */
          "hosts"?: Array<string>;
          /**
           * Optional.
           */
          "methods"?: Array<string>;
          /**
           * Optional.
           */
          "notHosts"?: Array<string>;
          /**
           * Optional.
           */
          "notMethods"?: Array<string>;
          /**
           * Optional.
           */
          "notPaths"?: Array<string>;
          /**
           * Optional.
           */
          "notPorts"?: Array<string>;
          /**
           * Optional.
           */
          "paths"?: Array<string>;
          /**
           * Optional.
           */
          "ports"?: Array<string>;
        };
      }>;
      /**
       * Optional.
       */
      "when"?: Array<{
        /**
         * The name of an Istio attribute.
         */
        "key"?: string;
        /**
         * Optional.
         */
        "notValues"?: Array<string>;
        /**
         * Optional.
         */
        "values"?: Array<string>;
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
  })> | {
    /**
     * Optional.
     */
    "action"?: "ALLOW" | "DENY" | "AUDIT" | "CUSTOM";
    /**
     * Specifies detailed configuration of the CUSTOM action.
     */
    "provider": {
      /**
       * Specifies the name of the extension provider.
       */
      "name"?: string;
    };
    /**
     * Optional.
     */
    "rules"?: Array<{
      /**
       * Optional.
       */
      "from"?: Array<{
        /**
         * Source specifies the source of a request.
         */
        "source"?: {
          /**
           * Optional.
           */
          "ipBlocks"?: Array<string>;
          /**
           * Optional.
           */
          "namespaces"?: Array<string>;
          /**
           * Optional.
           */
          "notIpBlocks"?: Array<string>;
          /**
           * Optional.
           */
          "notNamespaces"?: Array<string>;
          /**
           * Optional.
           */
          "notPrincipals"?: Array<string>;
          /**
           * Optional.
           */
          "notRemoteIpBlocks"?: Array<string>;
          /**
           * Optional.
           */
          "notRequestPrincipals"?: Array<string>;
          /**
           * Optional.
           */
          "principals"?: Array<string>;
          /**
           * Optional.
           */
          "remoteIpBlocks"?: Array<string>;
          /**
           * Optional.
           */
          "requestPrincipals"?: Array<string>;
        };
      }>;
      /**
       * Optional.
       */
      "to"?: Array<{
        /**
         * Operation specifies the operation of a request.
         */
        "operation"?: {
          /**
           * Optional.
           */
          "hosts"?: Array<string>;
          /**
           * Optional.
           */
          "methods"?: Array<string>;
          /**
           * Optional.
           */
          "notHosts"?: Array<string>;
          /**
           * Optional.
           */
          "notMethods"?: Array<string>;
          /**
           * Optional.
           */
          "notPaths"?: Array<string>;
          /**
           * Optional.
           */
          "notPorts"?: Array<string>;
          /**
           * Optional.
           */
          "paths"?: Array<string>;
          /**
           * Optional.
           */
          "ports"?: Array<string>;
        };
      }>;
      /**
       * Optional.
       */
      "when"?: Array<{
        /**
         * The name of an Istio attribute.
         */
        "key"?: string;
        /**
         * Optional.
         */
        "notValues"?: Array<string>;
        /**
         * Optional.
         */
        "values"?: Array<string>;
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
  });
  "status"?: {
  };
  "apiVersion": "security.istio.io/v1beta1";
  "kind": "AuthorizationPolicy";
  "metadata"?: IObjectMeta;
}

export class AuthorizationPolicy extends Model<IAuthorizationPolicy> implements IAuthorizationPolicy {
  "spec"?: IAuthorizationPolicy["spec"];
  "status"?: IAuthorizationPolicy["status"];
  "apiVersion": IAuthorizationPolicy["apiVersion"];
  "kind": IAuthorizationPolicy["kind"];
  "metadata"?: IAuthorizationPolicy["metadata"];

static apiVersion: IAuthorizationPolicy["apiVersion"] = "security.istio.io/v1beta1";
static kind: IAuthorizationPolicy["kind"] = "AuthorizationPolicy";
static is = createTypeMetaGuard<IAuthorizationPolicy>(AuthorizationPolicy);

constructor(data?: ModelData<IAuthorizationPolicy>) {
  super({
    apiVersion: AuthorizationPolicy.apiVersion,
    kind: AuthorizationPolicy.kind,
    ...data
  } as IAuthorizationPolicy);
}
}


setSchema(AuthorizationPolicy, schemaId, () => {
  addSchema();
  register(schemaId, schema);
});
