import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSON.js";

/**
 * JSON represents any valid JSON value. These types are supported: bool, int64, float64, string, []interface{}, map[string]interface{} and nil.
 */
export interface IJSON {
  }

/**
 * JSON represents any valid JSON value. These types are supported: bool, int64, float64, string, []interface{}, map[string]interface{} and nil.
 */
export class JSON extends Model<IJSON> implements IJSON {
  
constructor(data?: ModelData<IJSON>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(JSON, validate as ValidateFunc<IJSON>);

export type {
  IJSON as IIoK8sApiextensionsApiserverPkgApisApiextensionsV1JSON,
  JSON as IoK8sApiextensionsApiserverPkgApisApiextensionsV1JSON
};
