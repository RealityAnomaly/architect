import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { addSchema } from "@kubernetes-models/apimachinery/_schemas/IoK8sApimachineryPkgApisMetaV1ObjectMeta";
import { Model, setSchema, ModelData, createTypeMetaGuard } from "@kubernetes-models/base";
import { register } from "@kubernetes-models/validate";

const schemaId = "image.toolkit.fluxcd.io.v1alpha2.ImageRepository";
const schema = {
  "type": "object",
  "properties": {
    "apiVersion": {
      "type": "string",
      "enum": [
        "image.toolkit.fluxcd.io/v1alpha2"
      ]
    },
    "kind": {
      "type": "string",
      "enum": [
        "ImageRepository"
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
        "certSecretRef": {
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
        "image": {
          "type": "string",
          "nullable": true
        },
        "interval": {
          "type": "string",
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
          "type": "string",
          "nullable": true
        }
      },
      "type": "object",
      "nullable": true
    },
    "status": {
      "properties": {
        "canonicalImageName": {
          "type": "string",
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
        "lastScanResult": {
          "properties": {
            "scanTime": {
              "format": "date-time",
              "type": "string",
              "nullable": true
            },
            "tagCount": {
              "type": "integer"
            }
          },
          "required": [
            "tagCount"
          ],
          "type": "object",
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
 * ImageRepository is the Schema for the imagerepositories API
 */
export interface IImageRepository {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "image.toolkit.fluxcd.io/v1alpha2";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "ImageRepository";
  "metadata"?: IObjectMeta;
  /**
   * ImageRepositorySpec defines the parameters for scanning an image repository, e.g., `fluxcd/flux`.
   */
  "spec"?: {
    /**
     * CertSecretRef can be given the name of a secret containing either or both of 
     *   - a PEM-encoded client certificate (`certFile`) and private  key (`keyFile`);  - a PEM-encoded CA certificate (`caFile`) 
     *   and whichever are supplied, will be used for connecting to the  registry. The client cert and key are useful if you are  authenticating with a certificate; the CA cert is useful if  you are using a self-signed server certificate.
     */
    "certSecretRef"?: {
      /**
       * Name of the referent.
       */
      "name": string;
    };
    /**
     * Image is the name of the image repository
     */
    "image"?: string;
    /**
     * Interval is the length of time to wait between scans of the image repository.
     */
    "interval"?: string;
    /**
     * SecretRef can be given the name of a secret containing credentials to use for the image registry. The secret should be created with `kubectl create secret docker-registry`, or the equivalent.
     */
    "secretRef"?: {
      /**
       * Name of the referent.
       */
      "name": string;
    };
    /**
     * This flag tells the controller to suspend subsequent image scans. It does not apply to already started scans. Defaults to false.
     */
    "suspend"?: boolean;
    /**
     * Timeout for image scanning. Defaults to 'Interval' duration.
     */
    "timeout"?: string;
  };
  /**
   * ImageRepositoryStatus defines the observed state of ImageRepository
   */
  "status"?: {
    /**
     * CanonicalName is the name of the image repository with all the implied bits made explicit; e.g., `docker.io/library/alpine` rather than `alpine`.
     */
    "canonicalImageName"?: string;
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
     * LastScanResult contains the number of fetched tags.
     */
    "lastScanResult"?: {
      "scanTime"?: string;
      "tagCount": number;
    };
    /**
     * ObservedGeneration is the last reconciled generation.
     */
    "observedGeneration"?: number;
  };
}

/**
 * ImageRepository is the Schema for the imagerepositories API
 */
export class ImageRepository extends Model<IImageRepository> implements IImageRepository {
  "apiVersion": IImageRepository["apiVersion"];
  "kind": IImageRepository["kind"];
  "metadata"?: IImageRepository["metadata"];
  "spec"?: IImageRepository["spec"];
  "status"?: IImageRepository["status"];

static apiVersion: IImageRepository["apiVersion"] = "image.toolkit.fluxcd.io/v1alpha2";
static kind: IImageRepository["kind"] = "ImageRepository";
static is = createTypeMetaGuard<IImageRepository>(ImageRepository);

constructor(data?: ModelData<IImageRepository>) {
  super({
    apiVersion: ImageRepository.apiVersion,
    kind: ImageRepository.kind,
    ...data
  } as IImageRepository);
}
}


setSchema(ImageRepository, schemaId, () => {
  addSchema();
  register(schemaId, schema);
});
