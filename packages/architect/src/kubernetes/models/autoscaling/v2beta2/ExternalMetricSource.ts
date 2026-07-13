import { IIoK8sApiAutoscalingV2beta2MetricIdentifier } from "./MetricIdentifier.ts";
import { IIoK8sApiAutoscalingV2beta2MetricTarget } from "./MetricTarget.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiAutoscalingV2beta2ExternalMetricSource.js";

/**
 * ExternalMetricSource indicates how to scale on a metric not associated with any Kubernetes object (for example length of queue in cloud messaging service, or QPS from loadbalancer running outside of cluster).
 */
export interface IExternalMetricSource {
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
 * ExternalMetricSource indicates how to scale on a metric not associated with any Kubernetes object (for example length of queue in cloud messaging service, or QPS from loadbalancer running outside of cluster).
 */
export class ExternalMetricSource extends Model<IExternalMetricSource> implements IExternalMetricSource {
  "metric": IIoK8sApiAutoscalingV2beta2MetricIdentifier;
"target": IIoK8sApiAutoscalingV2beta2MetricTarget;

constructor(data?: ModelData<IExternalMetricSource>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(ExternalMetricSource, validate as ValidateFunc<IExternalMetricSource>);

export type {
  IExternalMetricSource as IIoK8sApiAutoscalingV2beta2ExternalMetricSource,
  ExternalMetricSource as IoK8sApiAutoscalingV2beta2ExternalMetricSource
};
