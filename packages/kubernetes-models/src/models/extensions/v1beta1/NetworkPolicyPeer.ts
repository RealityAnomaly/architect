import { IIoK8sApiExtensionsV1beta1IPBlock } from "./IPBlock.ts";
import { IIoK8sApimachineryPkgApisMetaV1LabelSelector } from "../../../apimachinery/apis/meta/v1/LabelSelector.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/extensions/v1beta1/NetworkPolicyPeer.js";

/**
 * DEPRECATED 1.9 - This group version of NetworkPolicyPeer is deprecated by networking/v1/NetworkPolicyPeer.
 * @deprecated
 */
export interface INetworkPolicyPeer {
  /**
 * IPBlock defines policy on a particular IPBlock. If this field is set then neither of the other fields can be.
 */
"ipBlock"?: IIoK8sApiExtensionsV1beta1IPBlock;
/**
 * Selects Namespaces using cluster-scoped labels. This field follows standard label selector semantics; if present but empty, it selects all namespaces.
 * 
 * If PodSelector is also set, then the NetworkPolicyPeer as a whole selects the Pods matching PodSelector in the Namespaces selected by NamespaceSelector. Otherwise it selects all Pods in the Namespaces selected by NamespaceSelector.
 */
"namespaceSelector"?: IIoK8sApimachineryPkgApisMetaV1LabelSelector;
/**
 * This is a label selector which selects Pods. This field follows standard label selector semantics; if present but empty, it selects all pods.
 * 
 * If NamespaceSelector is also set, then the NetworkPolicyPeer as a whole selects the Pods matching PodSelector in the Namespaces selected by NamespaceSelector. Otherwise it selects the Pods matching PodSelector in the policy's own Namespace.
 */
"podSelector"?: IIoK8sApimachineryPkgApisMetaV1LabelSelector;
}

/**
 * DEPRECATED 1.9 - This group version of NetworkPolicyPeer is deprecated by networking/v1/NetworkPolicyPeer.
 * @deprecated
 */
export class NetworkPolicyPeer extends Model<INetworkPolicyPeer> implements INetworkPolicyPeer {
  "ipBlock"?: IIoK8sApiExtensionsV1beta1IPBlock;
"namespaceSelector"?: IIoK8sApimachineryPkgApisMetaV1LabelSelector;
"podSelector"?: IIoK8sApimachineryPkgApisMetaV1LabelSelector;

constructor(data?: ModelData<INetworkPolicyPeer>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(NetworkPolicyPeer, validate as ValidateFunc<INetworkPolicyPeer>);

export type {
  INetworkPolicyPeer as IIoK8sApiExtensionsV1beta1NetworkPolicyPeer,
  NetworkPolicyPeer as IoK8sApiExtensionsV1beta1NetworkPolicyPeer
};
