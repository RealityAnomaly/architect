import { IIoK8sApimachineryPkgApiResourceQuantity } from "../../../apimachinery/api/resource/Quantity.ts";
import { IIoK8sApimachineryPkgApisMetaV1LabelSelector } from "../../../apimachinery/apis/meta/v1/LabelSelector.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/autoscaling/v2beta1/ExternalMetricStatus.js";

/**
 * ExternalMetricStatus indicates the current value of a global metric not associated with any Kubernetes object.
 */
export interface IExternalMetricStatus {
  /**
 * currentAverageValue is the current value of metric averaged over autoscaled pods.
 */
"currentAverageValue"?: IIoK8sApimachineryPkgApiResourceQuantity;
/**
 * currentValue is the current value of the metric (as a quantity)
 */
"currentValue": IIoK8sApimachineryPkgApiResourceQuantity;
/**
 * metricName is the name of a metric used for autoscaling in metric system.
 */
"metricName": string;
/**
 * metricSelector is used to identify a specific time series within a given metric.
 */
"metricSelector"?: IIoK8sApimachineryPkgApisMetaV1LabelSelector;
}

/**
 * ExternalMetricStatus indicates the current value of a global metric not associated with any Kubernetes object.
 */
export class ExternalMetricStatus extends Model<IExternalMetricStatus> implements IExternalMetricStatus {
  "currentAverageValue"?: IIoK8sApimachineryPkgApiResourceQuantity;
"currentValue": IIoK8sApimachineryPkgApiResourceQuantity;
"metricName": string;
"metricSelector"?: IIoK8sApimachineryPkgApisMetaV1LabelSelector;

constructor(data?: ModelData<IExternalMetricStatus>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(ExternalMetricStatus, validate as ValidateFunc<IExternalMetricStatus>);

export type {
  IExternalMetricStatus as IIoK8sApiAutoscalingV2beta1ExternalMetricStatus,
  ExternalMetricStatus as IoK8sApiAutoscalingV2beta1ExternalMetricStatus
};
