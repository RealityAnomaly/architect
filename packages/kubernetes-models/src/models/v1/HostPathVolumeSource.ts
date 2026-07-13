import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../_schemas/v1/HostPathVolumeSource.js";

/**
 * Represents a host path mapped into a pod. Host path volumes do not support ownership management or SELinux relabeling.
 */
export interface IHostPathVolumeSource {
  /**
 * path of the directory on the host. If the path is a symlink, it will follow the link to the real path. More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath
 */
"path": string;
/**
 * type for HostPath Volume Defaults to "" More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath
 */
"type"?: string;
}

/**
 * Represents a host path mapped into a pod. Host path volumes do not support ownership management or SELinux relabeling.
 */
export class HostPathVolumeSource extends Model<IHostPathVolumeSource> implements IHostPathVolumeSource {
  "path": string;
"type"?: string;

constructor(data?: ModelData<IHostPathVolumeSource>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(HostPathVolumeSource, validate as ValidateFunc<IHostPathVolumeSource>);

export type {
  IHostPathVolumeSource as IIoK8sApiCoreV1HostPathVolumeSource,
  HostPathVolumeSource as IoK8sApiCoreV1HostPathVolumeSource
};
