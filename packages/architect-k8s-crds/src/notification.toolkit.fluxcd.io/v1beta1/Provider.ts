import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { addSchema } from "@kubernetes-models/apimachinery/_schemas/IoK8sApimachineryPkgApisMetaV1ObjectMeta";
import { Model, setSchema, ModelData, createTypeMetaGuard } from "@kubernetes-models/base";
import { register } from "@kubernetes-models/validate";

const schemaId = "notification.toolkit.fluxcd.io.v1beta1.Provider";
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
        "Provider"
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
        "address": {
          "type": "string",
          "pattern": "^(http|https):\\/\\/",
          "nullable": true
        },
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
        "channel": {
          "type": "string",
          "nullable": true
        },
        "proxy": {
          "type": "string",
          "pattern": "^(http|https):\\/\\/",
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
        "type": {
          "enum": [
            "slack",
            "discord",
            "msteams",
            "rocket",
            "generic",
            "github",
            "gitlab",
            "bitbucket",
            "azuredevops",
            "googlechat",
            "webex",
            "sentry",
            "azureeventhub",
            "telegram",
            "lark",
            "matrix",
            "opsgenie",
            "alertmanager",
            "grafana",
            "githubdispatch"
          ],
          "type": "string"
        },
        "username": {
          "type": "string",
          "nullable": true
        }
      },
      "required": [
        "type"
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
 * Provider is the Schema for the providers API
 */
export interface IProvider {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "notification.toolkit.fluxcd.io/v1beta1";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "Provider";
  "metadata"?: IObjectMeta;
  /**
   * ProviderSpec defines the desired state of Provider
   */
  "spec"?: {
    /**
     * HTTP/S webhook address of this provider
     */
    "address"?: string;
    /**
     * CertSecretRef can be given the name of a secret containing a PEM-encoded CA certificate (`caFile`)
     */
    "certSecretRef"?: {
      /**
       * Name of the referent.
       */
      "name": string;
    };
    /**
     * Alert channel for this provider
     */
    "channel"?: string;
    /**
     * HTTP/S address of the proxy
     */
    "proxy"?: string;
    /**
     * Secret reference containing the provider webhook URL using "address" as data key
     */
    "secretRef"?: {
      /**
       * Name of the referent.
       */
      "name": string;
    };
    /**
     * This flag tells the controller to suspend subsequent events handling. Defaults to false.
     */
    "suspend"?: boolean;
    /**
     * Type of provider
     */
    "type": "slack" | "discord" | "msteams" | "rocket" | "generic" | "github" | "gitlab" | "bitbucket" | "azuredevops" | "googlechat" | "webex" | "sentry" | "azureeventhub" | "telegram" | "lark" | "matrix" | "opsgenie" | "alertmanager" | "grafana" | "githubdispatch";
    /**
     * Bot username for this provider
     */
    "username"?: string;
  };
  /**
   * ProviderStatus defines the observed state of Provider
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
     * ObservedGeneration is the last reconciled generation.
     */
    "observedGeneration"?: number;
  };
}

/**
 * Provider is the Schema for the providers API
 */
export class Provider extends Model<IProvider> implements IProvider {
  "apiVersion": IProvider["apiVersion"];
  "kind": IProvider["kind"];
  "metadata"?: IProvider["metadata"];
  "spec"?: IProvider["spec"];
  "status"?: IProvider["status"];

static apiVersion: IProvider["apiVersion"] = "notification.toolkit.fluxcd.io/v1beta1";
static kind: IProvider["kind"] = "Provider";
static is = createTypeMetaGuard<IProvider>(Provider);

constructor(data?: ModelData<IProvider>) {
  super({
    apiVersion: Provider.apiVersion,
    kind: Provider.kind,
    ...data
  } as IProvider);
}
}


setSchema(Provider, schemaId, () => {
  addSchema();
  register(schemaId, schema);
});
