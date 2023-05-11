import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { addSchema } from "@kubernetes-models/apimachinery/_schemas/IoK8sApimachineryPkgApisMetaV1ObjectMeta";
import { Model, setSchema, ModelData, createTypeMetaGuard } from "@kubernetes-models/base";
import { register } from "@kubernetes-models/validate";

const schemaId = "metal.sidero.dev.v1alpha1.Server";
const schema = {
  "type": "object",
  "properties": {
    "apiVersion": {
      "type": "string",
      "enum": [
        "metal.sidero.dev/v1alpha1"
      ]
    },
    "kind": {
      "type": "string",
      "enum": [
        "Server"
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
        "accepted": {
          "type": "boolean"
        },
        "bmc": {
          "properties": {
            "endpoint": {
              "type": "string"
            },
            "interface": {
              "type": "string",
              "nullable": true
            },
            "pass": {
              "type": "string",
              "nullable": true
            },
            "passFrom": {
              "properties": {
                "secretKeyRef": {
                  "properties": {
                    "key": {
                      "type": "string"
                    },
                    "name": {
                      "type": "string"
                    },
                    "namespace": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "key",
                    "name",
                    "namespace"
                  ],
                  "type": "object",
                  "nullable": true
                }
              },
              "type": "object",
              "nullable": true
            },
            "port": {
              "format": "int32",
              "type": "integer",
              "nullable": true
            },
            "user": {
              "type": "string",
              "nullable": true
            },
            "userFrom": {
              "properties": {
                "secretKeyRef": {
                  "properties": {
                    "key": {
                      "type": "string"
                    },
                    "name": {
                      "type": "string"
                    },
                    "namespace": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "key",
                    "name",
                    "namespace"
                  ],
                  "type": "object",
                  "nullable": true
                }
              },
              "type": "object",
              "nullable": true
            }
          },
          "required": [
            "endpoint"
          ],
          "type": "object",
          "nullable": true
        },
        "bootFromDiskMethod": {
          "type": "string",
          "nullable": true
        },
        "configPatches": {
          "items": {
            "properties": {
              "op": {
                "type": "string"
              },
              "path": {
                "type": "string"
              },
              "value": {
                "oneOf": [
                  {},
                  {
                    "type": "null"
                  }
                ]
              }
            },
            "required": [
              "op",
              "path"
            ],
            "type": "object"
          },
          "type": "array",
          "nullable": true
        },
        "cordoned": {
          "type": "boolean",
          "nullable": true
        },
        "cpu": {
          "properties": {
            "manufacturer": {
              "type": "string",
              "nullable": true
            },
            "version": {
              "type": "string",
              "nullable": true
            }
          },
          "type": "object",
          "nullable": true
        },
        "environmentRef": {
          "properties": {
            "apiVersion": {
              "type": "string",
              "nullable": true
            },
            "fieldPath": {
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
            },
            "resourceVersion": {
              "type": "string",
              "nullable": true
            },
            "uid": {
              "type": "string",
              "nullable": true
            }
          },
          "type": "object",
          "nullable": true
        },
        "hostname": {
          "type": "string",
          "nullable": true
        },
        "managementApi": {
          "properties": {
            "endpoint": {
              "type": "string"
            }
          },
          "required": [
            "endpoint"
          ],
          "type": "object",
          "nullable": true
        },
        "pxeBootAlways": {
          "type": "boolean",
          "nullable": true
        },
        "system": {
          "properties": {
            "family": {
              "type": "string",
              "nullable": true
            },
            "manufacturer": {
              "type": "string",
              "nullable": true
            },
            "productName": {
              "type": "string",
              "nullable": true
            },
            "serialNumber": {
              "type": "string",
              "nullable": true
            },
            "skuNumber": {
              "type": "string",
              "nullable": true
            },
            "version": {
              "type": "string",
              "nullable": true
            }
          },
          "type": "object",
          "nullable": true
        }
      },
      "required": [
        "accepted"
      ],
      "type": "object",
      "nullable": true
    },
    "status": {
      "properties": {
        "addresses": {
          "items": {
            "properties": {
              "address": {
                "type": "string"
              },
              "type": {
                "type": "string"
              }
            },
            "required": [
              "address",
              "type"
            ],
            "type": "object"
          },
          "type": "array",
          "nullable": true
        },
        "conditions": {
          "items": {
            "properties": {
              "lastTransitionTime": {
                "format": "date-time",
                "type": "string"
              },
              "message": {
                "type": "string",
                "nullable": true
              },
              "reason": {
                "type": "string",
                "nullable": true
              },
              "severity": {
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
              "lastTransitionTime",
              "status",
              "type"
            ],
            "type": "object"
          },
          "type": "array",
          "nullable": true
        },
        "inUse": {
          "type": "boolean",
          "nullable": true
        },
        "isClean": {
          "type": "boolean",
          "nullable": true
        },
        "power": {
          "type": "string",
          "nullable": true
        },
        "ready": {
          "type": "boolean",
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
 * Server is the Schema for the servers API.
 */
export interface IServer {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "metal.sidero.dev/v1alpha1";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "Server";
  "metadata"?: IObjectMeta;
  /**
   * ServerSpec defines the desired state of Server.
   */
  "spec"?: {
    "accepted": boolean;
    /**
     * BMC defines data about how to talk to the node via ipmitool.
     */
    "bmc"?: {
      /**
       * BMC endpoint.
       */
      "endpoint": string;
      /**
       * BMC Interface Type. Defaults to lanplus.
       */
      "interface"?: string;
      /**
       * BMC password value.
       */
      "pass"?: string;
      /**
       * Source for the password value. Cannot be used if Pass is not empty.
       */
      "passFrom"?: {
        /**
         * SecretKeyRef defines a ref to a given key within a secret.
         */
        "secretKeyRef"?: {
          /**
           * Key to select
           */
          "key": string;
          "name": string;
          /**
           * Namespace and name of credential secret nb: can't use namespacedname here b/c it doesn't have json tags in the struct :(
           */
          "namespace": string;
        };
      };
      /**
       * BMC port. Defaults to 623.
       */
      "port"?: number;
      /**
       * BMC user value.
       */
      "user"?: string;
      /**
       * Source for the user value. Cannot be used if User is not empty.
       */
      "userFrom"?: {
        /**
         * SecretKeyRef defines a ref to a given key within a secret.
         */
        "secretKeyRef"?: {
          /**
           * Key to select
           */
          "key": string;
          "name": string;
          /**
           * Namespace and name of credential secret nb: can't use namespacedname here b/c it doesn't have json tags in the struct :(
           */
          "namespace": string;
        };
      };
    };
    /**
     * BootFromDiskMethod specifies the method to exit iPXE to force boot from disk. 
     *  If not set, controller default is used. Valid values: ipxe-exit, http-404, ipxe-sanboot.
     */
    "bootFromDiskMethod"?: string;
    "configPatches"?: Array<{
      "op": string;
      "path": string;
      "value"?: any;
    }>;
    "cordoned"?: boolean;
    "cpu"?: {
      "manufacturer"?: string;
      "version"?: string;
    };
    /**
     * ObjectReference contains enough information to let you inspect or modify the referred object. --- New uses of this type are discouraged because of difficulty describing its usage when embedded in APIs. 1. Ignored fields.  It includes many fields which are not generally honored.  For instance, ResourceVersion and FieldPath are both very rarely valid in actual usage. 2. Invalid usage help.  It is impossible to add specific help for individual usage.  In most embedded usages, there are particular restrictions like, "must refer only to types A and B" or "UID not honored" or "name must be restricted". Those cannot be well described when embedded. 3. Inconsistent validation.  Because the usages are different, the validation rules are different by usage, which makes it hard for users to predict what will happen. 4. The fields are both imprecise and overly precise.  Kind is not a precise mapping to a URL. This can produce ambiguity during interpretation and require a REST mapping.  In most cases, the dependency is on the group,resource tuple and the version of the actual struct is irrelevant. 5. We cannot easily change it.  Because this type is embedded in many locations, updates to this type will affect numerous schemas.  Don't make new APIs embed an underspecified API type they do not control. Instead of using this type, create a locally provided and used type that is well-focused on your reference. For example, ServiceReferences for admission registration: https://github.com/kubernetes/api/blob/release-1.17/admissionregistration/v1/types.go#L533 .
     */
    "environmentRef"?: {
      /**
       * API version of the referent.
       */
      "apiVersion"?: string;
      /**
       * If referring to a piece of an object instead of an entire object, this string should contain a valid JSON/Go field access statement, such as desiredState.manifest.containers[2]. For example, if the object reference is to a container within a pod, this would take on a value like: "spec.containers{name}" (where "name" refers to the name of the container that triggered the event) or if no container name is specified "spec.containers[2]" (container with index 2 in this pod). This syntax is chosen only to have some well-defined way of referencing a part of an object. TODO: this design is not final and this field is subject to change in the future.
       */
      "fieldPath"?: string;
      /**
       * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
       */
      "kind"?: string;
      /**
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
       */
      "name"?: string;
      /**
       * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
       */
      "namespace"?: string;
      /**
       * Specific resourceVersion to which this reference is made, if any. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
       */
      "resourceVersion"?: string;
      /**
       * UID of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#uids
       */
      "uid"?: string;
    };
    "hostname"?: string;
    /**
     * ManagementAPI defines data about how to talk to the node via simple HTTP API.
     */
    "managementApi"?: {
      "endpoint": string;
    };
    "pxeBootAlways"?: boolean;
    "system"?: {
      "family"?: string;
      "manufacturer"?: string;
      "productName"?: string;
      "serialNumber"?: string;
      "skuNumber"?: string;
      "version"?: string;
    };
  };
  /**
   * ServerStatus defines the observed state of Server.
   */
  "status"?: {
    /**
     * Addresses lists discovered node IPs.
     */
    "addresses"?: Array<{
      /**
       * The node address.
       */
      "address": string;
      /**
       * Node address type, one of Hostname, ExternalIP or InternalIP.
       */
      "type": string;
    }>;
    /**
     * Conditions defines current service state of the Server.
     */
    "conditions"?: Array<{
      /**
       * Last time the condition transitioned from one status to another. This should be when the underlying condition changed. If that is not known, then using the time when the API field changed is acceptable.
       */
      "lastTransitionTime": string;
      /**
       * A human readable message indicating details about the transition. This field may be empty.
       */
      "message"?: string;
      /**
       * The reason for the condition's last transition in CamelCase. The specific API may choose whether or not this field is considered a guaranteed API. This field may not be empty.
       */
      "reason"?: string;
      /**
       * Severity provides an explicit classification of Reason code, so the users or machines can immediately understand the current situation and act accordingly. The Severity field MUST be set only when Status=False.
       */
      "severity"?: string;
      /**
       * Status of the condition, one of True, False, Unknown.
       */
      "status": string;
      /**
       * Type of condition in CamelCase or in foo.example.com/CamelCase. Many .condition.type values are consistent across resources like Available, but because arbitrary conditions can be useful (see .node.status.conditions), the ability to deconflict is important.
       */
      "type": string;
    }>;
    /**
     * InUse is true when server is assigned to some MetalMachine.
     */
    "inUse"?: boolean;
    /**
     * IsClean is true when server disks are wiped.
     */
    "isClean"?: boolean;
    /**
     * Power is the current power state of the server: "on", "off" or "unknown".
     */
    "power"?: string;
    /**
     * Ready is true when server is accepted and in use.
     */
    "ready"?: boolean;
  };
}

/**
 * Server is the Schema for the servers API.
 */
export class Server extends Model<IServer> implements IServer {
  "apiVersion": IServer["apiVersion"];
  "kind": IServer["kind"];
  "metadata"?: IServer["metadata"];
  "spec"?: IServer["spec"];
  "status"?: IServer["status"];

static apiVersion: IServer["apiVersion"] = "metal.sidero.dev/v1alpha1";
static kind: IServer["kind"] = "Server";
static is = createTypeMetaGuard<IServer>(Server);

constructor(data?: ModelData<IServer>) {
  super({
    apiVersion: Server.apiVersion,
    kind: Server.kind,
    ...data
  } as IServer);
}
}


setSchema(Server, schemaId, () => {
  addSchema();
  register(schemaId, schema);
});
