import { IIoK8sApiCoreV1DownwardAPIVolumeFile } from "./DownwardAPIVolumeFile.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../_schemas/IoK8sApiCoreV1DownwardAPIProjection.js";

/**
 * Represents downward API info for projecting into a projected volume. Note that this is identical to a downwardAPI volume source without the default mode.
 */
export interface IDownwardAPIProjection {
  /**
 * Items is a list of DownwardAPIVolume file
 */
"items"?: Array<IIoK8sApiCoreV1DownwardAPIVolumeFile>;
}

/**
 * Represents downward API info for projecting into a projected volume. Note that this is identical to a downwardAPI volume source without the default mode.
 */
export class DownwardAPIProjection extends Model<IDownwardAPIProjection> implements IDownwardAPIProjection {
  "items"?: Array<IIoK8sApiCoreV1DownwardAPIVolumeFile>;

constructor(data?: ModelData<IDownwardAPIProjection>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(DownwardAPIProjection, validate as ValidateFunc<IDownwardAPIProjection>);

export type {
  IDownwardAPIProjection as IIoK8sApiCoreV1DownwardAPIProjection,
  DownwardAPIProjection as IoK8sApiCoreV1DownwardAPIProjection
};
