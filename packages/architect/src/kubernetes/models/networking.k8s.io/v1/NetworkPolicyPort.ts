import { IIoK8sApimachineryPkgUtilIntstrIntOrString } from "../../../apimachinery/util/intstr/IntOrString.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiNetworkingV1NetworkPolicyPort.js";

/**
 * NetworkPolicyPort describes a port to allow traffic on
 */
export interface INetworkPolicyPort {
  /**
 * endPort indicates that the range of ports from port to endPort if set, inclusive, should be allowed by the policy. This field cannot be defined if the port field is not defined or if the port field is defined as a named (string) port. The endPort must be equal or greater than port.
 */
"endPort"?: number;
/**
 * port represents the port on the given protocol. This can either be a numerical or named port on a pod. If this field is not provided, this matches all port names and numbers. If present, only traffic on the specified protocol AND port will be matched.
 */
"port"?: IIoK8sApimachineryPkgUtilIntstrIntOrString;
/**
 * protocol represents the protocol (TCP, UDP, or SCTP) which traffic must match. If not specified, this field defaults to TCP.
 */
"protocol"?: string;
}

/**
 * NetworkPolicyPort describes a port to allow traffic on
 */
export class NetworkPolicyPort extends Model<INetworkPolicyPort> implements INetworkPolicyPort {
  "endPort"?: number;
"port"?: IIoK8sApimachineryPkgUtilIntstrIntOrString;
"protocol"?: string;

constructor(data?: ModelData<INetworkPolicyPort>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(NetworkPolicyPort, validate as ValidateFunc<INetworkPolicyPort>);

export type {
  INetworkPolicyPort as IIoK8sApiNetworkingV1NetworkPolicyPort,
  NetworkPolicyPort as IoK8sApiNetworkingV1NetworkPolicyPort
};
