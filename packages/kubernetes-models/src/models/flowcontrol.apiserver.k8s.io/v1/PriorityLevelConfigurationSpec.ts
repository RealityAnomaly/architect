import { IIoK8sApiFlowcontrolV1ExemptPriorityLevelConfiguration } from "./ExemptPriorityLevelConfiguration.ts";
import { IIoK8sApiFlowcontrolV1LimitedPriorityLevelConfiguration } from "./LimitedPriorityLevelConfiguration.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/flowcontrol.apiserver.k8s.io/v1/PriorityLevelConfigurationSpec.js";

/**
 * PriorityLevelConfigurationSpec specifies the configuration of a priority level.
 */
export interface IPriorityLevelConfigurationSpec {
  /**
 * `exempt` specifies how requests are handled for an exempt priority level. This field MUST be empty if `type` is `"Limited"`. This field MAY be non-empty if `type` is `"Exempt"`. If empty and `type` is `"Exempt"` then the default values for `ExemptPriorityLevelConfiguration` apply.
 */
"exempt"?: IIoK8sApiFlowcontrolV1ExemptPriorityLevelConfiguration;
/**
 * `limited` specifies how requests are handled for a Limited priority level. This field must be non-empty if and only if `type` is `"Limited"`.
 */
"limited"?: IIoK8sApiFlowcontrolV1LimitedPriorityLevelConfiguration;
/**
 * `type` indicates whether this priority level is subject to limitation on request execution.  A value of `"Exempt"` means that requests of this priority level are not subject to a limit (and thus are never queued) and do not detract from the capacity made available to other priority levels.  A value of `"Limited"` means that (a) requests of this priority level _are_ subject to limits and (b) some of the server's limited capacity is made available exclusively to this priority level. Required.
 */
"type": string;
}

/**
 * PriorityLevelConfigurationSpec specifies the configuration of a priority level.
 */
export class PriorityLevelConfigurationSpec extends Model<IPriorityLevelConfigurationSpec> implements IPriorityLevelConfigurationSpec {
  "exempt"?: IIoK8sApiFlowcontrolV1ExemptPriorityLevelConfiguration;
"limited"?: IIoK8sApiFlowcontrolV1LimitedPriorityLevelConfiguration;
"type": string;

constructor(data?: ModelData<IPriorityLevelConfigurationSpec>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(PriorityLevelConfigurationSpec, validate as ValidateFunc<IPriorityLevelConfigurationSpec>);

export type {
  IPriorityLevelConfigurationSpec as IIoK8sApiFlowcontrolV1PriorityLevelConfigurationSpec,
  PriorityLevelConfigurationSpec as IoK8sApiFlowcontrolV1PriorityLevelConfigurationSpec
};
