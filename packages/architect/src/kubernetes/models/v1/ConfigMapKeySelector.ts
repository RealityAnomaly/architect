import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../_schemas/IoK8sApiCoreV1ConfigMapKeySelector.js";

/**
 * Selects a key from a ConfigMap.
 */
export interface IConfigMapKeySelector {
  /**
 * The key to select.
 */
"key": string;
/**
 * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
 */
"name"?: string;
/**
 * Specify whether the ConfigMap or its key must be defined
 */
"optional"?: boolean;
}

/**
 * Selects a key from a ConfigMap.
 */
export class ConfigMapKeySelector extends Model<IConfigMapKeySelector> implements IConfigMapKeySelector {
  "key": string;
"name"?: string;
"optional"?: boolean;

constructor(data?: ModelData<IConfigMapKeySelector>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(ConfigMapKeySelector, validate as ValidateFunc<IConfigMapKeySelector>);

export type {
  IConfigMapKeySelector as IIoK8sApiCoreV1ConfigMapKeySelector,
  ConfigMapKeySelector as IoK8sApiCoreV1ConfigMapKeySelector
};
