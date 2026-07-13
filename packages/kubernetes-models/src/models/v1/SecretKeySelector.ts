import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../_schemas/v1/SecretKeySelector.js";

/**
 * SecretKeySelector selects a key of a Secret.
 */
export interface ISecretKeySelector {
  /**
 * The key of the secret to select from.  Must be a valid secret key.
 */
"key": string;
/**
 * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
 */
"name"?: string;
/**
 * Specify whether the Secret or its key must be defined
 */
"optional"?: boolean;
}

/**
 * SecretKeySelector selects a key of a Secret.
 */
export class SecretKeySelector extends Model<ISecretKeySelector> implements ISecretKeySelector {
  "key": string;
"name"?: string;
"optional"?: boolean;

constructor(data?: ModelData<ISecretKeySelector>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(SecretKeySelector, validate as ValidateFunc<ISecretKeySelector>);

export type {
  ISecretKeySelector as IIoK8sApiCoreV1SecretKeySelector,
  SecretKeySelector as IoK8sApiCoreV1SecretKeySelector
};
