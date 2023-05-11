import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { addSchema } from "@kubernetes-models/apimachinery/_schemas/IoK8sApimachineryPkgApisMetaV1ObjectMeta";
import { Model, setSchema, ModelData, createTypeMetaGuard } from "@kubernetes-models/base";
import { register } from "@kubernetes-models/validate";

const schemaId = "cilium.io.v2.CiliumExternalWorkload";
const schema = {
  "type": "object",
  "properties": {
    "apiVersion": {
      "type": "string",
      "enum": [
        "cilium.io/v2"
      ]
    },
    "kind": {
      "type": "string",
      "enum": [
        "CiliumExternalWorkload"
      ]
    },
    "metadata": {
      "$ref": "io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta#"
    },
    "spec": {
      "properties": {
        "ipv4-alloc-cidr": {
          "type": "string",
          "pattern": "^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\/([0-9]|[1-2][0-9]|3[0-2])$",
          "nullable": true
        },
        "ipv6-alloc-cidr": {
          "type": "string",
          "pattern": "^s*((([0-9A-Fa-f]{1,4}:){7}(:|([0-9A-Fa-f]{1,4})))|(([0-9A-Fa-f]{1,4}:){6}:([0-9A-Fa-f]{1,4})?)|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){0,1}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){0,2}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){0,3}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){0,4}):([0-9A-Fa-f]{1,4})?))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){0,5}):([0-9A-Fa-f]{1,4})?))|(:(:|((:[0-9A-Fa-f]{1,4}){1,7}))))(%.+)?s*\\/([0-9]|[1-9][0-9]|1[0-1][0-9]|12[0-8])$",
          "nullable": true
        }
      },
      "type": "object",
      "nullable": true
    },
    "status": {
      "properties": {
        "id": {
          "format": "int64",
          "type": "integer",
          "nullable": true
        },
        "ip": {
          "type": "string",
          "nullable": true
        }
      },
      "type": "object",
      "nullable": true
    }
  },
  "required": [
    "metadata",
    "apiVersion",
    "kind"
  ]
};

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


setSchema(CiliumExternalWorkload, schemaId, () => {
  addSchema();
  register(schemaId, schema);
});
