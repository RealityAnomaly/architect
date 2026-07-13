import { IIoK8sApiExtensionsV1beta1NetworkPolicyPeer } from "./NetworkPolicyPeer.ts";
import { IIoK8sApiExtensionsV1beta1NetworkPolicyPort } from "./NetworkPolicyPort.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/extensions/v1beta1/NetworkPolicyIngressRule.js";

/**
 * DEPRECATED 1.9 - This group version of NetworkPolicyIngressRule is deprecated by networking/v1/NetworkPolicyIngressRule. This NetworkPolicyIngressRule matches traffic if and only if the traffic matches both ports AND from.
 * @deprecated
 */
export interface INetworkPolicyIngressRule {
  /**
 * List of sources which should be able to access the pods selected for this rule. Items in this list are combined using a logical OR operation. If this field is empty or missing, this rule matches all sources (traffic not restricted by source). If this field is present and contains at least on item, this rule allows traffic only if the traffic matches at least one item in the from list.
 */
"from"?: Array<IIoK8sApiExtensionsV1beta1NetworkPolicyPeer>;
/**
 * List of ports which should be made accessible on the pods selected for this rule. Each item in this list is combined using a logical OR. If this field is empty or missing, this rule matches all ports (traffic not restricted by port). If this field is present and contains at least one item, then this rule allows traffic only if the traffic matches at least one port in the list.
 */
"ports"?: Array<IIoK8sApiExtensionsV1beta1NetworkPolicyPort>;
}

/**
 * DEPRECATED 1.9 - This group version of NetworkPolicyIngressRule is deprecated by networking/v1/NetworkPolicyIngressRule. This NetworkPolicyIngressRule matches traffic if and only if the traffic matches both ports AND from.
 * @deprecated
 */
export class NetworkPolicyIngressRule extends Model<INetworkPolicyIngressRule> implements INetworkPolicyIngressRule {
  "from"?: Array<IIoK8sApiExtensionsV1beta1NetworkPolicyPeer>;
"ports"?: Array<IIoK8sApiExtensionsV1beta1NetworkPolicyPort>;

constructor(data?: ModelData<INetworkPolicyIngressRule>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(NetworkPolicyIngressRule, validate as ValidateFunc<INetworkPolicyIngressRule>);

export type {
  INetworkPolicyIngressRule as IIoK8sApiExtensionsV1beta1NetworkPolicyIngressRule,
  NetworkPolicyIngressRule as IoK8sApiExtensionsV1beta1NetworkPolicyIngressRule
};
