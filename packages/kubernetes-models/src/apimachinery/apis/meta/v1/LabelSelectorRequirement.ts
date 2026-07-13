import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../../_schemas/apis/meta/v1/LabelSelectorRequirement.js";

/**
 * A label selector requirement is a selector that contains values, a key, and an operator that relates the key and values.
 */
export interface ILabelSelectorRequirement {
  /**
 * key is the label key that the selector applies to.
 */
"key": string;
/**
 * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
 */
"operator": string;
/**
 * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
 */
"values"?: Array<string>;
}

/**
 * A label selector requirement is a selector that contains values, a key, and an operator that relates the key and values.
 */
export class LabelSelectorRequirement extends Model<ILabelSelectorRequirement> implements ILabelSelectorRequirement {
  "key": string;
"operator": string;
"values"?: Array<string>;

constructor(data?: ModelData<ILabelSelectorRequirement>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(LabelSelectorRequirement, validate as ValidateFunc<ILabelSelectorRequirement>);

export type {
  ILabelSelectorRequirement as IIoK8sApimachineryPkgApisMetaV1LabelSelectorRequirement,
  LabelSelectorRequirement as IoK8sApimachineryPkgApisMetaV1LabelSelectorRequirement
};
