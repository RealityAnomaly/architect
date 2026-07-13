import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../_schemas/IoK8sApiCoreV1ModifyVolumeStatus.js";

/**
 * ModifyVolumeStatus represents the status object of ControllerModifyVolume operation
 */
export interface IModifyVolumeStatus {
  /**
 * status is the status of the ControllerModifyVolume operation. It can be in any of following states:
 *  - Pending
 *    Pending indicates that the PersistentVolumeClaim cannot be modified due to unmet requirements, such as
 *    the specified VolumeAttributesClass not existing.
 *  - InProgress
 *    InProgress indicates that the volume is being modified.
 *  - Infeasible
 *   Infeasible indicates that the request has been rejected as invalid by the CSI driver. To
 * 	  resolve the error, a valid VolumeAttributesClass needs to be specified.
 * Note: New statuses can be added in the future. Consumers should check for unknown statuses and fail appropriately.
 */
"status": string;
/**
 * targetVolumeAttributesClassName is the name of the VolumeAttributesClass the PVC currently being reconciled
 */
"targetVolumeAttributesClassName"?: string;
}

/**
 * ModifyVolumeStatus represents the status object of ControllerModifyVolume operation
 */
export class ModifyVolumeStatus extends Model<IModifyVolumeStatus> implements IModifyVolumeStatus {
  "status": string;
"targetVolumeAttributesClassName"?: string;

constructor(data?: ModelData<IModifyVolumeStatus>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(ModifyVolumeStatus, validate as ValidateFunc<IModifyVolumeStatus>);

export type {
  IModifyVolumeStatus as IIoK8sApiCoreV1ModifyVolumeStatus,
  ModifyVolumeStatus as IoK8sApiCoreV1ModifyVolumeStatus
};
