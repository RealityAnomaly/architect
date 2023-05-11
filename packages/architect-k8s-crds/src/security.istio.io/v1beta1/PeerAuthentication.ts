import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { addSchema } from "@kubernetes-models/apimachinery/_schemas/IoK8sApimachineryPkgApisMetaV1ObjectMeta";
import { Model, setSchema, ModelData, createTypeMetaGuard } from "@kubernetes-models/base";
import { register } from "@kubernetes-models/validate";

const schemaId = "security.istio.io.v1beta1.PeerAuthentication";
const schema = {
  "type": "object",
  "properties": {
    "spec": {
      "properties": {
        "mtls": {
          "properties": {
            "mode": {
              "enum": [
                "UNSET",
                "DISABLE",
                "PERMISSIVE",
                "STRICT"
              ],
              "type": "string",
              "nullable": true
            }
          },
          "type": "object",
          "nullable": true
        },
        "portLevelMtls": {
          "additionalProperties": {
            "properties": {
              "mode": {
                "enum": [
                  "UNSET",
                  "DISABLE",
                  "PERMISSIVE",
                  "STRICT"
                ],
                "type": "string",
                "nullable": true
              }
            },
            "type": "object"
          },
          "type": "object",
          "properties": {},
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
        "security.istio.io/v1beta1"
      ]
    },
    "kind": {
      "type": "string",
      "enum": [
        "PeerAuthentication"
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


setSchema(PeerAuthentication, schemaId, () => {
  addSchema();
  register(schemaId, schema);
});
