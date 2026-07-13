import { IIoK8sApiApiserverinternalV1alpha1StorageVersionCondition } from "./StorageVersionCondition.ts";
import { IIoK8sApiApiserverinternalV1alpha1ServerStorageVersion } from "./ServerStorageVersion.ts";
import { ModelData, Model, setValidateFunc } from "@glassway/kubernetes-types/model";
import { ValidateFunc } from "@glassway/kubernetes-types/validate";
import { validate } from "../../_schemas/internal.apiserver.k8s.io/v1alpha1/StorageVersionStatus.js";

/**
 * API server instances report the versions they can decode and the version they encode objects to when persisting objects in the backend.
 */
export interface IStorageVersionStatus {
  /**
 * commonEncodingVersion is set to an encoding storage version if all API server instances share that same version. If they don't share one storage version, this field is left empty. API servers should finish updating its storageVersionStatus entry before serving write operations, so that this field will be in sync with the reality.
 */
"commonEncodingVersion"?: string;
/**
 * conditions lists the latest available observations of the storageVersion's state.
 */
"conditions"?: Array<IIoK8sApiApiserverinternalV1alpha1StorageVersionCondition>;
/**
 * storageVersions lists the reported versions per API server instance.
 */
"storageVersions"?: Array<IIoK8sApiApiserverinternalV1alpha1ServerStorageVersion>;
}

/**
 * API server instances report the versions they can decode and the version they encode objects to when persisting objects in the backend.
 */
export class StorageVersionStatus extends Model<IStorageVersionStatus> implements IStorageVersionStatus {
  "commonEncodingVersion"?: string;
"conditions"?: Array<IIoK8sApiApiserverinternalV1alpha1StorageVersionCondition>;
"storageVersions"?: Array<IIoK8sApiApiserverinternalV1alpha1ServerStorageVersion>;

constructor(data?: ModelData<IStorageVersionStatus>) {
  super();

  this.setDefinedProps(data);
}
}

setValidateFunc(StorageVersionStatus, validate as ValidateFunc<IStorageVersionStatus>);

export type {
  IStorageVersionStatus as IIoK8sApiApiserverinternalV1alpha1StorageVersionStatus,
  StorageVersionStatus as IoK8sApiApiserverinternalV1alpha1StorageVersionStatus
};
