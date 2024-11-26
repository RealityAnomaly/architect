import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/CiliumIoV2CiliumLocalRedirectPolicy.js";

/**
 * CiliumLocalRedirectPolicy is a Kubernetes Custom Resource that contains a specification to redirect traffic locally within a node.
 */
export interface ICiliumLocalRedirectPolicy {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "cilium.io/v2";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "CiliumLocalRedirectPolicy";
  "metadata": IObjectMeta;
  /**
   * Spec is the desired behavior of the local redirect policy.
   */
  "spec"?: {
    /**
     * Description can be used by the creator of the policy to describe the purpose of this policy.
     */
    "description"?: string;
    /**
     * RedirectBackend specifies backend configuration to redirect traffic to. It can not be empty.
     */
    "redirectBackend": {
      /**
       * LocalEndpointSelector selects node local pod(s) where traffic is redirected to.
       */
      "localEndpointSelector": {
        /**
         * matchExpressions is a list of label selector requirements. The requirements are ANDed.
         */
        "matchExpressions"?: Array<{
          /**
           * key is the label key that the selector applies to.
           */
          "key": string;
          /**
           * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
           */
          "operator": "In" | "NotIn" | "Exists" | "DoesNotExist";
          /**
           * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
           */
          "values"?: Array<string>;
        }>;
        /**
         * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
         */
        "matchLabels"?: {
          [key: string]: string;
        };
      };
      /**
       * ToPorts is a list of L4 ports with protocol of node local pod(s) where traffic is redirected to. When multiple ports are specified, the ports must be named.
       */
      "toPorts": Array<{
        /**
         * Name is a port name, which must contain at least one [a-z], and may also contain [0-9] and '-' anywhere except adjacent to another '-' or in the beginning or the end.
         */
        "name"?: string;
        /**
         * Port is an L4 port number. The string will be strictly parsed as a single uint16.
         */
        "port": string;
        /**
         * Protocol is the L4 protocol. Accepted values: "TCP", "UDP"
         */
        "protocol": "TCP" | "UDP";
      }>;
    };
    /**
     * RedirectFrontend specifies frontend configuration to redirect traffic from. It can not be empty.
     */
    "redirectFrontend": {
      /**
       * AddressMatcher is a tuple {IP, port, protocol} that matches traffic to be redirected.
       */
      "addressMatcher"?: {
        /**
         * IP is a destination ip address for traffic to be redirected. 
         *  Example: When it is set to "169.254.169.254", traffic destined to "169.254.169.254" is redirected.
         */
        "ip": string;
        /**
         * ToPorts is a list of destination L4 ports with protocol for traffic to be redirected. When multiple ports are specified, the ports must be named. 
         *  Example: When set to Port: "53" and Protocol: UDP, traffic destined to port '53' with UDP protocol is redirected.
         */
        "toPorts": Array<{
          /**
           * Name is a port name, which must contain at least one [a-z], and may also contain [0-9] and '-' anywhere except adjacent to another '-' or in the beginning or the end.
           */
          "name"?: string;
          /**
           * Port is an L4 port number. The string will be strictly parsed as a single uint16.
           */
          "port": string;
          /**
           * Protocol is the L4 protocol. Accepted values: "TCP", "UDP"
           */
          "protocol": "TCP" | "UDP";
        }>;
      };
      /**
       * ServiceMatcher specifies Kubernetes service and port that matches traffic to be redirected.
       */
      "serviceMatcher"?: {
        /**
         * Namespace is the Kubernetes service namespace. The service namespace must match the namespace of the parent Local Redirect Policy.  For Cluster-wide Local Redirect Policy, this can be any namespace.
         */
        "namespace": string;
        /**
         * Name is the name of a destination Kubernetes service that identifies traffic to be redirected. The service type needs to be ClusterIP. 
         *  Example: When this field is populated with 'serviceName:myService', all the traffic destined to the cluster IP of this service at the (specified) service port(s) will be redirected.
         */
        "serviceName": string;
        /**
         * ToPorts is a list of destination service L4 ports with protocol for traffic to be redirected. If not specified, traffic for all the service ports will be redirected. When multiple ports are specified, the ports must be named.
         */
        "toPorts"?: Array<{
          /**
           * Name is a port name, which must contain at least one [a-z], and may also contain [0-9] and '-' anywhere except adjacent to another '-' or in the beginning or the end.
           */
          "name"?: string;
          /**
           * Port is an L4 port number. The string will be strictly parsed as a single uint16.
           */
          "port": string;
          /**
           * Protocol is the L4 protocol. Accepted values: "TCP", "UDP"
           */
          "protocol": "TCP" | "UDP";
        }>;
      };
    } & ({
      "addressMatcher": any;
    } | {
      "serviceMatcher": any;
    });
  };
  /**
   * Status is the most recent status of the local redirect policy. It is a read-only field.
   */
  "status"?: {
    /**
     * TODO Define status(aditi)
     */
    "ok"?: {
    };
  };
}

/**
 * CiliumLocalRedirectPolicy is a Kubernetes Custom Resource that contains a specification to redirect traffic locally within a node.
 */
export class CiliumLocalRedirectPolicy extends Model<ICiliumLocalRedirectPolicy> implements ICiliumLocalRedirectPolicy {
  "apiVersion": ICiliumLocalRedirectPolicy["apiVersion"];
  "kind": ICiliumLocalRedirectPolicy["kind"];
  "metadata": ICiliumLocalRedirectPolicy["metadata"];
  "spec"?: ICiliumLocalRedirectPolicy["spec"];
  "status"?: ICiliumLocalRedirectPolicy["status"];

static apiVersion: ICiliumLocalRedirectPolicy["apiVersion"] = "cilium.io/v2";
static kind: ICiliumLocalRedirectPolicy["kind"] = "CiliumLocalRedirectPolicy";
static is = createTypeMetaGuard<ICiliumLocalRedirectPolicy>(CiliumLocalRedirectPolicy);

constructor(data?: ModelData<ICiliumLocalRedirectPolicy>) {
  super({
    apiVersion: CiliumLocalRedirectPolicy.apiVersion,
    kind: CiliumLocalRedirectPolicy.kind,
    ...data
  } as ICiliumLocalRedirectPolicy);
}
}


setValidateFunc(CiliumLocalRedirectPolicy, validate as ValidateFunc<ICiliumLocalRedirectPolicy>);
