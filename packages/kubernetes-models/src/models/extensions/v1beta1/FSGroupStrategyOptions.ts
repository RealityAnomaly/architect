import { IIoK8sApiExtensionsV1beta1IDRange } from "./IDRange.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/extensions/v1beta1/FSGroupStrategyOptions.js";

/**
 * FSGroupStrategyOptions defines the strategy type and options used to create the strategy. Deprecated: use FSGroupStrategyOptions from policy API Group instead.
 * @deprecated
 */
export interface IFSGroupStrategyOptions {
  /**
 * ranges are the allowed ranges of fs groups.  If you would like to force a single fs group then supply a single range with the same start and end. Required for MustRunAs.
 */
"ranges"?: Array<IIoK8sApiExtensionsV1beta1IDRange>;
/**
 * rule is the strategy that will dictate what FSGroup is used in the SecurityContext.
 */
"rule"?: string;
}

/**
 * FSGroupStrategyOptions defines the strategy type and options used to create the strategy. Deprecated: use FSGroupStrategyOptions from policy API Group instead.
 * @deprecated
 */
export class FSGroupStrategyOptions extends Model<IFSGroupStrategyOptions> implements IFSGroupStrategyOptions {
  "ranges"?: Array<IIoK8sApiExtensionsV1beta1IDRange>;
"rule"?: string;

constructor(data?: ModelData<IFSGroupStrategyOptions>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(FSGroupStrategyOptions, validate as ValidateFunc<IFSGroupStrategyOptions>);

export type {
  IFSGroupStrategyOptions as IIoK8sApiExtensionsV1beta1FSGroupStrategyOptions,
  FSGroupStrategyOptions as IoK8sApiExtensionsV1beta1FSGroupStrategyOptions
};
