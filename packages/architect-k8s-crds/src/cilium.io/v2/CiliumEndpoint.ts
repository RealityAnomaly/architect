import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/CiliumIoV2CiliumEndpoint.js";

/**
 * CiliumEndpoint is the status of a Cilium policy rule.
 */
export interface ICiliumEndpoint {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "cilium.io/v2";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "CiliumEndpoint";
  "metadata": IObjectMeta;
  /**
   * EndpointStatus is the status of a Cilium endpoint.
   */
  "status"?: {
    /**
     * Controllers is the list of failing controllers for this endpoint.
     */
    "controllers"?: Array<{
      /**
       * Configuration is the controller configuration
       */
      "configuration"?: {
        /**
         * Retry on error
         */
        "error-retry"?: boolean;
        /**
         * Base error retry back-off time Format: duration
         */
        "error-retry-base"?: number;
        /**
         * Regular synchronization interval Format: duration
         */
        "interval"?: number;
      };
      /**
       * Name is the name of the controller
       */
      "name"?: string;
      /**
       * Status is the status of the controller
       */
      "status"?: {
        "consecutive-failure-count"?: number;
        "failure-count"?: number;
        "last-failure-msg"?: string;
        "last-failure-timestamp"?: string;
        "last-success-timestamp"?: string;
        "success-count"?: number;
      };
      /**
       * UUID is the UUID of the controller
       */
      "uuid"?: string;
    }>;
    /**
     * Encryption is the encryption configuration of the node
     */
    "encryption"?: {
      /**
       * Key is the index to the key to use for encryption or 0 if encryption is disabled.
       */
      "key"?: number;
    };
    /**
     * ExternalIdentifiers is a set of identifiers to identify the endpoint apart from the pod name. This includes container runtime IDs.
     */
    "external-identifiers"?: {
      /**
       * ID assigned by container runtime
       */
      "container-id"?: string;
      /**
       * Name assigned to container
       */
      "container-name"?: string;
      /**
       * Docker endpoint ID
       */
      "docker-endpoint-id"?: string;
      /**
       * Docker network ID
       */
      "docker-network-id"?: string;
      /**
       * K8s namespace for this endpoint
       */
      "k8s-namespace"?: string;
      /**
       * K8s pod name for this endpoint
       */
      "k8s-pod-name"?: string;
      /**
       * K8s pod for this endpoint(Deprecated, use K8sPodName and K8sNamespace instead)
       */
      "pod-name"?: string;
    };
    /**
     * Health is the overall endpoint & subcomponent health.
     */
    "health"?: {
      /**
       * bpf
       */
      "bpf"?: string;
      /**
       * Is this endpoint reachable
       */
      "connected"?: boolean;
      /**
       * overall health
       */
      "overallHealth"?: string;
      /**
       * policy
       */
      "policy"?: string;
    };
    /**
     * ID is the cilium-agent-local ID of the endpoint.
     */
    "id"?: number;
    /**
     * Identity is the security identity associated with the endpoint
     */
    "identity"?: {
      /**
       * ID is the numeric identity of the endpoint
       */
      "id"?: number;
      /**
       * Labels is the list of labels associated with the identity
       */
      "labels"?: Array<string>;
    };
    /**
     * Log is the list of the last few warning and error log entries
     */
    "log"?: Array<{
      /**
       * Code indicate type of status change Enum: [ok failed]
       */
      "code"?: string;
      /**
       * Status message
       */
      "message"?: string;
      /**
       * state
       */
      "state"?: string;
      /**
       * Timestamp when status change occurred
       */
      "timestamp"?: string;
    }>;
    /**
     * NamedPorts List of named Layer 4 port and protocol pairs which will be used in Network Policy specs. 
     *  swagger:model NamedPorts
     */
    "named-ports"?: Array<{
      /**
       * Optional layer 4 port name
       */
      "name"?: string;
      /**
       * Layer 4 port number
       */
      "port"?: number;
      /**
       * Layer 4 protocol Enum: [TCP UDP ICMP ICMPV6 ANY]
       */
      "protocol"?: string;
    }>;
    /**
     * Networking is the networking properties of the endpoint.
     */
    "networking"?: {
      /**
       * IP4/6 addresses assigned to this Endpoint
       */
      "addressing": Array<{
        "ipv4"?: string;
        "ipv6"?: string;
      }>;
      /**
       * NodeIP is the IP of the node the endpoint is running on. The IP must be reachable between nodes.
       */
      "node"?: string;
    };
    /**
     * EndpointPolicy represents the endpoint's policy by listing all allowed ingress and egress identities in combination with L4 port and protocol.
     */
    "policy"?: {
      /**
       * EndpointPolicyDirection is the list of allowed identities per direction.
       */
      "egress"?: {
        /**
         * Deprecated
         */
        "adding"?: Array<{
          "dest-port"?: number;
          "identity"?: number;
          "identity-labels"?: {
            [key: string]: string;
          };
          "protocol"?: number;
        }>;
        /**
         * AllowedIdentityList is a list of IdentityTuples that species peers that are allowed.
         */
        "allowed"?: Array<{
          "dest-port"?: number;
          "identity"?: number;
          "identity-labels"?: {
            [key: string]: string;
          };
          "protocol"?: number;
        }>;
        /**
         * DenyIdentityList is a list of IdentityTuples that species peers that are denied.
         */
        "denied"?: Array<{
          "dest-port"?: number;
          "identity"?: number;
          "identity-labels"?: {
            [key: string]: string;
          };
          "protocol"?: number;
        }>;
        "enforcing": boolean;
        /**
         * Deprecated
         */
        "removing"?: Array<{
          "dest-port"?: number;
          "identity"?: number;
          "identity-labels"?: {
            [key: string]: string;
          };
          "protocol"?: number;
        }>;
      };
      /**
       * EndpointPolicyDirection is the list of allowed identities per direction.
       */
      "ingress"?: {
        /**
         * Deprecated
         */
        "adding"?: Array<{
          "dest-port"?: number;
          "identity"?: number;
          "identity-labels"?: {
            [key: string]: string;
          };
          "protocol"?: number;
        }>;
        /**
         * AllowedIdentityList is a list of IdentityTuples that species peers that are allowed.
         */
        "allowed"?: Array<{
          "dest-port"?: number;
          "identity"?: number;
          "identity-labels"?: {
            [key: string]: string;
          };
          "protocol"?: number;
        }>;
        /**
         * DenyIdentityList is a list of IdentityTuples that species peers that are denied.
         */
        "denied"?: Array<{
          "dest-port"?: number;
          "identity"?: number;
          "identity-labels"?: {
            [key: string]: string;
          };
          "protocol"?: number;
        }>;
        "enforcing": boolean;
        /**
         * Deprecated
         */
        "removing"?: Array<{
          "dest-port"?: number;
          "identity"?: number;
          "identity-labels"?: {
            [key: string]: string;
          };
          "protocol"?: number;
        }>;
      };
    };
    /**
     * State is the state of the endpoint.
     */
    "state"?: "creating" | "waiting-for-identity" | "not-ready" | "waiting-to-regenerate" | "regenerating" | "restoring" | "ready" | "disconnecting" | "disconnected" | "invalid";
    "visibility-policy-status"?: string;
  };
}

/**
 * CiliumEndpoint is the status of a Cilium policy rule.
 */
export class CiliumEndpoint extends Model<ICiliumEndpoint> implements ICiliumEndpoint {
  "apiVersion": ICiliumEndpoint["apiVersion"];
  "kind": ICiliumEndpoint["kind"];
  "metadata": ICiliumEndpoint["metadata"];
  "status"?: ICiliumEndpoint["status"];

static apiVersion: ICiliumEndpoint["apiVersion"] = "cilium.io/v2";
static kind: ICiliumEndpoint["kind"] = "CiliumEndpoint";
static is = createTypeMetaGuard<ICiliumEndpoint>(CiliumEndpoint);

constructor(data?: ModelData<ICiliumEndpoint>) {
  super({
    apiVersion: CiliumEndpoint.apiVersion,
    kind: CiliumEndpoint.kind,
    ...data
  } as ICiliumEndpoint);
}
}


setValidateFunc(CiliumEndpoint, validate as ValidateFunc<ICiliumEndpoint>);
