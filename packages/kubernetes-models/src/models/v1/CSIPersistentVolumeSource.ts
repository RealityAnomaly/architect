import { IIoK8sApiCoreV1SecretReference } from "./SecretReference.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../_schemas/v1/CSIPersistentVolumeSource.js";

/**
 * Represents storage that is managed by an external CSI volume driver
 */
export interface ICSIPersistentVolumeSource {
  /**
 * controllerExpandSecretRef is a reference to the secret object containing sensitive information to pass to the CSI driver to complete the CSI ControllerExpandVolume call. This field is optional, and may be empty if no secret is required. If the secret object contains more than one secret, all secrets are passed.
 */
"controllerExpandSecretRef"?: IIoK8sApiCoreV1SecretReference;
/**
 * controllerPublishSecretRef is a reference to the secret object containing sensitive information to pass to the CSI driver to complete the CSI ControllerPublishVolume and ControllerUnpublishVolume calls. This field is optional, and may be empty if no secret is required. If the secret object contains more than one secret, all secrets are passed.
 */
"controllerPublishSecretRef"?: IIoK8sApiCoreV1SecretReference;
/**
 * driver is the name of the driver to use for this volume. Required.
 */
"driver": string;
/**
 * fsType to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs".
 */
"fsType"?: string;
/**
 * nodeExpandSecretRef is a reference to the secret object containing sensitive information to pass to the CSI driver to complete the CSI NodeExpandVolume call. This field is optional, may be omitted if no secret is required. If the secret object contains more than one secret, all secrets are passed.
 */
"nodeExpandSecretRef"?: IIoK8sApiCoreV1SecretReference;
/**
 * nodePublishSecretRef is a reference to the secret object containing sensitive information to pass to the CSI driver to complete the CSI NodePublishVolume and NodeUnpublishVolume calls. This field is optional, and may be empty if no secret is required. If the secret object contains more than one secret, all secrets are passed.
 */
"nodePublishSecretRef"?: IIoK8sApiCoreV1SecretReference;
/**
 * nodeStageSecretRef is a reference to the secret object containing sensitive information to pass to the CSI driver to complete the CSI NodeStageVolume and NodeStageVolume and NodeUnstageVolume calls. This field is optional, and may be empty if no secret is required. If the secret object contains more than one secret, all secrets are passed.
 */
"nodeStageSecretRef"?: IIoK8sApiCoreV1SecretReference;
/**
 * readOnly value to pass to ControllerPublishVolumeRequest. Defaults to false (read/write).
 */
"readOnly"?: boolean;
/**
 * volumeAttributes of the volume to publish.
 */
"volumeAttributes"?: {
  [key: string]: string;
};
/**
 * volumeHandle is the unique volume name returned by the CSI volume plugin’s CreateVolume to refer to the volume on all subsequent calls. Required.
 */
"volumeHandle": string;
}

/**
 * Represents storage that is managed by an external CSI volume driver
 */
export class CSIPersistentVolumeSource extends Model<ICSIPersistentVolumeSource> implements ICSIPersistentVolumeSource {
  "controllerExpandSecretRef"?: IIoK8sApiCoreV1SecretReference;
"controllerPublishSecretRef"?: IIoK8sApiCoreV1SecretReference;
"driver": string;
"fsType"?: string;
"nodeExpandSecretRef"?: IIoK8sApiCoreV1SecretReference;
"nodePublishSecretRef"?: IIoK8sApiCoreV1SecretReference;
"nodeStageSecretRef"?: IIoK8sApiCoreV1SecretReference;
"readOnly"?: boolean;
"volumeAttributes"?: {
  [key: string]: string;
};
"volumeHandle": string;

constructor(data?: ModelData<ICSIPersistentVolumeSource>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(CSIPersistentVolumeSource, validate as ValidateFunc<ICSIPersistentVolumeSource>);

export type {
  ICSIPersistentVolumeSource as IIoK8sApiCoreV1CSIPersistentVolumeSource,
  CSIPersistentVolumeSource as IoK8sApiCoreV1CSIPersistentVolumeSource
};
