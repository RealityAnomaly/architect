import { IIoK8sApimachineryPkgApisMetaV1LabelSelector } from "../../../apimachinery/apis/meta/v1/LabelSelector.ts";
import { IIoK8sApimachineryPkgApiResourceQuantity } from "../../../apimachinery/api/resource/Quantity.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiAutoscalingV2beta1PodsMetricSource.js";

/**
 * PodsMetricSource indicates how to scale on a metric describing each pod in the current scale target (for example, transactions-processed-per-second). The values will be averaged together before being compared to the target value.
 */
export interface IPodsMetricSource {
  /**
 * metricName is the name of the metric in question
 */
"metricName": string;
/**
 * selector is the string-encoded form of a standard kubernetes label selector for the given metric When set, it is passed as an additional parameter to the metrics server for more specific metrics scoping When unset, just the metricName will be used to gather metrics.
 */
"selector"?: IIoK8sApimachineryPkgApisMetaV1LabelSelector;
/**
 * targetAverageValue is the target value of the average of the metric across all relevant pods (as a quantity)
 */
"targetAverageValue": IIoK8sApimachineryPkgApiResourceQuantity;
}

/**
 * PodsMetricSource indicates how to scale on a metric describing each pod in the current scale target (for example, transactions-processed-per-second). The values will be averaged together before being compared to the target value.
 */
export class PodsMetricSource extends Model<IPodsMetricSource> implements IPodsMetricSource {
  "metricName": string;
"selector"?: IIoK8sApimachineryPkgApisMetaV1LabelSelector;
"targetAverageValue": IIoK8sApimachineryPkgApiResourceQuantity;

constructor(data?: ModelData<IPodsMetricSource>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(PodsMetricSource, validate as ValidateFunc<IPodsMetricSource>);

export type {
  IPodsMetricSource as IIoK8sApiAutoscalingV2beta1PodsMetricSource,
  PodsMetricSource as IoK8sApiAutoscalingV2beta1PodsMetricSource
};
