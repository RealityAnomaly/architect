import { IIoK8sApiCoreV1PersistentVolumeSpec } from "../../v1/PersistentVolumeSpec.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiStorageV1VolumeAttachmentSource.js";

/**
 * VolumeAttachmentSource represents a volume that should be attached. Right now only PersistentVolumes can be attached via external attacher, in the future we may allow also inline volumes in pods. Exactly one member can be set.
 */
export interface IVolumeAttachmentSource {
  /**
 * inlineVolumeSpec contains all the information necessary to attach a persistent volume defined by a pod's inline VolumeSource. This field is populated only for the CSIMigration feature. It contains translated fields from a pod's inline VolumeSource to a PersistentVolumeSpec. This field is beta-level and is only honored by servers that enabled the CSIMigration feature.
 */
"inlineVolumeSpec"?: IIoK8sApiCoreV1PersistentVolumeSpec;
/**
 * persistentVolumeName represents the name of the persistent volume to attach.
 */
"persistentVolumeName"?: string;
}

/**
 * VolumeAttachmentSource represents a volume that should be attached. Right now only PersistentVolumes can be attached via external attacher, in the future we may allow also inline volumes in pods. Exactly one member can be set.
 */
export class VolumeAttachmentSource extends Model<IVolumeAttachmentSource> implements IVolumeAttachmentSource {
  "inlineVolumeSpec"?: IIoK8sApiCoreV1PersistentVolumeSpec;
"persistentVolumeName"?: string;

constructor(data?: ModelData<IVolumeAttachmentSource>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(VolumeAttachmentSource, validate as ValidateFunc<IVolumeAttachmentSource>);

export type {
  IVolumeAttachmentSource as IIoK8sApiStorageV1VolumeAttachmentSource,
  VolumeAttachmentSource as IoK8sApiStorageV1VolumeAttachmentSource
};
