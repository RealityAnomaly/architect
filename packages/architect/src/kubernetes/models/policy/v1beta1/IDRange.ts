import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiPolicyV1beta1IDRange.js";

/**
 * IDRange provides a min/max of an allowed range of IDs.
 */
export interface IIDRange {
  /**
 * max is the end of the range, inclusive.
 */
"max": number;
/**
 * min is the start of the range, inclusive.
 */
"min": number;
}

/**
 * IDRange provides a min/max of an allowed range of IDs.
 */
export class IDRange extends Model<IIDRange> implements IIDRange {
  "max": number;
"min": number;

constructor(data?: ModelData<IIDRange>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(IDRange, validate as ValidateFunc<IIDRange>);

export type {
  IIDRange as IIoK8sApiPolicyV1beta1IDRange,
  IDRange as IoK8sApiPolicyV1beta1IDRange
};
