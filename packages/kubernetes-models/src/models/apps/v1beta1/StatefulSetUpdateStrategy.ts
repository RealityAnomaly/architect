import { IIoK8sApiAppsV1beta1RollingUpdateStatefulSetStrategy } from "./RollingUpdateStatefulSetStrategy.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/apps/v1beta1/StatefulSetUpdateStrategy.js";

/**
 * StatefulSetUpdateStrategy indicates the strategy that the StatefulSet controller will use to perform updates. It includes any additional parameters necessary to perform the update for the indicated strategy.
 */
export interface IStatefulSetUpdateStrategy {
  /**
 * RollingUpdate is used to communicate parameters when Type is RollingUpdateStatefulSetStrategyType.
 */
"rollingUpdate"?: IIoK8sApiAppsV1beta1RollingUpdateStatefulSetStrategy;
/**
 * Type indicates the type of the StatefulSetUpdateStrategy.
 */
"type"?: string;
}

/**
 * StatefulSetUpdateStrategy indicates the strategy that the StatefulSet controller will use to perform updates. It includes any additional parameters necessary to perform the update for the indicated strategy.
 */
export class StatefulSetUpdateStrategy extends Model<IStatefulSetUpdateStrategy> implements IStatefulSetUpdateStrategy {
  "rollingUpdate"?: IIoK8sApiAppsV1beta1RollingUpdateStatefulSetStrategy;
"type"?: string;

constructor(data?: ModelData<IStatefulSetUpdateStrategy>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(StatefulSetUpdateStrategy, validate as ValidateFunc<IStatefulSetUpdateStrategy>);

export type {
  IStatefulSetUpdateStrategy as IIoK8sApiAppsV1beta1StatefulSetUpdateStrategy,
  StatefulSetUpdateStrategy as IoK8sApiAppsV1beta1StatefulSetUpdateStrategy
};
