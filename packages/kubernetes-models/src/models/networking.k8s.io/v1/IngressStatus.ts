import { IIoK8sApiNetworkingV1IngressLoadBalancerStatus } from "./IngressLoadBalancerStatus.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/networking.k8s.io/v1/IngressStatus.js";

/**
 * IngressStatus describe the current state of the Ingress.
 */
export interface IIngressStatus {
  /**
 * loadBalancer contains the current status of the load-balancer.
 */
"loadBalancer"?: IIoK8sApiNetworkingV1IngressLoadBalancerStatus;
}

/**
 * IngressStatus describe the current state of the Ingress.
 */
export class IngressStatus extends Model<IIngressStatus> implements IIngressStatus {
  "loadBalancer"?: IIoK8sApiNetworkingV1IngressLoadBalancerStatus;

constructor(data?: ModelData<IIngressStatus>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(IngressStatus, validate as ValidateFunc<IIngressStatus>);

export type {
  IIngressStatus as IIoK8sApiNetworkingV1IngressStatus,
  IngressStatus as IoK8sApiNetworkingV1IngressStatus
};
