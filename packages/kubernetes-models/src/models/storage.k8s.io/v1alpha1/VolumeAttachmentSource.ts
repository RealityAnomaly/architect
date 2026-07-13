import { IIoK8sApiCoreV1PersistentVolumeSpec } from "../../v1/PersistentVolumeSpec.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/storage.k8s.io/v1alpha1/VolumeAttachmentSource.js";

/**
 * VolumeAttachmentSource represents a volume that should be attached. Right now only PersistenVolumes can be attached via external attacher, in future we may allow also inline volumes in pods. Exactly one member can be set.
 */
export interface IVolumeAttachmentSource {
  /**
 * inlineVolumeSpec contains all the information necessary to attach a persistent volume defined by a pod's inline VolumeSource. This field is populated only for the CSIMigration feature. It contains translated fields from a pod's inline VolumeSource to a PersistentVolumeSpec. This field is alpha-level and is only honored by servers that enabled the CSIMigration feature.
 */
"inlineVolumeSpec"?: IIoK8sApiCoreV1PersistentVolumeSpec;
/**
 * Name of the persistent volume to attach.
 */
"persistentVolumeName"?: string;
}

/**
 * VolumeAttachmentSource represents a volume that should be attached. Right now only PersistenVolumes can be attached via external attacher, in future we may allow also inline volumes in pods. Exactly one member can be set.
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
  IVolumeAttachmentSource as IIoK8sApiStorageV1alpha1VolumeAttachmentSource,
  VolumeAttachmentSource as IoK8sApiStorageV1alpha1VolumeAttachmentSource
};
