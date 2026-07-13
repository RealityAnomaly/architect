import { IIoK8sApimachineryPkgApisMetaV1Condition } from "../../apimachinery/apis/meta/v1/Condition.ts";
import { IIoK8sApiCoreV1LoadBalancerStatus } from "./LoadBalancerStatus.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../_schemas/IoK8sApiCoreV1ServiceStatus.js";

/**
 * ServiceStatus represents the current status of a service.
 */
export interface IServiceStatus {
  /**
 * Current service state
 */
"conditions"?: Array<IIoK8sApimachineryPkgApisMetaV1Condition>;
/**
 * LoadBalancer contains the current status of the load-balancer, if one is present.
 */
"loadBalancer"?: IIoK8sApiCoreV1LoadBalancerStatus;
}

/**
 * ServiceStatus represents the current status of a service.
 */
export class ServiceStatus extends Model<IServiceStatus> implements IServiceStatus {
  "conditions"?: Array<IIoK8sApimachineryPkgApisMetaV1Condition>;
"loadBalancer"?: IIoK8sApiCoreV1LoadBalancerStatus;

constructor(data?: ModelData<IServiceStatus>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(ServiceStatus, validate as ValidateFunc<IServiceStatus>);

export type {
  IServiceStatus as IIoK8sApiCoreV1ServiceStatus,
  ServiceStatus as IoK8sApiCoreV1ServiceStatus
};
