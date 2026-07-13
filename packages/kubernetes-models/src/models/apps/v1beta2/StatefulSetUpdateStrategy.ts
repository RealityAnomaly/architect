import { IIoK8sApiAppsV1beta2RollingUpdateStatefulSetStrategy } from "./RollingUpdateStatefulSetStrategy.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/apps/v1beta2/StatefulSetUpdateStrategy.js";

/**
 * StatefulSetUpdateStrategy indicates the strategy that the StatefulSet controller will use to perform updates. It includes any additional parameters necessary to perform the update for the indicated strategy.
 */
export interface IStatefulSetUpdateStrategy {
  /**
 * RollingUpdate is used to communicate parameters when Type is RollingUpdateStatefulSetStrategyType.
 */
"rollingUpdate"?: IIoK8sApiAppsV1beta2RollingUpdateStatefulSetStrategy;
/**
 * Type indicates the type of the StatefulSetUpdateStrategy. Default is RollingUpdate.
 */
"type"?: string;
}

/**
 * StatefulSetUpdateStrategy indicates the strategy that the StatefulSet controller will use to perform updates. It includes any additional parameters necessary to perform the update for the indicated strategy.
 */
export class StatefulSetUpdateStrategy extends Model<IStatefulSetUpdateStrategy> implements IStatefulSetUpdateStrategy {
  "rollingUpdate"?: IIoK8sApiAppsV1beta2RollingUpdateStatefulSetStrategy;
"type"?: string;

constructor(data?: ModelData<IStatefulSetUpdateStrategy>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(StatefulSetUpdateStrategy, validate as ValidateFunc<IStatefulSetUpdateStrategy>);

export type {
  IStatefulSetUpdateStrategy as IIoK8sApiAppsV1beta2StatefulSetUpdateStrategy,
  StatefulSetUpdateStrategy as IoK8sApiAppsV1beta2StatefulSetUpdateStrategy
};
