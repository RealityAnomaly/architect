import { IIoK8sApiCoreV1ScopedResourceSelectorRequirement } from "./ScopedResourceSelectorRequirement.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../_schemas/IoK8sApiCoreV1ScopeSelector.js";

/**
 * A scope selector represents the AND of the selectors represented by the scoped-resource selector requirements.
 */
export interface IScopeSelector {
  /**
 * A list of scope selector requirements by scope of the resources.
 */
"matchExpressions"?: Array<IIoK8sApiCoreV1ScopedResourceSelectorRequirement>;
}

/**
 * A scope selector represents the AND of the selectors represented by the scoped-resource selector requirements.
 */
export class ScopeSelector extends Model<IScopeSelector> implements IScopeSelector {
  "matchExpressions"?: Array<IIoK8sApiCoreV1ScopedResourceSelectorRequirement>;

constructor(data?: ModelData<IScopeSelector>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(ScopeSelector, validate as ValidateFunc<IScopeSelector>);

export type {
  IScopeSelector as IIoK8sApiCoreV1ScopeSelector,
  ScopeSelector as IoK8sApiCoreV1ScopeSelector
};
