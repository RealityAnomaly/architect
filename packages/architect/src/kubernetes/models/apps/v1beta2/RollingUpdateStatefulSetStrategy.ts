import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiAppsV1beta2RollingUpdateStatefulSetStrategy.js";

/**
 * RollingUpdateStatefulSetStrategy is used to communicate parameter for RollingUpdateStatefulSetStrategyType.
 */
export interface IRollingUpdateStatefulSetStrategy {
  /**
 * Partition indicates the ordinal at which the StatefulSet should be partitioned. Default value is 0.
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
  IRollingUpdateStatefulSetStrategy as IIoK8sApiAppsV1beta2RollingUpdateStatefulSetStrategy,
  RollingUpdateStatefulSetStrategy as IoK8sApiAppsV1beta2RollingUpdateStatefulSetStrategy
};
