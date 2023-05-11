import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { addSchema } from "@kubernetes-models/apimachinery/_schemas/IoK8sApimachineryPkgApisMetaV1ObjectMeta";
import { Model, setSchema, ModelData, createTypeMetaGuard } from "@kubernetes-models/base";
import { register } from "@kubernetes-models/validate";

const schemaId = "extensions.istio.io.v1alpha1.WasmPlugin";
const schema = {
  "type": "object",
  "properties": {
    "spec": {
      "properties": {
        "imagePullPolicy": {
          "enum": [
            "UNSPECIFIED_POLICY",
            "IfNotPresent",
            "Always"
          ],
          "type": "string",
          "nullable": true
        },
        "imagePullSecret": {
          "type": "string",
          "nullable": true
        },
        "phase": {
          "enum": [
            "UNSPECIFIED_PHASE",
            "AUTHN",
            "AUTHZ",
            "STATS"
          ],
          "type": "string",
          "nullable": true
        },
        "pluginConfig": {
          "type": "object",
          "properties": {},
          "nullable": true
        },
        "pluginName": {
          "type": "string",
          "nullable": true
        },
        "priority": {
          "nullable": true,
          "type": "integer"
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
        },
        "sha256": {
          "type": "string",
          "nullable": true
        },
        "url": {
          "type": "string",
          "nullable": true
        },
        "verificationKey": {
          "type": "string",
          "nullable": true
        },
        "vmConfig": {
          "properties": {
            "env": {
              "items": {
                "properties": {
                  "name": {
                    "type": "string",
                    "nullable": true
                  },
                  "value": {
                    "type": "string",
                    "nullable": true
                  },
                  "valueFrom": {
                    "enum": [
                      "INLINE",
                      "HOST"
                    ],
                    "type": "string",
                    "nullable": true
                  }
                },
                "type": "object"
              },
              "type": "array",
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
        "extensions.istio.io/v1alpha1"
      ]
    },
    "kind": {
      "type": "string",
      "enum": [
        "WasmPlugin"
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

export interface IWasmPlugin {
  /**
   * Extend the functionality provided by the Istio proxy through WebAssembly filters. See more details at: https://istio.io/docs/reference/config/proxy_extensions/wasm-plugin.html
   */
  "spec"?: {
    /**
     * The pull behaviour to be applied when fetching an OCI image.
     */
    "imagePullPolicy"?: "UNSPECIFIED_POLICY" | "IfNotPresent" | "Always";
    /**
     * Credentials to use for OCI image pulling.
     */
    "imagePullSecret"?: string;
    /**
     * Determines where in the filter chain this `WasmPlugin` is to be injected.
     */
    "phase"?: "UNSPECIFIED_PHASE" | "AUTHN" | "AUTHZ" | "STATS";
    /**
     * The configuration that will be passed on to the plugin.
     */
    "pluginConfig"?: {
    };
    "pluginName"?: string;
    /**
     * Determines ordering of `WasmPlugins` in the same `phase`.
     */
    "priority"?: number;
    "selector"?: {
      "matchLabels"?: {
        [key: string]: string;
      };
    };
    /**
     * SHA256 checksum that will be used to verify Wasm module or OCI container.
     */
    "sha256"?: string;
    /**
     * URL of a Wasm module or OCI container.
     */
    "url"?: string;
    "verificationKey"?: string;
    /**
     * Configuration for a Wasm VM.
     */
    "vmConfig"?: {
      /**
       * Specifies environment variables to be injected to this VM.
       */
      "env"?: Array<{
        "name"?: string;
        /**
         * Value for the environment variable.
         */
        "value"?: string;
        "valueFrom"?: "INLINE" | "HOST";
      }>;
    };
  };
  "status"?: {
  };
  "apiVersion": "extensions.istio.io/v1alpha1";
  "kind": "WasmPlugin";
  "metadata"?: IObjectMeta;
}

export class WasmPlugin extends Model<IWasmPlugin> implements IWasmPlugin {
  "spec"?: IWasmPlugin["spec"];
  "status"?: IWasmPlugin["status"];
  "apiVersion": IWasmPlugin["apiVersion"];
  "kind": IWasmPlugin["kind"];
  "metadata"?: IWasmPlugin["metadata"];

static apiVersion: IWasmPlugin["apiVersion"] = "extensions.istio.io/v1alpha1";
static kind: IWasmPlugin["kind"] = "WasmPlugin";
static is = createTypeMetaGuard<IWasmPlugin>(WasmPlugin);

constructor(data?: ModelData<IWasmPlugin>) {
  super({
    apiVersion: WasmPlugin.apiVersion,
    kind: WasmPlugin.kind,
    ...data
  } as IWasmPlugin);
}
}


setSchema(WasmPlugin, schemaId, () => {
  addSchema();
  register(schemaId, schema);
});
