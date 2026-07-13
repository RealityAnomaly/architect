import { IIoK8sApiCoreV1ContainerRestartRuleOnExitCodes } from "./ContainerRestartRuleOnExitCodes.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../_schemas/IoK8sApiCoreV1ContainerRestartRule.js";

/**
 * ContainerRestartRule describes how a container exit is handled.
 */
export interface IContainerRestartRule {
  /**
 * Specifies the action taken on a container exit if the requirements are satisfied. The only possible value is "Restart" to restart the container.
 */
"action": string;
/**
 * Represents the exit codes to check on container exits.
 */
"exitCodes"?: IIoK8sApiCoreV1ContainerRestartRuleOnExitCodes;
}

/**
 * ContainerRestartRule describes how a container exit is handled.
 */
export class ContainerRestartRule extends Model<IContainerRestartRule> implements IContainerRestartRule {
  "action": string;
"exitCodes"?: IIoK8sApiCoreV1ContainerRestartRuleOnExitCodes;

constructor(data?: ModelData<IContainerRestartRule>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(ContainerRestartRule, validate as ValidateFunc<IContainerRestartRule>);

export type {
  IContainerRestartRule as IIoK8sApiCoreV1ContainerRestartRule,
  ContainerRestartRule as IoK8sApiCoreV1ContainerRestartRule
};
