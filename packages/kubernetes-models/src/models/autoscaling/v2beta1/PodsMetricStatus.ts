import { IIoK8sApimachineryPkgApiResourceQuantity } from "../../../apimachinery/api/resource/Quantity.ts";
import { IIoK8sApimachineryPkgApisMetaV1LabelSelector } from "../../../apimachinery/apis/meta/v1/LabelSelector.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/autoscaling/v2beta1/PodsMetricStatus.js";

/**
 * PodsMetricStatus indicates the current value of a metric describing each pod in the current scale target (for example, transactions-processed-per-second).
 */
export interface IPodsMetricStatus {
  /**
 * currentAverageValue is the current value of the average of the metric across all relevant pods (as a quantity)
 */
"currentAverageValue": IIoK8sApimachineryPkgApiResourceQuantity;
/**
 * metricName is the name of the metric in question
 */
"metricName": string;
/**
 * selector is the string-encoded form of a standard kubernetes label selector for the given metric When set in the PodsMetricSource, it is passed as an additional parameter to the metrics server for more specific metrics scoping. When unset, just the metricName will be used to gather metrics.
 */
"selector"?: IIoK8sApimachineryPkgApisMetaV1LabelSelector;
}

/**
 * PodsMetricStatus indicates the current value of a metric describing each pod in the current scale target (for example, transactions-processed-per-second).
 */
export class PodsMetricStatus extends Model<IPodsMetricStatus> implements IPodsMetricStatus {
  "currentAverageValue": IIoK8sApimachineryPkgApiResourceQuantity;
"metricName": string;
"selector"?: IIoK8sApimachineryPkgApisMetaV1LabelSelector;

constructor(data?: ModelData<IPodsMetricStatus>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(PodsMetricStatus, validate as ValidateFunc<IPodsMetricStatus>);

export type {
  IPodsMetricStatus as IIoK8sApiAutoscalingV2beta1PodsMetricStatus,
  PodsMetricStatus as IoK8sApiAutoscalingV2beta1PodsMetricStatus
};
