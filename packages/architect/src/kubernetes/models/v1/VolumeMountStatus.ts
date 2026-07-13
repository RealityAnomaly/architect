import { IIoK8sApiCoreV1VolumeStatus } from "./VolumeStatus.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../_schemas/IoK8sApiCoreV1VolumeMountStatus.js";

/**
 * VolumeMountStatus shows status of volume mounts.
 */
export interface IVolumeMountStatus {
  /**
 * MountPath corresponds to the original VolumeMount.
 */
"mountPath": string;
/**
 * Name corresponds to the name of the original VolumeMount.
 */
"name": string;
/**
 * ReadOnly corresponds to the original VolumeMount.
 */
"readOnly"?: boolean;
/**
 * RecursiveReadOnly must be set to Disabled, Enabled, or unspecified (for non-readonly mounts). An IfPossible value in the original VolumeMount must be translated to Disabled or Enabled, depending on the mount result.
 */
"recursiveReadOnly"?: string;
/**
 * volumeStatus represents volume-type-specific status about the mounted volume.
 */
"volumeStatus"?: IIoK8sApiCoreV1VolumeStatus;
}

/**
 * VolumeMountStatus shows status of volume mounts.
 */
export class VolumeMountStatus extends Model<IVolumeMountStatus> implements IVolumeMountStatus {
  "mountPath": string;
"name": string;
"readOnly"?: boolean;
"recursiveReadOnly"?: string;
"volumeStatus"?: IIoK8sApiCoreV1VolumeStatus;

constructor(data?: ModelData<IVolumeMountStatus>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(VolumeMountStatus, validate as ValidateFunc<IVolumeMountStatus>);

export type {
  IVolumeMountStatus as IIoK8sApiCoreV1VolumeMountStatus,
  VolumeMountStatus as IoK8sApiCoreV1VolumeMountStatus
};
