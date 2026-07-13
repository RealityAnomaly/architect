import { IIoK8sApiStorageV1alpha1VolumeError } from "./VolumeError.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiStorageV1alpha1VolumeAttachmentStatus.js";

/**
 * VolumeAttachmentStatus is the status of a VolumeAttachment request.
 */
export interface IVolumeAttachmentStatus {
  /**
 * The last error encountered during attach operation, if any. This field must only be set by the entity completing the attach operation, i.e. the external-attacher.
 */
"attachError"?: IIoK8sApiStorageV1alpha1VolumeError;
/**
 * Indicates the volume is successfully attached. This field must only be set by the entity completing the attach operation, i.e. the external-attacher.
 */
"attached": boolean;
/**
 * Upon successful attach, this field is populated with any information returned by the attach operation that must be passed into subsequent WaitForAttach or Mount calls. This field must only be set by the entity completing the attach operation, i.e. the external-attacher.
 */
"attachmentMetadata"?: {
  [key: string]: string;
};
/**
 * The last error encountered during detach operation, if any. This field must only be set by the entity completing the detach operation, i.e. the external-attacher.
 */
"detachError"?: IIoK8sApiStorageV1alpha1VolumeError;
}

/**
 * VolumeAttachmentStatus is the status of a VolumeAttachment request.
 */
export class VolumeAttachmentStatus extends Model<IVolumeAttachmentStatus> implements IVolumeAttachmentStatus {
  "attachError"?: IIoK8sApiStorageV1alpha1VolumeError;
"attached": boolean;
"attachmentMetadata"?: {
  [key: string]: string;
};
"detachError"?: IIoK8sApiStorageV1alpha1VolumeError;

constructor(data?: ModelData<IVolumeAttachmentStatus>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(VolumeAttachmentStatus, validate as ValidateFunc<IVolumeAttachmentStatus>);

export type {
  IVolumeAttachmentStatus as IIoK8sApiStorageV1alpha1VolumeAttachmentStatus,
  VolumeAttachmentStatus as IoK8sApiStorageV1alpha1VolumeAttachmentStatus
};
