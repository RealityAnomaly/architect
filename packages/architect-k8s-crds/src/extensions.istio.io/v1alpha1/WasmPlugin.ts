import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/ExtensionsIstioIoV1alpha1WasmPlugin.js";

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


setValidateFunc(WasmPlugin, validate as ValidateFunc<IWasmPlugin>);
