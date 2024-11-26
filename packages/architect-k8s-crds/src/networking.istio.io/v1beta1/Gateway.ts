import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/NetworkingIstioIoV1beta1Gateway.js";

export interface IGateway {
  /**
   * Configuration affecting edge load balancer. See more details at: https://istio.io/docs/reference/config/networking/gateway.html
   */
  "spec"?: {
    "selector"?: {
      [key: string]: string;
    };
    /**
     * A list of server specifications.
     */
    "servers"?: Array<{
      "bind"?: string;
      "defaultEndpoint"?: string;
      /**
       * One or more hosts exposed by this gateway.
       */
      "hosts"?: Array<string>;
      /**
       * An optional name of the server, when set must be unique across all servers.
       */
      "name"?: string;
      "port"?: {
        /**
         * Label assigned to the port.
         */
        "name"?: string;
        /**
         * A valid non-negative integer port number.
         */
        "number"?: number;
        /**
         * The protocol exposed on the port.
         */
        "protocol"?: string;
        "targetPort"?: number;
      };
      /**
       * Set of TLS related options that govern the server's behavior.
       */
      "tls"?: {
        /**
         * REQUIRED if mode is `MUTUAL`.
         */
        "caCertificates"?: string;
        /**
         * Optional: If specified, only support the specified cipher list.
         */
        "cipherSuites"?: Array<string>;
        "credentialName"?: string;
        "httpsRedirect"?: boolean;
        /**
         * Optional: Maximum TLS protocol version.
         */
        "maxProtocolVersion"?: "TLS_AUTO" | "TLSV1_0" | "TLSV1_1" | "TLSV1_2" | "TLSV1_3";
        /**
         * Optional: Minimum TLS protocol version.
         */
        "minProtocolVersion"?: "TLS_AUTO" | "TLSV1_0" | "TLSV1_1" | "TLSV1_2" | "TLSV1_3";
        "mode"?: "PASSTHROUGH" | "SIMPLE" | "MUTUAL" | "AUTO_PASSTHROUGH" | "ISTIO_MUTUAL";
        /**
         * REQUIRED if mode is `SIMPLE` or `MUTUAL`.
         */
        "privateKey"?: string;
        /**
         * REQUIRED if mode is `SIMPLE` or `MUTUAL`.
         */
        "serverCertificate"?: string;
        "subjectAltNames"?: Array<string>;
        "verifyCertificateHash"?: Array<string>;
        "verifyCertificateSpki"?: Array<string>;
      };
    }>;
  };
  "status"?: {
  };
  "apiVersion": "networking.istio.io/v1beta1";
  "kind": "Gateway";
  "metadata"?: IObjectMeta;
}

export class Gateway extends Model<IGateway> implements IGateway {
  "spec"?: IGateway["spec"];
  "status"?: IGateway["status"];
  "apiVersion": IGateway["apiVersion"];
  "kind": IGateway["kind"];
  "metadata"?: IGateway["metadata"];

static apiVersion: IGateway["apiVersion"] = "networking.istio.io/v1beta1";
static kind: IGateway["kind"] = "Gateway";
static is = createTypeMetaGuard<IGateway>(Gateway);

constructor(data?: ModelData<IGateway>) {
  super({
    apiVersion: Gateway.apiVersion,
    kind: Gateway.kind,
    ...data
  } as IGateway);
}
}


setValidateFunc(Gateway, validate as ValidateFunc<IGateway>);
