import { IIoK8sApiNetworkingV1IngressPortStatus } from "./IngressPortStatus.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/networking.k8s.io/v1/IngressLoadBalancerIngress.js";

/**
 * IngressLoadBalancerIngress represents the status of a load-balancer ingress point.
 */
export interface IIngressLoadBalancerIngress {
  /**
 * hostname is set for load-balancer ingress points that are DNS based.
 */
"hostname"?: string;
/**
 * ip is set for load-balancer ingress points that are IP based.
 */
"ip"?: string;
/**
 * ports provides information about the ports exposed by this LoadBalancer.
 */
"ports"?: Array<IIoK8sApiNetworkingV1IngressPortStatus>;
}

/**
 * IngressLoadBalancerIngress represents the status of a load-balancer ingress point.
 */
export class IngressLoadBalancerIngress extends Model<IIngressLoadBalancerIngress> implements IIngressLoadBalancerIngress {
  "hostname"?: string;
"ip"?: string;
"ports"?: Array<IIoK8sApiNetworkingV1IngressPortStatus>;

constructor(data?: ModelData<IIngressLoadBalancerIngress>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(IngressLoadBalancerIngress, validate as ValidateFunc<IIngressLoadBalancerIngress>);

export type {
  IIngressLoadBalancerIngress as IIoK8sApiNetworkingV1IngressLoadBalancerIngress,
  IngressLoadBalancerIngress as IoK8sApiNetworkingV1IngressLoadBalancerIngress
};
