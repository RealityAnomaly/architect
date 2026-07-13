import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiAuthorizationV1NonResourceAttributes.js";

/**
 * NonResourceAttributes includes the authorization attributes available for non-resource requests to the Authorizer interface
 */
export interface INonResourceAttributes {
  /**
 * path is the URL path of the request
 */
"path"?: string;
/**
 * verb is the standard HTTP verb
 */
"verb"?: string;
}

/**
 * NonResourceAttributes includes the authorization attributes available for non-resource requests to the Authorizer interface
 */
export class NonResourceAttributes extends Model<INonResourceAttributes> implements INonResourceAttributes {
  "path"?: string;
"verb"?: string;

constructor(data?: ModelData<INonResourceAttributes>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(NonResourceAttributes, validate as ValidateFunc<INonResourceAttributes>);

export type {
  INonResourceAttributes as IIoK8sApiAuthorizationV1NonResourceAttributes,
  NonResourceAttributes as IoK8sApiAuthorizationV1NonResourceAttributes
};
