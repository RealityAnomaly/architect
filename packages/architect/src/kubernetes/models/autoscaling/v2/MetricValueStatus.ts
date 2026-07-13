import { IIoK8sApimachineryPkgApiResourceQuantity } from "../../../apimachinery/api/resource/Quantity.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiAutoscalingV2MetricValueStatus.js";

/**
 * MetricValueStatus holds the current value for a metric
 */
export interface IMetricValueStatus {
  /**
 * currentAverageUtilization is the current value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods.
 */
"averageUtilization"?: number;
/**
 * averageValue is the current value of the average of the metric across all relevant pods (as a quantity)
 */
"averageValue"?: IIoK8sApimachineryPkgApiResourceQuantity;
/**
 * value is the current value of the metric (as a quantity).
 */
"value"?: IIoK8sApimachineryPkgApiResourceQuantity;
}

/**
 * MetricValueStatus holds the current value for a metric
 */
export class MetricValueStatus extends Model<IMetricValueStatus> implements IMetricValueStatus {
  "averageUtilization"?: number;
"averageValue"?: IIoK8sApimachineryPkgApiResourceQuantity;
"value"?: IIoK8sApimachineryPkgApiResourceQuantity;

constructor(data?: ModelData<IMetricValueStatus>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(MetricValueStatus, validate as ValidateFunc<IMetricValueStatus>);

export type {
  IMetricValueStatus as IIoK8sApiAutoscalingV2MetricValueStatus,
  MetricValueStatus as IoK8sApiAutoscalingV2MetricValueStatus
};
