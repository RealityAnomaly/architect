import { IIoK8sApimachineryPkgApisMetaV1LabelSelector } from "../../../apimachinery/apis/meta/v1/LabelSelector.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/autoscaling/v2/MetricIdentifier.js";

/**
 * MetricIdentifier defines the name and optionally selector for a metric
 */
export interface IMetricIdentifier {
  /**
 * name is the name of the given metric
 */
"name": string;
/**
 * selector is the string-encoded form of a standard kubernetes label selector for the given metric When set, it is passed as an additional parameter to the metrics server for more specific metrics scoping. When unset, just the metricName will be used to gather metrics.
 */
"selector"?: IIoK8sApimachineryPkgApisMetaV1LabelSelector;
}

/**
 * MetricIdentifier defines the name and optionally selector for a metric
 */
export class MetricIdentifier extends Model<IMetricIdentifier> implements IMetricIdentifier {
  "name": string;
"selector"?: IIoK8sApimachineryPkgApisMetaV1LabelSelector;

constructor(data?: ModelData<IMetricIdentifier>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(MetricIdentifier, validate as ValidateFunc<IMetricIdentifier>);

export type {
  IMetricIdentifier as IIoK8sApiAutoscalingV2MetricIdentifier,
  MetricIdentifier as IoK8sApiAutoscalingV2MetricIdentifier
};
