import { IIoK8sApimachineryPkgApiResourceQuantity } from "../../apimachinery/api/resource/Quantity.ts";
import { IIoK8sApiCoreV1ScopeSelector } from "./ScopeSelector.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../_schemas/IoK8sApiCoreV1ResourceQuotaSpec.js";

/**
 * ResourceQuotaSpec defines the desired hard limits to enforce for Quota.
 */
export interface IResourceQuotaSpec {
  /**
 * hard is the set of desired hard limits for each named resource. More info: https://kubernetes.io/docs/concepts/policy/resource-quotas/
 */
"hard"?: {
  [key: string]: IIoK8sApimachineryPkgApiResourceQuantity;
};
/**
 * scopeSelector is also a collection of filters like scopes that must match each object tracked by a quota but expressed using ScopeSelectorOperator in combination with possible values. For a resource to match, both scopes AND scopeSelector (if specified in spec), must be matched.
 */
"scopeSelector"?: IIoK8sApiCoreV1ScopeSelector;
/**
 * A collection of filters that must match each object tracked by a quota. If not specified, the quota matches all objects.
 */
"scopes"?: Array<string>;
}

/**
 * ResourceQuotaSpec defines the desired hard limits to enforce for Quota.
 */
export class ResourceQuotaSpec extends Model<IResourceQuotaSpec> implements IResourceQuotaSpec {
  "hard"?: {
  [key: string]: IIoK8sApimachineryPkgApiResourceQuantity;
};
"scopeSelector"?: IIoK8sApiCoreV1ScopeSelector;
"scopes"?: Array<string>;

constructor(data?: ModelData<IResourceQuotaSpec>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(ResourceQuotaSpec, validate as ValidateFunc<IResourceQuotaSpec>);

export type {
  IResourceQuotaSpec as IIoK8sApiCoreV1ResourceQuotaSpec,
  ResourceQuotaSpec as IoK8sApiCoreV1ResourceQuotaSpec
};
