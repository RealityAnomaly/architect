import { IIoK8sApimachineryPkgApisMetaV1Condition } from "../../../apimachinery/apis/meta/v1/Condition.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiNetworkingV1alpha1ServiceCIDRStatus.js";

/**
 * ServiceCIDRStatus describes the current state of the ServiceCIDR.
 */
export interface IServiceCIDRStatus {
  /**
 * conditions holds an array of metav1.Condition that describe the state of the ServiceCIDR. Current service state
 */
"conditions"?: Array<IIoK8sApimachineryPkgApisMetaV1Condition>;
}

/**
 * ServiceCIDRStatus describes the current state of the ServiceCIDR.
 */
export class ServiceCIDRStatus extends Model<IServiceCIDRStatus> implements IServiceCIDRStatus {
  "conditions"?: Array<IIoK8sApimachineryPkgApisMetaV1Condition>;

constructor(data?: ModelData<IServiceCIDRStatus>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(ServiceCIDRStatus, validate as ValidateFunc<IServiceCIDRStatus>);

export type {
  IServiceCIDRStatus as IIoK8sApiNetworkingV1alpha1ServiceCIDRStatus,
  ServiceCIDRStatus as IoK8sApiNetworkingV1alpha1ServiceCIDRStatus
};
