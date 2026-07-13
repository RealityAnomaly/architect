import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../_schemas/IoK8sApiCoreV1ObjectFieldSelector.js";

/**
 * ObjectFieldSelector selects an APIVersioned field of an object.
 */
export interface IObjectFieldSelector {
  /**
 * Version of the schema the FieldPath is written in terms of, defaults to "v1".
 */
"apiVersion"?: string;
/**
 * Path of the field to select in the specified API version.
 */
"fieldPath": string;
}

/**
 * ObjectFieldSelector selects an APIVersioned field of an object.
 */
export class ObjectFieldSelector extends Model<IObjectFieldSelector> implements IObjectFieldSelector {
  "apiVersion"?: IObjectFieldSelector["apiVersion"];
"fieldPath": string;

constructor(data?: ModelData<IObjectFieldSelector>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(ObjectFieldSelector, validate as ValidateFunc<IObjectFieldSelector>);

export type {
  IObjectFieldSelector as IIoK8sApiCoreV1ObjectFieldSelector,
  ObjectFieldSelector as IoK8sApiCoreV1ObjectFieldSelector
};
