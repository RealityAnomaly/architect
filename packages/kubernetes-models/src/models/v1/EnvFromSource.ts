import { IIoK8sApiCoreV1ConfigMapEnvSource } from "./ConfigMapEnvSource.ts";
import { IIoK8sApiCoreV1SecretEnvSource } from "./SecretEnvSource.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../_schemas/v1/EnvFromSource.js";

/**
 * EnvFromSource represents the source of a set of ConfigMaps or Secrets
 */
export interface IEnvFromSource {
  /**
 * The ConfigMap to select from
 */
"configMapRef"?: IIoK8sApiCoreV1ConfigMapEnvSource;
/**
 * Optional text to prepend to the name of each environment variable. May consist of any printable ASCII characters except '='.
 */
"prefix"?: string;
/**
 * The Secret to select from
 */
"secretRef"?: IIoK8sApiCoreV1SecretEnvSource;
}

/**
 * EnvFromSource represents the source of a set of ConfigMaps or Secrets
 */
export class EnvFromSource extends Model<IEnvFromSource> implements IEnvFromSource {
  "configMapRef"?: IIoK8sApiCoreV1ConfigMapEnvSource;
"prefix"?: string;
"secretRef"?: IIoK8sApiCoreV1SecretEnvSource;

constructor(data?: ModelData<IEnvFromSource>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(EnvFromSource, validate as ValidateFunc<IEnvFromSource>);

export type {
  IEnvFromSource as IIoK8sApiCoreV1EnvFromSource,
  EnvFromSource as IoK8sApiCoreV1EnvFromSource
};
