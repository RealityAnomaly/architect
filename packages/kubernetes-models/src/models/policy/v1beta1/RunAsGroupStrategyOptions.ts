import { IIoK8sApiPolicyV1beta1IDRange } from "./IDRange.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/policy/v1beta1/RunAsGroupStrategyOptions.js";

/**
 * RunAsGroupStrategyOptions defines the strategy type and any options used to create the strategy.
 */
export interface IRunAsGroupStrategyOptions {
  /**
 * ranges are the allowed ranges of gids that may be used. If you would like to force a single gid then supply a single range with the same start and end. Required for MustRunAs.
 */
"ranges"?: Array<IIoK8sApiPolicyV1beta1IDRange>;
/**
 * rule is the strategy that will dictate the allowable RunAsGroup values that may be set.
 */
"rule": string;
}

/**
 * RunAsGroupStrategyOptions defines the strategy type and any options used to create the strategy.
 */
export class RunAsGroupStrategyOptions extends Model<IRunAsGroupStrategyOptions> implements IRunAsGroupStrategyOptions {
  "ranges"?: Array<IIoK8sApiPolicyV1beta1IDRange>;
"rule": string;

constructor(data?: ModelData<IRunAsGroupStrategyOptions>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(RunAsGroupStrategyOptions, validate as ValidateFunc<IRunAsGroupStrategyOptions>);

export type {
  IRunAsGroupStrategyOptions as IIoK8sApiPolicyV1beta1RunAsGroupStrategyOptions,
  RunAsGroupStrategyOptions as IoK8sApiPolicyV1beta1RunAsGroupStrategyOptions
};
