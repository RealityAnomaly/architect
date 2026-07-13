import { IIoK8sApiCoreV1LoadBalancerStatus } from "../../v1/LoadBalancerStatus.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/networking.k8s.io/v1beta1/IngressStatus.js";

/**
 * IngressStatus describe the current state of the Ingress.
 */
export interface IIngressStatus {
  /**
 * LoadBalancer contains the current status of the load-balancer.
 */
"loadBalancer"?: IIoK8sApiCoreV1LoadBalancerStatus;
}

/**
 * IngressStatus describe the current state of the Ingress.
 */
export class IngressStatus extends Model<IIngressStatus> implements IIngressStatus {
  "loadBalancer"?: IIoK8sApiCoreV1LoadBalancerStatus;

constructor(data?: ModelData<IIngressStatus>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(IngressStatus, validate as ValidateFunc<IIngressStatus>);

export type {
  IIngressStatus as IIoK8sApiNetworkingV1beta1IngressStatus,
  IngressStatus as IoK8sApiNetworkingV1beta1IngressStatus
};
