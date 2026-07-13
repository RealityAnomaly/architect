import { IIoK8sApimachineryPkgApiResourceQuantity } from "../../../apimachinery/api/resource/Quantity.ts";
import { IIoK8sApimachineryPkgApisMetaV1LabelSelector } from "../../../apimachinery/apis/meta/v1/LabelSelector.ts";
import { IIoK8sApiAutoscalingV2beta1CrossVersionObjectReference } from "./CrossVersionObjectReference.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiAutoscalingV2beta1ObjectMetricStatus.js";

/**
 * ObjectMetricStatus indicates the current value of a metric describing a kubernetes object (for example, hits-per-second on an Ingress object).
 */
export interface IObjectMetricStatus {
  /**
 * averageValue is the current value of the average of the metric across all relevant pods (as a quantity)
 */
"averageValue"?: IIoK8sApimachineryPkgApiResourceQuantity;
/**
 * currentValue is the current value of the metric (as a quantity).
 */
"currentValue": IIoK8sApimachineryPkgApiResourceQuantity;
/**
 * metricName is the name of the metric in question.
 */
"metricName": string;
/**
 * selector is the string-encoded form of a standard kubernetes label selector for the given metric When set in the ObjectMetricSource, it is passed as an additional parameter to the metrics server for more specific metrics scoping. When unset, just the metricName will be used to gather metrics.
 */
"selector"?: IIoK8sApimachineryPkgApisMetaV1LabelSelector;
/**
 * target is the described Kubernetes object.
 */
"target": IIoK8sApiAutoscalingV2beta1CrossVersionObjectReference;
}

/**
 * ObjectMetricStatus indicates the current value of a metric describing a kubernetes object (for example, hits-per-second on an Ingress object).
 */
export class ObjectMetricStatus extends Model<IObjectMetricStatus> implements IObjectMetricStatus {
  "averageValue"?: IIoK8sApimachineryPkgApiResourceQuantity;
"currentValue": IIoK8sApimachineryPkgApiResourceQuantity;
"metricName": string;
"selector"?: IIoK8sApimachineryPkgApisMetaV1LabelSelector;
"target": IIoK8sApiAutoscalingV2beta1CrossVersionObjectReference;

constructor(data?: ModelData<IObjectMetricStatus>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(ObjectMetricStatus, validate as ValidateFunc<IObjectMetricStatus>);

export type {
  IObjectMetricStatus as IIoK8sApiAutoscalingV2beta1ObjectMetricStatus,
  ObjectMetricStatus as IoK8sApiAutoscalingV2beta1ObjectMetricStatus
};
