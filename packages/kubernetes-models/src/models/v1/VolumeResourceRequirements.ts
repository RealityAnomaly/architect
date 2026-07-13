import { IIoK8sApimachineryPkgApiResourceQuantity } from "../../apimachinery/api/resource/Quantity.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../_schemas/v1/VolumeResourceRequirements.js";

/**
 * VolumeResourceRequirements describes the storage resource requirements for a volume.
 */
export interface IVolumeResourceRequirements {
  /**
 * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
 */
"limits"?: {
  [key: string]: IIoK8sApimachineryPkgApiResourceQuantity;
};
/**
 * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
 */
"requests"?: {
  [key: string]: IIoK8sApimachineryPkgApiResourceQuantity;
};
}

/**
 * VolumeResourceRequirements describes the storage resource requirements for a volume.
 */
export class VolumeResourceRequirements extends Model<IVolumeResourceRequirements> implements IVolumeResourceRequirements {
  "limits"?: {
  [key: string]: IIoK8sApimachineryPkgApiResourceQuantity;
};
"requests"?: {
  [key: string]: IIoK8sApimachineryPkgApiResourceQuantity;
};

constructor(data?: ModelData<IVolumeResourceRequirements>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(VolumeResourceRequirements, validate as ValidateFunc<IVolumeResourceRequirements>);

export type {
  IVolumeResourceRequirements as IIoK8sApiCoreV1VolumeResourceRequirements,
  VolumeResourceRequirements as IoK8sApiCoreV1VolumeResourceRequirements
};
