import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../_schemas/v1/SecretReference.js";

/**
 * SecretReference represents a Secret Reference. It has enough information to retrieve secret in any namespace
 */
export interface ISecretReference {
  /**
 * name is unique within a namespace to reference a secret resource.
 */
"name"?: string;
/**
 * namespace defines the space within which the secret name must be unique.
 */
"namespace"?: string;
}

/**
 * SecretReference represents a Secret Reference. It has enough information to retrieve secret in any namespace
 */
export class SecretReference extends Model<ISecretReference> implements ISecretReference {
  "name"?: string;
"namespace"?: string;

constructor(data?: ModelData<ISecretReference>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(SecretReference, validate as ValidateFunc<ISecretReference>);

export type {
  ISecretReference as IIoK8sApiCoreV1SecretReference,
  SecretReference as IoK8sApiCoreV1SecretReference
};
