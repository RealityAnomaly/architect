import { IIoK8sApiAutoscalingV2MetricValueStatus } from "./MetricValueStatus.ts";
import { IIoK8sApiAutoscalingV2MetricIdentifier } from "./MetricIdentifier.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiAutoscalingV2PodsMetricStatus.js";

/**
 * PodsMetricStatus indicates the current value of a metric describing each pod in the current scale target (for example, transactions-processed-per-second).
 */
export interface IPodsMetricStatus {
  /**
 * current contains the current value for the given metric
 */
"current": IIoK8sApiAutoscalingV2MetricValueStatus;
/**
 * metric identifies the target metric by name and selector
 */
"metric": IIoK8sApiAutoscalingV2MetricIdentifier;
}

/**
 * PodsMetricStatus indicates the current value of a metric describing each pod in the current scale target (for example, transactions-processed-per-second).
 */
export class PodsMetricStatus extends Model<IPodsMetricStatus> implements IPodsMetricStatus {
  "current": IIoK8sApiAutoscalingV2MetricValueStatus;
"metric": IIoK8sApiAutoscalingV2MetricIdentifier;

constructor(data?: ModelData<IPodsMetricStatus>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(PodsMetricStatus, validate as ValidateFunc<IPodsMetricStatus>);

export type {
  IPodsMetricStatus as IIoK8sApiAutoscalingV2PodsMetricStatus,
  PodsMetricStatus as IoK8sApiAutoscalingV2PodsMetricStatus
};
