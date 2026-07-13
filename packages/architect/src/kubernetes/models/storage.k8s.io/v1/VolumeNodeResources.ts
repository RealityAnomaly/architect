import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiStorageV1VolumeNodeResources.js";

/**
 * VolumeNodeResources is a set of resource limits for scheduling of volumes.
 */
export interface IVolumeNodeResources {
  /**
 * count indicates the maximum number of unique volumes managed by the CSI driver that can be used on a node. A volume that is both attached and mounted on a node is considered to be used once, not twice. The same rule applies for a unique volume that is shared among multiple pods on the same node. If this field is not specified, then the supported number of volumes on this node is unbounded.
 */
"count"?: number;
}

/**
 * VolumeNodeResources is a set of resource limits for scheduling of volumes.
 */
export class VolumeNodeResources extends Model<IVolumeNodeResources> implements IVolumeNodeResources {
  "count"?: number;

constructor(data?: ModelData<IVolumeNodeResources>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(VolumeNodeResources, validate as ValidateFunc<IVolumeNodeResources>);

export type {
  IVolumeNodeResources as IIoK8sApiStorageV1VolumeNodeResources,
  VolumeNodeResources as IoK8sApiStorageV1VolumeNodeResources
};
