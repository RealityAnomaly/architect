import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { addSchema } from "@kubernetes-models/apimachinery/_schemas/IoK8sApimachineryPkgApisMetaV1ObjectMeta";
import { Model, setSchema, ModelData, createTypeMetaGuard } from "@kubernetes-models/base";
import { register } from "@kubernetes-models/validate";

const schemaId = "kustomize.toolkit.fluxcd.io.v1beta2.Kustomization";
const schema = {
  "type": "object",
  "properties": {
    "apiVersion": {
      "type": "string",
      "enum": [
        "kustomize.toolkit.fluxcd.io/v1beta2"
      ]
    },
    "kind": {
      "type": "string",
      "enum": [
        "Kustomization"
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
        "decryption": {
          "properties": {
            "provider": {
              "enum": [
                "sops"
              ],
              "type": "string"
            },
            "secretRef": {
              "properties": {
                "name": {
                  "type": "string"
                }
              },
              "required": [
                "name"
              ],
              "type": "object",
              "nullable": true
            }
          },
          "required": [
            "provider"
          ],
          "type": "object",
          "nullable": true
        },
        "dependsOn": {
          "items": {
            "properties": {
              "name": {
                "type": "string"
              },
              "namespace": {
                "type": "string",
                "nullable": true
              }
            },
            "required": [
              "name"
            ],
            "type": "object"
          },
          "type": "array",
          "nullable": true
        },
        "force": {
          "default": false,
          "type": "boolean",
          "nullable": true
        },
        "healthChecks": {
          "items": {
            "properties": {
              "apiVersion": {
                "type": "string",
                "nullable": true
              },
              "kind": {
                "type": "string"
              },
              "name": {
                "type": "string"
              },
              "namespace": {
                "type": "string",
                "nullable": true
              }
            },
            "required": [
              "kind",
              "name"
            ],
            "type": "object"
          },
          "type": "array",
          "nullable": true
        },
        "images": {
          "items": {
            "properties": {
              "digest": {
                "type": "string",
                "nullable": true
              },
              "name": {
                "type": "string"
              },
              "newName": {
                "type": "string",
                "nullable": true
              },
              "newTag": {
                "type": "string",
                "nullable": true
              }
            },
            "required": [
              "name"
            ],
            "type": "object"
          },
          "type": "array",
          "nullable": true
        },
        "interval": {
          "type": "string"
        },
        "kubeConfig": {
          "properties": {
            "secretRef": {
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
              "type": "object",
              "nullable": true
            }
          },
          "type": "object",
          "nullable": true
        },
        "patches": {
          "items": {
            "properties": {
              "patch": {
                "type": "string",
                "nullable": true
              },
              "target": {
                "properties": {
                  "annotationSelector": {
                    "type": "string",
                    "nullable": true
                  },
                  "group": {
                    "type": "string",
                    "nullable": true
                  },
                  "kind": {
                    "type": "string",
                    "nullable": true
                  },
                  "labelSelector": {
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
                  "version": {
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
          "type": "array",
          "nullable": true
        },
        "patchesJson6902": {
          "items": {
            "properties": {
              "patch": {
                "items": {
                  "properties": {
                    "from": {
                      "type": "string",
                      "nullable": true
                    },
                    "op": {
                      "enum": [
                        "test",
                        "remove",
                        "add",
                        "replace",
                        "move",
                        "copy"
                      ],
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
                "type": "array"
              },
              "target": {
                "properties": {
                  "annotationSelector": {
                    "type": "string",
                    "nullable": true
                  },
                  "group": {
                    "type": "string",
                    "nullable": true
                  },
                  "kind": {
                    "type": "string",
                    "nullable": true
                  },
                  "labelSelector": {
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
                  "version": {
                    "type": "string",
                    "nullable": true
                  }
                },
                "type": "object"
              }
            },
            "required": [
              "patch",
              "target"
            ],
            "type": "object"
          },
          "type": "array",
          "nullable": true
        },
        "patchesStrategicMerge": {
          "items": {},
          "type": "array",
          "nullable": true
        },
        "path": {
          "type": "string",
          "nullable": true
        },
        "postBuild": {
          "properties": {
            "substitute": {
              "additionalProperties": {
                "type": "string"
              },
              "type": "object",
              "properties": {},
              "nullable": true
            },
            "substituteFrom": {
              "items": {
                "properties": {
                  "kind": {
                    "enum": [
                      "Secret",
                      "ConfigMap"
                    ],
                    "type": "string"
                  },
                  "name": {
                    "maxLength": 253,
                    "minLength": 1,
                    "type": "string"
                  },
                  "optional": {
                    "default": false,
                    "type": "boolean",
                    "nullable": true
                  }
                },
                "required": [
                  "kind",
                  "name"
                ],
                "type": "object"
              },
              "type": "array",
              "nullable": true
            }
          },
          "type": "object",
          "nullable": true
        },
        "prune": {
          "type": "boolean"
        },
        "retryInterval": {
          "type": "string",
          "nullable": true
        },
        "serviceAccountName": {
          "type": "string",
          "nullable": true
        },
        "sourceRef": {
          "properties": {
            "apiVersion": {
              "type": "string",
              "nullable": true
            },
            "kind": {
              "enum": [
                "GitRepository",
                "Bucket"
              ],
              "type": "string"
            },
            "name": {
              "type": "string"
            },
            "namespace": {
              "type": "string",
              "nullable": true
            }
          },
          "required": [
            "kind",
            "name"
          ],
          "type": "object"
        },
        "suspend": {
          "type": "boolean",
          "nullable": true
        },
        "targetNamespace": {
          "maxLength": 63,
          "minLength": 1,
          "type": "string",
          "nullable": true
        },
        "timeout": {
          "type": "string",
          "nullable": true
        },
        "validation": {
          "enum": [
            "none",
            "client",
            "server"
          ],
          "type": "string",
          "nullable": true
        },
        "wait": {
          "type": "boolean",
          "nullable": true
        }
      },
      "required": [
        "interval",
        "prune",
        "sourceRef"
      ],
      "type": "object",
      "nullable": true
    },
    "status": {
      "default": {
        "observedGeneration": -1
      },
      "properties": {
        "conditions": {
          "items": {
            "properties": {
              "lastTransitionTime": {
                "format": "date-time",
                "type": "string"
              },
              "message": {
                "maxLength": 32768,
                "type": "string"
              },
              "observedGeneration": {
                "format": "int64",
                "type": "integer",
                "minimum": 0,
                "nullable": true
              },
              "reason": {
                "maxLength": 1024,
                "minLength": 1,
                "type": "string",
                "pattern": "^[A-Za-z]([A-Za-z0-9_,:]*[A-Za-z0-9_])?$"
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
                "maxLength": 316,
                "type": "string",
                "pattern": "^([a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*\\/)?(([A-Za-z0-9][-A-Za-z0-9_.]*)?[A-Za-z0-9])$"
              }
            },
            "required": [
              "lastTransitionTime",
              "message",
              "reason",
              "status",
              "type"
            ],
            "type": "object"
          },
          "type": "array",
          "nullable": true
        },
        "inventory": {
          "properties": {
            "entries": {
              "items": {
                "properties": {
                  "id": {
                    "type": "string"
                  },
                  "v": {
                    "type": "string"
                  }
                },
                "required": [
                  "id",
                  "v"
                ],
                "type": "object"
              },
              "type": "array"
            }
          },
          "required": [
            "entries"
          ],
          "type": "object",
          "nullable": true
        },
        "lastAppliedRevision": {
          "type": "string",
          "nullable": true
        },
        "lastAttemptedRevision": {
          "type": "string",
          "nullable": true
        },
        "lastHandledReconcileAt": {
          "type": "string",
          "nullable": true
        },
        "observedGeneration": {
          "format": "int64",
          "type": "integer",
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
 * Kustomization is the Schema for the kustomizations API.
 */
export interface IKustomization {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "kustomize.toolkit.fluxcd.io/v1beta2";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "Kustomization";
  "metadata"?: IObjectMeta;
  /**
   * KustomizationSpec defines the configuration to calculate the desired state from a Source using Kustomize.
   */
  "spec"?: {
    /**
     * Decrypt Kubernetes secrets before applying them on the cluster.
     */
    "decryption"?: {
      /**
       * Provider is the name of the decryption engine.
       */
      "provider": "sops";
      /**
       * The secret name containing the private OpenPGP keys used for decryption.
       */
      "secretRef"?: {
        /**
         * Name of the referent.
         */
        "name": string;
      };
    };
    /**
     * DependsOn may contain a meta.NamespacedObjectReference slice with references to Kustomization resources that must be ready before this Kustomization can be reconciled.
     */
    "dependsOn"?: Array<{
      /**
       * Name of the referent.
       */
      "name": string;
      /**
       * Namespace of the referent, when not specified it acts as LocalObjectReference.
       */
      "namespace"?: string;
    }>;
    /**
     * Force instructs the controller to recreate resources when patching fails due to an immutable field change.
     */
    "force"?: boolean;
    /**
     * A list of resources to be included in the health assessment.
     */
    "healthChecks"?: Array<{
      /**
       * API version of the referent, if not specified the Kubernetes preferred version will be used.
       */
      "apiVersion"?: string;
      /**
       * Kind of the referent.
       */
      "kind": string;
      /**
       * Name of the referent.
       */
      "name": string;
      /**
       * Namespace of the referent, when not specified it acts as LocalObjectReference.
       */
      "namespace"?: string;
    }>;
    /**
     * Images is a list of (image name, new name, new tag or digest) for changing image names, tags or digests. This can also be achieved with a patch, but this operator is simpler to specify.
     */
    "images"?: Array<{
      /**
       * Digest is the value used to replace the original image tag. If digest is present NewTag value is ignored.
       */
      "digest"?: string;
      /**
       * Name is a tag-less image name.
       */
      "name": string;
      /**
       * NewName is the value used to replace the original name.
       */
      "newName"?: string;
      /**
       * NewTag is the value used to replace the original tag.
       */
      "newTag"?: string;
    }>;
    /**
     * The interval at which to reconcile the Kustomization.
     */
    "interval": string;
    /**
     * The KubeConfig for reconciling the Kustomization on a remote cluster. When used in combination with KustomizationSpec.ServiceAccountName, forces the controller to act on behalf of that Service Account at the target cluster. If the --default-service-account flag is set, its value will be used as a controller level fallback for when KustomizationSpec.ServiceAccountName is empty.
     */
    "kubeConfig"?: {
      /**
       * SecretRef holds the name of a secret that contains a key with the kubeconfig file as the value. If no key is set, the key will default to 'value'. The secret must be in the same namespace as the Kustomization. It is recommended that the kubeconfig is self-contained, and the secret is regularly updated if credentials such as a cloud-access-token expire. Cloud specific `cmd-path` auth helpers will not function without adding binaries and credentials to the Pod that is responsible for reconciling the Kustomization.
       */
      "secretRef"?: {
        /**
         * Key in the Secret, when not specified an implementation-specific default key is used.
         */
        "key"?: string;
        /**
         * Name of the Secret.
         */
        "name": string;
      };
    };
    /**
     * Strategic merge and JSON patches, defined as inline YAML objects, capable of targeting objects based on kind, label and annotation selectors.
     */
    "patches"?: Array<{
      /**
       * Patch contains an inline StrategicMerge patch or an inline JSON6902 patch with an array of operation objects.
       */
      "patch"?: string;
      /**
       * Target points to the resources that the patch document should be applied to.
       */
      "target"?: {
        /**
         * AnnotationSelector is a string that follows the label selection expression https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#api It matches with the resource annotations.
         */
        "annotationSelector"?: string;
        /**
         * Group is the API group to select resources from. Together with Version and Kind it is capable of unambiguously identifying and/or selecting resources. https://github.com/kubernetes/community/blob/master/contributors/design-proposals/api-machinery/api-group.md
         */
        "group"?: string;
        /**
         * Kind of the API Group to select resources from. Together with Group and Version it is capable of unambiguously identifying and/or selecting resources. https://github.com/kubernetes/community/blob/master/contributors/design-proposals/api-machinery/api-group.md
         */
        "kind"?: string;
        /**
         * LabelSelector is a string that follows the label selection expression https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#api It matches with the resource labels.
         */
        "labelSelector"?: string;
        /**
         * Name to match resources with.
         */
        "name"?: string;
        /**
         * Namespace to select resources from.
         */
        "namespace"?: string;
        /**
         * Version of the API Group to select resources from. Together with Group and Kind it is capable of unambiguously identifying and/or selecting resources. https://github.com/kubernetes/community/blob/master/contributors/design-proposals/api-machinery/api-group.md
         */
        "version"?: string;
      };
    }>;
    /**
     * JSON 6902 patches, defined as inline YAML objects. Deprecated: Use Patches instead.
     */
    "patchesJson6902"?: Array<{
      /**
       * Patch contains the JSON6902 patch document with an array of operation objects.
       */
      "patch": Array<{
        /**
         * From contains a JSON-pointer value that references a location within the target document where the operation is performed. The meaning of the value depends on the value of Op, and is NOT taken into account by all operations.
         */
        "from"?: string;
        /**
         * Op indicates the operation to perform. Its value MUST be one of "add", "remove", "replace", "move", "copy", or "test". https://datatracker.ietf.org/doc/html/rfc6902#section-4
         */
        "op": "test" | "remove" | "add" | "replace" | "move" | "copy";
        /**
         * Path contains the JSON-pointer value that references a location within the target document where the operation is performed. The meaning of the value depends on the value of Op.
         */
        "path": string;
        /**
         * Value contains a valid JSON structure. The meaning of the value depends on the value of Op, and is NOT taken into account by all operations.
         */
        "value"?: any;
      }>;
      /**
       * Target points to the resources that the patch document should be applied to.
       */
      "target": {
        /**
         * AnnotationSelector is a string that follows the label selection expression https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#api It matches with the resource annotations.
         */
        "annotationSelector"?: string;
        /**
         * Group is the API group to select resources from. Together with Version and Kind it is capable of unambiguously identifying and/or selecting resources. https://github.com/kubernetes/community/blob/master/contributors/design-proposals/api-machinery/api-group.md
         */
        "group"?: string;
        /**
         * Kind of the API Group to select resources from. Together with Group and Version it is capable of unambiguously identifying and/or selecting resources. https://github.com/kubernetes/community/blob/master/contributors/design-proposals/api-machinery/api-group.md
         */
        "kind"?: string;
        /**
         * LabelSelector is a string that follows the label selection expression https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#api It matches with the resource labels.
         */
        "labelSelector"?: string;
        /**
         * Name to match resources with.
         */
        "name"?: string;
        /**
         * Namespace to select resources from.
         */
        "namespace"?: string;
        /**
         * Version of the API Group to select resources from. Together with Group and Kind it is capable of unambiguously identifying and/or selecting resources. https://github.com/kubernetes/community/blob/master/contributors/design-proposals/api-machinery/api-group.md
         */
        "version"?: string;
      };
    }>;
    /**
     * Strategic merge patches, defined as inline YAML objects. Deprecated: Use Patches instead.
     */
    "patchesStrategicMerge"?: Array<any>;
    /**
     * Path to the directory containing the kustomization.yaml file, or the set of plain YAMLs a kustomization.yaml should be generated for. Defaults to 'None', which translates to the root path of the SourceRef.
     */
    "path"?: string;
    /**
     * PostBuild describes which actions to perform on the YAML manifest generated by building the kustomize overlay.
     */
    "postBuild"?: {
      /**
       * Substitute holds a map of key/value pairs. The variables defined in your YAML manifests that match any of the keys defined in the map will be substituted with the set value. Includes support for bash string replacement functions e.g. ${var:=default}, ${var:position} and ${var/substring/replacement}.
       */
      "substitute"?: {
        [key: string]: string;
      };
      /**
       * SubstituteFrom holds references to ConfigMaps and Secrets containing the variables and their values to be substituted in the YAML manifests. The ConfigMap and the Secret data keys represent the var names and they must match the vars declared in the manifests for the substitution to happen.
       */
      "substituteFrom"?: Array<{
        /**
         * Kind of the values referent, valid values are ('Secret', 'ConfigMap').
         */
        "kind": "Secret" | "ConfigMap";
        /**
         * Name of the values referent. Should reside in the same namespace as the referring resource.
         */
        "name": string;
        /**
         * Optional indicates whether the referenced resource must exist, or whether to tolerate its absence. If true and the referenced resource is absent, proceed as if the resource was present but empty, without any variables defined.
         */
        "optional"?: boolean;
      }>;
    };
    /**
     * Prune enables garbage collection.
     */
    "prune": boolean;
    /**
     * The interval at which to retry a previously failed reconciliation. When not specified, the controller uses the KustomizationSpec.Interval value to retry failures.
     */
    "retryInterval"?: string;
    /**
     * The name of the Kubernetes service account to impersonate when reconciling this Kustomization.
     */
    "serviceAccountName"?: string;
    /**
     * Reference of the source where the kustomization file is.
     */
    "sourceRef": {
      /**
       * API version of the referent.
       */
      "apiVersion"?: string;
      /**
       * Kind of the referent.
       */
      "kind": "GitRepository" | "Bucket";
      /**
       * Name of the referent.
       */
      "name": string;
      /**
       * Namespace of the referent, defaults to the namespace of the Kubernetes resource object that contains the reference.
       */
      "namespace"?: string;
    };
    /**
     * This flag tells the controller to suspend subsequent kustomize executions, it does not apply to already started executions. Defaults to false.
     */
    "suspend"?: boolean;
    /**
     * TargetNamespace sets or overrides the namespace in the kustomization.yaml file.
     */
    "targetNamespace"?: string;
    /**
     * Timeout for validation, apply and health checking operations. Defaults to 'Interval' duration.
     */
    "timeout"?: string;
    /**
     * Deprecated: Not used in v1beta2.
     */
    "validation"?: "none" | "client" | "server";
    /**
     * Wait instructs the controller to check the health of all the reconciled resources. When enabled, the HealthChecks are ignored. Defaults to false.
     */
    "wait"?: boolean;
  };
  /**
   * KustomizationStatus defines the observed state of a kustomization.
   */
  "status"?: {
    "conditions"?: Array<{
      /**
       * lastTransitionTime is the last time the condition transitioned from one status to another. This should be when the underlying condition changed.  If that is not known, then using the time when the API field changed is acceptable.
       */
      "lastTransitionTime": string;
      /**
       * message is a human readable message indicating details about the transition. This may be an empty string.
       */
      "message": string;
      /**
       * observedGeneration represents the .metadata.generation that the condition was set based upon. For instance, if .metadata.generation is currently 12, but the .status.conditions[x].observedGeneration is 9, the condition is out of date with respect to the current state of the instance.
       */
      "observedGeneration"?: number;
      /**
       * reason contains a programmatic identifier indicating the reason for the condition's last transition. Producers of specific condition types may define expected values and meanings for this field, and whether the values are considered a guaranteed API. The value should be a CamelCase string. This field may not be empty.
       */
      "reason": string;
      /**
       * status of the condition, one of True, False, Unknown.
       */
      "status": "True" | "False" | "Unknown";
      /**
       * type of condition in CamelCase or in foo.example.com/CamelCase. --- Many .condition.type values are consistent across resources like Available, but because arbitrary conditions can be useful (see .node.status.conditions), the ability to deconflict is important. The regex it matches is (dns1123SubdomainFmt/)?(qualifiedNameFmt)
       */
      "type": string;
    }>;
    /**
     * Inventory contains the list of Kubernetes resource object references that have been successfully applied.
     */
    "inventory"?: {
      /**
       * Entries of Kubernetes resource object references.
       */
      "entries": Array<{
        /**
         * ID is the string representation of the Kubernetes resource object's metadata, in the format '<namespace>_<name>_<group>_<kind>'.
         */
        "id": string;
        /**
         * Version is the API version of the Kubernetes resource object's kind.
         */
        "v": string;
      }>;
    };
    /**
     * The last successfully applied revision. The revision format for Git sources is <branch|tag>/<commit-sha>.
     */
    "lastAppliedRevision"?: string;
    /**
     * LastAttemptedRevision is the revision of the last reconciliation attempt.
     */
    "lastAttemptedRevision"?: string;
    /**
     * LastHandledReconcileAt holds the value of the most recent reconcile request value, so a change of the annotation value can be detected.
     */
    "lastHandledReconcileAt"?: string;
    /**
     * ObservedGeneration is the last reconciled generation.
     */
    "observedGeneration"?: number;
  };
}

/**
 * Kustomization is the Schema for the kustomizations API.
 */
export class Kustomization extends Model<IKustomization> implements IKustomization {
  "apiVersion": IKustomization["apiVersion"];
  "kind": IKustomization["kind"];
  "metadata"?: IKustomization["metadata"];
  "spec"?: IKustomization["spec"];
  "status"?: IKustomization["status"];

static apiVersion: IKustomization["apiVersion"] = "kustomize.toolkit.fluxcd.io/v1beta2";
static kind: IKustomization["kind"] = "Kustomization";
static is = createTypeMetaGuard<IKustomization>(Kustomization);

constructor(data?: ModelData<IKustomization>) {
  super({
    apiVersion: Kustomization.apiVersion,
    kind: Kustomization.kind,
    ...data
  } as IKustomization);
}
}


setSchema(Kustomization, schemaId, () => {
  addSchema();
  register(schemaId, schema);
});
