import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../_schemas/v1/VolumeDevice.js";

/**
 * volumeDevice describes a mapping of a raw block device within a container.
 */
export interface IVolumeDevice {
  /**
 * devicePath is the path inside of the container that the device will be mapped to.
 */
"devicePath": string;
/**
 * name must match the name of a persistentVolumeClaim in the pod
 */
"name": string;
}

/**
 * volumeDevice describes a mapping of a raw block device within a container.
 */
export class VolumeDevice extends Model<IVolumeDevice> implements IVolumeDevice {
  "devicePath": string;
"name": string;

constructor(data?: ModelData<IVolumeDevice>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(VolumeDevice, validate as ValidateFunc<IVolumeDevice>);

export type {
  IVolumeDevice as IIoK8sApiCoreV1VolumeDevice,
  VolumeDevice as IoK8sApiCoreV1VolumeDevice
};
