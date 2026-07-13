import { IIoK8sApimachineryPkgApisMetaV1LabelSelector } from "../../../apimachinery/apis/meta/v1/LabelSelector.ts";
import { IIoK8sApimachineryPkgApiResourceQuantity } from "../../../apimachinery/api/resource/Quantity.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiAutoscalingV2beta1ExternalMetricSource.js";

/**
 * ExternalMetricSource indicates how to scale on a metric not associated with any Kubernetes object (for example length of queue in cloud messaging service, or QPS from loadbalancer running outside of cluster). Exactly one "target" type should be set.
 */
export interface IExternalMetricSource {
  /**
 * metricName is the name of the metric in question.
 */
"metricName": string;
/**
 * metricSelector is used to identify a specific time series within a given metric.
 */
"metricSelector"?: IIoK8sApimachineryPkgApisMetaV1LabelSelector;
/**
 * targetAverageValue is the target per-pod value of global metric (as a quantity). Mutually exclusive with TargetValue.
 */
"targetAverageValue"?: IIoK8sApimachineryPkgApiResourceQuantity;
/**
 * targetValue is the target value of the metric (as a quantity). Mutually exclusive with TargetAverageValue.
 */
"targetValue"?: IIoK8sApimachineryPkgApiResourceQuantity;
}

/**
 * ExternalMetricSource indicates how to scale on a metric not associated with any Kubernetes object (for example length of queue in cloud messaging service, or QPS from loadbalancer running outside of cluster). Exactly one "target" type should be set.
 */
export class ExternalMetricSource extends Model<IExternalMetricSource> implements IExternalMetricSource {
  "metricName": string;
"metricSelector"?: IIoK8sApimachineryPkgApisMetaV1LabelSelector;
"targetAverageValue"?: IIoK8sApimachineryPkgApiResourceQuantity;
"targetValue"?: IIoK8sApimachineryPkgApiResourceQuantity;

constructor(data?: ModelData<IExternalMetricSource>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(ExternalMetricSource, validate as ValidateFunc<IExternalMetricSource>);

export type {
  IExternalMetricSource as IIoK8sApiAutoscalingV2beta1ExternalMetricSource,
  ExternalMetricSource as IoK8sApiAutoscalingV2beta1ExternalMetricSource
};
