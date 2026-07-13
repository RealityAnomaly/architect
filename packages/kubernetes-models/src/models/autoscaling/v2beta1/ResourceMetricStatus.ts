import { IIoK8sApimachineryPkgApiResourceQuantity } from "../../../apimachinery/api/resource/Quantity.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/autoscaling/v2beta1/ResourceMetricStatus.js";

/**
 * ResourceMetricStatus indicates the current value of a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.
 */
export interface IResourceMetricStatus {
  /**
 * currentAverageUtilization is the current value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods.  It will only be present if `targetAverageValue` was set in the corresponding metric specification.
 */
"currentAverageUtilization"?: number;
/**
 * currentAverageValue is the current value of the average of the resource metric across all relevant pods, as a raw value (instead of as a percentage of the request), similar to the "pods" metric source type. It will always be set, regardless of the corresponding metric specification.
 */
"currentAverageValue": IIoK8sApimachineryPkgApiResourceQuantity;
/**
 * name is the name of the resource in question.
 */
"name": string;
}

/**
 * ResourceMetricStatus indicates the current value of a resource metric known to Kubernetes, as specified in requests and limits, describing each pod in the current scale target (e.g. CPU or memory).  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.
 */
export class ResourceMetricStatus extends Model<IResourceMetricStatus> implements IResourceMetricStatus {
  "currentAverageUtilization"?: number;
"currentAverageValue": IIoK8sApimachineryPkgApiResourceQuantity;
"name": string;

constructor(data?: ModelData<IResourceMetricStatus>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(ResourceMetricStatus, validate as ValidateFunc<IResourceMetricStatus>);

export type {
  IResourceMetricStatus as IIoK8sApiAutoscalingV2beta1ResourceMetricStatus,
  ResourceMetricStatus as IoK8sApiAutoscalingV2beta1ResourceMetricStatus
};
