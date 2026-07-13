import { IIoK8sApiCoreV1KeyToPath } from "./KeyToPath.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../_schemas/IoK8sApiCoreV1SecretProjection.js";

/**
 * Adapts a secret into a projected volume.
 * 
 * The contents of the target Secret's Data field will be presented in a projected volume as files using the keys in the Data field as the file names. Note that this is identical to a secret volume source without the default mode.
 */
export interface ISecretProjection {
  /**
 * items if unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
 */
"items"?: Array<IIoK8sApiCoreV1KeyToPath>;
/**
 * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
 */
"name"?: string;
/**
 * optional field specify whether the Secret or its key must be defined
 */
"optional"?: boolean;
}

/**
 * Adapts a secret into a projected volume.
 * 
 * The contents of the target Secret's Data field will be presented in a projected volume as files using the keys in the Data field as the file names. Note that this is identical to a secret volume source without the default mode.
 */
export class SecretProjection extends Model<ISecretProjection> implements ISecretProjection {
  "items"?: Array<IIoK8sApiCoreV1KeyToPath>;
"name"?: string;
"optional"?: boolean;

constructor(data?: ModelData<ISecretProjection>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(SecretProjection, validate as ValidateFunc<ISecretProjection>);

export type {
  ISecretProjection as IIoK8sApiCoreV1SecretProjection,
  SecretProjection as IoK8sApiCoreV1SecretProjection
};
