import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { addSchema } from "@kubernetes-models/apimachinery/_schemas/IoK8sApimachineryPkgApisMetaV1ObjectMeta";
import { Model, setSchema, ModelData, createTypeMetaGuard } from "@kubernetes-models/base";
import { register } from "@kubernetes-models/validate";

const schemaId = "networking.istio.io.v1beta1.ProxyConfig";
const schema = {
  "type": "object",
  "properties": {
    "spec": {
      "properties": {
        "concurrency": {
          "nullable": true,
          "type": "integer"
        },
        "environmentVariables": {
          "additionalProperties": {
            "type": "string"
          },
          "type": "object",
          "properties": {},
          "nullable": true
        },
        "image": {
          "properties": {
            "imageType": {
              "type": "string",
              "nullable": true
            }
          },
          "type": "object",
          "nullable": true
        },
        "selector": {
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
          "type": "object",
          "nullable": true
        }
      },
      "type": "object",
      "nullable": true
    },
    "status": {
      "type": "object",
      "properties": {},
      "nullable": true
    },
    "apiVersion": {
      "type": "string",
      "enum": [
        "networking.istio.io/v1beta1"
      ]
    },
    "kind": {
      "type": "string",
      "enum": [
        "ProxyConfig"
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
    }
  },
  "required": [
    "apiVersion",
    "kind"
  ]
};

export interface IProxyConfig {
  /**
   * Provides configuration for individual workloads. See more details at: https://istio.io/docs/reference/config/networking/proxy-config.html
   */
  "spec"?: {
    /**
     * The number of worker threads to run.
     */
    "concurrency"?: number;
    /**
     * Additional environment variables for the proxy.
     */
    "environmentVariables"?: {
      [key: string]: string;
    };
    /**
     * Specifies the details of the proxy image.
     */
    "image"?: {
      /**
       * The image type of the image.
       */
      "imageType"?: string;
    };
    /**
     * Optional.
     */
    "selector"?: {
      "matchLabels"?: {
        [key: string]: string;
      };
    };
  };
  "status"?: {
  };
  "apiVersion": "networking.istio.io/v1beta1";
  "kind": "ProxyConfig";
  "metadata"?: IObjectMeta;
}

export class ProxyConfig extends Model<IProxyConfig> implements IProxyConfig {
  "spec"?: IProxyConfig["spec"];
  "status"?: IProxyConfig["status"];
  "apiVersion": IProxyConfig["apiVersion"];
  "kind": IProxyConfig["kind"];
  "metadata"?: IProxyConfig["metadata"];

static apiVersion: IProxyConfig["apiVersion"] = "networking.istio.io/v1beta1";
static kind: IProxyConfig["kind"] = "ProxyConfig";
static is = createTypeMetaGuard<IProxyConfig>(ProxyConfig);

constructor(data?: ModelData<IProxyConfig>) {
  super({
    apiVersion: ProxyConfig.apiVersion,
    kind: ProxyConfig.kind,
    ...data
  } as IProxyConfig);
}
}


setSchema(ProxyConfig, schemaId, () => {
  addSchema();
  register(schemaId, schema);
});
