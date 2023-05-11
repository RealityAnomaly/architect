import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { addSchema } from "@kubernetes-models/apimachinery/_schemas/IoK8sApimachineryPkgApisMetaV1ObjectMeta";
import { Model, setSchema, ModelData, createTypeMetaGuard } from "@kubernetes-models/base";
import { register } from "@kubernetes-models/validate";

const schemaId = "notification.toolkit.fluxcd.io.v1beta1.Alert";
const schema = {
  "type": "object",
  "properties": {
    "apiVersion": {
      "type": "string",
      "enum": [
        "notification.toolkit.fluxcd.io/v1beta1"
      ]
    },
    "kind": {
      "type": "string",
      "enum": [
        "Alert"
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
        "eventSeverity": {
          "default": "info",
          "enum": [
            "info",
            "error"
          ],
          "type": "string",
          "nullable": true
        },
        "eventSources": {
          "items": {
            "properties": {
              "apiVersion": {
                "type": "string",
                "nullable": true
              },
              "kind": {
                "enum": [
                  "Bucket",
                  "GitRepository",
                  "Kustomization",
                  "HelmRelease",
                  "HelmChart",
                  "HelmRepository",
                  "ImageRepository",
                  "ImagePolicy",
                  "ImageUpdateAutomation"
                ],
                "type": "string",
                "nullable": true
              },
              "matchLabels": {
                "additionalProperties": {
                  "type": "string"
                },
                "type": "object",
                "properties": {},
                "nullable": true
              },
              "name": {
                "maxLength": 53,
                "minLength": 1,
                "type": "string"
              },
              "namespace": {
                "maxLength": 53,
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
          "type": "array"
        },
        "exclusionList": {
          "items": {
            "type": "string"
          },
          "type": "array",
          "nullable": true
        },
        "providerRef": {
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
        "summary": {
          "type": "string",
          "nullable": true
        },
        "suspend": {
          "type": "boolean",
          "nullable": true
        }
      },
      "required": [
        "eventSources",
        "providerRef"
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
 * Alert is the Schema for the alerts API
 */
export interface IAlert {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "notification.toolkit.fluxcd.io/v1beta1";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "Alert";
  "metadata"?: IObjectMeta;
  /**
   * AlertSpec defines an alerting rule for events involving a list of objects
   */
  "spec"?: {
    /**
     * Filter events based on severity, defaults to ('info'). If set to 'info' no events will be filtered.
     */
    "eventSeverity"?: "info" | "error";
    /**
     * Filter events based on the involved objects.
     */
    "eventSources": Array<{
      /**
       * API version of the referent
       */
      "apiVersion"?: string;
      /**
       * Kind of the referent
       */
      "kind"?: "Bucket" | "GitRepository" | "Kustomization" | "HelmRelease" | "HelmChart" | "HelmRepository" | "ImageRepository" | "ImagePolicy" | "ImageUpdateAutomation";
      /**
       * MatchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
       */
      "matchLabels"?: {
        [key: string]: string;
      };
      /**
       * Name of the referent
       */
      "name": string;
      /**
       * Namespace of the referent
       */
      "namespace"?: string;
    }>;
    /**
     * A list of Golang regular expressions to be used for excluding messages.
     */
    "exclusionList"?: Array<string>;
    /**
     * Send events using this provider.
     */
    "providerRef": {
      /**
       * Name of the referent.
       */
      "name": string;
    };
    /**
     * Short description of the impact and affected cluster.
     */
    "summary"?: string;
    /**
     * This flag tells the controller to suspend subsequent events dispatching. Defaults to false.
     */
    "suspend"?: boolean;
  };
  /**
   * AlertStatus defines the observed state of Alert
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
     * ObservedGeneration is the last observed generation.
     */
    "observedGeneration"?: number;
  };
}

/**
 * Alert is the Schema for the alerts API
 */
export class Alert extends Model<IAlert> implements IAlert {
  "apiVersion": IAlert["apiVersion"];
  "kind": IAlert["kind"];
  "metadata"?: IAlert["metadata"];
  "spec"?: IAlert["spec"];
  "status"?: IAlert["status"];

static apiVersion: IAlert["apiVersion"] = "notification.toolkit.fluxcd.io/v1beta1";
static kind: IAlert["kind"] = "Alert";
static is = createTypeMetaGuard<IAlert>(Alert);

constructor(data?: ModelData<IAlert>) {
  super({
    apiVersion: Alert.apiVersion,
    kind: Alert.kind,
    ...data
  } as IAlert);
}
}


setSchema(Alert, schemaId, () => {
  addSchema();
  register(schemaId, schema);
});
