import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../_schemas/IoK8sApiCoreV1LocalVolumeSource.js";

/**
 * Local represents directly-attached storage with node affinity
 */
export interface ILocalVolumeSource {
  /**
 * fsType is the filesystem type to mount. It applies only when the Path is a block device. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". The default value is to auto-select a filesystem if unspecified.
 */
"fsType"?: string;
/**
 * path of the full path to the volume on the node. It can be either a directory or block device (disk, partition, ...).
 */
"path": string;
}

/**
 * Local represents directly-attached storage with node affinity
 */
export class LocalVolumeSource extends Model<ILocalVolumeSource> implements ILocalVolumeSource {
  "fsType"?: string;
"path": string;

constructor(data?: ModelData<ILocalVolumeSource>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(LocalVolumeSource, validate as ValidateFunc<ILocalVolumeSource>);

export type {
  ILocalVolumeSource as IIoK8sApiCoreV1LocalVolumeSource,
  LocalVolumeSource as IoK8sApiCoreV1LocalVolumeSource
};
