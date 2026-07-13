import { IIoK8sApiAutoscalingV2CrossVersionObjectReference } from "./CrossVersionObjectReference.ts";
import { IIoK8sApiAutoscalingV2MetricIdentifier } from "./MetricIdentifier.ts";
import { IIoK8sApiAutoscalingV2MetricTarget } from "./MetricTarget.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiAutoscalingV2ObjectMetricSource.js";

/**
 * ObjectMetricSource indicates how to scale on a metric describing a kubernetes object (for example, hits-per-second on an Ingress object).
 */
export interface IObjectMetricSource {
  /**
 * describedObject specifies the descriptions of a object,such as kind,name apiVersion
 */
"describedObject": IIoK8sApiAutoscalingV2CrossVersionObjectReference;
/**
 * metric identifies the target metric by name and selector
 */
"metric": IIoK8sApiAutoscalingV2MetricIdentifier;
/**
 * target specifies the target value for the given metric
 */
"target": IIoK8sApiAutoscalingV2MetricTarget;
}

/**
 * ObjectMetricSource indicates how to scale on a metric describing a kubernetes object (for example, hits-per-second on an Ingress object).
 */
export class ObjectMetricSource extends Model<IObjectMetricSource> implements IObjectMetricSource {
  "describedObject": IIoK8sApiAutoscalingV2CrossVersionObjectReference;
"metric": IIoK8sApiAutoscalingV2MetricIdentifier;
"target": IIoK8sApiAutoscalingV2MetricTarget;

constructor(data?: ModelData<IObjectMetricSource>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(ObjectMetricSource, validate as ValidateFunc<IObjectMetricSource>);

export type {
  IObjectMetricSource as IIoK8sApiAutoscalingV2ObjectMetricSource,
  ObjectMetricSource as IoK8sApiAutoscalingV2ObjectMetricSource
};
