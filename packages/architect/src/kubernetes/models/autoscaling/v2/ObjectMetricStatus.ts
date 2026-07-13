import { IIoK8sApiAutoscalingV2MetricValueStatus } from "./MetricValueStatus.ts";
import { IIoK8sApiAutoscalingV2CrossVersionObjectReference } from "./CrossVersionObjectReference.ts";
import { IIoK8sApiAutoscalingV2MetricIdentifier } from "./MetricIdentifier.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiAutoscalingV2ObjectMetricStatus.js";

/**
 * ObjectMetricStatus indicates the current value of a metric describing a kubernetes object (for example, hits-per-second on an Ingress object).
 */
export interface IObjectMetricStatus {
  /**
 * current contains the current value for the given metric
 */
"current": IIoK8sApiAutoscalingV2MetricValueStatus;
/**
 * DescribedObject specifies the descriptions of a object,such as kind,name apiVersion
 */
"describedObject": IIoK8sApiAutoscalingV2CrossVersionObjectReference;
/**
 * metric identifies the target metric by name and selector
 */
"metric": IIoK8sApiAutoscalingV2MetricIdentifier;
}

/**
 * ObjectMetricStatus indicates the current value of a metric describing a kubernetes object (for example, hits-per-second on an Ingress object).
 */
export class ObjectMetricStatus extends Model<IObjectMetricStatus> implements IObjectMetricStatus {
  "current": IIoK8sApiAutoscalingV2MetricValueStatus;
"describedObject": IIoK8sApiAutoscalingV2CrossVersionObjectReference;
"metric": IIoK8sApiAutoscalingV2MetricIdentifier;

constructor(data?: ModelData<IObjectMetricStatus>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(ObjectMetricStatus, validate as ValidateFunc<IObjectMetricStatus>);

export type {
  IObjectMetricStatus as IIoK8sApiAutoscalingV2ObjectMetricStatus,
  ObjectMetricStatus as IoK8sApiAutoscalingV2ObjectMetricStatus
};
