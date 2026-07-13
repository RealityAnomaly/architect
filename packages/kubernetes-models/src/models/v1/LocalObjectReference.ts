import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../_schemas/v1/LocalObjectReference.js";

/**
 * LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace.
 */
export interface ILocalObjectReference {
  /**
 * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
 */
"name"?: string;
}

/**
 * LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace.
 */
export class LocalObjectReference extends Model<ILocalObjectReference> implements ILocalObjectReference {
  "name"?: string;

constructor(data?: ModelData<ILocalObjectReference>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(LocalObjectReference, validate as ValidateFunc<ILocalObjectReference>);

export type {
  ILocalObjectReference as IIoK8sApiCoreV1LocalObjectReference,
  LocalObjectReference as IoK8sApiCoreV1LocalObjectReference
};
