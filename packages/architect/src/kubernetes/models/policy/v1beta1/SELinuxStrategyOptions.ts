import { IIoK8sApiCoreV1SELinuxOptions } from "../../v1/SELinuxOptions.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiPolicyV1beta1SELinuxStrategyOptions.js";

/**
 * SELinuxStrategyOptions defines the strategy type and any options used to create the strategy.
 */
export interface ISELinuxStrategyOptions {
  /**
 * rule is the strategy that will dictate the allowable labels that may be set.
 */
"rule": string;
/**
 * seLinuxOptions required to run as; required for MustRunAs More info: https://kubernetes.io/docs/tasks/configure-pod-container/security-context/
 */
"seLinuxOptions"?: IIoK8sApiCoreV1SELinuxOptions;
}

/**
 * SELinuxStrategyOptions defines the strategy type and any options used to create the strategy.
 */
export class SELinuxStrategyOptions extends Model<ISELinuxStrategyOptions> implements ISELinuxStrategyOptions {
  "rule": string;
"seLinuxOptions"?: IIoK8sApiCoreV1SELinuxOptions;

constructor(data?: ModelData<ISELinuxStrategyOptions>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(SELinuxStrategyOptions, validate as ValidateFunc<ISELinuxStrategyOptions>);

export type {
  ISELinuxStrategyOptions as IIoK8sApiPolicyV1beta1SELinuxStrategyOptions,
  SELinuxStrategyOptions as IoK8sApiPolicyV1beta1SELinuxStrategyOptions
};
