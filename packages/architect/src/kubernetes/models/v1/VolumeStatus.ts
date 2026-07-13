import { IIoK8sApiCoreV1ImageVolumeStatus } from "./ImageVolumeStatus.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../_schemas/IoK8sApiCoreV1VolumeStatus.js";

/**
 * VolumeStatus represents the status of a mounted volume. At most one of its members must be specified.
 */
export interface IVolumeStatus {
  /**
 * image represents an OCI object (a container image or artifact) pulled and mounted on the kubelet's host machine.
 */
"image"?: IIoK8sApiCoreV1ImageVolumeStatus;
}

/**
 * VolumeStatus represents the status of a mounted volume. At most one of its members must be specified.
 */
export class VolumeStatus extends Model<IVolumeStatus> implements IVolumeStatus {
  "image"?: IIoK8sApiCoreV1ImageVolumeStatus;

constructor(data?: ModelData<IVolumeStatus>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(VolumeStatus, validate as ValidateFunc<IVolumeStatus>);

export type {
  IVolumeStatus as IIoK8sApiCoreV1VolumeStatus,
  VolumeStatus as IoK8sApiCoreV1VolumeStatus
};
