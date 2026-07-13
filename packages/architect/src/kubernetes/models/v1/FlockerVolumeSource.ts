import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../_schemas/IoK8sApiCoreV1FlockerVolumeSource.js";

/**
 * Represents a Flocker volume mounted by the Flocker agent. One and only one of datasetName and datasetUUID should be set. Flocker volumes do not support ownership management or SELinux relabeling.
 */
export interface IFlockerVolumeSource {
  /**
 * datasetName is Name of the dataset stored as metadata -> name on the dataset for Flocker should be considered as deprecated
 */
"datasetName"?: string;
/**
 * datasetUUID is the UUID of the dataset. This is unique identifier of a Flocker dataset
 */
"datasetUUID"?: string;
}

/**
 * Represents a Flocker volume mounted by the Flocker agent. One and only one of datasetName and datasetUUID should be set. Flocker volumes do not support ownership management or SELinux relabeling.
 */
export class FlockerVolumeSource extends Model<IFlockerVolumeSource> implements IFlockerVolumeSource {
  "datasetName"?: string;
"datasetUUID"?: string;

constructor(data?: ModelData<IFlockerVolumeSource>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(FlockerVolumeSource, validate as ValidateFunc<IFlockerVolumeSource>);

export type {
  IFlockerVolumeSource as IIoK8sApiCoreV1FlockerVolumeSource,
  FlockerVolumeSource as IoK8sApiCoreV1FlockerVolumeSource
};
