import { IIoK8sApimachineryPkgApisMetaV1Time } from "../../../apimachinery/apis/meta/v1/Time.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/architect/kubernetes/types/model";
import { ValidateFunc } from "@glassway/architect/kubernetes/validate";
import { validate } from "../../_schemas/IoK8sApiStorageV1VolumeError.js";

/**
 * VolumeError captures an error encountered during a volume operation.
 */
export interface IVolumeError {
  /**
 * errorCode is a numeric gRPC code representing the error encountered during Attach or Detach operations.
 * 
 * This field requires the MutableCSINodeAllocatableCount feature gate being enabled to be set.
 */
"errorCode"?: number;
/**
 * message represents the error encountered during Attach or Detach operation. This string may be logged, so it should not contain sensitive information.
 */
"message"?: string;
/**
 * time represents the time the error was encountered.
 */
"time"?: IIoK8sApimachineryPkgApisMetaV1Time;
}

/**
 * VolumeError captures an error encountered during a volume operation.
 */
export class VolumeError extends Model<IVolumeError> implements IVolumeError {
  "errorCode"?: number;
"message"?: string;
"time"?: IIoK8sApimachineryPkgApisMetaV1Time;

constructor(data?: ModelData<IVolumeError>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(VolumeError, validate as ValidateFunc<IVolumeError>);

export type {
  IVolumeError as IIoK8sApiStorageV1VolumeError,
  VolumeError as IoK8sApiStorageV1VolumeError
};
