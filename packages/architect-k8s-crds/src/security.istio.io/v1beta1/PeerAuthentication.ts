import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/SecurityIstioIoV1beta1PeerAuthentication.js";

export interface IPeerAuthentication {
  /**
   * PeerAuthentication defines how traffic will be tunneled (or not) to the sidecar.
   */
  "spec"?: {
    /**
     * Mutual TLS settings for workload.
     */
    "mtls"?: {
      /**
       * Defines the mTLS mode used for peer authentication.
       */
      "mode"?: "UNSET" | "DISABLE" | "PERMISSIVE" | "STRICT";
    };
    /**
     * Port specific mutual TLS settings.
     */
    "portLevelMtls"?: {
      [key: string]: {
        /**
         * Defines the mTLS mode used for peer authentication.
         */
        "mode"?: "UNSET" | "DISABLE" | "PERMISSIVE" | "STRICT";
      };
    };
    /**
     * The selector determines the workloads to apply the ChannelAuthentication on.
     */
    "selector"?: {
      "matchLabels"?: {
        [key: string]: string;
      };
    };
  };
  "status"?: {
  };
  "apiVersion": "security.istio.io/v1beta1";
  "kind": "PeerAuthentication";
  "metadata"?: IObjectMeta;
}

export class PeerAuthentication extends Model<IPeerAuthentication> implements IPeerAuthentication {
  "spec"?: IPeerAuthentication["spec"];
  "status"?: IPeerAuthentication["status"];
  "apiVersion": IPeerAuthentication["apiVersion"];
  "kind": IPeerAuthentication["kind"];
  "metadata"?: IPeerAuthentication["metadata"];

static apiVersion: IPeerAuthentication["apiVersion"] = "security.istio.io/v1beta1";
static kind: IPeerAuthentication["kind"] = "PeerAuthentication";
static is = createTypeMetaGuard<IPeerAuthentication>(PeerAuthentication);

constructor(data?: ModelData<IPeerAuthentication>) {
  super({
    apiVersion: PeerAuthentication.apiVersion,
    kind: PeerAuthentication.kind,
    ...data
  } as IPeerAuthentication);
}
}


setValidateFunc(PeerAuthentication, validate as ValidateFunc<IPeerAuthentication>);
