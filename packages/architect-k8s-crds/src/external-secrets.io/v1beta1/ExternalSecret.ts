import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { addSchema } from "@kubernetes-models/apimachinery/_schemas/IoK8sApimachineryPkgApisMetaV1ObjectMeta";
import { Model, setSchema, ModelData, createTypeMetaGuard } from "@kubernetes-models/base";
import { register } from "@kubernetes-models/validate";

const schemaId = "external-secrets.io.v1beta1.ExternalSecret";
const schema = {
  "type": "object",
  "properties": {
    "apiVersion": {
      "type": "string",
      "enum": [
        "external-secrets.io/v1beta1"
      ]
    },
    "kind": {
      "type": "string",
      "enum": [
        "ExternalSecret"
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
        "data": {
          "items": {
            "properties": {
              "remoteRef": {
                "properties": {
                  "conversionStrategy": {
                    "default": "Default",
                    "type": "string",
                    "nullable": true
                  },
                  "key": {
                    "type": "string"
                  },
                  "metadataPolicy": {
                    "type": "string",
                    "nullable": true
                  },
                  "property": {
                    "type": "string",
                    "nullable": true
                  },
                  "version": {
                    "type": "string",
                    "nullable": true
                  }
                },
                "required": [
                  "key"
                ],
                "type": "object"
              },
              "secretKey": {
                "type": "string"
              }
            },
            "required": [
              "remoteRef",
              "secretKey"
            ],
            "type": "object"
          },
          "type": "array",
          "nullable": true
        },
        "dataFrom": {
          "items": {
            "maxProperties": 1,
            "minProperties": 1,
            "properties": {
              "extract": {
                "properties": {
                  "conversionStrategy": {
                    "default": "Default",
                    "type": "string",
                    "nullable": true
                  },
                  "key": {
                    "type": "string"
                  },
                  "metadataPolicy": {
                    "type": "string",
                    "nullable": true
                  },
                  "property": {
                    "type": "string",
                    "nullable": true
                  },
                  "version": {
                    "type": "string",
                    "nullable": true
                  }
                },
                "required": [
                  "key"
                ],
                "type": "object",
                "nullable": true
              },
              "find": {
                "properties": {
                  "conversionStrategy": {
                    "default": "Default",
                    "type": "string",
                    "nullable": true
                  },
                  "name": {
                    "properties": {
                      "regexp": {
                        "type": "string",
                        "nullable": true
                      }
                    },
                    "type": "object",
                    "nullable": true
                  },
                  "path": {
                    "type": "string",
                    "nullable": true
                  },
                  "tags": {
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
            "type": "object"
          },
          "type": "array",
          "nullable": true
        },
        "refreshInterval": {
          "default": "1h",
          "type": "string",
          "nullable": true
        },
        "secretStoreRef": {
          "properties": {
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
        "target": {
          "properties": {
            "creationPolicy": {
              "default": "Owner",
              "enum": [
                "Owner",
                "Orphan",
                "Merge",
                "None"
              ],
              "type": "string",
              "nullable": true
            },
            "deletionPolicy": {
              "default": "Retain",
              "enum": [
                "Delete",
                "Merge",
                "Retain"
              ],
              "type": "string",
              "nullable": true
            },
            "immutable": {
              "type": "boolean",
              "nullable": true
            },
            "name": {
              "type": "string",
              "nullable": true
            },
            "template": {
              "properties": {
                "data": {
                  "additionalProperties": {
                    "type": "string"
                  },
                  "type": "object",
                  "properties": {},
                  "nullable": true
                },
                "engineVersion": {
                  "default": "v2",
                  "type": "string",
                  "nullable": true
                },
                "metadata": {
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
                "templateFrom": {
                  "items": {
                    "maxProperties": 1,
                    "minProperties": 1,
                    "properties": {
                      "configMap": {
                        "properties": {
                          "items": {
                            "items": {
                              "properties": {
                                "key": {
                                  "type": "string"
                                }
                              },
                              "required": [
                                "key"
                              ],
                              "type": "object"
                            },
                            "type": "array"
                          },
                          "name": {
                            "type": "string"
                          }
                        },
                        "required": [
                          "items",
                          "name"
                        ],
                        "type": "object",
                        "nullable": true
                      },
                      "secret": {
                        "properties": {
                          "items": {
                            "items": {
                              "properties": {
                                "key": {
                                  "type": "string"
                                }
                              },
                              "required": [
                                "key"
                              ],
                              "type": "object"
                            },
                            "type": "array"
                          },
                          "name": {
                            "type": "string"
                          }
                        },
                        "required": [
                          "items",
                          "name"
                        ],
                        "type": "object",
                        "nullable": true
                      }
                    },
                    "type": "object"
                  },
                  "type": "array",
                  "nullable": true
                },
                "type": {
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
      "required": [
        "secretStoreRef"
      ],
      "type": "object",
      "nullable": true
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
              "reason": {
                "type": "string",
                "nullable": true
              },
              "status": {
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
        "refreshTime": {
          "format": "date-time",
          "nullable": true,
          "type": "string"
        },
        "syncedResourceVersion": {
          "type": "string",
          "nullable": true
        }
      },
      "type": "object",
      "nullable": true
    }
  },
  "required": [
    "apiVersion",
    "kind"
  ]
};

/**
 * ExternalSecret is the Schema for the external-secrets API.
 */
export interface IExternalSecret {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "external-secrets.io/v1beta1";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "ExternalSecret";
  "metadata"?: IObjectMeta;
  /**
   * ExternalSecretSpec defines the desired state of ExternalSecret.
   */
  "spec"?: {
    /**
     * Data defines the connection between the Kubernetes Secret keys and the Provider data
     */
    "data"?: Array<{
      /**
       * ExternalSecretDataRemoteRef defines Provider data location.
       */
      "remoteRef": {
        /**
         * Used to define a conversion Strategy
         */
        "conversionStrategy"?: string;
        /**
         * Key is the key used in the Provider, mandatory
         */
        "key": string;
        /**
         * Policy for fetching tags/labels from provider secrets, possible options are Fetch, None. Defaults to None
         */
        "metadataPolicy"?: string;
        /**
         * Used to select a specific property of the Provider value (if a map), if supported
         */
        "property"?: string;
        /**
         * Used to select a specific version of the Provider value, if supported
         */
        "version"?: string;
      };
      "secretKey": string;
    }>;
    /**
     * DataFrom is used to fetch all properties from a specific Provider data If multiple entries are specified, the Secret keys are merged in the specified order
     */
    "dataFrom"?: Array<{
      /**
       * Used to extract multiple key/value pairs from one secret
       */
      "extract"?: {
        /**
         * Used to define a conversion Strategy
         */
        "conversionStrategy"?: string;
        /**
         * Key is the key used in the Provider, mandatory
         */
        "key": string;
        /**
         * Policy for fetching tags/labels from provider secrets, possible options are Fetch, None. Defaults to None
         */
        "metadataPolicy"?: string;
        /**
         * Used to select a specific property of the Provider value (if a map), if supported
         */
        "property"?: string;
        /**
         * Used to select a specific version of the Provider value, if supported
         */
        "version"?: string;
      };
      /**
       * Used to find secrets based on tags or regular expressions
       */
      "find"?: {
        /**
         * Used to define a conversion Strategy
         */
        "conversionStrategy"?: string;
        /**
         * Finds secrets based on the name.
         */
        "name"?: {
          /**
           * Finds secrets base
           */
          "regexp"?: string;
        };
        /**
         * A root path to start the find operations.
         */
        "path"?: string;
        /**
         * Find secrets based on tags.
         */
        "tags"?: {
          [key: string]: string;
        };
      };
    }>;
    /**
     * RefreshInterval is the amount of time before the values are read again from the SecretStore provider Valid time units are "ns", "us" (or "µs"), "ms", "s", "m", "h" May be set to zero to fetch and create it once. Defaults to 1h.
     */
    "refreshInterval"?: string;
    /**
     * SecretStoreRef defines which SecretStore to fetch the ExternalSecret data.
     */
    "secretStoreRef": {
      /**
       * Kind of the SecretStore resource (SecretStore or ClusterSecretStore) Defaults to `SecretStore`
       */
      "kind"?: string;
      /**
       * Name of the SecretStore resource
       */
      "name": string;
    };
    /**
     * ExternalSecretTarget defines the Kubernetes Secret to be created There can be only one target per ExternalSecret.
     */
    "target"?: {
      /**
       * CreationPolicy defines rules on how to create the resulting Secret Defaults to 'Owner'
       */
      "creationPolicy"?: "Owner" | "Orphan" | "Merge" | "None";
      /**
       * DeletionPolicy defines rules on how to delete the resulting Secret Defaults to 'Retain'
       */
      "deletionPolicy"?: "Delete" | "Merge" | "Retain";
      /**
       * Immutable defines if the final secret will be immutable
       */
      "immutable"?: boolean;
      /**
       * Name defines the name of the Secret resource to be managed This field is immutable Defaults to the .metadata.name of the ExternalSecret resource
       */
      "name"?: string;
      /**
       * Template defines a blueprint for the created Secret resource.
       */
      "template"?: {
        "data"?: {
          [key: string]: string;
        };
        "engineVersion"?: string;
        /**
         * ExternalSecretTemplateMetadata defines metadata fields for the Secret blueprint.
         */
        "metadata"?: {
          "annotations"?: {
            [key: string]: string;
          };
          "labels"?: {
            [key: string]: string;
          };
        };
        "templateFrom"?: Array<{
          "configMap"?: {
            "items": Array<{
              "key": string;
            }>;
            "name": string;
          };
          "secret"?: {
            "items": Array<{
              "key": string;
            }>;
            "name": string;
          };
        }>;
        "type"?: string;
      };
    };
  };
  "status"?: {
    "conditions"?: Array<{
      "lastTransitionTime"?: string;
      "message"?: string;
      "reason"?: string;
      "status": string;
      "type": string;
    }>;
    /**
     * refreshTime is the time and date the external secret was fetched and the target secret updated
     */
    "refreshTime"?: string;
    /**
     * SyncedResourceVersion keeps track of the last synced version
     */
    "syncedResourceVersion"?: string;
  };
}

/**
 * ExternalSecret is the Schema for the external-secrets API.
 */
export class ExternalSecret extends Model<IExternalSecret> implements IExternalSecret {
  "apiVersion": IExternalSecret["apiVersion"];
  "kind": IExternalSecret["kind"];
  "metadata"?: IExternalSecret["metadata"];
  "spec"?: IExternalSecret["spec"];
  "status"?: IExternalSecret["status"];

static apiVersion: IExternalSecret["apiVersion"] = "external-secrets.io/v1beta1";
static kind: IExternalSecret["kind"] = "ExternalSecret";
static is = createTypeMetaGuard<IExternalSecret>(ExternalSecret);

constructor(data?: ModelData<IExternalSecret>) {
  super({
    apiVersion: ExternalSecret.apiVersion,
    kind: ExternalSecret.kind,
    ...data
  } as IExternalSecret);
}
}


setSchema(ExternalSecret, schemaId, () => {
  addSchema();
  register(schemaId, schema);
});
