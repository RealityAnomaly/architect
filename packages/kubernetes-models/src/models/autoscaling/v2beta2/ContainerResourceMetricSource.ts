import { IIoK8sApiAutoscalingV2beta2MetricTarget } from "./MetricTarget.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/autoscaling/v2beta2/ContainerResourceMetricSource.js";

/**
 * ContainerResourceMetricSource indicates how to scale on a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  The values will be averaged together before being compared to the target.  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.  Only one "target" type should be set.
 */
export interface IContainerResourceMetricSource {
  /**
 * container is the name of the container in the pods of the scaling target
 */
"container": string;
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
 * ContainerResourceMetricSource indicates how to scale on a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  The values will be averaged together before being compared to the target.  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.  Only one "target" type should be set.
 */
export class ContainerResourceMetricSource extends Model<IContainerResourceMetricSource> implements IContainerResourceMetricSource {
  "container": string;
"name": string;
"target": IIoK8sApiAutoscalingV2beta2MetricTarget;

constructor(data?: ModelData<IContainerResourceMetricSource>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(ContainerResourceMetricSource, validate as ValidateFunc<IContainerResourceMetricSource>);

export type {
  IContainerResourceMetricSource as IIoK8sApiAutoscalingV2beta2ContainerResourceMetricSource,
  ContainerResourceMetricSource as IoK8sApiAutoscalingV2beta2ContainerResourceMetricSource
};
