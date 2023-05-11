import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { addSchema } from "@kubernetes-models/apimachinery/_schemas/IoK8sApimachineryPkgApisMetaV1ObjectMeta";
import { Model, setSchema, ModelData, createTypeMetaGuard } from "@kubernetes-models/base";
import { register } from "@kubernetes-models/validate";

const schemaId = "source.toolkit.fluxcd.io.v1beta2.HelmRepository";
const schema = {
  "type": "object",
  "properties": {
    "apiVersion": {
      "type": "string",
      "enum": [
        "source.toolkit.fluxcd.io/v1beta2"
      ]
    },
    "kind": {
      "type": "string",
      "enum": [
        "HelmRepository"
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
        "interval": {
          "type": "string"
        },
        "passCredentials": {
          "type": "boolean",
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
        "type": {
          "enum": [
            "default",
            "oci"
          ],
          "type": "string",
          "nullable": true
        },
        "url": {
          "type": "string"
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
            "size": {
              "format": "int64",
              "type": "integer",
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
 * HelmRepository is the Schema for the helmrepositories API.
 */
export interface IHelmRepository {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "source.toolkit.fluxcd.io/v1beta2";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "HelmRepository";
  "metadata"?: IObjectMeta;
  /**
   * HelmRepositorySpec specifies the required configuration to produce an Artifact for a Helm repository index YAML.
   */
  "spec"?: {
    /**
     * AccessFrom specifies an Access Control List for allowing cross-namespace references to this object. NOTE: Not implemented, provisional as of https://github.com/fluxcd/flux2/pull/2092
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
     * Interval at which to check the URL for updates.
     */
    "interval": string;
    /**
     * PassCredentials allows the credentials from the SecretRef to be passed on to a host that does not match the host as defined in URL. This may be required if the host of the advertised chart URLs in the index differ from the defined URL. Enabling this should be done with caution, as it can potentially result in credentials getting stolen in a MITM-attack.
     */
    "passCredentials"?: boolean;
    /**
     * SecretRef specifies the Secret containing authentication credentials for the HelmRepository. For HTTP/S basic auth the secret must contain 'username' and 'password' fields. For TLS the secret must contain a 'certFile' and 'keyFile', and/or 'caCert' fields.
     */
    "secretRef"?: {
      /**
       * Name of the referent.
       */
      "name": string;
    };
    /**
     * Suspend tells the controller to suspend the reconciliation of this HelmRepository.
     */
    "suspend"?: boolean;
    /**
     * Timeout of the index fetch operation, defaults to 60s.
     */
    "timeout"?: string;
    /**
     * Type of the HelmRepository. When this field is set to  "oci", the URL field value must be prefixed with "oci://".
     */
    "type"?: "default" | "oci";
    /**
     * URL of the Helm repository, a valid URL contains at least a protocol and host.
     */
    "url": string;
  };
  /**
   * HelmRepositoryStatus records the observed state of the HelmRepository.
   */
  "status"?: {
    /**
     * Artifact represents the last successful HelmRepository reconciliation.
     */
    "artifact"?: {
      /**
       * Checksum is the SHA256 checksum of the Artifact file.
       */
      "checksum"?: string;
      /**
       * LastUpdateTime is the timestamp corresponding to the last update of the Artifact.
       */
      "lastUpdateTime"?: string;
      /**
       * Path is the relative file path of the Artifact. It can be used to locate the file in the root of the Artifact storage on the local file system of the controller managing the Source.
       */
      "path": string;
      /**
       * Revision is a human-readable identifier traceable in the origin source system. It can be a Git commit SHA, Git tag, a Helm chart version, etc.
       */
      "revision"?: string;
      /**
       * Size is the number of bytes in the file.
       */
      "size"?: number;
      /**
       * URL is the HTTP address of the Artifact as exposed by the controller managing the Source. It can be used to retrieve the Artifact for consumption, e.g. by another controller applying the Artifact contents.
       */
      "url": string;
    };
    /**
     * Conditions holds the conditions for the HelmRepository.
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
     * LastHandledReconcileAt holds the value of the most recent reconcile request value, so a change of the annotation value can be detected.
     */
    "lastHandledReconcileAt"?: string;
    /**
     * ObservedGeneration is the last observed generation of the HelmRepository object.
     */
    "observedGeneration"?: number;
    /**
     * URL is the dynamic fetch link for the latest Artifact. It is provided on a "best effort" basis, and using the precise HelmRepositoryStatus.Artifact data is recommended.
     */
    "url"?: string;
  };
}

/**
 * HelmRepository is the Schema for the helmrepositories API.
 */
export class HelmRepository extends Model<IHelmRepository> implements IHelmRepository {
  "apiVersion": IHelmRepository["apiVersion"];
  "kind": IHelmRepository["kind"];
  "metadata"?: IHelmRepository["metadata"];
  "spec"?: IHelmRepository["spec"];
  "status"?: IHelmRepository["status"];

static apiVersion: IHelmRepository["apiVersion"] = "source.toolkit.fluxcd.io/v1beta2";
static kind: IHelmRepository["kind"] = "HelmRepository";
static is = createTypeMetaGuard<IHelmRepository>(HelmRepository);

constructor(data?: ModelData<IHelmRepository>) {
  super({
    apiVersion: HelmRepository.apiVersion,
    kind: HelmRepository.kind,
    ...data
  } as IHelmRepository);
}
}


setSchema(HelmRepository, schemaId, () => {
  addSchema();
  register(schemaId, schema);
});
