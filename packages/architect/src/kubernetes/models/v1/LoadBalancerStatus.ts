import { IIoK8sApiCoreV1LoadBalancerIngress } from "./LoadBalancerIngress.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../_schemas/IoK8sApiCoreV1LoadBalancerStatus.js";

/**
 * LoadBalancerStatus represents the status of a load-balancer.
 */
export interface ILoadBalancerStatus {
  /**
 * Ingress is a list containing ingress points for the load-balancer. Traffic intended for the service should be sent to these ingress points.
 */
"ingress"?: Array<IIoK8sApiCoreV1LoadBalancerIngress>;
}

/**
 * LoadBalancerStatus represents the status of a load-balancer.
 */
export class LoadBalancerStatus extends Model<ILoadBalancerStatus> implements ILoadBalancerStatus {
  "ingress"?: Array<IIoK8sApiCoreV1LoadBalancerIngress>;

constructor(data?: ModelData<ILoadBalancerStatus>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(LoadBalancerStatus, validate as ValidateFunc<ILoadBalancerStatus>);

export type {
  ILoadBalancerStatus as IIoK8sApiCoreV1LoadBalancerStatus,
  LoadBalancerStatus as IoK8sApiCoreV1LoadBalancerStatus
};
