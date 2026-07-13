import { IIoK8sApimachineryPkgApiResourceQuantity } from "../../../apimachinery/api/resource/Quantity.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/autoscaling/v2/MetricTarget.js";

/**
 * MetricTarget defines the target value, average value, or average utilization of a specific metric
 */
export interface IMetricTarget {
  /**
 * averageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods. Currently only valid for Resource metric source type
 */
"averageUtilization"?: number;
/**
 * averageValue is the target value of the average of the metric across all relevant pods (as a quantity)
 */
"averageValue"?: IIoK8sApimachineryPkgApiResourceQuantity;
/**
 * type represents whether the metric type is Utilization, Value, or AverageValue
 */
"type": string;
/**
 * value is the target value of the metric (as a quantity).
 */
"value"?: IIoK8sApimachineryPkgApiResourceQuantity;
}

/**
 * MetricTarget defines the target value, average value, or average utilization of a specific metric
 */
export class MetricTarget extends Model<IMetricTarget> implements IMetricTarget {
  "averageUtilization"?: number;
"averageValue"?: IIoK8sApimachineryPkgApiResourceQuantity;
"type": string;
"value"?: IIoK8sApimachineryPkgApiResourceQuantity;

constructor(data?: ModelData<IMetricTarget>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(MetricTarget, validate as ValidateFunc<IMetricTarget>);

export type {
  IMetricTarget as IIoK8sApiAutoscalingV2MetricTarget,
  MetricTarget as IoK8sApiAutoscalingV2MetricTarget
};
