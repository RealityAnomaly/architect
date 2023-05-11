import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { addSchema } from "@kubernetes-models/apimachinery/_schemas/IoK8sApimachineryPkgApisMetaV1ObjectMeta";
import { Model, setSchema, ModelData, createTypeMetaGuard } from "@kubernetes-models/base";
import { register } from "@kubernetes-models/validate";

const schemaId = "helm.toolkit.fluxcd.io.v2beta1.HelmRelease";
const schema = {
  "type": "object",
  "properties": {
    "apiVersion": {
      "type": "string",
      "enum": [
        "helm.toolkit.fluxcd.io/v2beta1"
      ]
    },
    "kind": {
      "type": "string",
      "enum": [
        "HelmRelease"
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
        "chart": {
          "properties": {
            "spec": {
              "properties": {
                "chart": {
                  "type": "string"
                },
                "interval": {
                  "type": "string",
                  "nullable": true
                },
                "reconcileStrategy": {
                  "default": "ChartVersion",
                  "enum": [
                    "ChartVersion",
                    "Revision"
                  ],
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
                        "HelmRepository",
                        "GitRepository",
                        "Bucket"
                      ],
                      "type": "string",
                      "nullable": true
                    },
                    "name": {
                      "maxLength": 253,
                      "minLength": 1,
                      "type": "string"
                    },
                    "namespace": {
                      "maxLength": 63,
                      "minLength": 1,
                      "type": "string",
                      "nullable": true
                    }
                  },
                  "required": [
                    "name"
                  ],
                  "type": "object"
                },
                "valuesFile": {
                  "type": "string",
                  "nullable": true
                },
                "valuesFiles": {
                  "items": {
                    "type": "string"
                  },
                  "type": "array",
                  "nullable": true
                },
                "version": {
                  "default": "*",
                  "type": "string",
                  "nullable": true
                }
              },
              "required": [
                "chart",
                "sourceRef"
              ],
              "type": "object"
            }
          },
          "required": [
            "spec"
          ],
          "type": "object"
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
        "install": {
          "properties": {
            "crds": {
              "enum": [
                "Skip",
                "Create",
                "CreateReplace"
              ],
              "type": "string",
              "nullable": true
            },
            "createNamespace": {
              "type": "boolean",
              "nullable": true
            },
            "disableHooks": {
              "type": "boolean",
              "nullable": true
            },
            "disableOpenAPIValidation": {
              "type": "boolean",
              "nullable": true
            },
            "disableWait": {
              "type": "boolean",
              "nullable": true
            },
            "disableWaitForJobs": {
              "type": "boolean",
              "nullable": true
            },
            "remediation": {
              "properties": {
                "ignoreTestFailures": {
                  "type": "boolean",
                  "nullable": true
                },
                "remediateLastFailure": {
                  "type": "boolean",
                  "nullable": true
                },
                "retries": {
                  "type": "integer",
                  "nullable": true
                }
              },
              "type": "object",
              "nullable": true
            },
            "replace": {
              "type": "boolean",
              "nullable": true
            },
            "skipCRDs": {
              "type": "boolean",
              "nullable": true
            },
            "timeout": {
              "type": "string",
              "nullable": true
            }
          },
          "type": "object",
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
        "maxHistory": {
          "type": "integer",
          "nullable": true
        },
        "postRenderers": {
          "items": {
            "properties": {
              "kustomize": {
                "properties": {
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
        "releaseName": {
          "maxLength": 53,
          "minLength": 1,
          "type": "string",
          "nullable": true
        },
        "rollback": {
          "properties": {
            "cleanupOnFail": {
              "type": "boolean",
              "nullable": true
            },
            "disableHooks": {
              "type": "boolean",
              "nullable": true
            },
            "disableWait": {
              "type": "boolean",
              "nullable": true
            },
            "disableWaitForJobs": {
              "type": "boolean",
              "nullable": true
            },
            "force": {
              "type": "boolean",
              "nullable": true
            },
            "recreate": {
              "type": "boolean",
              "nullable": true
            },
            "timeout": {
              "type": "string",
              "nullable": true
            }
          },
          "type": "object",
          "nullable": true
        },
        "serviceAccountName": {
          "type": "string",
          "nullable": true
        },
        "storageNamespace": {
          "maxLength": 63,
          "minLength": 1,
          "type": "string",
          "nullable": true
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
        "test": {
          "properties": {
            "enable": {
              "type": "boolean",
              "nullable": true
            },
            "ignoreFailures": {
              "type": "boolean",
              "nullable": true
            },
            "timeout": {
              "type": "string",
              "nullable": true
            }
          },
          "type": "object",
          "nullable": true
        },
        "timeout": {
          "type": "string",
          "nullable": true
        },
        "uninstall": {
          "properties": {
            "disableHooks": {
              "type": "boolean",
              "nullable": true
            },
            "disableWait": {
              "type": "boolean",
              "nullable": true
            },
            "keepHistory": {
              "type": "boolean",
              "nullable": true
            },
            "timeout": {
              "type": "string",
              "nullable": true
            }
          },
          "type": "object",
          "nullable": true
        },
        "upgrade": {
          "properties": {
            "cleanupOnFail": {
              "type": "boolean",
              "nullable": true
            },
            "crds": {
              "enum": [
                "Skip",
                "Create",
                "CreateReplace"
              ],
              "type": "string",
              "nullable": true
            },
            "disableHooks": {
              "type": "boolean",
              "nullable": true
            },
            "disableOpenAPIValidation": {
              "type": "boolean",
              "nullable": true
            },
            "disableWait": {
              "type": "boolean",
              "nullable": true
            },
            "disableWaitForJobs": {
              "type": "boolean",
              "nullable": true
            },
            "force": {
              "type": "boolean",
              "nullable": true
            },
            "preserveValues": {
              "type": "boolean",
              "nullable": true
            },
            "remediation": {
              "properties": {
                "ignoreTestFailures": {
                  "type": "boolean",
                  "nullable": true
                },
                "remediateLastFailure": {
                  "type": "boolean",
                  "nullable": true
                },
                "retries": {
                  "type": "integer",
                  "nullable": true
                },
                "strategy": {
                  "enum": [
                    "rollback",
                    "uninstall"
                  ],
                  "type": "string",
                  "nullable": true
                }
              },
              "type": "object",
              "nullable": true
            },
            "timeout": {
              "type": "string",
              "nullable": true
            }
          },
          "type": "object",
          "nullable": true
        },
        "values": {
          "oneOf": [
            {},
            {
              "type": "null"
            }
          ]
        },
        "valuesFrom": {
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
                "type": "boolean",
                "nullable": true
              },
              "targetPath": {
                "type": "string",
                "nullable": true
              },
              "valuesKey": {
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
        }
      },
      "required": [
        "chart",
        "interval"
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
        "failures": {
          "format": "int64",
          "type": "integer",
          "nullable": true
        },
        "helmChart": {
          "type": "string",
          "nullable": true
        },
        "installFailures": {
          "format": "int64",
          "type": "integer",
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
        "lastAttemptedValuesChecksum": {
          "type": "string",
          "nullable": true
        },
        "lastHandledReconcileAt": {
          "type": "string",
          "nullable": true
        },
        "lastReleaseRevision": {
          "type": "integer",
          "nullable": true
        },
        "observedGeneration": {
          "format": "int64",
          "type": "integer",
          "nullable": true
        },
        "upgradeFailures": {
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
 * HelmRelease is the Schema for the helmreleases API
 */
export interface IHelmRelease {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "helm.toolkit.fluxcd.io/v2beta1";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "HelmRelease";
  "metadata"?: IObjectMeta;
  /**
   * HelmReleaseSpec defines the desired state of a Helm release.
   */
  "spec"?: {
    /**
     * Chart defines the template of the v1beta2.HelmChart that should be created for this HelmRelease.
     */
    "chart": {
      /**
       * Spec holds the template for the v1beta2.HelmChartSpec for this HelmRelease.
       */
      "spec": {
        /**
         * The name or path the Helm chart is available at in the SourceRef.
         */
        "chart": string;
        /**
         * Interval at which to check the v1beta2.Source for updates. Defaults to 'HelmReleaseSpec.Interval'.
         */
        "interval"?: string;
        /**
         * Determines what enables the creation of a new artifact. Valid values are ('ChartVersion', 'Revision'). See the documentation of the values for an explanation on their behavior. Defaults to ChartVersion when omitted.
         */
        "reconcileStrategy"?: "ChartVersion" | "Revision";
        /**
         * The name and namespace of the v1beta2.Source the chart is available at.
         */
        "sourceRef": {
          /**
           * APIVersion of the referent.
           */
          "apiVersion"?: string;
          /**
           * Kind of the referent.
           */
          "kind"?: "HelmRepository" | "GitRepository" | "Bucket";
          /**
           * Name of the referent.
           */
          "name": string;
          /**
           * Namespace of the referent.
           */
          "namespace"?: string;
        };
        /**
         * Alternative values file to use as the default chart values, expected to be a relative path in the SourceRef. Deprecated in favor of ValuesFiles, for backwards compatibility the file defined here is merged before the ValuesFiles items. Ignored when omitted.
         */
        "valuesFile"?: string;
        /**
         * Alternative list of values files to use as the chart values (values.yaml is not included by default), expected to be a relative path in the SourceRef. Values files are merged in the order of this list with the last file overriding the first. Ignored when omitted.
         */
        "valuesFiles"?: Array<string>;
        /**
         * Version semver expression, ignored for charts from v1beta2.GitRepository and v1beta2.Bucket sources. Defaults to latest when omitted.
         */
        "version"?: string;
      };
    };
    /**
     * DependsOn may contain a meta.NamespacedObjectReference slice with references to HelmRelease resources that must be ready before this HelmRelease can be reconciled.
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
     * Install holds the configuration for Helm install actions for this HelmRelease.
     */
    "install"?: {
      /**
       * CRDs upgrade CRDs from the Helm Chart's crds directory according to the CRD upgrade policy provided here. Valid values are `Skip`, `Create` or `CreateReplace`. Default is `Create` and if omitted CRDs are installed but not updated. 
       *  Skip: do neither install nor replace (update) any CRDs. 
       *  Create: new CRDs are created, existing CRDs are neither updated nor deleted. 
       *  CreateReplace: new CRDs are created, existing CRDs are updated (replaced) but not deleted. 
       *  By default, CRDs are applied (installed) during Helm install action. With this option users can opt-in to CRD replace existing CRDs on Helm install actions, which is not (yet) natively supported by Helm. https://helm.sh/docs/chart_best_practices/custom_resource_definitions.
       */
      "crds"?: "Skip" | "Create" | "CreateReplace";
      /**
       * CreateNamespace tells the Helm install action to create the HelmReleaseSpec.TargetNamespace if it does not exist yet. On uninstall, the namespace will not be garbage collected.
       */
      "createNamespace"?: boolean;
      /**
       * DisableHooks prevents hooks from running during the Helm install action.
       */
      "disableHooks"?: boolean;
      /**
       * DisableOpenAPIValidation prevents the Helm install action from validating rendered templates against the Kubernetes OpenAPI Schema.
       */
      "disableOpenAPIValidation"?: boolean;
      /**
       * DisableWait disables the waiting for resources to be ready after a Helm install has been performed.
       */
      "disableWait"?: boolean;
      /**
       * DisableWaitForJobs disables waiting for jobs to complete after a Helm install has been performed.
       */
      "disableWaitForJobs"?: boolean;
      /**
       * Remediation holds the remediation configuration for when the Helm install action for the HelmRelease fails. The default is to not perform any action.
       */
      "remediation"?: {
        /**
         * IgnoreTestFailures tells the controller to skip remediation when the Helm tests are run after an install action but fail. Defaults to 'Test.IgnoreFailures'.
         */
        "ignoreTestFailures"?: boolean;
        /**
         * RemediateLastFailure tells the controller to remediate the last failure, when no retries remain. Defaults to 'false'.
         */
        "remediateLastFailure"?: boolean;
        /**
         * Retries is the number of retries that should be attempted on failures before bailing. Remediation, using an uninstall, is performed between each attempt. Defaults to '0', a negative integer equals to unlimited retries.
         */
        "retries"?: number;
      };
      /**
       * Replace tells the Helm install action to re-use the 'ReleaseName', but only if that name is a deleted release which remains in the history.
       */
      "replace"?: boolean;
      /**
       * SkipCRDs tells the Helm install action to not install any CRDs. By default, CRDs are installed if not already present. 
       *  Deprecated use CRD policy (`crds`) attribute with value `Skip` instead.
       */
      "skipCRDs"?: boolean;
      /**
       * Timeout is the time to wait for any individual Kubernetes operation (like Jobs for hooks) during the performance of a Helm install action. Defaults to 'HelmReleaseSpec.Timeout'.
       */
      "timeout"?: string;
    };
    /**
     * Interval at which to reconcile the Helm release.
     */
    "interval": string;
    /**
     * KubeConfig for reconciling the HelmRelease on a remote cluster. When used in combination with HelmReleaseSpec.ServiceAccountName, forces the controller to act on behalf of that Service Account at the target cluster. If the --default-service-account flag is set, its value will be used as a controller level fallback for when HelmReleaseSpec.ServiceAccountName is empty.
     */
    "kubeConfig"?: {
      /**
       * SecretRef holds the name to a secret that contains a key with the kubeconfig file as the value. If no key is specified the key will default to 'value'. The secret must be in the same namespace as the HelmRelease. It is recommended that the kubeconfig is self-contained, and the secret is regularly updated if credentials such as a cloud-access-token expire. Cloud specific `cmd-path` auth helpers will not function without adding binaries and credentials to the Pod that is responsible for reconciling the HelmRelease.
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
     * MaxHistory is the number of revisions saved by Helm for this HelmRelease. Use '0' for an unlimited number of revisions; defaults to '10'.
     */
    "maxHistory"?: number;
    /**
     * PostRenderers holds an array of Helm PostRenderers, which will be applied in order of their definition.
     */
    "postRenderers"?: Array<{
      /**
       * Kustomization to apply as PostRenderer.
       */
      "kustomize"?: {
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
         * JSON 6902 patches, defined as inline YAML objects.
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
         * Strategic merge patches, defined as inline YAML objects.
         */
        "patchesStrategicMerge"?: Array<any>;
      };
    }>;
    /**
     * ReleaseName used for the Helm release. Defaults to a composition of '[TargetNamespace-]Name'.
     */
    "releaseName"?: string;
    /**
     * Rollback holds the configuration for Helm rollback actions for this HelmRelease.
     */
    "rollback"?: {
      /**
       * CleanupOnFail allows deletion of new resources created during the Helm rollback action when it fails.
       */
      "cleanupOnFail"?: boolean;
      /**
       * DisableHooks prevents hooks from running during the Helm rollback action.
       */
      "disableHooks"?: boolean;
      /**
       * DisableWait disables the waiting for resources to be ready after a Helm rollback has been performed.
       */
      "disableWait"?: boolean;
      /**
       * DisableWaitForJobs disables waiting for jobs to complete after a Helm rollback has been performed.
       */
      "disableWaitForJobs"?: boolean;
      /**
       * Force forces resource updates through a replacement strategy.
       */
      "force"?: boolean;
      /**
       * Recreate performs pod restarts for the resource if applicable.
       */
      "recreate"?: boolean;
      /**
       * Timeout is the time to wait for any individual Kubernetes operation (like Jobs for hooks) during the performance of a Helm rollback action. Defaults to 'HelmReleaseSpec.Timeout'.
       */
      "timeout"?: string;
    };
    /**
     * The name of the Kubernetes service account to impersonate when reconciling this HelmRelease.
     */
    "serviceAccountName"?: string;
    /**
     * StorageNamespace used for the Helm storage. Defaults to the namespace of the HelmRelease.
     */
    "storageNamespace"?: string;
    /**
     * Suspend tells the controller to suspend reconciliation for this HelmRelease, it does not apply to already started reconciliations. Defaults to false.
     */
    "suspend"?: boolean;
    /**
     * TargetNamespace to target when performing operations for the HelmRelease. Defaults to the namespace of the HelmRelease.
     */
    "targetNamespace"?: string;
    /**
     * Test holds the configuration for Helm test actions for this HelmRelease.
     */
    "test"?: {
      /**
       * Enable enables Helm test actions for this HelmRelease after an Helm install or upgrade action has been performed.
       */
      "enable"?: boolean;
      /**
       * IgnoreFailures tells the controller to skip remediation when the Helm tests are run but fail. Can be overwritten for tests run after install or upgrade actions in 'Install.IgnoreTestFailures' and 'Upgrade.IgnoreTestFailures'.
       */
      "ignoreFailures"?: boolean;
      /**
       * Timeout is the time to wait for any individual Kubernetes operation during the performance of a Helm test action. Defaults to 'HelmReleaseSpec.Timeout'.
       */
      "timeout"?: string;
    };
    /**
     * Timeout is the time to wait for any individual Kubernetes operation (like Jobs for hooks) during the performance of a Helm action. Defaults to '5m0s'.
     */
    "timeout"?: string;
    /**
     * Uninstall holds the configuration for Helm uninstall actions for this HelmRelease.
     */
    "uninstall"?: {
      /**
       * DisableHooks prevents hooks from running during the Helm rollback action.
       */
      "disableHooks"?: boolean;
      /**
       * DisableWait disables waiting for all the resources to be deleted after a Helm uninstall is performed.
       */
      "disableWait"?: boolean;
      /**
       * KeepHistory tells Helm to remove all associated resources and mark the release as deleted, but retain the release history.
       */
      "keepHistory"?: boolean;
      /**
       * Timeout is the time to wait for any individual Kubernetes operation (like Jobs for hooks) during the performance of a Helm uninstall action. Defaults to 'HelmReleaseSpec.Timeout'.
       */
      "timeout"?: string;
    };
    /**
     * Upgrade holds the configuration for Helm upgrade actions for this HelmRelease.
     */
    "upgrade"?: {
      /**
       * CleanupOnFail allows deletion of new resources created during the Helm upgrade action when it fails.
       */
      "cleanupOnFail"?: boolean;
      /**
       * CRDs upgrade CRDs from the Helm Chart's crds directory according to the CRD upgrade policy provided here. Valid values are `Skip`, `Create` or `CreateReplace`. Default is `Skip` and if omitted CRDs are neither installed nor upgraded. 
       *  Skip: do neither install nor replace (update) any CRDs. 
       *  Create: new CRDs are created, existing CRDs are neither updated nor deleted. 
       *  CreateReplace: new CRDs are created, existing CRDs are updated (replaced) but not deleted. 
       *  By default, CRDs are not applied during Helm upgrade action. With this option users can opt-in to CRD upgrade, which is not (yet) natively supported by Helm. https://helm.sh/docs/chart_best_practices/custom_resource_definitions.
       */
      "crds"?: "Skip" | "Create" | "CreateReplace";
      /**
       * DisableHooks prevents hooks from running during the Helm upgrade action.
       */
      "disableHooks"?: boolean;
      /**
       * DisableOpenAPIValidation prevents the Helm upgrade action from validating rendered templates against the Kubernetes OpenAPI Schema.
       */
      "disableOpenAPIValidation"?: boolean;
      /**
       * DisableWait disables the waiting for resources to be ready after a Helm upgrade has been performed.
       */
      "disableWait"?: boolean;
      /**
       * DisableWaitForJobs disables waiting for jobs to complete after a Helm upgrade has been performed.
       */
      "disableWaitForJobs"?: boolean;
      /**
       * Force forces resource updates through a replacement strategy.
       */
      "force"?: boolean;
      /**
       * PreserveValues will make Helm reuse the last release's values and merge in overrides from 'Values'. Setting this flag makes the HelmRelease non-declarative.
       */
      "preserveValues"?: boolean;
      /**
       * Remediation holds the remediation configuration for when the Helm upgrade action for the HelmRelease fails. The default is to not perform any action.
       */
      "remediation"?: {
        /**
         * IgnoreTestFailures tells the controller to skip remediation when the Helm tests are run after an upgrade action but fail. Defaults to 'Test.IgnoreFailures'.
         */
        "ignoreTestFailures"?: boolean;
        /**
         * RemediateLastFailure tells the controller to remediate the last failure, when no retries remain. Defaults to 'false' unless 'Retries' is greater than 0.
         */
        "remediateLastFailure"?: boolean;
        /**
         * Retries is the number of retries that should be attempted on failures before bailing. Remediation, using 'Strategy', is performed between each attempt. Defaults to '0', a negative integer equals to unlimited retries.
         */
        "retries"?: number;
        /**
         * Strategy to use for failure remediation. Defaults to 'rollback'.
         */
        "strategy"?: "rollback" | "uninstall";
      };
      /**
       * Timeout is the time to wait for any individual Kubernetes operation (like Jobs for hooks) during the performance of a Helm upgrade action. Defaults to 'HelmReleaseSpec.Timeout'.
       */
      "timeout"?: string;
    };
    /**
     * Values holds the values for this Helm release.
     */
    "values"?: any;
    /**
     * ValuesFrom holds references to resources containing Helm values for this HelmRelease, and information about how they should be merged.
     */
    "valuesFrom"?: Array<{
      /**
       * Kind of the values referent, valid values are ('Secret', 'ConfigMap').
       */
      "kind": "Secret" | "ConfigMap";
      /**
       * Name of the values referent. Should reside in the same namespace as the referring resource.
       */
      "name": string;
      /**
       * Optional marks this ValuesReference as optional. When set, a not found error for the values reference is ignored, but any ValuesKey, TargetPath or transient error will still result in a reconciliation failure.
       */
      "optional"?: boolean;
      /**
       * TargetPath is the YAML dot notation path the value should be merged at. When set, the ValuesKey is expected to be a single flat value. Defaults to 'None', which results in the values getting merged at the root.
       */
      "targetPath"?: string;
      /**
       * ValuesKey is the data key where the values.yaml or a specific value can be found at. Defaults to 'values.yaml'.
       */
      "valuesKey"?: string;
    }>;
  };
  /**
   * HelmReleaseStatus defines the observed state of a HelmRelease.
   */
  "status"?: {
    /**
     * Conditions holds the conditions for the HelmRelease.
     */
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
     * Failures is the reconciliation failure count against the latest desired state. It is reset after a successful reconciliation.
     */
    "failures"?: number;
    /**
     * HelmChart is the namespaced name of the HelmChart resource created by the controller for the HelmRelease.
     */
    "helmChart"?: string;
    /**
     * InstallFailures is the install failure count against the latest desired state. It is reset after a successful reconciliation.
     */
    "installFailures"?: number;
    /**
     * LastAppliedRevision is the revision of the last successfully applied source.
     */
    "lastAppliedRevision"?: string;
    /**
     * LastAttemptedRevision is the revision of the last reconciliation attempt.
     */
    "lastAttemptedRevision"?: string;
    /**
     * LastAttemptedValuesChecksum is the SHA1 checksum of the values of the last reconciliation attempt.
     */
    "lastAttemptedValuesChecksum"?: string;
    /**
     * LastHandledReconcileAt holds the value of the most recent reconcile request value, so a change of the annotation value can be detected.
     */
    "lastHandledReconcileAt"?: string;
    /**
     * LastReleaseRevision is the revision of the last successful Helm release.
     */
    "lastReleaseRevision"?: number;
    /**
     * ObservedGeneration is the last observed generation.
     */
    "observedGeneration"?: number;
    /**
     * UpgradeFailures is the upgrade failure count against the latest desired state. It is reset after a successful reconciliation.
     */
    "upgradeFailures"?: number;
  };
}

/**
 * HelmRelease is the Schema for the helmreleases API
 */
export class HelmRelease extends Model<IHelmRelease> implements IHelmRelease {
  "apiVersion": IHelmRelease["apiVersion"];
  "kind": IHelmRelease["kind"];
  "metadata"?: IHelmRelease["metadata"];
  "spec"?: IHelmRelease["spec"];
  "status"?: IHelmRelease["status"];

static apiVersion: IHelmRelease["apiVersion"] = "helm.toolkit.fluxcd.io/v2beta1";
static kind: IHelmRelease["kind"] = "HelmRelease";
static is = createTypeMetaGuard<IHelmRelease>(HelmRelease);

constructor(data?: ModelData<IHelmRelease>) {
  super({
    apiVersion: HelmRelease.apiVersion,
    kind: HelmRelease.kind,
    ...data
  } as IHelmRelease);
}
}


setSchema(HelmRelease, schemaId, () => {
  addSchema();
  register(schemaId, schema);
});
