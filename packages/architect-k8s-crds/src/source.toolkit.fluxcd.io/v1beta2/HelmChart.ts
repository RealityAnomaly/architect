import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { addSchema } from "@kubernetes-models/apimachinery/_schemas/IoK8sApimachineryPkgApisMetaV1ObjectMeta";
import { Model, setSchema, ModelData, createTypeMetaGuard } from "@kubernetes-models/base";
import { register } from "@kubernetes-models/validate";

const schemaId = "source.toolkit.fluxcd.io.v1beta2.HelmChart";
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
        "HelmChart"
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
        "chart": {
          "type": "string"
        },
        "interval": {
          "type": "string"
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
              "type": "string"
            },
            "name": {
              "type": "string"
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
        "observedChartName": {
          "type": "string",
          "nullable": true
        },
        "observedGeneration": {
          "format": "int64",
          "type": "integer",
          "nullable": true
        },
        "observedSourceArtifactRevision": {
          "type": "string",
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
 * HelmChart is the Schema for the helmcharts API.
 */
export interface IHelmChart {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "source.toolkit.fluxcd.io/v1beta2";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "HelmChart";
  "metadata"?: IObjectMeta;
  /**
   * HelmChartSpec specifies the desired state of a Helm chart.
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
     * Chart is the name or path the Helm chart is available at in the SourceRef.
     */
    "chart": string;
    /**
     * Interval is the interval at which to check the Source for updates.
     */
    "interval": string;
    /**
     * ReconcileStrategy determines what enables the creation of a new artifact. Valid values are ('ChartVersion', 'Revision'). See the documentation of the values for an explanation on their behavior. Defaults to ChartVersion when omitted.
     */
    "reconcileStrategy"?: "ChartVersion" | "Revision";
    /**
     * SourceRef is the reference to the Source the chart is available at.
     */
    "sourceRef": {
      /**
       * APIVersion of the referent.
       */
      "apiVersion"?: string;
      /**
       * Kind of the referent, valid values are ('HelmRepository', 'GitRepository', 'Bucket').
       */
      "kind": "HelmRepository" | "GitRepository" | "Bucket";
      /**
       * Name of the referent.
       */
      "name": string;
    };
    /**
     * Suspend tells the controller to suspend the reconciliation of this source.
     */
    "suspend"?: boolean;
    /**
     * ValuesFile is an alternative values file to use as the default chart values, expected to be a relative path in the SourceRef. Deprecated in favor of ValuesFiles, for backwards compatibility the file specified here is merged before the ValuesFiles items. Ignored when omitted.
     */
    "valuesFile"?: string;
    /**
     * ValuesFiles is an alternative list of values files to use as the chart values (values.yaml is not included by default), expected to be a relative path in the SourceRef. Values files are merged in the order of this list with the last file overriding the first. Ignored when omitted.
     */
    "valuesFiles"?: Array<string>;
    /**
     * Version is the chart version semver expression, ignored for charts from GitRepository and Bucket sources. Defaults to latest when omitted.
     */
    "version"?: string;
  };
  /**
   * HelmChartStatus records the observed state of the HelmChart.
   */
  "status"?: {
    /**
     * Artifact represents the output of the last successful reconciliation.
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
     * Conditions holds the conditions for the HelmChart.
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
     * ObservedChartName is the last observed chart name as specified by the resolved chart reference.
     */
    "observedChartName"?: string;
    /**
     * ObservedGeneration is the last observed generation of the HelmChart object.
     */
    "observedGeneration"?: number;
    /**
     * ObservedSourceArtifactRevision is the last observed Artifact.Revision of the HelmChartSpec.SourceRef.
     */
    "observedSourceArtifactRevision"?: string;
    /**
     * URL is the dynamic fetch link for the latest Artifact. It is provided on a "best effort" basis, and using the precise BucketStatus.Artifact data is recommended.
     */
    "url"?: string;
  };
}

/**
 * HelmChart is the Schema for the helmcharts API.
 */
export class HelmChart extends Model<IHelmChart> implements IHelmChart {
  "apiVersion": IHelmChart["apiVersion"];
  "kind": IHelmChart["kind"];
  "metadata"?: IHelmChart["metadata"];
  "spec"?: IHelmChart["spec"];
  "status"?: IHelmChart["status"];

static apiVersion: IHelmChart["apiVersion"] = "source.toolkit.fluxcd.io/v1beta2";
static kind: IHelmChart["kind"] = "HelmChart";
static is = createTypeMetaGuard<IHelmChart>(HelmChart);

constructor(data?: ModelData<IHelmChart>) {
  super({
    apiVersion: HelmChart.apiVersion,
    kind: HelmChart.kind,
    ...data
  } as IHelmChart);
}
}


setSchema(HelmChart, schemaId, () => {
  addSchema();
  register(schemaId, schema);
});
