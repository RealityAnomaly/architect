import { IIoK8sApimachineryPkgApiResourceQuantity } from "../../../apimachinery/api/resource/Quantity.ts";
import { IIoK8sApimachineryPkgApisMetaV1LabelSelector } from "../../../apimachinery/apis/meta/v1/LabelSelector.ts";
import { IIoK8sApiAutoscalingV2beta1CrossVersionObjectReference } from "./CrossVersionObjectReference.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/autoscaling/v2beta1/ObjectMetricSource.js";

/**
 * ObjectMetricSource indicates how to scale on a metric describing a kubernetes object (for example, hits-per-second on an Ingress object).
 */
export interface IObjectMetricSource {
  /**
 * averageValue is the target value of the average of the metric across all relevant pods (as a quantity)
 */
"averageValue"?: IIoK8sApimachineryPkgApiResourceQuantity;
/**
 * metricName is the name of the metric in question.
 */
"metricName": string;
/**
 * selector is the string-encoded form of a standard kubernetes label selector for the given metric When set, it is passed as an additional parameter to the metrics server for more specific metrics scoping When unset, just the metricName will be used to gather metrics.
 */
"selector"?: IIoK8sApimachineryPkgApisMetaV1LabelSelector;
/**
 * target is the described Kubernetes object.
 */
"target": IIoK8sApiAutoscalingV2beta1CrossVersionObjectReference;
/**
 * targetValue is the target value of the metric (as a quantity).
 */
"targetValue": IIoK8sApimachineryPkgApiResourceQuantity;
}

/**
 * ObjectMetricSource indicates how to scale on a metric describing a kubernetes object (for example, hits-per-second on an Ingress object).
 */
export class ObjectMetricSource extends Model<IObjectMetricSource> implements IObjectMetricSource {
  "averageValue"?: IIoK8sApimachineryPkgApiResourceQuantity;
"metricName": string;
"selector"?: IIoK8sApimachineryPkgApisMetaV1LabelSelector;
"target": IIoK8sApiAutoscalingV2beta1CrossVersionObjectReference;
"targetValue": IIoK8sApimachineryPkgApiResourceQuantity;

constructor(data?: ModelData<IObjectMetricSource>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(ObjectMetricSource, validate as ValidateFunc<IObjectMetricSource>);

export type {
  IObjectMetricSource as IIoK8sApiAutoscalingV2beta1ObjectMetricSource,
  ObjectMetricSource as IoK8sApiAutoscalingV2beta1ObjectMetricSource
};
