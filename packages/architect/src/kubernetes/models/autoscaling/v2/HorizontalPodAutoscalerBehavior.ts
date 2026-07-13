import { IIoK8sApiAutoscalingV2HPAScalingRules } from "./HPAScalingRules.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiAutoscalingV2HorizontalPodAutoscalerBehavior.js";

/**
 * HorizontalPodAutoscalerBehavior configures the scaling behavior of the target in both Up and Down directions (scaleUp and scaleDown fields respectively).
 */
export interface IHorizontalPodAutoscalerBehavior {
  /**
 * scaleDown is scaling policy for scaling Down. If not set, the default value is to allow to scale down to minReplicas pods, with a 300 second stabilization window (i.e., the highest recommendation for the last 300sec is used).
 */
"scaleDown"?: IIoK8sApiAutoscalingV2HPAScalingRules;
/**
 * scaleUp is scaling policy for scaling Up. If not set, the default value is the higher of:
 *   \* increase no more than 4 pods per 60 seconds
 *   \* double the number of pods per 60 seconds
 * No stabilization is used.
 */
"scaleUp"?: IIoK8sApiAutoscalingV2HPAScalingRules;
}

/**
 * HorizontalPodAutoscalerBehavior configures the scaling behavior of the target in both Up and Down directions (scaleUp and scaleDown fields respectively).
 */
export class HorizontalPodAutoscalerBehavior extends Model<IHorizontalPodAutoscalerBehavior> implements IHorizontalPodAutoscalerBehavior {
  "scaleDown"?: IIoK8sApiAutoscalingV2HPAScalingRules;
"scaleUp"?: IIoK8sApiAutoscalingV2HPAScalingRules;

constructor(data?: ModelData<IHorizontalPodAutoscalerBehavior>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(HorizontalPodAutoscalerBehavior, validate as ValidateFunc<IHorizontalPodAutoscalerBehavior>);

export type {
  IHorizontalPodAutoscalerBehavior as IIoK8sApiAutoscalingV2HorizontalPodAutoscalerBehavior,
  HorizontalPodAutoscalerBehavior as IoK8sApiAutoscalingV2HorizontalPodAutoscalerBehavior
};
