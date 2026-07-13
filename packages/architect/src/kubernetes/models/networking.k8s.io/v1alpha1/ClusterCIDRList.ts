import { IIoK8sApiNetworkingV1alpha1ClusterCIDR } from "./ClusterCIDR.ts";
import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "../../../apimachinery/apis/meta/v1/ListMeta.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/architect/kubernetes/types/meta";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiNetworkingV1alpha1ClusterCIDRList.js";

/**
 * ClusterCIDRList contains a list of ClusterCIDR.
 */
export interface IClusterCIDRList extends TypeMeta {
  "apiVersion": "networking.k8s.io/v1alpha1";
/**
 * items is the list of ClusterCIDRs.
 */
"items": Array<IIoK8sApiNetworkingV1alpha1ClusterCIDR>;
"kind": "ClusterCIDRList";
/**
 * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * ClusterCIDRList contains a list of ClusterCIDR.
 */
export class ClusterCIDRList extends Model<IClusterCIDRList> implements IClusterCIDRList {
  "apiVersion": IClusterCIDRList["apiVersion"];
"items": Array<IIoK8sApiNetworkingV1alpha1ClusterCIDR>;
"kind": IClusterCIDRList["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: IClusterCIDRList["apiVersion"] = "networking.k8s.io/v1alpha1";
static kind: IClusterCIDRList["kind"] = "ClusterCIDRList";
static is = createTypeMetaGuard<IClusterCIDRList>(ClusterCIDRList);

constructor(data?: ModelData<IClusterCIDRList>) {
  super();

  this.setDefinedProps({
    apiVersion: ClusterCIDRList.apiVersion,
    kind: ClusterCIDRList.kind,
    ...data
  } as IClusterCIDRList);
}
}

setValidateFunc(ClusterCIDRList, validate as ValidateFunc<IClusterCIDRList>);

export type {
  IClusterCIDRList as IIoK8sApiNetworkingV1alpha1ClusterCIDRList,
  ClusterCIDRList as IoK8sApiNetworkingV1alpha1ClusterCIDRList
};
