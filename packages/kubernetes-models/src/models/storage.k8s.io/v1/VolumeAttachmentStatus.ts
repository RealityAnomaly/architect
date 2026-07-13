import { IIoK8sApiStorageV1VolumeError } from "./VolumeError.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/storage.k8s.io/v1/VolumeAttachmentStatus.js";

/**
 * VolumeAttachmentStatus is the status of a VolumeAttachment request.
 */
export interface IVolumeAttachmentStatus {
  /**
 * attachError represents the last error encountered during attach operation, if any. This field must only be set by the entity completing the attach operation, i.e. the external-attacher.
 */
"attachError"?: IIoK8sApiStorageV1VolumeError;
/**
 * attached indicates the volume is successfully attached. This field must only be set by the entity completing the attach operation, i.e. the external-attacher.
 */
"attached": boolean;
/**
 * attachmentMetadata is populated with any information returned by the attach operation, upon successful attach, that must be passed into subsequent WaitForAttach or Mount calls. This field must only be set by the entity completing the attach operation, i.e. the external-attacher.
 */
"attachmentMetadata"?: {
  [key: string]: string;
};
/**
 * detachError represents the last error encountered during detach operation, if any. This field must only be set by the entity completing the detach operation, i.e. the external-attacher.
 */
"detachError"?: IIoK8sApiStorageV1VolumeError;
}

/**
 * VolumeAttachmentStatus is the status of a VolumeAttachment request.
 */
export class VolumeAttachmentStatus extends Model<IVolumeAttachmentStatus> implements IVolumeAttachmentStatus {
  "attachError"?: IIoK8sApiStorageV1VolumeError;
"attached": boolean;
"attachmentMetadata"?: {
  [key: string]: string;
};
"detachError"?: IIoK8sApiStorageV1VolumeError;

constructor(data?: ModelData<IVolumeAttachmentStatus>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(VolumeAttachmentStatus, validate as ValidateFunc<IVolumeAttachmentStatus>);

export type {
  IVolumeAttachmentStatus as IIoK8sApiStorageV1VolumeAttachmentStatus,
  VolumeAttachmentStatus as IoK8sApiStorageV1VolumeAttachmentStatus
};
