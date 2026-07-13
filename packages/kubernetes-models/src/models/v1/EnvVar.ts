import { IIoK8sApiCoreV1EnvVarSource } from "./EnvVarSource.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../_schemas/v1/EnvVar.js";

/**
 * EnvVar represents an environment variable present in a Container.
 */
export interface IEnvVar {
  /**
 * Name of the environment variable. May consist of any printable ASCII characters except '='.
 */
"name": string;
/**
 * Variable references $(VAR_NAME) are expanded using the previously defined environment variables in the container and any service environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. "$$(VAR_NAME)" will produce the string literal "$(VAR_NAME)". Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to "".
 */
"value"?: string;
/**
 * Source for the environment variable's value. Cannot be used if value is not empty.
 */
"valueFrom"?: IIoK8sApiCoreV1EnvVarSource;
}

/**
 * EnvVar represents an environment variable present in a Container.
 */
export class EnvVar extends Model<IEnvVar> implements IEnvVar {
  "name": string;
"value"?: string;
"valueFrom"?: IIoK8sApiCoreV1EnvVarSource;

constructor(data?: ModelData<IEnvVar>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(EnvVar, validate as ValidateFunc<IEnvVar>);

export type {
  IEnvVar as IIoK8sApiCoreV1EnvVar,
  EnvVar as IoK8sApiCoreV1EnvVar
};
