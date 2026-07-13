import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1JSONSchemaPropsOrBool.js";

/**
 * JSONSchemaPropsOrBool represents JSONSchemaProps or a boolean value. Defaults to true for the boolean property.
 */
export interface IJSONSchemaPropsOrBool {
  }

/**
 * JSONSchemaPropsOrBool represents JSONSchemaProps or a boolean value. Defaults to true for the boolean property.
 */
export class JSONSchemaPropsOrBool extends Model<IJSONSchemaPropsOrBool> implements IJSONSchemaPropsOrBool {
  
constructor(data?: ModelData<IJSONSchemaPropsOrBool>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(JSONSchemaPropsOrBool, validate as ValidateFunc<IJSONSchemaPropsOrBool>);

export type {
  IJSONSchemaPropsOrBool as IIoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1JSONSchemaPropsOrBool,
  JSONSchemaPropsOrBool as IoK8sApiextensionsApiserverPkgApisApiextensionsV1beta1JSONSchemaPropsOrBool
};
