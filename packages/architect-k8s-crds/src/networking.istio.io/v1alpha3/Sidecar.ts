import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/NetworkingIstioIoV1alpha3Sidecar.js";

export interface ISidecar {
  /**
   * Configuration affecting network reachability of a sidecar. See more details at: https://istio.io/docs/reference/config/networking/sidecar.html
   */
  "spec"?: {
    "egress"?: Array<{
      "bind"?: string;
      "captureMode"?: "DEFAULT" | "IPTABLES" | "NONE";
      "hosts"?: Array<string>;
      /**
       * The port associated with the listener.
       */
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
    }>;
    "ingress"?: Array<{
      /**
       * The IP to which the listener should be bound.
       */
      "bind"?: string;
      "captureMode"?: "DEFAULT" | "IPTABLES" | "NONE";
      "defaultEndpoint"?: string;
      /**
       * The port associated with the listener.
       */
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
    /**
     * Configuration for the outbound traffic policy.
     */
    "outboundTrafficPolicy"?: {
      "egressProxy"?: {
        /**
         * The name of a service from the service registry.
         */
        "host"?: string;
        /**
         * Specifies the port on the host that is being addressed.
         */
        "port"?: {
          "number"?: number;
        };
        /**
         * The name of a subset within the service.
         */
        "subset"?: string;
      };
      "mode"?: "REGISTRY_ONLY" | "ALLOW_ANY";
    };
    "workloadSelector"?: {
      "labels"?: {
        [key: string]: string;
      };
    };
  };
  "status"?: {
  };
  "apiVersion": "networking.istio.io/v1alpha3";
  "kind": "Sidecar";
  "metadata"?: IObjectMeta;
}

export class Sidecar extends Model<ISidecar> implements ISidecar {
  "spec"?: ISidecar["spec"];
  "status"?: ISidecar["status"];
  "apiVersion": ISidecar["apiVersion"];
  "kind": ISidecar["kind"];
  "metadata"?: ISidecar["metadata"];

static apiVersion: ISidecar["apiVersion"] = "networking.istio.io/v1alpha3";
static kind: ISidecar["kind"] = "Sidecar";
static is = createTypeMetaGuard<ISidecar>(Sidecar);

constructor(data?: ModelData<ISidecar>) {
  super({
    apiVersion: Sidecar.apiVersion,
    kind: Sidecar.kind,
    ...data
  } as ISidecar);
}
}


setValidateFunc(Sidecar, validate as ValidateFunc<ISidecar>);
