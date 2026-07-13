import { IIoK8sApiAutoscalingV2beta2MetricValueStatus } from "./MetricValueStatus.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiAutoscalingV2beta2ResourceMetricStatus.js";

/**
 * ResourceMetricStatus indicates the current value of a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.
 */
export interface IResourceMetricStatus {
  /**
 * current contains the current value for the given metric
 */
"current": IIoK8sApiAutoscalingV2beta2MetricValueStatus;
/**
 * Name is the name of the resource in question.
 */
"name": string;
}

/**
 * ResourceMetricStatus indicates the current value of a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.
 */
export class ResourceMetricStatus extends Model<IResourceMetricStatus> implements IResourceMetricStatus {
  "current": IIoK8sApiAutoscalingV2beta2MetricValueStatus;
"name": string;

constructor(data?: ModelData<IResourceMetricStatus>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(ResourceMetricStatus, validate as ValidateFunc<IResourceMetricStatus>);

export type {
  IResourceMetricStatus as IIoK8sApiAutoscalingV2beta2ResourceMetricStatus,
  ResourceMetricStatus as IoK8sApiAutoscalingV2beta2ResourceMetricStatus
};
