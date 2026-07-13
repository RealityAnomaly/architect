import { IIoK8sApimachineryPkgApiResourceQuantity } from "../../../apimachinery/api/resource/Quantity.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiAutoscalingV2beta1ContainerResourceMetricStatus.js";

/**
 * ContainerResourceMetricStatus indicates the current value of a resource metric known to Kubernetes, as specified in requests and limits, describing a single container in each pod in the current scale target (e.g. CPU or memory).  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.
 */
export interface IContainerResourceMetricStatus {
  /**
 * container is the name of the container in the pods of the scaling target
 */
"container": string;
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
 * ContainerResourceMetricStatus indicates the current value of a resource metric known to Kubernetes, as specified in requests and limits, describing a single container in each pod in the current scale target (e.g. CPU or memory).  Such metrics are built in to Kubernetes, and have special scaling options on top of those available to normal per-pod metrics using the "pods" source.
 */
export class ContainerResourceMetricStatus extends Model<IContainerResourceMetricStatus> implements IContainerResourceMetricStatus {
  "container": string;
"currentAverageUtilization"?: number;
"currentAverageValue": IIoK8sApimachineryPkgApiResourceQuantity;
"name": string;

constructor(data?: ModelData<IContainerResourceMetricStatus>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(ContainerResourceMetricStatus, validate as ValidateFunc<IContainerResourceMetricStatus>);

export type {
  IContainerResourceMetricStatus as IIoK8sApiAutoscalingV2beta1ContainerResourceMetricStatus,
  ContainerResourceMetricStatus as IoK8sApiAutoscalingV2beta1ContainerResourceMetricStatus
};
