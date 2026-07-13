import { IIoK8sApiAutoscalingV2beta2MetricTarget } from "./MetricTarget.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiAutoscalingV2beta2ResourceMetricSource.js";

/**
 * ResourceMetricSource indicates how to scale on a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  The values will be averaged together before being compared to the target.  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.  Only one "target" type should be set.
 */
export interface IResourceMetricSource {
  /**
 * name is the name of the resource in question.
 */
"name": string;
/**
 * target specifies the target value for the given metric
 */
"target": IIoK8sApiAutoscalingV2beta2MetricTarget;
}

/**
 * ResourceMetricSource indicates how to scale on a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  The values will be averaged together before being compared to the target.  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.  Only one "target" type should be set.
 */
export class ResourceMetricSource extends Model<IResourceMetricSource> implements IResourceMetricSource {
  "name": string;
"target": IIoK8sApiAutoscalingV2beta2MetricTarget;

constructor(data?: ModelData<IResourceMetricSource>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(ResourceMetricSource, validate as ValidateFunc<IResourceMetricSource>);

export type {
  IResourceMetricSource as IIoK8sApiAutoscalingV2beta2ResourceMetricSource,
  ResourceMetricSource as IoK8sApiAutoscalingV2beta2ResourceMetricSource
};
