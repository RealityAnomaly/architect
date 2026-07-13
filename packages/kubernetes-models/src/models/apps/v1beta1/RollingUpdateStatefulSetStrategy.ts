import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/apps/v1beta1/RollingUpdateStatefulSetStrategy.js";

/**
 * RollingUpdateStatefulSetStrategy is used to communicate parameter for RollingUpdateStatefulSetStrategyType.
 */
export interface IRollingUpdateStatefulSetStrategy {
  /**
 * Partition indicates the ordinal at which the StatefulSet should be partitioned.
 */
"partition"?: number;
}

/**
 * RollingUpdateStatefulSetStrategy is used to communicate parameter for RollingUpdateStatefulSetStrategyType.
 */
export class RollingUpdateStatefulSetStrategy extends Model<IRollingUpdateStatefulSetStrategy> implements IRollingUpdateStatefulSetStrategy {
  "partition"?: number;

constructor(data?: ModelData<IRollingUpdateStatefulSetStrategy>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(RollingUpdateStatefulSetStrategy, validate as ValidateFunc<IRollingUpdateStatefulSetStrategy>);

export type {
  IRollingUpdateStatefulSetStrategy as IIoK8sApiAppsV1beta1RollingUpdateStatefulSetStrategy,
  RollingUpdateStatefulSetStrategy as IoK8sApiAppsV1beta1RollingUpdateStatefulSetStrategy
};
