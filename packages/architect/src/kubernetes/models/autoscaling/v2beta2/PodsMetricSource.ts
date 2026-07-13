import { IIoK8sApiAutoscalingV2beta2MetricIdentifier } from "./MetricIdentifier.ts";
import { IIoK8sApiAutoscalingV2beta2MetricTarget } from "./MetricTarget.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiAutoscalingV2beta2PodsMetricSource.js";

/**
 * PodsMetricSource indicates how to scale on a metric describing each pod in the current scale target (for example, transactions-processed-per-second). The values will be averaged together before being compared to the target value.
 */
export interface IPodsMetricSource {
  /**
 * metric identifies the target metric by name and selector
 */
"metric": IIoK8sApiAutoscalingV2beta2MetricIdentifier;
/**
 * target specifies the target value for the given metric
 */
"target": IIoK8sApiAutoscalingV2beta2MetricTarget;
}

/**
 * PodsMetricSource indicates how to scale on a metric describing each pod in the current scale target (for example, transactions-processed-per-second). The values will be averaged together before being compared to the target value.
 */
export class PodsMetricSource extends Model<IPodsMetricSource> implements IPodsMetricSource {
  "metric": IIoK8sApiAutoscalingV2beta2MetricIdentifier;
"target": IIoK8sApiAutoscalingV2beta2MetricTarget;

constructor(data?: ModelData<IPodsMetricSource>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(PodsMetricSource, validate as ValidateFunc<IPodsMetricSource>);

export type {
  IPodsMetricSource as IIoK8sApiAutoscalingV2beta2PodsMetricSource,
  PodsMetricSource as IoK8sApiAutoscalingV2beta2PodsMetricSource
};
