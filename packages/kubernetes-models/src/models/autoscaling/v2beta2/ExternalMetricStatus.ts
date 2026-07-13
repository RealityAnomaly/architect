import { IIoK8sApiAutoscalingV2beta2MetricValueStatus } from "./MetricValueStatus.ts";
import { IIoK8sApiAutoscalingV2beta2MetricIdentifier } from "./MetricIdentifier.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/autoscaling/v2beta2/ExternalMetricStatus.js";

/**
 * ExternalMetricStatus indicates the current value of a global metric not associated with any Kubernetes object.
 */
export interface IExternalMetricStatus {
  /**
 * current contains the current value for the given metric
 */
"current": IIoK8sApiAutoscalingV2beta2MetricValueStatus;
/**
 * metric identifies the target metric by name and selector
 */
"metric": IIoK8sApiAutoscalingV2beta2MetricIdentifier;
}

/**
 * ExternalMetricStatus indicates the current value of a global metric not associated with any Kubernetes object.
 */
export class ExternalMetricStatus extends Model<IExternalMetricStatus> implements IExternalMetricStatus {
  "current": IIoK8sApiAutoscalingV2beta2MetricValueStatus;
"metric": IIoK8sApiAutoscalingV2beta2MetricIdentifier;

constructor(data?: ModelData<IExternalMetricStatus>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(ExternalMetricStatus, validate as ValidateFunc<IExternalMetricStatus>);

export type {
  IExternalMetricStatus as IIoK8sApiAutoscalingV2beta2ExternalMetricStatus,
  ExternalMetricStatus as IoK8sApiAutoscalingV2beta2ExternalMetricStatus
};
