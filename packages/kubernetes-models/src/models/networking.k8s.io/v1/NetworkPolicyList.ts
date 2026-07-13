import { IIoK8sApiNetworkingV1NetworkPolicy } from "./NetworkPolicy.ts";
import { IIoK8sApimachineryPkgApisMetaV1ListMeta } from "../../../apimachinery/apis/meta/v1/ListMeta.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/kubernetes-types/meta";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/networking.k8s.io/v1/NetworkPolicyList.js";

/**
 * NetworkPolicyList is a list of NetworkPolicy objects.
 */
export interface INetworkPolicyList extends TypeMeta {
  "apiVersion": "networking.k8s.io/v1";
/**
 * items is a list of schema objects.
 */
"items": Array<IIoK8sApiNetworkingV1NetworkPolicy>;
"kind": "NetworkPolicyList";
/**
 * Standard list metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;
}

/**
 * NetworkPolicyList is a list of NetworkPolicy objects.
 */
export class NetworkPolicyList extends Model<INetworkPolicyList> implements INetworkPolicyList {
  "apiVersion": INetworkPolicyList["apiVersion"];
"items": Array<IIoK8sApiNetworkingV1NetworkPolicy>;
"kind": INetworkPolicyList["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ListMeta;

static apiVersion: INetworkPolicyList["apiVersion"] = "networking.k8s.io/v1";
static kind: INetworkPolicyList["kind"] = "NetworkPolicyList";
static is: TypeMetaGuard<INetworkPolicyList> = createTypeMetaGuard<INetworkPolicyList>(NetworkPolicyList);

constructor(data?: ModelData<INetworkPolicyList>) {
  super();

  this.setDefinedProps({
    apiVersion: NetworkPolicyList.apiVersion,
    kind: NetworkPolicyList.kind,
    ...data
  } as INetworkPolicyList);
}
}

setValidateFunc(NetworkPolicyList, validate as ValidateFunc<INetworkPolicyList>);

export type {
  INetworkPolicyList as IIoK8sApiNetworkingV1NetworkPolicyList,
  NetworkPolicyList as IoK8sApiNetworkingV1NetworkPolicyList
};
