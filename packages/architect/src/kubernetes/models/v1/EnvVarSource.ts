import { IIoK8sApiCoreV1ConfigMapKeySelector } from "./ConfigMapKeySelector.ts";
import { IIoK8sApiCoreV1ObjectFieldSelector } from "./ObjectFieldSelector.ts";
import { IIoK8sApiCoreV1FileKeySelector } from "./FileKeySelector.ts";
import { IIoK8sApiCoreV1ResourceFieldSelector } from "./ResourceFieldSelector.ts";
import { IIoK8sApiCoreV1SecretKeySelector } from "./SecretKeySelector.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../_schemas/IoK8sApiCoreV1EnvVarSource.js";

/**
 * EnvVarSource represents a source for the value of an EnvVar.
 */
export interface IEnvVarSource {
  /**
 * Selects a key of a ConfigMap.
 */
"configMapKeyRef"?: IIoK8sApiCoreV1ConfigMapKeySelector;
/**
 * Selects a field of the pod: supports metadata.name, metadata.namespace, `metadata.labels['<KEY>']`, `metadata.annotations['<KEY>']`, spec.nodeName, spec.serviceAccountName, status.hostIP, status.podIP, status.podIPs.
 */
"fieldRef"?: IIoK8sApiCoreV1ObjectFieldSelector;
/**
 * FileKeyRef selects a key of the env file. Requires the EnvFiles feature gate to be enabled.
 */
"fileKeyRef"?: IIoK8sApiCoreV1FileKeySelector;
/**
 * Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, limits.ephemeral-storage, requests.cpu, requests.memory and requests.ephemeral-storage) are currently supported.
 */
"resourceFieldRef"?: IIoK8sApiCoreV1ResourceFieldSelector;
/**
 * Selects a key of a secret in the pod's namespace
 */
"secretKeyRef"?: IIoK8sApiCoreV1SecretKeySelector;
}

/**
 * EnvVarSource represents a source for the value of an EnvVar.
 */
export class EnvVarSource extends Model<IEnvVarSource> implements IEnvVarSource {
  "configMapKeyRef"?: IIoK8sApiCoreV1ConfigMapKeySelector;
"fieldRef"?: IIoK8sApiCoreV1ObjectFieldSelector;
"fileKeyRef"?: IIoK8sApiCoreV1FileKeySelector;
"resourceFieldRef"?: IIoK8sApiCoreV1ResourceFieldSelector;
"secretKeyRef"?: IIoK8sApiCoreV1SecretKeySelector;

constructor(data?: ModelData<IEnvVarSource>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(EnvVarSource, validate as ValidateFunc<IEnvVarSource>);

export type {
  IEnvVarSource as IIoK8sApiCoreV1EnvVarSource,
  EnvVarSource as IoK8sApiCoreV1EnvVarSource
};
