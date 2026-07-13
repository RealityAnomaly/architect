import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiAppsV1beta1RollbackConfig.js";

/**
 * DEPRECATED.
 * @deprecated
 */
export interface IRollbackConfig {
  /**
 * The revision to rollback to. If set to 0, rollback to the last revision.
 */
"revision"?: number;
}

/**
 * DEPRECATED.
 * @deprecated
 */
export class RollbackConfig extends Model<IRollbackConfig> implements IRollbackConfig {
  "revision"?: number;

constructor(data?: ModelData<IRollbackConfig>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(RollbackConfig, validate as ValidateFunc<IRollbackConfig>);

export type {
  IRollbackConfig as IIoK8sApiAppsV1beta1RollbackConfig,
  RollbackConfig as IoK8sApiAppsV1beta1RollbackConfig
};
