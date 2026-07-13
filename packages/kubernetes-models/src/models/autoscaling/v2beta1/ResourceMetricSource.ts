import { IIoK8sApimachineryPkgApiResourceQuantity } from "../../../apimachinery/api/resource/Quantity.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/autoscaling/v2beta1/ResourceMetricSource.js";

/**
 * ResourceMetricSource indicates how to scale on a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  The values will be averaged together before being compared to the target.  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.  Only one "target" type should be set.
 */
export interface IResourceMetricSource {
  /**
 * name is the name of the resource in question.
 */
"name": string;
/**
 * targetAverageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods.
 */
"targetAverageUtilization"?: number;
/**
 * targetAverageValue is the target value of the average of the resource metric across all relevant pods, as a raw value (instead of as a percentage of the request), similar to the "pods" metric source type.
 */
"targetAverageValue"?: IIoK8sApimachineryPkgApiResourceQuantity;
}

/**
 * ResourceMetricSource indicates how to scale on a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  The values will be averaged together before being compared to the target.  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.  Only one "target" type should be set.
 */
export class ResourceMetricSource extends Model<IResourceMetricSource> implements IResourceMetricSource {
  "name": string;
"targetAverageUtilization"?: number;
"targetAverageValue"?: IIoK8sApimachineryPkgApiResourceQuantity;

constructor(data?: ModelData<IResourceMetricSource>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(ResourceMetricSource, validate as ValidateFunc<IResourceMetricSource>);

export type {
  IResourceMetricSource as IIoK8sApiAutoscalingV2beta1ResourceMetricSource,
  ResourceMetricSource as IoK8sApiAutoscalingV2beta1ResourceMetricSource
};
