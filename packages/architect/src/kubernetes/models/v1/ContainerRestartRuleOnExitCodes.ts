import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../_schemas/IoK8sApiCoreV1ContainerRestartRuleOnExitCodes.js";

/**
 * ContainerRestartRuleOnExitCodes describes the condition for handling an exited container based on its exit codes.
 */
export interface IContainerRestartRuleOnExitCodes {
  /**
 * Represents the relationship between the container exit code(s) and the specified values. Possible values are: - In: the requirement is satisfied if the container exit code is in the
 *   set of specified values.
 * - NotIn: the requirement is satisfied if the container exit code is
 *   not in the set of specified values.
 */
"operator": string;
/**
 * Specifies the set of values to check for container exit codes. At most 255 elements are allowed.
 */
"values"?: Array<number>;
}

/**
 * ContainerRestartRuleOnExitCodes describes the condition for handling an exited container based on its exit codes.
 */
export class ContainerRestartRuleOnExitCodes extends Model<IContainerRestartRuleOnExitCodes> implements IContainerRestartRuleOnExitCodes {
  "operator": string;
"values"?: Array<number>;

constructor(data?: ModelData<IContainerRestartRuleOnExitCodes>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(ContainerRestartRuleOnExitCodes, validate as ValidateFunc<IContainerRestartRuleOnExitCodes>);

export type {
  IContainerRestartRuleOnExitCodes as IIoK8sApiCoreV1ContainerRestartRuleOnExitCodes,
  ContainerRestartRuleOnExitCodes as IoK8sApiCoreV1ContainerRestartRuleOnExitCodes
};
