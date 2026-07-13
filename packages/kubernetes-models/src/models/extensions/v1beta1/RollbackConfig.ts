import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/extensions/v1beta1/RollbackConfig.js";

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
  IRollbackConfig as IIoK8sApiExtensionsV1beta1RollbackConfig,
  RollbackConfig as IoK8sApiExtensionsV1beta1RollbackConfig
};
