import { IIoK8sApiPolicyV1beta1IDRange } from "./IDRange.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/policy/v1beta1/SupplementalGroupsStrategyOptions.js";

/**
 * SupplementalGroupsStrategyOptions defines the strategy type and options used to create the strategy.
 */
export interface ISupplementalGroupsStrategyOptions {
  /**
 * ranges are the allowed ranges of supplemental groups.  If you would like to force a single supplemental group then supply a single range with the same start and end. Required for MustRunAs.
 */
"ranges"?: Array<IIoK8sApiPolicyV1beta1IDRange>;
/**
 * rule is the strategy that will dictate what supplemental groups is used in the SecurityContext.
 */
"rule"?: string;
}

/**
 * SupplementalGroupsStrategyOptions defines the strategy type and options used to create the strategy.
 */
export class SupplementalGroupsStrategyOptions extends Model<ISupplementalGroupsStrategyOptions> implements ISupplementalGroupsStrategyOptions {
  "ranges"?: Array<IIoK8sApiPolicyV1beta1IDRange>;
"rule"?: string;

constructor(data?: ModelData<ISupplementalGroupsStrategyOptions>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(SupplementalGroupsStrategyOptions, validate as ValidateFunc<ISupplementalGroupsStrategyOptions>);

export type {
  ISupplementalGroupsStrategyOptions as IIoK8sApiPolicyV1beta1SupplementalGroupsStrategyOptions,
  SupplementalGroupsStrategyOptions as IoK8sApiPolicyV1beta1SupplementalGroupsStrategyOptions
};
