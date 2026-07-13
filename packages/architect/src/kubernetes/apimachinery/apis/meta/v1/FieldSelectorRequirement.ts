import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../../_schemas/IoK8sApimachineryPkgApisMetaV1FieldSelectorRequirement.js";

/**
 * FieldSelectorRequirement is a selector that contains values, a key, and an operator that relates the key and values.
 */
export interface IFieldSelectorRequirement {
  /**
 * key is the field selector key that the requirement applies to.
 */
"key": string;
/**
 * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. The list of operators may grow in the future.
 */
"operator": string;
/**
 * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty.
 */
"values"?: Array<string>;
}

/**
 * FieldSelectorRequirement is a selector that contains values, a key, and an operator that relates the key and values.
 */
export class FieldSelectorRequirement extends Model<IFieldSelectorRequirement> implements IFieldSelectorRequirement {
  "key": string;
"operator": string;
"values"?: Array<string>;

constructor(data?: ModelData<IFieldSelectorRequirement>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(FieldSelectorRequirement, validate as ValidateFunc<IFieldSelectorRequirement>);

export type {
  IFieldSelectorRequirement as IIoK8sApimachineryPkgApisMetaV1FieldSelectorRequirement,
  FieldSelectorRequirement as IoK8sApimachineryPkgApisMetaV1FieldSelectorRequirement
};
