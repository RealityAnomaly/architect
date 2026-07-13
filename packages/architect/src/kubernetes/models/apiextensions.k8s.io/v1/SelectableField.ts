import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiextensionsApiserverPkgApisApiextensionsV1SelectableField.js";

/**
 * SelectableField specifies the JSON path of a field that may be used with field selectors.
 */
export interface ISelectableField {
  /**
 * jsonPath is a simple JSON path which is evaluated against each custom resource to produce a field selector value. Only JSON paths without the array notation are allowed. Must point to a field of type string, boolean or integer. Types with enum values and strings with formats are allowed. If jsonPath refers to absent field in a resource, the jsonPath evaluates to an empty string. Must not point to metdata fields. Required.
 */
"jsonPath": string;
}

/**
 * SelectableField specifies the JSON path of a field that may be used with field selectors.
 */
export class SelectableField extends Model<ISelectableField> implements ISelectableField {
  "jsonPath": string;

constructor(data?: ModelData<ISelectableField>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(SelectableField, validate as ValidateFunc<ISelectableField>);

export type {
  ISelectableField as IIoK8sApiextensionsApiserverPkgApisApiextensionsV1SelectableField,
  SelectableField as IoK8sApiextensionsApiserverPkgApisApiextensionsV1SelectableField
};
