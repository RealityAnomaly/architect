import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { addSchema } from "@kubernetes-models/apimachinery/_schemas/IoK8sApimachineryPkgApisMetaV1ObjectMeta";
import { Model, setSchema, ModelData, createTypeMetaGuard } from "@kubernetes-models/base";
import { register } from "@kubernetes-models/validate";

const schemaId = "monitoring.coreos.com.v1.PrometheusRule";
const schema = {
  "type": "object",
  "properties": {
    "apiVersion": {
      "type": "string",
      "enum": [
        "monitoring.coreos.com/v1"
      ]
    },
    "kind": {
      "type": "string",
      "enum": [
        "PrometheusRule"
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
        "groups": {
          "items": {
            "properties": {
              "interval": {
                "type": "string",
                "nullable": true
              },
              "name": {
                "type": "string"
              },
              "partial_response_strategy": {
                "type": "string",
                "nullable": true
              },
              "rules": {
                "items": {
                  "properties": {
                    "alert": {
                      "type": "string",
                      "nullable": true
                    },
                    "annotations": {
                      "additionalProperties": {
                        "type": "string"
                      },
                      "type": "object",
                      "properties": {},
                      "nullable": true
                    },
                    "expr": {
                      "anyOf": [
                        {
                          "type": "integer"
                        },
                        {
                          "type": "string"
                        }
                      ]
                    },
                    "for": {
                      "type": "string",
                      "nullable": true
                    },
                    "labels": {
                      "additionalProperties": {
                        "type": "string"
                      },
                      "type": "object",
                      "properties": {},
                      "nullable": true
                    },
                    "record": {
                      "type": "string",
                      "nullable": true
                    }
                  },
                  "required": [
                    "expr"
                  ],
                  "type": "object"
                },
                "type": "array"
              }
            },
            "required": [
              "name",
              "rules"
            ],
            "type": "object"
          },
          "type": "array",
          "nullable": true
        }
      },
      "type": "object"
    }
  },
  "required": [
    "spec",
    "apiVersion",
    "kind"
  ]
};

/**
 * PrometheusRule defines recording and alerting rules for a Prometheus instance
 */
export interface IPrometheusRule {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "monitoring.coreos.com/v1";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "PrometheusRule";
  "metadata"?: IObjectMeta;
  /**
   * Specification of desired alerting rule definitions for Prometheus.
   */
  "spec": {
    /**
     * Content of Prometheus rule file
     */
    "groups"?: Array<{
      "interval"?: string;
      "name": string;
      "partial_response_strategy"?: string;
      "rules": Array<{
        "alert"?: string;
        "annotations"?: {
          [key: string]: string;
        };
        "expr": number | string;
        "for"?: string;
        "labels"?: {
          [key: string]: string;
        };
        "record"?: string;
      }>;
    }>;
  };
}

/**
 * PrometheusRule defines recording and alerting rules for a Prometheus instance
 */
export class PrometheusRule extends Model<IPrometheusRule> implements IPrometheusRule {
  "apiVersion": IPrometheusRule["apiVersion"];
  "kind": IPrometheusRule["kind"];
  "metadata"?: IPrometheusRule["metadata"];
  "spec": IPrometheusRule["spec"];

static apiVersion: IPrometheusRule["apiVersion"] = "monitoring.coreos.com/v1";
static kind: IPrometheusRule["kind"] = "PrometheusRule";
static is = createTypeMetaGuard<IPrometheusRule>(PrometheusRule);

constructor(data?: ModelData<IPrometheusRule>) {
  super({
    apiVersion: PrometheusRule.apiVersion,
    kind: PrometheusRule.kind,
    ...data
  } as IPrometheusRule);
}
}


setSchema(PrometheusRule, schemaId, () => {
  addSchema();
  register(schemaId, schema);
});
