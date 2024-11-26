import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData, setValidateFunc, createTypeMetaGuard } from "@kubernetes-models/base";
import { ValidateFunc } from "@kubernetes-models/validate";
import { validate } from "../../_schemas/CiliumIoV2CiliumExternalWorkload.js";

/**
 * CiliumExternalWorkload is a Kubernetes Custom Resource that contains a specification for an external workload that can join the cluster.  The name of the CRD is the FQDN of the external workload, and it needs to match the name in the workload registration. The labels on the CRD object are the labels that will be used to allocate a Cilium Identity for the external workload. If 'io.kubernetes.pod.namespace' or 'io.kubernetes.pod.name' labels are not explicitly specified, they will be defaulted to 'default' and <workload name>, respectively. 'io.cilium.k8s.policy.cluster' will always be defined as the name of the current cluster, which defaults to "default".
 */
export interface ICiliumExternalWorkload {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  "apiVersion": "cilium.io/v2";
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  "kind": "CiliumExternalWorkload";
  "metadata": IObjectMeta;
  /**
   * Spec is the desired configuration of the external Cilium workload.
   */
  "spec"?: {
    /**
     * IPv4AllocCIDR is the range of IPv4 addresses in the CIDR format that the external workload can use to allocate IP addresses for the tunnel device and the health endpoint.
     */
    "ipv4-alloc-cidr"?: string;
    /**
     * IPv6AllocCIDR is the range of IPv6 addresses in the CIDR format that the external workload can use to allocate IP addresses for the tunnel device and the health endpoint.
     */
    "ipv6-alloc-cidr"?: string;
  };
  /**
   * Status is the most recent status of the external Cilium workload. It is a read-only field.
   */
  "status"?: {
    /**
     * ID is the numeric identity allocated for the external workload.
     */
    "id"?: number;
    /**
     * IP is the IP address of the workload. Empty if the workload has not registered.
     */
    "ip"?: string;
  };
}

/**
 * CiliumExternalWorkload is a Kubernetes Custom Resource that contains a specification for an external workload that can join the cluster.  The name of the CRD is the FQDN of the external workload, and it needs to match the name in the workload registration. The labels on the CRD object are the labels that will be used to allocate a Cilium Identity for the external workload. If 'io.kubernetes.pod.namespace' or 'io.kubernetes.pod.name' labels are not explicitly specified, they will be defaulted to 'default' and <workload name>, respectively. 'io.cilium.k8s.policy.cluster' will always be defined as the name of the current cluster, which defaults to "default".
 */
export class CiliumExternalWorkload extends Model<ICiliumExternalWorkload> implements ICiliumExternalWorkload {
  "apiVersion": ICiliumExternalWorkload["apiVersion"];
  "kind": ICiliumExternalWorkload["kind"];
  "metadata": ICiliumExternalWorkload["metadata"];
  "spec"?: ICiliumExternalWorkload["spec"];
  "status"?: ICiliumExternalWorkload["status"];

static apiVersion: ICiliumExternalWorkload["apiVersion"] = "cilium.io/v2";
static kind: ICiliumExternalWorkload["kind"] = "CiliumExternalWorkload";
static is = createTypeMetaGuard<ICiliumExternalWorkload>(CiliumExternalWorkload);

constructor(data?: ModelData<ICiliumExternalWorkload>) {
  super({
    apiVersion: CiliumExternalWorkload.apiVersion,
    kind: CiliumExternalWorkload.kind,
    ...data
  } as ICiliumExternalWorkload);
}
}


setValidateFunc(CiliumExternalWorkload, validate as ValidateFunc<ICiliumExternalWorkload>);
