import { IIoK8sApiExtensionsV1beta1RollingUpdateDaemonSet } from "./RollingUpdateDaemonSet.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/extensions/v1beta1/DaemonSetUpdateStrategy.js";

export interface IDaemonSetUpdateStrategy {
  /**
 * Rolling update config params. Present only if type = "RollingUpdate".
 */
"rollingUpdate"?: IIoK8sApiExtensionsV1beta1RollingUpdateDaemonSet;
/**
 * Type of daemon set update. Can be "RollingUpdate" or "OnDelete". Default is OnDelete.
 */
"type"?: string;
}

export class DaemonSetUpdateStrategy extends Model<IDaemonSetUpdateStrategy> implements IDaemonSetUpdateStrategy {
  "rollingUpdate"?: IIoK8sApiExtensionsV1beta1RollingUpdateDaemonSet;
"type"?: string;

constructor(data?: ModelData<IDaemonSetUpdateStrategy>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(DaemonSetUpdateStrategy, validate as ValidateFunc<IDaemonSetUpdateStrategy>);

export type {
  IDaemonSetUpdateStrategy as IIoK8sApiExtensionsV1beta1DaemonSetUpdateStrategy,
  DaemonSetUpdateStrategy as IoK8sApiExtensionsV1beta1DaemonSetUpdateStrategy
};
