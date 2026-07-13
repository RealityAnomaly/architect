import { IIoK8sApiExtensionsV1beta1IDRange } from "./IDRange.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiExtensionsV1beta1RunAsUserStrategyOptions.js";

/**
 * RunAsUserStrategyOptions defines the strategy type and any options used to create the strategy. Deprecated: use RunAsUserStrategyOptions from policy API Group instead.
 * @deprecated
 */
export interface IRunAsUserStrategyOptions {
  /**
 * ranges are the allowed ranges of uids that may be used. If you would like to force a single uid then supply a single range with the same start and end. Required for MustRunAs.
 */
"ranges"?: Array<IIoK8sApiExtensionsV1beta1IDRange>;
/**
 * rule is the strategy that will dictate the allowable RunAsUser values that may be set.
 */
"rule": string;
}

/**
 * RunAsUserStrategyOptions defines the strategy type and any options used to create the strategy. Deprecated: use RunAsUserStrategyOptions from policy API Group instead.
 * @deprecated
 */
export class RunAsUserStrategyOptions extends Model<IRunAsUserStrategyOptions> implements IRunAsUserStrategyOptions {
  "ranges"?: Array<IIoK8sApiExtensionsV1beta1IDRange>;
"rule": string;

constructor(data?: ModelData<IRunAsUserStrategyOptions>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(RunAsUserStrategyOptions, validate as ValidateFunc<IRunAsUserStrategyOptions>);

export type {
  IRunAsUserStrategyOptions as IIoK8sApiExtensionsV1beta1RunAsUserStrategyOptions,
  RunAsUserStrategyOptions as IoK8sApiExtensionsV1beta1RunAsUserStrategyOptions
};
