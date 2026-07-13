import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/authorization.k8s.io/v1beta1/NonResourceAttributes.js";

/**
 * NonResourceAttributes includes the authorization attributes available for non-resource requests to the Authorizer interface
 */
export interface INonResourceAttributes {
  /**
 * Path is the URL path of the request
 */
"path"?: string;
/**
 * Verb is the standard HTTP verb
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
  INonResourceAttributes as IIoK8sApiAuthorizationV1beta1NonResourceAttributes,
  NonResourceAttributes as IoK8sApiAuthorizationV1beta1NonResourceAttributes
};
