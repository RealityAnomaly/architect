import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "../../../apimachinery/apis/meta/v1/ObjectMeta.ts";
import { IIoK8sApiNetworkingV1alpha1ClusterCIDRSpec } from "./ClusterCIDRSpec.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/architect/kubernetes/types/meta";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiNetworkingV1alpha1ClusterCIDR.js";

/**
 * ClusterCIDR represents a single configuration for per-Node Pod CIDR allocations when the MultiCIDRRangeAllocator is enabled (see the config for kube-controller-manager).  A cluster may have any number of ClusterCIDR resources, all of which will be considered when allocating a CIDR for a Node.  A ClusterCIDR is eligible to be used for a given Node when the node selector matches the node in question and has free CIDRs to allocate.  In case of multiple matching ClusterCIDR resources, the allocator will attempt to break ties using internal heuristics, but any ClusterCIDR whose node selector matches the Node may be used.
 */
export interface IClusterCIDR extends TypeMeta {
  "apiVersion": "networking.k8s.io/v1alpha1";
"kind": "ClusterCIDR";
/**
 * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * spec is the desired state of the ClusterCIDR. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
 */
"spec"?: IIoK8sApiNetworkingV1alpha1ClusterCIDRSpec;
}

/**
 * ClusterCIDR represents a single configuration for per-Node Pod CIDR allocations when the MultiCIDRRangeAllocator is enabled (see the config for kube-controller-manager).  A cluster may have any number of ClusterCIDR resources, all of which will be considered when allocating a CIDR for a Node.  A ClusterCIDR is eligible to be used for a given Node when the node selector matches the node in question and has free CIDRs to allocate.  In case of multiple matching ClusterCIDR resources, the allocator will attempt to break ties using internal heuristics, but any ClusterCIDR whose node selector matches the Node may be used.
 */
export class ClusterCIDR extends Model<IClusterCIDR> implements IClusterCIDR {
  "apiVersion": IClusterCIDR["apiVersion"];
"kind": IClusterCIDR["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
"spec"?: IIoK8sApiNetworkingV1alpha1ClusterCIDRSpec;

static apiVersion: IClusterCIDR["apiVersion"] = "networking.k8s.io/v1alpha1";
static kind: IClusterCIDR["kind"] = "ClusterCIDR";
static is = createTypeMetaGuard<IClusterCIDR>(ClusterCIDR);

constructor(data?: ModelData<IClusterCIDR>) {
  super();

  this.setDefinedProps({
    apiVersion: ClusterCIDR.apiVersion,
    kind: ClusterCIDR.kind,
    ...data
  } as IClusterCIDR);
}
}

setValidateFunc(ClusterCIDR, validate as ValidateFunc<IClusterCIDR>);

export type {
  IClusterCIDR as IIoK8sApiNetworkingV1alpha1ClusterCIDR,
  ClusterCIDR as IoK8sApiNetworkingV1alpha1ClusterCIDR
};
