import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiAuthenticationV1BoundObjectReference.js";

/**
 * BoundObjectReference is a reference to an object that a token is bound to.
 */
export interface IBoundObjectReference {
  /**
 * apiVersion is API version of the referent.
 */
"apiVersion"?: string;
/**
 * kind of the referent. Valid kinds are 'Pod' and 'Secret'.
 */
"kind"?: string;
/**
 * name of the referent.
 */
"name"?: string;
/**
 * uid of the referent.
 */
"uid"?: string;
}

/**
 * BoundObjectReference is a reference to an object that a token is bound to.
 */
export class BoundObjectReference extends Model<IBoundObjectReference> implements IBoundObjectReference {
  "apiVersion"?: IBoundObjectReference["apiVersion"];
"kind"?: IBoundObjectReference["kind"];
"name"?: string;
"uid"?: string;

constructor(data?: ModelData<IBoundObjectReference>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(BoundObjectReference, validate as ValidateFunc<IBoundObjectReference>);

export type {
  IBoundObjectReference as IIoK8sApiAuthenticationV1BoundObjectReference,
  BoundObjectReference as IoK8sApiAuthenticationV1BoundObjectReference
};
