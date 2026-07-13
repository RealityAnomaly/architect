import { IIoK8sApimachineryPkgApisMetaV1ObjectMeta } from "../../../apimachinery/apis/meta/v1/ObjectMeta.ts";
import { IIoK8sApiExtensionsV1beta1NetworkPolicySpec } from "./NetworkPolicySpec.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { TypeMeta, TypeMetaGuard, createTypeMetaGuard } from "@glassway/architect/kubernetes/types/meta";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiExtensionsV1beta1NetworkPolicy.js";

/**
 * DEPRECATED 1.9 - This group version of NetworkPolicy is deprecated by networking/v1/NetworkPolicy. NetworkPolicy describes what network traffic is allowed for a set of Pods
 * @deprecated
 */
export interface INetworkPolicy extends TypeMeta {
  "apiVersion": "extensions/v1beta1";
"kind": "NetworkPolicy";
/**
 * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
 */
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
/**
 * Specification of the desired behavior for this NetworkPolicy.
 */
"spec"?: IIoK8sApiExtensionsV1beta1NetworkPolicySpec;
}

/**
 * DEPRECATED 1.9 - This group version of NetworkPolicy is deprecated by networking/v1/NetworkPolicy. NetworkPolicy describes what network traffic is allowed for a set of Pods
 * @deprecated
 */
export class NetworkPolicy extends Model<INetworkPolicy> implements INetworkPolicy {
  "apiVersion": INetworkPolicy["apiVersion"];
"kind": INetworkPolicy["kind"];
"metadata"?: IIoK8sApimachineryPkgApisMetaV1ObjectMeta;
"spec"?: IIoK8sApiExtensionsV1beta1NetworkPolicySpec;

static apiVersion: INetworkPolicy["apiVersion"] = "extensions/v1beta1";
static kind: INetworkPolicy["kind"] = "NetworkPolicy";
static is = createTypeMetaGuard<INetworkPolicy>(NetworkPolicy);

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
  INetworkPolicy as IIoK8sApiExtensionsV1beta1NetworkPolicy,
  NetworkPolicy as IoK8sApiExtensionsV1beta1NetworkPolicy
};
