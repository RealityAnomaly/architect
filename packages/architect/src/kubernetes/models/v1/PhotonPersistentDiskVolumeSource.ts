import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../_schemas/IoK8sApiCoreV1PhotonPersistentDiskVolumeSource.js";

/**
 * Represents a Photon Controller persistent disk resource.
 */
export interface IPhotonPersistentDiskVolumeSource {
  /**
 * fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.
 */
"fsType"?: string;
/**
 * pdID is the ID that identifies Photon Controller persistent disk
 */
"pdID": string;
}

/**
 * Represents a Photon Controller persistent disk resource.
 */
export class PhotonPersistentDiskVolumeSource extends Model<IPhotonPersistentDiskVolumeSource> implements IPhotonPersistentDiskVolumeSource {
  "fsType"?: string;
"pdID": string;

constructor(data?: ModelData<IPhotonPersistentDiskVolumeSource>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(PhotonPersistentDiskVolumeSource, validate as ValidateFunc<IPhotonPersistentDiskVolumeSource>);

export type {
  IPhotonPersistentDiskVolumeSource as IIoK8sApiCoreV1PhotonPersistentDiskVolumeSource,
  PhotonPersistentDiskVolumeSource as IoK8sApiCoreV1PhotonPersistentDiskVolumeSource
};
