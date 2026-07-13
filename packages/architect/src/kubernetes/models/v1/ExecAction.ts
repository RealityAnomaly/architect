import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../_schemas/IoK8sApiCoreV1ExecAction.js";

/**
 * ExecAction describes a "run in container" action.
 */
export interface IExecAction {
  /**
 * Command is the command line to execute inside the container, the working directory for the command  is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy.
 */
"command"?: Array<string>;
}

/**
 * ExecAction describes a "run in container" action.
 */
export class ExecAction extends Model<IExecAction> implements IExecAction {
  "command"?: Array<string>;

constructor(data?: ModelData<IExecAction>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(ExecAction, validate as ValidateFunc<IExecAction>);

export type {
  IExecAction as IIoK8sApiCoreV1ExecAction,
  ExecAction as IoK8sApiCoreV1ExecAction
};
