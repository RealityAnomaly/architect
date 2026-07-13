import { IIoK8sApimachineryPkgApiResourceQuantity } from "../../apimachinery/api/resource/Quantity.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../_schemas/IoK8sApiCoreV1ResourceQuotaStatus.js";

/**
 * ResourceQuotaStatus defines the enforced hard limits and observed use.
 */
export interface IResourceQuotaStatus {
  /**
 * Hard is the set of enforced hard limits for each named resource. More info: https://kubernetes.io/docs/concepts/policy/resource-quotas/
 */
"hard"?: {
  [key: string]: IIoK8sApimachineryPkgApiResourceQuantity;
};
/**
 * Used is the current observed total usage of the resource in the namespace.
 */
"used"?: {
  [key: string]: IIoK8sApimachineryPkgApiResourceQuantity;
};
}

/**
 * ResourceQuotaStatus defines the enforced hard limits and observed use.
 */
export class ResourceQuotaStatus extends Model<IResourceQuotaStatus> implements IResourceQuotaStatus {
  "hard"?: {
  [key: string]: IIoK8sApimachineryPkgApiResourceQuantity;
};
"used"?: {
  [key: string]: IIoK8sApimachineryPkgApiResourceQuantity;
};

constructor(data?: ModelData<IResourceQuotaStatus>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(ResourceQuotaStatus, validate as ValidateFunc<IResourceQuotaStatus>);

export type {
  IResourceQuotaStatus as IIoK8sApiCoreV1ResourceQuotaStatus,
  ResourceQuotaStatus as IoK8sApiCoreV1ResourceQuotaStatus
};
