import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaPropsOrStringArray.js";

/**
 * JSONSchemaPropsOrStringArray represents a JSONSchemaProps or a string array.
 */
export interface IJSONSchemaPropsOrStringArray {
  }

/**
 * JSONSchemaPropsOrStringArray represents a JSONSchemaProps or a string array.
 */
export class JSONSchemaPropsOrStringArray extends Model<IJSONSchemaPropsOrStringArray> implements IJSONSchemaPropsOrStringArray {
  
constructor(data?: ModelData<IJSONSchemaPropsOrStringArray>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(JSONSchemaPropsOrStringArray, validate as ValidateFunc<IJSONSchemaPropsOrStringArray>);

export type {
  IJSONSchemaPropsOrStringArray as IIoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaPropsOrStringArray,
  JSONSchemaPropsOrStringArray as IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSONSchemaPropsOrStringArray
};
