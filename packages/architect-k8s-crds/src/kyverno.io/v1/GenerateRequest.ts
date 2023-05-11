import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { addSchema } from "@kubernetes-models/apimachinery/_schemas/IoK8sApimachineryPkgApisMetaV1ObjectMeta";
import { Model, setSchema, ModelData, createTypeMetaGuard } from "@kubernetes-models/base";
import { register } from "@kubernetes-models/validate";

const schemaId = "kyverno.io.v1.GenerateRequest";
const schema = {
  "type": "object",
  "properties": {
    "apiVersion": {
      "type": "string",
      "enum": [
        "kyverno.io/v1"
      ]
    },
    "kind": {
      "type": "string",
      "enum": [
        "GenerateRequest"
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
        "context": {
          "properties": {
            "admissionRequestInfo": {
              "properties": {
                "admissionRequest": {
                  "type": "string",
                  "nullable": true
                },
                "operation": {
                  "type": "string",
                  "nullable": true
                }
              },
              "type": "object",
              "nullable": true
            },
            "userInfo": {
              "properties": {
                "clusterRoles": {
                  "items": {
                    "type": "string"
                  },
                  "nullable": true,
                  "type": "array"
                },
                "roles": {
                  "items": {
                    "type": "string"
                  },
                  "nullable": true,
                  "type": "array"
                },
                "userInfo": {
                  "properties": {
                    "extra": {
                      "additionalProperties": {
                        "items": {
                          "type": "string"
                        },
                        "type": "array"
                      },
                      "type": "object",
                      "properties": {},
                      "nullable": true
                    },
                    "groups": {
                      "items": {
                        "type": "string"
                      },
                      "type": "array",
                      "nullable": true
                    },
                    "uid": {
                      "type": "string",
                      "nullable": true
                    },
                    "username": {
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
          "type": "object"
        },
        "policy": {
          "type": "string"
        },
        "resource": {
          "properties": {
            "apiVersion": {
              "type": "string",
              "nullable": true
            },
            "kind": {
              "type": "string",
              "nullable": true
            },
            "name": {
              "type": "string",
              "nullable": true
            },
            "namespace": {
              "type": "string",
              "nullable": true
            }
          },
          "type": "object"
        }
      },
      "required": [
        "context",
        "policy",
        "resource"
      ],
      "type": "object"
    },
    "status": {
      "properties": {
        "generatedResources": {
          "items": {
            "properties": {
              "apiVersion": {
                "type": "string",
                "nullable": true
              },
              "kind": {
                "type": "string",
                "nullable": true
              },
              "name": {
                "type": "string",
                "nullable": true
              },
              "namespace": {
                "type": "string",
                "nullable": true
              }
            },
            "type": "object"
          },
          "type": "array",
          "nullable": true
        },
        "message": {
          "type": "string",
          "nullable": true
        },
        "state": {
          "type": "string"
        }
      },
      "required": [
        "state"
      ],
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
 * GenerateRequest is a request to process generate rule.
 */
export interface IGenerateRequest {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "kyverno.io/v1";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "GenerateRequest";
  "metadata"?: IObjectMeta;
  /**
   * Spec is the information to identify the generate request.
   */
  "spec": {
    /**
     * Context ...
     */
    "context": {
      /**
       * AdmissionRequestInfoObject stores the admission request and operation details
       */
      "admissionRequestInfo"?: {
        "admissionRequest"?: string;
        /**
         * Operation is the type of resource operation being checked for admission control
         */
        "operation"?: string;
      };
      /**
       * RequestInfo contains permission info carried in an admission request.
       */
      "userInfo"?: {
        /**
         * ClusterRoles is a list of possible clusterRoles send the request.
         */
        "clusterRoles"?: Array<string>;
        /**
         * Roles is a list of possible role send the request.
         */
        "roles"?: Array<string>;
        /**
         * UserInfo is the userInfo carried in the admission request.
         */
        "userInfo"?: {
          /**
           * Any additional information provided by the authenticator.
           */
          "extra"?: {
            [key: string]: Array<string>;
          };
          /**
           * The names of groups this user is a part of.
           */
          "groups"?: Array<string>;
          /**
           * A unique value that identifies this user across time. If this user is deleted and another user by the same name is added, they will have different UIDs.
           */
          "uid"?: string;
          /**
           * The name that uniquely identifies this user among all active users.
           */
          "username"?: string;
        };
      };
    };
    /**
     * Specifies the name of the policy.
     */
    "policy": string;
    /**
     * ResourceSpec is the information to identify the generate request.
     */
    "resource": {
      /**
       * APIVersion specifies resource apiVersion.
       */
      "apiVersion"?: string;
      /**
       * Kind specifies resource kind.
       */
      "kind"?: string;
      /**
       * Name specifies the resource name.
       */
      "name"?: string;
      /**
       * Namespace specifies resource namespace.
       */
      "namespace"?: string;
    };
  };
  /**
   * Status contains statistics related to generate request.
   */
  "status"?: {
    /**
     * This will track the resources that are generated by the generate Policy. Will be used during clean up resources.
     */
    "generatedResources"?: Array<{
      /**
       * APIVersion specifies resource apiVersion.
       */
      "apiVersion"?: string;
      /**
       * Kind specifies resource kind.
       */
      "kind"?: string;
      /**
       * Name specifies the resource name.
       */
      "name"?: string;
      /**
       * Namespace specifies resource namespace.
       */
      "namespace"?: string;
    }>;
    /**
     * Specifies request status message.
     */
    "message"?: string;
    /**
     * State represents state of the generate request.
     */
    "state": string;
  };
}

/**
 * GenerateRequest is a request to process generate rule.
 */
export class GenerateRequest extends Model<IGenerateRequest> implements IGenerateRequest {
  "apiVersion": IGenerateRequest["apiVersion"];
  "kind": IGenerateRequest["kind"];
  "metadata"?: IGenerateRequest["metadata"];
  "spec": IGenerateRequest["spec"];
  "status"?: IGenerateRequest["status"];

static apiVersion: IGenerateRequest["apiVersion"] = "kyverno.io/v1";
static kind: IGenerateRequest["kind"] = "GenerateRequest";
static is = createTypeMetaGuard<IGenerateRequest>(GenerateRequest);

constructor(data?: ModelData<IGenerateRequest>) {
  super({
    apiVersion: GenerateRequest.apiVersion,
    kind: GenerateRequest.kind,
    ...data
  } as IGenerateRequest);
}
}


setSchema(GenerateRequest, schemaId, () => {
  addSchema();
  register(schemaId, schema);
});
