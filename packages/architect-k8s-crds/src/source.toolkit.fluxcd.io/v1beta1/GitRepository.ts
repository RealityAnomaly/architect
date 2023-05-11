import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { addSchema } from "@kubernetes-models/apimachinery/_schemas/IoK8sApimachineryPkgApisMetaV1ObjectMeta";
import { Model, setSchema, ModelData, createTypeMetaGuard } from "@kubernetes-models/base";
import { register } from "@kubernetes-models/validate";

const schemaId = "source.toolkit.fluxcd.io.v1beta1.GitRepository";
const schema = {
  "type": "object",
  "properties": {
    "apiVersion": {
      "type": "string",
      "enum": [
        "source.toolkit.fluxcd.io/v1beta1"
      ]
    },
    "kind": {
      "type": "string",
      "enum": [
        "GitRepository"
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
        "accessFrom": {
          "properties": {
            "namespaceSelectors": {
              "items": {
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
                "type": "object"
              },
              "type": "array"
            }
          },
          "required": [
            "namespaceSelectors"
          ],
          "type": "object",
          "nullable": true
        },
        "gitImplementation": {
          "default": "go-git",
          "enum": [
            "go-git",
            "libgit2"
          ],
          "type": "string",
          "nullable": true
        },
        "ignore": {
          "type": "string",
          "nullable": true
        },
        "include": {
          "items": {
            "properties": {
              "fromPath": {
                "type": "string",
                "nullable": true
              },
              "repository": {
                "properties": {
                  "name": {
                    "type": "string"
                  }
                },
                "required": [
                  "name"
                ],
                "type": "object"
              },
              "toPath": {
                "type": "string",
                "nullable": true
              }
            },
            "required": [
              "repository"
            ],
            "type": "object"
          },
          "type": "array",
          "nullable": true
        },
        "interval": {
          "type": "string"
        },
        "recurseSubmodules": {
          "type": "boolean",
          "nullable": true
        },
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
          "type": "object",
          "nullable": true
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
        },
        "suspend": {
          "type": "boolean",
          "nullable": true
        },
        "timeout": {
          "default": "60s",
          "type": "string",
          "nullable": true
        },
        "url": {
          "type": "string",
          "pattern": "^(http|https|ssh):\\/\\/"
        },
        "verify": {
          "properties": {
            "mode": {
              "enum": [
                "head"
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
            "mode"
          ],
          "type": "object",
          "nullable": true
        }
      },
      "required": [
        "interval",
        "url"
      ],
      "type": "object",
      "nullable": true
    },
    "status": {
      "default": {
        "observedGeneration": -1
      },
      "properties": {
        "artifact": {
          "properties": {
            "checksum": {
              "type": "string",
              "nullable": true
            },
            "lastUpdateTime": {
              "format": "date-time",
              "type": "string",
              "nullable": true
            },
            "path": {
              "type": "string"
            },
            "revision": {
              "type": "string",
              "nullable": true
            },
            "url": {
              "type": "string"
            }
          },
          "required": [
            "path",
            "url"
          ],
          "type": "object",
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
        "includedArtifacts": {
          "items": {
            "properties": {
              "checksum": {
                "type": "string",
                "nullable": true
              },
              "lastUpdateTime": {
                "format": "date-time",
                "type": "string",
                "nullable": true
              },
              "path": {
                "type": "string"
              },
              "revision": {
                "type": "string",
                "nullable": true
              },
              "url": {
                "type": "string"
              }
            },
            "required": [
              "path",
              "url"
            ],
            "type": "object"
          },
          "type": "array",
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
    "apiVersion",
    "kind"
  ]
};

/**
 * GitRepository is the Schema for the gitrepositories API
 */
export interface IGitRepository {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "source.toolkit.fluxcd.io/v1beta1";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "GitRepository";
  "metadata"?: IObjectMeta;
  /**
   * GitRepositorySpec defines the desired state of a Git repository.
   */
  "spec"?: {
    /**
     * AccessFrom defines an Access Control List for allowing cross-namespace references to this object.
     */
    "accessFrom"?: {
      /**
       * NamespaceSelectors is the list of namespace selectors to which this ACL applies. Items in this list are evaluated using a logical OR operation.
       */
      "namespaceSelectors": Array<{
        /**
         * MatchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
         */
        "matchLabels"?: {
          [key: string]: string;
        };
      }>;
    };
    /**
     * Determines which git client library to use. Defaults to go-git, valid values are ('go-git', 'libgit2').
     */
    "gitImplementation"?: "go-git" | "libgit2";
    /**
     * Ignore overrides the set of excluded patterns in the .sourceignore format (which is the same as .gitignore). If not provided, a default will be used, consult the documentation for your version to find out what those are.
     */
    "ignore"?: string;
    /**
     * Extra git repositories to map into the repository
     */
    "include"?: Array<{
      /**
       * The path to copy contents from, defaults to the root directory.
       */
      "fromPath"?: string;
      /**
       * Reference to a GitRepository to include.
       */
      "repository": {
        /**
         * Name of the referent.
         */
        "name": string;
      };
      /**
       * The path to copy contents to, defaults to the name of the source ref.
       */
      "toPath"?: string;
    }>;
    /**
     * The interval at which to check for repository updates.
     */
    "interval": string;
    /**
     * When enabled, after the clone is created, initializes all submodules within, using their default settings. This option is available only when using the 'go-git' GitImplementation.
     */
    "recurseSubmodules"?: boolean;
    /**
     * The Git reference to checkout and monitor for changes, defaults to master branch.
     */
    "ref"?: {
      /**
       * The Git branch to checkout, defaults to master.
       */
      "branch"?: string;
      /**
       * The Git commit SHA to checkout, if specified Tag filters will be ignored.
       */
      "commit"?: string;
      /**
       * The Git tag semver expression, takes precedence over Tag.
       */
      "semver"?: string;
      /**
       * The Git tag to checkout, takes precedence over Branch.
       */
      "tag"?: string;
    };
    /**
     * The secret name containing the Git credentials. For HTTPS repositories the secret must contain username and password fields. For SSH repositories the secret must contain identity and known_hosts fields.
     */
    "secretRef"?: {
      /**
       * Name of the referent.
       */
      "name": string;
    };
    /**
     * This flag tells the controller to suspend the reconciliation of this source.
     */
    "suspend"?: boolean;
    /**
     * The timeout for remote Git operations like cloning, defaults to 60s.
     */
    "timeout"?: string;
    /**
     * The repository URL, can be a HTTP/S or SSH address.
     */
    "url": string;
    /**
     * Verify OpenPGP signature for the Git commit HEAD points to.
     */
    "verify"?: {
      /**
       * Mode describes what git object should be verified, currently ('head').
       */
      "mode": "head";
      /**
       * The secret name containing the public keys of all trusted Git authors.
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
   * GitRepositoryStatus defines the observed state of a Git repository.
   */
  "status"?: {
    /**
     * Artifact represents the output of the last successful repository sync.
     */
    "artifact"?: {
      /**
       * Checksum is the SHA256 checksum of the artifact.
       */
      "checksum"?: string;
      /**
       * LastUpdateTime is the timestamp corresponding to the last update of this artifact.
       */
      "lastUpdateTime"?: string;
      /**
       * Path is the relative file path of this artifact.
       */
      "path": string;
      /**
       * Revision is a human readable identifier traceable in the origin source system. It can be a Git commit SHA, Git tag, a Helm index timestamp, a Helm chart version, etc.
       */
      "revision"?: string;
      /**
       * URL is the HTTP address of this artifact.
       */
      "url": string;
    };
    /**
     * Conditions holds the conditions for the GitRepository.
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
     * IncludedArtifacts represents the included artifacts from the last successful repository sync.
     */
    "includedArtifacts"?: Array<{
      /**
       * Checksum is the SHA256 checksum of the artifact.
       */
      "checksum"?: string;
      /**
       * LastUpdateTime is the timestamp corresponding to the last update of this artifact.
       */
      "lastUpdateTime"?: string;
      /**
       * Path is the relative file path of this artifact.
       */
      "path": string;
      /**
       * Revision is a human readable identifier traceable in the origin source system. It can be a Git commit SHA, Git tag, a Helm index timestamp, a Helm chart version, etc.
       */
      "revision"?: string;
      /**
       * URL is the HTTP address of this artifact.
       */
      "url": string;
    }>;
    /**
     * LastHandledReconcileAt holds the value of the most recent reconcile request value, so a change of the annotation value can be detected.
     */
    "lastHandledReconcileAt"?: string;
    /**
     * ObservedGeneration is the last observed generation.
     */
    "observedGeneration"?: number;
    /**
     * URL is the download link for the artifact output of the last repository sync.
     */
    "url"?: string;
  };
}

/**
 * GitRepository is the Schema for the gitrepositories API
 */
export class GitRepository extends Model<IGitRepository> implements IGitRepository {
  "apiVersion": IGitRepository["apiVersion"];
  "kind": IGitRepository["kind"];
  "metadata"?: IGitRepository["metadata"];
  "spec"?: IGitRepository["spec"];
  "status"?: IGitRepository["status"];

static apiVersion: IGitRepository["apiVersion"] = "source.toolkit.fluxcd.io/v1beta1";
static kind: IGitRepository["kind"] = "GitRepository";
static is = createTypeMetaGuard<IGitRepository>(GitRepository);

constructor(data?: ModelData<IGitRepository>) {
  super({
    apiVersion: GitRepository.apiVersion,
    kind: GitRepository.kind,
    ...data
  } as IGitRepository);
}
}


setSchema(GitRepository, schemaId, () => {
  addSchema();
  register(schemaId, schema);
});
