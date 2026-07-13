import { IIoK8sApimachineryPkgApisMetaV1Condition } from "../../../apimachinery/apis/meta/v1/Condition.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/networking.k8s.io/v1/NetworkPolicyStatus.js";

/**
 * NetworkPolicyStatus describes the current state of the NetworkPolicy.
 */
export interface INetworkPolicyStatus {
  /**
 * conditions holds an array of metav1.Condition that describe the state of the NetworkPolicy. Current service state
 */
"conditions"?: Array<IIoK8sApimachineryPkgApisMetaV1Condition>;
}

/**
 * NetworkPolicyStatus describes the current state of the NetworkPolicy.
 */
export class NetworkPolicyStatus extends Model<INetworkPolicyStatus> implements INetworkPolicyStatus {
  "conditions"?: Array<IIoK8sApimachineryPkgApisMetaV1Condition>;

constructor(data?: ModelData<INetworkPolicyStatus>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(NetworkPolicyStatus, validate as ValidateFunc<INetworkPolicyStatus>);

export type {
  INetworkPolicyStatus as IIoK8sApiNetworkingV1NetworkPolicyStatus,
  NetworkPolicyStatus as IoK8sApiNetworkingV1NetworkPolicyStatus
};
