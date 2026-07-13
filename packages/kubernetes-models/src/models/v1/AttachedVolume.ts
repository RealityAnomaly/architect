import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../_schemas/v1/AttachedVolume.js";

/**
 * AttachedVolume describes a volume attached to a node
 */
export interface IAttachedVolume {
  /**
 * DevicePath represents the device path where the volume should be available
 */
"devicePath": string;
/**
 * Name of the attached volume
 */
"name": string;
}

/**
 * AttachedVolume describes a volume attached to a node
 */
export class AttachedVolume extends Model<IAttachedVolume> implements IAttachedVolume {
  "devicePath": string;
"name": string;

constructor(data?: ModelData<IAttachedVolume>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(AttachedVolume, validate as ValidateFunc<IAttachedVolume>);

export type {
  IAttachedVolume as IIoK8sApiCoreV1AttachedVolume,
  AttachedVolume as IoK8sApiCoreV1AttachedVolume
};
