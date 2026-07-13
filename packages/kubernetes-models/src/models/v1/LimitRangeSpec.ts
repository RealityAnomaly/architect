import { IIoK8sApiCoreV1LimitRangeItem } from "./LimitRangeItem.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../_schemas/v1/LimitRangeSpec.js";

/**
 * LimitRangeSpec defines a min/max usage limit for resources that match on kind.
 */
export interface ILimitRangeSpec {
  /**
 * Limits is the list of LimitRangeItem objects that are enforced.
 */
"limits": Array<IIoK8sApiCoreV1LimitRangeItem>;
}

/**
 * LimitRangeSpec defines a min/max usage limit for resources that match on kind.
 */
export class LimitRangeSpec extends Model<ILimitRangeSpec> implements ILimitRangeSpec {
  "limits": Array<IIoK8sApiCoreV1LimitRangeItem>;

constructor(data?: ModelData<ILimitRangeSpec>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(LimitRangeSpec, validate as ValidateFunc<ILimitRangeSpec>);

export type {
  ILimitRangeSpec as IIoK8sApiCoreV1LimitRangeSpec,
  LimitRangeSpec as IoK8sApiCoreV1LimitRangeSpec
};
