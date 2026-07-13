import { IIoK8sApiAppsV1beta2RollingUpdateDaemonSet } from "./RollingUpdateDaemonSet.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiAppsV1beta2DaemonSetUpdateStrategy.js";

/**
 * DaemonSetUpdateStrategy is a struct used to control the update strategy for a DaemonSet.
 */
export interface IDaemonSetUpdateStrategy {
  /**
 * Rolling update config params. Present only if type = "RollingUpdate".
 */
"rollingUpdate"?: IIoK8sApiAppsV1beta2RollingUpdateDaemonSet;
/**
 * Type of daemon set update. Can be "RollingUpdate" or "OnDelete". Default is RollingUpdate.
 */
"type"?: string;
}

/**
 * DaemonSetUpdateStrategy is a struct used to control the update strategy for a DaemonSet.
 */
export class DaemonSetUpdateStrategy extends Model<IDaemonSetUpdateStrategy> implements IDaemonSetUpdateStrategy {
  "rollingUpdate"?: IIoK8sApiAppsV1beta2RollingUpdateDaemonSet;
"type"?: string;

constructor(data?: ModelData<IDaemonSetUpdateStrategy>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(DaemonSetUpdateStrategy, validate as ValidateFunc<IDaemonSetUpdateStrategy>);

export type {
  IDaemonSetUpdateStrategy as IIoK8sApiAppsV1beta2DaemonSetUpdateStrategy,
  DaemonSetUpdateStrategy as IoK8sApiAppsV1beta2DaemonSetUpdateStrategy
};
