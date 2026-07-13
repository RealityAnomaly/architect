import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../_schemas/v1/ImageVolumeStatus.js";

/**
 * ImageVolumeStatus represents the image-based volume status.
 */
export interface IImageVolumeStatus {
  /**
 * ImageRef is the digest of the image used for this volume. It should have a value that's similar to the pod's status.containerStatuses[i].imageID. The ImageRef length should not exceed 256 characters.
 */
"imageRef": string;
}

/**
 * ImageVolumeStatus represents the image-based volume status.
 */
export class ImageVolumeStatus extends Model<IImageVolumeStatus> implements IImageVolumeStatus {
  "imageRef": string;

constructor(data?: ModelData<IImageVolumeStatus>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(ImageVolumeStatus, validate as ValidateFunc<IImageVolumeStatus>);

export type {
  IImageVolumeStatus as IIoK8sApiCoreV1ImageVolumeStatus,
  ImageVolumeStatus as IoK8sApiCoreV1ImageVolumeStatus
};
