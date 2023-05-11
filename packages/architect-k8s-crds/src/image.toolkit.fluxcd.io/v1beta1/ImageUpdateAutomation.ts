import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { addSchema } from "@kubernetes-models/apimachinery/_schemas/IoK8sApimachineryPkgApisMetaV1ObjectMeta";
import { Model, setSchema, ModelData, createTypeMetaGuard } from "@kubernetes-models/base";
import { register } from "@kubernetes-models/validate";

const schemaId = "image.toolkit.fluxcd.io.v1beta1.ImageUpdateAutomation";
const schema = {
  "type": "object",
  "properties": {
    "apiVersion": {
      "type": "string",
      "enum": [
        "image.toolkit.fluxcd.io/v1beta1"
      ]
    },
    "kind": {
      "type": "string",
      "enum": [
        "ImageUpdateAutomation"
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
        "git": {
          "properties": {
            "checkout": {
              "properties": {
                "ref": {
                  "properties": {
                    "branch": {
                      "type": "string",
                      "nullable": true
                    },
                    "commit": {
                      "type": "string",
                      "nullable": true
                    },
                    "semver": {
                      "type": "string",
                      "nullable": true
                    },
                    "tag": {
                      "type": "string",
                      "nullable": true
                    }
                  },
                  "type": "object"
                }
              },
              "required": [
                "ref"
              ],
              "type": "object",
              "nullable": true
            },
            "commit": {
              "properties": {
                "author": {
                  "properties": {
                    "email": {
                      "type": "string"
                    },
                    "name": {
                      "type": "string",
                      "nullable": true
                    }
                  },
                  "required": [
                    "email"
                  ],
                  "type": "object"
                },
                "messageTemplate": {
                  "type": "string",
                  "nullable": true
                },
                "signingKey": {
                  "properties": {
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
                  "type": "object",
                  "nullable": true
                }
              },
              "required": [
                "author"
              ],
              "type": "object"
            },
            "push": {
              "properties": {
                "branch": {
                  "type": "string"
                }
              },
              "required": [
                "branch"
              ],
              "type": "object",
              "nullable": true
            }
          },
          "required": [
            "commit"
          ],
          "type": "object",
          "nullable": true
        },
        "interval": {
          "type": "string"
        },
        "sourceRef": {
          "properties": {
            "apiVersion": {
              "type": "string",
              "nullable": true
            },
            "kind": {
              "default": "GitRepository",
              "enum": [
                "GitRepository"
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
        "update": {
          "default": {
            "strategy": "Setters"
          },
          "properties": {
            "path": {
              "type": "string",
              "nullable": true
            },
            "strategy": {
              "default": "Setters",
              "enum": [
                "Setters"
              ],
              "type": "string"
            }
          },
          "required": [
            "strategy"
          ],
          "type": "object",
          "nullable": true
        }
      },
      "required": [
        "interval",
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
        "lastAutomationRunTime": {
          "format": "date-time",
          "type": "string",
          "nullable": true
        },
        "lastHandledReconcileAt": {
          "type": "string",
          "nullable": true
        },
        "lastPushCommit": {
          "type": "string",
          "nullable": true
        },
        "lastPushTime": {
          "format": "date-time",
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
 * ImageUpdateAutomation is the Schema for the imageupdateautomations API
 */
export interface IImageUpdateAutomation {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "image.toolkit.fluxcd.io/v1beta1";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "ImageUpdateAutomation";
  "metadata"?: IObjectMeta;
  /**
   * ImageUpdateAutomationSpec defines the desired state of ImageUpdateAutomation
   */
  "spec"?: {
    /**
     * GitSpec contains all the git-specific definitions. This is technically optional, but in practice mandatory until there are other kinds of source allowed.
     */
    "git"?: {
      /**
       * Checkout gives the parameters for cloning the git repository, ready to make changes. If not present, the `spec.ref` field from the referenced `GitRepository` or its default will be used.
       */
      "checkout"?: {
        /**
         * Reference gives a branch, tag or commit to clone from the Git repository.
         */
        "ref": {
          /**
           * Branch to check out, defaults to 'master' if no other field is defined. 
           *  When GitRepositorySpec.GitImplementation is set to 'go-git', a shallow clone of the specified branch is performed.
           */
          "branch"?: string;
          /**
           * Commit SHA to check out, takes precedence over all reference fields. 
           *  When GitRepositorySpec.GitImplementation is set to 'go-git', this can be combined with Branch to shallow clone the branch, in which the commit is expected to exist.
           */
          "commit"?: string;
          /**
           * SemVer tag expression to check out, takes precedence over Tag.
           */
          "semver"?: string;
          /**
           * Tag to check out, takes precedence over Branch.
           */
          "tag"?: string;
        };
      };
      /**
       * Commit specifies how to commit to the git repository.
       */
      "commit": {
        /**
         * Author gives the email and optionally the name to use as the author of commits.
         */
        "author": {
          /**
           * Email gives the email to provide when making a commit.
           */
          "email": string;
          /**
           * Name gives the name to provide when making a commit.
           */
          "name"?: string;
        };
        /**
         * MessageTemplate provides a template for the commit message, into which will be interpolated the details of the change made.
         */
        "messageTemplate"?: string;
        /**
         * SigningKey provides the option to sign commits with a GPG key
         */
        "signingKey"?: {
          /**
           * SecretRef holds the name to a secret that contains a 'git.asc' key corresponding to the ASCII Armored file containing the GPG signing keypair as the value. It must be in the same namespace as the ImageUpdateAutomation.
           */
          "secretRef"?: {
            /**
             * Name of the referent.
             */
            "name": string;
          };
        };
      };
      /**
       * Push specifies how and where to push commits made by the automation. If missing, commits are pushed (back) to `.spec.checkout.branch` or its default.
       */
      "push"?: {
        /**
         * Branch specifies that commits should be pushed to the branch named. The branch is created using `.spec.checkout.branch` as the starting point, if it doesn't already exist.
         */
        "branch": string;
      };
    };
    /**
     * Interval gives an lower bound for how often the automation run should be attempted.
     */
    "interval": string;
    /**
     * SourceRef refers to the resource giving access details to a git repository.
     */
    "sourceRef": {
      /**
       * API version of the referent.
       */
      "apiVersion"?: string;
      /**
       * Kind of the referent.
       */
      "kind": "GitRepository";
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
     * Suspend tells the controller to not run this automation, until it is unset (or set to false). Defaults to false.
     */
    "suspend"?: boolean;
    /**
     * Update gives the specification for how to update the files in the repository. This can be left empty, to use the default value.
     */
    "update"?: {
      /**
       * Path to the directory containing the manifests to be updated. Defaults to 'None', which translates to the root path of the GitRepositoryRef.
       */
      "path"?: string;
      /**
       * Strategy names the strategy to be used.
       */
      "strategy": "Setters";
    };
  };
  /**
   * ImageUpdateAutomationStatus defines the observed state of ImageUpdateAutomation
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
     * LastAutomationRunTime records the last time the controller ran this automation through to completion (even if no updates were made).
     */
    "lastAutomationRunTime"?: string;
    /**
     * LastHandledReconcileAt holds the value of the most recent reconcile request value, so a change of the annotation value can be detected.
     */
    "lastHandledReconcileAt"?: string;
    /**
     * LastPushCommit records the SHA1 of the last commit made by the controller, for this automation object
     */
    "lastPushCommit"?: string;
    /**
     * LastPushTime records the time of the last pushed change.
     */
    "lastPushTime"?: string;
    "observedGeneration"?: number;
  };
}

/**
 * ImageUpdateAutomation is the Schema for the imageupdateautomations API
 */
export class ImageUpdateAutomation extends Model<IImageUpdateAutomation> implements IImageUpdateAutomation {
  "apiVersion": IImageUpdateAutomation["apiVersion"];
  "kind": IImageUpdateAutomation["kind"];
  "metadata"?: IImageUpdateAutomation["metadata"];
  "spec"?: IImageUpdateAutomation["spec"];
  "status"?: IImageUpdateAutomation["status"];

static apiVersion: IImageUpdateAutomation["apiVersion"] = "image.toolkit.fluxcd.io/v1beta1";
static kind: IImageUpdateAutomation["kind"] = "ImageUpdateAutomation";
static is = createTypeMetaGuard<IImageUpdateAutomation>(ImageUpdateAutomation);

constructor(data?: ModelData<IImageUpdateAutomation>) {
  super({
    apiVersion: ImageUpdateAutomation.apiVersion,
    kind: ImageUpdateAutomation.kind,
    ...data
  } as IImageUpdateAutomation);
}
}


setSchema(ImageUpdateAutomation, schemaId, () => {
  addSchema();
  register(schemaId, schema);
});
