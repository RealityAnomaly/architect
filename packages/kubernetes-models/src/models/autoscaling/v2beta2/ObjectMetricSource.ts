import { IIoK8sApiAutoscalingV2beta2CrossVersionObjectReference } from "./CrossVersionObjectReference.ts";
import { IIoK8sApiAutoscalingV2beta2MetricIdentifier } from "./MetricIdentifier.ts";
import { IIoK8sApiAutoscalingV2beta2MetricTarget } from "./MetricTarget.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/autoscaling/v2beta2/ObjectMetricSource.js";

/**
 * ObjectMetricSource indicates how to scale on a metric describing a kubernetes object (for example, hits-per-second on an Ingress object).
 */
export interface IObjectMetricSource {
  "describedObject": IIoK8sApiAutoscalingV2beta2CrossVersionObjectReference;
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
 * ObjectMetricSource indicates how to scale on a metric describing a kubernetes object (for example, hits-per-second on an Ingress object).
 */
export class ObjectMetricSource extends Model<IObjectMetricSource> implements IObjectMetricSource {
  "describedObject": IIoK8sApiAutoscalingV2beta2CrossVersionObjectReference;
"metric": IIoK8sApiAutoscalingV2beta2MetricIdentifier;
"target": IIoK8sApiAutoscalingV2beta2MetricTarget;

constructor(data?: ModelData<IObjectMetricSource>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(ObjectMetricSource, validate as ValidateFunc<IObjectMetricSource>);

export type {
  IObjectMetricSource as IIoK8sApiAutoscalingV2beta2ObjectMetricSource,
  ObjectMetricSource as IoK8sApiAutoscalingV2beta2ObjectMetricSource
};
