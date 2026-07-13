import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "../../../apimachinery/apis/meta/v1/ObjectMeta.ts";
import { IIoK8sApiNetworkingV1NetworkPolicySpec } from "./NetworkPolicySpec.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/kubernetes-types/meta";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/networking.k8s.io/v1/NetworkPolicy.js";

/**
 * NetworkPolicy describes what network traffic is allowed for a set of Pods
 */
export interface INetworkPolicy extends TypeMeta {
  "apiVersion": "networking.k8s.io/v1";
"kind": "NetworkPolicy";
/**
 * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * spec represents the specification of the desired behavior for this NetworkPolicy.
 */
"spec"?: IIoK8sApiNetworkingV1NetworkPolicySpec;
}

/**
 * NetworkPolicy describes what network traffic is allowed for a set of Pods
 */
export class NetworkPolicy extends Model<INetworkPolicy> implements INetworkPolicy {
  "apiVersion": INetworkPolicy["apiVersion"];
"kind": INetworkPolicy["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
"spec"?: IIoK8sApiNetworkingV1NetworkPolicySpec;

static apiVersion: INetworkPolicy["apiVersion"] = "networking.k8s.io/v1";
static kind: INetworkPolicy["kind"] = "NetworkPolicy";
static is: TypeMetaGuard<INetworkPolicy> = createTypeMetaGuard<INetworkPolicy>(NetworkPolicy);

constructor(data?: ModelData<INetworkPolicy>) {
  super();

  this.setDefinedProps({
    apiVersion: NetworkPolicy.apiVersion,
    kind: NetworkPolicy.kind,
    ...data
  } as INetworkPolicy);
}
}

setValidateFunc(NetworkPolicy, validate as ValidateFunc<INetworkPolicy>);

export type {
  INetworkPolicy as IIoK8sApiNetworkingV1NetworkPolicy,
  NetworkPolicy as IoK8sApiNetworkingV1NetworkPolicy
};
