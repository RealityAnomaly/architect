import { IIoK8sApiNetworkingV1IngressLoadBalancerIngress } from "./IngressLoadBalancerIngress.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/networking.k8s.io/v1/IngressLoadBalancerStatus.js";

/**
 * IngressLoadBalancerStatus represents the status of a load-balancer.
 */
export interface IIngressLoadBalancerStatus {
  /**
 * ingress is a list containing ingress points for the load-balancer.
 */
"ingress"?: Array<IIoK8sApiNetworkingV1IngressLoadBalancerIngress>;
}

/**
 * IngressLoadBalancerStatus represents the status of a load-balancer.
 */
export class IngressLoadBalancerStatus extends Model<IIngressLoadBalancerStatus> implements IIngressLoadBalancerStatus {
  "ingress"?: Array<IIoK8sApiNetworkingV1IngressLoadBalancerIngress>;

constructor(data?: ModelData<IIngressLoadBalancerStatus>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(IngressLoadBalancerStatus, validate as ValidateFunc<IIngressLoadBalancerStatus>);

export type {
  IIngressLoadBalancerStatus as IIoK8sApiNetworkingV1IngressLoadBalancerStatus,
  IngressLoadBalancerStatus as IoK8sApiNetworkingV1IngressLoadBalancerStatus
};
