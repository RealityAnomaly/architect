import { IIoK8sApimachineryPkgUtilIntstrIntOrString } from "../../../apimachinery/util/intstr/IntOrString.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiExtensionsV1beta1NetworkPolicyPort.js";

/**
 * DEPRECATED 1.9 - This group version of NetworkPolicyPort is deprecated by networking/v1/NetworkPolicyPort.
 * @deprecated
 */
export interface INetworkPolicyPort {
  /**
 * If specified, the port on the given protocol.  This can either be a numerical or named port on a pod.  If this field is not provided, this matches all port names and numbers. If present, only traffic on the specified protocol AND port will be matched.
 */
"port"?: IIoK8sApimachineryPkgUtilIntstrIntOrString;
/**
 * Optional.  The protocol (TCP, UDP, or SCTP) which traffic must match. If not specified, this field defaults to TCP.
 */
"protocol"?: string;
}

/**
 * DEPRECATED 1.9 - This group version of NetworkPolicyPort is deprecated by networking/v1/NetworkPolicyPort.
 * @deprecated
 */
export class NetworkPolicyPort extends Model<INetworkPolicyPort> implements INetworkPolicyPort {
  "port"?: IIoK8sApimachineryPkgUtilIntstrIntOrString;
"protocol"?: string;

constructor(data?: ModelData<INetworkPolicyPort>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(NetworkPolicyPort, validate as ValidateFunc<INetworkPolicyPort>);

export type {
  INetworkPolicyPort as IIoK8sApiExtensionsV1beta1NetworkPolicyPort,
  NetworkPolicyPort as IoK8sApiExtensionsV1beta1NetworkPolicyPort
};
