import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1JSONSchemaPropsOrArray.js";

/**
 * JSONSchemaPropsOrArray represents a value that can either be a JSONSchemaProps or an array of JSONSchemaProps. Mainly here for serialization purposes.
 */
export interface IJSONSchemaPropsOrArray {
  }

/**
 * JSONSchemaPropsOrArray represents a value that can either be a JSONSchemaProps or an array of JSONSchemaProps. Mainly here for serialization purposes.
 */
export class JSONSchemaPropsOrArray extends Model<IJSONSchemaPropsOrArray> implements IJSONSchemaPropsOrArray {
  
constructor(data?: ModelData<IJSONSchemaPropsOrArray>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(JSONSchemaPropsOrArray, validate as ValidateFunc<IJSONSchemaPropsOrArray>);

export type {
  IJSONSchemaPropsOrArray as IIoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1JSONSchemaPropsOrArray,
  JSONSchemaPropsOrArray as IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1JSONSchemaPropsOrArray
};
