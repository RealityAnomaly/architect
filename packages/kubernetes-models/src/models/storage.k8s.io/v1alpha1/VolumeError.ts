import { IIoK8sApimachineryPkgApisMetaV1Time } from "../../../apimachinery/apis/meta/v1/Time.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/storage.k8s.io/v1alpha1/VolumeError.js";

/**
 * VolumeError captures an error encountered during a volume operation.
 */
export interface IVolumeError {
  /**
 * String detailing the error encountered during Attach or Detach operation. This string maybe logged, so it should not contain sensitive information.
 */
"message"?: string;
/**
 * Time the error was encountered.
 */
"time"?: IIoK8sApimachineryPkgApisMetaV1Time;
}

/**
 * VolumeError captures an error encountered during a volume operation.
 */
export class VolumeError extends Model<IVolumeError> implements IVolumeError {
  "message"?: string;
"time"?: IIoK8sApimachineryPkgApisMetaV1Time;

constructor(data?: ModelData<IVolumeError>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(VolumeError, validate as ValidateFunc<IVolumeError>);

export type {
  IVolumeError as IIoK8sApiStorageV1alpha1VolumeError,
  VolumeError as IoK8sApiStorageV1alpha1VolumeError
};
